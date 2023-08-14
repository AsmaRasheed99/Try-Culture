
import { useEffect } from "react";
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
import BlogDetails from "./components/BlogDetails";
import Events from "./pages/Events";
import ForgotPassword from "./pages/ForgotPassword";

//------------------ Dashboard  ----------------------- //

import Sidebar from "./dashboard/components/Sidebar";
import NavListMenuD from "./dashboard/components/NavDashboard";
import MainDashboard from "./dashboard/pages/MainDashboard";
import EditAboutContact from "./dashboard/pages/EditAboutUs";
import UserInfo from "./dashboard/pages/UserInfo";
import AdminInfo from "./dashboard/pages/AdminInfo";
import ContactAdmin from "./dashboard/pages/ContactAdmin";
import Pending from "./dashboard/pages/Pending";
import AddCultures from "./dashboard/pages/AddCultures";
import EditCultures from "./dashboard/pages/EditCultures";
import Reports from "./dashboard/pages/Reports";
import Subsicribers from "./dashboard/pages/Subsicribers";



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


export default function App() {

  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter3, setHideRouterBusiness] = useState(true);
  const [UserIdApp, setUserIdApp] = useState("");
  const [UserApp, setUserApp] = useState("");

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");

      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        let x =[];

        setUserIdApp(response.data.user.id);
        setUserApp(response.data.user);
      
        if(response.data.user.role ==1){
          x= [true ,false,true ]
        }else if (response.data.user.role ==2){
          x= [true ,true,false]
        }else{
          x= [false ,true,true ]
        }
        setHideRouterUser(x[0]);
        setHideRouterAdmin(x[1]);
        setHideRouterBusiness(x[2]);

      }
    } catch (error) {
      console.error(error);
    localStorage.removeItem("auth")
    window.location.href = "http://localhost:3000/Login"
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
    <Route path="/Calendar/:country" element={<Calendar/>}/>
    <Route path="SignUp" element={<SignUp/>}/>
    <Route path="SignIn" element={<SignIn/>}/>
    <Route path="About" element={<About />} /> 
    <Route path="Contact" element={<Contact />} /> 
    <Route path="Messenger" element={<Messenger UserApp={UserApp} />} /> 
    <Route path="/BlogDetails/:id" element={<BlogDetails UserApp={UserApp}/>}/>
    <Route path="/Events" element={<Events/>}/>
    <Route path="/ForgotPassword" element={<ForgotPassword/>}/>





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
          <Route path="ContactAdmin" element={<ContactAdmin />} />
          <Route path="Subsicribers" element={<Subsicribers />} />
          <Route path="ListAdmin" element={<AdminInfo />} />
          <Route path="Pending" element={<Pending />} />
          <Route path="AddCultures" element={<AddCultures />} />
          <Route path="EditCultures" element={<EditCultures />} />
          <Route path="Reports" element={<Reports />} /> 

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
    <Route path="/Calendar/:country" element={<Calendar/>}/>
    <Route path="SignUp" element={<SignUp/>}/>
    <Route path="About" element={<About />} /> 
    <Route path="ContactUs" element={<Contact />} /> 
    <Route path="/BlogDetails/:id" element={<BlogDetails UserApp={UserApp}/>}/>
    <Route path="ServiceForm" element={<ServiceForm UserIdApp = {UserIdApp}/>}/>
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