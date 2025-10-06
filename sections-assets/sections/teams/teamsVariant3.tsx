import Image from "next/image";

const sources1 = [
  {
    src: "/image/teams/Avatar1.png",
    width: "w-[18.605vw] md:w-[4.167vw]",
    height: "w-[18.605vw] md:h-[4.167vw]",
    title: "Theresa Webb",
    text1: "Founder & CEO",
    text2:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    src: "/image/teams/Avatar2.png",
    width: "w-[18.605vw] md:w-[4.167vw]",
    height: "w-[18.605vw] md:h-[4.167vw]",
    title: "Courtney Henry",
    text1: "Engineering Manager",
    text2: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
  },
  {
    src: "/image/teams/Avatar3.png",
    width: "w-[18.605vw] md:w-[4.167vw]",
    height: "w-[18.605vw] md:h-[4.167vw]",
    title: "Albert Flores",
    text1: "Product Manager",
    text2: "Former PM for Linear, Lambda School, and On Deck.",
  },
  {
    src: "/image/teams/Avatar4.png",
    width: "w-[18.605vw] md:w-[4.167vw]",
    height: "w-[18.605vw] md:h-[4.167vw]",
    title: "Marvin McKinney",
    text1: "Frontend Developer",
    text2: "Former frontend dev for Linear, Coinbase, and Postscript.",
  },
];

export default function teams3() {
  return (
    <section className="w-full md:min-h-[57.708vw] md:aspect-ratio[1920/1080] aspect-ratio[430/2998] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[40vw] md:h-[8.333vw] w-[86.279vw] h-[51.163vw] flex flex-col items-center justify-between md:justify-center">
        <p className="text-[#407BFF] text-[3.721vw] md:text-[0.833vw]">
          We're hiring!
        </p>
        <h1 className="font-bold text-[8.372vw] md:text-[1.875vw]">
          Meet the Team
        </h1>
        <p className="text-[4.651vw] md:text-[1.042vw] mt-0 md:mt-[1vw] text-center">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
      </div>
      <div className="md:w-[78.698vw] md:h-[33.75vw] w-[78.547vw] h-[212.791vw] overflow-auto scrollbar-blue flex flex-col justify-between mt-[2vw]">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {sources1.map((client, index) => (
            <div
              className="md:w-[17.578vw] md:h-[15.208vw] w-full h-[67.907vw] flex flex-col items-center bg-[#F9FAFB] p-[2vw] md:p-[1.25vw] md:mb-0 mb-[5vw] relative"
              key={index}
            >
              <Image
                src={client.src}
                alt="Ornament Background"
                width={10000}
                height={10000}
                className={`${client.width} ${client.height} object-cover md:mt-0 mt-[3vw]`}
              />
              <p className="font-bold text-[4.186vw] md:text-[0.938vw] mt-[3vw] md:mt-[0.5vw]">
                {client.title}
              </p>
              <p className="text-[#407BFF] text-[3.721vw] md:text-[0.833vw] text-center mt-[0.5vw]">
                {client.text1}
              </p>
              <p className="text-[3.721vw] md:text-[0.833vw] text-[#667085] text-center mt-[2.5vw] md:mt-[0.5vw]">
                {client.text2}
              </p>
              <div className="flex flex-row absolute md:bottom-[0.5vw] bottom-[3vw]">
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
        <div className="flex flex-col md:flex-row items-center justify-between">
          {sources1.map((client, index) => (
            <div
              className="md:w-[17.578vw] md:h-[15.208vw] w-full h-[67.907vw] flex flex-col items-center bg-[#F9FAFB] p-[2vw] md:p-[1.25vw] md:mt-0 mt-[5vw] relative"
              key={index}
            >
              <Image
                src={client.src}
                alt="Ornament Background"
                width={10000}
                height={10000}
                className={`${client.width} ${client.height} object-cover md:mt-0 mt-[3vw]`}
              />
              <p className="font-bold text-[4.186vw] md:text-[0.938vw] mt-[3vw] md:mt-[0.5vw]">
                {client.title}
              </p>
              <p className="text-[#407BFF] text-[3.721vw] md:text-[0.833vw] text-center mt-[0.5vw]">
                {client.text1}
              </p>
              <p className="text-[3.721vw] md:text-[0.833vw] text-[#667085] text-center mt-[2.5vw] md:mt-[0.5vw]">
                {client.text2}
              </p>
              <div className="flex flex-row absolute md:bottom-[0.5vw] bottom-[3vw]">
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
      </div>
    </section>
  );
}
