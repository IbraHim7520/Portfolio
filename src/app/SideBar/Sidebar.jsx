import Image from "next/image";
import React from "react";
import profile from "../../../public/profile.jpg";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-full text-primary-col flex flex-col justify-between items-center h-full">
      {/* Profile Section */}
      <div className="w-full  flex flex-col items-center">
        <div className="avatar">
          <div className="ring-gray-700 ring-offset-base-100 max-w-40 md:max-w-52 rounded-full ring-2 ring-offset-2">
            <Image className="grayscale" alt="Profile" src={profile} />
          </div>
        </div>

        <div className="w-full mt-5 text-white text-center">
          <h1 className="font-bold drop-shadow-[0px_0px_120px_rgba(66,59,171,1)] text-2xl md:text-3xl lg:text-4xl text-accent-col">
            MD IBRAHIM
          </h1>
          <p className="font-medium text-center mt-1 text-sm md:text-base">
            Junior <span className="text-accent2-col">Frontend</span> Developer
          </p>
        </div>

        <hr className="w-full border-gray-600 mt-4 mb-4" />

        {/* Contact Info */}
        <div className="w-full  flex flex-col space-y-3">
          <div className="flex items-center  rounded-md p-2 w-full gap-2 hover:bg-gray-800 transition">
            <MdEmail size={20} />
            <div className="w-full">
              <h1 className="text-sm font-semibold">Email</h1>
              <p className="text-xs md:text-sm">mdibrahim752006@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center 0 rounded-md p-2 w-full gap-2 hover:bg-gray-800 transition">
            <IoLogoWhatsapp size={20} />
            <div className="w-full">
              <h1 className="text-sm font-semibold">WhatsApp</h1>
              <p className="text-xs md:text-sm">+8801821069049</p>
            </div>
          </div>

           <div className="flex items-center 0 rounded-md p-2 w-full gap-2 hover:bg-gray-800 transition">
            <FaCode size={20} />
            <div className="w-full">
              <h1 className="text-sm font-semibold">Codeforce</h1>
              <Link href={"https://codeforces.com/profile/Ibrahim752006"} target="_blank" className="text-xs md:text-sm">Ibrahim</Link>
            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="w-full flex justify-center gap-5 mt-6">
          <a
            href="https://www.linkedin.com/in/ibrahim752006/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent2-col text-2xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/IbraHim7520"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent2-col text-2xl transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center  text-white p-3 rounded-t-lg w-full">
        <aside>
          <p className="text-xs  md:text-sm">
            Copyright © {new Date().getFullYear()} - All rights reserved by
            Ibrahim
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Sidebar;
