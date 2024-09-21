import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[50] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-6 items-center'>
        <h1 className='text-white text-[25px] font-semibold'>
                Johin K Gigi
        </h1>
        <a href='https://www.linkedin.com/in/johin-k-gigi/' target="_blank" rel="noopener noreferrer"><CiLinkedin  size={40}  color='white' className='cursor-pointer' /></a>
        <a href='https://github.com/Johin123' target="_blank" rel="noopener noreferrer"><FaGithub size={40} color='white' className='cursor-pointer' /></a>
        </div>
            
    </div>
  )
}

export default Navbar
