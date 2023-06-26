import React, { useEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "swiper/css";
import "swiper/css/navigation";
import Slider2 from '../components/Slider';
import axios from 'axios';
import { useState } from 'react';


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
  return (
    <>




 







    <Slider2/>
<div className='text-center text-4xl font-serif text-cyan-500 font-bold mt-20 mb-10 italic'>
<h3>Welcome to the World of Cultures: Exploring Diversity and Traditions


</h3>
</div>

    <div className="container mx-auto">
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={4}
          step={1}
          infinite={true}
          >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
        role="button"
        aria-label="slide backward"
        className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
        id="prev"
            >
        <svg
          width={8}
          height={14}
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">




        <Slider>
          <div
            id="slider"
            className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
          >
          
          
          {countries?.map((card, index) => {
        return (
          <Slide index={index}>
            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
              <img
                src={card.image}
                alt="black chair and white table"
                className="object-cover object-center w-full"
              />
              <div
                className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"
                onClick={() => {
                  handleCulture(card.Culture);
                }}
              >
                <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                  {card.Culture}
                </div>
                <div className="flex h-full items-end pb-6">
                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"></h3>
                </div>
              </div>
            </div>
          </Slide>
        );
      })}
          
         
          </div>
        </Slider>
            </div>
            <ButtonNext
        role="button"
        aria-label="slide forward"
        className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        id="next"
            >
        <svg
          width={8}
          height={14}
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
            </ButtonNext>
          </div>
          </CarouselProvider>
            
          {/* Carousel for tablet and medium size devices */}
          <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={2}
          step={1}
          infinite={true}
          >
         <div className="w-full relative flex items-center justify-center">
            <ButtonBack
        role="button"
        aria-label="slide backward"
        className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
        id="prev"
            >
        <svg
          width={8}
          height={14}
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
        <Slider>
          <div
            id="slider"
            className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
          >
            <Slide index={0}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="black chair and white table"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"  onClick={()=> {handleCulture("China")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        China
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.pexels.com/photos/887848/pexels-photo-887848.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("America")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
          America
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.pexels.com/photos/4094259/pexels-photo-4094259.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Jordan")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Jordan
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={3}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1523544463628-d873327f5217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZGlhfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("India")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        India
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={4}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1559738933-d69ac3ff674b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWd5cHR8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="black chair and white table"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Egypt")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Egypt
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={5}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1619879654329-658ec2ca0337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGtvcmVhfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Korea")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
               Korea
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={6}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1549140600-78c9b8275e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Morocco")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Morocco
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={7}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1511135570219-bbad9a02f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEl0YWx5fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Italy")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Italy
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={8}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1505069446780-4ef442b5207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW58ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="black chair and white table"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Japan")}}>
            <div className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
        Japan
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={9}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1584424023637-186111112b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1leGljb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Mexico")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
          Mexico
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={10}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1609971757431-439cf7b4141b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyYW5jZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("France")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        France
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={11}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2F1ZGklMjBhcmFiaWF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Saudi Arabia")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Saudi Arabia
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
          </div>
        </Slider>
            </div>
            <ButtonNext
        role="button"
        aria-label="slide forward"
        className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        id="next"
            >
        <svg
          width={8}
          height={14}
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
            </ButtonNext>
          </div>
          </CarouselProvider>

          {/* Carousel for mobile and Small size Devices */}
          <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={12}
          visibleSlides={1}
          step={1}
          infinite={true}
          >
        <div className="w-full relative flex items-center justify-center">
            <ButtonBack
        role="button"
        aria-label="slide backward"
        className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
        id="prev"
            >
        <svg
          width={8}
          height={14}
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
        <Slider>
          <div
            id="slider"
            className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
          >
            <Slide index={0}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="black chair and white table"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"  onClick={()=> {handleCulture("China")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        China
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.pexels.com/photos/887848/pexels-photo-887848.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("America")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
          America
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.pexels.com/photos/4094259/pexels-photo-4094259.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Jordan")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Jordan
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={3}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1523544463628-d873327f5217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluZGlhfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("India")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        India
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={4}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1559738933-d69ac3ff674b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWd5cHR8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="black chair and white table"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Egypt")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Egypt
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={5}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1619879654329-658ec2ca0337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGtvcmVhfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Korea")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
               Korea
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={6}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1549140600-78c9b8275e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Morocco")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Morocco
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={7}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1511135570219-bbad9a02f103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEl0YWx5fGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Italy")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Italy
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={8}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1505069446780-4ef442b5207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW58ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="black chair and white table"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Japan")}}>
            <div className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">
        Japan
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={9}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1584424023637-186111112b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1leGljb3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Mexico")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
          Mexico
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={10}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1609971757431-439cf7b4141b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZyYW5jZXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("France")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        France
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
            <Slide index={11}>
              <div className="flex flex-shrink-0 relative w-full sm:w-auto">
          <img
            src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2F1ZGklMjBhcmFiaWF8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="sitting area"
            className="object-cover object-center w-full"
          />
          <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6" onClick={()=> {handleCulture("Saudi Arabia")}}>
            <div className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
        Saudi Arabia
            </div>
            <div className="flex h-full items-end pb-6">
        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
          
        </h3>
            </div>
          </div>
              </div>
            </Slide>
          </div>
        </Slider>
            </div>
            <ButtonNext
        role="button"
        aria-label="slide forward"
        className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        id="next"
            >
        <svg
          width={8}
          height={14}
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="black"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
            </ButtonNext>
          </div>
          </CarouselProvider>
        </div>
      </div>
      </>
  )
}

export default Cultures