import Image from "next/image";

const sources1 = [
  {
    src: "/image/kelebihan/padlock.png",
    width: "md:w-[4.583vw] w-[14.24vw]",
    height: "md:h-[4.583vw] h-[14.24vw]",
    title: "Enhanced Security",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/gear.png",
    width: "md:w-[4.583vw] w-[14.24vw]",
    height: "md:h-[4.583vw] h-[14.24vw]",
    title: "Increased Efficiency",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/puzzle.png",
    width: "md:w-[4.583vw] w-[14.24vw]",
    height: "md:h-[4.583vw] h-[14.24vw]",
    title: "Improved Collaboration",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
];

const sources2 = [
  {
    src: "/image/kelebihan/magnifyingGlass.png",
    width: "md:w-[3.906vw] w-[12.135vw]",
    height: "md:h-[3.906vw] h-[12.135vw]",
    title: " Data-Driven Insights",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/lifePreserver.png",
    width: "md:w-[3.906vw] w-[12.135vw]",
    height: "md:h-[3.906vw] h-[12.135vw]",
    title: "24/7 Customer Support",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
  {
    src: "/image/kelebihan/handMoney.png",
    width: "md:w-[3.906vw] w-[12.135vw]",
    height: "md:h-[3.906vw] h-[12.135vw]",
    title: "Best Price",
    text: "Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque elementum fringilla eros condimentum faucibus scelerisque senectus. Imperdiet nulla egestas",
  },
];

export default function kelebihan1() {
  return (
    <section className="w-full md:min-h-[42.344vw] md:aspect-ratio[1920/1080] aspect-ratio[430/1628] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[87.5vw] md:h-[34.01vw] w-full h-[326.512vw] flex flex-col items-center justify-between">
        <div className="md:w-[52.135vw] md:h-[5.938vw] w-[79.07vw] h-[78.372vw] text-center">
          <h1 className="font-bold text-[13.53vw] md:text-[2.083vw] text-[#4273CE]">
            Solution for Your Business
          </h1>
          <p className="text-[3.488vw] md:text-[1.25vw] text-[#5E5E5E] text-center">
            Lorem ipsum dolor sit amet consectetur. Scelerisque pellentesque
            elementum fringilla eros condimentum faucibus scelerisque senectus.
            Imperdiet nulla egestas
          </p>
        </div>
        <div className="w-full md:h-[25.052vw] h-[248.14vw] mt-[5vw] md:mt-[2vw] flex flex-col justify-center md:justify-between">
          <div className="flex items-center justify-center flex-col md:flex-row">
            {sources1.map((client, index) => (
              <div
                className="md:w-[29.167vw] w-full flex flex-col items-center justify-center md:mt-0 mt-[2vw]"
                key={index}
              >
                <Image
                  src={client.src}
                  alt="Ornament Background"
                  width={10000}
                  height={10000}
                  className={`${client.width} ${client.height} object-cover`}
                />
                <h1 className="text-black text-[3.884vw] md:text-[1.25vw] font-bold mt-[0.5vw]">
                  {client.title}
                </h1>
                <p className="text-[2.912vw] md:text-[0.938vw] text-[#5E5E5E] text-justify px-[1.3vw] mt-[1vw]">
                  {client.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between md:justify-center flex-col md:flex-row mt-[1vw]">
            {sources2.map((client, index) => (
              <div
                className="md:w-[29.167vw] w-full flex flex-col items-center justify-center md:mt-0 mt-[2vw]"
                key={index}
              >
                <Image
                  src={client.src}
                  alt="Ornament Background"
                  width={10000}
                  height={10000}
                  className={`${client.width} ${client.height} object-cover`}
                />
                <h1 className="text-black text-[3.884vw] md:text-[1.25vw] font-bold mt-[0.5vw]">
                  {client.title}
                </h1>
                <p className="text-[2.912vw] md:text-[0.938vw] text-[#5E5E5E] text-justify px-[1.3vw] mt-[1vw]">
                  {client.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
