"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { RxHome } from "react-icons/rx";
import { FaBuildingUser, FaLaptopCode } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import Transition from './transition';

const Navigation = () => {
    const [isRouting, setIsRouting] = useState(false)
    const path = usePathname()
    const [isActive, setIsActive] = useState(path)
    const [prevPath, setPrevPath] = useState("/")

    useEffect(() => {
        if (prevPath !== path) {
            setIsRouting(true)
        }
    }, [path, prevPath])

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path)
            const timeout = setTimeout(() => {
                setIsRouting(false)
            }, 1200)
            return () => clearTimeout(timeout)
        }
    }, [isRouting])

    const Navlinks = [
        {
            name: "/",
            icon: RxHome,
            link: "/",
        },
        {
            name: "/my-skills",
            icon: FaLaptopCode,
            link: "/my-skills",
        },
        {
            name: "/my-projects",
            icon: GrProjects,
            link: "/my-projects",
        },
        {
            name: "/my-experience",
            icon: FaBuildingUser,
            link: "/my-experience",
        },
    ]

    return (
        <div className='fixed bottom-5 left-1/2 transform -translate-x-1/2 z-[50] w-[90%] md:w-[60%] lg:w-[40%] max-h-[80px] rounded-full flex justify-around items-center border border-white px-4 py-3 bg-black bg-opacity-80'>
            {/* Transition effect when routing */}
            {isRouting && <Transition />}
            {Navlinks.map((nav) => (
                <Link className="min-w-[20%] text-center" key={nav.name} href={nav.link}>
                    <nav.icon className={`w-[24px] h-[24px] mx-auto ${path === nav.name ? "text-purple-600" : "text-white"}`} />
                </Link>
            ))}
        </div>
    )
}

export default Navigation
