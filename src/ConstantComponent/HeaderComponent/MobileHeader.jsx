import React, { useContext } from 'react'
import { FaCaretDown, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AuthContxt } from '../../UI/AuthenticationComponent/AuthContext';
import { CartContext } from '../../ReusableComponent/CartContext';
import UserPopup from '../UserProfile/UserPopup';
import { MdMenu } from 'react-icons/md';

function MobileHeader() {
    const {forPopup} = useContext(AuthContxt);
    const { cart } = useContext(CartContext); // Access cart from context
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 
      
  return (
    <header className="bg-sky-100 shadow-md border-b-[1px] border-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" >
                <h1 className=' font-montserrat text-[1.5rem] tracking-tighter text-gray-700'> ACCON SCIENTIFIC / <br /> LAB EQUIPMENT  </h1>
            </Link>
            
            <div className="flex space-x-4 text-gray-800 ">
                <section onClick={forPopup} className=' flex gap-2 items-center hover:text-sky-500 cursor-pointer hover:font-bold duration-150'>
                    <FaUser className="cursor-pointer" />
                    <FaCaretDown className=' -ml-1'/>
                </section>
                <section className=' flex gap-2 items-center text-sky-500 cursor-pointer hover:text-black duration-150'>
                    
                    <Link
                        to={'/cart'} 
                        className='relative flex items-center justify-center  rounded-md'
                        >
                        <span className=""><FaShoppingCart className="cursor-pointer inline" /> <span>{totalItems}</span></span>
                    </Link>
                </section>
                <div>
                    <button className=' bg-black text-white p-2 rounded-[5px] text-[20px]'><MdMenu/></button>
                </div>
            </div>
        </div>
           <UserPopup/>
    </header>
  )
}

export default MobileHeader