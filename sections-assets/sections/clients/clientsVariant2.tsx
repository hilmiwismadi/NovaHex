import Image from "next/image";

const sources = [
  {
    src: "/image/clients/reddit.png",
    width: "w-[15.077vw] md:w-[6.52vw]",
    height: "h-[5.198vw] md:h-[3vw]",
  },
  {
    src: "/image/clients/spotify.png",
    width: "w-[16.279vw] md:w-[6.823vw]",
    height: "h-[4.884vw] md:h-[2.083vw]",
  },
  {
    src: "/image/clients/google.png",
    width: "w-[15.814vw] md:w-[6.979vw]",
    height: "h-[4.884vw] md:h-[2.188vw]",
  },
  {
    src: "/image/clients/pinterest.png",
    width: "w-[14.884vw] md:w-[7.187vw]",
    height: "h-[3.721vw] md:h-[1.771vw]",
  },
  {
    src: "/image/clients/reddit.png",
    width: "w-[15.077vw] md:w-[6.52vw]",
    height: "h-[5.198vw] md:h-[3vw]",
  },
  {
    src: "/image/clients/spotify.png",
    width: "w-[16.279vw] md:w-[6.823vw]",
    height: "h-[4.884vw] md:h-[2.083vw]",
  },
  {
    src: "/image/clients/google.png",
    width: "w-[15.814vw] md:w-[6.979vw]",
    height: "h-[4.884vw] md:h-[2.188vw]",
  },
  {
    src: "/image/clients/pinterest.png",
    width: "w-[14.884vw] md:w-[7.187vw]",
    height: "h-[3.721vw] md:h-[1.771vw]",
  },
];

export default function Clients2() {
  return (
    <section className="w-full md:h-[22.04vw] md:aspect-[1920/1080] aspect-[430/508.35] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="flex md:flex-row flex-col">
        <div className="w-[12.917vw] h-[10.469vw] mr-[1vw] relative md:flex flex-col justify-between items-center hidden">
          <div className="w-[12.917vw] h-[3.75vw]">
            <h1 className="text-center font-bold text-[1.667vw]">1M+</h1>
            <h1 className="text-center text-[0.99vw]">Projects</h1>
          </div>
          <div className="flex items-center justify-center">
            {" "}
            {/* line between */}
            <div className="w-[7.708vw] h-[0.156vw] bg-black absolute"></div>
          </div>
          <div className="w-[12.917vw] h-[3.75vw]">
            <h1 className="text-center font-bold text-[1.667vw]">4 Years</h1>
            <h1 className="text-center text-[0.99vw]">Experience</h1>
          </div>
        </div>
        <div className="w-[40.729vw] h-[10.581vw] relative flex flex-col md:items-start md:justify-start items-center justify-center">
          {" "}
          {/*boundary*/}
          <h1 className="font-bold text-[7.442vw] md:text-[2.083vw] md:mb-0 mb-[7vw]">
            Our Client
          </h1>
          <div className="w-[80vw] h-[18.14vw] mr-[1vw] relative md:hidden flex flex-row justify-between items-center md:mb-0 mb-[7vw]">
            <div className="w-[34.884vw] h-[12.326vw]">
              <h1 className="text-center font-bold text-[6.047vw]">1M+</h1>
              <h1 className="text-center text-[3.488vw]">Projects</h1>
            </div>
            <div className="flex items-center justify-center">
              {" "}
              {/* line between */}
              <div className="w-[0.5vw] h-[18.14vw] bg-black absolute"></div>
            </div>
            <div className="w-[34.884vw] h-[12.326vw]">
              <h1 className="text-center font-bold text-[6.047vw]">4 Years</h1>
              <h1 className="text-center text-[3.488vw]">Experience</h1>
            </div>
          </div>
          <div className="w-[33.76vw] h-[2.248vw] hidden md:flex flex-wrap justify-start items-center md:order-3 order-3">
            {sources.map((client, index) => (
              <Image
                key={index}
                src={client.src}
                alt="Ornament Background"
                width={10000}
                height={10000}
                className={`${client.width} ${client.height} mt-[1vw] mr-[0.5vw]`}
              />
            ))}
          </div>
          <div className="md:hidden w-[74.419vw] h-[25.663vw] grid grid-cols-3 gap-[1vw] items-center justify-items-center mt-[5vw]">
            {sources.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center my-[1vw]"
              >
                <Image
                  key={index}
                  src={client.src}
                  alt="Ornament Background"
                  width={10000}
                  height={10000}
                  className={`${client.width} ${client.height}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
