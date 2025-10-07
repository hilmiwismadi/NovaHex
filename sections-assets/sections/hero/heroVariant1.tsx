import Image from "next/image";
import Navbar1 from "../navbar/navbarVariant1";

interface heroprops {
  navbar: JSX.Element
}

export default function Hero1() {
  return (
    <section className="w-full md:aspect-[1920/1080] aspect-[430/1080] flex flex-col items-center text-gray-800 relative">
      {/* Ornament background */}
      <Image
          src="/image/hero/hero1/bg_oval.png"
          alt="Ornament Background"
          width={10000}
          height={10000}
          className="w-[65.156vw] h-[65.156vw] object-cover z-[0] absolute top-[60vw] md:top-0 right-0"
        />
      <div className="flex flex-col items-center h-[51.875vw] justify-center px-4 sm:px-6 lg:px-0">
        <div className="w-full lg:w-[69.063vw] h-auto lg:h-[27.813vw] flex flex-col md:flex-row z-[1] gap-y-6 sm:gap-y-8 lg:gap-y-[2vw] items-center md:items-start">
          <div className="w-full lg:w-[31.146vw] lg:h-[19.479vw] my-6 sm:my-8 lg:my-[4vw] px-4 sm:px-6 lg:px-[2vw]">
            <h1 className="text-2xl sm:text-3xl lg:text-[2.604vw] lg:leading-[3vw] font-bold mb-3 sm:mb-4 lg:mb-[1vw]">
              Find Your Next Meal: The Best Restaurants in Town Await
            </h1>
            <h1 className="text-sm sm:text-base lg:text-[0.938vw] text-[#2C2C2C]">
              Find the perfect restaurant to satisfy your cravings and explore new
              flavors. With options for every taste and budget, you're sure to
              find something you'll love.
            </h1>
            <a
              href=""
              className="bg-[#4273CE] text-white font-semibold w-32 sm:w-36 lg:w-[6.667vw] h-10 sm:h-12 lg:h-[2.24vw] rounded-lg lg:rounded-[0.521vw] text-sm sm:text-base lg:text-[0.938vw] my-3 sm:my-4 lg:my-[1vw] text-center flex items-center justify-center hover:bg-[#5AB0BB] hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </a>
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/image/hero/hero1/illustrations.png"
              alt="Illustration"
              width={2000}
              height={2000}
              className="w-full sm:w-[90%] lg:w-[37.656vw] lg:h-[27.813vw] object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
