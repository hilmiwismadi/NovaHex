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
    <div className={`w-full bg-white py-4 sm:py-5 lg:py-[1.219vw] px-4 sm:px-6 lg:px-[3.121vw] flex flex-col justify-between items-center top-0 ${isNavbarHidden ? "-translate-y-full" : "translate-y-0"} fixed z-[99] transition-transform duration-300`}>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-x-3 sm:gap-x-4 lg:gap-x-[1.2vw] items-center">
          <div className="flex gap-x-2 lg:gap-x-[0.625vw] text-lg lg:text-[1.45vw] font-bold mr-3 lg:mr-[1.2vw]">
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
          <a href="" className="font-bold text-sm lg:text-[0.9vw] md:flex hidden text-[var(--color-primary)] hover:text-[var(--color-tertiary)] transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-[var(--color-tertiary)] after:transition-all after:duration-300 hover:after:w-full">
            Home
          </a>
          <a href="" className="font-bold text-sm lg:text-[0.9vw] md:flex hidden text-[var(--color-primary)] hover:text-[var(--color-tertiary)] transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-[var(--color-tertiary)] after:transition-all after:duration-300 hover:after:w-full">
            About Us
          </a>
          <a href="" className="font-bold text-sm lg:text-[0.9vw] md:flex hidden text-[var(--color-primary)] hover:text-[var(--color-tertiary)] transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 after:bg-[var(--color-tertiary)] after:transition-all after:duration-300 hover:after:w-full">
            Pricing
          </a>
        </div>
        <button className="text-sm lg:text-[0.82vw] bg-[var(--color-primary)] border-2 border-[var(--color-primary)] p-2 lg:p-[0.5vw] rounded-md text-white md:flex hidden hover:bg-[var(--color-tertiary)] hover:scale-105 hover:shadow-lg transition-all duration-300">
          Contact Us
        </button>

        <button onClick={() => setIsExpand(!isExpand)} className="flex md:hidden">
          <GiHamburgerMenu className="text-[var(--color-primary)] text-[5vw] hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>
      <div className={`w-full px-4 sm:px-6 lg:px-[3.121vw] flex md:hidden flex-col space-y-3 sm:space-y-4 items-center justify-center bg-white/60 transition-all duration-500 ease-in-out ${isExpand ? "max-h-[500px] opacity-100 py-4 sm:py-6" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base text-[var(--color-primary)] hover:text-[var(--color-tertiary)] transition-colors duration-300">Home</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base text-[var(--color-primary)] hover:text-[var(--color-tertiary)] transition-colors duration-300">About Us</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base text-[var(--color-primary)] hover:text-[var(--color-tertiary)] transition-colors duration-300">Pricing</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base text-[var(--color-primary)] hover:text-[var(--color-tertiary)] transition-colors duration-300"></a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-sm sm:text-base text-[var(--color-primary)] hover:text-[var(--color-tertiary)] transition-colors duration-300"></a>
        <button className="w-full flex justify-center md:hidden text-sm sm:text-base bg-[var(--color-primary)] p-3 sm:p-4 rounded-lg text-white hover:bg-[var(--color-tertiary)] hover:scale-105 transition-all duration-300">Contact Us</button>
      </div>
    </div>
  );
}
