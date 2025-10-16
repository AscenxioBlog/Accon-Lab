import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FcCellPhone } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import Button from "../../ReusableComponent/Button";
import { useState } from "react";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

import { PiBuildingOffice } from "react-icons/pi";
// import SweetAlert from 'sweetalert-react';

function ContactComponent2() {
  let [loading, setLoading] = useState(true);
  let [mapurl, setMapurl] = useState("");

  useEffect(() => {
    let mapp =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth";

    setMapurl(mapp);
    setLoading(false);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_gemtnqr",
        "template_9us6h0d",
        formData,
        "POzmPkkWklvfEh5IY"
      )
      .then((response) => {
        alert("Message sent successfully!");
        //         <SweetAlert
        //     show={this.state.show}
        //     title="Demo"
        //     text="SweetAlert in React"
        //     onConfirm={() => this.setState({ show: false })}
        //   />

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send message. Try again!");
      });
  };

  return (
    <div className="min-h-[300px] w-full bg-bodybg flex flex-col md:flex-row px-[30px] py-[30px] gap-3">
      <div className=" bg-white p-7 w-full md:w-[50%] rounded-md ">
        <h4 className=" text-[14px] text-sky-500">Get In Touch</h4>
        <h1 className=" text-3xl font-semibold text-black">Reach Out To Us</h1>
        <p className=" text-[13px] text-gray-500">
          Have questions or feedback? We're here to help. Send us a message and
          we'll respond as soon as possible.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-2  border-t pt-7 border-gray-300 mt-7 min-h-[50vh] md:grid-rows-[1fr_1fr_3fr] bg-yellow-00">
          <div className=" col-start-1 col-end-5 md:col-end-3 flex flex-col items-start gap-2">
            <label className=" font-medium text-black">First Name</label>
            <input
              type="text"
              placeholder=""
              name="firstName"
              className=" p-2 w-full bg-gray-100 rounded-sm placeholder:text-black"
            />
          </div>
          <div className=" col-start-1 md:col-start-3 col-end-5 flex flex-col items-start gap-2">
            <label className=" font-medium text-black">Last Name</label>
            <input
              type="text"
              placeholder=""
              name="lastName"
              className=" p-2 w-full bg-gray-100 rounded-sm placeholder:text-black"
            />
          </div>
          <div className=" col-start-1 col-end-5 flex flex-col items-start gap-2 mt-2">
            <label className=" font-medium text-black">Email</label>
            <input
              type="email"
              placeholder=""
              name="email"
              className=" p-2 w-full bg-gray-100 rounded-sm placeholder:text-black"
            />
          </div>
          <div className=" col-start-1 col-end-5 flex flex-col items-start gap-2 mt-3">
            <label className=" font-medium text-black">Message</label>
            <textarea
              rows=""
              placeholder=""
              name="message"
              className=" p-2 w-full h-full bg-gray-100 rounded-sm placeholder:text-black"
            ></textarea>
          </div>
        </div>
      </div>

      <div className=" w-full md:w-[50%] p-[10px] box-border bg-white rounded-md">
        <div className=" h-[47%] bg-red-200 rounded-md">
           <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.7368328625536!2d3.2750539458122048!3d6.475497667329935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b88b658e5247f%3A0x9a048fa515cbb4d6!2s23%20Road%2C%20W%20Cl%2C%20Festac%20Town%2C%20Festac%201%20102102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1749339858446!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <div className=" h-[50%] bg-white rounded-md p-5 mt-3 flex flex-col gap-3">
          <section className=" flex p-3 bg-gray-100 rounded-md gap-3">
            <span className=" p-2 bg-gray-200 rounded-full h-[40px] w-[40px] inline-grid place-items-center text-[1.3rem] text-sky-500">
              <MdOutlineEmail />
            </span>
            <div>
              <p className=" font-semibold text-black">Email</p>
              <a
                href="mailto:offiahchinyerestephanie@gmail.com"
                className=" text-[14px] text-black"
              >
                offiahchinyerestephanie@gmail.com
              </a>
            </div>
          </section>
          <section className=" flex p-3 bg-gray-100 rounded-md gap-3">
            <span className=" p-2 bg-gray-200 rounded-full h-[40px] w-[40px] inline-grid place-items-center text-[1.3rem] text-sky-500">
              <MdOutlineLocalPhone />
            </span>
            <div>
              <p className=" font-semibold text-black">Phone</p>
              <a href="tel:+2348037428180" className=" text-[14px]">
                +2348037428180
              </a>
            </div>
          </section>
          <section className=" flex items-center p-3 bg-gray-100 rounded-md gap-3">
            <span className=" p-2 bg-gray-200 rounded-full h-[40px] w-[40px] inline-grid place-items-center text-[1.3rem] text-sky-500">
              <PiBuildingOffice />
            </span>
            <div>
              <p className=" font-semibold text-black">Address</p>
              <p className=" text-black">23 Road Market Opposite W-close Festac Town</p>
              <p className=" text-black">Maza Maza ...</p>
            </div>
          </section>
        </div>
      </div>

      {/* <div className='p-[10px] text-black md:p-0'>
                <form action="" onSubmit={handleSubmit}>
                    <h1  className='font-custom font-bold text-boldtext  text-[1.2rem]  mt-4'>Send us a Message:</h1>
                    <input type="text" name='name' placeholder='  Enter your Name'value={formData.name} onChange={handleChange}
                    className='h-[40px]  w-full md:w-[90%] lg:w-[40%] mt-10 active:outline-blue-700 hover:outline-blue-700'required /> <br />
                    <input type="text" placeholder='  Enter your number ' className='h-[40px]  w-full md:w-[90%] mt-8 lg:w-[40%] lg:ml-10 md:mt-8 lg:mt-10 active:outline-blue-700 hover:outline-blue-700'required />
                    <input type="number" name='phone' placeholder='  Enter your number ' value={formData.phone || ""} onChange={handleChange} className='h-[40px]  w-full md:w-[90%] mt-8 lg:w-[40%] md:mt-8 lg:mt-10 active:outline-blue-700 hover:outline-blue-700' required /> 
                    <input type="text" name='email' placeholder='  Enter your email 'value={formData.email || ""} onChange={handleChange} className='h-[40px] w-full  md:w-[90%] mt-8 lg:w-[40%] lg:ml-10 md:mt-8 lg:mt-10 active:outline-blue-700 hover:outline-blue-700' />
                    <textarea name="message" id="" className='w-full md:w-[90%]  lg:w-[84%] mt-10 h-[120px] active:outline-blue-700 hover:outline-blue-700' value={formData.message} onChange={handleChange}></textarea>
                    <Button
                     className='btn  bg-textc text-bodybg hover:bg-textc hover:bg-opacity-75 mt-8'
                     type ='submit'
                     label = ' SEND MESSAGE'
                    
                    />

                </form>
                <section className='mt-10 p-[10px]'>
                    {loading?(
                        <p>Loading Map.....</p>
                    ):(
                        <iframe src={mapurl}  style={{ width: "100%", height: "300px" }} frameborder="0"></iframe>
                    )}

                </section>




            </div> */}
    </div>
  );
}

export default ContactComponent2;
