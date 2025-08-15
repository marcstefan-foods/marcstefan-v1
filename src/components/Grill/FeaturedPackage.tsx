import React from "react";
import suyaImage from "../../assets/img/hero3.jpg";
import chickenImage from "../../assets/img/grilledchicken.jpg";
import mixedImage from "../../assets/img/grilledfish.jpg";
import familyImage from "../../assets/img/steak.jpg";

const FeaturedPackage = () => {
  const packages = [
    {
      id: 1,
      name: "Suya Lovers Pack",
      description:
        "Spicy Nigerian beef suya with onions, tomatoes, pepper mix & chilled drinks.",
      price: "₦8,000",
      image: suyaImage,
    },
    {
      id: 2,
      name: "Grilled Chicken Feast",
      description:
        "Juicy grilled chicken served with fried plantain, salad & a cold drink.",
      price: "₦12,000",
      image: chickenImage,
    },
    {
      id: 3,
      name: "Mixed Grill Deluxe",
      description:
        "Combination of grilled beef, chicken & fish with chips and coleslaw.",
      price: "₦15,000",
      image: mixedImage,
    },
    {
      id: 4,
      name: "Family Grill Platter",
      description:
        "Large platter with assorted grilled meats, plantains, fries & 4 drinks.",
      price: "₦25,000",
      image: familyImage,
    },
  ];

  return (
    <div className="w-full bg-white py-10 px-4 md:px-14">
      <h2 className="text-2xl font-bold mb-8 text-left pl-2">
        Featured Grill Packages
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-28 sm:h-32 object-cover"
            />

            {/* Content */}
            <div className="p-2 sm:p-3 flex flex-col flex-grow">
              <h3 className="font-bold text-sm sm:text-base mb-1">{pkg.name}</h3>
              <p className="text-gray-600 text-xs flex-grow">{pkg.description}</p>
              <div className="mt-2 sm:mt-3">
                <p className="text-sm sm:text-base font-semibold text-green-700">
                  {pkg.price}
                </p>
                <button className="mt-2 w-full bg-[#FFC107] hover:bg-yellow-500 text-gray-900 font-bold py-1 sm:py-1.5 px-2 sm:px-3 rounded-md text-xs sm:text-sm transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPackage;
