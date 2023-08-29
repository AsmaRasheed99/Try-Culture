import React from 'react'
import { HashLink } from 'react-router-hash-link'

const EventSection = () => {
  return (
    <div className="px-6 py-12 lg:py-28 text-center md:px-12 lg:text-left bg-base-200">
    <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
      <div className="grid items-center lg:grid-cols-2">
        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
          <HashLink smooth={true} to='/Events#' className="block cursor-pointer hover:scale-105 rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
            <h1 className="mt-2 mb-5 text-2xl font-bold tracking-tight md:text-3xl xl:text-4xl">
              Check Out <br />
              <span className="text-cyan-600 hover:scale-105">events organized by our users and partners</span>
            </h1>
          </HashLink>
        </div>
        <div className="md:mb-12 lg:mb-0">
          <img
            src="https://images.pexels.com/photos/5239919/pexels-photo-5239919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full h-1/2 rounded-lg shadow-lg dark:shadow-black/20"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default EventSection