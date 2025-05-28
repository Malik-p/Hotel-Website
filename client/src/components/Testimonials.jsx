import React from 'react'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'
import Title from './Title'

const Testimonials = () => {
    return (
        <div className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
            {/* Title */}
            <Title
                title="What Our Guests Say"
                subtitle="Trusted by thousands of guests around the world."
            />

            {/* Testimonials Grid */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-16">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs w-full"
                    >
                        {/* Guest Info */}
                        <div className="flex items-center gap-4">
                            <img
                                className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                                src={testimonial.image}
                                alt={testimonial.name}
                            />
                            <div>
                                <p className="font-semibold text-lg text-gray-800">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex items-center gap-1 mt-4">
                            <StarRating />
                        </div>

                        {/* Review Text */}
                        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                            “{testimonial.review}”
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Testimonials
