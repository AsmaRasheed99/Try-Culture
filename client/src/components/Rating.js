import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import TotalRating from "./TotalRating";

const Rating = ({ ServiceId, UserIdApp, card, currentPage }) => {
  const starCount = 5; // Total number of stars

  const [showRating, setShowRating] = useState(true);
  const [filledStars, setFilledStars] = useState(0);
  const [RatingStatus, setRatingStatus] = useState(false);
  const { RateRefresh, setRateRefresh } = useContext(UserContext);

  useEffect(() => {
    if (card?.UsersIdRate?.includes(UserIdApp)) {
      setRatingStatus(true);
    }
  }, [filledStars, card, UserIdApp, currentPage]);

  const handleStarClick = async (starIndex) => {
    setFilledStars(starIndex + 1);

    let ids = card.UsersIdRate;
    let newrate = card.rate;
    ids.push(UserIdApp);
    newrate.push(starIndex + 1);

    const sum = card.rate?.reduce(
      (accumulated , current ) => parseInt(accumulated) + parseInt(current),
      0
    );
    const length = card.rate?.length ;

    try {
      const updatedBusinessData = {
        UsersIdRate: ids,
        rate: newrate,
        rating: sum / length,
      };

      const NupdatedBusiness = await axios.put(
        `http://localhost:5000/api/rateBusiness/${ServiceId}`,
        updatedBusinessData
      );
      setShowRating(true);
      setRateRefresh(NupdatedBusiness);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {localStorage.auth !== undefined ? (
        <div className="flex items-center">

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
      ) : (
        <div className="flex">
          {" "}
          <TotalRating rating={card.rating} />
          <p className="bg-base-200  w-6 h-6 rounded-full ml-5 text-center">
            {Math.round(card.rating * 10) / 10}
          </p>{" "}
        </div>
      )}
    </>
  );
};

export default Rating;
