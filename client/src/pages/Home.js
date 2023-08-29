import React from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Slider2 from "../components/Slider";
import BlogSection from "../components/BlogSection";
import ContactUs from "../pages/ContactUs";
import AboutSection from "./aboutPage/AboutSection";
import EventSection from "../components/EventSection";
import CultureSection from "../components/CultureSection";

function Home() {
  return (
    <>
      <Slider2 />
      <CultureSection />
      <EventSection />
      <BlogSection />
      <AboutSection />
      <ContactUs />
    </>
  );
}

export default Home;
