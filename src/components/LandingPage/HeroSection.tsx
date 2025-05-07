import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Hero1 from '../../assets/img/hero1.jpg';
import Hero2 from '../../assets/img/hero2.jpg';
import Hero3 from '../../assets/img/hero3.jpg';

const HeroSection = () => {
  const images = [
    {
      src: Hero1,
      title: 'Restaurant Services',
      description: 'Enjoy 20% off on all restaurant services!',
    },
    {
      src: Hero2,
      title: 'Groceries',
      description: 'Fresh groceries delivered to your doorstep. Save 15% today!',
    },
    {
      src: Hero3,
      title: 'Grill Services',
      description: 'Get 25% off on all grill services this weekend!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[340px] overflow-hidden ">
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-500 border-yellow-500"
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

        {/* Text Overlay */}
        <div className="absolute top-1/4 left-12 md:left-16 text-white max-w-sm drop-shadow-lg md:drop-shadow-lg">
        <h1 className="text-3xl font-extrabold mb-2">{images[currentIndex].title}</h1>
        <p className="text-lg font-extrabold mb-4">{images[currentIndex].description}</p>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition">
            Shop Now
        </button>
        </div>

      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40 text-white px-1 py-0.5 rounded-sm hover:bg-black/50 transition"
      >
        <ArrowBackIosIcon className="pl-1.5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-sm hover:bg-black/50 transition"
      >
        <ArrowForwardIosIcon fontSize="inherit" style={{ fontSize: '18px' }} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-yellow-500' : 'bg-gray-300'
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;