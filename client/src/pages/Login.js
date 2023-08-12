import React, { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../UserContext';
import Icon from '@mdi/react';
import { mdiEyeOutline } from '@mdi/js';
import { mdiEyeOffOutline } from '@mdi/js';
import {useGoogleLogin } from '@react-oauth/google';



function Login() {
    const [email, setemail] = useState("");
    const [emailp, setemailp] = useState("");
    const [password, setpassword] = useState("");
    const [passwordp, setpasswordp] = useState("");
   
  const [showPassword, setShowPassword] = useState(false);
  const [EmailError, setEmailError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);

  function validateEmail(userEmail) {
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setemailp("! E-mail must be in a valid format such as example@gmail.com");
      setEmailError(true)
      return false;
    } else {
      setemail("");
      return true;
    }
  }

  function validatePassword(userPassword) {
    let password = userPassword;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(true)
      setpasswordp(
        "! Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character"
      );
      return false;
    } else {
      setpasswordp("");
      return true;
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [userGoogle, setUserGoogle] = useState([]);

  
 
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);




   
    const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUserGoogle(codeResponse),
      onError: (error) => console.log("Login Failed:", error),
    }); 

    useEffect(() => {
      if (userGoogle.length !== 0) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userGoogle.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${userGoogle.access_token}`,
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            axios
              .post("http://localhost:5000/api/newUserGoogle", res.data)
              .then((response) => {
                if (response.data.error !== "incorrect password" && response.data.error === undefined) {
    
                  localStorage.setItem("auth", response.data.token);
                  window.location.href = "http://localhost:3000/";
                  setpasswordp(response.data.error === "incorrect password" ? "incorrect password": "");
                  setemailp(response.data.error === "incorrect password" ? " ": response.data.error );
                }else{
                  setpasswordp(response.data.error === "incorrect password" ? "incorrect password": "");
                  setemailp(response.data.error === "incorrect password" ? " ": response.data.error );
    
                }
               
              })
              .catch((err) => console.log(err.message));
          })
          .catch((err) => console.log(err.message));
      }
    }, [userGoogle]);


    const handleSubmit = async (event) => {

       event.preventDefault();



       const userData = {
        email: email,
        password:password
      };

      if(validateEmail(email)&& validatePassword(password)){

        try {
          const response = await axios.post(
            "http://localhost:5000/api/usersLogin",
            userData
          );
          console.log("Data inserted:", response.data);
          if (response.data.error !== "incorrect password" && response.data.error === undefined) {
            localStorage.setItem("auth", response.data.token);
            window.location.href = "http://localhost:3000/";
            setpasswordp("");
            setemailp("");
          } else {
            setpasswordp(response.data.error === "incorrect password" ? "incorrect password": "");
            setemailp(response.data.error === "incorrect password" ? " ": response.data.error );
          }
        } catch (error) {
          console.error("Error inserting data:", error);
          setemailp(error.response.data.error)
        }

        
      }

  
        
     



    }

    

    const backgroundImageUrl = 'https://img.freepik.com/free-vector/worldwide-connection-gray-background-illustration-vector_53876-61769.jpg?size=626&ext=jpg&ga=GA1.1.558610342.1683500202&semt=ais';



  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="w-full p-12 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <div className="w-full flex items-center justify-center">
          <p
          className=" cursor-pointer py-1.5  lg:pl-2 text-5xl font-serif "
        >
          Try <span className="text-5xl text-cyan-500">A</span> Culture
        </p>


          </div>

          <h1 className="text-2xl  text-center text-black ">
            Sign in
          </h1>
   
          <form className="mt-6"  onSubmit={handleSubmit}>
            <div className="mb-2 p-3">
              {!EmailError ?<>
              
                <input
               type="email" placeholder="Email"
               value={email}
               onChange={(e) => setemail(e.target.value)}
               className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-xl focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
               />


              </> :<>
              
              <input
               type="email" placeholder="Email"
               value={email}
               onChange={(e) => setemail(e.target.value)}
               className="w-full focus:ring-red-500 focus:border-red-500  text-xl px-8 py-5 rounded-lg font-medium bg-gray-100 border border-red-500 placeholder-gray-500 focus:outline-none  focus:bg-white mt-5"
               />
              
              </>}
         
               <p className="text-red-500">{emailp}</p>

            </div>
            <div className="p-3 relative">

              {!PasswordError ? <>
              
                <input
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-xl focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setpassword(e.target.value)}
              />
              
              </> :<>
              <input
               className="w-full focus:ring-red-500 focus:border-red-500  text-xl px-8 py-5 rounded-lg font-medium bg-gray-100 border border-red-500 placeholder-gray-500 focus:outline-none  focus:bg-white mt-5"
               type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setpassword(e.target.value)}
              />
              
              
              
              </>}
      
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
              <div className="px-5">
              <Link to='/ForgotPassword' className="text-lg text-cyan-400 hover:underline">
              Forgot Password?
            </Link>

              </div>
   
            <div className="mt-6 p-3">
                <button className="w-full text-2xl px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-400 focus:outline-none focus:bg-cyan-400">
                  Login
                </button>{" "}
            </div>
          </form>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white rounded-full ">Or</div>
          </div>
         
          
                <button
                  id="google-sign-in"
                  className="w-full flex items-center justify-center mt-10 pr-5"
                  onClick={() => login()}
                >
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign-In with Google</span>
                </button>
             
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
