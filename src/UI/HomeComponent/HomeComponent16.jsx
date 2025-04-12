import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { Link } from 'react-router-dom';
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

function HomeComponent16() {
    const data = [
        { id: 'Glucose monitoring', price: '46.00', rating: '4', image: glucose, sku: 'PROD001' },
        { id: 'Single hand gloves', price: '58.10', rating: '4', image: gloves, sku: 'PROD002' },
        { id: 'Pharmaceutical plants', price: '88.00', rating: '3', image: plant, sku: 'PROD003' },
        { id: 'Sethoscope superb', price: '96.00', rating: '4', image: sethoscope, sku: 'PROD004' },
        { id: 'Sphygmomanometer ECO', price: '69.00', rating: '4', image: sphygmomanometer, sku: 'PROD005' },
        { id: 'Sphygmomanometer LEO', price: '70.00', rating: '3', image: sphygmomanometer2, sku: 'PROD006' },
        { id: 'Hand gloves', price: '52.00', rating: '4', image: handgloves, sku: 'PROD007' },
        { id: 'Sphygmomanometer', price: '66.00', rating: '4', image: sphygmomanometer3, sku: 'PROD008' },
        { id: 'Digital thermometer', price: '70.00', rating: '4', image: digital, sku: 'PROD009' },
        { id: 'Glucometer', price: '85.00', rating: '4', image: glucometer, sku: 'PROD010' },
        { id: 'Oxygen breathing machine', price: '85.00', rating: '4', image: oxygen, sku: 'PROD011' },
        { id: 'Surgical latex glove', price: '90.00', rating: '4', image: surgical, sku: 'PROD012' }
    ];

    const { addToCart } = useContext(CartContext);
    const [options, setOptions] = useState('new');
    const [currentPage, setCurrentPage] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const productsPerPage = 12;
    let allData = [...data];

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

    return (
        <div className="min-h-[550px] w-full bg-purple-50 py-5">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-boldtext mb-2">
                MARKET PLACE
            </h1>

            {showAlert && (
                <div className="alert alert-success fixed top-20 right-4 flex items-center space-x-2 p-3 bg-green-500 text-white rounded-md shadow-lg z-50 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                        <option>new</option>
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
                    {/* Products Grid */}
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
                                    <h2 className="card-title text-[1rem] uppercase text-center">{item.id}</h2>
                                    <div className="rating">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <input
                                                key={i}
                                                type="radio"
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
                       <div className=" h-[80px] w-full flex justify-center items-center">
                <Link to='/shop'>
                    <div className=" h-[50px] w-[150px] bg-boldtext text-white rounded-[20px] flex justify-center items-center font-bold">View All Product</div>
                </Link>
            </div>
        </div>
    );
}

export default HomeComponent16;
