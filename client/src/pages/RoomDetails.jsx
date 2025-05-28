import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {

    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[1])
    }, [])


    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>

            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}<span className='font-inter text-sm'>{room.roomType}</span></h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500'>20% OFF</p>
            </div>

            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>

            <div className='flex items-center gap-1 text-gray-500 mt2'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
            </div>

            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="room-image" className='w-full rounded-xl shadow-lg object-cover' />
                </div>

                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={() => setMainImage(image)} key={index} src={image} alt='room-image'
                            className={`w-full rounded-xl cursor-pointer shadow-md object-cover ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between mt-10 p-6 bg-white rounded-xl shadow-md gap-6">

                {/* Left section: Heading and Amenities */}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Experience luxury like never before
                    </h1>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {room.amenities.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg">
                                <img src={facilityIcons[item]} alt={item} className="w-6 h-6" />
                                <p className="text-gray-700 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right section: Price */}
                <div className="flex items-center justify-center md:justify-end">
                    <p className="text-xl font-semibold text-blue-600">
                        ${room.pricePerNight}
                        <span className="text-sm text-gray-500"> /night</span>
                    </p>
                </div>
            </div>

            <form className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl mx-auto mt-10 space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Check-In */}
                    <div className="flex flex-col">
                        <label htmlFor="checkInDate" className="mb-2 text-sm font-medium text-gray-700">Check-In</label>
                        <input
                            type="date"
                            id="checkInDate"
                            placeholder="Check-In"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Check-Out */}
                    <div className="flex flex-col">
                        <label htmlFor="checkOutDate" className="mb-2 text-sm font-medium text-gray-700">Check-Out</label>
                        <input
                            type="date"
                            id="checkOutDate"
                            placeholder="Check-Out"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Guests */}
                    <div className="flex flex-col">
                        <label htmlFor="guests" className="mb-2 text-sm font-medium text-gray-700">Guests</label>
                        <input
                            type="number"
                            id="guests"
                            placeholder="0"
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            min="1"
                            required
                        />
                    </div>

                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Check Availability
                    </button>
                </div>

            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {roomCommonData.map((spec, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300"
                    >
                        <img
                            src={spec.icon}
                            alt={`${spec.title}-icon`}
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{spec.title}</p>
                            <p className="text-sm text-gray-600">{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-md text-center max-w-3xl mx-auto mt-10">
                <p className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed mb-4">
                    Experience Unmatched Comfort & Elegance
                </p>
                <p className="text-gray-600 text-base md:text-lg">
                    Escape to world-class destinations and indulge in luxurious stays. From serene resorts to boutique hotels, discover your next unforgettable getaway.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 max-w-md transition hover:shadow-xl">
                <div className="flex items-center gap-4">
                    <img
                        src={room.hotel.owner.image}
                        alt="host"
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-sm"
                    />
                    <div>
                        <p className="text-lg font-semibold text-gray-800">
                            Hosted By: <span className="text-blue-600">{room.hotel.name}</span>
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                            <StarRating />
                            <p className="text-sm text-gray-500">200+ reviews</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-right">
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
                        Contact Now
                    </button>
                </div>
            </div>


        </div>
    )
}

export default RoomDetails
