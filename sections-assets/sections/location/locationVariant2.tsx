import Image from "next/image";

const sources = [
  {
    src: "/image/location/phoneBlack.png",
    width: "w-[5.056vw] md:w-[1.25vw]",
    height: "h-[5.056vw] md:h-[1.25vw]",
    text: "+62012 3456 789",
  },
  {
    src: "/image/location/emailBlack.png",
    width: "w-[5.056vw] md:w-[1.25vw]",
    height: "h-[5.056vw] md:h-[1.25vw]",
    text: "demo@gmail.com",
  },
  {
    src: "/image/location/locationBlack.png",
    width: "w-[5.056vw] md:w-[1.25vw]",
    height: "h-[5.056vw] md:h-[1.25vw]",
    text: "Lorem ipsum dolor sit amet consectetur. Consectetur feugiat.",
  },
];

export default function location1() {
  return (
    <section className="w-full h-[180.465vw] md:h-[30.99vw] md:aspect-[1920/1080] aspect-[430/776] md:p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-full h-full md:w-[53.906vw] md:h-[24.74vw] flex md:flex-row flex-col items-center justify-center bg-[#EEF3FF] rounded-[2.03vw] border-[#C9D9FF] border-[0.078vw]">
        <div className="w-[84vw] h-[76.512vw] md:w-[21.25vw] md:h-[18.646vw] md:order-1 order-2 flex flex-col justify-between md:mt-0 mt-[6vw]">
          <h1 className="text-[#407BFF] font-bold text-[6.279vw] md:text-[1.563vw]">
            Contact Us
          </h1>
          <p className="text-[3.372vw] md:text-[0.833vw]">
            Lorem ipsum dolor sit amet consectetur. Maecenas molestie quam amet
            nunc quisque condimentum. Feugiat adipiscing purus diam elit
            tristique. Lobortis nulla lectus et et id interdum dictumst eu
            dictumst. Ornare urna amet at congue orci dignissim mi libero vitae
            tristique.
          </p>
          {sources.map((client, index) => (
            <div className="flex items-center mt-[1vw]" key={index}>
              <Image
                src={client.src}
                alt="Ornament Background"
                width={10000}
                height={10000}
                className={`${client.width} ${client.height} mr-[0.5vw] object-cover`}
              />
              <p className="text-black text-[3.372vw] md:text-[0.833vw]">
                {client.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[85.814vw] h-[69.535vw] md:w-[25.365vw] md:h-[20.573vw] ml-[1vw] order-1 md:order-2">
          <Image
            src="/image/location/maps2.png"
            alt="Ornament Background"
            width={10000}
            height={10000}
            className="rounded-[1.86vw] md:rounded-[0.521vw]"
          />
        </div>
      </div>
    </section>
  );
}
