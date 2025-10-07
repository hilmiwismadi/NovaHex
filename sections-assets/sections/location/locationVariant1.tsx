import Image from "next/image";

const sources = [
  {
    src: "/image/location/phone.png",
    width: "w-[4.912vw] md:w-[1.25vw]",
    height: "h-[4.912vw] md:h-[1.25vw]",
    text: "+62012 3456 789",
  },
  {
    src: "/image/location/email.png",
    width: "w-[4.912vw] md:w-[1.25vw]",
    height: "h-[4.912vw] md:h-[1.25vw]",
    text: "demo@gmail.com",
  },
  {
    src: "/image/location/maps.png",
    width: "w-[4.912vw] md:w-[1.25vw]",
    height: "h-[4.912vw] md:h-[1.25vw]",
    text: "Lorem ipsum dolor sit amet consectetur. Consectetur feugiat.",
  },
];

export default function location1() {
  return (
    <section className="w-full h-[195.581vw] md:h-[34.583vw] md:aspect-[1920/1080] aspect-[430/841] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="relative w-full h-full md:w-[47.604vw] md:h-[28.333vw] flex flex-col md:flex-row items-center justify-start">
        <div className="w-full h-[95vw] md:w-[25.573vw] md:h-[28.333vw] bg-[var(--color-secondary)] rounded-[2.047vw] md:rounded-[0.521vw] p-[5vw] md:p-[2vw] z-0 order-2 absolute bottom-0 md:block">
          {" "}
          {/** 1st */}
          <h1 className="font-bold text-white text-[5.73vw] md:text-[1.458vw] md:mt-0 mt-[5vw]">
            Contact Us
          </h1>
          <p className=" text-white text-[3.684vw] md:text-[0.938vw] mt-[0.5vw]">
            Say Something!
          </p>
          <div className="w-[68.956vw] h-[32.737vw] md:w-[17.552vw] md:h-[8.333vw] md:mt-0 mt-[10vw] flex flex-col justify-between">
            {sources.map((client, index) => (
              <div className="flex items-center mt-[1.5vw]" key={index}>
                <Image
                  src={client.src}
                  alt="Ornament Background"
                  width={10000}
                  height={10000}
                  className={`${client.width} ${client.height} mr-[1vw] md:mr-[0.5vw] object-cover`}
                />
                <p className="text-white text-[3.256vw] md:text-[0.833vw]">
                  {client.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:absolute md:right-[7vw] transform md:translate-x-[7vw] z-10 order-1">
          <Image
            src="/image/location/maps1.png"
            alt="Ornament Background"
            width={10000}
            height={10000}
            className="w-[80vw] h-[95.116vw] md:w-[24.792vw] md:h-[25.365vw]"
          />{" "}
          {/** 2nd */}
        </div>
      </div>
    </section>
  );
}
