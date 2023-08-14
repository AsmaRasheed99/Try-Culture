import React from "react";
import { useEffect,useState } from 'react';
import axios from 'axios';
import Icon from '@mdi/react';
import { mdiAccountMultipleOutline ,
  mdiAccountTie,
  mdiAlert,
  mdiStorePlus,
  mdiStoreClockOutline,
  mdiHumanQueue,
} from '@mdi/js';

const Statistics = () => {


  const [users ,setUsers] = useState([])
  const [Subsicribers ,setSubsicribers] = useState([])
  const [Reports ,setReports] = useState([])
  const [Services ,setServices] = useState([])
  const [Cultures ,setCultures] = useState([])
  const [pending ,setPending] = useState([])
  
  
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
  
  
      axios.get('http://localhost:5000/api/AllReports')
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => console.log(error.message))
  
      
      axios.get('http://localhost:5000/api/getAllBusniess')
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => console.log(error.message))
  
      axios.get('http://localhost:5000/api/getAllCultures')
      .then((response) => {
        setCultures(response.data);
        
      })
      .catch((error) => console.log(error.message))

      axios.get('http://localhost:5000/api/pendingBusiness')
      .then((response) => {
        setPending(response.data);
        
      })
      .catch((error) => console.log(error.message))
  
      
  
  }, []);
  











  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6 p-10">
      <div className="!z-5 relative flex bg-[#00acc1] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px]">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">

          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700 ">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon   path={mdiAccountTie } size={1} />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-black">Total Subsicribers</p>
          <h4 className="text-xl font-bold text-black">
            {Subsicribers.length}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-[#00acc1] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon  path={mdiAccountMultipleOutline} size={1} />

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-black">
            Total Users
          </p>
          <h4 className="text-xl font-bold text-black">
            {users.length}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-[#00acc1] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon  path={mdiAlert} size={1} />
            

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-black">Total Reports</p>
          <h4 className="text-xl font-bold text-black">
           {Reports.length}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex bg-[#00acc1] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon  path={mdiStorePlus } size={1} />

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-black">Total Services </p>
          <h4 className="text-xl font-bold text-black">
           {Services.length}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex bg-[#00acc1] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon path={mdiHumanQueue } size={1} />

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-black">Total Cultures</p>
          <h4 className="text-xl font-bold text-black">
            {Cultures.length}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-[#00acc1] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
            <Icon  path={mdiStoreClockOutline} size={1} />

            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-black">
            Pending Businesses
          </p>
          <h4 className="text-xl font-bold text-black">
            {pending.length}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
