import React from 'react';
import useFoods from '../../Hooks/UseFoods';

const Foods = () => {
    const [foods] = useFoods();
    return (
        <div className="bg min-h-screen">
            <h2 className="pt-10 font-bold text-3xl text-white">Our Food Items</h2>
            {foods?.length > 0 ?
                <div className="mx-auto container py-8">
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
                        {
                            foods.map(food =>
                                <div className="mx-2 w-72 lg:mb-6 cursor-pointer hover:-translate-y-2 duration-300" key={food?._id}>
                                    <div>
                                        <img src={food?.image} className="w-full h-44 hover:-translate-y-2 transition-all ease-linear duration-200" alt="food" />
                                    </div>
                                    <div className="bg-white">
                                        <div className="p-4">
                                            <div className="flex items-center justify-between py-4">
                                                <h2 className="text-lg font-semibold text-left">{food?.food}</h2>
                                                <h3 className="text-red-500 text-xl font-semibold">{food?.cost}</h3>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-2 text-left">The food system has significant impacts on a wide range of other social and political issues including</p>
                                        </div>
                                        <button onClick={() => alert("Food Added")} className="px-4 py-1.5 w-40 mb-4 border-2 border-orange-500 rounded-md bg-orange-500 text-white hover:text-orange-600 hover:bg-transparent duration-300">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div> :
                <div className="w-full h-[60vh] flex justify-center items-center">
                    <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
                </div>
            }
        </div>

    );
};

export default Foods;