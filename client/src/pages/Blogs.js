import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import { Button } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: " solid #f2f2f2",
  boxShadow: 3,
  p: 4,
};

const Blogs = ({ UserIdApp }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [BlogImage, setBlogImage] = useState(null);

  const handleBlogImageChange = (event) => {
    setBlogImage(event.target.files[0]);
  };

  const navigate = useNavigate();

  const [User, setUser] = useState(null);
  const [UserAll, setUserAll] = useState(null);
  const [userId, setUserId] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    image: "",
    title: "",
    content: "",
    author: null,
  });

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        axios
          .get(`http://localhost:5000/api/users/${UserIdApp}`)
          .then((response) => {
            setUserAll(response.data[0]);
            setUser(response.data[0].firstName);
            setUserId(response.data[0]._id);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } catch (error) {
        console.error(error);
      }
    };
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getAllBlogs"
        );
        const blogsData = response.data;
        setBlogs(blogsData);
      } catch (error) {
        console.error(error);
      }
    };
    if (localStorage.auth != null && UserIdApp) {
      fetchProtectedData();
    }
    fetchBlogs();
  }, [UserIdApp]);

  // append to allow us to send files in //POST//

  const createNewBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", BlogImage);
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);
    formData.append("author", User);
    formData.append("userId", userId);
    formData.append("UserImage", UserAll?.image);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/createNewBlog",
        formData
      );
      handleClose();

      const createdBlog = response.data;
      setBlogs([...blogs, createdBlog]);
      setNewBlog({
        title: "",
        content: "",
        author: "",
      });
      Swal.fire({
        title: `Your Blog was successfully submited`,
        icon: "success",
        confirmButtonText: "OK",
      });
      console.log("New blog created:", createdBlog);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "You have to be Logged in to create a new blog",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error.message);
    }
  };

  /// pagination

  const [currentBlogPage, setcurrentBlogPage] = useState(1);

  const handleBlogChangeArray = (event, page) => {
    setcurrentBlogPage(page);
  };

  const itemsPerPage = 1;

  const totalBlogPagesArray = Math.ceil(blogs.length / itemsPerPage);

  const blogsArray = blogs.slice().reverse();

  const startBlogIndexArray = (currentBlogPage - 1) * itemsPerPage;
  const endBlogIndexArray = startBlogIndexArray + itemsPerPage;
  const slicedBlogArray = blogsArray.slice(
    startBlogIndexArray,
    endBlogIndexArray
  );

  const handleBlog = (id) => {
    navigate(`/BlogDetails/${id}`);
  };
  return (
    <>
      <div className="container mx-auto  py-6 flex flex-col md:flex-col lg:flex-row">
        {/* Posts Section */}
        <section className="w-full lg:md:w-2/3 flex flex-col items-center px-3">
          {slicedBlogArray.map((blog) => (
            <article
              className="flex flex-col flex-wrap shadow my-4 lg:w-[70%] md:w-full w-full"
              key={blog._id}
              onClick={() => {
                handleBlog(blog._id);
              }}
            >
              <div className="hover:opacity-75 ">
                <img
                  src={`http://localhost:5000/${blog.image}`}
                  className="w-full h-96"
                  alt="Blog"
                />
              </div>
              <div className="bg-base-200 w-full flex flex-col justify-start p-6">
                <p className="text-3xl font-bold hover:text-gray-700 pb-4">
                  {blog.title}
                </p>
                <p className="text-sm pb-3">
                  By{" "}
                  <span className="font-semibold hover:text-gray-800">
                    {" "}
                    <Link>{blog.author}</Link>
                  </span>
                  <br></br>
                  Published on {blog.date}
                </p>
                <hr></hr>
                <p className=" text-gray-800 text-lg hover:text-black pt-3">
                  {blog.content.split(".").slice(0, 3).join(".")}
                </p>{" "}
                <Link className="text-blue-700 text-xl mt-2">
                  Continue Reading
                </Link>
              </div>
            </article>
          ))}
          <div className="flex flex-col justify-center items-center  mt-20 w-full">
            <Pagination
              count={totalBlogPagesArray}
              page={currentBlogPage}
              onChange={handleBlogChangeArray}
            />
          </div>
        </section>

        {/* Sidebar Section  */}
        <aside className="w-full lg:md:w-1/3 flex lg:flex-col md:flex-col flex-wrap items-center px-3">
          <div className="w-full bg-base-200 shadow flex flex-col my-4 p-6 md: h-72 lg:h-64 ">
            <p className="text-xl  font-semibold pb-5">Share Your Experience</p>
            <p className="pb-2 text-lg h-32">
              write about a resturant , shop , institute you found through our
              website , any event you attended or about any culture you would
              like to talk about.
            </p>
            <div className=" flex flex-col justify-center  ">
              {localStorage.auth !== undefined ? (
                <Button
                  className="w-full  bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-4"
                  variant="text"
                  onClick={handleOpen}
                >
                  Write a Blog
                </Button>
              ) : (
                <Link to="/Login">
                  <Button
              className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-4"
              variant="text"
                  >
                    Login to write a blog
                  </Button>
                </Link>
              )}

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <form className="flex flex-col" onSubmit={createNewBlog}>
                    <input
                      type="text"
                      placeholder="Title"
                      className="input input-bordered input-info w-full max-w-xs mb-5"
                      value={newBlog.title}
                      required
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, title: e.target.value })
                      }
                    />

                    <textarea
                      type="text"
                      placeholder="Content"
                      className="input input-bordered input-info input-lg w-full max-w-xs mb-5"
                      value={newBlog.content}
                      required
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, content: e.target.value })
                      }
                    ></textarea>

                    <input
                      className="file-upload-input mx-auto"
                      type="file"
                      name="image"
                      onChange={handleBlogImageChange}
                      accept="image/*"
                      required
                    />
                    <Button
                      type="submit"
                      className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-10"
                      variant="text"
                    >
                      submit
                    </Button>
                    <Button
                      className="w-full  text-[#0b3e45] border border-[#0b3e45] font-bold text-sm uppercase rounded hover:bg-[#0b3e45] hover:text-white flex items-center justify-center px-2 py-3 mt-4"
                      variant="text"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </form>
                </Box>
              </Modal>
            </div>
          </div>

          {/** */}
          <div className="w-full bg-base-200 shadow flex flex-col my-4 p-6  lg:h-64">
            <p className="text-xl  font-semibold pb-5">Contact Us</p>
            <p className="pb-2 text-lg h-32">
              If you have any advices or noticed anything that needed to be
              reported to us please feel free to contact us.
            </p>
            <HashLink
              to="/Contact#"
              className="w-full bg-cyan-600  text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-4"
            >
              Get in touch with us
            </HashLink>
          </div>
          <div className="w-full bg-base-200 shadow flex flex-col my-4 p-6  lg:h-64">
            <p className="text-xl font-semibold pb-5 ">About Us</p>
            <p className="pb-2 text-lg h-32">
              Are you curious about us and about Try A Culture , get to know us
              now
            </p>
            <HashLink
              smooth={true}
              to="/about#"
              className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </HashLink>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Blogs;
