import React, { useEffect, useState } from 'react'
import HotelCard from './HotelCard'
import Title from './Title'
import { useAppContext } from '../context/AppContext'

const RecommendedHotels = () => {

    const { rooms, searchedCities } = useAppContext();
    const [recommended, setRecommended] = useState([]);

    const filterHotels = () => {
        const filteredHotels = rooms.slice().filter(room => searchedCities.includes(room.hote.city));
        setRecommended(filteredHotels);
    }

    useEffect(() => {
        filterHotels()
    }, [rooms, searchedCities])

    return recommended.length > 0 && (
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

            <Title title='Recommended Hotels' subtitle='Explore our top picks for your next luxurious stay.' />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommended.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index} />
                ))}
            </div>


        </div>
    )
}

export default RecommendedHotels;
