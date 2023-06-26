import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SignUp() {

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
        role: 2,
    };

    try {
        // Send the data to the server using an HTTP POST request
        const response = await axios.post(
        "http://localhost:5000/api/users",
        userData
        );
        let x = [];
        if (response.data.addUser.role == 0) {
        x = [false, true, true];
        } else if (response.data.addUser.role == 1) {
        x = [true, false, true];
        } else if (response.data.addUser.role == 2) {
        x = [true, true, false];
        }
        localStorage.setItem("auth", response.data.token);
        window.location.href = "http://localhost:3000/ServiceForm";
    } catch (error) {
        console.error("Error inserting data:", error);
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
        <h1 className="text-3xl font-bold text-center text-cyan-500 uppercase">
           Join Our Family
        </h1>
        <h1 className="font-bold text-center text-black ">
           subscribe and share your business with the world
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2 p-3">
            <input
                type="email" placeholder="Email" value={email}
                onChange={(e) => setemail(e.target.value)} 
                className="block w-full text-xl px-4 py-2 mt-2 text-cyan-500 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             <p className="text-red-500">{emailp}</p>

            </div>
            <div className="mb-2 p-3">
            <input
                type="text" placeholder="Full Name" value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full text-xl px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
            />
              <p className="text-red-500">{namep}</p>

            </div>
            <div className="mb-2 p-3">
            <input
              type="tel" placeholder="07xxxxxxxx"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
                className="block text-xl w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
            />
             <p className="text-red-500">{phonep}</p>

            </div>
            <div className="mb-2 p-3">
            <input
                type="password" placeholder="Password" 
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="block text-xl w-full px-4 py-2 mt-2 text-cyan-500 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <p className="text-red-500">{passwordp}</p>

            </div>
            <div className="mb-2 p-3">
            <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block text-xl w-full px-4 py-2 mt-2 text-cyan-500 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
            />
                          <p className="text-red-500">{ConfirmPasswordp}</p>

            </div>

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
            to="/SignIn"
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

export default SignUp;
