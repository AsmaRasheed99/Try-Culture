import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer footer-center p-10 bg-[#e5f5f756] text-base-content rounded">
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
             <a href=""><FaFacebookF /></a>
             <a href=""><FaTwitter /></a>
             <a href=""><FaPinterestP /></a>
             <a href=""><FaInstagram /></a>
             <a href=""><FaYoutube /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="divider"></div>
        </div>
        <div className="grid grid-flow-col justify-start gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <p className="self-end">
          Copyright © 2023 - All rights reserved by ACME Industries Ltd
        </p>
      </footer>
    </>
  );
}

export default Footer;
