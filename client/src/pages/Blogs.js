import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const Blogs = () => {

  const [modalOpen, setModalOpen] = useState(false); // New state variable

  const [img, setImg] = useState("");

  const onChange = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
    console.log(img);
  };
  const onLoad = (fileString) => {
    setImg(fileString);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
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
    try {
      const response = await axios.post(
        "http://localhost:5000/api/createNewBlog",
        {
          ...newBlog,
          author: User,
          image:img,
          userId: userId,
        }
      );
      const createdBlog = response.data;
      setBlogs([...blogs, createdBlog]);
      setNewBlog({
        image:img ,
        title: "",
        content: "",
        author: "",
      });
      setModalOpen(false); // Close the modal
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
    console.log(userId)
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <>
      <div className="container mx-auto flex flex-wrap py-6">
        {/* Posts Section */}
        <section className="w-[750px] md:w-2/3 flex flex-col items-center px-3">
          {blogs.map((blog) => (
            <article className="flex flex-col shadow my-4 w-full " key={blog._id}>
              <div className="hover:opacity-75 ">
                <img src={blog.image} className="w-full h-96" alt="Blog"/>
              </div>
              <div className="bg-white flex flex-col justify-start p-6">
                <p
                  className="text-3xl font-bold hover:text-gray-700 pb-4"
                >
                  {blog.title}
                </p>

                <p className="text-sm pb-3">
                  By <span className="font-semibold hover:text-gray-800"> {blog.author}</span>

                  
                  <br></br>
                  Published on {blog.date}
                </p><hr></hr>
                <p
                  className="uppercase text-gray-800 hover:text-black pt-3"
                >
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
              <label
                htmlFor="my-modal"
                className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-4"
              >
                Share Your Experience
              </label>

              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <form onSubmit={createNewBlog}>
                    <input
                      type="text"
                      placeholder="Title"
                      className="input input-bordered input-info w-full max-w-xs mb-5"
                      value={newBlog.title}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, title: e.target.value })
                      }
                    />

                    <input
                      type="text"
                      placeholder="Content"
                      className="input input-bordered input-info input-lg w-full max-w-xs mb-5"
                      value={newBlog.content}
                      onChange={(e) =>
                        setNewBlog({ ...newBlog, content: e.target.value })
                      }
                    />

                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      accept="image/*"
                    />

                    <div className="modal-action">
                      <button type="submit" className="btn">
                        Submit
                      </button>
                      <button
                          type="button"
                          className="btn btn-error"
                          onClick={closeModal} 
                        >
                          Cancel
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
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
