import React from 'react'
import Button from '../../ReusableComponent/Button'
import { FaArrowRight } from "react-icons/fa6";

function ServicesComponent5() {
  return (
    <div>
        {/* THIS IS FOR MEDIUM SCREEN  */}
        <div className='min-h-[1200px] w-full bg-white p-[10px] hidden md:block lg:hidden'>
           <div className='min-h-[100px] w-full bg- flex flex-col items-center justify-center'>
                <h1 className='uppercase relative flex items-center before:mt-2 text-[1rem] font-custom font-semibold before:w-[24px] before:h-[3px] before:bg-textc after:h-[3px] after:w-[24px] after:bg-textc after:mt-2 gap-1 text-textc'>price & plan</h1>
                <h1 className='capitalize font-custom font-bold text-[1.5rem] text-boldtext' style={{wordSpacing:'4px'}}>choose your plan</h1>
            </div>
            <div className='p-[20px]'>
                <div className='min-h-[200px] bg w-full gap-0 flex'>
                    <div className='min-h-[420px] w-[50%] border-t-[5px] border-t-boldtext bg-bodybg p-[10px]'>
                        <div>
                            <h1 className='uppercase font-custom font-bold text-[1.2rem] opacity-70'>basic care</h1>
                        </div>
                        <div className='mt-8'>
                            <h1 className='font-custom font-medium text-[1rem]'>
                                <span className='font-custom font-bold text-[2rem] text-boldtext'>$89</span>/monthly
                            </h1>
                        </div>
                        <div className='mt-2'>
                            <h1 className='capitalize font-custom font-extrabold text-[1.3rem]'>basic health check</h1>
                        </div>
                        <div className='mt-5 leading-8'>
                            <ul className='capitalize dotted-list font-custom font-medium'>
                                <li className='flex items-center'> complete blood count</li>
                                <li className='flex items-center'>liver function blood test</li>
                                <li className='flex items-center'>heart diseases blood test</li>
                                <li className='flex items-center opacity-55'>Cholesterol / Lipid Levels</li>
                                <li className='flex items-center opacity-45'>Sexually Transmitted Diseases</li>
                                <li className='flex items-center opacity-35'>Male / Female General Health</li>
                            </ul>
                        </div>
                        <div className='flex items-center w-full mt-2 min-h-[20px]'>
                            <Button
                            className=" btn uppercase w-[100%] group hover:bg-textc text-white hover:opacity-75 bg-textc font-custom font-semibold text-[1.2rem]  "
                            label={
                                <>
                                purchase now 
                                <span className='group-hover:translate-x-1'>
                                <FaArrowRight />
                                </span>
                            </>
                            }
                            
                            />
                        </div>

                    </div>
                    <div className=' min-h-[400px] mt-[-5px] w-[50%] p-[10px] border-t-[5px] border-t-[red] bg-white'>
                        <div>
                            <h1 className='uppercase font-custom font-bold text-[1.2rem] opacity-70'>essential care</h1>
                        </div>
                        <div className='mt-8'>
                            <h1 className='font-custom font-medium text-[1rem]'>
                                <span className='font-custom font-bold text-[2rem] text-boldtext'>$149</span>/monthly
                            </h1>
                        </div>
                        <div className='mt-2'>
                            <h1 className='capitalize font-custom font-extrabold text-[1.3rem]'>gold health check</h1>
                        </div>
                        <div className='mt-5 leading-8'>
                            <ul className='capitalize dotted-list font-custom font-medium'>
                                <li className='flex items-center'> complete blood count</li>
                                <li className='flex items-center'>liver function blood test</li>
                                <li className='flex items-center'>heart diseases blood test</li>
                                <li className='flex items-center opacity-55'>Cholesterol / Lipid Levels</li>
                                <li className='flex items-center opacity-45'>Sexually Transmitted Diseases</li>
                                <li className='flex items-center opacity-35'>Male / Female General Health</li>
                            </ul>
                        </div>
                        <div className='flex items-center w-full mt-2 min-h-[20px]'>
                            <Button
                            className=" btn uppercase w-[100%] group hover:bg-[red] text-white hover:opacity-75 bg-[red] font-custom font-semibold text-[1.2rem]  "
                            label={
                                <>
                                purchase now 
                                <span className='group-hover:translate-x-1'>
                                <FaArrowRight />
                                </span>
                            </>
                            }
                            
                            />
                        </div>
                    </div>

                </div>
                <div className='min-h-[400px]  border-t-[5px] border-t-[green] w-[50%] mt-5 bg-bodybg p-[10px]'>
                        <div>
                            <h1 className='uppercase font-custom font-bold text-[1.2rem] opacity-70'>total care</h1>
                        </div>
                        <div className='mt-8'>
                            <h1 className='font-custom font-medium text-[1rem]'>
                                <span className='font-custom font-bold text-[2rem] text-boldtext'>$249</span>/yearly
                            </h1>
                        </div>
                        <div className='mt-2'>
                            <h1 className='capitalize font-custom font-extrabold text-[1.3rem]'>platinum health check</h1>
                        </div>
                        <div className='mt-5 leading-8'>
                            <ul className='capitalize dotted-list font-custom font-medium'>
                                <li className='flex items-center'> complete blood count</li>
                                <li className='flex items-center'>liver function blood test</li>
                                <li className='flex items-center'>heart diseases blood test</li>
                                <li className='flex items-center opacity-55'>Cholesterol / Lipid Levels</li>
                                <li className='flex items-center opacity-45'>Sexually Transmitted Diseases</li>
                                <li className='flex items-center opacity-35'>Male / Female General Health</li>
                            </ul>
                        </div>
                        <div className='flex items-center w-full mt-2 min-h-[20px]'>
                        <Button
                        className=" btn uppercase w-[100%] group hover:bg-[green] text-white hover:opacity-75 bg-[green] font-custom font-semibold text-[1.2rem]  "
                        label={
                            <>
                            purchase now 
                            <span className='group-hover:translate-x-1'>
                            <FaArrowRight />
                            </span>
                        </>
                        }
                        
                        />
                    </div>


                </div>
            </div>

        </div>
    </div>
  )
}

export default ServicesComponent5