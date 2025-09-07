import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <div className='bg-dark text-primary-col shadow shadow-gray-700 font-medium px-12 rounded-bl-lg rounded-tr-lg p-2 w-full md:w-fit flex justify-center md:justify-end items-center gap-5'>
            <Link href={"/"}>Home</Link>
            <Link href={"/About"}>About</Link>
        <Link href={"/Skill"}>Skills</Link>
        <Link href={"/Projects"}>Projects</Link>
        <Link href={"/Contact"}>Contact</Link>
        </div>
    );
};

export default Nav;