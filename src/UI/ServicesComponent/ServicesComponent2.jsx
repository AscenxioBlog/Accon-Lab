import React from 'react'
import { FaMicroscope } from "react-icons/fa";
import { FaDna } from "react-icons/fa6";
import { GiCorkedTube } from "react-icons/gi";
import { FaLungs } from "react-icons/fa";
import { FaBacterium } from "react-icons/fa";
import { LuDna } from "react-icons/lu";
import {motion} from "motion/react"


function ServicesComponent2() {
  return (
    <div>
        <div className='min-h-[2650px] md:min-h-[1500px] p-[10px] lg:p-[20px]   lg:min-h-[1100px]  w-full  aboutbg'>
            <div className='min-h-[150px] w-full bg flex flex-col justify-center items-center'>
                <h1 className='uppercase font-custom text-textc font-bold text-[1rem] before:w-[14px] before:h-[2px] before:bg-textc flex relative items-center gap-1 after:h-[2px] after:w-[14px] after:bg-textc'>our services</h1>
                <h1 className='capitalize font-custom text-[1.9rem] font-extrabold text-boldtext'>service area</h1>
            </div>
            <div className='min-h-[700px]  grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-[20px]'>
              <motion.div
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{delay:0.4,type:'spring', stiffness:120, duration:2}}
              viewport={{ once: true }}  
              className='p-[30px] box-border group bg-white'>
                <div className='min-h-[100px] w-[30%] translate-x-[40px]   '>
                    <div className='relative  bg-red-600 hexagon group-hover:bg-[blue] b group-hover:transition duration-700 ease-in-out '> 
                      <div className='absolute left-[10px]  mt-[30px] h-[10px] z-[5] text-6xl text-[#4d4d84] group-hover:text-bodybg group-hover:"transition duration-700 ease-in-out '>
                        <FaMicroscope />
                      </div>
                  </div>
                </div>                   
                  <div className='mt-[20px] '>
                   <h1 className='font-custom font-semibold text-3xl text-boldtext'>HEMOGLOBIN TEST</h1>
                   <h3 className='text-start'>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                 </div>
                 <div className='mt-[30px] flex items-center gap-3'>
                    <div className='lab'></div>
                    <div className='hover:text-blue-800'>
                        <a href="#" className='uppercase font-custom font-semibold text-[1rem] '>
                             read more
                        </a>
                    </div>
                 </div>
              </motion.div>
              <motion.div  
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{delay:0.5,type:'spring', stiffness:120, duration:2}}
              viewport={{ once: true }}
              className='p-[30px] box-border bg-white group'>
                <div className='min-h-[100px] w-[30%] translate-x-[40px]  '>
                  <div className='relative  hexagon group-hover:bg-[#e64040] group-hover:transition duration-700 ease-in-out'>                         
                    <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl text-[red] group-hover:text-bodybg group-hover:"transition duration-700 ease-in-out  '>
                      <GiCorkedTube />
                     </div>
                  </div>
                </div>                                  
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>BLOOD TESTING</h1>
                  <h3 className='text-start'>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
                <div className='mt-[30px] flex items-center gap-3'>
                    <div className='special'></div>
                    <div className='hover:text-red-500'>
                        <a href="#" className='uppercase font-custom font-semibold text-[1rem] '>
                             read more
                        </a>
                    </div>
                 </div>
              </motion.div>
              <motion.div 
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{delay:0.6,type:'spring', stiffness:120, duration:2}}
              viewport={{ once: true }}
              className='p-[30px] box-border bg-white group'>    
                <div className='min-h-[100px] w-[30%] translate-x-[40px] '>
                    <div className='relative hexagon  hexagon group-hover:bg-[#2b2b9d] group-hover:transition duration-700 ease-in-out '>                         
                        <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl text-[blue] group-hover:text-bodybg group-hover:"transition duration-700 ease-in-out '>
                        <FaBacterium />
                        </div>
                    </div>
                    </div>                                
                <div className='mt-[20px]'>
                    <h1 className='font-custom font-semibold text-3xl text-boldtext'>BIOCHEMISTRY</h1>
                    <h3>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
                <div className='mt-[30px] flex items-center gap-3'>
                    <div className='lab'></div>
                    <div className='hover:text-blue-800'>
                        <a href="#" className='uppercase font-custom font-semibold text-[1rem] '>
                             read more
                        </a>
                    </div>
                 </div>
              </motion.div>
              <motion.div 
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{delay:0.4,type:'spring', stiffness:120, duration:2}}
              viewport={{ once: true }}
              className='p-[30px] box-border bg-white group'>
                <div className='min-h-[100px] w-[30%] translate-x-[40px] '>
                  <div className='relative hexagon group-hover:bg-[#9ee09e] group-hover:transition duration-700 ease-in-out'>                         
                    <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl text-[green] group-hover:text-bodybg group-hover:"transition duration-700 ease-in-out '>
                     <FaBacterium />
                     </div>
                  </div>
                </div>                                 
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>MICROBIOLOGY</h1>
                  <h3>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
                <div className='mt-[30px] flex items-center gap-3'>
                    <div className='patients'></div>
                    <div className='hover:text-green-800'>
                        <a href="#" className='uppercase font-custom font-semibold text-[1rem] '>
                             read more
                        </a>
                    </div>
                 </div>
              </motion.div>
              <motion.div 
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{delay:0.5,type:'spring', stiffness:120, duration:2}}
              viewport={{ once: true }}
              className='p-[30px] bg-white box-border  group'>
                <div className='min-h-[100px] w-[30%] translate-x-[40px]'>
                  <div className='relative hexagon group-hover:bg-[#9ee09e] group-hover:transition duration-700 ease-in-out'>                         
                    <div className='absolute left-[10px] mt-[30px] min-h-[10px] z-[5]  text-6xl text-[green] group-hover:text-bodybg group-hover:"transition duration-700 ease-in-out  '>
                      <FaLungs />
                     </div>
                  </div>
                </div>                                   
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>HISTOPATOLOGY</h1>
                  <h3 className='text-start'>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
                <div className='mt-[30px] flex items-center gap-3'>
                    <div className='patients'></div>
                    <div className='hover:text-green-800'>
                        <a href="#" className='uppercase font-custom font-semibold text-[1rem] '>
                             read more
                        </a>
                    </div>
                 </div>
              </motion.div>
              <motion.div  
              initial={{ opacity:0, y:30 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{delay:0.6,type:'spring', stiffness:120, duration:2}}
              viewport={{ once: true }}
              className='p-[30px] box-border group bg-white'>
                <div className='min-h-[100px] w-[30%] translate-x-[40px]   '>
                  <div className='relative  bg-red-600 hexagon group-hover:bg-[#272771] group-hover:transition duration-700 ease-in'>                         
                    <div className='absolute left-[10px] mt-[30px] h-[10px] z-[5] text-6xl text-[#29296c] group-hover:text-bodybg group-hover:"transition duration-700 ease-in-out  '>
                      <LuDna />
                     </div>
                  </div>
                </div>                                                                   
               <div className='mt-[20px]'>
                  <h1 className='font-custom font-semibold text-3xl text-boldtext'>GENETICS</h1>
                  <h3>Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla.</h3>
                </div>
                <div className='mt-[30px] flex items-center gap-3'>
                    <div className='patients'></div>
                    <div className='hover:text-green-800'>
                        <a href="#" className='uppercase font-custom font-semibold text-[1rem] '>
                             read more
                        </a>
                    </div>
                 </div>
              </motion.div>
          
            </div>

        </div>
    </div>
  )
}

export default ServicesComponent2