import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
AOS.init();


const CultureSection = () => {

    const navigate = useNavigate();

    function handleCulture(country) {
      navigate(`/Culture/${country}`);
    }
  
  return (
    <div className="flex justify-center  my-24 lg:px-30 md:px-5 sm:px-5 ">
    <section className="mb-20 text-gray-800 flex flex-col justify-center w-full">
      <h2 className="text-3xl font-bold mb-8 text-center font-serif italic text-cyan-500">
        CHOOSE A CULTURE
      </h2>
      <p className="description text-lg text-center font-serif italic mb-12">
        Exploring the Multifaceted Diversity of Cultures within a Single
        Country
      </p>
      <div className="flex flex-wrap items-center  mx-auto">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6">
          <div
            className="relative overflow-hidden bg-no-repeat bg-cover h-96 rounded-lg shadow-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            style={{ backgroundPosition: "50%" }}
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img
              src="https://images.pexels.com/photos/236148/pexels-photo-236148.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-full h-full"
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
                      Explore a world of cultures! Visit our comprehensive
                      page showcasing the diversity of humanity
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
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6"
        >
          <>
            <div
              className="flex mb-12 cursor-pointer "
              onClick={() => {
                handleCulture("China");
              }}
            >
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg hover:scale-105 bg-base-200">
                  <span className="fi fi-cn"></span>
                </div>
              </div>
              <div className="grow ml-4 cursor-pointer">
                <p className="font-bold mb-1">China</p>
                <p className="text-gray-500">
                  The Chinese culture is diverse and encompasses various
                  aspects such as…
                </p>
              </div>
            </div>
          </>
          <>
            <div
              className="flex mb-12 cursor-pointer"
              onClick={() => {
                handleCulture("Morocco");
              }}
            >
              <div className="shrink-0">
                <div className="p-4 rounded-md shadow-lg hover:scale-105 bg-base-200">
                  <span className="fi fi-ma"></span>
                </div>
              </div>
              <div className="grow ml-4 cursor-pointer">
                <p className="font-bold mb-1"> Morocco</p>
                <p className="text-gray-500">
                  Moroccan culture and the Moroccan community in Jordan have
                  a noticeabl…
                </p>
              </div>
            </div>
          </>
          <>
            <div className="flex">
              <div
                className="shrink-0 cursor-pointer "
                onClick={() => {
                  handleCulture("Mexico");
                }}
              >
                <div className="p-4 rounded-md shadow-lg hover:scale-105 bg-base-200">
                  <span className="fi fi-mx"></span>
                </div>
              </div>
              <div className="grow ml-4 cursor-pointer">
                <p className="font-bold mb-1">Mexico</p>
                <p className="text-gray-500">
                  Mexican culture in Jordan is relatively limited, with a
                  small presence…
                </p>
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  </div>
  )
}

export default CultureSection