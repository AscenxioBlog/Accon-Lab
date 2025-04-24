import React from 'react';

const PaystackButton = ({ amount, email, customerInfo, cart }) => {
  const handlePayment = () => {
    const handler = window.PaystackPop && window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      email,
      amount: amount * 100, // Paystack uses kobo
      currency: 'NGN',
      ref: `ref_${Date.now()}`, // Unique reference
      callback: async function (response) {
        console.log('Payment complete!', response);

        try {
          const res = await fetch('/api/payment/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              reference: response.reference,
              customerInfo,
              products: cart,
              total: amount,
            }),
          });

          const data = await res.json();
          console.log('Payment Verified:', data);

          alert('Payment verified! Order placed successfully.');
          localStorage.removeItem("cart");
          window.location.href = '/order-success'; // Or show a toast
        } catch (err) {
          console.error('Verification error:', err);
          alert('Could not verify payment. Please contact support.');
        }
      },
      onClose: function () {
        alert('Payment popup closed.');
      },
    });

    handler && handler.openIframe();
  };

  return (
    <button
      onClick={handlePayment}
      className='btn uppercase mt-4 w-[60%] font-custom text-[1rem] font-bold text-bodybg bg-textc hover:bg-textc hover:opacity-70'
    >
      Place Order
    </button>
  );
};

export default PaystackButton;
