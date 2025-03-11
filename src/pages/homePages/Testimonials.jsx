import React from 'react';
import TestimonialsCards from '../../components/TestimonialsCards';

const Testimonials = () => {
  const testimonialsData = [
    {
      image: "https://www.solidedgetech.com/_next/static/media/user1.71c84e11.jpg",
      name: "Samantha Lee",
      designation: "operations manager",
      para: "Their specialist maintenance services boosted our facility's efficiency. Excellent attention to detail.",
    },
    {
      image: "https://www.solidedgetech.com/_next/static/media/user2.33ea1ca7.jpg",
      name: "Daniel Clark",
      designation: "senior engineer",
      para: "The MEP designing services were innovative and improved our project's performance and sustainability.",
    },
    {
      image: "https://www.solidedgetech.com/_next/static/media/user3.b804ab99.jpg",
      name: "Alex Martinez",
      designation: "head chef",
      para: "Their duct cleaning services improved our kitchen's air quality. Thorough and professional work.",
    },
  ];

  return (
    <div className='py-10  text-white'>
      <div className='flex justify-center items-center w-full px-6 md:px-12 py-10'>
        <div className='w-[50vw] max-md:w-full text-center flex flex-col justify-center items-center'>
          <h3 className='text-xl text-yellow-200 uppercase'>Testimonials</h3>
          <h1 className='text-5xl mt-4 max-md:text-3xl'>Here's what our customers said</h1>
          <p className='mt-5 text-gray-400 text-sm'>
            Testimonials are a great way to increase brand trust and awareness. Use this section to highlight feedback from your customers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialsCards
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            designation={testimonial.designation}
            para={testimonial.para}
            highlighted={index === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
