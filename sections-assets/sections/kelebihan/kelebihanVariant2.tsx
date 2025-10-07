import { FaDesktop, FaWifi, FaCoffee } from "react-icons/fa";

const sources = [
  {
    icon: <FaDesktop className="text-[var(--color-primary)] md:text-[2.318vw] text-[10.051vw]" />,
    title: "Dedicated Desk",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: <FaWifi className="text-[var(--color-primary)] md:text-[2.063vw] text-[8.947vw]" />,
    title: "High Speed Internet",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    icon: <FaCoffee className="text-[var(--color-primary)] md:text-[1.823vw] text-[7.907vw]" />,
    title: "Unlimited Coffee",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
];

export default function kelebihan2() {
  return (
    <section className="w-full md:min-h-[15.417vw] md:aspect-ratio[1920/1080] aspect-ratio[430/676] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[57.552vw] md:h-[7.083vw] w-[78.837vw] h-[117.733vw] flex md:flex-row flex-col items-center justify-between">
        {sources.map((client, index) => (
          <div
            className="w-full md:h-[7.083vw] h-[30.721vw] flex flex-row mr-0 md:mr-[1vw] group"
            key={index}
          >
            <div className="mr-[5vw] md:mr-[1vw] hover:scale-110 transition-transform duration-300">
              {client.icon}
            </div>
            <div className="">
              <h1 className="text-[4.744vw] md:text-[1.094vw] font-bold group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {client.title}
              </h1>
              <p className="mt-[1.4vw] text-[3.84vw] md:text-[0.885vw] text-justify">
                {client.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
