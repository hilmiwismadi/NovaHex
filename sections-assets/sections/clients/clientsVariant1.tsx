import Image from "next/image";

const sources = [
  {
    src: "/image/clients/reddit.png",
    width: "md:w-[6.52vw] w-[23.065vw]",
    height: "md:h-[3vw] h-[13.256vw]",
  },
  {
    src: "/image/clients/spotify.png",
    width: "md:w-[9.107vw] w-[26.047vw]",
    height: "md:h-[2.734vw] h-[7.907vw]",
  },
  {
    src: "/image/clients/google.png",
    width: "md:w-[6.979vw] w-[25.581vw]",
    height: "md:h-[2.188vw] h-[7.907vw]",
  },
  {
    src: "/image/clients/pinterest.png",
    width: "md:w-[7.187vw] w-[26.512vw]",
    height: "md:h-[1.771vw] h-[6.512vw]",
  },
  {
    src: "/image/clients/stripe.png",
    width: "md:w-[9.107vw] w-[23.256vw]",
    height: "md:h-[4.341vw] h-[10.93vw]",
  },
  {
    src: "/image/clients/google.png",
    width: "md:w-[6.979vw] w-[25.581vw]",
    height: "md:h-[2.188vw] h-[7.907vw]",
  },
  {
    src: "/image/clients/pinterest.png",
    width: "md:w-[7.187vw] w-[26.512vw]",
    height: "md:h-[1.771vw] h-[6.512vw]",
  },
  {
    src: "/image/clients/stripe.png",
    width: "md:w-[9.107vw] w-[23.256vw]",
    height: "md:h-[4.341vw] h-[10.93vw]",
  },
];

export default function Clients1() {
  return (
    <section className="w-full md:min-h-[20.833vw] md:aspect-ratio[1920/1080] aspect-ratio[430/459] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[52.135vw] md:h-[2.5vw] w-[81.395vw] h-fit">
        <h1 className="md:text-[2.083vw] text-[9.302vw] text-center font-bold">
          Our Client
        </h1>
      </div>
      <div className="md:flex md:justify-center md:items-center grid grid-cols-2 gap-[1.5vw] gap-x-[4vw] mt-[5vw] ">
        {sources.map((client, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} md:mt-[0.5vw] md:mx-[1vw]`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
