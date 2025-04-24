import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
      const navigate = useNavigate();
    
    
      let handlesubmit = ()=>{
        navigate('/checkout');
      }
  return (
    <div>
         <form action="" onSubmit={handlesubmit} className=' w-full h-ful flex justify-center items-center'>
       <div className=" h-[450px] w-full md:w-[80%] lg:w-[50%] flex flex-col items-center justify-center space-y-6">
            <div className=" h-[120px] w-[80%] bg-[] text-center flex flex-col justify-center ">
                <h1 className='text-[1.5rem] font-bold text-boldtext'>Welcome to Accon Lab</h1>
                <p className=' text-[1.1rem]'>Type your e-mail to log in or create a Accon Lab account.</p>
            </div>

            <input type="text" required placeholder='Enter Email Here*' className=' h-[55px] w-[80%] border-boldtext border-[2px] rounded-md' />

            <div className=" w-[80%] text-center">
             
            <input type="submit"  value='Continue' className=' h-[50px] w-full bg-boldtext font-semibold text-white rounded-md hover:bg-textc' />
            
            <p>By continuing you agree to Accon Lab’s</p>
            <Link><span className=' text-textc underline'>Terms and Condition</span></Link>
            </div>
        </div>
       </form>
    </div>
  )
}

export default Login