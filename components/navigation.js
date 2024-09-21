"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react';

const Navigation = () => {
    const [isRouting, setIsRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if (prevPath !== path) {
            setIsRouting(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if (isRouting) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setIsRouting(false);
            }, 1200);
            return () => clearTimeout(timeout);
        }
    }, [isRouting]);

    const Navlinks = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Skills",
            link: "/my-skills",
        },
        {
            name: "Projects",
            link: "/my-projects",
        },
        {
            name: "Experience",
            link: "/my-experience",
        },
    ];

    return (
        <div className='fixed bottom-5 left-1/2 transform -translate-x-1/2 z-[50] w-[90%] md:w-[60%] lg:w-[40%] max-h-[80px] rounded-full flex justify-around items-center border border-white px-4 py-3 bg-black bg-opacity-80'>
            {/* Transition effect when routing */}
            {isRouting && <div className="transition-effect">Routing...</div>}
            {Navlinks.map((nav) => (
                <Link className="min-w-[20%] text-center" key={nav.name} href={nav.link}>
                    <span className={`text-lg ${path === nav.link ? "text-purple-600" : "text-white"}`}>
                        {nav.name}
                    </span>
                </Link>
            ))}
        </div>
    );
}

export default Navigation;
