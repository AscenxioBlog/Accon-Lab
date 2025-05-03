// import React from 'react'
import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { BiLogOut, BiMenu } from "react-icons/bi";
import { MdAddBusiness, MdRestaurantMenu } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaUsers } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { RiHomeLine } from "react-icons/ri";
import { GiPayMoney } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotificationsCircle } from "react-icons/io5";
import NotificationBell from "./NotificationBell";
// import Swal from "sweetalert2";
// import API_URL from "../Config";

function Admin1() {
    let [showMe, setShowMe] = useState(false);
    let [forwidth, setForwidth] = useState("220px");
    const { pathname } = useLocation();

    const navigate = useNavigate();
    const { id } = useParams();
    function HideModal() {
        setShowMe(!showMe)
      }
    
      function widthopen_close() {
        forwidth == "220px" ? setForwidth("70px") : setForwidth("220px");
      }
    
  return (
    <div>
            <div className=" h-[100vh] relative flex bg-gray-100 lg:p-5 text-[14px] gap-[20px]">

            <nav className="phone-navigation lg:hidden  h-[80px] w-full bg-[#3F3E3E] text-white absolute z-50 bottom-0 grid grid-cols-5">
            <Link to='/admin/:id' className="   flex flex-col items-center justify-center hover:text-textc">
                <span className=" text-[1.8rem]"><RiHomeLine /></span>
                <span>Home</span>
            </Link>
            <Link  className="  hover:text-textc  flex flex-col items-center justify-center ">
                <span className=" text-[1.8rem] "><GiPayMoney /></span>
                <span>All Deposits</span>
            </Link>


            <Link  className="  hover:text-textc  flex flex-col items-center justify-center ">
                <span className=" text-[1.8rem] "><GiPayMoney /></span>
                <span>All Users</span>
            </Link>
            {/* <Link to='/user/withdraw' className="   flex flex-col items-center justify-center">
                <span className=" text-[1.8rem]"><GiTakeMyMoney /></span>
                <span>Withdraw</span>
            </Link> */}
            {/* <Link to='/user/transfer' className="   flex flex-col items-center justify-center">
                <span className=" text-[1.8rem]"><FaMoneyBillTransfer /></span>
                <span>Transfer</span>
            </Link> */}

            <Link   className="   flex flex-col items-center justify-center hover:text-textc">
                <span className=" text-[1.8rem] "><FaRegUserCircle /></span>
                <span>Profile</span>
            </Link>

            <button  className=" cursor-pointer flex flex-col items-center justify-center hover:text-textc">
                <span className=" text-[1.8rem]"><IoMdLogOut /></span>
                <span>Log Out</span>
            </button>
            </nav>
            <div className=" hidden lg:inline-block">
            <nav
            style={{ width: forwidth }}
            className={`absolute  md:relative ${showMe ? '-left-full' : 'left-0'} bg-black h-[600px] top-0 bottom-0 overflow-y-hidden group transition-all duration-700 bg-foraside rounded-[15px] text-white flex flex-col gap-3 p-[20px] overflow-x-hidden   `}
            >
            <div  className=" bg-teal-700 absolute  right-[70px]  duration-300 group-hover:right-[-10px] group-hover:opacity-100 opacity-0 top-10 ">
            {forwidth == "220px" ? (
            <button
            className=" bg-gray-100 p-[3px] text-[#5F8670] rounded-[10px]"
            onClick={widthopen_close}
            >
            <FaArrowLeft />
            </button>
            ) : (
            <button
            className=" bg-gray-100 p-[3px] text-[#5F8670] rounded-[10px]"
            onClick={widthopen_close}
            >
            <FaArrowRight />
            </button>
            )}
            </div>
            <Link to='/'> <h1 className=" font-bold flex gap-2 pl-[10px]">
            <span className=" italic text-textc">CM</span>ADMIN Dashboard
            </h1></Link>
            <hr className=" h-[1px] bg-custom-gradient w-[100%] border-t-0 opacity-[.25]" />
            <ul className=" leading-[47px]">


            <li
            className={
            (pathname ==='/accon/dashboard' ? " bg-textc text-black font-semibold" : "") +
            " rounded-[5px] pl-[25px]"
            }
            >
            <Link to='/accon/dashboard' className=" flex gap-[6px] items-center">
            <FaUsers /> Dashboard
            </Link>
            </li>

            <li
            className={
            (pathname ==='/accon/addproduct' ? " bg-textc text-black font-semibold" : "") +
            " rounded-[5px] pl-[25px]"
            }
            >
            <Link
            to='/accon/addproduct'
            className=" flex gap-[6px] items-center"
            >
            <BsCashCoin /> Add Product
            </Link>
            </li>

            <li
            className={
            (pathname === '/accon/order' ? " bg-textc text-black font-semibold" : "") +
            " rounded-[5px] pl-[25px]"
            }
            >
            <Link to='/accon/order' className=" flex gap-[6px] items-center">
            <FaUserCog /> View All Order
            </Link>
            </li>


            <li
            className={
            (pathname === '/accon/productlist' ? " bg-textc text-black font-semibold" : "") +
            " rounded-[5px] pl-[25px]"
            }
            >
            <Link to='/accon/productlist' className=" flex gap-[6px] items-center">
            <FaUserCog /> View All Product
            </Link>
            </li>


            <li
            className={
            (pathname === '/accon/settings' ? " bg-textc text-black font-semibold" : "") +
            " rounded-[5px] pl-[25px]"
            }
            >
            <Link to='/accon/settings' className=" flex gap-[6px] items-center">
            <FaUserCog /> Settings
            </Link>
            </li>
            {/* <li
            className={
            (pathname === "/admin/staff" ? " bg-textc text-black font-semibold" : "") +
            " rounded-[5px] pl-[25px]"
            }
            >
            <Link to="/admin/orders" className=" flex gap-[6px] items-center">
            All Orders
            </Link>
            </li> */}
            </ul>

            <div>
            <button className=" p-[10px] w-[100%] text-black rounded-[10px] bg-textc font-bold flex gap-2 justify-center items-center mt-[50px]">
            <BiLogOut className=" text-[20px]" /> Logout
            </button>
            </div>
            </nav>
            </div>
            <div className=" flex-1 relative bg-black rounded-2xl shadow-xl overflow-y-scroll scrollbar-thumb-custom-orange scrollbar-thin scrollbar-corner-black scrollbar-track-slate-200">
                <nav className=" flex justify-between relative items-center bg-gray-50 right-[20px] w-full h-[30px] text-white ">
                    <div className=" p-2 bg-black rounded-tl-[20px] grid place-items-center fixed ml-[20px] mt-2">
                        <button onClick={HideModal} className=" text-white text-2xl"><BiMenu/> </button>
                    </div>
                    <div className=" flex items-center gap-5  bg-black p-2 text-white mt-1 rounded-bl-md fixed right-[35px]">
                        <FaCircleUser className=" text-[1.1rem] cursor-pointer"/>
                        <NotificationBell/>

                    </div>
                </nav>
                <div></div>
                <Outlet />
            </div>
            </div>
    </div>
  )
}

export default Admin1