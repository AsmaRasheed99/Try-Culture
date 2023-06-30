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

  const Guardian = () => {
    return (
      <svg
        className="fill-current"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30.3333 17C30.3333 13.4638 28.9286 10.0724 26.4281 7.57189C23.9276 5.0714 20.5362 3.66665 17 3.66665C13.4638 3.66665 10.0724 5.0714 7.57189 7.57189C5.0714 10.0724 3.66665 13.4638 3.66665 17V23.6666H8.66665C9.10867 23.6666 9.5326 23.8422 9.84516 24.1548C10.1577 24.4674 10.3333 24.8913 10.3333 25.3333V30.3333H23.6666V25.3333C23.6666 24.8913 23.8422 24.4674 24.1548 24.1548C24.4674 23.8422 24.8913 23.6666 25.3333 23.6666H30.3333V17ZM27 27V32C27 32.442 26.8244 32.8659 26.5118 33.1785C26.1993 33.4911 25.7753 33.6666 25.3333 33.6666H8.66665C8.22462 33.6666 7.8007 33.4911 7.48814 33.1785C7.17558 32.8659 6.99998 32.442 6.99998 32V27H1.99998C1.55795 27 1.13403 26.8244 0.821468 26.5118C0.508908 26.1993 0.333313 25.7753 0.333313 25.3333V17C0.333313 7.79498 7.79498 0.333313 17 0.333313C26.205 0.333313 33.6666 7.79498 33.6666 17V25.3333C33.6666 25.7753 33.4911 26.1993 33.1785 26.5118C32.8659 26.8244 32.442 27 32 27H27ZM9.49998 20.3333C9.17168 20.3333 8.84659 20.2687 8.54327 20.143C8.23996 20.0174 7.96436 19.8332 7.73221 19.6011C7.50007 19.3689 7.31592 19.0933 7.19028 18.79C7.06464 18.4867 6.99998 18.1616 6.99998 17.8333C6.99998 17.505 7.06464 17.1799 7.19028 16.8766C7.31592 16.5733 7.50007 16.2977 7.73221 16.0655C7.96436 15.8334 8.23996 15.6493 8.54327 15.5236C8.84659 15.398 9.17168 15.3333 9.49998 15.3333C10.163 15.3333 10.7989 15.5967 11.2677 16.0655C11.7366 16.5344 12 17.1703 12 17.8333C12 18.4964 11.7366 19.1322 11.2677 19.6011C10.7989 20.0699 10.163 20.3333 9.49998 20.3333ZM24.5 20.3333C24.1717 20.3333 23.8466 20.2687 23.5433 20.143C23.24 20.0174 22.9644 19.8332 22.7322 19.6011C22.5001 19.3689 22.3159 19.0933 22.1903 18.79C22.0646 18.4867 22 18.1616 22 17.8333C22 17.505 22.0646 17.1799 22.1903 16.8766C22.3159 16.5733 22.5001 16.2977 22.7322 16.0655C22.9644 15.8334 23.24 15.6493 23.5433 15.5236C23.8466 15.398 24.1717 15.3333 24.5 15.3333C25.163 15.3333 25.7989 15.5967 26.2677 16.0655C26.7366 16.5344 27 17.1703 27 17.8333C27 18.4964 26.7366 19.1322 26.2677 19.6011C25.7989 20.0699 25.163 20.3333 24.5 20.3333Z" />
      </svg>
    );
  };

  const PRICING_DATA = [
    {
      name: "Guardian",
      price: "Free Forever",
      iconComponent: <Guardian />,
      benifits: [
        "Edit up to 100 hours of podcast audio files.",
        "Set your own landing page.",
        "Advanced analytics.",
        "Day suppot",
      ],}];
      
      const RightIcon = () => {
        return (
          <svg
            className="fill-current"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.0001 0.00012207C4.48608 0.00012207 7.62939e-05 4.48612 7.62939e-05 10.0001C7.62939e-05 15.5141 4.48608 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48612 15.5141 0.00012207 10.0001 0.00012207ZM8.00108 14.4131L4.28808 10.7081L5.70008 9.29212L7.99908 11.5871L13.2931 6.29312L14.7071 7.70712L8.00108 14.4131Z" />
          </svg>
        );
      };

return (
    <>
     
     
    <div
        className="flex flex-row  justify-around"
        style={{ backgroundColor: "#e5f5f7" }}
    >
        {/* card  */}
        {PRICING_DATA.map((data, index) => (
          <div key={index} className="">
  <div className="max-w-sm xl:w-[384px] p-6 bg-white group h-full rounded-2xl lg:hover:-translate-y-6 ease-in duration-300 hover:bg-[#0B0641] hover:text-white border xl:border-none border-[#0B0641]">
              <div className="flex flex-row gap-5 items-center">
                <div>{data.iconComponent}</div>
                <span className="text-3xl font-bold">{data.name}</span>
              </div>
              <span className="flex mt-4 text-[#A9A9AA] text-2xl">
                What You&apos;ll Get
              </span>
              {data.benifits.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2.5 items-start mt-6 text-left text-lg"
                >
                  <div className="pt-1 shrink-0">
                    <RightIcon />
                  </div>
                  <span>{data}</span>
                </div>
              ))}
              <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
              <div className="h-36">
                <div className="bottom-6 left-6 right-6 ">
                  <div className="flex justify-start items-baseline">
                    <span className="text-[32px] font-bold ">{data.price}</span>
                  </div>
                  <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-[#FF1D89] rounded-xl mt-6 font-semibold text-xl">
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      {/* card end  */}
      <div className="max-w-sm xl:w-[600px] p-6 bg-white group h-full rounded-2xl w-full  m-5 shadow-xl lg:max-w-xl">
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
