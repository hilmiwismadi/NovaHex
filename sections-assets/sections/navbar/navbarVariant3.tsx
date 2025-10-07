'use client';

import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

export default function Navbar3() {
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
    <div className={`w-full fixed flex flex-col justify-center items-center z-[99] transition-transform duration-300 ease-in-out ${isNavbarHidden ? "-translate-y-full" : "translate-y-0 md:mt-[1vw] mt-0"}`}>
      <div className="w-full flex justify-center items-center">
        <div className="md:w-[80.26vw] w-full bg-white py-3 sm:py-4 lg:py-[0.41vw] px-4 sm:px-6 lg:px-[1.041vw] flex justify-between items-center md:rounded-full rounded-none top-0 transition-all duration-500 ease-in-out">
          <div className="flex gap-x-2 lg:gap-x-[0.625vw] text-lg lg:text-[1.45vw] font-bold">
            <div className="overflow-hidden">
              <Image
                src="/image/hero/hero3/Union.png"
                alt="Background"
                height={10000}
                width={10000}
                className="w-8 sm:w-10 lg:w-[2vw] object-fill hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-base sm:text-lg lg:text-[1.02vw]">Arachnova</p>
          </div>

          <div className="md:flex hidden gap-x-3 items-center text-sm lg:text-[0.781vw]">
            <a href="" className="hover:text-orange-brown transition-colors duration-300">Home</a>
            <a href="" className="hover:text-orange-brown transition-colors duration-300">About Us</a>
            <a href="" className="hover:text-orange-brown transition-colors duration-300">Pricing</a>
            <a href="" className="hover:text-orange-brown transition-colors duration-300">Page</a>
            <button className="border-2 border-orange-brown text-orange-brown p-2 lg:p-[0.5vw] rounded-md hover:bg-orange-brown hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
          <button onClick={() => setIsExpand(!isExpand)} className="flex md:hidden">
              <GiHamburgerMenu className="text-orange-brown text-[5vw] hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div className={`w-full px-4 sm:px-6 lg:px-[3.121vw] flex md:hidden flex-col space-y-3 sm:space-y-4 py-4 sm:py-6 items-center justify-center bg-white/60 transition-all duration-500 ease-in-out ${isExpand ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-orange-brown transition-colors duration-300">Home</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-orange-brown transition-colors duration-300">About Us</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-orange-brown transition-colors duration-300">Pricing</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-orange-brown transition-colors duration-300"></a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base hover:text-orange-brown transition-colors duration-300"></a>
        <button className="w-full flex justify-center md:hidden text-sm sm:text-base bg-orange-brown p-3 sm:p-4 rounded-lg text-white hover:bg-opacity-90 hover:scale-105 transition-all duration-300">Contact Us</button>
      </div>
    </div>
  );
}
