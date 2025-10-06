"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar4() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isExpand, setIsExpand] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      
      setLastScrollTop(scrollTop);

      setIsExpand(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={`w-full bg-white md:py-[1.219vw] py-[3vw] px-[3.121vw] flex flex-col justify-between items-center top-0 ${isNavbarHidden ? "-translate-y-full" : "translate-y-0"} fixed z-[99] transition-transform duration-300`}>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-x-[1.2vw] items-center">
          <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold mr-[1.2vw]">
            <Image
              src="/image/hero/hero4/Union.png"
              alt="Background"
              height={10000}
              width={10000}
              className="md:w-[2vw] w-[7.442vw] object-fill"
            />
            <p className="md:text-[1.02vw] text-[4.351vw]">Arachnova</p>
          </div>
          <a href="" className="font-bold text-[0.9vw] md:flex hidden">
            Home
          </a>
          <a href="" className="font-bold text-[0.9vw] md:flex hidden">
            About Us
          </a>
          <a href="" className="font-bold text-[0.9vw] md:flex hidden">
            Pricing
          </a>
        </div>
        <button className="text-[0.82vw] bg-[rgba(66,115,206,1)] border-2 border-[rgba(66,115,206,1)] p-1 rounded-md text-white md:flex hidden">
          Contact Us
        </button>

        <button onClick={() => setIsExpand(!isExpand)} className="flex md:hidden">
          <GiHamburgerMenu className="text-blue-500 text-[5vw]" />
        </button>
      </div>
      <div className={`w-full px-[3.121vw] flex md:hidden flex-col space-y-[1vw] items-center justify-center bg-white/60 transition-all duration-500 ease-in-out ${isExpand ? "max-h-[500px] opacity-100 py-[4vw]" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]">Home</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]">About Us</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]">Pricing</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]"></a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]"></a>
        <button className="w-full flex justify-center md:hidden text-[2.2vw] bg-blue-500 p-[0.833vw] rounded-[0.521vw] text-white">Contact Us</button>
      </div>
    </div>
  );
}
