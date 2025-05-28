import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import StarRating from '../components/StarRating';

const CheckBox = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className="flex items-center gap-3 cursor-pointer mt-3 text-sm text-gray-700 hover:text-blue-600 transition">
            <input
                type="checkbox"
                checked={selected}
                onChange={(e) => onChange(e.target.checked, label)}
                className="form-checkbox text-blue-600 rounded-md w-4 h-4 focus:ring-blue-500"
            />
            <span className="select-none">{label}</span>
        </label>
    );
};


const RadioButton = ({ label, selected = false, onChange = () => { } }) => {
    return (
        <label className="flex items-center gap-3 cursor-pointer mt-3 text-sm text-gray-700 hover:text-blue-600 transition">
            <input
                type="radio"
                name="sortOption"
                checked={selected}
                onChange={() => onChange(label)}
                className="form-radio text-blue-600 w-4 h-4 focus:ring-blue-500"
            />
            <span className="select-none">{label}</span>
        </label>
    );
};


const AllRooms = () => {

    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);

    const roomTypes = [
        "Single Bed",
        "Double Bed",
        "Luxury Bed",
        "Family Suite",
        "Newly Wed",
    ];

    const priceRanges = [
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 5000',
    ]

    const sortOptions = [
        "Price Low to High",
        "Price High to LOw",
        "Newest First",
    ]

    return (
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-12 pt-28 md:pt-36 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50">

            {/* Room Content Section */}
            <div className="flex-1 px-4 py-12 bg-white rounded-2xl shadow-md">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Hotel Rooms
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                    </p>
                </div>

                {/* Room Cards */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                    {roomsDummyData.map((room) => (
                        <div
                            key={room._id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Room Image */}
                            <img
                                onClick={() => {
                                    navigate(`/rooms/${room._id}`);
                                    scrollTo(0, 0);
                                }}
                                src={room.images[2]}
                                alt="room-image"
                                title="View Room Details"
                                className="w-full md:w-1/2 h-60 object-cover cursor-pointer"
                            />

                            {/* Room Info */}
                            <div className="p-5 flex flex-col justify-between w-full">
                                <div>
                                    <p className="text-xl font-bold text-gray-800">{room.hotel.city}</p>
                                    <p
                                        onClick={() => {
                                            navigate(`/rooms/${room._id}`);
                                            scrollTo(0, 0);
                                        }}
                                        className="text-gray-600 text-sm mt-1 cursor-pointer hover:text-blue-600 transition"
                                    >
                                        {room.hotel.name}
                                    </p>

                                    <div className="flex items-center mt-2 gap-2 text-sm text-gray-600">
                                        <StarRating />
                                        <p className="text-gray-500">200+ reviews</p>
                                    </div>

                                    <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                                        <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
                                        <span>{room.hotel.address}</span>
                                    </div>

                                    {/* Amenities */}
                                    <div className="flex flex-wrap items-center mt-4 gap-3">
                                        {room.amenities.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f5f5ff]/70 text-sm text-gray-700"
                                            >
                                                <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                                                <p>{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mt-4">
                                    <p className="text-lg font-semibold text-blue-600">${room.pricePerNight} <span className="text-sm text-gray-500">/night</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filters Sidebar (Untouched) */}
            <div className="bg-white w-80 rounded-xl border border-gray-200 text-gray-600 max-lg:mb-8 min-lg:mt-16 shadow-sm">
                <div className={`flex items-center justify-between px-5 py-4 border-b ${openFilters ? "border-gray-300" : "lg:border-b-0"}`}>
                    <p className="text-base font-semibold text-gray-800">Filters</p>
                    <div className="text-sm font-medium text-blue-600 cursor-pointer">
                        <span onClick={() => setOpenFilters(!openFilters)} className="lg:hidden">
                            {openFilters ? 'Hide' : 'Show'}
                        </span>
                        <span className="hidden lg:block">Clear</span>
                    </div>
                </div>

                <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-500`}>
                    <div className="px-5 pt-4">
                        <p className="font-semibold text-gray-700 pb-2">Popular Filters</p>
                        {roomTypes.map((room, index) => (
                            <CheckBox key={index} label={room} />
                        ))}
                    </div>

                    <div className="px-5 pt-6">
                        <p className="font-semibold text-gray-700 pb-2">Price Range</p>
                        {priceRanges.map((range, index) => (
                            <CheckBox key={index} label={`$ ${range}`} />
                        ))}
                    </div>

                    <div className="px-5 pt-6 pb-6">
                        <p className="font-semibold text-gray-700 pb-2">Sort By</p>
                        {sortOptions.map((option, index) => (
                            <RadioButton key={index} label={option} />
                        ))}
                    </div>
                </div>
            </div>

        </div>


    )

}

export default AllRooms;
