import React, { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../UserContext';
import Icon from '@mdi/react';
import { mdiEyeOutline } from '@mdi/js';
import { mdiEyeOffOutline } from '@mdi/js';


function Login() {

   
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


    const [email, setemail] = useState("");
    const [emailp, setemailp] = useState("");
    const [password, setpassword] = useState("");
    const [passwordp, setpasswordp] = useState("");
 
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);
   

   
    const handleSubmit = async (event) => {

       event.preventDefault();



       const userData = {
        email: email,
        password:password
      };

      try {
        const response = await axios.post(
          "http://localhost:5000/api/usersLogin",
          userData
        );
        console.log("Data inserted:", response.data);
        if(response.data.error != 'incorrect password'){
         console.log("success")
         console.log(response.data.token);

           localStorage.setItem("auth",(response.data.token))

          //  localStorage.setItem("SignStatus","SignOut")
           window.location.href = 'http://localhost:3000/';
        }else{
          console.log("failed")
        }
        
      } catch (error) {
        console.error("Error inserting data:", error);
        console.log("error")
      }



    }

    

 


  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden" style={{backgroundColor:'#e5f5f7'}}>
        <div className="w-full p-12 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-5xl font-semibold text-center text-cyan-500 uppercase">
            Sign in
          </h1>
          <form className="mt-6"  onSubmit={handleSubmit}>
            <div className="mb-2 p-3">
              <input
               type="email" placeholder="Email"
               value={email}
               onChange={(e) => setemail(e.target.value)}
               className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
               />
                                          <p className="text-red-500">{emailp}</p>

            </div>
            <div className="p-3 relative">
              <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setpassword(e.target.value)}
              />
              <button
                className="absolute right-7 top-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Icon path={mdiEyeOutline} size={1} />
                ) : (
                  <Icon path={mdiEyeOffOutline} size={1} />
                )}
              </button>
            </div>
              <p className="text-red-500  px-3">{passwordp}</p>
            <a href="#" className="text-lg text-cyan-400 hover:underline">
              Forgot Password?
            </a>
            <div className="mt-6 p-3">
                <button className="w-full text-2xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-400 focus:outline-none focus:bg-cyan-400">
                  Login
                </button>{" "}
            </div>
          </form>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white">Or</div>
          </div>
         

          <p className="mt-8 text-lg font-light text-center text-gray-500">
            {" "}
            Don't have an account?{" "}
            <Link
              to="/Registration"
              className="font-medium text-cyan-400 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
