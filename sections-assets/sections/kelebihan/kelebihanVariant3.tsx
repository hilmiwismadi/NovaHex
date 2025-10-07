import Image from "next/image";

const sources = [
  {
    src: "/image/kelebihan/trophy.png",
    width: "md:w-[3.125vw] w-[13.953vw]",
    height: "md:h-[3.125vw] h-[13.953vw]",
    title: "High Quality",
    text: "crafted from top materials",
  },
  {
    src: "/image/kelebihan/guarantee.png",
    width: "md:w-[3.125vw] w-[13.953vw]",
    height: "md:h-[3.125vw] h-[13.953vw]",
    title: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    src: "/image/kelebihan/shipping.png",
    width: "md:w-[3.125vw] w-[13.953vw]",
    height: "md:h-[3.125vw] h-[13.953vw]",
    title: "Free Shipping",
    text: "Order over $150",
  },
  {
    src: "/image/kelebihan/customerSupport.png",
    width: "md:w-[3.125vw] w-[13.953vw]",
    height: "md:h-[3.125vw] h-[13.953vw]",
    title: "24 / 7 Support",
    text: "Dedicated support",
  },
];

export default function kelebihan3() {
  return (
    <section className="w-full md:min-h-[14.063vw]  md:aspect-ratio[1920/1080] aspect-ratio[430/613] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[69.479vw] md:h-[3.646vw] w-[78.372vw] h-[110.465vw] flex md:flex-row flex-col items-center md:justify-center justify-between">
        {sources.map((client, index) => (
          <div
            className="md:w-[17.552vw] md:h-[3.646vw] w-full h-[16.279vw] flex flex-row items-center justify-start md:justify-center group"
            key={index}
          >
            <Image
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} mr-[2.5vw] md:mr-[1vw] object-cover hover:scale-110 transition-transform duration-300`}
            />
            <div className="">
              <h1 className="text-[5.814vw] md:text-[1.094vw] font-bold group-hover:text-[#1AB0C8] transition-colors duration-300">
                {client.title}
              </h1>
              <p className="text-[5vw] md:text-[0.885vw] text-[#898989]">
                {client.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
