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
    <section className="w-full md:min-h-[46.667vw] md:aspect-ratio[1920/1080] aspect-ratio[430/1551] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[52.135vw] md:h-[6.927vw] w-[80.93vw] h-[33.814vw] flex flex-col items-center justify-between">
        <h1 className="font-bold text-[4.467vw] md:text-[1.25vw] text-[#4273CE]">
          Our Services
        </h1>
        <h1 className="font-bold md:text-[1.875vw] text-[#161C2D] text-center md:block hidden">
          We provide great services for <br />
          our customers based on needs
        </h1>
        <h1 className="font-bold text-[6vw] text-[#161C2D] text-center md:hidden leading-[8vw]">
          We provide great services for our customers based on needs
        </h1>
      </div>
      <div className="md:w-[60.938vw] md:h-[25.156vw] w-[63.381vw] h-[284.128vw] flex flex-col md:flex-row items-center justify-between mt-[3vw]">
        {sources.map((client, index) => (
          <div
            className="md:w-[18.229vw] md:h-[25.156vw] w-[63.381vw] h-[87.465vw] flex flex-col items-center justify-center rounded-[2vw] md:rounded-[0.521vw] relative"
            style={{ backgroundColor: client.background }}
            key={index}
          >
            <Image
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} absolute top-[3.5vw]`}
            />
            <p className="text-white font-bold text-[4.347vw] md:text-[0.938vw] mt-[10vw] md:mt-0">
              {client.title}
            </p>
            <p className="md:w-[15.417vw] md:h-[4.531vw] w-[53.602vw] h-[15.814vw] text-white text-[3.079vw] md:text-[0.833vw] text-center mt-[5vw] md:mt-[1.5vw] md:leading-[1.5vw]">
              {client.text1}
            </p>
            <div className="absolute bottom-[5vw] md:bottom-[2vw]">
              <a href="" className="flex flex-row items-center">
                <h1 className="text-white text-[3.079vw] md:text-[0.885vw] font-bold mr-[1vw]">
                  Learn More
                </h1>
                <div className="text-[2.172vw] md:text-[0.625vw] text-white">
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
