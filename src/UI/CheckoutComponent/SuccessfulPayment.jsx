import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function SuccessfulPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { order, paymentId } = location.state || {};

  if (!order) {
    return (
      <div className="max-w-md mx-auto mt-[120px] p-6 bg-yellow-50 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-yellow-600">No Order Found</h2>
        <p className="mt-2 text-yellow-500">
          We couldn't find any order details. 
          <button 
            onClick={() => navigate('/')}
            className="ml-2 text-blue-600 hover:underline"
          >
            Return to home
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Success Header */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <CheckCircleIcon className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
        <p className="text-lg text-gray-600">Thank you for your purchase.</p>
        <p className="text-sm text-gray-500 mt-2">Payment Reference: {paymentId}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Paid
              </span>
            </div>
            <div className="flex justify-between border-t pt-3">
              <span className="text-gray-600 font-medium">Total:</span>
              <span className="font-bold text-lg">₦{order.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Customer Information</h2>
          <div className="space-y-2">
            <p className="font-medium">{order.billingDetails.firstname} {order.billingDetails.lastname}</p>
            <p>{order.billingDetails.email}</p>
            <p>{order.billingDetails.phone}</p>
          </div>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Shipping Information</h2>
        <div className="space-y-2">
          <p>{order.billingDetails.address}</p>
          {order.billingDetails.apartment && <p>{order.billingDetails.apartment}</p>}
          <p>{order.billingDetails.city}, {order.billingDetails.state}</p>
        </div>
      </div>

      {/* Order Items */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Order Items</h2>
        <div className="divide-y">
          {order.items.map((item, index) => (
            <div key={index} className="py-4 flex">
              <div className="ml-4 flex-grow">
                <h3 className="font-medium text-gray-800">{item.name || `Product ${index + 1}`}</h3>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">₦{item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">₦{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={() => window.print()} 
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          Print Receipt
        </button>
        <button 
          onClick={() => navigate('/')} 
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default SuccessfulPayment;