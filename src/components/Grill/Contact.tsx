import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-[#FFF9E6] rounded-lg shadow-md p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-2">Ready to plan your grill party?</h2>
        
        {/* Description */}
        <p className="text-gray-700 text-base mb-5">
          We’re here to make your special moments unforgettable. Contact us today to start planning!
        </p>

        {/* Phone */}
        <div className="flex items-center mb-3">
          <FaPhoneAlt className="text-gray-800 mr-3 text-lg" />
          <span className="text-gray-700 text-base">+234 801 234 5678</span>
        </div>

        {/* Email */}
        <div className="flex items-center mb-3">
          <FaEnvelope className="text-gray-800 mr-3 text-lg" />
          <span className="text-gray-700 text-base">info@marcstefanfoods.com</span>
        </div>

        {/* Address */}
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-gray-800 mr-3 text-lg" />
          <span className="text-gray-700 text-base">123 Event Street, Lagos, Nigeria</span>
        </div>

        {/* Button */}
        <button className=" bg-[#FFC107] justify-center text-gray-900 font-bold py-2 px-2 rounded-md hover:bg-yellow-500 transition-colors">
          Request Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Contact;
