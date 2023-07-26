import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Icon from "@mdi/react";
import { mdiEyeOutline } from "@mdi/js";
import { mdiEyeOffOutline } from "@mdi/js";

function Registration() {
  const [name, setName] = useState("");
  const [namep, setNamep] = useState("");

  const [email, setemail] = useState("");
  const [emailp, setemailp] = useState("");

  const [phone, setphone] = useState("");
  const [phonep, setphonep] = useState("");

  const [password, setpassword] = useState("");
  const [passwordp, setpasswordp] = useState("");

  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ConfirmPasswordp, setConfirmPasswordp] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    validateName(name);
    validatePassword(password);
    validateEmail(email);
    validatePhone(phone);
    validateConfirmPassword();

    if (
      validateName(name) &&
      validatePassword(password) &&
      validateEmail(email) &&
      validatePhone(phone) &&
      validateConfirmPassword()
    ) {
      const userData = {
        firstName: name,
        email: email,
        password: password,
        role: 0,
        phone: phone,
      };
      console.log(phone);
      try {
        // Send the data to the server using an HTTP POST request
        const response = await axios.post(
          "http://localhost:5000/api/users",
          userData
        );
        if (response.data.error === "User Already Exist") {
          setemailp("User already exists");
        } else {
          localStorage.setItem("auth", response.data.token);
          window.location.href = "http://localhost:3000/";
        }
      } catch (error) {
        // console.error("Error inserting data:", error);
        console.log(error);
      }
    }
  };

  function validateName(name) {
    if (name === "") {
      setNamep(" !please enter your name");
      return false;
    } else {
      setNamep("");
      return true;
    }
  }

  function validateEmail(userEmail) {
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
      setemailp("! E-mail must be in a valid format such as example@gmail.com");
      return false;
    } else {
      setemail("");
      return true;
    }
  }
  function validatePhone(userphone) {
    if (!/^07[0-9]{8}$/.test(userphone)) {
      setphonep("! Phone number must be 10 digits starting with 07");
      return false;
    }
    setphonep("");
    return true;
  }

  function validatePassword(userPassword) {
    let password = userPassword;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      setpasswordp(
        "! Password must contain at least 8 characters, 1 number, 1 uppercase letter, and 1 special character"
      );
      return false;
    } else {
      setpasswordp("");
      return true;
    }
  }

  function validateConfirmPassword() {
    if (password !== ConfirmPassword) {
      setConfirmPasswordp("! Passwords do not match");
      return false;
    } else {
      setConfirmPasswordp("");
      return true;
    }
  }

  return (
    <>
      <div
        className="relative flex flex-col justify-center min-h-screen overflow-hidden"
        style={{ backgroundColor: "#e5f5f7" }}
      >
        <div className="w-full p-12 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-5xl font-bold text-center text-cyan-500 uppercase">
            Register
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="p-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              />
            </div>
              <p className="text-red-500  px-3">{emailp}</p>
            <div className="p-3">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              />
            </div>
              <p className="text-red-500  px-3">{namep}</p>
            <div className=" p-3">
              <input
                type="tel"
                placeholder="07xxxxxxxx"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              />
            </div>
              <p className="text-red-500 px-3">{phonep}</p>
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

            <div className="p-3 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
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
              <p className="text-red-500  px-3">{ConfirmPasswordp}</p>

            <div className="mt-6 p-3">
              <button className="w-full px-4 py-2 text-2xl tracking-wide text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-400 focus:outline-none focus:bg-cyan-400">
                Sign Up
              </button>
            </div>
          </form>
          <div className="relative flex items-center justify-center w-full mt-6 border border-t">
            <div className="absolute px-5 bg-white">Or</div>
          </div>

          <p className="mt-8 text-lg font-light text-center text-gray-500">
            {" "}
            Already have an account?{" "}
            <Link
              to="/Login"
              className="font-medium text-cyan-400 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Registration;
