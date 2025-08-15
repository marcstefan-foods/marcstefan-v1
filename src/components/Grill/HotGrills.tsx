import React, { useState } from "react";
import suyaImage from "../../assets/img/hero3.jpg";
import chickenImage from "../../assets/img/grilledchicken.jpg";
import fishImage from "../../assets/img/grilledfish.jpg";
import veggieImage from "../../assets/img/salad.jpg";
import kebabImage from "../../assets/img/steak.jpg";
import wingsImage from "../../assets/img/grilledchicken.jpg";
import plantainImage from "../../assets/img/pasta.jpg";
import fishKebabImage from "../../assets/img/grilledfish.jpg";

interface GrillItem {
  id: number;
  name: string;
  description: string;
  price: number;
  spice: string;
  time: string;
  category: string;
  image: string;
}

type Quantities = { [id: number]: number };

const HotGrills: React.FC = () => {
  const categories = ["Popular", "Beef", "Chicken", "Fish", "Vegetarian", "Sides & Extras"];

  const allItems: GrillItem[] = [
    { id: 1, name: "Beef Suya", description: "Tender spicy Nigerian beef suya with onions and pepper mix.", price: 8000, spice: "Spicy", time: "15 mins", category: "Beef", image: suyaImage },
    { id: 2, name: "Grilled Chicken", description: "Juicy marinated chicken served with fresh salad and fries.", price: 12000, spice: "Medium", time: "20 mins", category: "Chicken", image: chickenImage },
    { id: 3, name: "Grilled Fish", description: "Fresh tilapia grilled to perfection with pepper sauce.", price: 15000, spice: "Mild", time: "25 mins", category: "Fish", image: fishImage },
    { id: 4, name: "Veggie Grill", description: "Grilled veggies served with a tangy garlic sauce.", price: 6000, spice: "Mild", time: "10 mins", category: "Vegetarian", image: veggieImage },
    { id: 5, name: "Beef Kebab", description: "Succulent beef cubes grilled with bell peppers and onions.", price: 9000, spice: "Medium", time: "18 mins", category: "Beef", image: kebabImage },
    { id: 6, name: "Chicken Wings", description: "Crispy grilled wings coated with spicy BBQ sauce.", price: 10000, spice: "Spicy", time: "15 mins", category: "Chicken", image: wingsImage },
    { id: 7, name: "Plantain Sides", description: "Fried plantains served hot and golden brown.", price: 4000, spice: "None", time: "5 mins", category: "Sides & Extras", image: plantainImage },
    { id: 8, name: "Fish Kebab", description: "Grilled fish skewers served with vegetables.", price: 14000, spice: "Mild", time: "20 mins", category: "Fish", image: fishKebabImage },
  ];

  const [activeCategory, setActiveCategory] = useState("Popular");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [quantities, setQuantities] = useState<Quantities>({});

  const filteredItems =
    activeCategory === "Popular"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleIncrease = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecrease = (id: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  return (
    <div className="w-full bg-white py-8 px-4 md:px-14">
      <h2 className="text-2xl font-bold mb-4">Hot Grills</h2>

      {/* Navigation */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              activeCategory === cat
                ? "bg-[#FFC107] text-gray-900"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentPage(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col text-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="font-bold text-base mb-1">{item.name}</h3>
              <p className="text-gray-600 text-xs mb-2 flex-grow">{item.description}</p>
              <p className="text-green-700 font-semibold mb-1">
                ₦{item.price.toLocaleString()}
              </p>
              <div className="flex justify-between text-[10px] text-gray-500 mb-3">
                <span className="px-2 py-0.5 bg-[#DCEADC] text-[#519450] rounded-full">
                  {item.spice}
                </span>
                <span>{item.time}</span>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => handleDecrease(item.id)}
                    className="px-2 py-1"
                  >
                    -
                  </button>
                  <span className="px-3">{quantities[item.id] || 1}</span>
                  <button
                    onClick={() => handleIncrease(item.id)}
                    className="px-2 py-1"
                  >
                    +
                  </button>
                </div>
                <button className="bg-[#FFC107] hover:bg-yellow-500 text-gray-900 font-bold py-1 px-3 rounded-md text-xs">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === idx + 1
                ? "bg-[#FFC107] text-gray-900"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HotGrills;
