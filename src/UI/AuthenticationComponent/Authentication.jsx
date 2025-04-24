import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login';

function Authentication() {

  return (
    <div className=' h-[100vh] w-full  bg-[url(assets/Frame2.png)] bg-contain  '>
      <Login/>
    </div>
  )
}

export default Authentication