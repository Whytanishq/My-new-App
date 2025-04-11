// OrderTracking.js
import React from 'react';

const OrderTracking = ({ order }) => {
    const steps = [
        { id: 1, name: 'Order Placed', status: 'completed' },
        { id: 2, name: 'Processing', status: order.status === 'shipped' || order.status === 'delivered' ? 'completed' : 'pending' },
        { id: 3, name: 'Shipped', status: order.status === 'delivered' ? 'completed' : order.status === 'shipped' ? 'active' : 'pending' },
        { id: 4, name: 'Delivered', status: order.status === 'delivered' ? 'active' : 'pending' }
    ];

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Order Tracking</h2>
            <div className="space-y-6">
                {steps.map((step) => (
                    <div key={step.id} className="flex items-start">
                        <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full 
                            ${step.status === 'completed' ? 'bg-green-100 text-green-600' : 
                              step.status === 'active' ? 'bg-blue-100 text-blue-600' : 
                              'bg-gray-100 text-gray-400'}`}>
                            {step.status === 'completed' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <span className="font-medium">{step.id}</span>
                            )}
                        </div>
                        <div className="ml-4">
                            <p className={`font-medium ${step.status === 'completed' ? 'text-green-600' : 
                                          step.status === 'active' ? 'text-blue-600' : 'text-gray-500'}`}>
                                {step.name}
                            </p>
                            {step.id === 3 && order.trackingNumber && (
                                <p className="text-sm text-gray-500 mt-1">
                                    Tracking #: {order.trackingNumber}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderTracking;