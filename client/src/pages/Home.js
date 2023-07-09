import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper React components
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Slider2 from "../components/Slider";
import blog1 from "../images/blog1.jpg";
import { Button } from "@material-tailwind/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BlogSection from "../components/BlogSection";
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
                <div className="flex mb-12 cursor-pointer"
                
                onClick={()=> {
                  handleCulture("China")
                }}
                
                
                
                
                
                
                >
                  <div className="shrink-0">
                    <div
                      className="p-4 rounded-md shadow-lg"
                      style={{ backgroundColor: "RGB(30,187,206,30%)" }}
                    >
                      <span className="fi fi-cn"></span>
                    </div>
                  </div>
                  <div className="grow ml-4 cursor-pointer"   >
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
                <div className="flex mb-12 cursor-pointer"
                onClick={()=> {
                  handleCulture("India")
                }}
                
                >
                  <div className="shrink-0">
                    <div
                      className="p-4 rounded-md shadow-lg"
                      style={{ backgroundColor: "RGB(30,187,206,30%)" }}
                    >
                      <span className="fi fi-in"></span>
                    </div>
                  </div>
                  <div className="grow ml-4 cursor-pointer" >
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
                  <div className="shrink-0 cursor-pointer "
                  
                  onClick={()=> {
                    handleCulture("Korea")
                  }}
                  
                  >
                    <div
                      className="p-4 rounded-md shadow-lg"
                      style={{ backgroundColor: "RGB(30,187,206,30%)" }}
                    >
                      <span className="fi fi-kr"></span>
                    </div>
                  </div>
                  <div className="grow ml-4 cursor-pointer" >
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
      <BlogSection/>


            {/* ///////////////////////////////// */}
          </section>
        
        </div>
      </>
    </div>
  );
}

export default Home;
