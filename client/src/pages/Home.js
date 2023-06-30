import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper React components
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Slider2 from "../components/Slider";
import blog1 from "../images/blog1.jpg";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  function handleCulture(country) {
 navigate(`/Culture/${country}`);

  }

  return (
    <div>
      <Slider2 />
      <div className="container my-24 lg:px-30 md:px-5 sm:px-5 ">
        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif italic text-cyan-500">
            CHOOSE A CULTURE
          </h2>
          <p className="description text-lg text-center font-serif italic mb-12">
            Exploring the Multifaceted Diversity of Cultures within a Single
            Country
          </p>
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                style={{ backgroundPosition: "50%" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VsdHVyZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
                  className="w-full"
                />
                <Link to="/Cultures">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                  >
                    <div className="flex justify-center items-center h-full">
                      <div className="px-6 py-12 md:px-12 text-white text-center">
                        <h3 className="text-2xl uppercase font-bold mb-6">
                          Explore All{" "}
                          <u style={{ color: "#1EBBCE" }}>Cultures</u>
                        </h3>
                        <p style={{ color: "hsl(231, 52.6%, 85%)" }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Harum quia laboriosam error consequuntur fugit,
                          doloribus rerum, iure nesciunt amet quidem veniam
                          cupiditate hic fugiat dolore aperiam quisquam libero
                          earum quibusdam?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6">
              <>
                {" "}
                <div className="flex mb-12 cursor-pointer" onClick={()=> {
                  handleCulture("Egypt")
                }} >
                  <div className="shrink-0">
                    <div
                      className="p-4 rounded-md shadow-lg"
                      style={{ backgroundColor: "RGB(30,187,206,30%)" }}
                    >
                      <span className="fi fi-eg"></span>
                    </div>
                  </div>
                  <div className="grow ml-4">
                    <p className="font-bold mb-1">Egypt</p>
                    <p className="text-gray-500">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nihil quisquam quibusdam modi sapiente magni molestias
                      pariatur facilis reprehenderit facere aliquam ex.
                    </p>
                  </div>
                </div>
              </>
              <>
                <div className="flex mb-12">
                  <div className="shrink-0">
                    <div
                      className="p-4 rounded-md shadow-lg"
                      style={{ backgroundColor: "RGB(30,187,206,30%)" }}
                    >
                      <span className="fi fi-cn"></span>
                    </div>
                  </div>
                  <div className="grow ml-4"  onClick={()=> {
                  handleCulture("China")
                }} >
                    <p className="font-bold mb-1">China</p>
                    <p className="text-gray-500">
                      Eum nostrum fugit numquam, voluptates veniam neque
                      quibusdam ullam aspernatur odio soluta, quisquam dolore
                      animi mollitia a omnis praesentium, expedita nobis!
                    </p>
                  </div>
                </div>
              </>
              <>
                <div className="flex mb-12">
                  <div className="shrink-0">
                    <div
                      className="p-4 rounded-md shadow-lg"
                      style={{ backgroundColor: "RGB(30,187,206,30%)" }}
                    >
                      <span className="fi fi-in"></span>
                    </div>
                  </div>
                  <div className="grow ml-4" onClick={()=> {
                  handleCulture("India")
                }}>
                    <p className="font-bold mb-1"> India</p>
                    <p className="text-gray-500">
                      Enim cupiditate, minus nulla dolor cumque iure eveniet
                      facere ullam beatae hic voluptatibus dolores
                      exercitationem? Facilis debitis aspernatur amet nisi iure
                      eveniet facere?
                    </p>
                  </div>
                </div>
              </>
              <>
                <div className="flex">
                  <div className="shrink-0">
                    <div
                      className="p-4 rounded-md shadow-lg"
                      style={{ backgroundColor: "RGB(30,187,206,30%)" }}
                    >
                      <span className="fi fi-kr"></span>
                    </div>
                  </div>
                  <div className="grow ml-4" onClick={()=> {
                  handleCulture("Korea")
                }}>
                    <p className="font-bold mb-1">Korea</p>
                    <p className="text-gray-500">
                      Illum doloremque ea, blanditiis sed dolor laborum
                      praesentium maxime sint, consectetur atque ipsum ab
                      adipisci ullam aspernatur odio soluta, quisquam dolore
                    </p>
                  </div>
                </div>
              </>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>

      <>
        {/* Container for demo purpose */}
        <div className="container my-24 px-6 mx-auto">
          {/* Section: Design Block */}
          <section className="mb-32 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-8 text-center font-serif italic text-cyan-500">
              SHARE YOUR EXPERIENCE
            </h2>
            <p className="description text-lg text-center font-serif italic ">
              Share your experience in exploring the richness of culture:
              Insights, Stories, and Perspectives
            </p>
            {/* //////////////////////////////////////////// */}
            <div className="flex justify-center items-center">
              <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div className="lg:flex items-stretch md:mt-12 mt-8">
                  <div className="lg:w-1/2">
                    <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                      <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                    </div>
                   
                  </div>
                  <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                    <div className="relative transition duration-300 ease-in-out hover:scale-105">
                      <div>
                      
                      </div>
                      <img
                        src="https://images.pexels.com/photos/7242744/pexels-photo-7242744.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="sitting place"
                        className="   w-full h-[548px] hidden sm:block"
                      />
                      <img
                        className="w-full sm:hidden"
                        src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                        alt="sitting place"
                      />
                    </div>
                    <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                      <div className="relative w-full transition duration-300 ease-in-out hover:scale-110">
                        <div>
                         
                        </div>
                        <img
                          src="https://images.pexels.com/photos/2070485/pexels-photo-2070485.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="w-[538px] h-[250px]"
                          alt="chair"
                        />
                      </div>
                      <div className="relative w-full sm:mt-0 mt-4 transition duration-300 ease-in-out hover:scale-110">
                        <div>
                          
                        </div>
                        <img
                          src="https://images.pexels.com/photos/1844648/pexels-photo-1844648.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className="w-[530px] h-[250px]"
                          alt="wall design"
                        />
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ///////////////////////////////// */}
          </section>
          {/* Section: Design Block */}
          {/* <div className="lg:w-1/2 mx-20">
                    <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                      <div className="sm:w-1/2 relative  transition duration-300 ease-in-out hover:scale-110">
                        <div>
                         
                        </div>
                        <img
                          src="https://images.pexels.com/photos/5738091/pexels-photo-5738091.jpeg?auto=compress&cs=tinysrgb&w=600"
                          className=" w-[530px] h-[250px]"
                          alt="chair"
                        />
                      </div>
                      <div className="sm:w-1/2 sm:mt-0 mt-4 relative  transition duration-300 ease-in-out hover:scale-110">
                        <div>
                      
                        </div>
                        <img
                          src="https://media.istockphoto.com/id/1252684502/photo/professional-blogger-working-on-his-new-post-for-social-media-at-home-closeup-creative.jpg?b=1&s=612x612&w=0&k=20&c=Wf2xfJbZXVhNepslbcOLQ_DGzPWlr9i3ae3W1Mn2J1M="
                          className="w-[538px] h-[250px]"
                          alt="chair"
                        />
                      </div>
                    </div>
                    <div className="relative  transition duration-300 ease-in-out hover:scale-105">
                      <div>
                       
                      </div>
                      <img
                        src="https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="sitting place"
                        className=" mt-8 md:mt-6 w-full h-[548px] hidden sm:block"
                      />
                    </div>
                  </div> */}
        </div>
      </>
    </div>
  );
}

export default Home;
