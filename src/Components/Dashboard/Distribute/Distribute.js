import React from 'react';
import useStudents from '../../../Hooks/UseStudents';

const Distribute = () => {
    const [students] = useStudents();

    return (
        <div className="bg min-h-screen">
            {students?.length > 0 ?
                <div className="container mx-auto flex flex-col">
                    <div className="w-full my-5">
                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                            <div className="flex flex-auto flex-wrap"></div>
                            <input
                                placeholder="Search by Roll"
                                className="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                            <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                                <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="feather feather-chevron-up w-4 h-4">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Roll
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Age
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Class
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Hall Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Food Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Serve Food
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {students.map((student) => (
                                            <tr key={student?._id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="text-sm font-medium text-gray-900">{student?.roll}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="text-sm font-medium text-gray-900">{student?.name}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="text-sm font-medium text-gray-900">{student?.age}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="text-sm font-medium text-gray-900">{student?.class}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="text-sm font-medium text-gray-900">{student?.hall_name}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {
                                                            student?.status === "Active" ?
                                                                <div className="text-sm font-medium text-gray-900 bg-green-200 px-2 rounded-lg">{student?.status}</div> :
                                                                <div className="text-sm font-medium text-gray-900 bg-red-300 px-2 rounded-lg">{student?.status}</div>
                                                        }
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {
                                                            student?.food_status === "Served" ?
                                                                <div className="text-sm font-medium text-gray-900 bg-green-200 px-2 rounded-lg">{student?.food_status}</div> :
                                                                <div className="text-sm font-medium text-gray-900 bg-red-300 px-2 rounded-lg">{student?.food_status}</div>
                                                        }
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        {
                                                            student?.food_status === "Served" ?
                                                                <button
                                                                    className="bg-red-400 hover:cursor-help text-white px-3 py-1 rounded-lg" disabled>Allready Served
                                                                </button> :
                                                                <button
                                                                    onClick={() => alert("")}
                                                                    className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-1 rounded-lg">Serve Food
                                                                </button>
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="w-full h-[60vh] flex justify-center items-center">
                    <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-green-500 border-t-transparent"></div>
                </div>
            }
        </div>
    );
};

export default Distribute;