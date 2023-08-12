// import React, { useState } from "react";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import StarHalfIcon from "@mui/icons-material/StarHalf";

// function Rating() {
//   const [Rating, setRating] = useState(0);

//   const handleRating = (value) => {
//     setRating(value);
//   };

//   return (
//     <div>
//       <div className="rating-stars text-yellow-300">
//       {[1, 2, 3, 4, 5].map((value) => (
//           <span
//             key={value}
//             onClick={() => handleRating(value)}
//             className={value <= Rating ? "star filled" : "star"}
//           >
//             {value <= Rating ? ( <StarIcon /> ) : value - 0.5 === Rating ? ( <StarHalfIcon />  ) : ( <StarBorderIcon /> )}
//           </span>
//         ))}
//       </div>
//       <p style={{color:'black'}}> {Rating}</p>

//     </div>
//   );
// }

// export default Rating;
import React, { useState,useContext,useEffect } from "react";
import axios from "axios";
import {UserContext} from "../UserContext"

import TotalRating from "./TotalRating";


const Rating = ({ ServiceId, UserIdApp, card ,rating, currentPage}) => {
  const starCount = 5; // Total number of stars
  const[showRating, setShowRating] = useState(true);

  const [filledStars, setFilledStars] = useState(0);
  const [RatingStatus, setRatingStatus] = useState(false);
  const { RateRefresh,setRateRefresh} = useContext(UserContext);

// console.log(ServiceId,UserIdApp, card);
// console.log(card?.UsersIdRate?.includes(UserIdApp))
useEffect(()=>{
  if(card?.UsersIdRate?.includes(UserIdApp)){
    setRatingStatus(true)
    // console.log(currentPage)

  }
},[filledStars,card, UserIdApp,currentPage])




  const handleStarClick = async (starIndex) => {
    setFilledStars(starIndex + 1);

   let ids = card.UsersIdRate
    let newrate =card.rate
    ids.push(UserIdApp)
    newrate.push(starIndex + 1)


    const  sum= card.rate?.reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0);
    const  avg = card.rate.length === 0 ? 1 :card.rate?.length

    try {
      const updatedBusinessData = {
        UsersIdRate:ids,
        rate:newrate,
        rating:sum/avg
      };

    const NupdatedBusiness=   await axios.put(`http://localhost:5000/api/rateBusiness/${ServiceId}`, updatedBusinessData);
    setShowRating(true);
    setRateRefresh(NupdatedBusiness)
    } 
    
    catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      
      <div className="flex items-center">
            {console.log(RatingStatus === false && showRating)}

      {Array(starCount)
        .fill()
        .map((_, index) => (
          <svg
            key={index}
            aria-hidden="true"
            className={`w-5 h-5 ${
              index < filledStars
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-500"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleStarClick(index)}
          >
            <title>
              {index + 1 <= filledStars ? "Filled star" : "Empty star"}
            </title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
    </div>
  
   
    </>
  );
};

export default Rating;