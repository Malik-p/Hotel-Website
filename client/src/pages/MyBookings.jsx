import React, { useEffect, useState } from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const MyBookings = () => {

    const { axios, getToken, user } = useAppContext();

    const [bookings, setBookings] = useState([]);

    const fetchUserBookings = async () => {
        try {
            const { data } = await axios.get('/api/bookings/user', { headers: { Authorization: `Bearer ${await getToken()}` } })
            if (data.success) {
                setBookings(data.bookings)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)

        }
    }

    useEffect(() => {
        if (user) {
            fetchUserBookings()
        }
    }, [user])

    return (
        <div className="p-6 bg-gray-50 min-h-screen my-20">
            <Title
                title="My Bookings"
                subtitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks."
                align="left"
            />

            <div className="mt-6 bg-white shadow-md rounded-2xl overflow-hidden">
                {/* Header Row */}
                <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-200 font-semibold text-gray-700 text-base py-4 px-6 bg-gray-100">
                    <div>Hotels</div>
                    <div>Date & Time</div>
                    <div>Payment</div>
                </div>

                {/* Booking Items */}
                {bookings.map((booking) => (
                    <div
                        key={booking._id}
                        className="grid md:grid-cols-[3fr_2fr_1fr] gap-4 p-6 border-b border-gray-100 hover:bg-gray-50 transition-all"
                    >
                        {/* Hotel Details */}
                        <div className="flex gap-4">
                            <img
                                src={booking.room.images[0]}
                                alt="Hotel"
                                className="w-28 h-28 object-cover rounded-lg shadow-sm"
                            />
                            <div className="space-y-1">
                                <p className="text-lg font-semibold text-gray-800">
                                    {booking.hotel.name}{" "}
                                    <span className="text-sm text-gray-500 font-normal">
                                        ({booking.room.roomType})
                                    </span>
                                </p>
                                <div className="flex items-center text-sm text-gray-600 gap-2">
                                    <img src={assets.locationIcon} alt="location" className="w-4 h-4" />
                                    <span>{booking.hotel.address}</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600 gap-2">
                                    <img src={assets.guestsIcon} alt="guests" className="w-4 h-4" />
                                    <span>Guests: {booking.guests}</span>
                                </div>
                                <p className="text-sm font-medium text-gray-700">
                                    Total: <span className="text-green-600">${booking.totalPrice}</span>
                                </p>
                            </div>
                        </div>

                        {/* Date & Time */}
                        <div className="flex flex-col justify-center gap-2 text-sm text-gray-700">
                            <div>
                                <p className="font-medium">Check-In:</p>
                                <p>{new Date(booking.checkInDate).toDateString()}</p>
                            </div>
                            <div>
                                <p className="font-medium">Check-Out:</p>
                                <p>{new Date(booking.checkOutDate).toDateString()}</p>
                            </div>
                        </div>

                        {/* Payment Status */}
                        <div className="flex flex-col items-start justify-center">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"
                                        }`}
                                ></div>
                                <p
                                    className={`text-sm font-medium ${booking.isPaid ? "text-green-600" : "text-red-500"
                                        }`}
                                >
                                    {booking.isPaid ? "Paid" : "Unpaid"}
                                </p>
                            </div>

                            {!booking.isPaid && (
                                <button
                                    className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition duration-200 shadow-sm"
                                >
                                    Pay Now
                                </button>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default MyBookings;
