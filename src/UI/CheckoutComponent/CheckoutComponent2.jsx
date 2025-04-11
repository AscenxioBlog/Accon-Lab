import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../ReusableComponent/Button';

function CheckoutComponent2() {
    const location = useLocation();
    console.log(location.state)
    const { cart = [], cartTotal = 0 } = location.state || {};
    
  return (
    <div>
        <div>
            <form action="">
                <div className='min-h-[100px] lg:translate-x-20  dark:bg-bodybg  lg:w-[90%] bg-bodybg grid gap-4 grid-cols-1 lg:grid-cols-2 p-[20px] lg:justify-center font-custom lg:p-[30px]'>
                    <div>
                    <div>
                        <h1 className='text-boldtext text-[1.3rem] font-bold'>Billing address</h1>
                    </div>
                    <div>
                            <label className='text-[1.1rem] font-semibold'>COUNTRY <span className='text-[red]'>*</span></label>
                            <select className="flex select select-bordered select-sm w-full  dark:bg-white capitalize " required>
                            <option disabled selected>united states</option>
                            <option>Nigeria</option>
                            <option>ghana</option>
                            <option>canada</option>
                            <option>togo</option>
                            <option>united kingdom</option>
                            </select>
                            <div className="flex flex-col md:flex md:flex-row justify-between mt-4">

                                <div className="md:w-[48%]">
                                    <label htmlFor="firstName" className="block mb-1 font-semibold">
                                        First Name <span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        placeholder="Type here"
                                        required
                                        className="input input-bordered input-sm w-full  dark:bg-white"
                                    />
                                </div>

                                <div className="md:w-[48%]">
                                    <label htmlFor="lastName" className="block mb-1 font-semibold">
                                        Last Name <span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        placeholder="Type here"
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='mt-[10px]'>
                                <label htmlFor="Company Name">Company Name</label>
                                <input
                                        type="text"
                                        id="company name"
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                />
                                <label htmlFor="lastName" className="block mt-1 font-semibold">
                                        Address <span className='text-[red]'>*</span>
                                </label>
                                    <input
                                        type="text"
                                        placeholder="Street Address"
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder=" Apartment suite , unit etc (optional)"
                                        className="input input-bordered input-sm w-full mt-[10px] dark:bg-white"
                                    />
                                <label htmlFor="lastName" className="block mt-1 font-semibold">
                                        Town/City <span className='text-[red]'>*</span>
                                </label>
                                    <input
                                        type="text"
                                        placeholder="Town/City"
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                        required
                                    />
                            </div>
                            <div className="flex flex-col md:flex md:flex-row justify-between mt-4">
                                <div className="md:w-[48%]">
                                    <label htmlFor="firstName" className="block  font-semibold">
                                        State<span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your state"
                                        required
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                    />
                                </div>

                                <div className="md:w-[48%]">
                                    <label htmlFor="lastName" className="block  font-semibold">
                                        Postal/Zip<span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Postal/Zip"
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col md:flex md:flex-row justify-between mt-4">
                                <div className="md:w-[48%]">
                                    <label htmlFor="firstName" className="block  font-semibold">
                                        Email<span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        required
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                    />
                                </div>

                                <div className="md:w-[48%]">
                                    <label htmlFor="lastName" className="block  font-semibold">
                                        Postal/Zip<span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Postal/Zip"
                                        className="input input-bordered input-sm w-full dark:bg-white"
                                        required
                                    />
                                </div>
                            </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className='text-boldtext text-[1.3rem] font-bold'>Your order</h1>
                    </div>
                    <div className="mt-2 p-4 border border-gray-300 rounded-lg">
                        {/* Product Details */}
                        <div className="flex justify-between font-semibold border-b pb-2">
                            <span>Product</span>
                            <span>Total</span>
                        </div>
                        {cart.map((item,index) => (
                            <div key={index} className="flex justify-between py-2">
                                <span>{item.id} x {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        {/* Total */}
                        <div className="flex justify-between font-bold mt-4 border-t pt-2">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <div>
                        <Button
                            className='btn  uppercase mt-4 w-[60%] font-custom text-[1rem] font-bold text-bodybg bg-textc hover:bg-textc hover:opacity-70'
                            label='place order'
                        />
                    </div>
                </div>
                        
               

            </div>
            </form>
        </div>
    </div>
  )

}

export default CheckoutComponent2