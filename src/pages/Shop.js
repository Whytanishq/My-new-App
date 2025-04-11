// src/pages/shop.js
import React, { useState } from 'react';
import ProductCart from '../components/productCart';
import products from '../products';

const Shop = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredProducts = categoryFilter === 'all' 
    ? products 
    : products.filter(p => p.category === categoryFilter);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">All Products</h1>
        <div className="flex space-x-4">
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded-md px-4 py-2 bg-white"
          >
            <option value="all">All Categories</option>
            <option value="living-room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="dining-room">Dining Room</option>
            <option value="office">Office</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;