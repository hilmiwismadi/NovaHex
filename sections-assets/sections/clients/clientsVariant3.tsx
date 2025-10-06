import Image from "next/image";

const sources1 = [
  {
    src: "/image/clients/reddit.png",
    width: "md:w-[6.52vw] w-[13.337vw]",
    height: "md:h-[3vw] h-[3.77vw]",
  },
  {
    src: "/image/clients/spotify.png",
    width: "md:w-[6.823vw] w-[11.212vw]",
    height: "md:h-[2.083vw] h-[3.093vw]",
  },
  {
    src: "/image/clients/google.png",
    width: "md:w-[6.979vw] w-[11.986vw]",
    height: "md:h-[2.188vw] h-[3.384vw]",
  },
  {
    src: "/image/clients/pinterest.png",
    width: "md:w-[7.187vw] w-[14.014vw]",
    height: "md:h-[1.771vw] h-[4.447vw]",
  },
  {
    src: "/image/clients/stripe.png",
    width: "md:w-[9.107vw] w-[13.337vw]",
    height: "md:h-[4.341vw] h-[3.093vw]",
  },
];
const sources2 = [
  {
    src: "/image/clients/reddit.png",
    width: "md:w-[6.52vw] w-[13.119vw]",
    eight: "md:h-[3vw] h-[3.423vw]",
  },
  {
    src: "/image/clients/spotify.png",
    width: "md:w-[6.823vw] w-[7.795vw]",
    height: "md:h-[2.083vw] w-[4.849vw]",
  },
  {
    src: "/image/clients/google.png",
    width: "md:w-[6.979vw] w-[9.412vw]",
    height: "md:h-[2.188vw] h-[3.802vw]",
  },
  {
    src: "/image/clients/pinterest.png",
    width: "md:w-[7.187vw] w-[6.653vw]",
    height: "md:h-[1.771vw] h-[4.184vw]",
  },
  {
    src: "/image/clients/stripe.png",
    width: "md:w-[9.107vw] w-[10.456vw]",
    height: "md:h-[4.341vw] h-[2.756vw]",
  },
];

export default function Clients3() {
  return (
    <section className="w-full md:min-h-[20.885vw] md:aspect-ratio[1920/1080] aspect-ratio[430/321.97] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <h1 className="md:w-[91.667vw] md:h-[2.292vw] w-[81.395vw] h-[8.14vw] text-center font-bold md:text-[2.083vw] text-[7.442vw]">
        Our Top Partners
      </h1>
      <div className="flex flex-col">
        <div className="flex justify-center items-center md:mt-[2vw] mt-[5vw]">
          {sources1.map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} mt-[1vw] mx-[1vw]`}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          {sources2.map((client, index) => (
            <Image
              key={index}
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} mt-[1vw] mx-[1vw]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
