import React from 'react'

function FooterComponent1() {
  return (
    <div>
        <footer className="footer  bg-boldtext text-bodybg md:grid-rows-3  md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 p-10">
            <nav>
                <h6 className="footer-title uppercase">feel free to contact us</h6>
                <a className="link link-hover font-custom font-bold  text-[2.1rem]  mt-9">+234 901 699 0551</a>
                <a className="link link-hover  mt-">chideracollins24@gmail.com</a>
            
            </nav>
            <nav>
                <h6 className="footer-title font-custom font-bold text-[1.4rem]">Career</h6>
            
                <p className='font-custom font-medium'>
                Nam eget dui vel quam sodales <br />
                semper quis porttitor
                tortor.
                Vivamus quis 
                ex nulla ... <br />
                Nam eget dui vel quam
                sodales semper <br />
                quis porttitor tortor
                </p>
            </nav>
            <nav className='capitalie font-custom text-[1.1rem] font-medium'>
                <h6 className="footer-title font-custom font-bold text-[1.4rem] capitalize">customer service</h6>
                <a className="link link-hover">orders</a>
                <a className="link link-hover">downloads</a>
                <a className="link link-hover">shipping & returns</a>
                <a className="link link-hover">addresses</a>
                <a className="link link-hover">account details</a>
                <a className="link link-hover">logout</a>
                <a className="link link-hover">lost password</a>
                <a className="link link-hover">privacy</a>
                <a className="link link-hover">policy</a>
                <a className="link link-hover">carrers</a>
                <a className="link link-hover">support</a>

            </nav>
            <nav className='font-custom font-medium text-[1.1rem] capitalize'>
                <h6 className="footer-title font-bold text-[1.4rem]  capitalize">useful links</h6>
                <a className="link link-hover">contact us</a>
                <a className="link link-hover">help & aboutu</a>
                <a className="link link-hover">shopping & returns</a>
                <a className="link link-hover">refund policy</a>
                <a className="link link-hover">about us</a>
                <a className="link link-hover">ervices</a>
            </nav>
            <nav className='font-custom text-[1.1rem] capitalize'>
                <h6 className="footer-title font-bold text-[1.4rem]">Opening hours</h6>
                <a className="link link-hover">office hours: 8AM-11PM</a>
                <a className="link link-hover">office hours: 9AM - 11PM</a>
                <a className="link link-hover">sunday - weekend day</a>
            </nav>
            <nav className='font-custom font-medium text-[1.1rem]'>
                <h6 className="footer-title font-bold text-[1.4rem]">contact info</h6>
                <a className="link link-hover">
                    Ta-134/A, Gulshan Badda
                    (+234)901 1699 0551
                </a>
                 
                <a className="link link-hover">
                    support@wilconlab.com
                </a>
                <a className="link link-hover">
                    Sunday - Wekend Day
                </a>
                <a className="link link-hover">
                    Office Hours: 8AM - 11PM
                </a>
              
            </nav>
       </footer>
       <div className="bg-boldtext text-center text-bodybg py-4">
        <div>
        <p className="font-custom text-[1rem] md:text-[1.2rem]">
          &copy; {new Date().getFullYear()} WILCON LAB. All Rights Reserved.
        </p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default FooterComponent1