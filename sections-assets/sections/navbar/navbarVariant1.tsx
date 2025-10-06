'use client';

import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar1() {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <section className={`w-screen md:h-[4.375vw] flex flex-col justify-center items-center fixed z-[99] md:p-0 p-[2vw] ${isExpand ? "bg-white" : "bg-transparent"}`}>
      {/* Ornament background */}
        {/* navbar */}
        <div className="md:w-[68.906vw] md:h-[2.188vw] h-fit w-full md:px-0 px-[2vw] flex justify-between items-center top-0">
          <div className="flex gap-x-[0.625vw]">
            <Image
              src="/image/hero/hero4/Union.png"
              alt="Background"
              height={10000}
              width={10000}
              className="md:w-[2vw] w-[9.767vw] object-fill"
            />
            <p className="md:text-[1.25vw] text-[4.651vw] font-bold">Arachnova</p>
          </div>
          {/* hidden when the size is in mobile mode */}
          <div className="md:flex hidden gap-x-3 items-center text-[0.781vw]">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Pricing</a>
            <a href="">Page</a>
            <button className="p-[0.417vw] border-[0.104vw] border-[#4273CE] rounded-[0.521vw] text-[#4273CE] ml-[0.8vw]">Contact Us</button>
          </div>

          <button onClick={() => setIsExpand(!isExpand)} className="flex md:hidden">
            <GiHamburgerMenu className="text-blue-600 text-[5vw]" />
          </button>
        </div>
        <div className={`transition-transform duration-300 ${isExpand ? "flex" : "hidden"} flex-col text-center space-y-[2vw] w-full px-[10vw] py-[4vw]`}>
            <a href="" className="text-[3.4vw] p-[0.5vw] w-full bg-blue-600 bg-opacity-40 rounded-md">Home</a>
            <a href="" className="text-[3.4vw] p-[0.5vw] w-full bg-blue-600 bg-opacity-40 rounded-md">About Us</a>
            <a href="" className="text-[3.4vw] p-[0.5vw] w-full bg-blue-600 bg-opacity-40 rounded-md">Pricing</a>
            <a href="" className="text-[3.4vw] p-[0.5vw] w-full bg-blue-600 bg-opacity-40 rounded-md">Page</a>
        </div>
        {/* navbar */}
    </section>
  );
}
