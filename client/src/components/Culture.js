import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Rating from "./Rating";

function Culture() {
  const [Resturants, setResturants] = useState([
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res1",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res2",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
  ]);
  const [Institutes, setInstitutes] = useState([
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res1",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res2",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
  ]);
  const [Stores, setStores] = useState([
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res1",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res2",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600",
      Name: " res3",
      Address: "Zarqa",
      WorkHour: "10AM-10PM",
      OffDays: "Friday",
      PhoneNumber: "0797777777",
    },
  ]);

  const [currentResPage, setCurrentResPage] = useState(1);
  const [currentInstPage, setCurrentInstPage] = useState(1);
  const [currentStorePage, setCurrentStorePage] = useState(1);

  const itemsPerPage = 3;

  const totalResPagesArray = Math.ceil(Resturants.length / itemsPerPage);
  const totalInstPages = Math.ceil(Institutes.length / itemsPerPage);
  const totalStorePages = Math.ceil(Stores.length / itemsPerPage);

  const startResIndexArray = (currentResPage - 1) * itemsPerPage;
  const endResIndexArray = startResIndexArray + itemsPerPage;
  const slicedResArray = Resturants.slice(startResIndexArray, endResIndexArray);

  const startInstIndex = (currentInstPage - 1) * itemsPerPage;
  const endInstIndex = startInstIndex + itemsPerPage;
  const slicedInstArray = Institutes.slice(startInstIndex, endInstIndex);

  const startStoreIndex = (currentStorePage - 1) * itemsPerPage;
  const endStoreIndex = startStoreIndex + itemsPerPage;
  const slicedStoreArray = Stores.slice(startStoreIndex, endStoreIndex);

  const handleResChangeArray = (event, page) => {
    setCurrentResPage(page);
  };
  const handleInstPageChange = (event, page) => {
    setCurrentInstPage(page);
  };

  const handleStorePageChange = (event, page) => {
    setCurrentStorePage(page);
  };

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      {/* hero section  */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10 object-cover">
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              boxShadow: "1px 1px 3px grey",
            }}
            src="https://images.pexels.com/photos/7364217/pexels-photo-7364217.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <div>
            <h1 className="text-5xl font-serif italic font-bold">
              Welcome to CHINA !
            </h1>
            <p className="py-6">
              China has a rich and ancient culture that is influenced by its
              long history, diverse geography, and various ethnic groups.
              Chinese culture is known for its art, literature, music,
              philosophy, martial arts, and cuisine. In recent years, there has
              been an increasing presence of Chinese people in Jordan,
              particularly in the fields of trade and investment. The Chinese
              community in Jordan is relatively small, but growing, and is
              primarily made up of businesspeople, students, and embassy
              personnel. There are several cultural organizations and events in
              Jordan that showcase Chinese culture, including Chinese New Year
              celebrations, cultural exchange programs, and Chinese language
              classes. Additionally, there are several Chinese restaurants and
              shops in Jordan that offer traditional Chinese cuisine and
              products.
            </p>
            <Link to="/Calendar">
              {" "}
              <button className="btn bg-cyan-600">Events</button>{" "}
            </Link>
          </div>
        </div>
      </div>
      {/*resturants */}
      <div className="text-center text-4xl font-serif text-black font-bold mt-20 mb-5 ">
        <p>
          Try <span className="text-5xl text-cyan-500">A</span> Culture Resturants
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12 lg:mx-40 sm:mx-10 lg:py-20 sm:py-5">
        {slicedResArray.map((resturant, index) => (
          <div className="mb-6 lg:mb-0 bg-white " key={index}>
            <div
              className="blogs p-5"
              style={{
                border: "hidden",
                boxShadow: "4px 3px 5px lightgrey, 0px -3px 5px lightgrey",
              }}
            >
              <img className="mx-auto mb-5" src={resturant.imgSrc} />
              <h4 className="font-bold text-xl mb-2">{resturant.Name}</h4>
              <p className="text-lg">Address : {resturant.Address}</p>
              <p className="text-lg">Work Hours: {resturant.WorkHour}</p>
              <p className="text-lg">Off Days: {resturant.OffDays}</p>
              <p className="text-lg mb-10">
                Phone Number: {resturant.PhoneNumber}
              </p>
              <p className="text-lg" style={{ color: "yellow" }}>
                <Rating />
              </p>
            </div>
          </div>
        ))}
        {/*pagination*/}
        <div className="flex flex-col justify-center items-center mb-8 mt-3 w-full">
          <Pagination
            count={totalResPagesArray}
            page={currentResPage}
            onChange={handleResChangeArray}
          />
        </div>
      </div>
      {/* Institutes  */}
      <div className="text-center text-4xl font-serif text-black font-bold mt-20 mb-5 ">
        <p>
          Try <span className="text-5xl text-cyan-500">A</span> Culture Language Institutes
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12 lg:mx-40 sm:mx-10 lg:py-20 sm:py-5">
        {slicedInstArray.map((Institute, index) => (
          <div className="mb-6 lg:mb-0 bg-white" key={index}>
            <div
              className="blogs p-5"
              style={{
                border: "hidden",
                boxShadow: "4px 3px 5px lightgrey, 0px -3px 5px lightgrey",
              }}
            >
              <img className="mx-auto mb-5" src={Institute.imgSrc} />
              <h4 className="font-bold text-xl mb-2">{Institute.Name}</h4>
              <p className="text-lg">Address : {Institute.Address}</p>
              <p className="text-lg">Work Hours: {Institute.WorkHour}</p>
              <p className="text-lg">Off Days: {Institute.OffDays}</p>
              <p className="text-lg mb-10">
                Phone Number: {Institute.PhoneNumber}
              </p>
              <p className="text-lg" style={{ color: "yellow" }}>
                <Rating />
              </p>
            </div>
          </div>
        ))}
        {/*pagination*/}
        <div className="flex flex-col justify-center items-center mb-8 mt-3 w-full">
          <Pagination
            count={totalInstPages}
            page={currentInstPage}
            onChange={handleInstPageChange}
          />
        </div>
      </div>
      {/* Stores  */}
      <div className="text-center text-4xl font-serif text-black font-bold mt-20 mb-5 ">
        <p>
          Try <span className="text-5xl text-cyan-500">A</span> Culture Stores 
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12 lg:mx-40 sm:mx-10 lg:py-20 sm:py-5">
        {slicedStoreArray.map((store, index) => (
          <div className="mb-6 lg:mb-0 bg-white" key={index}>
            <div
              className="blogs p-5"
              style={{
                border: "hidden",
                boxShadow: "4px 3px 5px lightgrey, 0px -3px 5px lightgrey",
              }}
            >
              <img className="mx-auto mb-5" src={store.imgSrc} />
              <h4 className="font-bold text-xl mb-2">{store.Name}</h4>
              <p className="text-lg">Address : {store.Address}</p>
              <p className="text-lg">Work Hours: {store.WorkHour}</p>
              <p className="text-lg">Off Days: {store.OffDays}</p>
              <p className="text-lg mb-10">Phone Number: {store.PhoneNumber}</p>
              <p className="text-lg" style={{ color: "yellow" }}>
                <Rating />
              </p>
            </div>
          </div>
        ))}
        {/*pagination*/}
        <div className="flex flex-col justify-center items-center mb-8 mt-3 w-full">
          <Pagination
            count={totalStorePages}
            page={currentStorePage}
            onChange={handleStorePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Culture;
