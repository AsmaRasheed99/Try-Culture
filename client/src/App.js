
import { ReactDOM, useEffect } from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Blogs from "./pages/Blogs";
import Cultures from "./pages/Cultures";
import Profile from "./pages/Profile";
import Calendar from "./pages/Calendar";
import Navbar from "./components/Navbar"
import Culture from "./pages/Culture"
import SignUp from "./pages/Provider/SignUp"
import SignIn from "./pages/Provider/SignIn";
import ServiceForm from "./pages/Provider/ServiceForm";
import axios from "axios";
import Payment from "./pages/Provider/Payment";
import About from "./pages/aboutPage/About";
import Contact from "./pages/Contact";
import Messenger from './pages/Messenger/Messenger'

//------------------ Dashboard  ----------------------- //

import Sidebar from "./pages/dashboard/Sidebar";
import NavListMenuD from "./pages/dashboard/NavDashboard";
import MainDashboard from "./pages/dashboard/MainDashboard";
import EditAboutContact from "./pages/dashboard/EditAboutUs";
import UserInfo from "./components/dashboard/UserInfo"
import ApproveTable from "./components/dashboard/ApproveTable";
import AdminInfo from "./components/dashboard/AdminInfo";
import  Chat  from "./pages/dashboard/Chat";
import Pending from "./components/dashboard/Pending";
import AddCultures from "./components/dashboard/AddCultures"
import EditCultures from "./components/dashboard/EditCultures"



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


export default function App() {

  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter3, setHideRouterProvider] = useState(true);
  const [UserIdApp, setUserIdApp] = useState("");
  const [UserApp, setUserApp] = useState("");

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      console.log(token);
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        let x =[];

        setUserIdApp(response.data.user.id);
        setUserApp(response.data.user);
         console.log(response.data.user.id);
         console.log(response.data.user.role);
        if(response.data.user.role ==1){
          x= [true ,false,true ]
        }else if (response.data.user.role ==2){
          x= [true ,true,false]
        }else{
          x= [false ,true,true ]
        }
        setHideRouterUser(x[0]);
        setHideRouterAdmin(x[1]);
        setHideRouterProvider(x[2]);
        console.log(x)

      }
    } catch (error) {
      console.error(error);
      // localStorage.removeItem("auth");
      // window.location.href = "http://localhost:3000/Login";
    } finally {
      console.log(false);
    }
  };
  
  useEffect(() => {
    fetchProtectedData();
  }, [])

  const AppRouter1 = () => {
  
    return ( 
      
      <Router>
        <Navbar/>
        <Routes>
    <Route index element={<Home />} />
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Registration" element={<Registration/>}/>
    <Route path="/Blogs" element={<Blogs/>}/>
    <Route path="/Cultures" element={<Cultures/>}/>
    <Route path="/Culture/:country" element={<Culture UserIdApp={UserIdApp}/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Calendar" element={<Calendar/>}/>
    <Route path="SignUp" element={<SignUp/>}/>
    <Route path="SignIn" element={<SignIn/>}/>
    <Route path="About" element={<About />} /> 
    <Route path="ContactUs" element={<Contact />} /> 
    <Route path="Messenger" element={<Messenger UserApp={UserApp} />} /> 


    {/* <Route path="ServiceForm" element={<ServiceForm/>}/> */}
    {/* <Route path="/Payment/:id" element={<Payment />} /> */}



        </Routes>
        <Footer/>
      </Router>
     
    );
  };
  const AppRouter2 = () => {

    return (
      <Router>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <NavListMenuD />
        <Routes>
          <Route index element={<MainDashboard />} />
          <Route path="ListUser" element={<UserInfo />} />
          <Route path="EditAboutContact" element={<EditAboutContact />} />
          <Route path="Chat" element={<Chat />} />
          {/* <Route path="UserProfile" element={<UserProfile />} /> */}
          <Route path="ListRestaurant" element={<ApproveTable />} />
          <Route path="ListAdmin" element={<AdminInfo />} />
          <Route path="Pending" element={<Pending />} />
          <Route path="AddCultures" element={<AddCultures />} />
          <Route path="EditCultures" element={<EditCultures />} />
        </Routes>
      </div>
    </Router>
    );
  };
  const AppRouter3 = () => {

    return ( 
      
      <Router>
        <Navbar/>
        <Routes>
    <Route index element={<Home />} />
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Registration" element={<Registration/>}/>
    <Route path="/Blogs" element={<Blogs/>}/>
    <Route path="/Cultures" element={<Cultures/>}/>
    <Route path="/Culture/:country" element={<Culture  UserIdApp={UserIdApp}/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Calendar" element={<Calendar/>}/>
    <Route path="SignUp" element={<SignUp/>}/>
    <Route path="About" element={<About />} /> 
    <Route path="ContactUs" element={<Contact />} /> 


    <Route path="ServiceForm" element={<ServiceForm UserIdApp = {UserIdApp}/>}/>
    {/* <Route path="Payment" element={<Payment/>}/> */}
    <Route path="/Payment/:id" element={<Payment UserIdApp = {UserIdApp} />} />
        </Routes>
        <Footer/>
      </Router>
     
    );
  };
  
  return (
    <>
    {hideRouter1 ? null : (
      <>
        <AppRouter1 />
      </>
    )}

    {hideRouter2 ? null : (
      <>
        <div className="flex">
          <AppRouter2 />
        </div>
      </>
    )}

    {hideRouter3 ? null : (
      <>
        <AppRouter3 />
      </>
    )}

  </>

 
  )
}