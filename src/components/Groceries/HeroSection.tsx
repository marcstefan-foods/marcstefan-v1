import React from 'react';
import { FaStar, FaClock, FaMapMarkerAlt, FaArrowLeft, FaSearch, FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import Groceries from '../../assets/img/herogroceries.jpg';

const HeroSection = () => {
  const navigate = useNavigate(); 

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[450px]">
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
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 md:px-14 text-shadow-black">
          {/* Header */}
          <h1 className="text-2xl md:text-5xl font-bold mb-3 text-center mt-10">
           Fresh Groceries
          </h1>

          {/* Description */}
          <p className="text-base md:text-base text-center max-w-lg mb-3">
            We source the best local and organic products to ensure you get the 
            freshest ingredients for your kitchen.
          </p>

          {/* Info Row */}
          <div className="flex flex-wrap justify-center gap-3 mb-3">
            {/* Ratings */}
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="text-base md:text-sm">4.8</span>
              <span className="text-base md:text-sm text-white">(120 reviews)</span>
            </div>

            {/* Delivery Time */}
            <div className="flex items-center gap-1">
              <FaClock />
              <span className="text-base md:text-sm">Free delivery on orders above #10,000</span>
            </div>  
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-yellow-500 text-base text-black px-4 py-0.5 rounded-md hover:bg-yellow-600 transition">
              Order Now
            </button>
            <button className="bg-gray-200 text-base text-gray-700 px-4 py-0.5 rounded-md hover:bg-gray-300 transition">
              Weekly Specials
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HeroSection;


