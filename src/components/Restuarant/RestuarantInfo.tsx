import React from 'react'

const RestuarantInfo = () => {
  return (
    <div className="w-full">
      {/* Restaurant Info Section */}
      <div className="w-full px-0 py-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6 pl-8">Restaurant Information</h2>
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-8">
          {/* Info Card 1: Hours of Operation */}
          <div className="bg-white shadow-lg rounded-sm border border-gray-200 p-8 w-full flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-4">Hours of Operation</h3>
            <div className="flex justify-between w-full mb-2">
              <span className="text-md text-gray-600">Monday - Friday:</span>
              <span className="text-md text-gray-600">9:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between w-full mb-2">
              <span className="text-md text-gray-600">Saturday:</span>
              <span className="text-md text-gray-600">10:00 AM - 11:00 PM</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-md text-gray-600">Sunday:</span>
              <span className="text-md text-gray-600">10:00 AM - 9:00 PM</span>
            </div>
          </div>

          {/* Info Card 2: Location and Contact */}
          <div className="bg-white shadow-lg rounded-sm border border-gray-200 p-8 w-full flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-2">Location & Contact</h3>
            <p className="text-md text-gray-600">123 Food Street, Flavor Town</p>
            <p className="text-md text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-md text-gray-600">Email: marcstefanfoods@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestuarantInfo