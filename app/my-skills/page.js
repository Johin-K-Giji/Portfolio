"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

const Page = () => {
  const SkillData = [
    {
      name: "Html 5",
      Image: "/html.png",
      width: 80,
      height: 80,
    },
    {
      name: "Css",
      Image: "/css.png",
      width: 80,
      height: 80,
    },
    {
      name: "JavaScript",
      Image: "/js.png",
      width: 65,
      height: 65,
    },
    {
      name: "Tailwind Css",
      Image: "/tailwind.png",
      width: 80,
      height: 80,
    },
    {
      name: "React",
      Image: "/react.png",
      width: 80,
      height: 80,
    },
    {
      name: "Redux",
      Image: "/redux.png",
      width: 80,
      height: 80,
    },
    {
      name: "TypeScript",
      Image: "/ts.png",
      width: 80,
      height: 80,
    },
    {
      name: "Next js 13",
      Image: "/next.png",
      width: 80,
      height: 80,
    },
    {
      name: "Framer Motion",
      Image: "/framer.png",
      width: 80,
      height: 80,
    },
    {
      name: "Razor Pay",
      Image: "/razorpay.png",
      width: 80,
      height: 80,
    },
    {
      name: "Node js",
      Image: "/node-js.png",
      width: 80,
      height: 80,
    },
    {
      name: "Mongo db",
      Image: "/mongodb.png",
      width: 40,
      height: 40,
    },
  ];

  return (
    <div className='min-h-screen w-full items-center bg-black flex flex-col p-4'>
      <div className="pl-4 md:pl-10 pb-12 flex flex-col gap-5 z-[10] w-full justify-center items-center mt-24 md:mt-24">
        <h1 className="text-[30px] sm:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-200 font-semibold text-center">
          Skills
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-black"> & </span>
          Technologies
        </h1>
      </div>

      {/* Swiper for skills */}
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 40 },
        }}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay]}
        className="max-w-[95%] md:max-w-[80%]"
      >
        {SkillData.map((skills, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skills.Image}
              alt={skills.name}
              height={skills.height}
              width={skills.width}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Technologies section */}
      <div className='w-full md:w-[80%] xl:w-[60%] h-auto mt-12 bg-indigo-200/10 shadow-lg backdrop-blur-2xl shadow-white/30 text-center justify-center items-center flex relative rounded-lg p-4'>
        <div className="relative w-full h-full rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left text-white font-semibold">
            <div className="font-bold text-xl">Languages:</div>
            <div className="text-lg space-y-2">
              JavaScript, PHP, Python, C
            </div>
            <div className="font-bold text-xl">Technologies:</div>
            <div className="text-lg space-y-2">
              React.js, React Native, Next.js, Redux, Tailwind CSS, Figma, jQuery, REST API, Python Flask, Firebase, MySQL, PostgreSQL, MongoDB, Node.js
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
