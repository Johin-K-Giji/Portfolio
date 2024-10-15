"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <main className="w-screen min-h-screen relative overflow-y-auto"> {/* Allow vertical scroll */}
      {/* Main content on the left */}
      <div className="w-full min-h-screen flex items-center bg-black">
        <div className="pl-8 md:pl-10 lg:pl-40 pb-[34rem] md:pb-20 flex flex-col gap-5 z-[10] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] text-white font-semibold">
            <ReactTyped strings={["Self-learned", "Passionate", "Motivated"]} typeSpeed={200} loop className="text-[20px] md:text-[25px]" />
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-200"> Frontend Developer</span>
          </h1>
          <p className="text-gray-200 font-semibold hidden md:block text-[14px] sm:text-[16px] md:text-[18px]">
With 2 years of experience in frontend development, including 1+ years in a professional setting and a 6 months of internship, I specialize in creating dynamic and responsive web applications. My technical skills encompass a robust frontend toolkit featuring React.js, React Native, Next.js, Redux, Tailwind CSS, and Figma, paired with backend technologies like REST API, Python Flask , Node.js , SQL and Non-SQL Databases.
</p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href={'/my-skills'} className="rounded-[20px] bg-blue-500 group relative hover:bg-blue-800 px-5 py-3 text-md md:text-lg text-white max-w-[180px] md:max-w-[200px]">
              Learn More
            </Link>
            <a href='/Johin K Gigi.pdf' download className="rounded-[20px] bg-transparent relative group  px-5 py-3 text-md md:text-lg text-white max-w-[180px] md:max-w-[200px] border-2">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0" />
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Image with framer-motion animation on the right */}
      <div className="absolute right-[3.2rem] bottom-[12.5rem] md:right-10 xl:right-20 md:bottom-20 z-[10] w-[250px] sm:w-[300px] md:w-[400px] h-[400px] sm:h-[500px] md:h-[440px] flex items-center justify-center">
        
        {/* Overlapping colored circles */}
        <div className="absolute top-20 left-4 w-40 h-40 sm:w-52 sm:h-52 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob" />
        <div className="absolute top-0 left-4 w-40 h-40 sm:w-52 sm:h-52 bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob" />
        <div className="absolute top-10 right-4 w-40 h-40 sm:w-52 sm:h-52 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob" />
        <div className="absolute bottom-5 left-12 w-40 h-40 sm:w-52 sm:h-52 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob" />
        <div className="absolute bottom-5 right-4 w-40 h-40 sm:w-52 sm:h-52 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob" />

        {/* Framer motion image animation */}
        <div className="relative w-[80%] h-[80%] z-[3]">
          <motion.div
            className="w-full h-full "
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }}  // Tap effect
          >
            <Image
              src="/profile.JPG" // Replace this with your image path
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile buttons */}
      <div className="flex-row absolute flex bottom-36 z-[20] right-[2.25rem] md:hidden gap-5">
        <Link href={'/my-skills'} className="rounded-[20px] bg-blue-500 group hover:bg-blue-800 px-5 py-3 text-lg text-white max-w-[200px]">
          Learn More
        </Link>
        <Link href='/Resume.pdf' className="rounded-[20px] bg-transparent group hover:bg-blue-800 px-5 py-3 text-lg text-white max-w-[200px]">
          Resume
        </Link>
      </div>
    </main>
  );
}
