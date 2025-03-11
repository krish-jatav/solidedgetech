import React from 'react'
import { motion } from "framer-motion";
const TestimonialsCards = ({ image, highlighted = false }) => {
  return (
    <div>
         <motion.div
      className="relative flex  rounded-lg overflow-hidden shadow-lg border bg-black text-white transition-all duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <div className=' px-5 py-10 '>
      <img src={image} alt="Card" className="w-10 h-10  rounded-full  object-cover overflow-hidden" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-yellow-400">yahoo!</h3>
        <p className="mt-2 text-sm">“BusyKid will help teach your child how to invest.”</p>
      </div>
    </motion.div>
    </div>
  )
}

export default TestimonialsCards