// Header.tsx
import { FaShoppingCart, FaUser, FaCaretDown } from 'react-icons/fa';
import UserPopup from '../UserProfile/UserPopup';
import { AuthContxt } from '../../UI/AuthenticationComponent/AuthContext';
import { useContext } from 'react';
import { CartContext } from '../../ReusableComponent/CartContext';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  const {forPopup} = useContext(AuthContxt);
  const { cart } = useContext(CartContext); // Access cart from context
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 
  
  return (
    <header className="bg-sky-100 shadow-md border-b-[1px] border-gray-300">
      {/* <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div className="text-gray-700">📞 +234 80 9402 5524</div>
        <div className="text-gray-700 hidden md:block">🕒 Mon - Fri: 09:00AM - 05:00PM</div>
      </div> */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-5 text-black text-[0.9rem]">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/shop">Shop</a>
        </nav>
        <Link to="/" >
            <h1 className=' font-montserrat text-[1.5rem] font-extrabold tracking-tighter text-gray-700'> ACCON SCIENTIFIC / LAB EQUIPMENT  </h1>
        </Link>
       
        <div className="flex space-x-4 text-gray-800 ">
            <section onClick={forPopup} className=' flex gap-2 items-center hover:text-sky-500 cursor-pointer hover:font-bold duration-150'>
              <FaUser className="cursor-pointer" />
              <span className="text-[0.8rem]">Account</span>
              <FaCaretDown className=' -ml-1'/>
            </section>
            <section className=' flex gap-2 items-center text-sky-500 cursor-pointer hover:text-black duration-150'>
                <FaShoppingCart className="cursor-pointer" />
                <Link
                  to={'/cart'} 
                  className='relative flex items-center justify-center  rounded-md'
                  >
                  <span className="text-[0.8rem]">CART: <span>{totalItems}</span></span>
                </Link>
            </section>
        </div>
      </div>
        <UserPopup/>
    </header>
  );
};

export default HeaderComponent;
