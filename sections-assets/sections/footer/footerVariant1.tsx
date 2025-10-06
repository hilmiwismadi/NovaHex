import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function footer1() {
  return (
    <section className="w-screen h-[175.116vw] md:h-[17.552vw] md:aspect-[1920/1080] aspect-[430/753] flex flex-col justify-start items-center bg-white text-gray-800 relative">
      <div
        className="w-full md:h-[14.896vw] h-[158.372vw] md:p-[3vw] flex justify-center items-center"
        style={{ background: "#407BFF" }}
      >
        {" "}
        {/*one*/}
        <div className="md:w-[78.646vw] md:h-[9.688vw] w-[81.395vw] h-[130.465vw] flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
          <div className="md:w-[22.031vw] md:h-[9.688vw] w-full h-[41.163vw]">
            <p className="text-[4.186vw] md:text-[1.042vw] text-white font-bold">
              About Company
            </p>
            <p className="text-[3.721vw] md:text-[0.938vw] text-white mt-[0.3vw] text-justify">
              Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque
              elementum fringilla eros condimentum faucibus scelerisque
              senectus. Imperdiet nulla egestas
            </p>
            <a
              href="#"
              className="md:w-[7.187vw] md:h-[2.24vw] w-[25.814vw] h-[8.372vw] text-[3.256vw] md:text-[0.938vw] flex items-center justify-center font-bold bg-white rounded-[2.326vw] md:rounded-[0.521vw] mt-[7vw] md:mt-[0.8vw]"
            >
              Contact Us
            </a>
          </div>
          <div className="md:w-[22.031vw] md:h-[9.688vw] w-full h-[37.442vw] md:mt-0 mt-[10vw]">
            <p className="text-[4.186vw] md:text-[1.042vw] text-white font-bold">
              Address
            </p>
            <p className="text-[3.721vw] md:text-[0.938vw] text-white font-bold mt-[0.3vw]">
              Indonesia Tower
            </p>
            <p className="text-[3.721vw] md:text-[0.938vw] text-white">
              Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque
            </p>
          </div>
          <div className="md:w-[22.031vw] md:h-[9.688vw] w-[16.512vw] h-[23.953vw] flex flex-col">
            <p className="text-[4.186vw] md:text-[1.042vw] text-white font-bold">
              Explore
            </p>
            <a
              href="#"
              className="text-[3.721vw] md:text-[0.938vw] text-white mt-[0.3vw]"
            >
              Home
            </a>
            <a href="#" className="text-[3.721vw] md:text-[0.938vw] text-white">
              About Us
            </a>
            <a href="#" className="text-[3.721vw] md:text-[0.938vw] text-white">
              Pricing
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full md:h-[2.656vw] h-[16.744vw] flex items-center justify-center"
        style={{ background: "#12388D" }}
      >
        {" "}
        {/*two*/}
        <div className="md:w-[77.604vw] md:h-[0.99vw] w-[68.837vw] h-[8.372vw] flex flex-col md:flex-row md:justify-start items-center justify-center">
          <div className="flex">
            <p className="text-[3.256vw] md:text-[0.833vw] text-white">
              Copyright
            </p>
            <Image
              src="/image/footer/copyright.png"
              width={10000}
              height={10000}
              alt="copyright"
              className="md:w-[0.99vw] md:h-[0.99vw] w-[4.419vw] h-[4.419vw] mx-[0.2vw]"
            />
            <p className="text-[3.256vw] md:text-[0.833vw] text-white md:hidden block">
              2024 Arachnova
            </p>
          </div>
          <p className="text-[3.256vw] md:text-[0.833vw] text-white md:mt-0 mt-[1vw]">
            All rights reserved. Developed by Arachnova
          </p>
        </div>
      </div>
    </section>
  );
}
