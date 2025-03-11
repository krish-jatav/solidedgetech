import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div>
         <footer className="bg-[#908e8e1d] rounded-t-[5vw]  text-[#7b7b7bf4] py-10">
        <div className="container mx-auto max-md:px-5 px-20">
          {/* Call to Action Section */}
          <div className=" text-center flex flex-col justify-center items-center gap-10">
            <div className=" mb-4 md:mb-0">
              <h2 className="text-xl md:text-2xl font-bold text-[#bebaba]">Let's Start Your Next Project Together!</h2>
              <p className="text-sm md:text-base">Reach out to us and discover how we can help bring your vision to life.</p>
            </div>
            <button className="bg-[#cdc9c9] w-fit rounded-3xl border-black border px-6 py-2   flex  justify-center items-center gap-4  text-black">
              Contact Us! <span> <GoArrowUpRight></GoArrowUpRight> </span>
            </button>
          </div>
  
          {/* Footer Links */}
          <div className=" border-t mt-10 max-md:flex-col  flex pt-5 justify-center items-start    gap-10 ">
            <div className=' '>
              <h3 className="text-lg  text-[#fffffff4] ">Solid Edge Tech</h3>
              <p className="text-sm mt-2 ">
                © 2024 Solid Edge Tech. Dedicated to delivering <br /> excellence in engineering solutions. Your vision, <br /> our expertise. Let's build the future together.
              </p>
            </div>
           <div className=' flex max-md:flex gap-10'>
           <div className=' '>
              <h3 className="text-lg  text-white">Quick Links</h3>
              <ul className="mt-2 space-y-1">
                <li><Link className="hover:text-white">Home</Link></li>
                <li><Link className="hover:text-white">About</Link></li>
                <li><Link className="hover:text-white">Services</Link></li>
                <li><Link className="hover:text-white">Statistics</Link></li>
              </ul>
              
            
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Resources</h3>
              <ul className="mt-2 space-y-1">
                <li><Link className="hover:text-white">Testimonials</Link></li>
                <li><Link className="hover:text-white">FAQs</Link></li>
              </ul>
            </div>
           </div>
          </div>
          
          {/* Powered By */}
          <div className=" md:text-center text-gray-400 text-sm mt-6">
            Powered By <Link className="text-blue-500 hover:underline">WebSeeder Technologies</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
  