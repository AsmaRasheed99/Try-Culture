import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import "swiper/css";
import "swiper/css/navigation";
import Slider2 from "../components/Slider";
import axios from "axios";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";

function Cultures() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  function handleCulture(country) {
    navigate(`/Culture/${country}`);
  }

  const fetchCountries = async (req, res) => {
    try {
      const res = await axios.get("http://localhost:5000/api/getAllCultures");
      const countries = res.data;
      setCountries(countries);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const [currentCulturePage, setcurrentCulturePage] = useState(1);
  const itemsPerPage = 8;
  const totalCulturePagesArray = Math.ceil(countries.length / itemsPerPage);
  const startCultureIndexArray = (currentCulturePage - 1) * itemsPerPage;
  const endCultureIndexArray = startCultureIndexArray + itemsPerPage;
  const slicedCultureArray = countries.slice(startCultureIndexArray, endCultureIndexArray);

  /// filter

  const handleResChangeArray = (event, page) => {
    setcurrentCulturePage(page);
  };

  return (
    <>
      <Slider2 />
      <div className="flex flex-wrap items-center justify-center py-16 gap-4 lg:gap-8 lg:px-32">
        {slicedCultureArray?.map((card, index) => {
          return (
            <div
              onClick={() => {
                handleCulture(card.Culture);
              }}
              key={card._id}
              className=" h-96 flex justify-center flex-col cursor-pointer hover:scale-105 my-10"
            >
              <div className="bg-white shadow-md border border-gray-200 rounded-lg w-72 dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg ">
                <img
                  className="rounded-lg h-96 w-full "
                  src={`http://localhost:5000/public/images/${card.image}`}
                  alt=""
                />
              </div>
        
              <div className=" text-xl font-semibold p-3  ">
                {card.Culture}
              </div>
              
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center  mb-8 w-full">
        <Pagination
          count={totalCulturePagesArray}
          page={currentCulturePage}
          onChange={handleResChangeArray}
        />
      </div>
    </>
  );
}

export default Cultures;
