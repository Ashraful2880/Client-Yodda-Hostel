import React from 'react';

const AddStudents = () => {
    
    return (
        <form className="h-full" onSubmit="{handleSubmit}" >
            <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold"> Dear Admin..Add This Student to Your Profile</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded px-4">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Student Information</p>
                        </div>
                    </div>
                    <div className="mx-auto pt-4">
                        <div className="container mx-auto">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="StudentName" className="pb-2 text-sm font-bold text-gray-800">
                                    Student Name
                                </label>
                                <input type="text" name="name" required className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500" placeholder ="Enter Student name" />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="HallName" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Hall Name
                                </label>
                                <input type="text" name="hall_name" required className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500" placeholder ="Enter Hall name"/>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="class" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Class
                                </label>
                                <input type="text" name="class" required className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500" placeholder="Please Type With Text Nine / Ten" />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="status" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Status
                                </label>
                                <input type="text" name="status" required className="border border-gray-300 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500" placeholder="Enter Status Active/InActive" />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="age" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Student Age
                                </label>
                                <input type="number" name="age" required className="border border-gray-300 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500" placeholder ="Enter Student Age" />
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="roll" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    Student Roll
                                </label>
                                <input type="number" name="roll" required className="border border-gray-300 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500" placeholder ="Student Roll Number ( Starts From 801)" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container w-3/12 ml-3">
                    <div className="w-full py-4 sm:px-0 bg-white">
                        <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddStudents;