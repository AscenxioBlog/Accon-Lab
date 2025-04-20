import React from 'react';
import { FaBoxOpen, FaDollarSign, FaUsers, FaChartLine, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

function Dashboard() {
  // Mock data - replace with real API calls
  const metrics = [
    { title: "Total Products", value: "142", icon: <FaBoxOpen className="text-3xl" />, trend: "12% increase", color: "bg-blue-100 text-blue-600" },
    { title: "Monthly Revenue", value: "$24,580", icon: <FaDollarSign className="text-3xl" />, trend: "8% increase", color: "bg-green-100 text-green-600" },
    { title: "Active Customers", value: "1,248", icon: <FaUsers className="text-3xl" />, trend: "5% increase", color: "bg-purple-100 text-purple-600" },
    { title: "Pending Orders", value: "36", icon: <FaClipboardList className="text-3xl" />, trend: "3 awaiting shipment", color: "bg-orange-100 text-orange-600" }
  ];

  const recentOrders = [
    { id: "ORD-7891", product: "Glucose Monitor", customer: "Dr. Smith Clinic", date: "2023-06-15", status: "Shipped" },
    { id: "ORD-7890", product: "Sterile Gloves", customer: "City Hospital", date: "2023-06-14", status: "Processing" },
    { id: "ORD-7889", product: "Digital Thermometer", customer: "MediLab Inc.", date: "2023-06-14", status: "Delivered" },
    { id: "ORD-7888", product: "Sphygmomanometer", customer: "HealthPlus", date: "2023-06-13", status: "Shipped" }
  ];

  const lowStockItems = [
    { name: "Pharmaceutical Plants", stock: 8, threshold: 10 },
    { name: "Advanced Sphygmomanometer", stock: 5, threshold: 15 },
    { name: "Lab Test Tubes", stock: 12, threshold: 20 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Laboratory Dashboard</h1>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                  <p className="text-2xl font-bold mt-2">{metric.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{metric.trend}</p>
                </div>
                <div className={`p-3 rounded-full ${metric.color}`}>
                  {metric.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Monthly Sales</h2>
              <div className="flex items-center text-sm text-gray-500">
                <FaCalendarAlt className="mr-2" />
                Last 6 Months
              </div>
            </div>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              {/* Replace with actual chart component */}
              <p className="text-gray-500">Sales Chart Visualization</p>
            </div>
          </div>

          {/* Low Stock Alerts */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Low Stock Alerts</h2>
            <div className="space-y-4">
              {lowStockItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Threshold: {item.threshold}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.stock < 5 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.stock} remaining
                  </span>
                </div>
              ))}
              <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center justify-center">
                View all low stock items <FaChartLine className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              View All Orders <FaClipboardList className="ml-2" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;