import React from 'react'
import ShopComponent1 from './ShopComponent1'
import ShopComponent2 from './ShopComponent2'
import ShopData from './ShopData'

function ShopComponent() {
  return (
    <div className=' bg-white mt-[120px]'>
      <ShopComponent1/>
      {/* <ShopComponent2/> */}
      <ShopData/>
    </div>
  )
}

export default ShopComponent