import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiThumbUpOutline } from '@mdi/js';
import { mdiThumbUp } from '@mdi/js';
import { mdiDelete } from '@mdi/js';


const BlogDetails = () => {

    const { id } = useParams();
  const [blog, setBlog] = useState("");
  const [comment, setComment] = useState("");
  const [ user , setUser] = useState({});
  
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
 
  };
  }
  useEffect(() => {
    if (localStorage.auth) {
      fetchProtectedData();
    }
  }, []);

console.log(user)
const fetchBlog = async (req, res) => {
  try {
    const blog = await axios.get(`http://localhost:5000/api/Blog/${id}`);
    setBlog(blog.data);
    setComment("")
  } catch (error) {
    console.error(error.message);
  }

};
  useEffect(() => {

    fetchBlog();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

   const NewComment = {comment: comment , userName: user.firstName , userImage: user.image, id: user._id}
   const oldComments = [...blog.comments] || [];
   const Allcomments = [...oldComments,NewComment]
   console.log(Allcomments)
    try {
        const addComment = await axios.put(`http://localhost:5000/api/addComments/${blog._id}`, { NewComment: Allcomments })
        fetchBlog()
    } catch (error) {
        console.error(error.message);

    }
  }

  const handleLike = async ()=>{

    const Likes = user._id
    const oldLikes = [...blog.likes] || [] 
    const AllLikes = [...oldLikes,Likes]
     try {
      const likes = await axios.put(`http://localhost:5000/api/addLike/${blog._id}`, { Likes: AllLikes })
      fetchBlog()

     } catch (error) {
      console.error(error.message);

     }
  }
  const handleDisLike = async ()=>{
 
    const oldLikes = [...blog.likes] 
    const AllLikes = oldLikes.filter((like)=>{
      return like !== user._id
    })
     try {
      const likes = await axios.put(`http://localhost:5000/api/addLike/${blog._id}`, { Likes: AllLikes })
      fetchBlog()

     } catch (error) {
      console.error(error.message);
     }
  }

  const handleDelete = async (index)=>{
    
    let oldComments = [...blog.comments] 

    oldComments.splice(index,1)
   try {
    const deleted = await axios.put(`http://localhost:5000/api/deleteComment/${blog._id}`,{oldComments:oldComments})
    fetchBlog()
   } catch (error) {
    console.error(error.message);

   }
  
  }

  return (
    <section className=" flex w-full justify-center p-10">
      <article
        className="flex flex-col w-[50rem] flex-wrap shadow my-4  "
        key={blog._id}
      >
        <div className="hover:opacity-75  ">
          <img
            src={`http://localhost:5000/${blog.image}`}
            className=" h-[30rem] w-full"
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
              {blog.author}
            </span>
            <br></br>
            Published on {blog.date}
          </p>
          <hr></hr>
          <p className=" text-gray-800 hover:text-black pt-3">{blog.content}</p>
          <hr></hr>
          {/* comments */}

          <h3 className="font-bold mt-5">Comments: {blog?.comments?.length} </h3>
          <div className="flex items-center justify-between">
          <h3 className="font-bold ">Likes:{blog?.likes?.length}</h3>
          { localStorage.auth ?
          
        <>
        
        {!blog?.likes?.includes(user._id)   ? 
           <Icon color="blue" onClick={handleLike}  path={mdiThumbUpOutline} size={1} />
          :
          <Icon color="blue" onClick={handleDisLike} path={mdiThumbUp} size={1} />  
          }
        </>
        :
null
        
        }
          


          </div>
        

          <form 
          onSubmit={handleSubmit}>
            {blog?.comments?.map((comment, index) => {
             return(

              <div key={blog._id} className="flex flex-col ">
              <div className="border rounded-md p-3 ml-3 my-3">
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
                  {comment.id===user._id && localStorage.auth
                  ?
                  <Icon  color="red" onClick={()=>{handleDelete(index)}} path={mdiDelete} size={1} />

                  :null}

                </div>
                <p className="text-gray-600 mt-2">{comment.comment}</p>

              </div>
              
            </div>




             )


            })}
            { localStorage.auth ?
            
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
            
            :
            
            
            null
            
            
            }
     
          </form>
        </div>
      </article>
    </section>
  );
};

export default BlogDetails;
