import Image from "next/image";
import Navbar3 from "../navbar/navbarVariant3";

interface heroprops{
  navbar: JSX.Element
}

export default function Hero3() {
  return (
    <section className="w-full md:aspect-[1920/1080] aspect-[430/1080] flex flex-col md:justify-center md:items-center md:bg-gray-100 relative">
      {/* Ornament background */}
      <Image
        src="/image/hero/hero3/bg.png"
        alt="Background"
        height={10000}
        width={10000}
        className="md:flex hidden w-[100vw] h-[56.25vw] object-cover z-[0] absolute"
      />
      <Image
        src="/image/hero/hero3/bgMobile.png"
        alt="Background"
        height={10000}
        width={10000}
        className="md:hidden flex w-[100vw] h-[235.349vw] object-cover z-[0] absolute"
      />
      <div className="w-full h-[56.25vw] z-[1] gap-y-8 sm:gap-y-10 lg:gap-y-[5vw] p-4 sm:p-6 lg:p-[2.083vw]">

        {/* content */}
        <div className="w-full flex flex-col justify-center items-center text-white gap-y-6 sm:gap-y-8 lg:gap-y-[3.333vh] pt-16 sm:pt-20 lg:pt-[9.469vw]">
          <div className="text-center flex flex-col items-center">
            <p className="text-5xl sm:text-6xl lg:text-[6.661vw] font-britannic">YOUR COZY CORNER</p>
            <p className="text-2xl sm:text-3xl lg:text-[3.125vw] font-bebasneue text-center">for Coffee & Conversation</p>
            <p className="text-sm sm:text-base lg:text-[0.989vw] w-full sm:w-[80%] lg:w-[46.56vw] text-center px-4 sm:px-0">Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc. In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus pharetra.</p>
          </div>
          <button className="bg-[var(--color-primary)] py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm sm:text-base lg:text-[0.833vw] w-full sm:w-auto hover:bg-[var(--color-secondary)] hover:scale-105 hover:shadow-lg transition-all duration-300">SEE OUR BEVERAGES</button>
          <div className="flex md:flex-row flex-col md:items-center md:justify-center gap-x-4 sm:gap-x-6 lg:gap-x-[2.083vw] gap-y-6 sm:gap-y-8 lg:gap-y-0">
            <div className="w-full sm:w-[80%] lg:w-[15.625vw] lg:h-[7.916vw] text-right space-y-3 sm:space-y-4 lg:space-y-[2vw] bg-black/30 border-r-2 border-r-orange-brown rounded-md p-3 sm:p-4 lg:p-[0.625vw] hover:bg-black/40 transition-all duration-300">
              <p className="text-base sm:text-lg lg:text-[1vw] font-poppins">Our Location</p>
              <p className="text-sm sm:text-base lg:text-[0.833vw] font-poppins">Lorem ipsum dolor sit amet consectetur. Faucibus elit eget eget mauris auctor.</p>
            </div>
            <div className="w-full sm:w-[80%] lg:w-[15.625vw] lg:h-[7.916vw] text-left space-y-3 sm:space-y-4 lg:space-y-[2vw] bg-black/30 border-l-2 border-l-orange-brown rounded-md p-3 sm:p-4 lg:p-[0.625vw] hover:bg-black/40 transition-all duration-300">
              <p className="text-base sm:text-lg lg:text-[1vw] font-poppins">Best Seller</p>
              <p className="text-sm sm:text-base lg:text-[0.833vw] font-poppins">Lorem ipsum dolor sit amet consectetur. Faucibus elit eget eget mauris auctor.</p>
            </div>
          </div>
        </div>
        {/* content */}

      </div>
    </section>
  );
}
