import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className="grid grid-flow-col gap-4"></div>
        <div>
          <div className="grid gap-4 text-xl font-serif italic">
            <p>
              Our cultural hub website is more than just a place to find
              information. It's a community of like-minded individuals who are
              passionate about art and culture.
              <br /> We offer a variety of interactive features that allow users
              to engage with each other, share their experiences, and learn from
              one another <br />
              so if you believe your business belongs here, get in touch with us
              using <br></br>
              <a className="text-cyan-500" href="#">
                email@tryAculture.com
              </a>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: "2rem",
                marginTop: "2rem",
              }}
            >
             <a href="" target="_blank"><FaFacebookF /></a>
             <a href="" target="_blank"><FaTwitter /></a>
             <a href="" target="_blank"><FaPinterestP /></a>
             <a href="" target="_blank"><FaInstagram /></a>
             <a href="" target="_blank"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="divider"></div>
        </div>
        <div className="grid grid-flow-col justify-start gap-4">
          <HashLink smooth={true} to="/About#">About us</HashLink>
          <HashLink smooth={true} to="/Contact#">Contact</HashLink>
          <HashLink smooth={true} to="/SignUp#">Join Us</HashLink>
        </div>
        <p className="self-end">
          Copyright © 2023 - All rights reserved by ACME Industries Ltd
        </p>
      </footer>
    </>
  );
}

export default Footer;
