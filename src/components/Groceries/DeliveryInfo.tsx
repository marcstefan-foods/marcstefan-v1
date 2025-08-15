import React from 'react';
import { FaLeaf, FaTruck, FaShippingFast } from 'react-icons/fa';

const DeliveryInfo = () => {
  return (
    <div className=" bg-white py-8 px-4 md:px-14">
      <h2 className="text-2xl font-bold mb-8 text-center">Delivery Information</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {/* Fresh Guarantee */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
          <FaLeaf className="text-green-500 text-4xl mb-3" />
          <h3 className="font-bold text-lg mb-2">Fresh Guarantee</h3>
          <p className="text-gray-600 text-center text-sm">
            We deliver only the freshest groceries, sourced daily from trusted local farms and suppliers.
          </p>
        </div>
        {/* Same Day Delivery */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
          <FaTruck className="text-yellow-500 text-4xl mb-3" />
          <h3 className="font-bold text-lg mb-2">Same Day Delivery</h3>
          <p className="text-gray-600 text-center text-sm">
            Place your order before 2pm and enjoy fast, same-day delivery to your doorstep.
          </p>
        </div>
        {/* Free Delivery */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
          <FaShippingFast className="text-blue-500 text-4xl mb-3" />
          <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
          <p className="text-gray-600 text-center text-sm">
            Get free delivery on all orders above ₦10,000. No hidden fees or extra charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;