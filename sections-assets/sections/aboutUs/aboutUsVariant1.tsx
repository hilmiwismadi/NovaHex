import Image from "next/image";

export default function AboutUs1() {
  return (
    <section className="w-full md:min-h-[49.271vw] min-h-[220vw] md:aspect-ratio[1920/1080] aspect-ratio[430/946] p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative bg-[url('/image/aboutUs/aboutUs1/Frame2.png')] bg-cover md:bg-none">
      <div className="md:w-[47.76vw] md:h-[35.469vw] md:bg-[url('/image/aboutUs/aboutUs1/Frame.png')] md:bg-cover z-0"></div>
      <div className="absolute top-[15vw] md:top-1/2 md:left-1/2 transform md:translate-x-1/2 md:-translate-y-1/2">
        <div className="w-full sm:w-auto lg:w-[27.552vw] lg:h-[27.344vw] bg-[var(--color-secondary)] z-10 relative p-6 sm:p-8 lg:p-[2.5vw] hover:shadow-2xl transition-all duration-300">
          <h1 className="font-bold text-white text-2xl sm:text-3xl lg:text-[1.875vw]">
            About Us
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-[1.042vw] mt-4 sm:mt-6 lg:mt-[1vw] text-justify">
            Lorem ipsum dolor sit amet consectetur. Nullam elit adipiscing
            tincidunt id. Sed scelerisque in eu auctor. Lectus enim id et eget
            risus est ipsum morbi sit. Cursus tortor in et at viverra fermentum.
          </p>
          <p className="text-white text-sm sm:text-base lg:text-[1.042vw] mt-3 sm:mt-4 lg:mt-[1vw] text-justify">
            Orci tellus fames pharetra elit fermentum magna morbi donec.
            Pulvinar quis blandit sollicitudin ut lectus cursus. Ipsum luctus
            duis vitae venenatis. Amet.
          </p>
          <a
            href=""
            className="bg-white text-[var(--color-secondary)] font-semibold w-32 sm:w-36 lg:w-[6.667vw] h-12 sm:h-14 lg:h-[2.24vw] mt-6 sm:mt-8 lg:mt-[2vw] rounded-lg lg:rounded-[0.521vw] text-sm sm:text-base lg:text-[0.938vw] text-center flex items-center justify-center hover:bg-slate-100 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            More
          </a>
        </div>
      </div>
    </section>
  );
}
