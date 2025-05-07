import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  return (
    <header className="w-full px-4 py-3 flex items-center justify-between shadow-md bg-white">

     {/* Logo */}
        <div className="flex items-center pl-2 md:pl-10">
                <img
                src="./src/assets/img/logoiconms.png"
                alt="Logo"
                className="h-16 w-16"
                />
        </div>

    {/* Search bar */}
        <div className="flex-1 mx-4 hidden sm:flex justify-center">
            <div className="relative w-100">
                <input
                type="text"
                placeholder="Search products, categories and all"
                className="w-100 px-3 py-1.5 pr-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                 <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
        </div>

    {/* Icons */}
        <div className="flex items-center gap-4 pr-4 md:pr-12">
            {/* Profile Icon */}
                <button className="text-black hover:text-yellow-500">
                    <AccountCircleIcon fontSize="medium" />
                </button>

            {/* Cart Icon */}
                <button className="text-black hover:text-yellow-500">
                    <ShoppingCartIcon fontSize="medium" />
                </button>
    
            {/* Menu Icon */}
                <button className="text-black hover:text-yellow-500">
                    <MenuIcon fontSize="medium" />
                </button>
        </div>
    </header>

  );
};

export default Header;