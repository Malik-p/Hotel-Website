import React from 'react'
import Title from './Title';
import { assets, exclusiveOffers } from '../assets/assets';

const ExclusiveOffers = () => {
    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 py-12 bg-gray-50">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full mb-10">
                <Title
                    align="left"
                    title="Exclusive offers"
                    subtitle="Take advantage of our limited offers and special packages."
                />
                <button className="group flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition-all cursor-pointer max-md:mt-6">
                    View All Offers
                    <img
                        src={assets.arrowIcon}
                        alt="arrow-icon"
                        className="w-5 h-5 group-hover:translate-x-1 transition-all"
                    />
                </button>
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {exclusiveOffers.map((item) => (
                    <div
                        key={item._id}
                        className="relative rounded-2xl overflow-hidden shadow-lg group h-[300px] bg-cover bg-center "
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        {/* Overlay */}
                        {/* <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all"></div> */}

                        {/* Discount Label */}
                        <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold py-1 px-3 rounded-full shadow">
                            {item.priceOff}% OFF
                        </div>

                        {/* Offer Content */}
                        <div className="relative z-10 p-6 text-white space-y-2 mt-8">
                            <p className="text-xl font-semibold">{item.title}</p>
                            <p className="text-sm">{item.description}</p>
                            <p className="text-sm opacity-80">Expires {item.expiryDate}</p>
                        </div>

                        {/* View Offer Button */}
                        <button className="relative z-10 flex items-center gap-2 text-sm text-white font-medium mt-4 p-4 hover:underline">
                            View Offer
                            <img
                                src={assets.arrowIcon}
                                alt="arrow-icon"
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ExclusiveOffers;
