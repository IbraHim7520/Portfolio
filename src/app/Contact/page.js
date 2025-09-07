"use client"
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  
import Aos from 'aos';
const page = () => {
    useEffect( ()=>{
        Aos.init(
            {
                duration: 1000
            }
        )
    },[] )
    return (
        <div className='p-5 min-h-screen flex flex-col justify-center text-white space-y-12'>

  {/* Contact Me Section with Form */}
  <div className='w-full space-y-6 bg-dark p-6 rounded-xl shadow-lg' data-aos="fade-up">
    <h1 className='text-4xl lg:text-5xl font-bold text-accent-col border-l-4 border-primary pl-4 mb-4'>CONTACT ME</h1>
    
    <p className='text-base lg:text-lg leading-relaxed' data-aos="fade-right">
      I’m always open to discussing new projects, creative ideas, or opportunities. Fill out the form below and I’ll get back to you as soon as possible.
    </p>

    {/* Form */}
    <form className='w-full space-y-6 mt-6' data-aos="fade-up" data-aos-delay="100">
      
      {/* Name */}
      <div className='flex flex-col'>
        <label htmlFor='name' className='mb-2 font-medium text-accent'>Name</label>
        <input 
          type='text' 
          id='name' 
          placeholder='Your Name' 
          className='p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition'
        />
      </div>

      {/* Email */}
      <div className='flex flex-col'>
        <label htmlFor='email' className='mb-2 font-medium text-accent'>Email</label>
        <input 
          type='email' 
          id='email' 
          placeholder='your-email@example.com' 
          className='p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition'
        />
      </div>

      {/* Message */}
      <div className='flex flex-col'>
        <label htmlFor='message' className='mb-2 font-medium text-accent'>Message</label>
        <textarea 
          id='message' 
          rows='5' 
          placeholder='Your Message' 
          className='p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition resize-none'
        ></textarea>
      </div>

      {/* Submit Button */}
      <button 
        type='submit' 
        className='bg-accent hover:bg-accent/80 text-black font-semibold px-6 py-3 rounded-md transition-colors'
      >
        Send Message
      </button>

    </form>
  </div>

</div>

    );
};

export default page;