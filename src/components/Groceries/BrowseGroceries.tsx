import React, { useState } from 'react';

// Import one image for all groceries
import groceriesImg from '../../assets/img/herogroceries.jpg';

const categories = [
  { key: 'All Products', label: 'All Products' },
  { key: 'Fruits and Vegetables', label: 'Fruits and Vegetables' },
  { key: 'Dairy and Eggs', label: 'Dairy and Eggs' },
  { key: 'Bakery', label: 'Bakery' },
  { key: 'Meat and Seafood', label: 'Meat and Seafood' },
  { key: 'Pantry', label: 'Pantry' },
];

type GroceryItem = {
  name: string;
  desc: string;
  brand: string;
  price: string;
  organic?: boolean;
  discount?: number; // percentage off
};

const groceryItems: { [key: string]: GroceryItem[] } = {
  'All Products': [
    { name: 'Eggs', desc: 'Crate of 30 eggs', brand: 'FarmFresh', price: '₦2,500', organic: true, discount: 10 },
    { name: 'Vegetable Oil', desc: '1.5 Liters', brand: 'Devon Kings', price: '₦3,200', discount: 5 },
    { name: 'Vegetable Oil', desc: '1.5 Liters', brand: 'Power Oil', price: '₦3,000', organic: false },
    { name: 'Tomatoes', desc: 'Fresh basket', brand: 'Local Farms', price: '₦1,200', organic: true },
    { name: 'Bread', desc: 'Whole wheat loaf', brand: 'Golden Loaf', price: '₦900', discount: 15 },
    { name: 'Milk', desc: '1 Liter', brand: 'Peak', price: '₦1,500' },
    { name: 'Chicken Breast', desc: '500g pack', brand: 'Agric Farms', price: '₦2,800', organic: true },
    { name: 'Apple', desc: 'Pack of 6', brand: 'Fresh Farms', price: '₦1,800', discount: 20 },
    { name: 'Yam', desc: 'Medium tuber', brand: 'Local Farms', price: '₦1,000' },
    { name: 'Sardines', desc: 'Tin', brand: 'Titus', price: '₦700', discount: 5 },
    { name: 'Spaghetti', desc: '500g', brand: 'Golden Penny', price: '₦850' },
    { name: 'Butter', desc: '250g', brand: 'Blue Band', price: '₦1,200', organic: false },
    { name: 'Orange Juice', desc: '1 Liter', brand: 'Chivita', price: '₦1,700', discount: 10 },
    { name: 'Potatoes', desc: '2kg bag', brand: 'Jos Farms', price: '₦2,000', organic: true },
    { name: 'Onions', desc: '1kg', brand: 'Local Farms', price: '₦800' },
  ],
  'Fruits and Vegetables': [
    { name: 'Tomatoes', desc: 'Fresh basket', brand: 'Local Farms', price: '₦1,200', organic: true },
    { name: 'Apple', desc: 'Pack of 6', brand: 'Fresh Farms', price: '₦1,800', discount: 20 },
    { name: 'Potatoes', desc: '2kg bag', brand: 'Jos Farms', price: '₦2,000', organic: true },
    { name: 'Onions', desc: '1kg', brand: 'Local Farms', price: '₦800' },
    { name: 'Carrots', desc: '500g pack', brand: 'Jos Farms', price: '₦700', organic: true },
    { name: 'Cabbage', desc: 'Medium head', brand: 'Local Farms', price: '₦600' },
    { name: 'Banana', desc: 'Bunch of 8', brand: 'Fresh Farms', price: '₦1,000' },
    { name: 'Lettuce', desc: 'Fresh leaves', brand: 'Jos Farms', price: '₦500', organic: true },
  ],
  'Dairy and Eggs': [
    { name: 'Eggs', desc: 'Crate of 30 eggs', brand: 'FarmFresh', price: '₦2,500', organic: true, discount: 10 },
    { name: 'Milk', desc: '1 Liter', brand: 'Peak', price: '₦1,500' },
    { name: 'Butter', desc: '250g', brand: 'Blue Band', price: '₦1,200', organic: false },
    { name: 'Yogurt', desc: '500ml', brand: 'Hollandia', price: '₦1,200' },
    { name: 'Cheese', desc: '200g', brand: 'Dano', price: '₦1,800', discount: 5 },
  ],
  'Bakery': [
    { name: 'Bread', desc: 'Whole wheat loaf', brand: 'Golden Loaf', price: '₦900', discount: 15 },
    { name: 'Croissant', desc: 'Pack of 4', brand: 'Bakery House', price: '₦1,200' },
    { name: 'Cake', desc: 'Slice', brand: 'Sweet Tooth', price: '₦700', discount: 10 },
    { name: 'Buns', desc: 'Pack of 6', brand: 'Golden Loaf', price: '₦800' },
  ],
  'Meat and Seafood': [
    { name: 'Chicken Breast', desc: '500g pack', brand: 'Agric Farms', price: '₦2,800', organic: true },
    { name: 'Sardines', desc: 'Tin', brand: 'Titus', price: '₦700', discount: 5 },
    { name: 'Beef', desc: '1kg', brand: 'Local Farms', price: '₦3,500', organic: true },
    { name: 'Fish', desc: '1kg', brand: 'Jos Farms', price: '₦2,200' },
    { name: 'Prawns', desc: '250g', brand: 'Sea Fresh', price: '₦2,000', discount: 8 },
  ],
  'Pantry': [
    { name: 'Vegetable Oil', desc: '1.5 Liters', brand: 'Devon Kings', price: '₦3,200', discount: 5 },
    { name: 'Vegetable Oil', desc: '1.5 Liters', brand: 'Power Oil', price: '₦3,000', organic: false },
    { name: 'Spaghetti', desc: '500g', brand: 'Golden Penny', price: '₦850' },
    { name: 'Rice', desc: '5kg bag', brand: 'Mama Gold', price: '₦6,500', discount: 10 },
    { name: 'Beans', desc: '2kg bag', brand: 'Local Farms', price: '₦2,200' },
    { name: 'Salt', desc: '500g', brand: 'Dangote', price: '₦300' },
    { name: 'Sugar', desc: '1kg', brand: 'Dangote', price: '₦800' },
  ],
};

