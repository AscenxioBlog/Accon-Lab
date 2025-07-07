import React from 'react'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";

function AboutComponent2() {
  const qualities = [
    {
      icon:<IoShieldCheckmarkSharp /> ,
      header: "Trusted Quality",
      description: "We are committed to delivering high-quality products that meet the highest standards of excellence."
    },
     {
      icon: <CiDeliveryTruck /> ,
      header: "Nationwide Delivery",
      description: "We offer nationwide delivery to ensure that our products reach you wherever you are."
    },
    {
      icon: <MdOutlineSentimentSatisfiedAlt />,
      header: "Customer Satisfaction",
      description: "Our customers are our top priority, and we strive to exceed their expectations with every purchase."
    },
    {
      icon: <TbCurrencyNaira />,
      header: "Affordable Prices",
      description: "We believe in providing value for money, offering competitive prices without compromising on quality."
    }

  ]

  return (
    <div>
      <section className=' bg-sky-100 py-10'>
        <div className=' max-w-6xl mx-auto px-4'>
          <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {qualities.map((quality, index) => (
              <div key={index} className=' bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                <div className=' text-sky-500 text-[3rem] mb-4 flex justify-center'>{quality.icon}</div>
                <h3 className=' text-xl font-semibold mb-2 text-center text-black'>{quality.header}</h3>
                <p className=' text-gray-700 text-center text-[14px]'>{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutComponent2