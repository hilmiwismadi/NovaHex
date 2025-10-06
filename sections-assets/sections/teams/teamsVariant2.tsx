import Image from "next/image";

const sources = [
  {
    src: "/image/teams/Avatar5.png",
    width: "w-[36.744vw] md:w-[8.229vw]",
    height: "h-[36.744vw] md:h-[8.229vw]",
    title: "Courtney Henry",
    text1: "FOUNDER",
    text2:
      "My new site is so much faster and easier to work with than my old site.",
  },
  {
    src: "/image/teams/Avatar6.png",
    width: "w-[36.744vw] md:w-[8.229vw]",
    height: "h-[36.744vw] md:h-[8.229vw]",
    title: "Ian Kent",
    text1: "CO-FOUNDER",
    text2:
      "My new site is so much faster and easier to work with than my old site.",
  },
  {
    src: "/image/teams/Avatar6.png",
    width: "w-[36.744vw] md:w-[8.229vw]",
    height: "h-[36.744vw] md:h-[8.229vw]",
    title: "Ian Kent",
    text1: "CO-FOUNDER",
    text2:
      "My new site is so much faster and easier to work with than my old site.",
  },
];

export default function teams2() {
  return (
    <section className="w-full md:min-h-[35.833vw] md:aspect-ratio[1920/1080] aspect-ratio[430/1478] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[40vw] md:h-[2.292vw] w-full h-[10.233vw] flex flex-col items-center justify-center">
        <h1 className="text-[11.628vw] md:text-[2.604vw] font-bold">
          Our Team
        </h1>
      </div>
      <div className="md:w-[67.083vw] md:h-[17.917vw] w-[87.442vw] h-[277.209vw] flex flex-col md:flex-row justify-between mt-[2vw]">
        {sources.map((client, index) => (
          <div
            className="relative md:w-[19.583vw] md:h-[17.917vw] w-full h-[80vw] flex flex-col items-center"
            key={index}
          >
            <Image
              src={client.src}
              alt="Ornament Background"
              width={10000}
              height={10000}
              className={`${client.width} ${client.height} object-cover`}
            />
            <p className="font-bold text-[5.581vw] md:text-[1.25vw] mt-[2vw] md:mt-[0.5vw]">
              {client.title}
            </p>
            <p className="text-[#407BFF] text-[3.721vw] md:text-[0.833vw] text-center mt-[0.5vw]">
              {client.text1}
            </p>
            <p className="text-[3.721vw] md:text-[0.833vw] text-[#667085] text-center mt-[4vw] md:mt-[1vw]">
              {client.text2}
            </p>
            <div className="flex flex-row absolute bottom-0">
              <Image
                src="/image/teams/twt.png"
                alt="Ornament Background"
                width={10000}
                height={10000}
                className="md:w-[1.042vw] md:h-[1.042vw] w-[4.651vw] h-[4.651vw] mr-[2vw] md:mr-[0.7vw]"
              />
              <Image
                src="/image/teams/linkedin.png"
                alt="Ornament Background"
                width={10000}
                height={10000}
                className="md:w-[1.042vw] md:h-[1.042vw] w-[4.651vw] h-[4.651vw]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
