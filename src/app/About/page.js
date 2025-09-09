"use client"
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';  
import Aos from 'aos';

const page = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div className='p-5 min-h-screen flex flex-col justify-center text-primary-col space-y-12'>

            {/* About Me Section */}
            <div className='w-full space-y-6 bg-dark p-6 rounded-xl shadow-lg border border-divider-col' data-aos="fade-up">
                <h1 className='text-4xl lg:text-4xl font-bold text-accent-col border-l-4 border-accent-col pl-4 mb-4'>ABOUT ME</h1>
                <p className='text-base lg:text-lg leading-relaxed'>
                    I’m <span className='font-semibold text-accent-col'>Md Ibrahim</span>, a junior frontend developer with knowledge of the MERN stack. I have a passion for creating responsive, user-friendly web applications and enjoy learning modern technologies to improve my craft. My journey in development started with curiosity about how websites work, which has grown into a commitment to building meaningful digital experiences.
                </p>
                <p className='text-base lg:text-lg leading-relaxed text-secondary-col'>
                    Looking ahead, my career goal is to grow as a software engineer and expand into full-stack development. I’m eager to take on opportunities where I can apply my skills, collaborate with others, and contribute to impactful projects that solve real-world problems.
                </p>
            </div>

            {/* Problem Solving Section */}
            <div className='w-full space-y-6 bg-dark p-6 rounded-xl shadow-lg border border-divider-col' data-aos="fade-up" data-aos-delay="100">
                <h1 className='text-4xl lg:text-4xl font-bold text-accent-col border-l-4 border-accent-col pl-4 mb-4'>PROBLEM SOLVING</h1>
                    <p className='text-base lg:text-lg leading-relaxed text-primary-col'>
        I actively practice problem solving on platforms like <span className='font-semibold text-accent-col'>Codeforces</span> using Python. 
        Python's clean syntax and fast implementation allow me to focus on logical thinking and algorithm design rather than boilerplate code. 
        The problem-solving mindset I develop through these challenges translates directly into writing efficient, optimized code 
        for real-world web applications using JavaScript and the MERN stack. This continuous practice strengthens both my analytical 
        and practical development skills.
    </p>
            </div>

            {/* Education Section */}
            <div className='w-full space-y-6 bg-dark p-6 rounded-xl shadow-lg border border-divider-col' data-aos="fade-up" data-aos-delay="200">
                <h1 className='text-4xl lg:text-4xl font-bold text-accent-col border-l-4 border-accent-col pl-4 mb-4'>EDUCATION</h1>
                <p className='text-base lg:text-lg leading-relaxed text-primary-col'>
                    I am currently pursuing a Bachelor’s degree in Computer Science, where I am strengthening my programming skills and gaining practical experience in web development. Through my studies and personal projects, I have developed a foundation in frontend technologies like React and have begun exploring backend concepts with the MERN stack.
                </p>
            </div>

        </div>
    );
};

export default page;
