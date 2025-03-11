import React from 'react'
import { motion } from "framer-motion";

const TestimonialsCards = ({ para, name, designation, image, highlighted = false }) => {
  return (
    <motion.div
      className={`relative px-10 max-md:px-2  flex rounded-lg overflow-hidden flex-col shadow-lg border bg-[#CDC9C9] text-black transition-all duration-300 ${
        highlighted ? '' : ''
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <div className=' border pt-5  bg-[#697565] mt-5 rounded-2xl text-balck  h-full flex  gap-5 items-center w-full py-3 px-5'>
        <img src={image} alt={name} className=" w-20  rounded-full object-cover" />
       <div className=''>
       <h3 className="text-xl ">{name}</h3>
       <h4 className="text-sm">{designation}</h4>
       </div>
      </div>
      <div className="p-4">
       
        <p className="mt-2 text-sm ">{para}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialsCards;
