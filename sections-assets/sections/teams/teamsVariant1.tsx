import Image from "next/image";

const sources = [
  {
    src: "/image/teams/Avatar1.png",
    width: "md:w-[4.167vw] w-[18.605vw]",
    height: "md:h-[4.167vw] h-[18.605vw]",
    title: "Theresa Webb",
    text1: "Application Support Analyst Lead",
    text2:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    src: "/image/teams/Avatar2.png",
    width: "md:w-[4.167vw] w-[18.605vw]",
    height: "md:h-[4.167vw] h-[18.605vw]",
    title: "Courtney Henry",
    text1: "Director, Undergraduate Analytics and Planning",
    text2: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
  },
  {
    src: "/image/teams/Avatar3.png",
    width: "md:w-[4.167vw] w-[18.605vw]",
    height: "md:h-[4.167vw] h-[18.605vw]",
    title: "Albert Flores",
    text1: "Career Educator",
    text2: "Former PM for Linear, Lambda School, and On Deck.",
  },
  {
    src: "/image/teams/Avatar4.png",
    width: "md:w-[4.167vw] w-[18.605vw]",
    height: "md:h-[4.167vw] h-[18.605vw]",
    title: "Marvin McKinney",
    text1: "Co-op & Internships Program & Operations Manager",
    text2: "Former frontend dev for Linear, Coinbase, and Postscript.",
  },
];

export default function teams1() {
  return (
    <section className="w-full md:min-h-[36.875vw] md:aspect-ratio[1920/1080] aspect-ratio[430/1702] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[62.5vw] md:h-[24.375vw] w-[88.605vw] h-[347.907vw] flex flex-col items-center justify-between">
        <div className="md:w-[40vw] md:h-[6.458vw] w-[88.605vw] h-[42.791vw] flex flex-col items-center justify-between md:justify-center  ">
          <h1 className="font-bold text-[8.372vw] md:text-[1.875vw]">
            Meet the Team
          </h1>
          <p className="text-[4.651vw] md:text-[1.042vw] mt-0 md:mt-[1vw] text-center text-[#667085]">
            Lorem ipsum dolor sit amet consectetur. Senectus ultrices tortor
            massa quis sagittis. Ultrices malesuada adipiscing parturient
            vivamus. Tristique ac.
          </p>
        </div>
        <div className="md:w-[62.5vw] md:h-[15.833vw] w-[64.186vw] h-[305.116vw] flex flex-col md:flex-row items-center justify-between mt-[2vw]">
          {sources.map((client, index) => (
            <div
              className="md:w-[14.375vw] md:h-[15.833vw] w-[64.186vw] h-[70.698vw] flex flex-col items-center bg-[#F9F9F9] rounded-[2.326vw] md:rounded-[0.521vw] border-[0.052vw] border-[#D4D4D4] p-[3vw] md:p-[1.25vw]"
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
              <p className="text-[3.721vw] md:text-[0.833vw] text-[#667085] text-center mt-[0.5vw]">
                {client.text2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
