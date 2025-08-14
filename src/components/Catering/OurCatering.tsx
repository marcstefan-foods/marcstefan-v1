import React from 'react';
import Wedding from '../../assets/img/dinner.png'
import Corporate from '../../assets/img/conference.png'
import Private from '../../assets/img/champagne.png'
import Menu from '../../assets/img/food.png'


const OurCatering = () => {
  return (
    <div className="w-full bg-white py-8 px-4 md:px-14">
      <h2 className="text-2xl font-bold mb-8 text-left pl-2">Our Catering</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Corporate event */}
        <div className="flex flex-col items-center bg-white rounded-md shadow-md p-5 border-1 border-gray-200">
          <img src={Corporate} alt='corporate icon' className="text-green-500 text-4xl mb-3" />
          <h3 className="font-bold text-lg mb-2">Corporate Events</h3>
          <p className="text-gray-600 text-center text-sm">
            Impress clients and colleagues with professional catering for
            meetings, conferences, and corporate functions.
          </p>
        </div>
        {/* Weddings */}
        <div className="flex flex-col items-center bg-white rounded-md shadow-md p-5 border-1 border-gray-200">
          <img src={Wedding} alt='wedding icon' className="text-yellow-500 text-4xl mb-3 w-7 h-7" />
          <h3 className="font-bold text-lg mb-2">Weddings</h3>
          <p className="text-gray-600 text-center text-sm">
            Create unforgettable memories with our custom wedding catering 
            packages, from intimate gathering to grand celebrations.
          </p>
        </div>
        {/* Private parties */}
        <div className="flex flex-col items-center bg-white rounded-md shadow-md p-5 border-1 border-gray-200">
          <img src={Private} alt='private icon' className="text-blue-500 text-4xl mb-3 w-7 h-7" />
          <h3 className="font-bold text-lg mb-2">Private Parties</h3>
          <p className="text-gray-600 text-center text-sm">
           Celebrate birthdays, anniversaries ,and special occasions 
           with delicious food and professional service.
          </p>
        </div>
        {/* Catering Services */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-5 border-1 border-gray-200">
          <img src={Menu} alt='menu icon' className="text-red-500 text-4xl mb-3 w-7 h-7" />
          <h3 className="font-bold text-lg mb-2">Custom Menu</h3>
          <p className="text-gray-600 text-center text-sm">
            Work with our chefs to create personalized menus 
            tailored to your preferences and dietary requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurCatering;