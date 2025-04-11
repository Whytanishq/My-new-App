import React, { useState } from 'react';

const Payment = ({ onPaymentComplete, setPaymentMethod, setTrackingPreference }) => {
  const [method, updateMethod] = useState('credit');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');  // Reset error

    // Payment method validation
    if (method === 'credit') {
      // Validate Credit Card
      if (!/^\d{16}$/.test(cardDetails.number)) {
        setError('Invalid card number');
        setLoading(false);
        return;
      }
      if (!/^\d{2}\/\d{2}$/.test(cardDetails.expiry)) {
        setError('Invalid expiry date');
        setLoading(false);
        return;
      }
      if (!/^\d{3}$/.test(cardDetails.cvv)) {
        setError('Invalid CVV');
        setLoading(false);
        return;
      }
    } else if (method === 'upi') {
      // Validate UPI ID
      if (!upiId.includes('@')) {
        setError('Invalid UPI ID');
        setLoading(false);
        return;
      }
    }

    // Set payment method and shipping preference
    setPaymentMethod(method);
    setTrackingPreference('standard');

    // Simulate payment processing delay
    setTimeout(() => {
      onPaymentComplete();  // This will trigger the transition to the thank you page
      setLoading(false);
    }, 2000);
  };

  const handleMethodChange = (e) => {
    const selectedMethod = e.target.value;
    updateMethod(selectedMethod);
    setPaymentMethod(selectedMethod);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 animate-fade">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Method</h2>

      {/* Dropdown for payment method */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Select Payment Method</label>
        <select
          value={method}
          onChange={handleMethodChange}
          className="w-full py-2 px-4 border rounded-lg"
        >
          <option value="credit">Credit Card</option>
          <option value="upi">UPI</option>
        </select>
      </div>

      {/* Credit Card Inputs */}
      {method === 'credit' && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              className="w-full py-2 px-4 border rounded-lg"
              placeholder="1234 5678 9012 3456"
              value={cardDetails.number}
              onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Expiry</label>
              <input
                type="text"
                className="w-full py-2 px-4 border rounded-lg"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">CVV</label>
              <input
                type="text"
                className="w-full py-2 px-4 border rounded-lg"
                placeholder="123"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-3 mt-4 text-white rounded-lg ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
            disabled={loading}
          >
            {loading ? 'Processing Payment...' : 'Complete Payment'}
          </button>
        </form>
      )}

      {/* UPI Payment */}
      {method === 'upi' && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">UPI ID</label>
            <input
              type="text"
              className="w-full py-2 px-4 border rounded-lg"
              placeholder="yourname@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 mt-4 text-white rounded-lg ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
            disabled={loading}
          >
            {loading ? 'Processing Payment...' : 'Complete Payment'}
          </button>
        </form>
      )}

      {/* Display Error Message */}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
};

export default Payment;