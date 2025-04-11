// src/components/productCart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: product.id,
      quantity: 1
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/detail/${product.slug}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link to={`/detail/${product.slug}`} className="hover:text-blue-600">
            {product.name}
          </Link>
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">${product.price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;