import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaEye, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import glucose from '../ShopComponent/ShopPictures/glucose.jpg';
import gloves from '../ShopComponent/ShopPictures/gloves.jpg';
import plant from '../ShopComponent/ShopPictures/plant.jpg';
import digital from '../ShopComponent/ShopPictures/shop4.jpg';
import sethoscope from '../ShopComponent/ShopPictures/shop5.jpg';
import sphygmomanometer from '../ShopComponent/ShopPictures/shop6.jpg';
import sphygmomanometer2 from '../ShopComponent/ShopPictures/shop7.jpg';
import handgloves from '../ShopComponent/ShopPictures/shop8.jpg';
import sphygmomanometer3 from '../ShopComponent/ShopPictures/shop9.jpg';
import glucometer from '../ShopComponent/ShopPictures/shop10.jpg';
import oxygen from '../ShopComponent/ShopPictures/shop11.jpg';
import surgical from '../ShopComponent/ShopPictures/shop12.jpg';

function ShopComponent2({ data = [] }) {
    const productData = [
        { id: 'Glucose Monitor', price: 46.00, originalPrice: 55.00, rating: 4, image: glucose, sku: 'PROD001', category: 'Medical', isNew: true },
        { id: 'Examination Gloves', price: 58.10, originalPrice: 65.00, rating: 4, image: gloves, sku: 'PROD002', category: 'Medical', isNew: false },
        { id: 'Pharmaceutical Plants', price: 88.00, originalPrice: 100.00, rating: 3, image: plant, sku: 'PROD003', category: 'Equipment', isNew: true },
        { id: 'Premium Stethoscope', price: 96.00, originalPrice: 120.00, rating: 4, image: sethoscope, sku: 'PROD004', category: 'Medical', isNew: false },
        { id: 'Digital Sphygmomanometer', price: 69.00, originalPrice: 85.00, rating: 4, image: sphygmomanometer, sku: 'PROD005', category: 'Medical', isNew: true },
        { id: 'Professional Sphygmomanometer', price: 70.00, originalPrice: 80.00, rating: 3, image: sphygmomanometer2, sku: 'PROD006', category: 'Medical', isNew: false },
        { id: 'Sterile Hand Gloves', price: 52.00, originalPrice: 60.00, rating: 4, image: handgloves, sku: 'PROD007', category: 'Medical', isNew: true },
        { id: 'Advanced Sphygmomanometer', price: 66.00, originalPrice: 75.00, rating: 4, image: sphygmomanometer3, sku: 'PROD008', category: 'Medical', isNew: false },

        { id: 'Glucose Monitor', price: 46.00, originalPrice: 55.00, rating: 4, image: glucose, sku: 'PROD001', category: 'Medical', isNew: true },
        { id: 'Examination Gloves', price: 58.10, originalPrice: 65.00, rating: 4, image: gloves, sku: 'PROD002', category: 'Medical', isNew: false },
        { id: 'Pharmaceutical Plants', price: 88.00, originalPrice: 100.00, rating: 3, image: plant, sku: 'PROD003', category: 'Equipment', isNew: true },
        { id: 'Premium Stethoscope', price: 96.00, originalPrice: 120.00, rating: 4, image: sethoscope, sku: 'PROD004', category: 'Medical', isNew: false },
        { id: 'Digital Sphygmomanometer', price: 69.00, originalPrice: 85.00, rating: 4, image: sphygmomanometer, sku: 'PROD005', category: 'Medical', isNew: true },
        { id: 'Professional Sphygmomanometer', price: 70.00, originalPrice: 80.00, rating: 3, image: sphygmomanometer2, sku: 'PROD006', category: 'Medical', isNew: false },
        { id: 'Sterile Hand Gloves', price: 52.00, originalPrice: 60.00, rating: 4, image: handgloves, sku: 'PROD007', category: 'Medical', isNew: true },
        { id: 'Advanced Sphygmomanometer', price: 66.00, originalPrice: 75.00, rating: 4, image: sphygmomanometer3, sku: 'PROD008', category: 'Medical', isNew: false },
    ];

    const { addToCart } = useContext(CartContext);
    const [options, setOptions] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const productsPerPage = 10;
    const categories = ['All', ...new Set(productData.map(product => product.category))];

    // Filter and sort products
    const filteredProducts = productData
        .filter(product => 
            product.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === 'All' || product.category === selectedCategory)
        )
        .sort((a, b) => {
            switch(options) {
                case 'rating': return (b.rating || 0) - (a.rating || 0);
                case 'highest price': return b.price - a.price;
                case 'lowest price': return a.price - b.price;
                default: return a.isNew ? -1 : 1; // Newest first
            }
        });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const lastIndex = Math.min(currentPage * productsPerPage, filteredProducts.length);
    const firstIndex = lastIndex - productsPerPage;
    const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timeout);
    }, [options, currentPage, searchTerm, selectedCategory]);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleAddToCart = (item) => {
        addToCart(item, (addedItem) => {
            setAlertMessage(`${addedItem.id} added to cart!`);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        });
    };

    

    return (
<div className="min-h-[550px] w-full bg-[url(assets/Frame2.png)]  from-purple-50 to-white py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-purple-800">
                        Medical Marketplace
                    </h1>
                    <p className="mt-2 text-purple-600">
                        Quality healthcare products at your fingertips
                    </p>
                </div>

                {/* Search and Filter Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                    
                    <div className="flex gap-2">
                        <select
                            className="select select-bordered bg-white"
                            value={selectedCategory}
                            onChange={(e) => {
                                setSelectedCategory(e.target.value);
                                setCurrentPage(1);
                            }}
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                        
                        <select
                            className="select select-bordered bg-white"
                            value={options}
                            onChange={(e) => {
                                setOptions(e.target.value);
                                setCurrentPage(1);
                            }}
                        >
                            <option value="new">New Arrivals</option>
                            <option value="rating">Top Rated</option>
                            <option value="highest price">Price: High to Low</option>
                            <option value="lowest price">Price: Low to High</option>
                        </select>
                    </div>
                </div>

                {/* Alert Notification */}
                {showAlert && (
                    <div className="fixed top-20 right-4 z-50 animate-fade-in">
                        <div className="alert alert-success shadow-lg text-white bg-green-500">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{alertMessage}</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Loading Spinner */}
                {loading ? (
                    <div className="flex justify-center items-center min-h-[300px]">
                        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <>
                        {/* Products Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                            {currentProducts.map((item) => (
                                <div key={`${item.sku}-${currentPage}`} className="card bg-white shadow-md hover:shadow-xl transition-shadow group">
                                    {/* Product Image with Badges */}
                                    <figure className="relative pt-[80%] overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={item.id} 
                                            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        {item.isNew && (
                                            <div className="absolute top-2 left-2 bg-textc text-white text-xs font-bold px-2 py-1 rounded">
                                                NEW
                                            </div>
                                        )}
                                        {item.originalPrice > item.price && (
                                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                SALE
                                            </div>
                                        )}
                                        {/* Quick Actions */}
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                                            <button 
                                                className="btn btn-circle btn-sm bg-white text-textc hover:bg-textc hover:text-white"
                                                onClick={() => handleAddToCart(item)}
                                            >
                                                <FaShoppingCart />
                                            </button>
                                            <button className="btn btn-circle btn-sm bg-white text-textc hover:bg-textc hover:text-white">
                                                <FaHeart />
                                            </button>
                                            <Link to={`/product/${item.sku}`} className="btn btn-circle btn-sm bg-white text-textc hover:bg-textc hover:text-white">
                                                <FaEye />
                                            </Link>
                                        </div>
                                    </figure>

                                    {/* Product Info */}
                                    <div className="card-body p-4">
                                        <h3 className="card-title text-sm md:text-base font-semibold line-clamp-2 min-h-[3em]">
                                            {item.id}
                                        </h3>
                                        <div className="flex items-center mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar 
                                                    key={i}
                                                    className={`text-sm ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                />
                                            ))}
                                            <span className="text-xs text-gray-500 ml-1">({item.rating})</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="font-bold text-textc">${item.price.toFixed(2)}</span>
                                                {item.originalPrice > item.price && (
                                                    <span className="text-xs text-gray-400 line-through ml-2">${item.originalPrice.toFixed(2)}</span>
                                                )}
                                            </div>
                                            <button 
                                                className="btn btn-sm bg-textc hover:bg-textc border-none text-white"
                                                onClick={() => handleAddToCart(item)}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-10">
                                <div className="join">
                                    <button 
                                        className="join-item btn" 
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            className={`join-item btn ${currentPage === page ? 'btn-active' : ''}`}
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button 
                                        className="join-item btn" 
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        <FaChevronRight />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* View All Button */}
                        {/* <div className="flex justify-center mt-8">
                            <Link to="/shop" className="btn btn-wide bg-textc hover:bg-purple-700 text-white">
                                View All Products
                            </Link>
                        </div> */}
                    </>
                )}
            </div>
        </div>
    );
}

export default ShopComponent2;
