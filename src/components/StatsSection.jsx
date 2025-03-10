import React from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="bg-black text-white flex justify-center items-center max-md:py-5  py-16">
      <div className=" bg-[#65666327] rounded-3xl w-[50vw] max-md:flex-none  max-md:py-5  py-10 px-6 flex flex-col md:flex-row justify-center items-center max-md:gap-5 gap-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="text-center"
          >
            <h2 className="text-5xl max-md:text-3xl font-bold">
              {isInView && <CountUp start={0} end={stat.value} duration={2} />}+
            </h2>
            <motion.div
              initial={{ width: "0%" }}
              animate={isInView ? { width: "50%" } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="h-1 bg-gray-400 my-2 mx-auto rounded-full"
            ></motion.div>
            <p className="text-gray-300 text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Stats Data
const stats = [
  { value: 70, label: "Clients Served" },
  { value: 100, label: "Projects Completed" },
  { value: 5, label: "Countries" },
];

export default StatsSection;
