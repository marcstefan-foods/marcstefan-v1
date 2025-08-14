import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    quote: "MarcStefan Foods made our wedding unforgettable! The food was perfect and the service was flawless.",
    name: "Sarah Johnson",
    title: "2025 Bride",
    rating: 5
  },
  {
    quote: "From planning to execution, everything was smooth. My guests are still talking about the food!",
    name: "James Lee",
    title: "Corporate Client",
    rating: 5
  },
  {
    quote: "They turned my birthday into a feast! Everything tasted amazing and the presentation was gorgeous.",
    name: "Emily Carter",
    title: "Birthday Celebration",
    rating: 4
  },
  {
    quote: "Professional, reliable, and absolutely delicious food. Highly recommended!",
    name: "Michael Brown",
    title: "Event Host",
    rating: 5
  }
];

const Review = () => {
  return (
    <div className="w-full bg-white py-10 px-4 md:px-14">
      <h2 className="text-2xl font-bold mb-8 text-left pl-2">What Our Clients Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-5 border border-gray-200 flex flex-col justify-between"
          >
            {/* Star Rating */}
            <div className="flex mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-sm" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-600 text-sm mb-4">"{review.quote}"</p>

            {/* Name and Title */}
            <div>
              <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
              <p className="text-gray-500 text-xs">{review.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
