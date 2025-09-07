import Image from 'next/image';
import React from 'react';
import profile from "../../../public/profile.jpg"
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const Sidebar = () => {
    return (
       
            <div className='w-full text-primary-col flex flex-col justify-between items-center'>
                <div className='w-full p-5 flex flex-col items-center '>
                    <div className="avatar">
                        <div className="ring-gray-700 ring-offset-base-100 max-w-60 rounded-full ring-2 ring-offset-2">
                            <Image className='grayscale' alt='Profile' src={profile}></Image>
                        </div>
                    </div>
                    <div className='w-full mt-5 text-white  text-center'>
                        <h1 className='font-bold text-4xl text-accent-col lg:text-4xl text-center md:text-3xl'>MD IBRAHIM</h1>
                        <p className='font-medium text-center mt-1  '>Junior <span className='text-accent2-col'>Frontend</span> Developer</p>
                    </div>
                    <hr className='w-full text-gray-500 mt-2'></hr>

                    <div className='w-full mt-7'>
                        <h1 className='text-xl font-bold shadow '>Socials</h1>
                        <ul className='mt-2'>
                            <li className='flex justify-start items-center gap-2'> <FaLinkedin /> Linkedin</li>
                            <li className='flex justify-start items-center gap-2'> <FaGithub /> Github</li>
                        </ul>
                    </div>

                    <div className='w-full mt-5'>
                        <h1 className='text-xl font-bold shadow '>Contact</h1>
                        <ul className='mt-2'>
                            <li className='flex justify-start items-center gap-2'><MdEmail /> Email</li>
                            <li className='flex justify-start items-center gap-2'> <FaWhatsapp /> WhatsApp</li>
                        </ul>
                    </div>
                    
                </div>


<footer className="footer sm:footer-horizontal footer-center bg-gray-700 text-white  p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Md Ibrahim</p>
  </aside>
</footer>


            </div>

        // </div>
    );
};

export default Sidebar;