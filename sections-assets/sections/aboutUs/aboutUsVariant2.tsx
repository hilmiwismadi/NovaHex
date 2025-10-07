import Image from "next/image";

export default function AboutUs2() {
  return (
    <section className="w-full md:min-h-[31.563vw] md:aspect-ratio[1920/1080] aspect-ratio[430/742] p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-full sm:w-[90%] lg:w-[65.729vw] lg:h-[19.583vw] flex flex-col md:flex-row md:justify-center justify-between items-start gap-4 sm:gap-6">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-[1.875vw] text-[#C77B2C] md:hidden flex">
          About us
        </h1>
        <div className="w-full lg:w-[23.385vw] lg:h-[16.042vw] order-2 md:order-1">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-[1.875vw] text-[#C77B2C] hidden md:flex">
            About us
          </h1>
          <p className="w-full text-sm sm:text-base lg:text-[1.042vw] text-justify">
            Lorem ipsum dolor sit amet consectetur. Nullam elit adipiscing
            tincidunt id. Sed scelerisque in eu auctor. Lectus enim id et eget
            risus est ipsum morbi sit. Cursus tortor in et at viverra fermentum.
          </p>
          <p className="text-sm sm:text-base lg:text-[1.042vw] text-justify mt-3 sm:mt-4 lg:mt-[0.5vw]">
            Orci tellus fames pharetra elit fermentum magna morbi donec.
            Pulvinar quis blandit sollicitudin ut lectus cursus. Ipsum luctus
            duis vitae venenatis. Amet.
          </p>
        </div>
        <div className="ml-0 lg:ml-[3vw] order-1 md:order-2 overflow-hidden rounded-lg">
          <Image
            src="/image/aboutUs/aboutUs2/fotoKopi.png"
            alt="Ornament Background"
            width={1000}
            height={1000}
            className="w-full lg:w-[32.969vw] lg:h-[18.542vw] bg-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
