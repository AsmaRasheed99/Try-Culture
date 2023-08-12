import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Rating from "../components/Rating";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import TotalRating from "../components/TotalRating";

import { UserContext } from "../UserContext";
function Culture({ UserIdApp }) {
  const navigate = useNavigate();
  const { country } = useParams();

  const [Business, setBusiness] = useState([]);
  const [Culture, setCulture] = useState([]);
  const [showRating, setShowRating] = useState(true);
  const { RateRefresh, setRateRefresh } = useContext(UserContext);
  const [FilteredBusiness, setFilteredBusiness] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/getBusinessCulture/${country}`
      );
      setBusiness(() => {
        const newItems = response.data.filter(
          (item) => item.flag && item.Subscriped !== false
        );
        setBusiness(newItems);

        return newItems;
      });
    } catch (error) {
      console.error(error);
    }

    try {
      const culture = await axios.get(
        `http://localhost:5000/api/oneCulture/${country}`
      );
      setCulture(culture.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchServices();
    setShowRating(country?.UsersIdRate?.includes(UserIdApp));
  }, [RateRefresh]);

  useEffect(() => {
    setFilteredBusiness(Business);
  }, [Business]);

  // pagination

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const totalPagesArray = Math.ceil(Business.length / itemsPerPage);

  const startIndexArray = (currentPage - 1) * itemsPerPage;
  const endIndexArray = startIndexArray + itemsPerPage;
  const slicedArray = FilteredBusiness.slice(startIndexArray, endIndexArray);

  const handleChangeArray = (event, page) => {
    setCurrentPage(page);
  };

  /// filter

  const [SearchTerm, setSearchTerm] = useState("");
  const [yourSelectedStateValueLocation, setyourSelectedStateValueLocation] =
    useState("");
  const [yourSelectedStateValueType, setyourSelectedStateValueType] =
    useState("");

  const setSearchType = (typeValue) => {
    const filteredDataBusiness = Business?.filter((item) =>
      item.businessType?.toLowerCase().includes(typeValue.toLowerCase())
    );
    setFilteredBusiness(filteredDataBusiness);
  };

  const filterDataByName = (searchTerm) => {
    const filteredDataBusiness = Business.filter((item) =>
      item.businessName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBusiness(filteredDataBusiness);
    setCurrentPage(1);
  };

  const handleFilterChange = (typeValue, LocationValue) => {
    const filteredDataBusiness = Business?.filter(
      (item) =>
        item.businessType?.toLowerCase().includes(typeValue.toLowerCase()) &&
        item.location?.toLowerCase().includes(LocationValue.toLowerCase())
    );
    setFilteredBusiness(filteredDataBusiness);
    setCurrentPage(1);
  };
  const handleCulture = () => {
    navigate(`/Calendar/${country}`);
  };

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
          <div className="flex items-center font-serif italic font-bold justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={`http://localhost:5000/public/images/${Culture.HeroImage}`}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h4 className="text-3xl font-bold leadi sm:text-5xl">
              Welcome to {Culture.Culture}!
            </h4>
            <p className="mt-6 mb-8 text-md sm:mb-12 flex flex-wrap">
              {Culture.Information}
              <br className="hidden md:inline " />
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <div className="flex items-center justify-center">
                {" "}
                <button onClick={handleCulture} className="btn bg-cyan-600">
                  Events
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-full mx-8  p-5 rounded-lg transform transition duration-300 ">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full  ">
              
              <form className="w-full mb-5 lg:mb-0   lg:w-3/4 mr-2 ">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                    placeholder="Search ..."
                    value={SearchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);

                      filterDataByName(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className=" text-white absolute  right-2.5 bottom-2 p-2 rounded-lg group bg-gradient-to-br from-cyan-500 to-gray-500  hover:text-black dark:text-white focus:ring-4  focus:ring-cyan-200 dark:focus:ring-cyan-800 w-fit hover:bg-gradient-to-br hover:from-cyan-500 hover:to-gray-400 hover:bg-black"
                  >
                    Search
                  </button>
                </div>
              </form>
              <div className="flex justify-between  w-full lg:w-1/4">
              <select
                className="px-4 py-3 w-48 md:w-60 mr-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 text-sm appearance-none "
                value={yourSelectedStateValueLocation}
                onChange={(e) => {
                  setyourSelectedStateValueLocation(e.target.value);
                  handleFilterChange(
                    yourSelectedStateValueType,
                    e.target.value
                  );
                }}
              >
                <option value="">all location</option>
                <option value="amman">amman</option>
                <option value="zarqa">zarqa</option>
                <option value="Irbid">Irbid</option>
                <option value="Ajloun">Ajloun</option>
                <option value="Aqaba">Aqaba</option>
              </select>
              <select
                className="px-4 py-3 w-48 md:w-60  border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 text-sm appearance-none "
                value={yourSelectedStateValueType}
                onChange={(e) => {
                  setyourSelectedStateValueType(e.target.value);
                  handleFilterChange(
                    e.target.value,
                    yourSelectedStateValueLocation
                  );
                }}
              >
                <option value="">All Categories</option>
                <option value="resturant">restaurants</option>
                <option value="LanguageInstitute">Language Institute</option>
                <option value="Shop">Shop</option>
              </select>
              </div>
          </div>
        </div>
      </div>
      <div className="text-center text-4xl font-serif text-black font-bold mt-20 mb-5 ">
        <p>
          Try <span className="text-5xl text-cyan-500">A</span> Culture
        </p>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-20 mt-20">
        {slicedArray.map((card) => (
          <Card key={card.id} className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                className="h-96"
                src={`http://localhost:5000/${card.businessImage}`}
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody className="h-64">
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className=" font-bold"
                >
                  {card.businessName}
                </Typography>
              </div>
              <Typography color="gray">
                <span className="text-lg font-semibold"> Work Days :</span>
                {card.WorkDays}
              </Typography>
              <Typography color="gray">
                <span className="text-lg font-semibold"> From :</span>
                {card.FromHours} <br></br>{" "}
                <span className="text-lg font-semibold">To </span>{" "}
                {card.ToHours}
              </Typography>
              <Typography color="gray">
                <span className="text-lg font-semibold"> Phone Number :</span>
                {card.phoneNumber}
              </Typography>
              <Typography color="gray">
                <span className="text-lg font-semibold"> Location :</span>
                {card.location}
              </Typography>
            </CardBody>
            <CardFooter className="pt-3">
            {card?.UsersIdRate?.includes(UserIdApp) ?
        <div className="flex">
        <TotalRating rating={card.rating}/>
         <p className="bg-base-200  w-6 h-6 rounded-full ml-5 text-center">{(Math.round((card.rating)* 10) / 10)



}</p>  
        </div>
        : 
        <Rating
                ServiceId={card._id}
                card={card}
                UserIdApp={UserIdApp}
                rating={card.rating}
                currentPage={currentPage}
              />
      }
            
            </CardFooter>
          </Card>
        ))}
      </div>

      {/*pagination*/}
      <div className="flex flex-col justify-center items-center  mt-20 w-full">
        <Pagination
          count={totalPagesArray}
          page={currentPage}
          onChange={handleChangeArray}
        />
      </div>
    </div>
  );
}
export default Culture;
