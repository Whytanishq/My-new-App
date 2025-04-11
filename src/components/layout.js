import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import CartTab from './cartTab';
import { useSelector } from 'react-redux';

const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className={`flex-grow ${statusTabCart ? "mr-96" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </div>
      </main>
      <CartTab />
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>WebPage created by Tanishq Saraf</p>
      </footer>
    </div>
  );
};

export default Layout;