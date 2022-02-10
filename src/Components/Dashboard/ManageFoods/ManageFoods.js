import React from 'react';
import useFoods from '../../../Hooks/UseFoods';
import Swal from 'sweetalert2';

const ManageFoods = () => {
    const[foods]=useFoods();

      //<-------------- Food Delete Function ------------>
    
      const handleDelete=(id)=>{
        const proceed=window.confirm("Are You Sure ? Want to Delete?");
        if (proceed){
            const url=`https://yodda-hostel.herokuapp.com/deleteFood/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'Deleted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                window.location.reload(false);
        })
        }
    };
    return (
        <div>
            <div className="bg">
                    <h2 className="pt-6 font-bold text-3xl text-orange-500">Our Food Items</h2>
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
                                        <div className="flex items-center justify-between py-4">
                                            <button
                                                onClick={()=>alert("Update Option Coming Soon")} 
                                                className="bg-blue-600 text-white px-3 py-1 rounded-md">Update</button>
                                            <button
                                                onClick={()=>handleDelete(food._id)}
                                                className="bg-red-600 text-white px-3 py-1 rounded-md">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        )
                    }                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageFoods;