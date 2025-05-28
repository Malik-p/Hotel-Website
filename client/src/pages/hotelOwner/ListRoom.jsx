import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../components/Title';

const ListRoom = () => {

    const [rooms, setRooms] = useState(roomsDummyData);
    return (
        <div className="px-4 py-10 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <Title
                    align="left"
                    font="outfit"
                    title="Rooms Listings"
                    subtitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
                />

                <p className="text-lg font-semibold text-gray-800 mt-6 mb-4">All Rooms</p>

                <div className="overflow-x-auto rounded-xl shadow">
                    <table className="min-w-full bg-white text-sm text-gray-700 border border-gray-200">
                        <thead className="bg-gray-100 text-left">
                            <tr>
                                <th className="py-3 px-4 border-b">Name</th>
                                <th className="py-3 px-4 border-b">Facility</th>
                                <th className="py-3 px-4 border-b">Price/Night</th>
                                <th className="py-3 px-4 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rooms.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition">
                                    <td className="py-3 px-4 border-b font-medium">{item.roomType}</td>
                                    <td className="py-3 px-4 border-b text-gray-600">
                                        {item.amenities.join(', ')}
                                    </td>
                                    <td className="py-3 px-4 border-b text-blue-600 font-semibold">
                                        ${item.pricePerNight}
                                    </td>
                                    <td className="py-3 px-4 border-b">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only"
                                                checked={item.isAvailable}
                                                onChange={() => { }}
                                            />
                                            <div className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition ${item.isAvailable ? 'bg-green-400' : 'bg-gray-300'}`}>
                                                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${item.isAvailable ? 'translate-x-5' : 'translate-x-0'}`}></div>
                                            </div>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ListRoom
