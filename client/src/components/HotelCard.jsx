import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

 
const HotelCard = ({ room, index }) => {
    return (
        <Link
            to={'/rooms/' + room._id}
            onClick={() => scrollTo(0, 0)}
            key={room._id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 w-full sm:w-[300px] cursor-pointer"
        >
            {/* Room Image */}
            <img
                src={room.images[0]}
                alt="room"
                className="h-48 w-full object-cover"
            />

            {/* Card Content */}
            <div className="p-4 space-y-2">
                {/* Tag */}
                {index % 2 === 0 && <p className="text-xs bg-yellow-100 text-yellow-800 font-semibold inline-block px-2 py-1 rounded-full">
                    Best Seller
                </p>}

                {/* Hotel Info */}
                <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-gray-800">{room.hotel.name}</p>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                        <img src={assets.starIconFilled} alt="star-icon" className="w-4 h-4" />
                        <span>4.5</span>
                    </div>
                </div>
                <div>
                    <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
                    <span>{room.hotel.address}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 px-4">
                    {/* Price */}
                    <p className="text-gray-700 font-semibold text-base">
                        ${room.pricePerNight} <span className="text-sm text-gray-500">/night</span>
                    </p>

                    {/* Book Button */}
                    <button className="mt-2 sm:mt-0 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                        Book Now
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard
