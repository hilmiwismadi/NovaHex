import Image from "next/image";

export default function AboutUs3() {
  return (
    <section className="w-full md:min-h-[37.188vw] md:aspect-ratio[1920/1080] aspect-ratio[430/714] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[66.615vw] md:h-[25.208vw] w-[93.135vw] h-[571.51] flex md:flex-row flex-col justify-center items-center">
        <div className="md:w-[31.25vw] md:h-[24.167vw] w-[93.135vw] h-[72.026vw] flex justify-between">
          <div className="md:flex md:items-end">
            <div className="md:w-[9.861vw] md:h-[20vw] w-[29.391vw] h-[72.026vw] rounded-[1.042vw] flex items-end">
              <Image
                src="/image/aboutUs/aboutUs3/Picture1.png"
                width={10000}
                height={10000}
                alt="picture1"
              />
            </div>
          </div>
          <div>
            <div className="md:w-[9.861vw] md:h-[20vw] w-[29.391vw] h-[59.607vw] rounded-[1.042vw]">
              <Image
                src="/image/aboutUs/aboutUs3/Picture2.png"
                width={10000}
                height={10000}
                alt="picture1"
              />
            </div>
          </div>
          <div className="mt-[2vw] md:mt-[0.5vw] flex items-center">
            <div className="md:w-[9.861vw] md:h-[20vw] w-[29.391vw] h-[65.816vw] rounded-[1.042vw]">
              <Image
                src="/image/aboutUs/aboutUs3/Picture3.png"
                width={10000}
                height={10000}
                alt="picture1"
                className="md:w-[9.861vw] md:h-[20vw] w-[29.391vw] h-[65.816vw]"
              />
            </div>
          </div>
        </div>
        <div className="md:w-[29.219vw] md:h-[14.219vw] w-[90.93vw] h-[60.884vw] md:ml-[4.5vw]">
          <h1 className="font-bold text-[9.756vw] md:text-[2.604vw] text-[#F65050] md:mt-0 mt-[3vw]">
            About us
          </h1>
          <p className="text-[3.902vw] md:text-[1.042vw] text-justify">
            Lorem ipsum dolor sit amet consectetur. Nullam elit adipiscing
            tincidunt id. Sed scelerisque in eu auctor. Lectus enim id et eget
            risus est ipsum morbi sit. Cursus tortor in et at viverra fermentum.
          </p>
          <p className="mt-[1vw] text-[3.902vw] md:text-[1.042vw] text-justify">
            Orci tellus fames pharetra elit fermentum magna morbi donec.
            Pulvinar quis blandit sollicitudin ut lectus cursus. Ipsum luctus
            duis vitae venenatis. Amet.
          </p>
        </div>
      </div>
    </section>
  );
}
