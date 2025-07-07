import React from 'react'
import ContactComponent1 from './ContactComponent1'
import ContactComponent2 from './ContactComponent2'

function ContactComponent() {
  return (
    <div className=' bg-white overflow-x-hidden mt-[120px]'>
      <ContactComponent1/>
      <ContactComponent2/>
    </div>
  )
}

export default ContactComponent