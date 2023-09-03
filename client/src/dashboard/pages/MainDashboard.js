import React, { useEffect, useState } from 'react'
import Statistics from '../pages/Statistics';
import axios from 'axios';




const MainDashboard = () => {
  const [users ,setUsers] = useState([])
  const [Subsicribers ,setSubsicribers] = useState([])
  
  const [Cultures ,setCultures] = useState([])
  
  
   useEffect(()=>{
  
  
    axios.get('http://localhost:5000/api/users')
    .then((response) => {
      setUsers(response.data)
      console.log(response.data)
    })
    .catch((error) => console.log(error.message))
  
  
      axios.get('http://localhost:5000/api/Providers')
      .then((response) => {
        setSubsicribers(response.data);
      })
      .catch((error) => console.log(error.message))
  
  
      // axios.get('http://localhost:5000/api/AllReports')
      // .then((response) => {
      //   setReports(response.data);
      // })
      // .catch((error) => console.log(error.message))
  
      
      // axios.get('http://localhost:5000/api/getAllBusniess')
      // .then((response) => {
      //   setServices(response.data);
      // })
      // .catch((error) => console.log(error.message))
  
      axios.get('http://localhost:5000/api/getAllCultures')
      .then((response) => {
        setCultures(response.data);
        
      })
      .catch((error) => console.log(error.message))

      // axios.get('http://localhost:5000/api/pendingBusiness')
      // .then((response) => {
      //   setPending(response.data);
        
      // })
      // .catch((error) => console.log(error.message))
  
      
  
  }, []);
  





  return (
  

<div className='bg-[#f5f8fe] pt-10 pb-10'>

<Statistics/>

<>
 
  <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
    <img
      src="https://i.ibb.co/KjrPCyW/map.png"
      alt="world map image"
      className="w-full xl:h-full h-96  object-fill sm:block hidden"
    />
    <img
      src="https://i.ibb.co/SXKj9Mf/map-bg.png"
      alt="mobile-image"
      className="sm:hidden -mt-10 block w-full h-96  object-fill absolute z-0"
    />
    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-[#00abc19f] rounded-lg sm:absolute relative z-20  mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
      <p className="text-3xl font-semibold text-gray-800">{Subsicribers.length}</p>
      <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
        Active Subsicribers
      </p>
    </div>
    <div className="shadow-lg xl:p-6 p-4  sm:w-auto w-full bg-[#00abc19f] rounded-lg sm:absolute relative z-20 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
      <p className="text-3xl font-semibold text-gray-800">{users.length}</p>
      <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
        Active Users
      </p>
    </div>
    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-[#00abc19f] rounded-lg sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
      <p className="text-3xl font-semibold text-gray-800">{Cultures.length}</p>
      <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
        Cultures Included
      </p>
    </div>
  </div>
</>








</div>

  );
}

export default MainDashboard