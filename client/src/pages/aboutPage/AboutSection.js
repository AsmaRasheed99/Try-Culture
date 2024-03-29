import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AboutSection = () => {

  const [about_title, setAbout_title] = useState("");
  const [about_us, setAbout_us] = useState("");
  const [aboutUsId, setAboutUsId] = useState();

  const fetchAboutUs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/aboutUs");
      setAbout_title(response.data[0].title);
      setAbout_us(response.data[0].text);
      setAboutUsId(response.data[0]._id);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };
  
    useEffect(() => {
      fetchAboutUs()
    }, []);

  return (
    <section
    className="bg-base-200  text-black overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
  >
    <div className="container mx-auto">
    <div className="-mx-7 flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-6/12">
          <div className="-mx-3 flex items-center sm:-mx-4" style={{ marginRight: "55px", marginLeft: "70px" }}>
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="py-3 sm:py-4">
                <img
                  src="https://images.pexels.com/photos/6545320/pexels-photo-6545320.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="an image"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="py-3 sm:py-4">
                <img
                  src="https://images.pexels.com/photos/5788534/pexels-photo-5788534.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:px-4 xl:w-1/2 ">
              <div className="relative z-10 my-4">
                <img
                  src="https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-full rounded-2xl"
                />
                <span className="absolute -right-7 -bottom-7 z-[-1]">
                  <svg
                    width={134}
                    height={106}
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="16.3333"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={31}
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="45.6667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="60.3334"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 60.3334 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="88.6667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="117.667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="74.6667"
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={103}
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={132}
                      cy={104}
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={31}
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={103}
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={132}
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={31}
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={31}
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="60.3333"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 60.3333 30.9998)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="88.6667"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 88.6667 30.9998)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="117.667"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 117.667 30.9998)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="74.6667"
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 74.6667 30.9998)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={103}
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={103}
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 103 30.9998)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={132}
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={132}
                      cy="30.9998"
                      r="1.66667"
                      transform="rotate(-90 132 30.9998)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={31}
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={31}
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 31 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={103}
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={103}
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 103 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={132}
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={132}
                      cy="16.3333"
                      r="1.66667"
                      transform="rotate(-90 132 16.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={31}
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 31 45.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={31}
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3333)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66683)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66683)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66683)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66683)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={103}
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={103}
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 103 1.66683)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={132}
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                     fill="#00ACC1"
                    />
                    <circle
                      cx={132}
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 132 1.66683)"
                     fill="#00ACC1"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12 texy-black capitalize ">
          <div className="mt-10 lg:mt-0">
            <h2 className="text-black mb-8 text-3xl font-bold sm:text-4xl">
              {about_title}
            </h2>
            <p className="text-body-color mb-8 text-base">
              {about_us}
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection