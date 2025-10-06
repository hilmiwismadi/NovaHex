import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const sources = [
  {
    src: "/image/portofolio/angels.jpg",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Sculpture",
    text2: "White Angel",
  },
  {
    src: "/image/portofolio/girraffe.png",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Oil Painting",
    text2: "Giraffe Portrait",
  },
  {
    src: "/image/portofolio/painting.jpg",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Abstract Painting",
    text2: "Euforia",
  },
  {
    src: "/image/portofolio/clock.jpg",
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Object Design",
    text2: "Classic Watch",
  },
  {
    src: "/image/portofolio/girraffe.png" /** 1st */,
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Oil Painting",
    text2: "Giraffe Portrait",
  },
  {
    src: "/image/portofolio/painting.jpg" /** 1st */,
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Abstract Painting",
    text2: "Euforia",
  },
  {
    src: "/image/portofolio/clock.jpg" /** 1st */,
    width: "w-[1.25vw]",
    height: "h-[1.25vw]",
    text1: "Object Design",
    text2: "Classic Watch",
  },
];

export default function portofolio1() {
  return (
    <section className="w-full md:min-h-[34.688vw] md:aspect-ratio[1920/1080] aspect-ratio[430/1713.61] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[91.667vw] md:h-[2.5vw] w-[55.349vw] h-[25.258vw] relative flex md:flex-row flex-col justify-between items-center">
        <h1 className="md:absolute md:left-0 md:text-[2.083vw] text-[8vw] font-bold text-center">
          Our Portofolio
        </h1>
        <div className="md:absolute md:right-0 md:mt-0 mt-[2vw]">
          <a
            href=""
            className="md:w-[10.365vw] md:h-[2.5vw] w-[42.802vw] h-[10.537vw] text-[#407BFF] flex items-center justify-center"
          >
            <h1 className=" text-[#407BFF] text-[3.458vw] md:text-[0.833vw] font-bold mr-[3vw] md:mr-[0.5vw]">
              View All Portofolio
            </h1>
            <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="md:w-[91.667vw] md:h-[18.438vw] w-[55.349vw] h-[346.047vw] flex flex-col md:flex-row items-center justify-between mt-[2vw]">
        {sources.map((client, index) => (
          <div
            key={index}
            className={`md:w-[12.333vw] md:h-[18.438vw] w-[55.07vw] h-[82.326vw] bg-cover bg-center relative rounded-[1.163vw] md:rounded-[0.26vw] group ${
              index > 3 ? "hidden md:block" : ""
            }`}
            style={{ backgroundImage: `url(${client.src})` }}
          >
            <div className="absolute inset-0 bg-black opacity-20 rounded-[1.163vw] md:rounded-[0.26vw] group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute top-[4vw] left-[4vw] md:top-[1vw] md:left-[1vw] text-white z-10">
              <h2 className="text-[3.721vw] md:text-[0.833vw]">
                {client.text1}
              </h2>
              <p className="font-bold text-[5.581vw] md:text-[1.25vw]">
                {client.text2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
