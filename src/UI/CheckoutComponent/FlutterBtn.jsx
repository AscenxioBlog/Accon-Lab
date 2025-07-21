import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import API_URL from '../../Config';
import { useNavigate } from 'react-router-dom';

const FlutterBtn = ({ amount, email, customerInfo, cart }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const publicKey = import.meta.env.VITE_FLW_PUBLIC_KEY;

    FlutterwaveCheckout({
      public_key: publicKey,
      tx_ref: `tx-${Date.now()}`,
      amount,
      currency: 'NGN',
      payment_options: 'card,banktransfer,ussd',
      customer: {
        email,
        name: `${customerInfo.firstname} ${customerInfo.lastname}`,
        phone_number: customerInfo.phone || '08000000000',
      },
      callback: function (response) {
        handlePaymentSuccess(response);
      },
      onclose: function () {
        alert('Payment popup closed.');
      },
      customizations: {
        title: "Lab Equipment Store",
        description: "Payment for lab equipment",
        logo: "/logo.png",
      },
    });
  };

  const handlePaymentSuccess = async (response) => {
    setLoading(true);

    try {
      const verifyRes = await fetch(`${API_URL}/api/payment/verify-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transaction_id: response.transaction_id, // Flutterwave's ID
          customerInfo,
          products: cart,
          total: amount,
        }),
        credentials: 'include'
      });

      const verifyData = await verifyRes.json();

      if (verifyRes.ok) {
        const orderData = {
          billingDetails: {
            firstname: customerInfo.firstname,
            lastname: customerInfo.lastname,
            email: customerInfo.email
          },
          items: cart.map(item => ({
            product: item._id,
            quantity: item.quantity,
            price: item.price,
            image: item.productImage,
            productName: item.productName,
          })),
          shippingAddress: {
            address: customerInfo.address,
            city: customerInfo.city,
            state: customerInfo.state
          },
          totalAmount: amount,
          paymentReference: response.transaction_id,
          status: 'paid'
        };

        const placeOrderRes = await fetch(`${API_URL}/order/placeorder`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
          credentials: 'include',
        });

        const orderResult = await placeOrderRes.json();
        console.log('Order placed successfully:', orderResult);

        alert('Payment and Order successful!');
        localStorage.removeItem('cart');

        navigate('/order-success', {
          state: {
            order: orderData,
            paymentId: response.transaction_id,
          },
        });
      } else {
        alert('Payment verification failed.');
      }
    } catch (err) {
      console.error('Error during payment/order:', err);
      alert('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePayment}
      className={`btn uppercase mt-4 w-[60%] font-custom text-[1rem] font-bold text-bodybg bg-textc hover:bg-textc hover:opacity-70 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={loading}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <ClipLoader size={20} color="#ffffff" />
          Processing...
        </div>
      ) : (
        'Place Order'
      )}
    </button>
  );
};

export default FlutterBtn;
