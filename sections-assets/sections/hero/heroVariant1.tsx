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
      <div className="flex flex-col items-center h-[51.875vw] justify-center md:px-0 px-[5vw]">
        <div className="md:w-[69.063vw] w-full h-[27.813vw] flex flex-col md:flex-row md: z-[1] gap-y-[2vw] items-center md:items-start">
          <div className="md:w-[31.146vw] w-full md:h-[19.479vw] my-[4vw] px-[2vw]">
            <h1 className="md:text-[2.604vw]/[3vw] text-[8.123vw] font-bold mb-[1vw]  ">
              Find Your Next Meal: The Best Restaurants in Town Await
            </h1>
            <h1 className="md:text-[0.938vw] text-[2.923vw] text-[#2C2C2C]">
              Find the perfect restaurant to satisfy your cravings and explore new
              flavors. With options for every taste and budget, you're sure to
              find something you'll love.
            </h1>
            <a
              href=""
              className="bg-[#4273CE] text-white font-semibold md:w-[6.667vw] w-[27.374vw] md:h-[2.24vw] h-[7.535vw] rounded-[0.521vw] md:text-[0.938vw] text-[2.977vw] my-[1vw] text-center flex items-center justify-center hover:bg-[#5AB0BB] hover:scale-[102%] transition-all duration-700 ease-in-out"
            >
              Book Now
            </a>
          </div>
          <Image
            src="/image/hero/hero1/illustrations.png"
            alt="Illustration"
            width={2000}
            height={2000}
            className="md:w-[37.656vw] w-[86.279vw] md:h-[27.813vw] h-[63.726vw] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
