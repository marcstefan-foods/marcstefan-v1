import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-100 px-8 py-10 md:px-14">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/3">
          {/* Logo */}
          <div className="mb-2">
            <img src="./src/assets/img/logoiconms.png" alt="Logo" className="w-12 h-12" />
          </div>

          {/* Small Text Details */}
          <p className="text-sm text-gray-600 mb-4">
            Providing quality services and products to make your life easier and more enjoyable.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Right Section: Columns */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800">Catering</a></li>
              <li><a href="#" className="hover:text-gray-800">Restaurant</a></li>
              <li><a href="#" className="hover:text-gray-800">Groceries</a></li>
              <li><a href="#" className="hover:text-gray-800">Grill Services</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-800">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800">Terms of Service</a></li>
            </ul>
          </div>

          {/* Payment Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Payment</h3>
            <div className="flex flex-wrap gap-2">
              <button className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-md">
                Paystack
              </button>
              <button className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-md">
                Monnify
              </button>
              <button className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-md">
                Debit Card
              </button>
              <button className="bg-gray-200 text-gray-700 text-xs px-4 py-2 rounded-md">
                Bank Transfer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-600">
        © 2025 MarcStefan Foods. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;