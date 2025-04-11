import React, { useContext, useState } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { FaCartShopping } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";


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
// import ShopComponent2 from './ShopComponent2';
// import HomeComponent16 from '../HomeComponent/HomeComponent16';


function HomeComponent16({ file = [] }) {
    const { addToCart } = useContext(CartContext);
    const [options, setOptions] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const productsPerPage = 12;

    // Process and sort data
    let allData = [...file];
    
    if (options === 'rating') {
        allData.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
    } else if (options === 'highest price') {
        allData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (options === 'lowest price') {
        allData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }

    // Pagination logic
    const totalPages = Math.ceil(allData.length / productsPerPage);
    const lastIndex = Math.min(currentPage * productsPerPage, allData.length);
    const firstIndex = lastIndex - productsPerPage;
    const currentProducts = allData.slice(firstIndex, lastIndex);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleAddToCart = (item) => {
        addToCart(item, (addedItem) => {
            setAlertMessage(`${addedItem.id} has been added to your cart!`);
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
        });
    };



    const data = [
            {
                id: 'Glucose monitoring',
                price: '46.00',
                rating: '4',
                image: glucose,
                sku: 'PROD001'
            },
            {
                id: 'Single hand gloves',
                price: '58.10',
                rating: '4',
                image: gloves,
                sku: 'PROD002'
            },
            {
                id: 'Pharmaceutical plants',
                price: '88.00',
                rating: '3',
                image: plant,
                sku: 'PROD003'
            },
            {
                id: 'Sethoscope superb',
                price: '96.00',
                rating: '4',
                image: sethoscope,
                sku: 'PROD004'
            },
            {
                id: 'Sphygmomanometer ECO',
                price: '69.00',
                rating: '4',
                image: sphygmomanometer,
                sku: 'PROD005'
            },
            {
                id: 'Sphygmomanometer LEO',
                price: '70.00',
                rating: '3',
                image: sphygmomanometer2,
                sku: 'PROD006'
            },
            {
                id: 'Hand gloves',
                price: '52.00',
                rating: '4',
                image: handgloves,
                sku: 'PROD007'
            },
            {
                id: 'Sphygmomanometer',
                price: '66.00',
                rating: '4',
                image: sphygmomanometer3,
                sku: 'PROD008'
            },
            {
                id: 'Digital thermometer',
                price: '70.00',
                rating: '4',
                image: digital,
                sku: 'PROD009'
            },
            {
                id: 'Glucometer',
                price: '85.00',
                rating: '4',
                image: glucometer,
                sku: 'PROD010'
            },
            {
                id: 'Oxygen breathing machine',
                price: '85.00',
                rating: '4',
                image: oxygen,
                sku: 'PROD011'
            },
            {
                id: 'Surgical latex glove',
                price: '90.00',
                rating: '4',
                image: surgical,
                sku: 'PROD012'
            }
        ];

    return (
        <div className="min-h-[600px] w-full bg-purple-50 py-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-purple-800 mb-8">
                MARKET PLACE
            </h1>

            {/* Success Alert */}
            {showAlert && (
                <div className="alert alert-success fixed top-20 right-4 flex items-center space-x-2 p-3 bg-green-500 text-white rounded-md shadow-lg z-50 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{alertMessage}</span>
                </div>
            )}

            {/* Controls */}
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="text-gray-700 mb-4 md:mb-0">
                    Showing {firstIndex + 1}-{lastIndex} of {file.length} products
                </div>
                <div className="flex items-center">
                    <span className="text-gray-700 mr-2">Sort by:</span>
                    <select
                        className="select select-bordered bg-white text-gray-800 font-medium"
                        value={options}
                        onChange={(e) => {
                            setOptions(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        <option value="new">New Arrivals</option>
                        <option value="rating">Highest Rating</option>
                        <option value="lowest price">Lowest Price</option>
                        <option value="highest price">Highest Price</option>
                    </select>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4 p-[20px] lg:p-[30px] md:p-[15px]">
                            {data.map((item, index) => (
                                <div key={index} className="card bg-base-100 w-90 shadow-xl group">
                                    <figure className="px-5 pt-10">
                                        <img
                                            src={item.image}
                                            alt={item.id}
                                            className="relative group-hover:scale-110 transition-transform duration-300 ease-in-out"
                                        />
                                    </figure>
                                    <div  className="flex invisible group-hover:visible transition-transform duration-[10s] ease-in-out justify-center gap-3 absolute left-[30%] bottom-[25%] group-hover:bottom-[35%]">
                                        <div
                                            role='alert'
                                            className="h-[30px] w-[30px] flex items-center justify-center rounded-[50%] cursor-pointer group-hover:bg-textc"
                                            onClick={() => {handleAddToCart(item)}}
                                        >
                                            <FaCartShopping className="text-[1.4rem] text-white rounded-xl hover:bg-boldtext" />
                                        </div>
                                        <div className="h-[30px] w-[30px] flex items-center justify-center rounded-[50%] group-hover:bg-textc cursor-pointer">
                                            <FaEye className="text-[1.4rem] text-white rounded-xl hover:bg-boldtext" />
                                        </div>
                                        <div className="h-[30px] w-[30px] flex items-center justify-center rounded-[50%] group-hover:bg-textc cursor-pointer">
                                            <MdFavoriteBorder 
                                            className="text-[1.4rem] text-white rounded-xl hover:bg-boldtext" />
                                        </div>
                                    </div>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title uppercase">{item.id}</h2>
                                        <div className='rating'>
                                            {Array.from({length:5}).map((_,i)=>(
                                                <input
                                                    key={i}
                                                    type='radio'
                                                    name={`rating-${item.id}`}
                                                    className={`mask mask-star-2 ${i < parseInt(item.rating || 0) ? 'bg-orange-400' : 'bg-orange-300'}`}
                                                    checked={i < parseInt(item.rating || 0)} 
                                                    readOnly
                                                />
                                            ))}
            
                                        </div>
                                        <h2>${item.price}</h2>
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
                            «
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                className={`join-item btn ${page === currentPage ? 'btn-active' : ''}`}
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
                            »
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeComponent16;