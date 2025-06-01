import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const FeatureDestination = () => {

    const { rooms, navigate } = useAppContext();

    return rooms.length > 0 &&  (
        <div className="py-10 px-4 sm:px-8 lg:px-16 bg-gray-50">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    Featured Destinations
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                    Explore our top picks for your next luxurious stay.
                </p>
            </div>

            {/* <Title title='Featured Destinations' subtitle='Explore our top picks for your next luxurious stay.'/> */}

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {rooms.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}
            </div>

            <div className="flex items-center justify-center mt-15" >
                <button
                    onClick={() => {
                        navigate('/rooms');
                        scrollTo(0, 0);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full shadow-md transition duration-300 ease-in-out"
                >
                    View all Destinations
                </button>
            </div>

        </div>
    )
}

export default FeatureDestination;
