import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <>
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-cyan-500 uppercase">
                    Register
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-cyan-500 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="UserName"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            User Name
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="Tel"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </label>
                        <input
                            type="Telephone"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-cyan-500 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-cyan-500 bg-white border rounded-md focus:border-cyan-200 focus:ring-cyan-100 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-400 focus:outline-none focus:bg-cyan-400">
                            Sign Up
                        </button>
                    </div>
                </form>
               
  

                <p className="mt-8 text-xs font-light text-center text-gray-500">
                    {" "}
                    Already have an account?{" "}
                    <Link to="/Login"
                        className="font-medium text-cyan-400 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
   </>
  )
}

export default Registration