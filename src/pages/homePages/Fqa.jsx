import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlinePlus } from "react-icons/hi2";

const faqData = [
  { question: "What is typically required in a building design project?", answer: "A building design project typically requires a range of technical services including electrical, mechanical, plumbing, fire protection, IT, audio-visual, and security system design and implementation." },
  { question: "How do technical services impact the overall cost and timeline of a construction project?", answer: "Technical services can significantly impact the cost and timeline of a construction project as they involve complex systems that require coordination, planning, and installation, which can affect the overall project schedule and budget." },
  { question: "What is the context of building design and construction?", answer: "Building design and construction refers to the process of creating structures that meet specific functional and aesthetic requirements, often including aspects such as safety, sustainability, and accessibility." },
];

const Fqa = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[70vw] max-md:w-full mx-auto px-6 py-12">
          <div className='flex justify-center items-center w-full text-white px-6 md:px-12 py-10'>
      <div className='w-[50vw] max-md:w-full text-center flex flex-col justify-center items-center'>
        <h3 className='text-xl text-yellow-200 uppercase '>
        FAQ
        </h3>
        <h1 className='text-5xl mt-4  max-md:text-3xl'>
        Frequently Asked Questions
           </h1>
           <p className='mt-5 text-[#6a6a6a] text-sm'>Get the information you need with our FAQ, designed to address your most frequent questions.</p>
      </div>
     
    </div>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b text-white border-gray-300 py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold"
              >
                <HiOutlinePlus />

              </motion.span>
            </div>
            {openIndex === index && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 text-gray-600"
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fqa;
