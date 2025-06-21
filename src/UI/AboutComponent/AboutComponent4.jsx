import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-300">
    <button
      className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800 focus:outline-none"
      onClick={onClick}
    >
      <span>{title}</span>
      <FaPlus
        className={`transform transition-transform duration-300 ${
          isOpen ? 'rotate-45 text-blue-600' : 'rotate-0'
        }`}
      />
    </button>
    {isOpen && (
      <div className="pb-4 text-gray-600">
        {content}
      </div>
    )}
  </div>
);

const AboutComponent4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: 'What products does Accon Lab sell?',
      content: 'We offer lab equipment, scientific kits, chemistry and physics tools, and educational instruments for schools and professionals.'
    },
    {
      title: 'Do you offer nationwide delivery?',
      content: 'Yes! We deliver securely and promptly across all locations in the country.'
    },
    {
      title: 'Can schools and institutions request bulk purchases?',
      content: 'Absolutely. We offer bulk order discounts and custom quotes for institutions. Contact our support for assistance.'
    },
    {
      title: 'Are your products tested and reliable?',
      content: 'Yes. We ensure that every product is quality-checked for durability, accuracy, and performance before shipping.'
    }
  ];

  return (
    <div className='bg-sky-100'>
        <div className="max-w-2xl mx-auto px-4 py-8 ">
            <h1 className=' text-3xl font-semibold mb-2'>Frequently Asked Questions</h1>
            {items.map((item, index) => (
                <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    </div>
 
  );
};

export default AboutComponent4;