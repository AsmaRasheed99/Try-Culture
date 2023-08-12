import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiThumbUpOutline } from "@mdi/js";
import { mdiThumbUp } from "@mdi/js";
import { mdiDelete } from "@mdi/js";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState("");
  const [comment, setComment] = useState("");
  const [user, setUser] = useState({});

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });

        axios
          .get(`http://localhost:5000/api/users/${response.data.user.id}`)
          .then((response) => {
            setUser(response.data[0]);
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (localStorage.auth) {
      fetchProtectedData();
    }
  }, []);

  console.log(user);
  const fetchBlog = async (req, res) => {
    try {
      const blog = await axios.get(`http://localhost:5000/api/Blog/${id}`);
      setBlog(blog.data);
      setComment("");
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const NewComment = {
      comment: comment,
      userName: user.firstName,
      userImage: user.image,
      id: user._id,
    };
    const oldComments = [...blog.comments] || [];
    const Allcomments = [...oldComments, NewComment];
    console.log(Allcomments);
    try {
      const addComment = await axios.put(
        `http://localhost:5000/api/addComments/${blog._id}`,
        { NewComment: Allcomments }
      );
      fetchBlog();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLike = async () => {
    const Likes = user._id;
    const oldLikes = [...blog.likes] || [];
    const AllLikes = [...oldLikes, Likes];
    try {
      const likes = await axios.put(
        `http://localhost:5000/api/addLike/${blog._id}`,
        { Likes: AllLikes }
      );
      fetchBlog();
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleDisLike = async () => {
    const oldLikes = [...blog.likes];
    const AllLikes = oldLikes.filter((like) => {
      return like !== user._id;
    });
    try {
      const likes = await axios.put(
        `http://localhost:5000/api/addLike/${blog._id}`,
        { Likes: AllLikes }
      );
      fetchBlog();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (index) => {
    let oldComments = [...blog.comments];

    oldComments.splice(index, 1);
    try {
      const deleted = await axios.put(
        `http://localhost:5000/api/deleteComment/${blog._id}`,
        { oldComments: oldComments }
      );
      fetchBlog();
    } catch (error) {
      console.error(error.message);
    }
  };


 const handleAddReport = async(report,comment) => {
console.log(report,user._id,id,comment)
const Data ={  
  ReportText:report,
  BlogId:id, 
  UserId:user._id, 
  Comment:comment,
}
try {
  const response = await axios.post("http://localhost:5000/api/AddNewReport",Data)
} catch (error) {
  console.error(error.message);
}


 }

const handleEdit = async() => {
  
}



  return (
    <section className=" flex w-full justify-center lg:p-10">
      <article
        className="flex flex-col lg:w-[70%] w-full flex-wrap shadow my-4  "
        key={blog._id}
      >
        <div className="hover:opacity-75  ">
          <img
            src={`http://localhost:5000/${blog.image}`}
            className=" lg:h-[30rem] w-full"
            alt="Blog"
          />
        </div>
        <div className="bg-base-200 w-full flex flex-col justify-start p-6">
          <p className="lg:text-4xl text-xl font-bold hover:text-gray-700 pb-4">
            {blog.title}
          </p>

          <p className="text-sm pb-3">
            By{" "}
            <span className="font-semibold hover:text-gray-800">
              {" "}
              {blog.author}
            </span>
            <br></br>
            Published on {blog.date}
          </p>
          <hr></hr>
          <p className=" text-gray-800 lg:text-xl text-lg hover:text-black pt-3">
            {blog.content}
          </p>
          <hr></hr>
          {/* comments */}
          <div className="p-3 ml-3 ">
            <h3 className="font-bold mt-5">
              Comments: {blog?.comments?.length}{" "}
            </h3>
            <div className="flex items-center justify-between">
              <h3 className="font-bold ">Likes:{blog?.likes?.length}</h3>
              {localStorage.auth ? (
                <>
                  {!blog?.likes?.includes(user._id) ? (
                    <Icon
                      color="blue"
                      onClick={handleLike}
                      path={mdiThumbUpOutline}
                      size={1}
                      className="cursor-pointer "
                    />
                  ) : (
                    <Icon
                      color="blue"
                      onClick={handleDisLike}
                      path={mdiThumbUp}
                      size={1}
                      className="cursor-pointer "
                    />
                  )}
                </>
              ) : null}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {blog?.comments?.map((comment, index) => {
              return (
                <div key={blog._id} className="flex flex-col ">
                  <div className="border rounded-md p-3 ml-3 my-3 bg-white">
                    <div className="flex gap-3 items-center justify-between">
                      <div className="flex gap-3 items-center">
                        <img
                          src={`http://localhost:5000/${comment.userImage}`}
                          className="object-cover w-8 h-8 rounded-full 
                      border-2 border-emerald-400  shadow-emerald-400
                      "
                        />
                        <h3 className="font-bold">{comment.userName}</h3>
                      </div>
                       <div className="group flex flex-col ">
          <span className="pr-1 flex-1 text-xl font-bold cursor-pointer rotate-90">...</span>
        <ul className="bg-white rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
          
          {comment.id === user._id && localStorage.auth  ? (
            <>
              <li
                className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleEdit()}
              >
                Edit
              </li>
              <li
                className="rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  handleDelete(index);
                }}
>
                Delete
              </li>
            </>
            ): null}

          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <span className="pr-1 flex-1">Report</span>
              <span className="mr-auto">
                <svg
                  className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            
            <ul className="bg-white border rounded-sm absolute top-6 right-full mt-2 ml-2 transition duration-150 ease-in-out origin-top-left w-64">
              <li
                className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleAddReport("Harmful content",comment)}
              >
                Harmful content
              </li>
              <li
                className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                onClick={() =>
                  handleAddReport("Contrary to the content of the post.",comment)
                }
              >
                Contrary to the content of the post.
              </li>
              <li
                className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleAddReport("Unwanted advertisements.",comment)}
              >
                Unwanted advertisements.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  /* since nested groupes are not supported we have to use \n     regular css for the nested dropdowns \n  */\n  li>ul                 { transform: translatex(100%) scale(0) }\n  li:hover>ul           { transform: translatex(101%) scale(1) }\n  li > button svg       { transform: rotate(-90deg) }\n  li:hover > button svg { transform: rotate(-270deg) }\n\n  /* Below styles fake what can be achieved with the tailwind config\n     you need to add the group-hover variant to scale and define your custom\n     min width style.\n  \t See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html\n  \t for implementation with config file\n  */\n  .group:hover .group-hover\\:scale-100 { transform: scale(1) }\n  .group:hover .group-hover\\:-rotate-180 { transform: rotate(180deg) }\n  .scale-0 { transform: scale(0) }\n  .min-w-32 { min-width: 8rem }\n",
        }}
      />
                    </div>
                    <p className="flex justify-between text-gray-600 text-lg mt-2">
                      {comment.comment}
                    </p>
                    {/* <textarea
                    className="w-full"
                    /> */}
                  </div>
                </div>
              );
            })}
            {localStorage.auth ? (
              <>
                <div className="w-full px-3 my-2">
                  <textarea
                    className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="body"
                    placeholder="Type Your Comment"
                    required=""
                    defaultValue={""}
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full flex justify-end px-3">
                  <input
                    type="submit"
                    className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                    defaultValue="Post Comment"
                  />
                </div>
              </>
            ) : null}
          </form>
        </div>
      </article>
    </section>
  );
};

export default BlogDetails;
