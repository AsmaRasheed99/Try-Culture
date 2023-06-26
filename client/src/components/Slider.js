import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import backImgx from "../images/BG2.jpg";
import backImgx2 from "../images/BG1.jpg";
import backImgx3 from "../images/BG3.jpg";

function Slider2() {
  return (
    <>
      <Carousel className="rounded-xl">
        <div className="relative h-2/4 w-full">
        <img
            src={backImgx}
            alt="image 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-4/5 w-full">
          <img
            src={backImgx2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-4/5 w-full">
          <img
            src={backImgx3}
            alt="image 3"
            className="h-4/5 w-full object-cover"
          />
        
        </div>
      </Carousel>
    </>
  )
}

export default Slider2