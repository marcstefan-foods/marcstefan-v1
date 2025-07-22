import React, { useState } from 'react';

// Import images from your assets folder
import grilledChickenImg from '../../assets/img/grilledchicken.jpg';
import classicBurgerImg from '../../assets/img/burger.jpg';
import caesarSaladImg from '../../assets/img/salad.jpg';
import spaghettiImg from '../../assets/img/pasta.jpg';
import fishTacosImg from '../../assets/img/fishtacos.jpg.jpg';
import bbqRibsImg from '../../assets/img/bbqribs.jpg';
import steakImg from '../../assets/img/steak.jpg';
import roastSalmonImg from '../../assets/img/roastsalmon.jpg';
import chickenAlfredoImg from '../../assets/img/pasta.jpg';
import vegetableStirFryImg from '../../assets/img/vegetable.jpg';
import lambChopsImg from '../../assets/img/bbqribs.jpg';
import shrimpScampiImg from '../../assets/img/shrimp.jpg';
import springRollsImg from '../../assets/img/springrolls.jpg';
import bruschettaImg from '../../assets/img/bruschetta.jpg';
import stuffedMushroomsImg from '../../assets/img/stuffmushroom.jpg';
import garlicBreadImg from '../../assets/img/garlicbread.jpg';
import chickenWingsImg from '../../assets/img/grilledchicken.jpg';
import mozzarellaSticksImg from '../../assets/img/mozzarella.jpg';
import chocolateCakeImg from '../../assets/img/chocolatecake.jpg';
import cheesecakeImg from '../../assets/img/cheesecake.jpg';
import iceCreamSundaeImg from '../../assets/img/icecream.jpg';
import fruitTartImg from '../../assets/img/hero2.jpg';
import brownieImg from '../../assets/img/brownie.jpg';
import lemonPieImg from '../../assets/img/lemonpie.jpg';
import lemonadeImg from '../../assets/img/lemonade.jpg';
import icedTeaImg from '../../assets/img/icedtea.jpg';
import coffeeImg from '../../assets/img/coffee.jpg';
import smoothieImg from '../../assets/img/smoothie.jpg';
import sodaImg from '../../assets/img/soda.jpg';
import milkshakeImg from '../../assets/img/milkshake.jpg';

const itemImages: { [key: string]: string } = {
  "Grilled Chicken": grilledChickenImg,
  "Classic Burger": classicBurgerImg,
  "Caesar Salad": caesarSaladImg,
  "Spaghetti Bolognese": spaghettiImg,
  "Fish Tacos": fishTacosImg,
  "BBQ Ribs": bbqRibsImg,
  "Steak": steakImg,
  "Roast Salmon": roastSalmonImg,
  "Chicken Alfredo": chickenAlfredoImg,
  "Vegetable Stir Fry": vegetableStirFryImg,
  "Lamb Chops": lambChopsImg,
  "Shrimp Scampi": shrimpScampiImg,
  "Spring Rolls": springRollsImg,
  "Bruschetta": bruschettaImg,
  "Stuffed Mushrooms": stuffedMushroomsImg,
  "Garlic Bread": garlicBreadImg,
  "Chicken Wings": chickenWingsImg,
  "Mozzarella Sticks": mozzarellaSticksImg,
  "Chocolate Cake": chocolateCakeImg,
  "Cheesecake": cheesecakeImg,
  "Ice Cream Sundae": iceCreamSundaeImg,
  "Fruit Tart": fruitTartImg,
  "Brownie": brownieImg,
  "Lemon Pie": lemonPieImg,
  "Lemonade": lemonadeImg,
  "Iced Tea": icedTeaImg,
  "Coffee": coffeeImg,
  "Smoothie": smoothieImg,
  "Soda": sodaImg,
  "Milkshake": milkshakeImg,
};

const categories = [
  { key: 'popular', label: 'Popular' },
  { key: 'main', label: 'Main Dishes' },
  { key: 'appetizers', label: 'Appetizers' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'drinks', label: 'Drinks' },
];

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  rating?: number;
  prepTime?: string;
};

