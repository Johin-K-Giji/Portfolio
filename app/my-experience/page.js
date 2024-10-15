import React from 'react';

const Page = () => {
  return (
    <div className='min-h-screen w-full bg-black flex flex-col items-center'>
      {/* Heading */}
      <div className="pl-4 md:pl-10 pb-20 flex flex-col gap-5 z-[10] max-w-full md:max-w-[750px] mt-28 md:mt-24">
        <h1 className="text-[30px] sm:text-[40px] text-white font-semibold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-200">Experience</span>
        </h1>
      </div>

      {/* Experience cards */}
      <div className="flex flex-col lg:flex-row gap-6 w-full justify-center items-center px-4  h-full">
        {/* Experience 1 */}
        <div className='w-full max-w-[550px] lg:max-w-[45%] h-[650px] lg:h-[300px] card-wrapper bg-gray-800 rounded-lg '>
          <div className='flex flex-col justify-between p-6 card-content'>
            <div className='flex flex-col gap-4 items-center lg:items-start text-white'>
              <img 
                src='./logocmp1.jpg'
                className='w-[50px] h-[50px] rounded-full border border-black border-solid'
                alt='Crudops Pvt Ltd'
              />
              <h2 className='font-bold text-xl'>Crudops Pvt Ltd <span className='text-sm'> (2023-2024)</span></h2>
              <a href="" className="font-bold">Software Developer</a>
              <ul className="list-disc text-sm ml-4 space-y-2">
                <li>Led the creation of responsive web applications using React and related libraries, ensuring high performance across devices.</li>
                  <li>Collaborated on both web and mobile app projects, integrating APIs and managing state with
Redux and React Context API.</li>

                <li>Utilized Python Flask for backend services and worked with SQL and NoSQL databases for
efficient data handling.
</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className='w-full max-w-[550px] lg:max-w-[45%] h-[650px] lg:h-[300px] card-wrapper bg-gray-800 rounded-lg'>
          <div className='flex flex-col justify-between p-6 card-content'>
            <div className='flex flex-col gap-4 items-center lg:items-start text-white'>
              <img 
                src='./logocmp2.jpg'
                className='w-[50px] h-[50px] rounded-full border border-black border-solid'
                alt='Nosce Techno Solutions'
              />
              <h2 className='font-bold text-xl'>Nosce Techno Solutions <span className='text-sm'> (June 2022 - Dec 2022)</span></h2>
              <a href="" className="font-bold">Web Developer Intern</a>
              <ul className="list-disc text-sm ml-4 space-y-2">
                <li>Assisted in developing user-friendly web applications using React,
contributing to the implementation of basic functionalities and enhancing
user interaction.</li>
                <li>Gained hands-on experience with React components and state management,
enhancing my understanding of frontend development and best coding
practices.
</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
