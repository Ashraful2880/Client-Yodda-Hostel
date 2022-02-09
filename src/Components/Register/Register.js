import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="bg-gray-400">
      <div className="w-full max-w-xs mx-auto pt-8 pb-24">
        <h1 className="text-2xl font-bold uppercase mb-4 text-yellow-300">
          Please Register To<br /> Yodda Hostel
        </h1>
        
        <form className="bg-white shadow-md rounded p-10">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-left text-sm font-bold mb-2"
              for="fullname"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullname"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-left text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-left text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex">
            <p className="mb-3 text-left">Aready have an account ?</p>
            &nbsp;{" "}
            <Link to="/login" className="text-orange-500">
              Sign In
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;