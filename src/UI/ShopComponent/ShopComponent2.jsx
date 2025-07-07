import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { Link, useSearchParams } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaEye, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TbCurrencyNaira } from 'react-icons/tb';
import ProductSkeleton from '../../ReusableComponent/ProductSkeleton';
import API_URL from '../../Config';
// import { FaSearch, FaShoppingCart, FaHeart, FaEye, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function ShopComponent2({ data = [] }) {
    let [productData, setProductData] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [options, setOptions] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [showFilters, setShowFilters] = useState(false);
    
    const productsPerPage = 8;
    const categories = ['All', ...new Set(productData.map(product => product.category))];

    // Filter and sort products
    const filteredProducts = productData
        .filter(product => {
            const matchesSearch = !searchTerm || product.productName?.toLowerCase().includes(searchTerm?.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            
            console.log('Product:', product.productName, 'Price:', product.price, 'Category:', product.category);
            console.log('Matches - Search:', matchesSearch, 'Category:', matchesCategory, 'Price:', matchesPrice);
            
            return matchesSearch && matchesCategory && matchesPrice;
        })
        .sort((a, b) => {
            switch(options) {
                case 'rating': return (b.rating || 0) - (a.rating || 0);
                case 'highest price': return b.price - a.price;
                case 'lowest price': return a.price - b.price;
                default: return a.isNew ? -1 : 10;
            }
        });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const lastIndex = Math.min(currentPage * productsPerPage, filteredProducts.length);
    const firstIndex = lastIndex - productsPerPage;
    const currentProducts = filteredProducts.slice(firstIndex, lastIndex);
    
    // Debug logging
    console.log('Total products:', productData.length);
    console.log('Filtered products:', filteredProducts.length);
    console.log('Products per page:', productsPerPage);
    console.log('Total pages:', totalPages);
    console.log('Current products:', currentProducts.length);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/product`, {
                    method: "GET",
                    credentials: "include",
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const data = await response.json();
                console.log(data);
                setProductData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error.message);
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    useEffect(() => {
        if (productData.length > 0) {
            setLoading(false);
        }
    }, [productData]);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleAddToCart = (item) => {
        addToCart(item, (addedItem) => {
            setAlertMessage(`${addedItem.productName} added to cart!`);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        });
    };

    

    return (
        <div className="min-h-screen bg-gray-50 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Medical Equipment Store
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Quality healthcare products at your fingertips
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>

                {/* Alert Notification */}
                {showAlert && (
                    <div className="fixed top-20 right-4 z-[9999] transition-all duration-300 ease-in-out">
                        <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl flex items-center space-x-2 animate-pulse">
                            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-medium">{alertMessage}</span>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-between"
                        >
                            <span>Filters</span>
                            <svg className={`w-5 h-5 transform ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Sidebar Filters */}
                    <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
                            
                            {/* Category Filter */}
                            <div className="mb-6">
                                <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
                                <div className="space-y-2">
                                    {categories.map(category => (
                                        <label key={category} className="flex items-center">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category}
                                                checked={selectedCategory === category}
                                                onChange={(e) => {
                                                    setSelectedCategory(e.target.value);
                                                    setCurrentPage(1);
                                                }}
                                                className="mr-2 text-blue-600"
                                            />
                                            <span className="text-sm text-gray-600">{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="mb-6">
                                <h4 className="text-sm font-medium text-gray-700 mb-3">Price Range</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="number"
                                            placeholder="Min"
                                            value={priceRange[0]}
                                            onChange={(e) => setPriceRange([Number(e.target.value) || 0, priceRange[1]])}
                                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                                        />
                                        <span className="text-gray-500">-</span>
                                        <input
                                            type="number"
                                            placeholder="Max"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value) || 10000])}
                                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Sort Filter */}
                            <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-3">Sort By</h4>
                                <select
                                    value={options}
                                    onChange={(e) => {
                                        setOptions(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
                                >
                                    <option value="new">New Arrivals</option>
                                    <option value="rating">Top Rated</option>
                                    <option value="highest price">Price: High to Low</option>
                                    <option value="lowest price">Price: Low to High</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Products Section */}
                    <div className="flex-1">
                        {/* Results Header */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600">
                                Showing {firstIndex + 1}-{lastIndex} of {filteredProducts.length} products
                            </p>
                        </div>

                        {/* Loading State */}
                        {loading ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {Array.from({ length: productsPerPage }).map((_, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
                                        <div className="h-40 bg-gray-200"></div>
                                        <div className="p-3">
                                            <div className="h-3 bg-gray-200 rounded mb-2"></div>
                                            <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                {/* Products Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                    {currentProducts.map((item) => (
                                        <div key={item._id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                                            <Link to={`/singleproduct/${item._id}`}>
                                                <div className="relative overflow-hidden">
                                                    <img 
                                                        src={item.image} 
                                                        alt={item.productName} 
                                                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                    {item.status && (
                                                        <div className="absolute top-2 left-2 bg-textc text-white text-xs font-bold px-2 py-1 rounded">
                                                            NEW
                                                        </div>
                                                    )}
                                                    {item.oldPrice > item.price && (
                                                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                            SALE
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>
                                            
                                            <div className="p-3">
                                                <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2 h-10">
                                                    {item.productName}
                                                </h3>
                                                <div className="flex items-center mb-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar 
                                                            key={i}
                                                            className={`text-xs ${i < (item.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                    <span className="text-xs text-gray-500 ml-1">({item.rating || 0})</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <div className="flex items-center font-bold text-textc">
                                                            <TbCurrencyNaira className="w-4 h-4" />
                                                            <span>{item.price.toFixed(2)}</span>
                                                        </div>
                                                        {item.oldPrice > item.price && (
                                                            <div className="flex items-center text-xs text-gray-400 line-through">
                                                                <TbCurrencyNaira className="w-3 h-3" />
                                                                <span>{item.oldPrice.toFixed(2)}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <button 
                                                        className="bg-textc hover:bg-blue-700 text-white px-2 py-1 rounded text-xs font-medium transition-colors duration-200"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleAddToCart(item);
                                                        }}
                                                    >
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {filteredProducts.length > 0 && (
                                    <div className="text-center mt-4 text-sm text-gray-600">
                                        Total Products: {filteredProducts.length} | Pages: {totalPages}
                                    </div>
                                )}
                                {totalPages > 1 && (
                                    <div className="flex justify-center mt-8">
                                        <div className="flex items-center space-x-2">
                                            <button 
                                                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                            >
                                                <FaChevronLeft className="w-4 h-4" />
                                            </button>
                                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                                const page = i + Math.max(1, currentPage - 2);
                                                return page <= totalPages ? (
                                                    <button
                                                        key={page}
                                                        className={`px-3 py-2 border rounded-lg text-black ${
                                                            currentPage === page 
                                                                ? 'bg-textc text-white border-blue-600' 
                                                                : 'border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                        onClick={() => handlePageChange(page)}
                                                    >
                                                        {page}
                                                    </button>
                                                ) : null;
                                            })}
                                            <button 
                                                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                            >
                                                <FaChevronRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopComponent2;
