import React from 'react'
import ServiceCard from '../../components/ServiceCard'

import { MdOutlinePhoneAndroid } from "react-icons/md";
import { RiCodeSSlashFill } from "react-icons/ri";
import { MdManageHistory } from "react-icons/md";
import { BsStars } from "react-icons/bs";

const Discover = () => {
    const services = [
        {
          icon: <MdOutlinePhoneAndroid size={40} />,
          title: "General to Specialist Maintenance",
          description: "Providing comprehensive maintenance solutions from general upkeep to specialized services for all your needs.",
        },
        {
          icon: <RiCodeSSlashFill size={40} />,
          title: "MEP Designing",
          description: "Offering expert mechanical, electrical, and plumbing design services to ensure your projects meet the highest standards.",
        },
        {
          icon:<MdManageHistory size={40} />,
          title: "Projects Management",
          description: "Efficiently managing projects from conception to completion, ensuring timely delivery and quality results.",
        },
        {
            icon: <BsStars size={40}></BsStars>,
            title: "Fit Out & Refurbishment Work",
            description: "Transforming spaces with high-quality fit-out and refurbishment services tailored to your requirements.",
          },
          {
            icon:  <BsStars size={40}></BsStars>,
            title: "Kitchen Hoods & Duct Cleaning",
            description: "Ensuring a safe and clean kitchen environment with professional hood and duct cleaning services.",
          },
          {
            icon:<BsStars size={40}></BsStars>,
            title: "Energy Saving – Green Solution",
            description: "Implementing resource conservation, climate protection, and cost-saving measures tailored to client requirements.",
          },
        
      ];
  return (
    <div>
        <div className='flex justify-center items-center w-full  text-white px-6 md:px-12 py-10'>
      <div className='w-[50vw] max-md:w-full text-center flex flex-col justify-center items-center'>
        <h3 className='text-xl text-yellow-200 uppercase '>
        Discover
        </h3>
        <h1 className='text-5xl mt-4  max-md:text-3xl'>
        What We Excel In
           </h1>
           <p className='mt-5 text-[#6a6a6a] text-sm'>From comprehensive maintenance solutions to innovative MEP designs, efficient project management, and sustainable energy solutions, we excel in diverse fields. Our commitment is to deliver excellence, ensuring client satisfaction and maximizing value.</p>
      </div>
     
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
    </div>
  )
}

export default Discover