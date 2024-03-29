import React from "react";
import { Children, createContext, useState } from "react";

export const UserContext = createContext();
const UserProvider = ( {children} ) => {
  
  const [test, setTest] = useState([]);
  const [closeNav, setCloseNav] = useState();
  const [profileRefresh, setProfileRefresh] = useState([]);
  const [EventRefresh, setEventRefresh] = useState([]);
  const [RateRefresh, setRateRefresh] = useState([]);


  const updateTest = (newValue) => {
    setTest(newValue);
  };
  const updateNav = (newValue) => {
    setCloseNav(newValue);
  };
  const updateEventRefresh = (newValue) => {
    setEventRefresh(newValue);
  };
  const updateProfileRefresh = (newValue) => {
    setProfileRefresh(newValue);
  };
  const updateRateRefresh = (newValue) => {
    setRateRefresh(newValue);
  };
console.log(profileRefresh)


  

  return (
        <>
            <UserContext.Provider
                value={{
                 test,updateTest,closeNav,updateNav,profileRefresh,updateProfileRefresh,updateEventRefresh,EventRefresh,setRateRefresh,RateRefresh
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    )
};
 export default UserProvider;




