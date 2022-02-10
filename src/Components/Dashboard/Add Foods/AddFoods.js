import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddFoods.css';

const AddFoods = () => {
    const [foodName,setFoodName]=useState("");
    const [foodPrice,setFoodPrice]=useState("");
    const [foodImage,setFoodImage]=useState(null);
        
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!foodImage){
            alert("Please Select an Image")
            return;
        }
        const formData=new FormData();
        formData.append("food",foodName);
        formData.append("cost",foodPrice);
        formData.append("image",foodImage);

        fetch('http://localhost:5000/addFoods', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Food Added Successfully");
            }
        })
        .catch(error => {
            alert('Error:', error);
        });
    }

    return (
        <div className="bg h-screen">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 mb-12 pt-20">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bgContainer"></div>
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Add A Food Item</h3>
                            <hr className="mt-4 border-t" />
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label 
                                            className="block mb-2 text-sm font-bold text-gray-700" htmlFor="foodName">
                                            Food Item name
                                        </label>
                                        <input
                                            onChange={e=>setFoodName(e.target.value)}
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            type="text"
                                            name="food"
                                            placeholder="Food Item name"
                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="cost">
                                            Food Price
                                        </label>
                                        <input
                                            onChange={e=>setFoodPrice(e.target.value)}
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="cost"
                                            type="number"
                                            placeholder="Food Price"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                            Food Image
                                        </label>
                                        <input
                                            onChange={e=>setFoodImage(e.target.files[0])}
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="image"
                                            type="file"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="submit">
                                        Add Food Item
                                    </button>
                                </div>
                                <hr className="mb-12 border-t" />
                                <div className="text-center">
                                    <Link
                                        to="/foods"
                                        className="inline-block text-sm text-white align-baseline hover:bg-indigo-600 bg-indigo-500 px-3 py-2 rounded-lg mb-2"
                                    >
                                        View All Food Items
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link
                                        to="/students"
                                        className="inline-block text-sm text-white align-baseline hover:bg-indigo-600 bg-indigo-500 px-3 py-2 rounded-lg"
                                    >
                                        View All Of Students
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFoods;