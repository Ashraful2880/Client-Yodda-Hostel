import React, { useState } from 'react';

const AddStudents = () => {
    const [studentName, setStudentName] = useState("")
    const [hallName, setHallName] = useState("")
    const [clases, setClases] = useState("")
    const [status, setStatus] = useState("")
    const [age, setAge] = useState("")
    const [roll, setRoll] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        const studentDetails = { roll, age, status, "class": clases, "hall_name": hallName, "name": studentName }

        fetch(`${process.env.REACT_APP_API_PATH}/addStudent`, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(studentDetails)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    window.alert("New Student Added");
                };
            });
    }

    return (
        <form className="h-full bg" onSubmit={handleSubmit} >
            <div className="">
                <div className="container mx-auto rounded">
                    <div className="xl:w-full border-b border-gray-300 py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-white font-bold"> Dear Admin..Add This Student to Your Profile</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto rounded px-4">
                    <div className="xl:w-full border-b border-gray-300 py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-white font-bold">Student Information</p>
                        </div>
                    </div>
                    <div className="mx-auto pt-4">
                        <div className="container mx-auto">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 mx-auto">
                                <label htmlFor="StudentName" className="pb-2 text-sm font-bold text-white text-left">
                                    Student Name
                                </label>
                                <input
                                    onChange={e => setStudentName(e.target.value)}
                                    type="text"
                                    name="name"
                                    className="border pl-3 py-3 shadow-sm bg-gray-100 rounded text-sm focus:outline-none focus:border-orange-700 placeholder-black"
                                    placeholder="Enter Student name"
                                    required
                                />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 mx-auto">
                                <label htmlFor="HallName" className="pb-2 text-sm font-bold text-white text-left">
                                    Hall Name
                                </label>
                                <input
                                    onChange={e => setHallName(e.target.value)}
                                    type="text"
                                    name="hall_name"
                                    className="border pl-3 py-3 shadow-sm bg-gray-100 rounded text-sm focus:outline-none focus:border-orange-700 placeholder-black"
                                    placeholder="Enter Hall name"
                                    required
                                />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 mx-auto">
                                <label htmlFor="class" className="pb-2 text-sm font-bold text-white text-left">
                                    Class
                                </label>
                                <input
                                    onChange={e => setClases(e.target.value)}
                                    type="text"
                                    name="class"
                                    className="border pl-3 py-3 shadow-sm bg-gray-100 rounded text-sm focus:outline-none focus:border-orange-700 placeholder-black"
                                    placeholder="Please Type With Text Nine / Ten"
                                    required
                                />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 mx-auto">
                                <label htmlFor="status" className="pb-2 text-sm font-bold text-white text-left">
                                    Status
                                </label>
                                <input
                                    onChange={e => setStatus(e.target.value)}
                                    type="text"
                                    name="status"
                                    className="border pl-3 py-3 shadow-sm bg-gray-100 rounded text-sm focus:outline-none focus:border-orange-700 placeholder-black"
                                    placeholder="Enter Status Active/InActive"
                                    required
                                />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 mx-auto">
                                <label htmlFor="age" className="pb-2 text-sm font-bold text-white text-left">
                                    Student Age
                                </label>
                                <input
                                    onChange={e => setAge(e.target.value)}
                                    type="number"
                                    name="age"
                                    className="border pl-3 py-3 shadow-sm bg-gray-100 rounded text-sm focus:outline-none focus:border-orange-700 placeholder-black"
                                    placeholder="Enter Student Age"
                                    required
                                />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 mx-auto">
                                <label htmlFor="roll" className="pb-2 text-sm font-bold text-white text-left">
                                    Student Roll
                                </label>
                                <input
                                    onChange={e => setRoll(e.target.value)}
                                    type="number"
                                    name="roll"
                                    className="border pl-3 py-3 shadow-sm bg-gray-100 rounded text-sm focus:outline-none focus:border-orange-700 placeholder-black"
                                    placeholder="Student Roll Number ( Starts From 801)"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 mx-auto">
                    <div className="w-full py-4 sm:px-0">
                        <button className="bg-indigo-500 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-700 rounded text-white py-3 text-sm w-[90%]" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddStudents;