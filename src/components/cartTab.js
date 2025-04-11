import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { toggleStatusTab, clearCart } from '../stores/cart';
import products from '../products';
import Payment from './Payment';
import OrderTracking from './OrderTracking';

const CartTab = () => {
  const [checkoutStep, setCheckoutStep] = useState('cart');
  const [orderDetails, setOrderDetails] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [trackingPreference, setTrackingPreference] = useState('standard');

  const carts = useSelector(store => store.cart.items);
  const statusTab = useSelector(store => store.cart.statusTab);
  const dispatch = useDispatch();
  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        if (statusTab) {
          dispatch(toggleStatusTab());
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [statusTab, dispatch]);

  const calculateSubtotal = () => {
    return carts.reduce((total, item) => {
      const product = products.find(p => p.id === item.productId);
      return product ? total + (product.price * item.quantity) : total;
    }, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingCost = 0;
    return subtotal - discount + shippingCost;
  };

  const applyCoupon = () => {
    const subtotal = calculateSubtotal();
    const code = couponCode.trim().toUpperCase();

    if (code === 'SAVE10') {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  const handleCheckout = () => {
    setCheckoutStep('payment');
  };

  const handlePaymentComplete = () => {
    const order = {
      id: `ORD-${Math.floor(Math.random() * 1000000)}`,
      date: new Date().toISOString(),
      status: 'processing',
      trackingNumber: `TRK-${Math.floor(Math.random() * 10000000000)}`,
      trackingMethod: trackingPreference,
      paymentMethod,
      items: [...carts],
      subtotal: calculateSubtotal(),
      discount,
      total: calculateTotal(),
      couponUsed: couponCode || null
    };
    
    console.log('Order created:', order); // Debug log
    setOrderDetails(order);
    dispatch(clearCart());
    setCheckoutStep('complete');
  };

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
    setCheckoutStep('cart');
  };

  if (!statusTab) return null;

  return (
    <div
      ref={cartRef}
      className="fixed top-0 right-0 bg-white w-96 h-full shadow-xl z-50 p-6 overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Cart</h2>
        <button onClick={handleCloseTabCart} className="text-gray-500 hover:text-gray-700">✕</button>
      </div>

      {checkoutStep === 'cart' && (
        <>
          {carts.length > 0 ? (
            <>
              <div className="space-y-4">
                {carts.map((item) => <CartItem key={item.productId} data={item} />)}
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-1">Coupon Code</label>
                <div className="flex">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
                    placeholder="Enter coupon code"
                  />
                  <button
                    onClick={applyCoupon}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
                  >
                    Apply
                  </button>
                </div>
                {discount > 0 && (
                  <p className="text-green-600 text-sm mt-2">${discount.toFixed(2)} discount applied!</p>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-lg font-medium">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal().toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 text-lg font-medium">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-medium mt-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold mt-4">
                  <span>Total</span>
                  <span className="text-indigo-600">${calculateTotal().toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full mt-6 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 mt-20">
              <p className="text-lg">Your cart is empty 🛒</p>
              <p className="text-sm mt-2">Add items to get started!</p>
            </div>
          )}
        </>
      )}

      {checkoutStep === 'payment' && (
        <Payment
          onPaymentComplete={handlePaymentComplete}
          setPaymentMethod={setPaymentMethod}
          setTrackingPreference={setTrackingPreference}
        />
      )}

      {checkoutStep === 'complete' && orderDetails && (
        <div className="text-center py-8 animate-fade">
          <h3 className="text-2xl font-semibold text-green-600">Thank you for your purchase!</h3>
          <p className="mt-2">Order ID: <span className="font-medium">{orderDetails.id}</span></p>
          <div className="mt-6 text-left">
            <h4 className="font-medium mb-2">Order Details:</h4>
            <p>Payment Method: {orderDetails.paymentMethod === 'credit' ? 'Credit Card' : 'UPI'}</p>
            <p>Shipping Method: {orderDetails.trackingMethod === 'express' ? 'Express' : 'Standard'}</p>
            <p className="mt-2">Tracking Number: {orderDetails.trackingNumber}</p>
          </div>
          <OrderTracking order={orderDetails} />
        </div>
      )}
    </div>
  );
};

export default CartTab;