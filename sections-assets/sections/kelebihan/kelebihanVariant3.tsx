import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";

const sources = [
  {
    icon: <FaTrophy className="text-[var(--color-primary)] md:text-[3.125vw] text-[13.953vw]" />,
    title: "High Quality",
    text: "crafted from top materials",
  },
  {
    icon: <FaShieldAlt className="text-[var(--color-primary)] md:text-[3.125vw] text-[13.953vw]" />,
    title: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    icon: <FaShippingFast className="text-[var(--color-primary)] md:text-[3.125vw] text-[13.953vw]" />,
    title: "Free Shipping",
    text: "Order over $150",
  },
  {
    icon: <FaHeadset className="text-[var(--color-primary)] md:text-[3.125vw] text-[13.953vw]" />,
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
            <div className="mr-[2.5vw] md:mr-[1vw] hover:scale-110 transition-transform duration-300">
              {client.icon}
            </div>
            <div className="">
              <h1 className="text-[5.814vw] md:text-[1.094vw] font-bold group-hover:text-[var(--color-primary)] transition-colors duration-300">
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
