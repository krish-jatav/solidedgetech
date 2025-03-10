import React from 'react'

const Specialisations = () => {
  return (
    <div>
        <div className='flex justify-center items-center w-full bg-black text-white px-6 md:px-12 py-10'>
      <div className='w-[50vw] max-md:w-full text-center flex flex-col justify-center items-center'>
        <h3 className='text-xl text-yellow-200 uppercase '>
        Specialisations
        </h3>
        <h1 className='text-5xl mt-4  max-md:text-3xl'>
        Check our Skills
           </h1>
           <p className='mt-5 text-[#6a6a6a] text-sm'>Our greatest strength lies in our team, our timely delivery of projects and our client-focussed flexible work approach</p>
      </div>
     
    </div>
    <div>
    <div className="flex flex-col md:flex-row items-center justify-center  text-white  ">
      {/* Left Side Illustration */}
      <div className="w-full md:w-1/2 flex  max-md:p-5 justify-center items-center py-10">
        <img 
          src="benefit.png" 
          alt="Illustration" 
          className="" 
        />
      </div>
      
      {/* Right Side Content */}
      <div className="w-full md:w-1/2 p-10 max-md:p-5 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl  font-bold">WHAT WE KNOW</h2>
        <p className="text-[#6a6a6a] mt-4  mb-6 text-sm md:text-base">
          Discover our specialized services crafted to address your unique needs. Our expertise and dedication ensure top-quality results and your complete satisfaction in every project.
        </p>
        
        <div className="space-y-10 text-3xl max-md:text-lg max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
          <div className="flex items-center max-md:flex max-md:flex-col p-5 w-fit rounded-2xl bg-[#4e286143]">
            <span className="text-[#35ADC6]">85%</span>
            <span className="ml-3">Energy Saving – Green Solution</span>
          </div>
          <div className="flex items-center max-md:flex max-md:flex-col p-5 w-fit rounded-2xl bg-[#4e286143]">
            <span className="text-[#35ADC6]  ">80%</span>
            <span className="ml-3">Projects Management</span>
          </div>
          <div className="flex items-center max-md:flex max-md:flex-col p-5 w-fit rounded-2xl bg-[#4e286143]">
            <span className="text-[#35ADC6]  ">95%</span>
            <span className="ml-3">General to Specialist Maintenance</span>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Specialisations