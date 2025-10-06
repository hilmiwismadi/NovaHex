import Image from "next/image";

export default function AboutUs1() {
  return (
    <section className="w-full md:min-h-[49.271vw] min-h-[220vw] md:aspect-ratio[1920/1080] aspect-ratio[430/946] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative bg-[url('/image/aboutUs/aboutUs1/Frame2.png')] bg-cover md:bg-none">
      <div className="md:w-[47.76vw] md:h-[35.469vw] md:bg-[url('/image/aboutUs/aboutUs1/Frame.png')] md:bg-cover z-0"></div>
      <div className="absolute top-[15vw] md:top-1/2 md:left-1/2 transform md:translate-x-1/2 md:-translate-y-1/2">
        <div className="md:w-[27.552vw] md:h-[27.344vw] w-[81.326vw] h-[127.674vw] bg-[#4273CE] z-10 relative p-[7vw] md:p-[2.5vw]">
          <h1 className="font-bold text-white md:text-[1.875vw] text-[7.726vw]">
            About Us
          </h1>
          <p className="text-white text-[4.291vw] md:text-[1.042vw] mt-[4vw] md:mt-[1vw] text-justify">
            Lorem ipsum dolor sit amet consectetur. Nullam elit adipiscing
            tincidunt id. Sed scelerisque in eu auctor. Lectus enim id et eget
            risus est ipsum morbi sit. Cursus tortor in et at viverra fermentum.
          </p>
          <p className="text-white text-[4.291vw] md:text-[1.042vw] mt-[3vw] md:mt-[1vw] text-justify">
            Orci tellus fames pharetra elit fermentum magna morbi donec.
            Pulvinar quis blandit sollicitudin ut lectus cursus. Ipsum luctus
            duis vitae venenatis. Amet.
          </p>
          <a
            href=""
            className="bg-white text-[#4273CE] font-semibold w-[31.972vw] h-[9.407vw] md:w-[6.667vw] md:h-[2.24vw] md:mt-[2vw] mt-[8vw] rounded-[2.147vw] md:rounded-[0.521vw] text-[3.863vw] md:text-[0.938vw] my-[1vw] text-center flex items-center justify-center hover:bg-slate-100 hover:scale-[102%] transition-all duration-700 ease-in-out"
          >
            More
          </a>
        </div>
      </div>
    </section>
  );
}