const menuItems: { [key: string]: MenuItem[] } = {
  popular: [
    { name: 'Grilled Chicken', desc: 'Juicy grilled chicken breast', price: '₦8,500', rating: 4.5, prepTime: '20 mins' },
    { name: 'Classic Burger', desc: 'Beef patty, cheese, lettuce', price: '₦6,000', rating: 4.2, prepTime: '15 mins' },
    { name: 'Caesar Salad', desc: 'Romaine, parmesan, croutons', price: '₦4,500', rating: 4.0, prepTime: '10 mins' },
    { name: 'Spaghetti Bolognese', desc: 'Rich tomato meat sauce', price: '₦7,000', rating: 4.3, prepTime: '18 mins' },
    { name: 'Fish Tacos', desc: 'Crispy fish, slaw, sauce', price: '₦5,500', rating: 4.1, prepTime: '12 mins' },
    { name: 'BBQ Ribs', desc: 'Tender pork ribs, BBQ sauce', price: '₦10,000', rating: 4.6, prepTime: '25 mins' },
  ],
  main: [
    { name: 'Steak', desc: 'Grilled to perfection', price: '₦13,000', rating: 4.7, prepTime: '25 mins' },
    { name: 'Roast Salmon', desc: 'Herb crusted salmon', price: '₦12,000', rating: 4.5, prepTime: '22 mins' },
    { name: 'Chicken Alfredo', desc: 'Creamy pasta & chicken', price: '₦9,000', rating: 4.4, prepTime: '20 mins' },
    { name: 'Vegetable Stir Fry', desc: 'Seasonal veggies, soy sauce', price: '₦6,500', rating: 4.0, prepTime: '15 mins' },
    { name: 'Lamb Chops', desc: 'Grilled lamb, rosemary', price: '₦15,000', rating: 4.6, prepTime: '28 mins' },
    { name: 'Shrimp Scampi', desc: 'Garlic butter shrimp', price: '₦11,000', rating: 4.3, prepTime: '18 mins' },
  ],
  appetizers: [
    { name: 'Spring Rolls', desc: 'Crispy veggie rolls', price: '₦2,500', rating: 4.2, prepTime: '8 mins' },
    { name: 'Bruschetta', desc: 'Tomato, basil, toast', price: '₦3,000', rating: 4.1, prepTime: '7 mins' },
    { name: 'Stuffed Mushrooms', desc: 'Cheese & herb filling', price: '₦3,500', rating: 4.3, prepTime: '10 mins' },
    { name: 'Garlic Bread', desc: 'Buttery garlic toast', price: '₦2,000', rating: 4.0, prepTime: '6 mins' },
    { name: 'Chicken Wings', desc: 'Spicy buffalo wings', price: '₦4,000', rating: 4.4, prepTime: '12 mins' },
    { name: 'Mozzarella Sticks', desc: 'Fried cheese sticks', price: '₦3,000', rating: 4.2, prepTime: '9 mins' },
  ],
  desserts: [
    { name: 'Chocolate Cake', desc: 'Rich chocolate layers', price: '₦3,500', rating: 4.5, prepTime: '10 mins' },
    { name: 'Cheesecake', desc: 'Creamy & smooth', price: '₦4,000', rating: 4.6, prepTime: '12 mins' },
    { name: 'Ice Cream Sundae', desc: 'Vanilla, chocolate, toppings', price: '₦2,500', rating: 4.3, prepTime: '5 mins' },
    { name: 'Fruit Tart', desc: 'Fresh fruit, custard', price: '₦3,000', rating: 4.2, prepTime: '8 mins' },
    { name: 'Brownie', desc: 'Fudgy chocolate brownie', price: '₦2,000', rating: 4.4, prepTime: '7 mins' },
    { name: 'Lemon Pie', desc: 'Tangy lemon filling', price: '₦2,800', rating: 4.1, prepTime: '9 mins' },
  ],
  drinks: [
    { name: 'Lemonade', desc: 'Fresh squeezed', price: '₦1,500', rating: 4.0, prepTime: '3 mins' },
    { name: 'Iced Tea', desc: 'Classic brew', price: '₦1,200', rating: 4.1, prepTime: '4 mins' },
    { name: 'Coffee', desc: 'Hot or iced', price: '₦1,000', rating: 4.2, prepTime: '2 mins' },
    { name: 'Smoothie', desc: 'Fruit blend', price: '₦2,000', rating: 4.3, prepTime: '5 mins' },
    { name: 'Soda', desc: 'Assorted flavors', price: '₦800', rating: 4.0, prepTime: '2 mins' },
    { name: 'Milkshake', desc: 'Chocolate or vanilla', price: '₦2,200', rating: 4.4, prepTime: '6 mins' },
  ],
};

const OurMenu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);

  const items = menuItems[activeCategory] || [];

  return (
    <div>
      <div className="px-8 py-4 md:px-14">
        <h2 className="text-2xl font-bold mb-6 pl-2">Our Menu</h2>
        {/* Navigation Bar */}
        <div className="flex bg-gray-100 rounded-md mb-8 h-12 items-center px-2">
          {categories.map(cat => (
            <button
              key={cat.key}
              className={`mx-2 px-4 py-1 rounded-full text-sm font-semibold transition ${
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
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {items.map((item, idx) => (
            <div key={`${item.name}-${idx}`} className="bg-white shadow rounded-lg p-6 flex flex-row items-center">
              {/* Content */}
              <div className="flex-1 flex flex-col items-start">
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.desc}</p>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-green-700">{item.price}</span>
                  <span className="text-yellow-500 flex items-center">
                    {item.rating && (
                      <>
                        <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z"/>
                        </svg>
                        <span className="font-semibold">{item.rating}</span>
                      </>
                    )}
                  </span>
                  <span className="text-gray-400 text-xs">{item.prepTime}</span>
                </div>
                <button className="mt-2 bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition font-semibold text-sm">
                  Add to Cart
                </button>
              </div>
              {/* Image */}
              <img
                src={itemImages[item.name]}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg ml-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurMenu;