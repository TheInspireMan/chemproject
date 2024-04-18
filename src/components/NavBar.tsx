"use client"
import Link from 'next/link'
import Image from "next/image";
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <main className = "flex pt-10 pb-7 fixed w-full bg-white">
            
            <div className="ml-12 flex space-x-5">
                <Image
                    src="/logo.png"
                    width={42}
                    height={42}
                    alt="logo"
                />
                <h1 className="mr-3 w-3/5 text-xl font-bold pt-2">NisChem</h1>
            </div>

            <div className="absolute right-0 mr-12">
                <button onClick={toggleMenu}>
                    <GiHamburgerMenu size={32} />
                </button>
            </div>

            <div className={`absolute right-0 top-0 bg-white h-full transition-width duration-300 ${isOpen ? 'block' : 'hidden'}`}>

                <div className="pt-16 ml-4">
                    <button onClick={toggleMenu}>
                        <IoCloseSharp size={36} />
                    </button>
                </div>
                <div className = "ml-20 pt-10 mr-20 flex flex-col space-y-[16px]">
                    <Link href="/archive">
                        <button className = "w-36 h-14 bg-green-500 rounded text-white transition duration-300 transform hover:scale-110">Жүктеу</button>
                    </Link>

                    <Link href="/themes">
                        <button className = "w-36 h-14 bg-zinc-300 rounded transition duration-300 transform hover:scale-110">Тақырыптар</button>
                    </Link>

                    <Link href="/mock">
                        <button className = "w-36 h-14 bg-zinc-300 rounded transition duration-300 transform hover:scale-110">МЭСК</button>
                    </Link>

                    <Link href="/olympiad">
                        <button className = "w-36 h-14 bg-zinc-300 rounded transition duration-300 transform hover:scale-110">Олимпиада</button>
                    </Link>

                    <Link href="/archive">
                        <button className = "w-36 h-14 bg-zinc-300 rounded transition duration-300 transform hover:scale-110">Архив</button>
                    </Link>

                    <div className = "pt-16">
                        <button className = "w-36 h-14 bg-zinc-300 rounded transition duration-300 transform hover:scale-110">Кіру</button>
                    </div>
                </div>
            </div>

        </main>
    );
}