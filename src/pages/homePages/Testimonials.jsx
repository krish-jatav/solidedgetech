import React from 'react'
import TestimonialsCards from '../../components/TestimonialsCards'

const Testimonials = () => {
    const images = [
        "https://www.solidedgetech.com/_next/static/media/user1.71c84e11.jpg", 
        "https://www.solidedgetech.com/_next/static/media/user2.33ea1ca7.jpg",
        "https://www.solidedgetech.com/_next/static/media/user2.33ea1ca7.jpg"
        
      ];
      
  return (
    <div className='py-10'>
         <div className='flex justify-center items-center w-full bg-black text-white px-6 md:px-12 py-10'>
      <div className='w-[50vw] max-md:w-full text-center flex flex-col justify-center items-center'>
        <h3 className='text-xl text-yellow-200 uppercase '>
        Testimonials
        </h3>
        <h1 className='text-5xl mt-4  max-md:text-3xl'>
        Here's what our customers said
           </h1>
           <p className='mt-5 text-[#6a6a6a] text-sm'>Testimonials is a great way to increase the brand trust and awareness. Use this section to highlight your popular customers.</p>
      </div>
     
    </div>
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 bg-black">
    {images.map((image, index) => (
        <TestimonialsCards key={index} image={image} highlighted={index === 1} />
      ))}
    </div>
    </div>
    </div>
  )
}

export default Testimonials