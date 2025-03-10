import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className='h-screen w-full bg-black   flex items-center justify-center px-6 md:px-12'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        
        <div className='flex mt-10 flex-col items-center md:items-start text-center md:text-left'>
          <h1 className=' text-[#FFCD69] max-md:text-2xl  text-6xl'>
            We Build Relationships <br/> From What We Do
          </h1>
          <p className='mt-4 text-yellow-50   text-lg max-w-md'>
            Clients are our assets, and we specialize in protecting their interests and trust.
          </p>
          <button className=" bg-white flex justify-center items-center text-xl mt-5 text-black hover:bg-blue-800 px-5 py-2 rounded-full">
          Get in Touch <span> <GoArrowUpRight></GoArrowUpRight> </span>
        </button>
        </div>

        <div className='mt-8 md:mt-0'>
          <img className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg' src='Banner.png' alt='Hero Image' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
