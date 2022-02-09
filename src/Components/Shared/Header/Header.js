import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import logo from '../../Images/Main-Logo.png'


const Header = () => {
    const {user,handleSignOut} =useAuth();

const toggleFunction=()=>{
  const toggleButton=document.getElementById("toogleDiv");
    if (toggleButton.style.display === "none") {
     toggleButton.style.display = "block";
   } else {
     toggleButton.style.display = "none";
   }
}

  return (
    <nav className="bg-gray-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button 
                        onClick={toggleFunction}
                        type="button" 
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:bg-orange-700 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <i className="fas fa-bars text-2xl px-2"></i>
                    </button>
                </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/home">
                        <img className="hidden lg:block h-10 w-auto" src={logo} alt="Workflow"/>
                    </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                        <Link 
                            className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 px-3 py-2 rounded-md text-md font-medium" 
                            to="/">Home
                        </Link>
                        <Link 
                            className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 px-3 py-2 rounded-md text-md font-medium" 
                            to="/students">Students
                        </Link>
                        <Link 
                            className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 px-3 py-2 rounded-md text-md font-medium" 
                            to="/about">About
                        </Link>
                        <Link
                            className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 px-3 py-2 rounded-md text-md font-medium"
                            to="/contact">Contact
                        </Link>
                    </div>
                </div>
                </div>
                {user?.email?
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 userProfile">
                    <Link 
                        className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 px-3 py-2 rounded-md text-md font-medium" 
                        to="/dashboard">Dashboard
                    </Link>
                    <div className="relative mt-2">
                        <img 
                            className="h-8 w-8 rounded-full ring-2 ring-offset-2 ml-2 mb-2" 
                            src={user?.photoURL}
                            alt="Profile"/>
                    </div>  
                    <Link to="/home" onClick={handleSignOut} className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 px-3 py-2 rounded-md text-md font-medium ml-8">Log Out
                    </Link>           
                </div>:
                <Link to="/login">
                    <i className="fas fa-sign-in-alt text-white ml-4 text-lg px-2 py-2 rounded-md hover:bg-orange-500"></i>
                </Link> }
            </div>
        </div>
        <div className="hidden" id="toogleDiv">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                    to="/"
                    className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 block px-3 py-2 rounded-md text-base font-medium">Home
                </Link>
                <Link 
                    to="/about"
                    className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 block px-3 py-2 rounded-md text-base font-medium">About
                </Link>
                <Link 
                    to="/students"
                    className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 block px-3 py-2 rounded-md text-base font-medium">Students
                </Link>
                <Link 
                    to="/contact"
                    className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 block px-3 py-2 rounded-md text-base font-medium">Contact
                </Link>
                <Link 
                    to="/dashboard"
                    className="text-gray-100 hover:bg-orange-500 focus:bg-orange-700 block px-3 py-2 rounded-md text-base font-medium">Dashboard
                </Link>
            </div>
        </div>
    </nav>
  );
};

export default Header;