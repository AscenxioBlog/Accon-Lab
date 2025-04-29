import React, { useContext, useState } from 'react'
import { BsLungs } from "react-icons/bs";
import { MdDialpad } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '../../ReusableComponent/Button';
import { FaYoutube } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaBasketShopping } from "react-icons/fa6";
import subpic from './Subnavpictures/subpic1.jpg'
import subnav2 from './Subnavpictures/subnav2.jpg'
import subnav3 from './Subnavpictures/subnav3.jpg'
import { FaUser } from "react-icons/fa";
import { CartContext } from '../../ReusableComponent/CartContext';
import UserPopup from '../UserProfile/UserPopup';



function HeaderComponent() {
    const { cart } = useContext(CartContext); // Access cart from context
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); 
    let [showPopup,setShowPopup] = useState(false)
    let [nav, setNav] = useState('-80%')
    function sidenav() {
        if (nav =='-80%') {
            setNav('0')
            
        } else {
            setNav('-80%')
            
        }
        
    }
  return (
    <div className='max-h-[30px] w-full fixed top-0 z-50'>
        <div className='h-[90px] bg-[#b7d0d6]  flex items-center p-[10px] box-border lg:hidden '>
            <div className=' gap-1 flex items-center justify-start w-[60%]  '>
                <h1  className='font-bold text-3xl text-textc '><BsLungs /></h1>
                <h1 className=' font-custom text-[1rem] text-center font-bold text-boldtext'> ACCON SCIENTIFIC/ LAB EQUIPMENT</h1>
            </div>
            <div className='flex justify-end gap-4 w-[40%] p-[20px] box-border items-center'>
                <div className='cursor-pointer text-[1.3rem]'>
                     <Link to={'/cart'}>                                 
                         <FaBasketShopping  className='dark:text-black'/>  
                         {totalItems > 0 && (
                            <span className="absolute top-[30px] right-[80px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                   {totalItems}
                            </span>
                          )}   
                                                    
                    </Link>
                    <button>
                        <FaUser />
                    </button>                            
                 </div>
                <Button
                        height='50px'
                        // width ='4000px'
                        className=' bg-textc text-2xl font-bold p-[10px] dark:text-black'
                        label = 'Ξ'
                        onClick = {sidenav}
                    />
                   
            </div>
        </div>




        {/* for large screen  */}
        <div className='min-h-[10px] bg-[#b7d0d6] hidden lg:grid grid-cols-[25%,75%] dark:text-black w-full overflow-x-hidden '>
            <div className=' gap-1 flex items-center justify-center'>           
                    <h1  className='font-bold text-3xl text-textc '><BsLungs /></h1>
                    <h1 className=' font-custom text-[1.2rem] font-bold text-boldtext text-center'> ACCON SCIENTIFIC/ <br /> LAB EQUIPMENT  </h1>
            </div>
            <div className=' grid grid-cols-1 w-full '>
                <div className='grid grid-cols-3 p-[10px] border-b-[2px] border-b-white  '>
                    <div className='flex items-center p-[10px]'>
                        <h1 className='text-boldtext text-2xl font-bold'><MdDialpad /></h1>
                        <h1 className='font-custom text-[19px] font-semibold'> HELP DESK: +234 80 9402 5524</h1>
                    </div>
                    <div className='flex items-center'>
                        {/* <h1 className='text-boldtext text-2xl font-bold'><IoTimeOutline /></h1>
                        <h1 className='font-custom text-[17px] font-semibold dark:text-black'>MONDAY - FRIDAY 09:00AM-05:00PM</h1> */}
                    </div>
                    <div className='flex items-center'>
                          <h1 className='font-custom text-[19px] font-semibold'>MONDAY - FRIDAY 09:00AM-05:00PM</h1>
                    </div>
                </div>
                <div className=' grid grid-cols-[70%,30%] gap-6 items-center'>
                    <div className='p-[5px] box-border font-custom text-[20px] font-semibold'> 
                    <ul className='flex gap-[40px] justify-center'>
                            <li className='nav-item hover:border-b-[2px] hover:border-boldtext'><Link to={'/'}>HOME</Link></li>
                            <li className='nav-item hover:border-b-[2px] hover:border-boldtext'><Link to={'/Shop'}>SHOP</Link></li>

                            <li className='nav-item hover:border-b-[2px] hover:border-boldtext'><Link to={'/About'}>ABOUT</Link></li>
                            {/* <li className='nav-item john-bro cursor-pointer hover:border-b-[2px] hover:border-boldtext'>
                               PAGES +
                            </li> */}
                            {/* <div className=" john opacity-0 absolute top-[150px] left-[35%] xl:left-[33.3%] " style={{transition:'1s'}}>
                                   <ul className='flex flex-col text-bodybg  font-custom font-extrabold text-[1.4rem]'>
                                        <li className='hover:text-textc'><Link to={'/Service'}>Services</Link></li>
                                        <li className='hover:text-textc'><Link to={'/Pricing'}>Pricing Plan</Link></li>
                                        <li className='hover:text-textc'><Link to={'/Shop'}>Shop</Link></li>
                                        <li className='hover:text-textc'><Link to={'/cart'}>Cart</Link></li>
                                        <li className='hover:text-textc'><Link to={'/Checkout'}>Checkout</Link></li>
                                        <li className='hover:text-textc'><Link to={'/FAQ'}>FAQs</Link></li>
                                    </ul>
                                </div> */}
                            {/* <li className='nav-item hover:border-boldtext hover:border-b-[2px]'><Link to={'/Research'}>RESEARCH</Link></li> */}
                            {/* <li className='nav-item hover:border-boldtext hover:border-b-[2px]'><Link to={'/Team'}>FAQs</Link></li> */}
                            <li className='nav-item hover:border-boldtext hover:border-b-[2px]'><Link to={'/Contact'}>CONTACT</Link></li>
                        </ul>
                    </div>
                    
                    <div className='grid gap-2 grid-cols-[25%,75%]'>
                        <div className='flex justify-center items-center gap-3'>
                           
                            {/* <div>
                            <Button
                                className=' text-2xl bg-textc h-[50px]  font-bold p-[10px]'
                                label = 'Ξ'
                                onClick = {sidenav}
                            /> */}
                            {/* </  div> */}
                            <button className=' cursor-pointer' onClick={()=> !showPopup? setShowPopup(true) : setShowPopup(false)}>
                                <FaUser />
                            </button>   
                                
                            <div className='cursor-pointer text-[1.3rem]'>
                                <Link to={'/cart'}>
                                  
                                <FaBasketShopping className='relative'/>
                                {totalItems > 0 && (
                                            <span className="absolute top-[80px] right-[16%] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                                {totalItems}
                                            </span>
                                        )}
                                
                                </Link>                            
                            </div>



                        </div>
                        <div className='flex items-center justify-center  text-bodybg font-custom font-semibold text-[1.2rem] w-[90%]'>
                            <Link ><h1></h1></Link>
                        </div>
                    </div>

                </div>

            </div>
        
        </div>



                        {/* SIDENAV DISPLAY  */}

        <div className=' absolute bg-textc min-h-[1000px] z-[2] top-[20px] w-[80%]  flex flex-col gap-2 p-[10px]'style={{right:nav, transition:'1s',}}>
            <div className=' gap-4 flex items-center justify-between  '>   
                <div className='flex'>
                    <h1  className='font-bold text-2xl text-textc '><BsLungs /></h1>
                    <h1 className=' font-custom text-[1rem] font-bold text-boldtext'> ACCON SCIENTIFIC/ <br /> LAB EQUIPMENT </h1>    
                </div>        
              
                    <Button
                        height='50px'
                        width ='100px'
                        className='bg-boldtext'
                        label = '✖'
                        onClick ={sidenav}
                    
                    />
            </div>
                        {/* THIS PART OF THE SIDENAV IS HIDDEN FOR LARGE SCREEN  */}
            <section className='p-[10px] lg:hidden  dark:text-white '>
                <div className='border-b-[1px] border-b-white'>
                  <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'onClick={sidenav} > <Link to={'/'}>HOME</Link> </h1>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-b-white min-h-[20px]'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'  onClick={sidenav}><Link to={'/About'}>ABOUT</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'></h1>
                </div>

                <div className='flex items-center justify-between border-b-[1px] border-b-white min-h-[20px]'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'  onClick={sidenav}> <Link to={"/Service"}>SERVICES</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'></h1>
                </div>


                <div className='flex items-center justify-between border-b-[1px] border-b-white min-h-[20px]'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'  onClick={sidenav}><Link to={"/Shop"}>SHOP</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'></h1>
                </div>


                <div className='flex items-center justify-between border-b-[1px] border-b-white min-h-[20px]'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext'  onClick={sidenav}> <Link to={"/FAQ"}>FAQs</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'></h1>
                </div>


                <div className='flex items-center justify-between border-b-[1px] border-b-white'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext '  onClick={sidenav}><Link to={'/Team'}>TEAM</Link></h1>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-b-white'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] hover:text-boldtext '  onClick={sidenav}><Link to={'/Contact'}>CONTACT</Link></h1>
                </div>
            </section>

                    {/* THIS PART OF SIDENAV IS TO BE SHOWN ON THE LARGE SCREEN  */}
            <section className='hidden lg:block p-[20px] font-custom font-semibold text-6xl'>
                <div>
                    <h1>Our Mission is to ensure  the generation of accurate and precise finding </h1>
                </div>


            </section>
         

            <div className='mt-[20px] p-[10px] lg:p-[20px]'>
                <h1 className='lg:text-2xl font-custom dark:text-white'>CONTACT US</h1>
                <h1 className='hover:text-[red] text-bodybg'>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> 16, Old Ojo Road, Maza-Maza, Lagos-State</a></h1>

                <h1 className='hover:text-[red] text-bodybg'>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> 41, Asogbon Street, Isale-Eko, Islad Lagos</a></h1>
                <h1 className='hover:text-[red] text-bodybg'>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> +234 80 9402 5524</a></h1>

                <h1 className='hover:text-[red] text-bodybg'>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> +234 80 3742 8180</a></h1>
                <h1 className='hover:text-[red] text-bodybg'>⭐<a href="#"className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl '> accon@gmail.com</a></h1>

                
            </div>
            <div className='hidden lg:block p-[20px]'>
                <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-custom text-[26px]">Get Update</span>
                        </div>
                        <div className='flex items-center'>
                            <input type="text" placeholder="Enter Mail" className="input input-bordered w-full max-w-xs" />
                            <span className='text-2xl bg-boldtext text-bodybg h-12 rounded flex items-center w-7 cursor-pointer hover:bg-textc'><IoIosSend /></span>

                        </div>                  
                </label>         
            </div>

            <div className='p-[20px] min-h-[100px] hidden lg:block'>
                <div>
                    <h1 className='text-2xl font-custom font-semibold'>Check Instagram Post</h1>
                </div>
                <div className=' min-h-[100px] flex gap-5 mt-5'>
                    <div className='min-h-[100px] rounded-2xl'>
                        <img src={subpic} height='100%' width='100%' alt="microscope" />
                    </div>
                    <div>
                        <img src={subnav2} height='100%' width='100%' alt="looking through microscope" />

                    </div>
                    <div>
                          <img src={subnav3} height='100%' width='100%' alt="Observing" />

                    </div>
                </div>
            </div>

            <div className='flex items-center gap-6 mt-[20px] text-[20px] md:text-[25px] p-[10px] lg:p-[20px]'>
                <div className='hover:bg-textc hover:scale-x-[130%] '>
                      <h1><FaYoutube /></h1>
                </div>
                <div className='hover:bg-textc hover:scale-x-[130%] '>
                    <h1 className=''><a href="#"><GrTwitter /></a></h1>
                </div>
                <div className='hover:bg-textc hover:scale-x-[130%] '>
                    <h1><a href="#"><FaFacebookF /></a></h1>
                </div>
                <div className='hover:bg-textc hover:scale-x-[130%] '>
                    <h1><a href="#"><FaSkype /></a></h1>
                </div>

            </div>

          

                

         </div>
         {/* <Test/> */}
         <UserPopup showPopup={showPopup} setShowPopup={setShowPopup}/>

    </div>
  )
}

export default HeaderComponent