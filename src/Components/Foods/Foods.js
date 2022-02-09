import React, { useEffect, useState } from 'react';

const Foods = () => {
    const [foods,setFoods]=useState([])
    useEffect(()=>{
        fetch('./foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    return (
        <>
             <div className="bg-gray-100 ">
                    <h2 className="pt-6 font-bold text-3xl">Our Food Items</h2>
                <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                    {
                        foods.map(food=>
                            <div className="mx-2 w-72 lg:mb-6 " key={food._id}>
                                <div>
                                    <img src={food?.image} className="w-full h-44" alt="food"/>
                                </div>
                                <div className="bg-white">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between py-4">
                                            <h2 className="text-lg font-semibold text-left">{food?.food}</h2>
                                            <h3 className="text-red-500 text-xl font-semibold">{food?.cost}</h3>
                                        </div>
                                        <p className="text-xs text-gray-600 mt-2 text-left">The food system has significant impacts on a wide range of other social and political issues including</p>
                                    </div>
                                </div>
                            </div>      
                        )
                    }                      
                    </div>
                </div>
            </div>
        </>
    );
};

export default Foods;