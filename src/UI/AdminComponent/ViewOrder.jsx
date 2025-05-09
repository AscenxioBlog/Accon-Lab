import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaCalendarAlt, FaUser, FaMoneyBillWave } from 'react-icons/fa';
import API_URL from '../../Config';
import { Link } from 'react-router-dom';

function ViewOrder() {
  // Sample order data - replace with your actual data
  // const orders = [
  //   {
  //     id: 'ORD-001',
  //     date: '2023-06-15',
  //     customer: 'Dr. Smith Clinic',
  //     items: [
  //       { name: 'Glucose Monitor', price: 46.00, quantity: 2 },
  //       { name: 'Sterile Gloves', price: 52.00, quantity: 5 }
  //     ],
  //     status: 'Completed'
  //   },
  //   {
  //     id: 'ORD-002',
  //     date: '2023-06-14',
  //     customer: 'City Hospital',
  //     items: [
  //       { name: 'Digital Thermometer', price: 69.00, quantity: 3 },
  //       { name: 'Sphygmomanometer', price: 66.00, quantity: 1 }
  //     ],
  //     status: 'Shipped'
  //   },
  //   {
  //     id: 'ORD-003',
  //     date: '2023-06-13',
  //     customer: 'MediLab Inc.',
  //     items: [
  //       { name: 'Pharmaceutical Plants', price: 88.00, quantity: 1 },
  //       { name: 'Examination Gloves', price: 58.10, quantity: 10 }
  //     ],
  //     status: 'Processing'
  //   }
  // ];

  const [order,setOrders]=useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
 
  useEffect(() => {
     const fetchOrders = async () => {
       setLoading(true);
       try {
        //  const res = await fetch(`http://localhost:3600/order`, {
         const res = await fetch(`${API_URL}/order`, {
           method: 'GET',
           credentials: 'include', // 💥 this is important so that cookies go along
         });
 
         if (!res.ok) {
           throw new Error('Failed to fetch orders');
         }
 
         const data = await res.json();
         console.log(data); // Check the structure of the response
         setOrders(data); // assuming your backend sends { orders: [...] }
       } catch (err) {
         console.error(err);
         setError('Failed to load your orders.');
       } finally {
         setLoading(false);
       }
     };
 
     fetchOrders();
   }, []);
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-[url(assets/Frame2.png)] p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Recent Orders</h1>
        
        <div className="space-y-4">
          { order.length > 0 ? order.map((order) => {
            const total = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            return (
              <div key={order.id} className=" rounded-lg shadow-md overflow-hidden border-l-4 border-textc">
                <div className="p-4">
                  {/* Order Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="font-bold text-lg text-black">Order #{order._id}</h2>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <FaCalendarAlt className="mr-1" />
                        <span>{order.dateOrdered}</span>
                      </div>
                    </div>
                    {/* <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span> */}
                  </div>
                  
                  {/* Customer Info */}
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <FaUser className="mr-1" />
                    <span>{order.user.firstName} {order.user.lastName}</span>
                  </div>
                  
                  {/* Order Items */}
                  <div className="border-t border-gray-200 pt-3">
                    <h3 className="font-medium mb-2 flex items-center text-black">
                      <FaShoppingCart className="mr-2" />
                      Ordered Items
                    </h3>
                    <ul className="space-y-2">
                      {order.items.map((item, index) => (
                        <li key={index} className="flex justify-between text-sm text-gray-500">
                          <span>
                            {item.product.productName} × {item.quantity}
                          </span>
                          <span>#{(item.product.price * item.quantity).toFixed(2)}</span>
                        </li>
                        
                      ))}
                    </ul>
                  </div>
                  
                  {/* Order Total */}
                  <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-medium text-blue-600">
                    <span className="flex items-center">
                      <FaMoneyBillWave className="mr-2" />
                      Total
                    </span>
                    <span>${order.totalAmount}</span>
                  </div>
                </div>
                 <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                        <Link to={`/order/${order._id}`}>
                          View Details
                        </Link>
                      </button>
              </div>
            );
          }): <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;