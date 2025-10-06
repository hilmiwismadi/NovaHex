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
        <div className="md:w-[80.26vw] w-full bg-white md:py-[0.41vw] py-[2vw] md:px-[1.041vw] px-[4vw] flex justify-between items-center md:rounded-full rounded-none top-0 transition-all duration-500 ease-in-out">
          <div className="flex gap-x-[0.625vw] text-[1.45vw] font-bold">
            <Image
              src="/image/hero/hero3/Union.png"
              alt="Background"
              height={10000}
              width={10000}
              className="md:w-[2vw] w-[7.442vw] object-fill"
            />
            <p className="md:text-[1.02vw] text-[4.351vw]">Arachnova</p>
          </div>

          <div className="md:flex hidden gap-x-3 items-center text-[0.781vw]">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">Pricing</a>
            <a href="">Page</a>
            <button className="border-2 border-orange-brown text-orange-brown p-[0.5vw] rounded-md">
              Contact Us
            </button>
          </div>
          <button onClick={() => setIsExpand(!isExpand)} className="flex md:hidden">
              <GiHamburgerMenu className="text-orange-brown text-[5vw]" />
          </button>
        </div>
      </div>
      
      <div className={`w-full px-[3.121vw] flex md:hidden flex-col space-y-[1vw] py-[4vw] items-center justify-center bg-white/60 transition-all duration-500 ease-in-out ${isExpand ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]">Home</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]">About Us</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]">Pricing</a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]"></a>
        <a href="" className="w-full flex justify-center md:hidden font-semibold text-[2.6vw]"></a>
        <button className="w-full flex justify-center md:hidden text-[2.2vw] bg-orange-brown p-[0.833vw] rounded-[0.521vw] text-white">Contact Us</button>
      </div>
    </div>
  );
}
