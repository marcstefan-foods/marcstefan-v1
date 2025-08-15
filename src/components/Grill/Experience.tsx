import React from "react";
import { FaMedal, FaUtensils, FaFireAlt } from "react-icons/fa";

const Experience = () => {
  const steps = [
    {
      id: 1,
      icon: <FaMedal size={18} />,
      title: "Premium Quality",
      description:
        "We source the finest cuts of meat, freshest produce, and highest-quality spices to ensure unforgettable taste.",
    },
    {
      id: 2,
      icon: <FaUtensils size={18} />,
      title: "Expert Technique",
      description:
        "Our chefs masterfully prepare every dish with precision, balancing texture, seasoning, and presentation.",
    },
    {
      id: 3,
      icon: <FaFireAlt size={18} />,
      title: "Signature Flavors",
      description:
        "From bold spices to unique marinades, every recipe is crafted to keep your guests wanting more.",
    },
  ];

  return (
    <div className="w-full bg-white py-2 px-4 md:px-14">
      <h2 className="text-2xl font-bold mb-8 text-left pl-2">
        MarcStefan Grill Experience
      </h2>

      {/* Mobile: 2 per row, last one alone. Tablet/Desktop: 3 per row */}
      <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center bg-white rounded-md shadow-md border border-gray-200 
                       transition-transform duration-300 hover:scale-105 hover:shadow-lg
                       p-4 sm:p-5"
          >
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ backgroundColor: "#DCEADC", color: "#519450" }}
            >
              {step.icon}
            </div>
            <h3 className="font-bold text-lg mt-3 mb-2 text-center">
              {step.title}
            </h3>
            <p className="text-gray-600 text-center text-sm leading-snug">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
