import React from 'react'
import header from "../images/h2.png";


function Slider2() {
  return (
    <>
     <section className="bg-[#e5f5f7] dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
      Exploring the Multifaceted Diversity of Cultures within a Single Country


      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Sign Up to explore and experience the culture you want in Jordan
         
      </p>

    </div>
    <div className=" lg:mt-0 lg:col-span-5 lg:flex">
      <img
        src={header}
        alt="mockup"
      />
    </div>
  </div>
</section>

    </>
  )
}

export default Slider2