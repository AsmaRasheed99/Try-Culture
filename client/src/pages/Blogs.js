import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import { Button } from "@material-tailwind/react";
import Modal from "@mui/material/Modal";

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

const Blogs = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [productImage, setProductImage] = useState(null);

  const handleProductImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };


  const [User, setUser] = useState(null);
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
        const token = localStorage.getItem("auth");
        if (token) {
          const response = await axios.get("http://localhost:5000/protected", {
            headers: {
              Authorization: token,
            },
          });
          setUser(response.data.user.username);
          setUserId(response.data.user.id);
        }
        console.log(User);
      } catch (error) {
        console.error(error);
        // localStorage.removeItem("auth");
        // window.location.href = "http://localhost:3000/Login";
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
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
    fetchBlogs();
  }, []);

  const createNewBlog = async (e) => {
    e.preventDefault();
    console.log(newBlog.title, newBlog.content, newBlog.author);
    const formData = new FormData();
    formData.append("image", productImage);
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);
    formData.append("author", User);
    formData.append("userId", userId);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/createNewBlog",
        formData
        // {...newBlog, author: User, image: img,  userId: userId,   }
      );
      setOpen(false);
      handleClose();
      // updateProfileRefresh(response)
      // setModalOpen(false); // Close the modal

      const createdBlog = response.data;
      setBlogs([...blogs, createdBlog]);
      setNewBlog({
        // Image: productImage,
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
    console.log(userId);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto flex py-6">
        {/* Posts Section */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {blogs.map((blog) => (
            <article
              className="flex flex-col flex-wrap shadow my-4 w-full "
              key={blog._id}
            >
              <div className="hover:opacity-75 ">
                <img
                  src={`http://localhost:5000/${blog.image}`}
                  className="w-full h-96"
                  alt="Blog"
                />
              </div>
              <div className="bg-white w-full flex flex-col justify-start p-6">
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
                <p className=" text-gray-800 hover:text-black pt-3">
                  {blog.content}
                </p>
              </div>
            </article>
          ))}
        </section>
        {/* Sidebar Section  */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Share Your Experience</p>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mattis est eu odio sagittis tristique. Vestibulum ut finibus leo.
              In hac habitasse platea dictumst.
            </p>
            <div className="flex flex-col justify-center items-center">
              <Button
                className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-4"
                variant="text"
                onClick={handleOpen}
              >
                Share Your Experience
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Title"
                      className="input input-bordered input-info w-full max-w-xs mb-5"
                      value={newBlog.title}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, title: e.target.value })
                      }
                    />

                    <textarea
                      type="text"
                      placeholder="Content"
                      className="input input-bordered input-info input-lg w-full max-w-xs mb-5"
                      value={newBlog.content}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, content: e.target.value })
                      }
                    ></textarea>

                    {/* <input
                      type="file"
                      className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      accept="image/*"
                    /> */}
                    <input
                      className="file-upload-input mx-auto"
                      type="file"
                      name="image"
                      onChange={handleProductImageChange}
                      accept="image/*"
                      required
                    />
                    <Button
                      onClick={createNewBlog}
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
                  </div>
                </Box>
              </Modal>
            </div>
          </div>

          {/** */}
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Contact Us</p>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mattis est eu odio sagittis tristique. Vestibulum ut finibus leo.
              In hac habitasse platea dictumst.
            </p>
            <Link
              to="/ContactUs"
              className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-4"
            >
              Get in touch with us
            </Link>
          </div>
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mattis est eu odio sagittis tristique. Vestibulum ut finibus leo.
              In hac habitasse platea dictumst.
            </p>
            <Link
              to="/AboutUs"
              className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Blogs;
