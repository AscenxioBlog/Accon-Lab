import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { FaCartShopping } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';

function ShopComponent2({ data = [] }) {
    const { addToCart } = useContext(CartContext);
    let allData = [...data];
    const [options, setOptions] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const [showAlert, setShowAlert] = useState(false); // State to handle alert visibility
    const [alertMessage, setAlertMessage] = useState(''); 
    const [loading, setLoading] = useState(false);

    if (options === 'rating') {
        allData.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
    } else if (options === 'highest price') {
        allData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (options === 'lowest price') {
        allData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }

    const totalPages = Math.ceil(allData.length / productsPerPage);
    const lastIndex = Math.min(currentPage * productsPerPage, allData.length);
    const firstIndex = lastIndex - productsPerPage;
    const totalRecords = allData.slice(firstIndex, lastIndex);

     useEffect(() => {
            setLoading(true);
            const timeout = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }, [options, currentPage]);
    

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const handleAddToCart = (item) => {
        addToCart(item, (addedItem) => {
            setAlertMessage(`${addedItem.id} has been added to the cart!`);
            setShowAlert(true);
    
            // Hide the alert after 3 seconds
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        });
    };

    
    

    return (
        <div>
             {showAlert && (
                <div
                    role="alert"
                    className="alert alert-success fixed top-[50px] right-4 flex items-center space-x-2 p-3 bg-green-500 text-white rounded-md shadow-lg z-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{alertMessage}</span>
                </div>
            )}
            <div className="md:flex p-[20px] md:p-[30px] items-center justify-between space-y-4">
                <div className='dark:text-black'>
                    <h1>Showing {firstIndex + 1}-{lastIndex} of {data.length}</h1>
                </div>

                <form action="" className=' h-[50px] md:w-[50%] rounded-[20px] w-full bg-textc flex items-center'>
                    <input type="text" className=' h-[50px] w-[90%] outline-none rounded-l-[20px]' placeholder=' Search what you want here' />
                    <input type="submit" value='search' className=' text-center font-bold text-white' />
                </form>

                <div>
                    <span className='dark:text-black'>Sort by:</span>
                    <select
                        className="max-w-36 select bg-bodybg text-boldtext font-custom font-bold text-[1rem]"
                        value={options}
                        onChange={(e) => setOptions(e.target.value)}
                    >
                        <option>New</option>
                        <option>rating</option>
                        <option>lowest price</option>
                        <option>highest price</option>
                    </select>
                </div>
            </div>

             {/* Loading Spinner */}
             {loading ? (
                <div className="flex justify-center items-center min-h-[300px]">
                    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 p-[20px] lg:p-[30px] md:p-[15px]">
                {totalRecords.map((item, index) => (
                  <div key={index} className="card bg-base-100 w-90 shadow-xl group relative">
                                                  <figure className="px-3 md:px-5 pt-5 md:pt-10 h-[300px]">
                                                      <img src={item.image} alt={item.id} className="group-hover:scale-110 transition-transform duration-300 ease-in-out h-full" />
                                                  </figure>
                                                  <div className="flex flex-col lg:flex-row invisible group-hover:visible transition-opacity duration-300 justify-center gap-3 absolute left-[20%] lg:left-[10%] bottom-[25%] group-hover:bottom-[35%]">
                                                      <Link>
                                                          <div
                                                              className="h-[30px] w-[100px] flex font-semibold items-center justify-center rounded-[20px] cursor-pointer group-hover:bg-boldtext text-white text-[15px]"
                                                              onClick={() => handleAddToCart(item)}
                                                          >
                                                              <h1>Add To Cart</h1>
                                                          </div>
                                                      </Link>
                                                      <Link>
                                                          <div className="h-[30px] w-[100px] flex font-semibold items-center justify-center rounded-[20px] cursor-pointer group-hover:bg-boldtext text-white text-[15px]">
                                                              <h1>View Details</h1>
                                                          </div>
                                                      </Link>
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
                            <h2>${item.price} <del>{item.price}</del></h2>
                        </div>
                    </div>
                ))}
            </div>
            </>
            )}
            <div className="join flex items-center justify-center  w-full">
                <button
                    className="join-item btn"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
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
                    Next
                </button>
            </div>
        </div>
    );
}

export default ShopComponent2;
