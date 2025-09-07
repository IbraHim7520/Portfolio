"use client"
import React, { useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';  
import Aos from 'aos';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
    const form = useRef();
    const [loading , setLoading] = useState(false)
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        setLoading(false);
        toast.success("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        setLoading(false);
        toast.error("Failed to send message, try again.");
        console.error(error.text);
      }
    );
  };

    return (
        <div className='p-5 flex flex-col justify-center text-white space-y-12'>
            <Toaster />
            {/* Contact Me Section with Form */}
            <div className='w-full space-y-6 bg-dark p-6 rounded-xl shadow-lg' data-aos="fade-up">
                <h1 className='text-4xl lg:text-5xl font-bold text-accent-col border-l-4 border-primary pl-4 mb-4'>CONTACT ME</h1>
                
                <p className='text-base lg:text-lg leading-relaxed' data-aos="fade-right">
                    I’m always open to discussing new projects, creative ideas, or opportunities. Fill out the form below and I’ll get back to you as soon as possible.
                </p>

                {/* Form */}
                <form ref={form} onSubmit={sendEmail} className='w-full space-y-6 mt-6' data-aos="fade-up" data-aos-delay="100">
                    
                    {/* Name */}
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='mb-2 font-medium text-accent'>Name</label>
                        <input 
                            type='text' 
                            name='from_name'
                            id='name' 
                            placeholder='Your Name' 
                            className='p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition'
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className='flex flex-col'>
                        <label htmlFor='email' className='mb-2 font-medium text-accent'>Email</label>
                        <input 
                            type='email' 
                            name='from_email'
                            id='email' 
                            placeholder='your-email@example.com' 
                            className='p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition'
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className='flex flex-col'>
                        <label htmlFor='message' className='mb-2 font-medium text-accent'>Message</label>
                        <textarea 
                            name='message'
                            id='message' 
                            rows='5' 
                            placeholder='Your Message' 
                            className='p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition resize-none'
                            required
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
