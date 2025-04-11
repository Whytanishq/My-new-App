import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';

const Header = () => {
  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          FurniCraft
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/shop" className="text-gray-700 hover:text-indigo-600">Shop</Link>
          <Link to="/collection" className="text-gray-700 hover:text-indigo-600">Collection</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
        </nav>

        <button 
          onClick={() => dispatch(toggleStatusTab())}
          className="relative p-2 text-gray-600 hover:text-indigo-600"
        >
          <FiShoppingCart className="text-xl" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;