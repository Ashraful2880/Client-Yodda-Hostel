import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative bg overflow-hidden ">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="#F1EFF0" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"> <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline text-white">Your New Home<br /></span>
                            <span className="block text-indigo-600 xl:inline">Is Our Hostel</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"> 
                            <span className="text-orange-500">Yodda Hostels</span> is proud to offer affordable travel in major Dhaka cities. Founded 2000, the budget brand now has a portfolio of 35 establishments in 21 cities and six countries. (Bangladesh,Germany, Netherlands, Czech Republic, Italy and Denmark). <span className="text-orange-500">Yodda Hostels</span> continues to pursue a growth strategy: As Europe's largest provider of hostel accommodation</p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link to="/home" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Book Your Seat </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link to="/home" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Live demo </Link>
                            </div>
                        </div>
                        </div>
                    </main>
                </div>
            </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://i.ibb.co/9s8JSmK/hostel.webp" alt="werg"/>
                </div>
        </div>
    );
};

export default Banner;