import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MissionCards = ({ title, description, link }) => {
  return (
    <motion.div
      className="px-10 max-md:px-2"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
    >
      <div className="min-h-[15vw] min-w-[25vw]  bg-slate-50 p-8 rounded-lg flex flex-col justify-between">
        <p className="text-xl">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <h2 className="text-2xl font-extrabold">{title}</h2>
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
              <path
                className="star-arrow-icon__star"
                fill="#D9D813"
                fillRule="evenodd"
                d="M13.4 43.9c-.3-1.1-1.2-2-2.3-2.3L0 38.9l5.9-9.8c.6-1 .6-2.2 0-3.2L2 19.5l-2-3.4 11.1-2.7c1.1-.3 2-1.2 2.3-2.3L16.1 0l9.8 5.9c1 .6 2.2.6 3.2 0L38.9 0l2.7 11.1c.3 1.1 1.2 2 2.3 2.3L55 16.1l-5.9 9.8c-.6 1-.6 2.2 0 3.2l5.9 9.8-11.1 2.7c-1.1.3-2 1.2-2.3 2.3L38.9 55l-9.8-5.9c-1-.6-2.2-.6-3.2 0L16.1 55l-2.7-11.1z"
                clipRule="evenodd"
              ></path>
              <path
                className="star-arrow-icon__arrow"
                d="m32.6 23-1 1 3.2 3.3H18v1.4h16.8L31.6 32l1 1 5-5z"
              ></path>
            </motion.svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionCards;
