import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [date, setDate] = useState([]);
    
    function formatDate(timestamp) {
        const formattedDate = moment(timestamp).format('MMMM D, YYYY, h:mm:ss A');
        return formattedDate;
      }


    useEffect(() => {
    const fetchBlogs = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/getAllBlogs"
          );
          const blogsData = response.data;
          setBlogs(response.data.slice(-4))
          setDate((blogsData.createdAt))
        } catch (error) {
          console.error(error);
        }
      };
   
      fetchBlogs();
    }, []);

console.log(blogs)


  return (
    <>
    <div className=" flex flex-col items-center  w-screen ">
  <div className="w-full ">
   
    <div className='flex w-full flex-wrap mt-10 justify-center '>
      
      {blogs?.map((blog)=>{

return(

    <div className="w-80 container   bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
      <div>
       
        <h1 className="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
        {blog.title}
        </h1>
        <p className="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">
          #by  {blog.author}

        </p>
      </div>
      <img
        className="w-full h-60 cursor-pointer"
        src={`http://localhost:5000/${blog.image}
        `}
        alt=""
      />
      <div className="flex h-20 p-4 justify-between">
        <div className="flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src={`http://localhost:5000/${blog.UserImage}`}
            alt="UserImage"
          />
          <h2 className="text-gray-800 font-bold cursor-pointer">
          {blog.author}
          </h2>
        </div>
        <div className="flex space-x-2 items-center">
        <time dateTime="2020-03-16" className="text-gray-500">
            {formatDate(blog.createdAt)}
          </time>
       
        </div>
      </div>
    </div>
    

    ) })}
     
    </div>
  </div>
</div>

<div className='flex justify-center mt-10'>
     <Link to="/Blogs">
      <Button 
            className=" border-solid border-[#0b3e45] border-2 text-[#0b3e45] hover:bg-[#0b3e45] hover:text-[#ffffff]"
            variant="text"
          >
            Read More
          </Button>
          </Link>
          </div>
    
    </>
  )
}

export default BlogSection