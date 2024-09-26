import { FaGithub, FaGlobe } from "react-icons/fa";
import React from 'react';

const Page = () => {
  return (
    <div className='min-h-screen w-full items-center bg-black flex flex-col px-4'>
      <div className="pl-4 md:pl-10 pb-20 flex flex-col gap-5 z-[10] max-w-full md:max-w-[750px] mt-24 md:mt-24">
        <h1 className="text-[30px] sm:text-[40px] text-white font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-200">Projects</span>
        </h1>
      </div>

      {/* Grid for project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 - Netflix Clone */}
        <div className='w-full max-w-[350px] h-[300px] bg-white rounded-2xl flex flex-col'>
          <div className='flex flex-col justify-between mt-2 mx-4'>
            <img 
              src='./netflix.png'
              className='w-full h-[150px] object-cover rounded-t-lg'
              alt='Netflix Clone'
            />
            <div className="flex-row flex items-center gap-4 mt-4">
              <FaGithub size={30} />
              <h2 className="font-bold">Netflix Clone</h2>
              <a href="" className="text-green-700 font-semibold">Documentation</a>
            </div>
          </div>
        </div>

        {/* Project 2 - Cinephile Movie Organizer */}
        <div className='w-full max-w-[350px] h-[300px] bg-white rounded-2xl flex flex-col'>
          <div className='flex flex-col justify-between mt-2 mx-4'>
            <img 
              src='./cinephile.png'
              className='w-full h-[150px] object-cover rounded-t-lg'
              alt='Cinephile Movie Organizer'
            />
            <div className="flex-row flex items-center gap-4 mt-4">
              <FaGithub size={30} />
              <h2 className="font-bold">Cinephile Movie Organizer</h2>
              <a href="" className="text-green-700 font-semibold">Documentation</a>
            </div>
          </div>
        </div>

        {/* Project 3 - Virtual Calling Application */}
        <div className='w-full max-w-[350px] h-[300px] bg-white rounded-2xl flex flex-col'>
          <div className='flex flex-col justify-between mt-2 mx-4'>
            <img 
              src='./ringme.png'
              className='w-full h-[150px] object-cover rounded-t-lg'
              alt='Virtual Calling Application'
            />
            <div className="flex-row flex items-center gap-4 mt-4">
              <a href="https://ringme.ai/"><FaGlobe size={30} /></a>
              <h2 className="font-bold">Virtual Calling Application</h2>
              <a href="" className="text-green-700 font-semibold">Documentation</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
