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
        <div className="w-full bg-gray-100 md:py-[0.42vw] py-[4vw] px-[3.121vw] flex justify-between items-center top-0 transition-transform duration-500 ease-in-out">
          <div className="flex gap-x-[1.2vw] items-center">
            <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold mr-[1.2vw] justify-center items-center">
              <Image
                src="/image/hero/hero4/Union.png"
                alt="Background"
                height={10000}
                width={10000}
                className="md:w-[2vw] w-[7.442vw] object-fill"
              />
              <p className="md:text-[1.02vw] text-[4.351vw]">Arachnova</p>
            </div>
            <a href="" className="md:flex hidden font-bold text-[0.8vw]">Home</a>
            <a href="" className="md:flex hidden font-bold text-[0.8vw]">About Us</a>
            <a href="" className="md:flex hidden font-bold text-[0.8vw]">Pricing</a>
            <a href="" className="md:flex hidden font-bold text-[0.8vw]"></a>
            <a href="" className="md:flex hidden font-bold text-[0.8vw]"></a>
          </div>
          <button className="md:flex hidden text-[0.82vw] bg-[rgba(66,115,206,1)] p-[0.833vw] rounded-[0.521vw] text-white transition-all duration-300 ease-in-out hover:bg-blue-700">Contact Us</button>

          <button onClick={() => setIsExpand(!isExpand)} className="flex md:hidden">
            <GiHamburgerMenu className="text-blue-600 text-[5vw]" />
          </button>
        </div>
        <div className={`px-[3.121vw] flex md:hidden flex-col space-y-[1vw] py-[4vw] items-center justify-center bg-white/90 transition-all duration-500 ease-in-out ${isExpand ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]">Home</a>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]">About Us</a>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]">Pricing</a>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]"></a>
          <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]"></a>
          <button className="w-full flex justify-center md:hidden text-[2.2vw] bg-[rgba(66,115,206,1)] p-[0.833vw] rounded-[0.521vw] text-white transition-all duration-300 ease-in-out hover:bg-blue-700">Contact Us</button>
        </div>
        {/* navbar */}
      </div>
    </section>

  );
}
