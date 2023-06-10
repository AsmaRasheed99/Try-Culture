import React from "react";
import "./AboutUs.css";
import Icon from "@mdi/react";
import { mdiSilverwareForkKnife } from "@mdi/js";
import { mdiStorefront } from "@mdi/js";
import { mdiTownHall } from "@mdi/js";
import aboutMeal from "../images/blog2.jpg";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
<div className="AboutUsed m-5 px-8">
      <div className="containerr">
        <div className="text">
          <h1 className="text-3xl pb-5 "></h1>
          <p className="aboutP">
           
          </p>
          <div className="icons">
            <Link to="/">
            <div className="icoon">
              <div>
              <Icon path={mdiSilverwareForkKnife} size={2} />
              </div>
              <p>Fridge</p>
            </div>
            </Link>

            <Link to="/">   
            <div className="icoon">
              <div>
              <Icon path={mdiStorefront} size={2} />
              </div>
              <p>Add items</p>
            </div>
            </Link>

            <Link to="/">
            <div className="icoon">
              <div>
              <Icon path={mdiTownHall} size={2} />
              </div>
              <p>Start cooking</p>
            </div>
            </Link>

          </div>
        </div>
        <div className="imgAbout">
          <img className="img-new" src={aboutMeal} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;