'use client';

import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar2() {
  const [isExpand, setIsExpand] = useState(false);
  
  return (
    <section className="w-full md:py-0 md:min-h-0 flex flex-col justify-center items-center bg-transparent fixed z-[99] transition-all duration-500 ease-in-out">
      {/* Ornament background */}
      <div className="w-full">
        {/* navbar */}
        <div className="w-full bg-gray-100 py-3 sm:py-4 lg:py-[0.42vw] px-4 sm:px-6 lg:px-[3.121vw] flex justify-between items-center top-0 transition-transform duration-500 ease-in-out">
          <div className="flex gap-x-3 sm:gap-x-4 lg:gap-x-[1.2vw] items-center">
            <div className="flex gap-x-2 lg:gap-x-[0.625vw] text-lg sm:text-xl lg:text-[1.45vw] font-bold mr-3 lg:mr-[1.2vw] justify-center items-center">
              <div className="overflow-hidden">
                <Image
                  src="/image/hero/hero4/Union.png"
                  alt="Background"
                  height={10000}
                  width={10000}
                  className="w-8 sm:w-10 lg:w-[2vw] object-fill hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-base sm:text-lg lg:text-[1.02vw]">Arachnova</p>
            </div>
            <a href="" className="md:flex hidden font-bold text-sm lg:text-[0.8vw] hover:text-[rgba(66,115,206,1)] transition-colors duration-300">Home</a>
            <a href="" className="md:flex hidden font-bold text-sm lg:text-[0.8vw] hover:text-[rgba(66,115,206,1)] transition-colors duration-300">About Us</a>
            <a href="" className="md:flex hidden font-bold text-sm lg:text-[0.8vw] hover:text-[rgba(66,115,206,1)] transition-colors duration-300">Pricing</a>
            <a href="" className="md:flex hidden font-bold text-sm lg:text-[0.8vw] hover:text-[rgba(66,115,206,1)] transition-colors duration-300"></a>
            <a href="" className="md:flex hidden font-bold text-sm lg:text-[0.8vw] hover:text-[rgba(66,115,206,1)] transition-colors duration-300"></a>
          </div>
          <button className="md:flex hidden text-sm lg:text-[0.82vw] bg-[rgba(66,115,206,1)] p-3 lg:p-[0.833vw] rounded-lg lg:rounded-[0.521vw] text-white hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">Contact Us</button>

          <button onClick={() => setIsExpand(!isExpand)} className="flex md:hidden">
            <GiHamburgerMenu className="text-blue-600 text-[5vw] hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
        <div className={`px-4 sm:px-6 lg:px-[3.121vw] flex md:hidden flex-col space-y-3 sm:space-y-4 py-4 sm:py-6 items-center justify-center bg-white/90 transition-all duration-500 ease-in-out ${isExpand ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-[rgba(66,115,206,1)] transition-colors duration-300">Home</a>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-[rgba(66,115,206,1)] transition-colors duration-300">About Us</a>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-[rgba(66,115,206,1)] transition-colors duration-300">Pricing</a>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-[rgba(66,115,206,1)] transition-colors duration-300"></a>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-[rgba(66,115,206,1)] transition-colors duration-300"></a>
          <button className="w-full flex justify-center md:hidden text-sm sm:text-base bg-[rgba(66,115,206,1)] p-3 sm:p-4 rounded-lg text-white hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out">Contact Us</button>
        </div>
        {/* navbar */}
      </div>
    </section>

  );
}
