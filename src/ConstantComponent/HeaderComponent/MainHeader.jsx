import React from 'react'
import HeaderComponent from './HeaderComponent'
import HeaderUnder from './HeaderUnder'
import MobileHeader from './MobileHeader'

function MainHeader() {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md '>
        <HeaderComponent/>
        <HeaderUnder/>
    </div>
  )
}

export default MainHeader