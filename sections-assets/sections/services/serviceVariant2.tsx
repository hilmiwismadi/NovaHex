import Image from "next/image";

const sources = [
  {
    src: "/image/service/stroberi1.jpg",
    width: "md:w-[29.063vw] w-[84.8vw]",
    height: "md:h-[15.99vw] h-[46.605vw]",
    title: "Pellentesque turpis vestibulum",
    text1:
      "Ullamcorper enim, diam eros sed et vitae sit. Platea porttitor consequat, lorem in arcu et.",
  },
  {
    src: "/image/service/bluberi.jpg",
    width: "md:w-[29.063vw] w-[84.8vw]",
    height: "md:h-[15.99vw] h-[46.605vw]",
    title: "Pellentesque turpis vestibulum",
    text1:
      "Ullamcorper enim, diam eros sed et vitae sit. Platea porttitor consequat, lorem in arcu et.",
  },
  {
    src: "/image/service/stroberi2.jpg",
    width: "md:w-[29.063vw] w-[84.8vw]",
    height: "md:h-[15.99vw] h-[46.605vw]",
    title: "Pellentesque turpis vestibulum",
    text1:
      "Ullamcorper enim, diam eros sed et vitae sit. Platea porttitor consequat, lorem in arcu et.",
  },
];

export default function service2() {
  return (
    <section className="w-full md:min-h-[40.99vw] md:aspect-ratio[1920/1080] aspect-ratio[430/1227] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <h1 className="text-[11.358vw] md:text-[2.083vw] font-bold text-[var(--color-tertiary)]">
        Our Services
      </h1>
      <div className="md:w-[92.188vw] md:h-[22.865vw] w-[84.707vw] h-[214.616vw] flex flex-col md:flex-row items-center justify-between mt-[2vw]">
        {sources.map((client, index) => (
          <div
            className="md:w-[29.063vw] md:h-[22.865vw] w-[84.707vw] h-[66.681vw] flex flex-col group"
            key={index}
          >
            <div className="overflow-hidden rounded-[1.563vw]">
              <Image
                src={client.src}
                alt="Ornament Background"
                width={10000}
                height={10000}
                className={`${client.width} ${client.height} hover:scale-105 transition-transform duration-300`}
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold text-[3.644vw] md:text-[1.25vw] mt-[1vw] group-hover:text-[var(--color-tertiary)] transition-colors duration-300">
                {client.title}
              </p>
              <p className="text-[2.733vw] md:text-[0.938vw] mt-[0.2vw] md:leading-[2vw]">
                {client.text1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
