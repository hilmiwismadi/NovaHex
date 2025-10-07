import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const sources = [
  {
    src: "/image/service/merah.png",
    width: "md:w-[4.167vw] w-[20.751vw]",
    height: "md:h-[4.167vw] h-[25.777vw]",
    title: "Content Writing",
    text1:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    background: "#F64B4B",
  },
  {
    src: "/image/service/ijo.png",
    width: "md:w-[4.167vw] w-[20.751vw]",
    height: "md:h-[4.167vw] h-[25.777vw]",
    title: "Web Development",
    text1:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    background: "#473BF0",
  },
  {
    src: "/image/service/biru.png",
    width: "md:w-[4.167vw] w-[20.751vw]",
    height: "md:h-[4.167vw] h-[25.777vw]",
    title: "Graphic Design",
    text1:
      "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    background: "#68D585",
  },
];

export default function service1() {
  return (
    <section className="w-full md:min-h-[46.667vw] md:aspect-ratio[1920/1080] aspect-ratio[430/1551] p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-full sm:w-[90%] lg:w-[52.135vw] lg:h-[6.927vw] flex flex-col items-center justify-between gap-4 sm:gap-6">
        <h1 className="font-bold text-base sm:text-lg lg:text-[1.25vw] text-[var(--color-secondary)]">
          Our Services
        </h1>
        <h1 className="font-bold text-xl sm:text-2xl lg:text-[1.875vw] text-[#161C2D] text-center md:block hidden">
          We provide great services for <br />
          our customers based on needs
        </h1>
        <h1 className="font-bold text-xl sm:text-2xl text-[#161C2D] text-center md:hidden leading-relaxed">
          We provide great services for our customers based on needs
        </h1>
      </div>
      <div className="w-full sm:w-[90%] lg:w-[60.938vw] lg:h-[25.156vw] flex flex-col md:flex-row items-center justify-between mt-6 sm:mt-8 lg:mt-[3vw] gap-6 sm:gap-8 lg:gap-0">
        {sources.map((client, index) => (
          <div
            className="w-full sm:w-[80%] lg:w-[18.229vw] lg:h-[25.156vw] flex flex-col items-center justify-center rounded-lg lg:rounded-[0.521vw] relative hover:scale-105 hover:shadow-2xl transition-all duration-300"
            style={{ backgroundColor: client.background }}
            key={index}
          >
            <div className="absolute top-8 sm:top-10 lg:top-[3.5vw] overflow-hidden">
              <Image
                src={client.src}
                alt="Ornament Background"
                width={10000}
                height={10000}
                className="w-16 sm:w-20 lg:w-[4.167vw] lg:h-[4.167vw] hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-white font-bold text-base sm:text-lg lg:text-[0.938vw] mt-20 sm:mt-24 lg:mt-0">
              {client.title}
            </p>
            <p className="w-full sm:w-[80%] lg:w-[15.417vw] lg:h-[4.531vw] text-white text-sm sm:text-base lg:text-[0.833vw] text-center mt-4 sm:mt-6 lg:mt-[1.5vw] lg:leading-[1.5vw] px-4">
              {client.text1}
            </p>
            <div className="absolute bottom-6 sm:bottom-8 lg:bottom-[2vw]">
              <a href="" className="flex flex-row items-center hover:gap-3 gap-2 transition-all duration-300 group">
                <h1 className="text-white text-sm sm:text-base lg:text-[0.885vw] font-bold">
                  Learn More
                </h1>
                <div className="text-xs sm:text-sm lg:text-[0.625vw] text-white group-hover:translate-x-1 transition-transform duration-300">
                  <FaArrowRight />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
