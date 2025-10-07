'use client';

import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar1() {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <section className={`w-screen md:h-[4.375vw] flex flex-col justify-center items-center fixed z-[99] md:p-0 p-4 sm:p-6 ${isExpand ? "bg-white" : "bg-transparent"}`}>
      {/* Ornament background */}
        {/* navbar */}
        <div className="md:w-[68.906vw] md:h-[2.188vw] h-fit w-full md:px-0 px-4 sm:px-6 flex justify-between items-center top-0">
          <div className="flex gap-x-2 sm:gap-x-3 lg:gap-x-[0.625vw]">
            <div className="overflow-hidden">
              <Image
                src="/image/hero/hero4/Union.png"
                alt="Background"
                height={10000}
                width={10000}
                className="md:w-[2vw] w-10 sm:w-12 object-fill hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-base sm:text-lg lg:text-[1.25vw] font-bold">Arachnova</p>
          </div>
          {/* hidden when the size is in mobile mode */}
          <div className="md:flex hidden gap-x-3 items-center text-sm lg:text-[0.781vw]">
            <a href="" className="hover:text-[var(--color-secondary)] transition-colors duration-300">Home</a>
            <a href="" className="hover:text-[var(--color-secondary)] transition-colors duration-300">About Us</a>
            <a href="" className="hover:text-[var(--color-secondary)] transition-colors duration-300">Pricing</a>
            <a href="" className="hover:text-[var(--color-secondary)] transition-colors duration-300">Page</a>
            <button className="p-2 lg:p-[0.417vw] border-2 lg:border-[0.104vw] border-[var(--color-secondary)] rounded-lg lg:rounded-[0.521vw] text-[var(--color-secondary)] ml-3 lg:ml-[0.8vw] hover:bg-[var(--color-secondary)] hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300">Contact Us</button>
          </div>

          <button onClick={() => setIsExpand(!isExpand)} className="flex md:hidden">
            <GiHamburgerMenu className="text-blue-600 text-[5vw] hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
        <div className={`transition-all duration-300 ${isExpand ? "flex" : "hidden"} flex-col text-center space-y-3 sm:space-y-4 w-full px-6 sm:px-10 py-4 sm:py-6`}>
            <a href="" className="text-sm sm:text-base p-2 sm:p-3 w-full bg-blue-600 bg-opacity-40 rounded-md hover:bg-opacity-60 transition-all duration-300">Home</a>
            <a href="" className="text-sm sm:text-base p-2 sm:p-3 w-full bg-blue-600 bg-opacity-40 rounded-md hover:bg-opacity-60 transition-all duration-300">About Us</a>
            <a href="" className="text-sm sm:text-base p-2 sm:p-3 w-full bg-blue-600 bg-opacity-40 rounded-md hover:bg-opacity-60 transition-all duration-300">Pricing</a>
            <a href="" className="text-sm sm:text-base p-2 sm:p-3 w-full bg-blue-600 bg-opacity-40 rounded-md hover:bg-opacity-60 transition-all duration-300">Page</a>
        </div>
        {/* navbar */}
    </section>
  );
}
