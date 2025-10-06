import Image from "next/image";

export default function AboutUs2() {
  return (
    <section className="w-full md:min-h-[31.563vw] md:aspect-ratio[1920/1080] aspect-ratio[430/742] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative ">
      <div className="w-[84.884vw] h-[141.46vw] md:w-[65.729vw] md:h-[19.583vw] flex flex-col md:flex-row md:justify-center justify-between items-start">
        <h1 className="font-bold text-[8.105vw] text-[#C77B2C] md:hidden flex">
          About us
        </h1>
        <div className="md:w-[23.385vw] md:h-[16.042vw] w-[84.884vw] order-2 md:order-1">
          <h1 className="font-bold text-[1.875vw] text-[#C77B2C] hidden md:flex">
            About us
          </h1>
          <p className="w-full text-[4.502vw] md:text-[1.042vw] text-justify">
            Lorem ipsum dolor sit amet consectetur. Nullam elit adipiscing
            tincidunt id. Sed scelerisque in eu auctor. Lectus enim id et eget
            risus est ipsum morbi sit. Cursus tortor in et at viverra fermentum.
          </p>
          <p className="text-[4.502vw] md:text-[1.042vw] text-justify mt-[3vw] md:mt-[0.5vw]">
            Orci tellus fames pharetra elit fermentum magna morbi donec.
            Pulvinar quis blandit sollicitudin ut lectus cursus. Ipsum luctus
            duis vitae venenatis. Amet.
          </p>
        </div>
        <div className="md:ml-[3vw] order-1 md:order-2">
          <Image
            src="/image/aboutUs/aboutUs2/fotoKopi.png"
            alt="Ornament Background"
            width={1000}
            height={1000}
            className="md:w-[32.969vw] md:h-[18.542vw] w-[84.884vw] h-[47.74vw] bg-cover"
          />
        </div>
      </div>
    </section>
  );
}
