import React from 'react';
import { FaStar, FaClock, FaMapMarkerAlt, FaArrowLeft, FaSearch, FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import Groceries from '../../assets/img/herogroceries.jpg';

const HeroSection = () => {
  const navigate = useNavigate(); 

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        {/* Background Image */}
        <img
          src={Groceries}
          alt="Restaurant Hero"
          className="w-full h-full object-cover"
        />
        

        {/* Back to Home Button */}
        <div className="absolute top-4 left-2 sm:left-8 pl-2 sm:pl-10 z-50">
          <button
            className="flex items-center text-white hover:text-gray-300 text-sm font-medium"
            onClick={() => navigate('/')}
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </button>
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 md:px-14">
          {/* Header */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center mt-10">
            Fresh Groceries
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-center max-w-2xl mb-6">
            Shop for fresh, high-quality groceries delivered straight to your door.
            We source the best local and organic products to ensure you get the freshest ingredients for your kitchen.
          </p>

          {/* Info Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {/* Ratings */}
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="text-sm">4.8</span>
              <span className="text-sm text-gray-300">(120 reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <FaClock />
              <span className="text-sm">Free delivery on orders above #10,000</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition">
              Order Now
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition">
              Weekly Specials
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HeroSection;


