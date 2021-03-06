import React from 'react';
import {Route,Link, Routes} from "react-router-dom";
import useAuth from '../../../Hooks/UseAuth';
import AddFoods from '../Add Foods/AddFoods';
import AddStudents from '../AddStudents/AddStudents';
import DashboardHome from '../DashboardHome/DashboardHome';
import Distribute from '../Distribute/Distribute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageFoods from '../ManageFoods/ManageFoods';
import ManageStudents from '../ManageStudents/ManageStudents';
import './dashboard.css';

const Dashboard = () => {
    const {user}=useAuth();
   
   const toogleMenu=()=>{
       const toggleButton=document.getElementById("toogleDashboard");
       if (toggleButton.style.display === "none") {
        toggleButton.style.display = "block";
      } else {
        toggleButton.style.display = "none";
      }
   }

    return (
        <>
            <button 
                onClick={toogleMenu}
                type="button" 
                className="fixed left-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mobileBtn" aria-controls="mobile-menu" aria-expanded="false">
                <i className="fas fa-bars text-2xl px-2"></i>
            </button>
            <main className="flex w-full h-full">
                <aside className="w-80 h-full bg-gray shadow-md" id="toogleDashboard">
                    <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                        <div className="text-sm">
                            {user?.email?
                                <img className="w-12 h-12 mb-4 rounded-full mx-auto" src={user?.photoURL} alt="User" />
                                :""}
                            <Link 
                                to="/dashboard" 
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block"> 
                                Dashboard 
                            </Link>
                            <Link 
                                to="addFoods" 
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                Add Foods
                            </Link>
                            <Link 
                                to="manageFoods" 
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                Manage Foods
                            </Link>
                            <Link
                                to="addStudent" 
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                Add Students
                            </Link>
                            <Link 
                                to="manageStudents"
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                               Manage Students
                            </Link>
                            <Link 
                                to="distributeFoods"
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                Distribute Foods
                            </Link>
                            <Link 
                                to="makeAdmin"
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                Make Admin
                            </Link>
                        </div>
                    </div>
                </aside>
                <section className="w-full">
                    <Routes>
                        <Route path="/" element={<DashboardHome />}/>
                        <Route path="addFoods" element={<AddFoods />}/>
                        <Route path="addStudent" element={<AddStudents />}/>
                        <Route path="manageFoods" element={<ManageFoods />}/>
                        <Route path="manageStudents" element={<ManageStudents />}/>
                        <Route path="distributeFoods" element={<Distribute />}/>
                        <Route path="makeAdmin" element={<MakeAdmin />}/>
                    </Routes>
                </section>  
            </main>
        </>
    );
};

export default Dashboard;