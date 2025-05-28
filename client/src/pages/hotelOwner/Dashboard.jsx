import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

    const [dashdboardData, setDashboardData] = useState(dashboardDummyData)

    return (
        <div className="px-6 py-8 bg-gray-50 min-h-screen">
            <Title
                align="left"
                font="outfit"
                title="Dashboard"
                subtitle="Monitor and manage your hotel listings, bookings, and performance — all in one place."
            />

            <div className="flex flex-col md:flex-row gap-6 my-8">
                {/* Total Bookings */}
                <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md w-full md:w-1/2">
                    <img src={assets.totalBookingIcon} alt="total bookings" className="h-12 w-12 object-contain" />
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Total Bookings</p>
                        <p className="text-xl font-semibold text-gray-800">{dashdboardData.totalBookings}</p>
                    </div>
                </div>

                {/* Total Revenue */}
                <div className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md w-full md:w-1/2">
                    <img src={assets.totalRevenueIcon} alt="total revenue" className="h-12 w-12 object-contain" />
                    <div>
                        <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
                        <p className="text-xl font-semibold text-gray-800">${dashdboardData.totalRevenue}</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Bookings</h2>

            <div className="overflow-x-auto bg-white shadow-md rounded-xl">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">User Name</th>
                            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Room Type</th>
                            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Total Amount</th>
                            <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">Payment Status</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {dashdboardData.bookings.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-800">{item.user.username}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">{item.room.roomType}</td>
                                <td className="px-6 py-4 text-sm text-gray-800">${item.totalPrice}</td>
                                <td className="px-6 py-4 text-sm font-medium">
                                    <span className={item.isPaid ? "text-green-600" : "text-red-500"}>
                                        {item.isPaid ? "Paid" : "Unpaid"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>

    )
}
export default Dashboard;
