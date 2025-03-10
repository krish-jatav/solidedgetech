import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className=" max-md:px-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
    >
      <div className="min-h-[15vw] min-w-[25vw] bg-slate-50 p-8 rounded-lg shadow-md flex flex-col justify-between">
        <p className="text-lg">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Link className="">
            <motion.svg
              className="star-arrow-icon"
              width="55"
              height="55"
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 55 55"
              whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            >
             {icon}
            </motion.svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
