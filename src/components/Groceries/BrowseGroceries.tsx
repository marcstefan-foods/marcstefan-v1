import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import groceriesImg from '../../assets/img/herogroceries.jpg';

// ---- Types ----
type CategoryKey =
  | 'All Products'
  | 'Fruits and Vegetables'
  | 'Dairy and Eggs'
  | 'Bakery'
  | 'Meat and Seafood'
  | 'Pantry';

type GroceryItem = {
  name: string;
  desc: string;
  brand: string;
  price: string;
  organic?: boolean;
  discount?: number; // % off
};

// ---- Categories ----
const categories: { key: CategoryKey; label: string }[] = [
  { key: 'All Products', label: 'All Products' },
  { key: 'Fruits and Vegetables', label: 'Fruits and Vegetables' },
  { key: 'Dairy and Eggs', label: 'Dairy and Eggs' },
  { key: 'Bakery', label: 'Bakery' },
  { key: 'Meat and Seafood', label: 'Meat and Seafood' },
  { key: 'Pantry', label: 'Pantry' },
];

// ---- Items ----
const groceryItems: Record<CategoryKey, GroceryItem[]> = {
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

const BrowseGroceries: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>(categories[0].key);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerPage(4);         // mobile
      else if (w < 1024) setItemsPerPage(6);   // tablet
      else setItemsPerPage(8);                 // desktop
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const items = groceryItems[activeCategory] || [];
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Reset page when category or itemsPerPage changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory, itemsPerPage]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleCountChange = (itemKey: string, delta: number) => {
    setCounts(prev => ({
      ...prev,
      [itemKey]: Math.max(1, (prev[itemKey] || 1) + delta),
    }));
  };

  const currentItems = items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="px-4 py-4 md:px-8 lg:px-14">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left mt-6">
        Groceries
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap bg-gray-100 rounded-md mb-6 min-h-[48px] items-center px-2 justify-center md:justify-start">
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

      {/* Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {currentItems.map((item) => {
          const itemKey = `${item.name}-${item.brand}`;
          const count = counts[itemKey] || 1;

          // Keep labels stable per item by seeding with itemKey
          const seeded = itemKey.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
          const showOrganic = Boolean(item.organic && (seeded % 2 === 0));
          const showDiscount = Boolean(item.discount && (seeded % 3 === 0));

          return (
            <div
              key={itemKey}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative">
                <img src={groceriesImg} alt={item.name} className="w-full h-28 object-cover" />
                <div className="absolute top-2 left-2 flex gap-2">
                  {showOrganic && (
                    <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                      Organic
                    </span>
                  )}
                  {showDiscount && (
                    <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                      {item.discount}% OFF
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-2 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-sm font-semibold leading-tight">{item.name}</h3>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                  <p className="text-gray-500 text-xs">{item.brand}</p>
                  <span className="font-semibold text-green-700">{item.price}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      aria-label={`Decrease ${item.name} quantity`}
                      className="bg-gray-200 px-2 py-1 rounded font-bold"
                      onClick={() => handleCountChange(itemKey, -1)}
                    >
                      -
                    </button>
                    <span className="min-w-[1.25rem] text-center">{count}</span>
                    <button
                      aria-label={`Increase ${item.name} quantity`}
                      className="bg-gray-200 px-2 py-1 rounded font-bold"
                      onClick={() => handleCountChange(itemKey, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="bg-yellow-500 text-black text-xs px-3 py-1 rounded hover:bg-yellow-600 transition whitespace-nowrap"
                    onClick={() => {/* add to cart handler here */}}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="mt-6 flex justify-center">
          <ReactPaginate
            previousLabel="← Prev"
            nextLabel="Next →"
            breakLabel="..."
            onPageChange={handlePageClick}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            containerClassName="flex gap-2 flex-wrap"
            pageClassName="px-3 py-1 border rounded"
            breakClassName="px-3 py-1 border rounded"
            activeClassName="bg-yellow-500 text-white"
            previousClassName="px-3 py-1 border rounded"
            nextClassName="px-3 py-1 border rounded"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      )}
    </div>
  );
};

export default BrowseGroceries;
