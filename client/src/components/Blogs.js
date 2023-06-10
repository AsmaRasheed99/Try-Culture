import React from "react";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [searchTermArray, setSearchTermArray] = useState("");
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [Url, setUrl] = useState(null);

  let array = [
    {
      image: "../image.png",
      title: "Jonathan Reinink",
      experience:"Lorem",
      date: "Aug 18",
      Url: "https://images.pexels.com/photos/15925339/pexels-photo-15925339/free-photo-of-lonely-swan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "../image.png",
      title: "yyyyyyyyyyy",
      experience:"Lorem",
      date: "Aug 20",
      Url: "https://images.pexels.com/photos/15925339/pexels-photo-15925339/free-photo-of-lonely-swan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "../image.png",
      title: "bb",
      experience:"Lorem",
      date: "Aug 18",
      Url: "https://images.pexels.com/photos/15925339/pexels-photo-15925339/free-photo-of-lonely-swan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "../image.png",
      title: "bb",
      experience:"Lorem",
      date: "Aug 18",
      Url: "https://images.pexels.com/photos/15925339/pexels-photo-15925339/free-photo-of-lonely-swan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "../image.png",
      title: "bb",
      experience:"Lorem",
      date: "Aug 18",
      Url: "https://images.pexels.com/photos/15925339/pexels-photo-15925339/free-photo-of-lonely-swan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "../image.png",
      title: "bb",
      experience:"Lorem",
      date: "Aug 18",
      Url: "https://images.pexels.com/photos/15925339/pexels-photo-15925339/free-photo-of-lonely-swan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image: "../image.png",
      title: "bb",
      experience:"Lorem",
      date: "Aug 18",
      Url: "https://images.pexels.com/photos/15925339/pexels-photo-15925339/free-photo-of-lonely-swan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [FilterDataArray, setFilterDataArray] = useState(array);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUrl(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new blog
    const newBlog = {
      Url: Url ? URL.createObjectURL(Url) : "../image.png",
      title: title,
      experience:experience,
      date: new Date().toLocaleDateString(), 
      
    };

    // Add the new card to the existing array
    const newArray = [newBlog, ...slicedArrayArray];
    setFilterDataArray(newArray);

    // Reset the form fields
    setTitle("");
    setExperience("");
    setUrl(null);

    // Close the modal
    const modal = document.getElementById("my-modal");
    modal.checked = false;
  };
  const filterDataByNameArray = (searchTermArray) => {
    const filteredDataArray = array.filter((item) =>
      item.title.toLowerCase().includes(searchTermArray.toLowerCase())
    );
    setFilterDataArray(filteredDataArray);
  };

  const [currentPageArray, setCurrentPageArray] = useState(1);
  let totalItemsArray;
  let totalPagesArray;
  let slicedArrayArray;
  const itemsPerPage = 2;
  totalItemsArray = FilterDataArray.length;
  totalPagesArray = Math.ceil(totalItemsArray / itemsPerPage);
  const startIndexArray = (currentPageArray - 1) * itemsPerPage;
  const endIndexArray = startIndexArray + itemsPerPage;
  slicedArrayArray = FilterDataArray.slice(startIndexArray, endIndexArray);
  const handlePageChangeArray = (event, pageNumber) => {
    setCurrentPageArray(pageNumber);
  };

  return (
    <>
    
      <div className="flex flex-col justify-center items-center mb-5 mt-5">
        <input
          type="text"
          placeholder="Search"
          style={{
            border: "solid 0.5px gray",
            boxShadow: "3px 3px 3px lightgrey",
          }}
          value={searchTermArray}
          onChange={(e) => {
            setSearchTermArray(e.target.value);
            filterDataByNameArray(e.target.value);
          }}
        />{" "}
      </div>
    

      
      
      <>
      <div class="container mx-auto flex flex-wrap py-6">
        
 {/* Posts Section */} 
  <section className="w-full md:w-2/3 flex flex-col items-center px-3">
  {slicedArrayArray.map((e) => {
          return (
    <article className="flex flex-col shadow my-4">
      {/* Article Image */} 
      <a href="#" className="hover:opacity-75">
        <img src={e.Url}/>
      </a>
      <div className="bg-white flex flex-col justify-start p-6">
       
        <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
          {e.title}
        </a>
        <p href="#" className="text-sm pb-3">
          By{" "}
          <a href="#" className="font-semibold hover:text-gray-800">
            user
          </a>
          , Published on {e.date}
        </p>
        <a href="#" className="pb-6">
          {e.experience}
        </a>
        <a href="#" className="uppercase text-gray-800 hover:text-black">
          Continue Reading <i className="fas fa-arrow-right" />
        </a>
      </div>
    </article>
    );
  })}
  </section>
  {/* Sidebar Section  */}
  <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
      <p className="text-xl font-semibold pb-5">About Us</p>
      <p className="pb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis
        est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac
        habitasse platea dictumst.
      </p>
      <Link
        to='/AboutUs'
        className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-cyan-400 flex items-center justify-center px-2 py-3 mt-4"
      >
        Get to know us
      </Link>
    </div>
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
    <p className="text-xl font-semibold pb-5">About Us</p>
      <p className="pb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis
        est eu odio sagittis tristique. Vestibulum ut finibus leo. In hac
        habitasse platea dictumst.
      </p>
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="my-modal" className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-cyan-400 flex items-center justify-center px-2 py-3 mt-4" >
          Share Your Experience
        </label>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box" >
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-info w-full max-w-xs mb-5"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Experience"
              className="input input-bordered input-info input-lg w-full max-w-xs mb-5"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />

            <input
              type="file"
              className="file-input file-input-bordered file-input-accent w-full max-w-xs"
              onChange={handleFileChange}
            />

            <div className="modal-action">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  </aside>
  </div>
</>


<div className="flex flex-col justify-center items-center mb-8 mt-3">
        {
          <Pagination
            count={totalPagesArray}
            page={currentPageArray}
            onChange={handlePageChangeArray}
          />
        }{" "}
      </div>
    </>
  );
};

export default Blogs;
