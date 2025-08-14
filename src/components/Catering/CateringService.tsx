import React, { useState } from "react";
import Catering from '../../assets/img/cater1.jpg'
import Catering2 from '../../assets/img/cater7.jpg'
import Catering3 from '../../assets/img/cater3.jpg'
import Catering4 from '../../assets/img/cater4.jpg'
import Catering5 from '../../assets/img/cater5.jpg'
import Catering6 from '../../assets/img/cater2.jpg'

type TabKey = "Packages" | "Corporate" | "Weddings" | "Special Events" | "Custom Menus";

interface PackageItem {
  label?: string;
  name: string;
  image: string;
  desc: string;
  price: string;
  guests: string;
  includes: string[];
}

const navTabs: { key: TabKey; label: string }[] = [
  { key: "Packages", label: "Packages" },
  { key: "Corporate", label: "Corporate" },
  { key: "Weddings", label: "Weddings" },
  { key: "Special Events", label: "Special Events" },
  { key: "Custom Menus", label: "Custom Menus" },
];

const packagesData: Record<TabKey, PackageItem[]> = {
  Packages: [
    {
      label: "Best Seller",
      name: "Deluxe Buffet",
      image: Catering,
      desc: "Premium buffet with multiple choices.",
      price: "₦750,000",
      guests: "Up to 50 guests",
      includes: ["2 meat options", "3 sides", "Desserts", "Drinks"],
    },
    {
      name: "Classic Feast",
      image: Catering2,
      desc: "Affordable yet delicious catering.",
      price: "₦500,000",
      guests: "Up to 40 guests",
      includes: ["1 meat option", "2 sides", "Soft drinks", "Great Service"],
    },
  ],
  Corporate: [
    {
      name: "Corporate Lunch",
      image: Catering3,
      desc: "Perfect for office gatherings.",
      price: "₦400,000",
      guests: "Up to 30 guests",
      includes: ["Sandwiches", "Snacks", "Beverages", "Soft Drinks"],
    },
    {
      name: "Executive Meal Plan",
      image: Catering3,
      desc: "Luxury dining for executives.",
      price: "₦600,000",
      guests: "Up to 40 guests",
      includes: ["Full-course meals", "Desserts", "Drinks", "Coffee"],
    },
  ],
  Weddings: [
    {
      name: "Wedding Feast",
      image: Catering4,
      desc: "Elegant dining for your big day.",
      price: "₦1,200,000",
      guests: "Up to 100 guests",
      includes: ["Full course meals", "Appetizers", "Drinks", "Desserts"],
    },
    {
      name: "Intimate Wedding",
      image: Catering5,
      desc: "Small-scale but beautiful wedding menu.",
      price: "₦800,000",
      guests: "Up to 60 guests",
      includes: ["Buffet", "Soft drinks", "Cake", "Desserts"],
    },
  ],
  "Special Events": [
    {
      name: "Birthday Bash",
      image: Catering,
      desc: "Fun and delicious treats for birthdays.",
      price: "₦300,000",
      guests: "Up to 40 guests",
      includes: ["Cakes", "Snacks", "Drinks", "Cup Meals"],
    },
    {
      name: "Anniversary Dinner",
      image: Catering6,
      desc: "Romantic and delicious experience.",
      price: "₦450,000",
      guests: "Up to 30 guests",
      includes: ["3-course meal", "Wine", "Desserts", "Starters"],
    },
  ],
  "Custom Menus": [
    {
      name: "Tailored Experience",
      image: Catering2,
      desc: "Custom menu for your unique event.",
      price: "Contact for quote",
      guests: "Flexible",
      includes: ["Fully personalized menu", "Custom serving style"],
    },
    {
      name: "Special Request Menu",
      image: Catering,
      desc: "Designed from scratch for your taste.",
      price: "Contact for quote",
      guests: "Flexible",
      includes: ["Any cuisine type", "Any dietary requirements"],
    },
  ],
};

const CateringService: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Packages");

  return (
    <div className="w-full bg-white py-8 px-4 md:px-14">
      <h2 className="text-2xl font-bold mb-8 text-left pl-2">Catering Service</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {navTabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
              activeTab === tab.key
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-yellow-100"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packagesData[activeTab].map((pkg) => (
          <div
            key={pkg.name}
            className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col min-h-[380px] w-full"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="p-5">
            <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{pkg.desc}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-green-700">{pkg.price}</span>
              <span className="text-gray-500 text-sm">{pkg.guests}</span>
            </div>
            <div className="border-b border-gray-200 my-3"></div>
            <ul className="text-gray-700 text-sm mb-4 list-disc pl-5">
              {pkg.includes.map((inc, i) => (
                <li key={i}>{inc}</li>
              ))}
            </ul>
            <div className="flex gap-4 mt-auto">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-600 transition font-semibold">
                Request Quote
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition font-semibold">
                View Details
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CateringService;
