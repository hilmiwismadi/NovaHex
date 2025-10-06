import Image from "next/image";

const sources = [
  {
    src: "/image/kelebihan/padlockWhite.png",
    width: "w-[11.767vw] md:w-[4.271vw]",
    height: "h-[11.767vw] md:h-[4.271vw]",
    title: "Enhanced Security",
  },
  {
    src: "/image/kelebihan/gearWhite.png",
    width: "w-[12.644vw] md:w-[4.583vw]",
    height: "h-[12.644vw] md:h-[4.583vw]",
    title: "Increased Efficiency",
  },
  {
    src: "/image/kelebihan/puzzleWhite.png",
    width: "w-[11.493vw] md:w-[4.167vw]",
    height: "h-[11.493vw] md:h-[4.167vw]",
    title: "Improved Collaboration",
  },
  {
    src: "/image/kelebihan/magnifyingGlassWhite.png",
    width: "w-[10.2vw] md:w-[3.698vw]",
    height: "h-[10.2vw] md:h-[3.698vw]",
    title: " Data-Driven Insights",
  },
  {
    src: "/image/kelebihan/handMoneyWhite.png",
    width: "w-[10.488vw] md:w-[3.802vw]",
    height: "w-[10.488vw] md:h-[3.802vw]",
    title: "Best Price",
  },
];

export default function kelebihan4() {
  return (
    <section className="w-full h-[210.93vw] md:h-[30.781vw] md:aspect-[1920/1080] aspect-[430/907] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-[80.698vw] h-[30.656vw] md:w-[87.604vw] md:h-[5.365vw] text-center">
        <h1 className="font-bold text-[9.656vw] md:text-[2.917vw]">
          Kelebihan Kami
        </h1>
        <p className="text-[3.426vw] md:text-[0.938vw]">
          Odio vulputate cras vel lacinia turpis volutpat adipiscing.
          Sollicitudin at velit, blandit tempus nunc in.
        </p>
      </div>
      <div className="w-[72.695vw] h-[147.116vw] md:w-[63.073vw] md:h-[15.417vw] mt-[5vw] md:mt-[2vw] md:flex md:flex-row md:items-center md:justify-evenly grid grid-cols-2">
        {sources.map((client, index) => (
          <div
            className="w-[31.395vw] h-[42.326vw] md:w-[11.406vw] md:h-[15.417vw] flex flex-col items-center justify-center rounded-[7.184vw] md:rounded-[2.604vw] bg-[#4273CE] py-[1.667vw]"
            key={index}
          >
            <Image
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} object-cover`}
            />
            <h1 className="text-white text-[3.449vw] md:text-[1.25vw] font-bold mt-[0.5vw] text-center">
              {client.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}
