// src/pages/home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../components/productCart';
import products from '../products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20 text-center rounded-lg mb-12">
        <h1 className="text-4xl font-bold mb-4">Premium Furniture Collection</h1>
        <p className="text-xl mb-8">Discover handcrafted pieces that elevate your living space</p>
        <Link 
          to="/shop" 
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
        >
          Shop New Arrivals
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;