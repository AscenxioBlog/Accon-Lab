import React, { useContext } from 'react'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { AuthContxt } from '../../UI/AuthenticationComponent/AuthContext'

function UserPopup() {
    let {showPopup, setShowPopup, handleLogout} = useContext(AuthContxt)

  return (
    <div className={` ${showPopup ? "block" : "hidden"} absolute top-[105px] right-[4%] w-[200px] h-[150px] bg-white bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg p-4 z-50`}>
        <ul>
            <li className='py-2 px-4 text-[14px] duration-500 hover:tracking-[1.5px] hover:font-semibold cursor-pointer border-b border-gray-400'>
                <Link to='/profile'>Profile</Link>
            </li>
            <li className='py-2 px-4 text-[14px] duration-500 hover:tracking-[1.5px] hover:font-semibold cursor-pointer border-b border-gray-400'>
                <Link to='/order-history'>Orders History</Link>
            </li>
            <li className='py-2 px-4 text-[14px] duration-500 hover:tracking-[1.5px] hover:font-semibold cursor-pointer' onClick={handleLogout}>
                Logout
            </li>
        </ul>
        <div className='absolute top-2 right-3 w-[20px] h-[20px] bg-red-500 rounded-full flex items-center justify-center text-white cursor-pointer' onClick={() => setShowPopup(false)}>
            <FaX className=' text-[10px]'/>
        </div>
    </div>
  )
}

export default UserPopup