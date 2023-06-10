
import { ReactDOM } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Blogs from "./components/Blogs";
import Cultures from "./components/Cultures";
import Culture from "./components/Culture";
import Profile from "./components/Profile";
import Calendar from "./components/Calendar";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar"


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from "./components/Sidebar";
import AboutUs from "./components/AboutUs";

export default function App() {

  const [hideRouter1, setHideRouter1] = useState(false);
  const [hideRouter2, setHideRouter2] = useState(true);
  const AppRouter1 = () => {
  
    return ( 
      
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
    <Route index element={<Home />} />
    <Route path="/Login" element={<Login/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/Registration" element={<Registration/>}/>
    <Route path="/Blogs" element={<Blogs/>}/>
    <Route path="/Cultures" element={<Cultures/>}/>
    <Route path="/Culture" element={<Culture/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Calendar" element={<Calendar/>}/>
    {/* <Route path="/Admin" element={<Admin/>}/> */}
        </Routes>
        <Footer/>
      </Router>
     
    );
  };
  const AppRouter2 = () => {

    return (
      <Router>
               <Sidebar/>

       <div style={{width:"100%"}}>
       <Navbar/>
        <Routes>
         
        <Route index element={<Admin />} />
        <Route path="/Profile" element={<Profile/>}/>

        </Routes>
        </div>
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
        <div className='flex'>
        <AppRouter2 />
       
        </div>
        
        </>
      )}
    </>
    // <BrowserRouter>
    // <Navbar/>
    // <Routes>
    // <Route path="/" element={<Home/>}/>
    // <Route index element={<Home />} />
    // <Route path="/Login" element={<Login/>}/>
    // <Route path="/Registration" element={<Registration/>}/>
    // <Route path="/Blogs" element={<Blogs/>}/>
    // <Route path="/Cultures" element={<Cultures/>}/>
    // <Route path="/Culture" element={<Culture/>}/>
    // <Route path="/Profile" element={<Profile/>}/>
    // <Route path="/Calendar" element={<Calendar/>}/>
    // <Route path="/Admin" element={<Admin/>}/>
    // </Routes>
    // <Footer/>
    //   </BrowserRouter>
  )
}