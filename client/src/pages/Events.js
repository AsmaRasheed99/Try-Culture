import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Events = ({country}) => {
  console.log(country)
  
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

console.log(events)



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
                className="px-4 py-3 w-48 md:w-60 rounded-md border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 text-sm appearance-none "
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
                className="px-4 py-3 w-48 md:w-60 rounded-md border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 text-sm appearance-none "
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
      </div>




      <div className='flex flex-wrap gap-4 justify-center '>

               {FilteredEvents?.map((event, index) => (
                <div key={index} className="event_item border p-5 w-96">
                  <div className="ei_Dot dot_active" />
                  <div className="ei_Title font-bold text-lg">{event.EventName}</div><br></br>
                  <div className="ei_Title">Organized By : {event.Organizer}</div><br></br>

                  <div className="ei_Title">On : {event.Date}</div><br></br>
                  <div className="ei_Title"> At : {event.Time}</div><br></br>
                  <div className="ei_Title">{event.location}</div><br></br>
                  <div className="ei_Title">{event.Details}</div><br></br>
                </div>
              ))}
                   </div>

   
   </>
  )
}

export default Events