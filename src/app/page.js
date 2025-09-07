"use client"
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { MdFileDownload } from "react-icons/md";
import 'aos/dist/aos.css';  

export default function Home() {
  useEffect(()=>{
    Aos.init({
      duration: 1000
    })
  },[] ) 
  return (
    <div  data-aos="zoom-in" className="p-5 h-96 space-y-2 md:min-h-screen text-accent2 flex flex-col justify-center items-center">
        <p className="text-sm font-thin bg-dark text-secondary-col   px-12 p-1 rounded shadow">H i ,  Iam</p>
        <h1 className="text-5xl md:text-6xl text-accent-col font-bold">MD IBRAHIM</h1>
        <p className="text-center text-sm lg:text-xl text-primary-col ">I am a junior frontend developer with knowledge of the <span className="text-accent2-col">MERN</span> stack, focused on building responsive, user-friendly, and visually appealing web applications. I enjoy learning new technologies and continuously improving my skills to deliver clean and efficient digital solutions.</p>
      <br></br>

<a href="https://drive.google.com/uc?export=download&id=1kEWKJYf6FTmRd8RJyvW-rsgJo3EG9Cu2" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-primary rounded-md">
    Download Resume <MdFileDownload size={20}/>
  </button>
</a>

    </div>
  );
}
