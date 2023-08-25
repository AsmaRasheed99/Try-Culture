import { Card } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Events = ({country}) => {
  
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const events = await axios.get("http://localhost:5000/api/getAllEvents");
    setEvents(events.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);




/// filter 


const [SearchTerm, setSearchTerm] = useState("");
const [FilteredEvents, setFilteredEvents] = useState([]);
const [yourSelectedStateValueLocation, setyourSelectedStateValueLocation] = useState("");
const [yourSelectedStateValueType, setyourSelectedStateValueType] = useState("");



const filterDataByName = (searchTerm) => {
    const filteredDataBusiness = events.filter((item) =>
      item.EventName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filteredDataBusiness);
  };


const handleFilterChange = (typeValue, LocationValue) => {


  const filteredDataBusiness = events?.filter(
    (item) =>
      item.Culture?.toLowerCase().includes(typeValue.toLowerCase()) && item.location?.toLowerCase().includes(LocationValue.toLowerCase())
  );
  setFilteredEvents(filteredDataBusiness);

};


  return (
   <>
   

   <div className="flex justify-center mt-5 mb-5">
        <div className="w-full md:w-full mx-8  p-5 rounded-lg   transform transition duration-300 ">
          <div className="relative">
          
            <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full  ">

            <form className="w-full mb-5 lg:mb-0   lg:w-3/4 mr-3 ">
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
              <div className="flex justify-between gap-3 w-full lg:w-1/4">
              <select
                className="px-4 py-3 w-48 md:w-60  border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 text-sm appearance-none "
                value={yourSelectedStateValueLocation}
                onChange={(e) => {
                  setyourSelectedStateValueLocation(e.target.value);
                  handleFilterChange(
                    yourSelectedStateValueType,
                    e.target.value
                  );
                }}
              >
                <option value="">Location</option>
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
                <option value="">Culture</option>
                <option value="China">China</option>
                <option value="Jordan">Jordan</option>
                <option value="Egypt">Egypt</option>
              </select>
              </div>
              </div>
        
          
          </div>
         
       



        </div>
      </div>




      <div className='flex flex-wrap gap-4 justify-center '>

               {FilteredEvents?.map((event, index) => (
                <div key={index} className="border rounded-md shadow-md m-5 p-5 lg:w-1/3 w-full bg-base-200 hover:scale-105">
                  <div className="ei_Dot dot_active" />
                  <div className="ei_Title font-bold text-xl mb-3">{event.EventName}</div><br></br>
                  <div className="ei_Title"><span className='font-bold text-lg'>Organized By :</span>  {event.Organizer}</div><br></br>

                  <div className="ei_Title"><span className='font-bold text-lg'>On :</span> {event.Date}</div><br></br>
                  <div className="ei_Title"> <span className='font-bold text-lg'>At :</span> {event.Time}</div><br></br>
                  <div className="ei_Title"><span className='font-bold text-lg'>At :</span>{event.location}</div><br></br>
                  <Card className="p-5 my-5 ">{event.Details}</Card><br></br>
                </div>
              ))}
                   </div>

   
   </>
  )
}

export default Events