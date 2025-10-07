import Image from "next/image";

export default function AboutUs3() {
  return (
    <section className="w-full md:min-h-[37.188vw] md:aspect-ratio[1920/1080] aspect-ratio[430/714] p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="w-full sm:w-[90%] lg:w-[66.615vw] lg:h-[25.208vw] flex md:flex-row flex-col justify-center items-center gap-4 sm:gap-6">
        <div className="w-full lg:w-[31.25vw] lg:h-[24.167vw] flex justify-between gap-2 sm:gap-3">
          <div className="md:flex md:items-end overflow-hidden rounded-lg">
            <div className="w-1/3 sm:w-auto lg:w-[9.861vw] lg:h-[20vw] flex items-end">
              <Image
                src="/image/aboutUs/aboutUs3/Picture1.png"
                width={10000}
                height={10000}
                alt="picture1"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <div className="w-1/3 sm:w-auto lg:w-[9.861vw] lg:h-[20vw]">
              <Image
                src="/image/aboutUs/aboutUs3/Picture2.png"
                width={10000}
                height={10000}
                alt="picture1"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="mt-4 sm:mt-6 lg:mt-[0.5vw] flex items-center overflow-hidden rounded-lg">
            <div className="w-1/3 sm:w-auto lg:w-[9.861vw] lg:h-[20vw]">
              <Image
                src="/image/aboutUs/aboutUs3/Picture3.png"
                width={10000}
                height={10000}
                alt="picture1"
                className="w-full lg:w-[9.861vw] lg:h-[20vw] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[29.219vw] lg:h-[14.219vw] ml-0 lg:ml-[4.5vw]">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-[2.604vw] text-[#F65050] mt-4 sm:mt-6 lg:mt-0">
            About us
          </h1>
          <p className="text-sm sm:text-base lg:text-[1.042vw] text-justify">
            Lorem ipsum dolor sit amet consectetur. Nullam elit adipiscing
            tincidunt id. Sed scelerisque in eu auctor. Lectus enim id et eget
            risus est ipsum morbi sit. Cursus tortor in et at viverra fermentum.
          </p>
          <p className="mt-3 sm:mt-4 lg:mt-[1vw] text-sm sm:text-base lg:text-[1.042vw] text-justify">
            Orci tellus fames pharetra elit fermentum magna morbi donec.
            Pulvinar quis blandit sollicitudin ut lectus cursus. Ipsum luctus
            duis vitae venenatis. Amet.
          </p>
        </div>
      </div>
    </section>
  );
}
