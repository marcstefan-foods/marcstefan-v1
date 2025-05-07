import React from 'react';
import cater1 from '../../assets/img/cater1.jpg';

const CateringServices = () => {
  return (
    <div className="px-8 py-2 pb-12 md:px-14">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-4 pl-2">Catering Services</h2>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-lg border border-gray-300 relative flex flex-col items-center p-4 md:p-10 md:px-12 px-6 ap-6">
        {/* Background Image */}
        <div className="absolute inset-0">
         <img src={cater1}
            alt="Catering Service"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
        </div>

        {/* Details Section (Overlay) */}
        <div className="relative z-10 w-full text-white p-6">
          {/* Premium Service Badge */}
          <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
            Premium Service
          </div>

          {/* Header */}
          <h3 className="text-lg font-bold mb-4">
            Professional Catering For All Occasions
          </h3>

          {/* Description */}
          <p className="text-sm mb-4">
            Our catering services are designed to make your events memorable. We
            provide professional catering for weddings, corporate events, and
            private parties. <br />Let us handle the food while you enjoy your event.
          </p>

          {/* Event Types */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
              Weddings
            </button>
            <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
              Corporate Events
            </button>
            <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
              Private Parties
            </button>
            <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
              Birthdays
            </button>
          </div>

          {/* CTA Button */}
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 transition">
            Book Catering Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default CateringServices;
