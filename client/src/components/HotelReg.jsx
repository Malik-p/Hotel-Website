import React, { useState } from 'react'
import { assets, cities } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const HotelReg = () => {

    const { setShowHotelReg, axios, getToken, setIsOwner } = useAppContext();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [city, setCity] = useState('');

    const onSubmitHandler = async (event) => {

        try {

            event.preventDefault();
            const { data } = await axios.post('/api/hotels/', { name, contact, address, city }, { headers: { Authorization: `Bearer ${await getToken()}` } })

            if (data.success) {
                toast.success(data.message);
                setIsOwner(true);
                setShowHotelReg(false);
            } else {
                toast.success(data.message)
            }

        } catch (error) {
            toast.error(error.message)

        }

    }

    return (
        <div onClick={() => setShowHotelReg(false)} className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center min-h-screen bg-gray-50 py-10 px-4">
            <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl relative">

                {/* Image Section */}
                <img
                    src={assets.regImage}
                    alt="reg-image"
                    className="w-full md:w-1/2 h-auto object-cover hidden md:block"
                />

                {/* Form Content */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
                    <img onClick={() => setShowHotelReg(false)}
                        src={assets.closeIcon}
                        alt="close-icon"
                        className="absolute top-4 right-4 h-6 w-6 cursor-pointer hover:scale-105 transition-transform"
                    />

                    <p className="text-2xl font-bold text-gray-800 mb-4">Register your Hotel</p>

                    {/* Registration Details */}
                    <div className="w-full mt-4">
                        <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Hotel Name</label>
                        <input onChange={(e) => setName(e.target.value)} value={name}
                            type="text"
                            placeholder="Type here"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="name"
                            required
                        />
                    </div>

                    <div className="w-full mt-4">
                        <label htmlFor="contact" className="block font-medium text-gray-700 mb-1">Contact</label>
                        <input onChange={(e) => setContact(e.target.value)} value={contact}
                            type="text"
                            placeholder="Type here"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="contact"
                            required
                        />
                    </div>

                    <div className="w-full mt-4">
                        <label htmlFor="address" className="block font-medium text-gray-700 mb-1">Address</label>
                        <input onChange={(e) => setAddress(e.target.value)} value={address}
                            type="text"
                            placeholder="Type here"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="address"
                            required
                        />
                    </div>

                    <div className="w-full mt-4">
                        <label htmlFor="city" className="block font-medium text-gray-700 mb-1">City</label>
                        <select onChange={(e) => setCity(e.target.value)} value={city}
                            id="city"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select city</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </div>

            </form>
        </div>


    )
}

export default HotelReg;
