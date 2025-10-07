import Image from "next/image";

const sources = [
  {
    src: "/image/location/phone.png",
    width: "w-[5.056vw] md:w-[1.25vw]",
    height: "h-[5.056vw] md:h-[1.25vw]",
    text: "+62012 3456 789",
  },
  {
    src: "/image/location/email.png",
    width: "w-[5.056vw] md:w-[1.25vw]",
    height: "h-[5.056vw] md:h-[1.25vw]",
    text: "demo@gmail.com",
  },
  {
    src: "/image/location/maps.png",
    width: "w-[5.056vw] md:w-[1.25vw]",
    height: "h-[5.056vw] md:h-[1.25vw]",
    text: "Lorem ipsum dolor sit amet consectetur. Consectetur feugiat.",
  },
];

export default function location3() {
  return (
    <section className="w-full h-[218.605vw] md:h-[34.583vw] aspect-[430/940] md:aspect-[1920/1080] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-full h-full md:w-[51.927vw] md:h-[29.375vw] flex md:flex-row flex-col items-center justify-center bg-white rounded-[0.521vw] md:p-0">
        <div className="w-[88vw] h-[106.279vw] md:w-[25.573vw] md:h-[28.333vw] bg-[var(--color-secondary)] rounded-[2.03vw] md:rounded-[0.521vw] p-[5vw] md:p-[2vw] z-0 md:order-1 order-2">
          {" "}
          {/** 1st */}
          <h1 className="font-bold text-white text-[5.479vw] mt-[3vw] md:mt-0 md:text-[1.458vw]">
            Contact Us
          </h1>
          <p className=" text-white text-[3.523vw] md:text-[0.938vw] mt-[0.5vw]">
            Say Something!
          </p>
          <div className="w-[65.814vw] h-[31.312vw] md:w-[17.552vw] md:h-[8.333vw] mt-[8vw] md:mt-[3vw] flex flex-col justify-between">
            {sources.map((client, index) => (
              <div className="flex items-center mt-[1.5vw]" key={index}>
                <Image
                  src={client.src}
                  alt="Ornament Background"
                  width={10000}
                  height={10000}
                  className={`${client.width} ${client.height} mr-[2vw] md:mr-[0.5vw] object-cover`}
                />
                <p className="text-white text-[3.13vw] md:text-[0.833vw]">
                  {client.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:order-2 order-1">
          <Image
            src="/image/location/maps1.png"
            alt="Ornament Background"
            width={10000}
            height={10000}
            className="w-[93.151vw] h-[106.458vw] md:w-[24.792vw] md:h-[28.333vw] md:ml-[0.4vw] mb-[1vw] md:mb-0"
          />{" "}
          {/** 2nd */}
        </div>
      </div>
    </section>
  );
}
