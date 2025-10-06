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
      <div className="w-full h-[56.25vw] z-[1] gap-y-[5vw] md:p-[2.083vw]">
        
        {/* content */}
        <div className="w-full flex flex-col justify-center items-center text-white md:gap-y-[3.333vh] gap-y-[4vw] pt-[9.469vw]">
          <div className="text-center flex flex-col items-center">
            <p className="md:text-[6.661vw] text-[14.512vw] font-britannic">YOUR COZY CORNER</p>
            <p className="md:text-[3.125vw] text-[6.856vw] font-bebasneue text-center">for Coffee & Conversation</p>
            <p className="md:text-[0.989vw] text-[2.614vw] md:w-[46.56vw] w-[70.93vw] text-center">Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc. In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus pharetra.</p>
          </div>
          <button className="bg-orange-brown py-2 px-4 rounded-full md:text-[0.833vw] text-[3.933vw] w-[55.909vw] md:w-fit">SEE OUR BEVERAGES</button>
          <div className="flex md:flex-row flex-col md:items-center md:justify-center gap-x-[2.083vw] md:gap-y-0 gap-y-[5vw]">
            <div className="md:w-[15.625vw] w-[67.219vw] md:h-[7.916vw] h-[34.058vw] text-right md:space-y-[2vw] space-y-[3vw] bg-black/30 border-r-2 border-r-orange-brown rounded-md p-[0.625vw]">
              <p className="md:text-[1vw] text-[4.302vw] font-poppins">Our Location</p>
              <p className="md:text-[0.833vw] text-[3.586vw] font-poppins">Lorem ipsum dolor sit amet consectetur. Faucibus elit eget eget mauris auctor.</p>
            </div>
            <div className="md:w-[15.625vw] w-[67.219vw] md:h-[7.916vw] h-[34.058vw] text-left md:space-y-[2vw] space-y-[3vw] bg-black/30 border-l-2 border-l-orange-brown rounded-md p-[0.625vw]">
              <p className="md:text-[1vw] text-[4.302vw] font-poppins">Best Seller</p>
              <p className="md:text-[0.833vw] text-[3.586vw] font-poppins">Lorem ipsum dolor sit amet consectetur. Faucibus elit eget eget mauris auctor.</p>
            </div>
          </div>
        </div>
        {/* content */}

      </div>
    </section>
  );
}
