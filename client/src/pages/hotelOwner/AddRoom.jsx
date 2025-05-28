import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  })

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wifi': 'false',
      'Free Breakfast': 'false',
      'Free Service': 'false',
      'Pool Access': 'false',
      'Mountain View': 'false',
    }
  })

  return (

    <section className="bg-gray-50 pt-8 px-4 pb-32">
      <form className="bg-white p-4 rounded-lg shadow-md max-w-3xl mx-auto max-h-[calc(100vh-6rem)] overflow-y-auto space-y-4">
        <Title
          align="left"
          font="outfit"
          title="Add Room"
        />

        {/* Image Upload Section */}
        <div>
          <p className="text-base font-semibold text-gray-700 mb-1">Images</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {Object.keys(images).map((key) => (
              <label
                htmlFor={`roomImages${key}`}
                key={key}
                className="relative flex items-center justify-center h-24 w-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition"
              >
                <img
                  className="object-cover h-full w-full rounded-lg"
                  src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
                  alt="room preview"
                />
                <input
                  type="file"
                  accept="image/*"
                  id={`roomImages${key}`}
                  hidden
                  onChange={(e) =>
                    setImages({ ...images, [key]: e.target.files[0] })
                  }
                />
              </label>
            ))}
          </div>
        </div>

        {/* Room Type Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="roomType">
            Room Type
          </label>
          <select
            id="roomType"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
            value={inputs.roomType}
            onChange={e => setInputs({ ...inputs, roomType: e.target.value })}
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Bed">Luxury Bed</option>
            <option value="Newly-Wed Bed">Newly-Wed Bed</option>
          </select>
        </div>

        {/* Price Input */}
        <div>
          <label className="block text-gray-700 font-medium text-sm mb-1" htmlFor="pricePerNight">
            Price <span className="text-xs text-gray-500 font-normal">/night</span>
          </label>
          <input
            type="number"
            id="pricePerNight"
            placeholder="0"
            value={inputs.pricePerNight}
            onChange={e => setInputs({ ...inputs, pricePerNight: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Amenities */}
        <div>
          <p className="text-base font-semibold text-gray-700 mb-1">Amenities</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.keys(inputs.amenities).map((amenity, index) => (
              <label key={index} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  checked={inputs.amenities[amenity]}
                  onChange={() =>
                    setInputs({
                      ...inputs,
                      amenities: {
                        ...inputs.amenities,
                        [amenity]: !inputs.amenities[amenity],
                      },
                    })
                  }
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
                />
                <span className="text-gray-700">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition"
          >
            Add Room
          </button>
        </div>
      </form>
    </section>







  )
}

export default AddRoom;
