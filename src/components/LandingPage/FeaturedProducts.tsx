import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GrilledChicken from '../../assets/img/grilledchicken.jpg';
import Salad from '../../assets/img/salad.jpg';
import Burger from '../../assets/img/burger.jpg';
import PizzaSlice from '../../assets/img/pizzaslice.jpg';
import Pasta from '../../assets/img/pasta.jpg';
import GrilledFish from '../../assets/img/grilledfish.jpg';
import Juice from '../../assets/img/juice.jpg';
import Cupcake from '../../assets/img/cupcake.jpg';
import ChocolateCake from '../../assets/img/chocolatecake.jpg';
import IceCream from '../../assets/img/icecream.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Grilled Chicken',
      price: '₦2,500',
      image: GrilledChicken,
      label: '20% Off',
    },
    {
      id: 2,
      name: 'Fresh Salad',
      price: '₦1,800',
      image: Salad,
      label: 'New',
    },
    {
      id: 3,
      name: 'Burger Combo',
      price: '₦3,200',
      image: Burger,
    },
    {
      id: 4,
      name: 'Pizza Slice',
      price: '₦1,200',
      image: PizzaSlice,
      label: '10% Off',
    },
    {
      id: 5,
      name: 'Pasta Bowl',
      price: '₦2,000',
      image: Pasta,
    },
    {
      id: 6,
      name: 'Grilled Fish',
      price: '₦3,500',
      image: GrilledFish,
      label: 'New',
    },
    {
      id: 7,
      name: 'Fruit Juice',
      price: '₦1,000',
      image: Juice,
    },
    {
      id: 8,
      name: 'Cupcake',
      price: '₦800',
      image: Cupcake,
      label: '15% Off',
    },
    {
      id: 9,
      name: 'Chocolate Cake',
      price: '₦3,000',
      image: ChocolateCake,
      label: 'New',
    },
    {
      id: 10,
      name: 'Ice Cream',
      price: '₦1,500',
      image: IceCream,
    },
  ];

  return (
    <div className="px-8 py-6 md:px-14">
      {/* Header */}
      <h2 className="text-2xl pl-2 font-bold mb-6">Featured Products</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              {/* Favorite Icon */}
              <div className="absolute top-2 right-2 p-1 rounded-full shadow-sm shadow-yellow-300">
                <FavoriteIcon className="text-red-500" fontSize="medium" />
              </div>
              {/* Label */}
              {product.label && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-xl animate-pulse">
                  {product.label}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="p-2 text-left">
              <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 text-sm font-semibold mb-4">{product.price}</p>
              <button className="bg-yellow-500 text-black text-sm md:text-sm px-4 md:px-12 py-1 md:py-0.5 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-600 transition whitespace-nowrap">
                <ShoppingCartIcon fontSize="small" className="text-sm md:text-sm" />
                Add to Cart
            </button>
            </div>

            <div>
                
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center'>
        <button className="bg-white text-gray-500 shadow-lg font-semibold text-sm border-1 border-gray-300 md:text-sm px-3 md:px-6 py-1 md:py-0.5 rounded-md flex items-center justify-center gap-2 hover:bg-yellow-600 transition whitespace-nowrap mt-6 animate-bounce">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;