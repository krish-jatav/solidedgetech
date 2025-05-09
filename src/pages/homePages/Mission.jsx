import React from 'react';
import MissionCards from '../../components/MissionCards';

const Mission = () => {
    const cards = [
        {
          title: "Mission",
          description: "Our mission is to deliver exceptional service to our clients with integrity and professionalism.",
          link: "#"
        },
        {
          title: "Vision",
          description: "Our vision is to be a leader in our industry, driving innovation and sustainability.",
          link: "#"
        },
        {
          title: "Values",
          description: "Our values include customer satisfaction, teamwork, sustainability, and continuous improvement.",
          link: "#"
        }
      ];
  return (
   <div className=''>
     <div className=' w-full  text-white px-6 md:px-12 py-10'>
      <div className=' w-[70vw] max-md:w-full'>
        <h1 className='text-3xl md:text-5xl py-5 '>
          Welcome to Solid Edge Tech
        </h1>
        <p className='text-[#6a6a6a] text-base md:text-lg'>
          At Solid Edge Tech, we are passionate about delivering innovative engineering solutions tailored to meet your needs. With a commitment to excellence and a focus on client satisfaction, our team brings expertise and dedication to every project. We strive to turn your vision into reality, ensuring every detail is meticulously handled. Join us on a journey where technology meets precision and your goals are our priority.
        </p>
      </div>
     
    </div>
     <div className=' max-md:px-5 px-12 text-3xl text-white'>
     <h1 className='  '> Our Mission, Vision & Values</h1>
      </div>
      <div className=" mt-10 flex flex-col md:flex-row gap-6 justify-center items-center  p-6">
      {cards.map((card, index) => (
        <MissionCards key={index} {...card}></MissionCards>
      ))}
        
      </div>
   </div>
  );
};

export default Mission;