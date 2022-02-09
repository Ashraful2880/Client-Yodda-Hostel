import React from 'react';
import useAuth from '../../../Hooks/UseAuth';

const DashboardHome = () => {
    const {user}=useAuth()
    return (
        <div className="lg:px-6 2xl:px-0 bg h-screen text-white">
            <div className="mx-auto container relative z-0 px-4 xl:px-0">
                <div className="flex flex-col-reverse justify-center md:flex-row">
                    <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-20">
                        <img className="w-30 rounded-full border-2 border-orange-500 mb-5" src={user?.photoURL} alt="user" />
                        <h1 className="text-3xl lg:text-3xl xl:text-5xl font-black text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color mb-6">Hi {user?.displayName}</h1>
                        <h1 className="text-3xl lg:text-3xl xl:text-5xl font-black text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">Welcome To Dashboard</h1>
                        <h2 className="md:w-8/12 my-4 text-center md:text-left md:my-8 text-lg lg:text-2xl">Do you want to control your expenses and be always aware of how much money you have spent?</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;