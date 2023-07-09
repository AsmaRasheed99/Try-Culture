import React, { useEffect } from 'react'
import { Button } from "@material-tailwind/react";

import { Link , useNavigate } from 'react-router-dom'

import "pure-react-carousel/dist/react-carousel.es.css";
import "swiper/css";
import "swiper/css/navigation";
import Slider2 from '../components/Slider';
import axios from 'axios';
import { useState } from 'react';
import Pagination from "@mui/material/Pagination";


function Cultures() {
  const [countries , setCountries] = useState([]);
  const navigate = useNavigate();

  function handleCulture(country) {
 navigate(`/Culture/${country}`);

  }
   
  const fetchCountries = async (req, res) => {
    try {
      const res = await axios.get("http://localhost:5000/api/getAllCultures");
       const countries = res.data;
       setCountries(countries)
       console.log(countries)
    } catch (error) {
      console.log(error.message);
    }
  }


useEffect(()=>{
  fetchCountries()
},[])


console.log(countries)




const [currentResPage, setCurrentResPage] = useState(1);


const itemsPerPage = 4;

const totalResPagesArray = Math.ceil(countries.length / itemsPerPage);


const startResIndexArray = (currentResPage - 1) * itemsPerPage;
const endResIndexArray = startResIndexArray + itemsPerPage;
const slicedResArray = countries.slice(startResIndexArray, endResIndexArray);


/// filter 

const handleResChangeArray = (event, page) => {
  setCurrentResPage(page);}






  return (
    <>
    <Slider2/>
    <div className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center mt-20 mb-20  '>

{slicedResArray?.map((card, index) => {
        return (

          <div className="w-full flex justify-center">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg w-72 dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg h-96 w-full"
                src={`http://localhost:5000/public/images/${card.image}`}                alt=""
              />
            </a>
            <div className="p-5">
            
                 <Button
                className="w-full bg-cyan-600 text-white font-bold text-sm uppercase rounded hover:bg-[#0b3e45] flex items-center justify-center px-2 py-3 mt-4"
                variant="text"
                onClick={() => {
                  handleCulture(card.Culture);
                 }}
              >
                 {card.Culture}
              </Button>
              
                
          
            </div>
          </div>
      
        </div>
      

        );
      })}  

</div>
<div className="flex flex-col justify-center items-center  mb-8 w-full">
          
          <Pagination
            count={totalResPagesArray}
            page={currentResPage}
            onChange={handleResChangeArray}
          />
        </div>

 




      </>
  )
}

export default Cultures