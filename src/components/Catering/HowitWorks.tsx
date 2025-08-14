import React from 'react';

const HowitWorks = () => {
  return (
    <div className="w-full bg-white py-8 px-4 md:px-14">
      <h2 className="text-2xl font-bold mb-8 text-left pl-2">How It Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center bg-white rounded-md shadow-md p-5 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <div className="w-10 h-10 flex items-center justify-center rounded-full" 
               style={{ backgroundColor: '#DCEADC', color: '#519450' }}>
            <span className="text-base font-bold">1</span>
          </div>
          <h3 className="font-bold text-lg mt-3 mb-2">Consultation</h3>
          <p className="text-gray-600 text-center text-sm">
            Share your event details, theme, and preferences with our team so we can understand your exact needs.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center bg-white rounded-md shadow-md p-5 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <div className="w-10 h-10 flex items-center justify-center rounded-full" 
               style={{ backgroundColor: '#DCEADC', color: '#519450' }}>
            <span className="text-base font-bold">2</span>
          </div>
          <h3 className="font-bold text-lg mt-3 mb-2">Menu Planning</h3>
          <p className="text-gray-600 text-center text-sm">
            Work with our chefs to craft a delicious, customized menu that fits your taste, theme, and budget.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center bg-white rounded-md shadow-md p-5 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <div className="w-10 h-10 flex items-center justify-center rounded-full" 
               style={{ backgroundColor: '#DCEADC', color: '#519450' }}>
            <span className="text-base font-bold">3</span>
          </div>
          <h3 className="font-bold text-lg mt-3 mb-2">Confirmation</h3>
          <p className="text-gray-600 text-center text-sm">
            Review and approve all details from menu to setup so we can finalize your booking with confidence.
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center bg-white rounded-md shadow-md p-5 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <div className="w-10 h-10 flex items-center justify-center rounded-full" 
               style={{ backgroundColor: '#DCEADC', color: '#519450' }}>
            <span className="text-base font-bold">4</span>
          </div>
          <h3 className="font-bold text-lg mt-3 mb-2">Execution</h3>
          <p className="text-gray-600 text-center text-sm">
            Sit back and enjoy while our team delivers exceptional food and service for your event.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowitWorks;
