import React from 'react'
// import about from './HomePictures/about1.png'
// import about2 from './HomePictures/about2.png'
import { Link } from 'react-router-dom'
import {motion} from "motion/react"

import Slider from "react-slick";
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"


function HomeComponent2() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };


  let Categories = {

  }
  return (
    <div>
        <div className='min-h-[380px] lg:h-[380px] grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-10 mb-10 mt-5'>
          <div className="min-h-[380px] bg-[] lg:col-span-2  pt-3">
            <h1 className=' pl-2 box-border text-[1.5rem] font-bold'>Main Categories</h1>
           <div className=" h-[360px] grid gap-1 pl-2 pr-2 bg-[url(assets/Frame.png)] frame">
           <Link>
           <div className="h-full box-border flex items-center font-bold border-l-[2px] border-l-[gray] pl-2 hover:border-l-[red]">
            <h1>Cleaning Product +</h1>
           </div>
           </Link>
           <Link>
           <div className="h-full box-border flex items-center font-bold border-l-[2px] border-l-[gray] pl-2 hover:border-l-[red]">
            <h1>Personal Safety +</h1>
            </div>
           </Link>
            <Link>
            <div className="h-full box-border flex items-center font-bold border-l-[2px] border-l-[gray] pl-2 hover:border-l-[red]">
              <h1>Bulk Purchase +</h1>
            </div>
            </Link>
            <Link>
            <div className="h-full box-border flex items-center font-bold border-l-[2px] border-l-[gray] pl-2 hover:border-l-[red]">
              <h1>First Aid tools +</h1>
            </div>
            </Link>
           <Link>
           <div className="h-full box-border flex items-center font-bold border-l-[2px] border-l-[gray] pl-2 hover:border-l-[red]">
              <h1>Security Product +</h1>
            </div>
           </Link>
            <Link>
            <div className="h-full box-border  flex items-center font-bold border-l-[2px] border-l-[gray] pl-2 hover:border-l-[red]">
              <h1>Lockout Supplier +</h1>
            </div>
            </Link>
            <Link>
            <div className=" h-full box-border flex items-center font-bold border-l-[2px] border-l-[gray] pl-2 hover:border-l-[red]">
              <h1>Material Handling +</h1>
            </div>
            </Link>
           </div>
          </div>

          <div className="h-[380px] bg-[] lg:col-span-6 pl-4 pr-4 box-border">
                  <Slider {...settings}>
                <div className=" h-[380px] w-full bg-[url(assets/banner2.jpg)] homeslider"></div>
                  <div className=" h-[380px] w-full  bg-[url(assets/banner3.jpg)] homeslider"></div>
                  <div className=" h-[380px] w-full bg-[url(assets/banner4.jpg)] homeslider"></div>
                </Slider>
          </div>
          <div className="h-[380px] bg-[] lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-2 p-5">
            <div className=" bg-lime-200 bg-[url(assets/undraw2.png)] frame"></div>
            <div className=" bg-lime-200"></div>
          </div>

     

          
           {/* <div className='relative'>
                <motion.div
                      initial={{ opacity: 0, x:-20 }}
                      whileInView={{ opacity: 1, x:0 }}
                    transition={{delay:1.2, duration:4}}
                    viewport={{ once: true }}
                 className='min-h-[100px] W-[100px]'>
                   <img src={about} alt="" />
                </motion.div>
                <motion.div
                       initial={{ opacity: 0, x:-20 }}
                       whileInView={{ opacity: 1, x:0 }}
                     transition={{delay:1.2, duration:4}}
                     viewport={{ once: true }}
                 className='min-h-[100px] w-[200px] absolute hidden md:block bottom-[50px] left-4'
                >
                    <img src={about2} alt="" />
                </motion.div>
           </div> */}
            {/* <motion.div 
                initial={{ opacity: 0, x:20 }}
                whileInView={{ opacity: 1, x:0 }}
                transition={{delay:1, duration:3}}
                viewport={{ once: true }}
                className='min-h-[100px]  mt-[40px] p-[10px]'
            >
                <div>
                    <h2 className=' before:h-[3px] before:w-[40px] before:bg-textc relative text-textc flex items-center font-custom font-semibold text-2xl gap-2'>ABOUT US</h2>
                    <h1 className='text-start text-[28px] md:text-[30px] font-custom font-semibold mt-[20px] text-boldtext'>Best Laboratory For Testing And Research</h1>
                    <p className='text-start font-custom font-light text-[19px] md:text-[20px] lg:text-[23px] mt-[30px]'>Your full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings</p>
                    <p className='text-start font-custom font-light text-[19px] md:text-[20px] lg:text-[23px] mt-[30px]'>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse quat.Exerci tationlobortis nisl aliquip ex ea commodo habent claritatem insitamconse quat.</p>
                </div>
                <div className='min-h-[50px] w-[70%] md:w-[40%] bg-textc mt-8 text-bodybg flex items-center justify-center font-custom font-semibold rounded-lg cursor-pointer hover:bg-opacity-55 hover:transition hover:transition-ease-in'>
                    <Link to={'/Contact'}>TALK WITH EXPERT</Link>

                </div>
            </motion.div> */}
            

        </div>
    </div>
  )
}

export default HomeComponent2