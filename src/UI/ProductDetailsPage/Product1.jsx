import React, { useRef, useState } from 'react'

function Product1() {

    const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
    const [hovering, setHovering] = useState(false);
    const imageRef = useRef(null);
  
    const handleMouseMove = (e) => {
      const rect = imageRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left; // X-coordinate relative to the image
      const y = e.clientY - rect.top; // Y-coordinate relative to the image
  
      setLensPosition({ x, y });
      setImageDimensions({ width: rect.width, height: rect.height });
    };
  
    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);
  
    const zoomLensStyle = {
      position: 'absolute',
      top: `${lensPosition.y - 50}px`,
      left: `${lensPosition.x - 50}px`,
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      border: '2px solid #fff',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      pointerEvents: 'none',
    };
  
    const zoomedImageStyle = {
      backgroundImage: `url("https://www.jamarahome.com/cdn/shop/files/CANYONHEADSET_BLUETOOTH_BTHS-3_BEIGE_90e6e33e-710d-4978-881e-aae6ecf6bb03.webp?v=1729760693&width=1024")`,
      backgroundPosition: `${(lensPosition.x / imageDimensions.width) * 100}% ${(lensPosition.y / imageDimensions.height) * 100}%`,
      backgroundSize: '230%', // Scale the image for zoom
      width: '100%',
      height: '100%',
      position:'absolute',
      top:'0',
      backgroundColor:'pink'
    };
  
  return (
    <div>
         <div className="w-full flex justify-center mt-[20px] bg-[]">
      <div className="min-h-[400px] w-[90%] lg:w-[80%]  bg-[] grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Container */}
        <div
          className="h-[400px] bg-slate-300 rounded-[20px] relative"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://www.jamarahome.com/cdn/shop/files/CANYONHEADSET_BLUETOOTH_BTHS-3_BEIGE_90e6e33e-710d-4978-881e-aae6ecf6bb03.webp?v=1729760693&width=1024"
            ref={imageRef}
            alt="Product"
            className="w-full h-full"
          />
          {/* Lens */}
          {hovering && <div  style={zoomLensStyle}></div>}
        </div>

        {/* Mirror Container */}
        <div className="h-[400px] bg-[] rounded-[20px] overflow-hidden flex items-center relative">
          {hovering && <div  style={zoomedImageStyle}></div>}
          
          <div className=" h-[380px] w-[80%] bg-[] space-y-10">
            <p className=' text-[25px] font-bold'>CANYON HEADSET/ BLUETOOTH /BTHS-3/ BEIGE</p>

            <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
            <p className=' font-bold'>#22,999.00</p>

            {/* <CustomBtn
            label='ADD TO CART'
            className=' h-[50px] w-[150px] bg-btncolor'
            /> */}
            <button  className=' h-[50px] w-[150px] bg-btncolor'>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>





    <div className=' w-full flex justify-center  mt-[100px]'>
        <div className=" min-h-[450px] w-[90%] lg:w-[80%] bg-[] grid grid-cols-1 lg:grid-cols-[50%,40%] justify-between gap-4">
            <div className="min-h-[450px] bg-[] space-y-5 pt-3 ">
                <h1 className=' font-bold text-[25px]'>FEATURES</h1>
                <p className=' md:text-[18px]'>
                    Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                </p>

                <p>
                    The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                </p>
            </div>
            <div className="h-[450px] bg-[] space-y-8 pt-3">
                <h1 className=' uppercase font-bold'>in the box</h1>

                <div className=" space-y-4">
                    <p><span className=' text-btncolor mr-2 font-bold'>1X</span> Headphone Unit</p>
                    <p><span className=' text-btncolor mr-2 font-bold'>2X</span> Replacement Earcups</p>
                    <p><span className=' text-btncolor mr-2 font-bold'>1X</span> User Manual</p>
                    <p><span className=' text-btncolor mr-2 font-bold'>1X</span> 3.5mm 5m Audio Cable</p>
                    <p><span className=' text-btncolor mr-2 font-bold'>1X</span> Travel bag</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Product1