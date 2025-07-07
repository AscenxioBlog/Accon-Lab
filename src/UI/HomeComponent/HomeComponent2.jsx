// HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#ffffff] md:py-8 px-4 lg:px-16">
      <div className="flex md:flex-col lg:flex-row gap-6 md:min-h-[40vh] lg:min-h-[70vh] h-[30vh] md:items-center lg:items-start ">
        <div className=' flex-1 flex-col h-[20vh] md:h-[80vh] shadow-md text-black w-[100%]'>
          <div className='  md:h-[85%] h-[30vh] mt-2 md:mt-0'>
              <img src="/images/Slide 1.png" className=' h-full md:rounded-tl-md md:rounded-tr-md w-full md:object-left object-fill'/>
          </div>
          <div className=' md:h-[15%] h-[30%] bg-white rounded-bl-md rounded-br-md hidden md:block'>
              <ol className=' flex justify-around h-full items-center'>
                  <li>Education</li>
                  <li>Surgical</li>
                  <li>Biolody</li>
                  <li>Chemistry</li>
                  <li>Physics</li>
              </ol>
          </div>
        </div>  

        {/* Right Side Cards */}
        <div className="lg:w-[15%] lg:grid gap-4 hidden ">
          {[
            { title: 'Hospital Store', img: 'hospital.jpeg' },
            { title: 'Chemistry Store', img: 'chemistry.jpeg' },
            { title: 'Best Biology Products', img: 'biology.jpeg' },
          ].map((card, index) => (
            <div
              key={index}
              className=" shadow-md rounded overflow-hidden text-center hover:shadow-lg transition"
            >
              <img src={card.img} alt={card.title} className="w-full h-[90px] object-cover" />
              <p className="py-2 font-semibold text-sm text-gray-500">{card.title}</p>
              <p className="text-blue-600 text-xs mb-2">SHOP NOW</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