const BrowseGroceries = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  const items = groceryItems[activeCategory] || [];

  const handleCountChange = (itemKey: string, delta: number) => {
    setCounts(prev => ({
      ...prev,
      [itemKey]: Math.max(1, (prev[itemKey] || 1) + delta),
    }));
  };

  return (
    <div>
      <div className="px-4 py-4 md:px-8 lg:px-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 pl-2 text-center md:text-left mt-6">Groceries</h2>
        {/* Navigation Bar */}
        <div className="flex flex-wrap bg-gray-100 rounded-md mb-8 h-auto min-h-[48px] items-center px-2 justify-center md:justify-start">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`mx-2 my-2 px-4 py-1 rounded-full text-sm font-semibold transition ${
                activeCategory === cat.key
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-yellow-100'
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Groceries Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
          {items.map((item, idx) => {
            const itemKey = `${item.name}-${item.brand}`;
            const count = counts[itemKey] || 1;
            // Randomly show organic or discount label
            const showOrganic = item.organic && Math.random() > 0.5;
            const showDiscount = item.discount && Math.random() > 0.5;
            return (
              <div
                key={itemKey}
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[220px] max-h-[240px]"
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={groceriesImg}
                    alt={item.name}
                    className="w-full h-28 object-cover"
                  />
                  {/* Organic/Discount Labels */}
                  {(showOrganic || showDiscount) && (
                    <div className="absolute top-2 left-2 flex gap-2 z-10">
                      {showOrganic && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">Organic</span>
                      )}
                      {showDiscount && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">{item.discount}% OFF</span>
                      )}
                    </div>
                  )}
                </div>
                {/* Product Details */}
                <div className="p-2 text-left flex flex-col justify-between flex-1">
                  <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-gray-600 text-xs">{item.desc}</p>
                    <span className="font-semibold text-green-700 ml-2">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-xs mb-2">{item.brand}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded text-lg font-bold"
                        onClick={() => handleCountChange(itemKey, -1)}
                      >-</button>
                      <span className="font-semibold">{count}</span>
                      <button
                        className="bg-gray-200 px-2 py-1 rounded text-lg font-bold"
                        onClick={() => handleCountChange(itemKey, 1)}
                      >+</button>
                    </div>
                    <button className="bg-yellow-500 text-black text-sm px-3 py-1 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-600 transition whitespace-nowrap ml-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowseGroceries;