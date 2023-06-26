import React, { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function SignIn() {

   



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

        let x =[]
             if (response.data.user0.role==0){
             x= [false ,true,true ]
           }else if(response.data.user0.role==1){
              x= [true ,false,true ]
           }else if(response.data.user0.role==2){
              x= [true ,true,false]
           }




           localStorage.setItem("auth",(response.data.token))

          //  localStorage.setItem("SignStatus","SignOut")
           localStorage.setItem("roles",JSON.stringify(x))
           window.location.href = 'http://localhost:3000/ServiceForm';
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
          <h1 className="text-3xl font-semibold text-center text-cyan-500 uppercase">
            Welcome
          </h1>
          <form className="mt-6"  onSubmit={handleSubmit}>
            <div className="mb-2 p-3">
              <input
               type="email" placeholder="Email"
               value={email}
               onChange={(e) => setemail(e.target.value)}
                className="block w-full text-xl px-4 py-2 mt-2 text-cyan-500 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
              />
                                          <p className="text-red-500">{emailp}</p>

            </div>
            <div className="mb-2 p-3">
              <input
                type="password" placeholder="Password" 
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="block w-full px-4 text-xl py-2 mt-2 text-cyan-500 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
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
              to="/SignUp"
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
export default SignIn;
