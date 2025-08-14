import React from "react";

const SpecialOffers = () => {
  return (
    <div>
      {/* Special Offers Section */}
      <div className="px-2 py-4 md:px-14">
        <h2 className="text-xl md:text-2xl font-bold mb-4 pl-2 mt-4 text-center md:text-left">Special Offers</h2>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 justify-center">
          {/* Offer Card 1 */}
          <div className="relative bg-[#F4F8FD] shadow-lg rounded-sm border border-gray-200 p-3 md:p-4 flex flex-col min-h-[140px] max-w-[340px] mx-auto">
            {/* Badge */}
            <div className="absolute top-2 left-2 bg-blue-200 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
              Limited Offer
            </div>
            <div className="flex flex-col items-start gap-1 pb-4">
              <h3 className="text-base md:text-lg font-semibold mb-1 mt-6 text-left w-full">
                Family Meal Deal
              </h3>
              <p className="text-sm md:text-md text-gray-600 mb-1 text-left w-full">
                Get 20% off when you order a family meal pack for 4 people.
              </p>
              <div className="w-full flex justify-center">
                <button className="bg-white text-gray-700 px-8 md:px-16 py-1 rounded-md hover:bg-gray-100 transition font-semibold mt-3 animate-pulse text-xs md:text-sm">
                  View Deal
                </button>
              </div>
            </div>
          </div>

          {/* Offer Card 2 */}
          <div className="relative bg-[#FFFBEA] shadow-lg rounded-sm border border-gray-200 p-3 md:p-4 flex flex-col min-h-[140px] max-w-[340px] mx-auto">
            {/* Badge */}
            <div className="absolute top-2 left-2 bg-yellow-200 text-yellow-700 text-xs font-semibold px-2 py-0.5 rounded-full">
              New Customers
            </div>
            <div className="flex flex-col items-start gap-1 pb-4">
              <h3 className="text-base md:text-lg font-semibold mb-1 mt-6 text-left w-full">
                15% Off First Order
              </h3>
              <p className="text-sm md:text-md text-gray-600 mb-1 text-left w-full">
                Use code WELCOME16 at checkout for 15% off your first order.
              </p>
              <div className="w-full flex justify-center">
                <button className="bg-white text-gray-700 px-8 md:px-16 py-1 rounded-md hover:bg-gray-100 transition font-semibold mt-3 animate-pulse text-xs md:text-sm">
                  View Deal
                </button>
              </div>
            </div>
          </div>

          {/* Offer Card 3 */}
          <div className="relative bg-[#F6FCF8] shadow-lg rounded-sm border border-gray-200 p-3 md:p-4 flex flex-col min-h-[140px] max-w-[340px] mx-auto">
            {/* Badge */}
            <div className="absolute top-2 left-2 bg-green-200 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
              Weekend Special
            </div>
            <div className="flex flex-col items-start gap-1 pb-4">
              <h3 className="text-base md:text-lg font-semibold mb-1 mt-6 text-left w-full">
                Free Dessert
              </h3>
              <p className="text-sm md:text-md text-gray-600 mb-1 text-left w-full">
                Get a free dessert with any main course ordered on weekends.
              </p>
              <div className="w-full flex justify-center">
                <button className="bg-white text-gray-700 px-8 md:px-16 py-1 rounded-md hover:bg-gray-100 transition font-semibold mt-3 text-xs md:text-sm">
                  View Deal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;