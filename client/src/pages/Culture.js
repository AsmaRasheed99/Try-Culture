import React from "react";
import { useState , useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Rating from "../components/Rating";
import axios from "axios";
import {  useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  
} from "@material-tailwind/react";
import TotalRating from "../components/TotalRating";

import { UserContext } from "../UserContext";

function Culture({UserIdApp}) {
  console.log(UserIdApp);
  const { country } = useParams();
  console.log(country)
  const [Business, setBusiness] = useState([]);
  const [Culture , setCulture]= useState([]);
  const[showRating, setShowRating] = useState(true);
  const { RateRefresh,setRateRefresh} = useContext(UserContext);

  // const [Flags, setFlags] = useState([]);
  const fetchServices = async () => {

    try {
      const response = await axios.get(
        `http://localhost:5000/api/getBusinessCulture/${country}`
      );
      // const country = country;
      console.log(response.data)
    //  setBusiness(response.data);
      setBusiness(() => {
        const newItems = response.data.filter((item) => item.flag && item.Subscriped !== false);
        setBusiness(newItems);

        return newItems;

      });
    } catch (error) {
      console.error(error);
    }

    try {
      const culture = await axios.get(`http://localhost:5000/api/oneCulture/${country}`)
      setCulture(culture.data);
      // console.log(Culture.HeroImage)
    } catch (error) {
      console.error(error.message);
    }
  };

  const [FilteredBusiness, setFilteredBusiness] = useState([]);

useEffect(()=> {
  fetchServices();
  setShowRating(country?.UsersIdRate?.includes(UserIdApp))
  

}, [RateRefresh ])

useEffect(()=>{
  setFilteredBusiness(Business)

},[Business])

console.log(Business)
  
  const [currentResPage, setCurrentResPage] = useState(1);


  const itemsPerPage = 3;

  const totalResPagesArray = Math.ceil(Business.length / itemsPerPage);


  const startResIndexArray = (currentResPage - 1) * itemsPerPage;
  const endResIndexArray = startResIndexArray + itemsPerPage;
  const slicedResArray = FilteredBusiness.slice(startResIndexArray, endResIndexArray);


 /// filter 

  const handleResChangeArray = (event, page) => {
    setCurrentResPage(page);}


    const [SearchTerm0, setSearchTerm0] = useState("");
    const [SearchType00, setSearchType00] = useState("");

    const setSearchType0 = (typeValue) => {
        const filteredDataUsers = Business?.filter(
          (item) =>
            item.businessType?.toLowerCase().includes(typeValue.toLowerCase()) 
        );
        setFilteredBusiness(filteredDataUsers);
    
    
    };
 
    const filterDataByNameVegetables0 = (searchTermVegetables0) => {
        const filteredDataVegetables = Business.filter((item) =>
          item.businessName.toLowerCase().includes(searchTermVegetables0.toLowerCase())
        );
        setFilteredBusiness(filteredDataVegetables);
        // setCurrentPageVegetables(1);
      };
   console.log(Culture)
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      {/* hero section  */}
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10 object-cover ">
          <img
            style={{
              
              boxShadow: "1px 1px 3px grey",
            }}
            src={Culture?.HeroImage}
          />
          <div>
            <h1 className="text-5xl font-serif italic font-bold">
              Welcome to {Culture.Culture}!
            </h1>
            <p className="py-6">
               {Culture.Information}
           
            </p>
            <Link to="/Calendar">
              {" "}
              <button className="btn bg-cyan-600">Events</button>{" "}
            </Link>
          </div>
        </div>
      </div> */}
    <section className="dark:bg-gray-800 dark:text-gray-100">
  <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
    <div className="flex items-center font-serif italic font-bold justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <img
            src={Culture?.HeroImage}
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
        <br className="hidden md:inline md:hidden" />
      </p>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
         
      <div className="flex items-center justify-center">
         
      <Link to="/Calendar">
              {" "}
              <button className="btn bg-cyan-600">Events</button>{" "}
            </Link>
                  
      </div>
       </div>
    </div>
  </div>
</section>
      <div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-full mx-8 shadow shadow-black p-5 rounded-lg bg-white border-solid border-1 border-[#0e0d0d] transform transition duration-300 ">
          <div className="relative">
            <div className="absolute flex items-center ml-2 h-full">
              <svg
                className="w-4 h-4 fill-current text-primary-gray-dark"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by listing, location, bedroom number..."
              className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              value={SearchTerm0}
              onChange={(e) => {
                setSearchTerm0(e.target.value);
               
                filterDataByNameVegetables0(e.target.value);

              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="font-medium">Filters</p>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 ">
              <select
                className="px-4 py-3 w-48 md:w-60 rounded-md bg-gray-100 border-yellow-500 border-2 focus:border-yellow-600 focus:bg-white focus:ring-0 text-sm appearance-none mr-5"
                value={SearchType00}
                onChange={(e) => {setSearchType00(e.target.value)
                  setSearchType0(e.target.value)
                
                }}
              >
                <option value="">All business types</option>
                <option value="resturant">restaurants</option>
                <option value="fruit">fruit</option>
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
      {slicedResArray.map (((card) =>

      <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
                  src={`http://localhost:5000/${card.businessImage}`}
                  alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className=" font-bold">
            {card.businessName}
          </Typography>
          
        </div>
        <Typography color="gray">
        <span className="text-lg font-semibold"> Work Days :</span> 
        {card.WorkDays}
        </Typography>
        <Typography color="gray">
        <span className="text-lg font-semibold"> From :</span> 
        {card.FromHours} <br></br> <span className="text-lg font-semibold">To </span> {card.ToHours}
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
        <Rating ServiceId={card._id} card={card} UserIdApp={UserIdApp}/>
        { card?.UsersIdRate?.includes(UserIdApp)?
          <TotalRating rating={card.rating}/> : null
        }
      </CardFooter>
    </Card>
    ))}
      </div>
      
        {/*pagination*/}
        <div className="flex flex-col justify-center items-center  mt-20 w-full">
          
          <Pagination
            count={totalResPagesArray}
            page={currentResPage}
            onChange={handleResChangeArray}
          />
        </div>
    </div>
  );
}
export default Culture;
