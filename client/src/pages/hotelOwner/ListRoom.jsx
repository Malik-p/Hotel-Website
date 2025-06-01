import React, { useEffect, useState } from 'react'
import Title from '../../components/Title';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { assets } from '../../assets/assets'

const ListRoom = () => {

    const [rooms, setRooms] = useState([]);

    const { axios, getToken, user, currency } = useAppContext();

    const fetchRooms = async () => {
        try {

            const { data } = await axios.get('/api/rooms/owner', { headers: { Authorization: `Bearer ${await getToken()}` } })

            if (data.success) {
                setRooms(data.rooms)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const toggleAvailability = async (roomId) => {

        const { data } = await axios.post('/api/rooms/toggle-availability', { roomId }, { headers: { Authorization: `Bearer ${await getToken()}` } })

        if (data.success) {
            toast.success(data.message)
            fetchRooms()
        } else {
            toast.error(data.message)
        }
    }

    useEffect(() => {

        if (user) {
            fetchRooms()
        }

    }, [user])

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
                                        {currency}{item.pricePerNight}
                                    </td>
                                    <td className="py-3 px-4 border-b">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only"
                                                checked={item.isAvailable}
                                                onChange={() => { toggleAvailability(item._id) }}
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
