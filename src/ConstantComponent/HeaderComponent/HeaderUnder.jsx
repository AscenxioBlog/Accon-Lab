import React from 'react'
import { FaSearch } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';


function HeaderUnder() {
  return (
    <header className="bg-sky-100 py-1 shadow-md text-black">
        <div className="max-w-6xl mx-auto px-4  flex justify-between items-center">
            <section className=' bg-sky-400 px-4 group text-white h-[60px] hidden md:grid place-items-center text-[13px] font-bold font-montserrat cursor-pointer'>
                <span>ALL CATEGORIES</span>
                <div className=' absolute min-h-[200px] invisible group-hover:visible  transition-all duration-300 ease-in-out  top-[130px]'>
                    <ol className=' flex-col drop'>
                        <li className=' bg-[#0006] backdrop-blur-md opacity-0 px-[40px] py-[5px] translate-x-[-50%] duration-200 group-hover:translate-x-0 group-hover:opacity-100'>
                            <Link>Hospital</Link>
                        </li>
                        <li className=' bg-[#0006] backdrop-blur-md opacity-0 px-[40px] py-[5px] translate-x-[50%] duration-200 group-hover:translate-x-0 group-hover:opacity-100'>
                            <Link>Education</Link>
                        </li>
                        <li className=' bg-[#0006] backdrop-blur-md opacity-0 px-[40px] py-[5px] translate-x-[-50%] duration-200 group-hover:translate-x-0 group-hover:opacity-100'>
                            <Link>Lab</Link>
                        </li>
                        <li className=' bg-[#0006] backdrop-blur-md opacity-0 px-[40px] py-[5px] translate-x-[50%] duration-200 group-hover:translate-x-0 group-hover:opacity-100'>
                            <Link>Surgical</Link>
                        </li>
                        <li className=' bg-[#0006] backdrop-blur-md opacity-0 px-[40px] py-[5px] translate-x-[-50%] duration-200 group-hover:translate-x-0 group-hover:opacity-100'>
                            <Link>Biology</Link>
                        </li>
                        <li className=' bg-[#0006] backdrop-blur-md opacity-0 px-[40px] py-[5px] translate-x-[50%] duration-200 group-hover:translate-x-0 group-hover:opacity-100'>
                            <Link>Chemistry</Link>
                        </li>
                        <li className=' bg-[#0006] backdrop-blur-md opacity-0 px-[40px] py-[5px] translate-x-[-50%] duration-200 group-hover:translate-x-0 group-hover:opacity-100'>
                            <Link>Physics</Link>
                        </li>
                    </ol>
                </div>
            </section>
            <section className=' relative flex'>
                <FaSearch className=' absolute hidden md:inline text-black mt-3 ml-2'/>
                <input type="text" name="" placeholder='search product or category' className=' border-[1px] border-gray-500 bg-transparent w-[40vw] sm:w-[300px] md:pl-7 pl-2 text-black text-[11px] md:placeholder:text-[14px] focus:outline-none'/>
                <button className=' relative px-3 py-3 md:px-6 md:py-2 rounded-tr-[5px] rounded-br-[5px] font-medium text-white bg-gradient-to-r from-sky-400 to-indigo-500 shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-all duration-300 hover:scale-[1.02]'>
                    <span className=' hidden md:inline'>search</span>
                    <FaSearch className=' md:hidden text-white'/>
                </button>
            </section>
            <section className=' flex gap-2 items-center text-[0.9rem] font-semibold text-gray-700 cursor-pointer'>
                <GiRotaryPhone className=' text-blue-500 text-[1.3rem]'/>
                <span className=' flex flex-col text-[0.7rem]'>
                    <span>
                        <a href="tel:+23443423844" className=' text-sky-500'>(+234) 7130392355</a>
                    </span>
                    <span>Need Help? Call Us i</span>
                </span>
            </section>
            <section className=' hidden sm:flex gap-2 items-center text-[0.9rem] font-semibold text-gray-700 cursor-pointer'>
                <MdEmail  className=' text-blue-500 text-[1.3rem]'/>
                <span className=' flex flex-col'>
                    <span>
                        <a href='mailto:accon@gmail.com' className=' text-sky-500'>accon@gmail.com</a>
                    </span>
                    <span>Need Help? Mail Us</span>
                </span>
            </section>
            <section className=' md:flex gap-2 hidden items-center text-[0.9rem] font-semibold text-gray-700 cursor-pointer'>
                <FaWhatsapp className=' text-blue-500 text-[1.3rem]'/> 
                <span>24/7 Online Chat</span>
            </section>
        </div>
    </header>
  )
}

export default HeaderUnder