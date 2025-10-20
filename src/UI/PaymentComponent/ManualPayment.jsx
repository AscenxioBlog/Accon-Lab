import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import API_URL from '../../Config';

function ManualPayment() {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderData } = location.state || {};
    
    const [paymentProof, setPaymentProof] = useState(null);
    const [transactionRef, setTransactionRef] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Admin account details
    const adminAccount = {
        bankName: "Zenith bank plc",
        accountName: "Acconlab Technologies and Scientific Solutions Nigeria Limited",
        accountNumber: "1310159565"
    };

    useEffect(() => {
        if (!orderData) {
            navigate('/checkout');
        }
    }, [orderData, navigate]);

    const copyAccountNumber = () => {
        navigator.clipboard.writeText(adminAccount.accountNumber);
        alert('Account number copied!');
    };

    const handleFileUpload = (e) => {
        setPaymentProof(e.target.files[0]);
    };

    const handlePaymentConfirmation = async () => {
        if (!paymentProof) {
            alert('Please upload proof of payment');
            return;
        }
        setIsSubmitting(true);
        
        const formData = new FormData();
        formData.append('orderId', orderData._id);
        formData.append('paymentProof', paymentProof);
        formData.append('transactionRef', transactionRef);

        console.log(formData)


        try {
            const response = await fetch(`${API_URL}/order/confirm-payment`, {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });

            if (response.ok) {
                alert('Payment confirmation submitted! Your order is now pending verification.');
                localStorage.removeItem('cart');
                navigate('/');
            } else {
                alert('Failed to submit payment confirmation');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting payment confirmation');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!orderData) return null;

    return (
        <div className="min-h-screen bg-bodybg p-4 font-custom ">
            <div className="max-w-4xl mx-auto mt-[150px]">
                <h1 className="text-2xl font-bold text-boldtext mb-6 text-center">Complete Your Payment</h1>
                
                {/* Order Summary */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-black">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <div className="border-b pb-2 mb-4">
                        <p><span className="font-semibold">Order ID:</span> {orderData._id}</p>
                        <p><span className="font-semibold">Total Amount:</span> ₦{orderData.totalAmount.toFixed(2)}</p>
                    </div>
                    <div className="space-y-2">
                        {orderData.cart.map((item, index) => (
                            <div key={index} className="flex justify-between">
                                <span>{item.productName} x {item.quantity}</span>
                                <span>₦{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Payment Instructions</h3>
                    <p className="text-blue-700 mb-4">
                        Kindly transfer the total amount to the account below. After payment, click "I've Paid" and upload proof of payment.
                    </p>
                </div>

                {/* Admin Account Details */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-black">
                    <h3 className="text-lg font-semibold mb-4">Bank Account Details</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span className="font-medium">Bank Name:</span>
                            <span>{adminAccount.bankName}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span className="font-medium">Account Name:</span>
                            <span>{adminAccount.accountName}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span className="font-medium">Account Number:</span>
                            <div className="flex items-center gap-2">
                                <span className="font-mono text-lg">{adminAccount.accountNumber}</span>
                                <button
                                    onClick={copyAccountNumber}
                                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                                >
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Proof of Payment */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-black">
                    <h3 className="text-lg font-semibold mb-4">Upload Proof of Payment</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block font-medium mb-2">Payment Receipt/Screenshot *</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Transaction Reference (Optional)</label>
                            <input
                                type="text"
                                value={transactionRef}
                                onChange={(e) => setTransactionRef(e.target.value)}
                                placeholder="Enter transaction reference"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                </div>

                {/* Confirmation Button */}
                <div className="text-center">
                    <button
                        onClick={handlePaymentConfirmation}
                        disabled={isSubmitting || !paymentProof}
                        className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'I Have Paid'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ManualPayment;