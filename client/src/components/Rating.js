import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function Rating() {
  const [Rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div>
      <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleRating(value)}
            className={value <= Rating ? "star filled" : "star"}
          >
            {value <= Rating ? ( <StarIcon /> ) : value - 0.5 === Rating ? ( <StarHalfIcon />  ) : ( <StarBorderIcon /> )}
          </span>
        ))}
      </div>
      <p style={{color:'black'}}> {Rating}</p>

    </div>
  );
}

export default Rating;
