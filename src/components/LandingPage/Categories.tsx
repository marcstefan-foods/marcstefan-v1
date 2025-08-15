import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import CelebrationIcon from '@mui/icons-material/Celebration';

const Categories = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const categories = [
    {
      name: 'Restaurant',
      icon: <RestaurantIcon fontSize="large" className="text-green-700 animate-bounce" />,
      description: 'Explore our restaurant services.',
      onClick: () => navigate('/restaurant'), // Navigate to the Restaurant page
    },
    {
      name: 'Groceries',
      icon: <ShoppingCartIcon fontSize="large" className="text-green-700 animate-bounce" />,
      description: 'Fresh groceries delivered to you.',
      onClick: () => navigate('/groceries'), // Navigate to the Groceries page
    },
    {
      name: 'Grills',
      icon: <OutdoorGrillIcon fontSize="large" className="text-green-700 animate-bounce" />,
      description: 'Delicious grilled meals.',
      onClick: () => navigate('/grills'), // Navigate to the Grills page
    },
    {
      name: 'Catering',
      icon: <CelebrationIcon fontSize="large" className="text-green-700 animate-bounce" />,
      description: 'Catering services for all events.',
      onClick: () => navigate('/catering'), // Navigate to the Catering page
    },
  ];

  return (
    <div className="px-8 py-4 md:px-14">
      {/* Header */}
      <h2 className="text-2xl pl-2 font-bold mb-6">Categories</h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg border border-gray-400 p-4 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={category.onClick} 
          >
            {/* Icon */}
            <div className="mb-3">{category.icon}</div>

            {/* Name */}
            <h3 className="text-lg font-semibold mb-2">{category.name}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;