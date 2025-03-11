import React from 'react'
import StatsSection from '../../components/StatsSection'

const Commitment = () => {
  return (
    <div>
        <div>
        <div className='flex justify-center items-center w-full  text-white px-6 md:px-12 py-10'>
      <div className='w-[50vw] max-md:w-full text-center flex flex-col justify-center items-center'>
        <h3 className='text-xl text-yellow-200 uppercase py-5 '>
        Our Commitment
        </h3>
        <h1 className='text-5xl  '>
        Dedicated to Excellence
           </h1>
           <p className='mt-10 text-xl text-[#6a6a6a]'>With a dedication to excellence and client satisfaction, we have proudly served over 70 clients, completed more than 100 projects, and extended our expertise across 5+ countries. Our mission transcends business; it's about bringing smiles and deep satisfaction to our clients. We align with your vision, valuing your time and investment to the fullest.</p>
      </div>
     
    </div>
        </div>
        <div>
            <StatsSection></StatsSection>
            
        </div>
    </div>
  )
}

export default Commitment