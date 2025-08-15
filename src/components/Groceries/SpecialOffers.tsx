import React from "react";

const SpecialOffers = () => {
  return (
    <div className="px-4 py-4 md:px-14">
      {/* Section Header */}
      <h2 className="text-2xl font-bold mb-6 pl-2">Special Offers</h2>

      {/* Offers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        
        {/* Offer Card 1 */}
        <div className="relative bg-[#F4F8FD] shadow-lg rounded-sm border border-gray-200 p-4 sm:p-6 flex flex-col min-h-[160px] sm:min-h-[200px]">
          <div className="absolute top-4 left-4 bg-blue-200 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            Limited Offer
          </div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-base sm:text-lg font-semibold mt-8">Family Meal Deal</h3>
            <p className="text-sm sm:text-md text-gray-600">
              Get 20% off when you order a bulk on groceries.
            </p>
            <div className="w-full flex justify-center">
              <button className="bg-white text-gray-700 px-6 sm:px-10 py-1 rounded-md hover:bg-gray-100 transition font-semibold mt-4 animate-pulse">
                View Deal
              </button>
            </div>
          </div>
        </div>

        {/* Offer Card 2 */}
        <div className="relative bg-[#FFFBEA] shadow-lg rounded-sm border border-gray-200 p-4 sm:p-6 flex flex-col min-h-[160px] sm:min-h-[200px]">
          <div className="absolute top-4 left-4 bg-yellow-200 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
            New Customers
          </div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-base sm:text-lg font-semibold mt-8">15% Off 1st Order</h3>
            <p className="text-sm sm:text-md text-gray-600">
              Use code WLCM16 at checkout for 15% off your first order.
            </p>
            <div className="w-full flex justify-center">
              <button className="bg-white text-gray-700 px-6 sm:px-10 py-1 rounded-md hover:bg-gray-100 transition font-semibold mt-4 animate-pulse">
                View Deal
              </button>
            </div>
          </div>
        </div>

        {/* Offer Card 3 */}
        <div className="relative bg-[#F6FCF8] shadow-lg rounded-sm border border-gray-200 p-4 sm:p-6 flex flex-col min-h-[160px] sm:min-h-[200px]">
          <div className="absolute top-4 left-4 bg-green-200 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            Weekend Special
          </div>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-base sm:text-lg font-semibold mt-8">Free Dessert</h3>
            <p className="text-sm sm:text-md text-gray-600">
              Get a free delivery with any order on weekends.
            </p>
            <div className="w-full flex justify-center">
              <button className="bg-white text-gray-700 px-6 sm:px-10 py-1 rounded-md hover:bg-gray-100 transition font-semibold mt-4">
                View Deal
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SpecialOffers;
