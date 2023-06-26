import React from "react";
import { useState , useEffect } from "react";
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



function Culture() {
  const { country } = useParams();
  console.log(country)
  const [Business, setBusiness] = useState([]);
  const [Culture , setCulture]= useState([]);
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


useEffect(()=> {
  fetchServices();
}, [])
  

  const [currentResPage, setCurrentResPage] = useState(1);


  const itemsPerPage = 3;

  const totalResPagesArray = Math.ceil(Business.length / itemsPerPage);


  const startResIndexArray = (currentResPage - 1) * itemsPerPage;
  const endResIndexArray = startResIndexArray + itemsPerPage;
  const slicedResArray = Business.slice(startResIndexArray, endResIndexArray);



  const handleResChangeArray = (event, page) => {
    setCurrentResPage(page);}


  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      {/* hero section  */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-10 object-cover h-100 w-100">
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              boxShadow: "1px 1px 3px grey",
            }}
            src={Culture.HeroImage}
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
      </div>
      <div className="text-center text-4xl font-serif text-black font-bold mt-20 mb-5 ">
        <p>
          Try <span className="text-5xl text-cyan-500">A</span> Culture 
        </p>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-20 mt-20">
      {Business.map (((card) =>

      <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={card.businessImage}
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
        <Rating/>
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
