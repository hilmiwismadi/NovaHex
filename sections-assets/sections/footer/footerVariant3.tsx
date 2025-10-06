"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const sources = [
  "/image/footer/instagram.jpg",
  "/image/footer/facebook.jpg",
  "/image/footer/tiktok.jpg",
];

export default function footer3() {
  return (
    <section className="w-screen h-[122.093vw] md:h-[16.823vw] aspect-[430/525] md:aspect-[1920/1080] flex flex-col justify-start items-center bg-white text-gray-800 relative">
      <div
        className="w-full h-[105.349vw] md:h-[12.917vw] p-[3vw] flex flex-col justify-center items-center relative"
        style={{ background: "#F1F5F9" }}
      >
        <div className="w-[81.395vw] h-[86.744vw] md:w-[73.958vw] md:h-[4.167vw] flex flex-col md:flex-row justify-between items-start relative">
          <div className="flex items-center">
            <Image
              src="/image/footer/arachnova.png"
              width={10000}
              height={10000}
              alt="logo"
              className="w-[14.186vw] h-[10.698vw] md:w-[3.281vw] md:h-[2.5vw]"
            />
            <h1 className="text-[5.581vw] md:text-[1.25vw] font-bold text-[#101010] ml-[3vw] md:ml-[0.5vw]">
              ArachnoVa
            </h1>
          </div>
          <div className="w-full h-[16.512vw] md:w-[20.99vw] md:h-[4.167vw]">
            <h1 className="text-[4.186vw] md:text-[1.042vw] font-bold text-right">
              Top Bakery
            </h1>
            <p className="text-[3.721vw] md:text-[0.938vw] text-right">
              Lorem ipsum dolor sit amet consectetur. Sed estas sagittis semper
              risus sed
            </p>
          </div>
          <div className="w-full h-[40.698vw] flex flex-col justify-between md:hidden text-right md:text-[0.833vw] text-[3.721vw] md:font-bold">
            <p>About</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Gallery</p>
            <p>Team</p>
          </div>
        </div>
        <div className="md:flex absolute bottom-0 right-[13vw] hidden">
          {sources.map((client, index) => (
            <div key={index}>
              <Image
                src={client}
                width={10000}
                height={10000}
                alt="logo"
                className="w-[1.25vw] h-[1.25vw]"
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full h-[16.744vw] md:h-[3.906vw] flex justify-center items-center"
        style={{ background: "#F1F5F9" }}
      >
        <div className="h-[8.372vw] md:w-[73.958vw] md:h-[0.99vw] flex flex-row justify-between items-center">
          <div className="flex items-center md:flex-row flex-col">
            <div className="flex">
              <Image
                src="/image/footer/copyrightBlack.png"
                width={10000}
                height={10000}
                alt="copyright"
                className="w-[4.419vw] h-[4.419vw] md:w-[0.99vw] md:h-[0.99vw] mx-[0.2vw]"
              />
              <p className="text-[3vw] md:text-[0.833vw] text-black font-bold md:hidden">
                2024 Arachnova.
              </p>
            </div>
            <p className="text-[3vw] md:text-[0.833vw] text-black font-bold md:hidden">
              2024 Arachnova. All rights reserved. Developed by Arachnova
            </p>
            <p className="text-[3.256vw] md:text-[0.833vw] text-black font-bold md:block hidden">
              2024 Arachnova. All rights reserved. Developed by Arachnova
            </p>
          </div>
          <div className="md:flex hidden">
            <p className="text-[0.833vw] font-bold">About</p>
            <p className="text-[0.833vw] font-bold ml-[1.25vw]">Features</p>
            <p className="text-[0.833vw] font-bold ml-[1.25vw]">Pricing</p>
            <p className="text-[0.833vw] font-bold ml-[1.25vw]">Gallery</p>
            <p className="text-[0.833vw] font-bold ml-[1.25vw]">Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
