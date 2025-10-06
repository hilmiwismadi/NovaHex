import Image from "next/image";

export default function cta1() {
  return (
    <section className="w-full md:min-h-[27.135vw] md:aspect-ratio[1920/1080] aspect-ratio[430/594] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="md:w-[91.667vw] md:h-[14.635vw] w-[82.326vw] h-[100.93vw] flex flex-col items-center justify-center">
        <h1 className="md:w-[91.667vw] md:h-[3.229vw] w-[82.326vw] h-[28.837vw] text-[#565656] flex justify-center items-center text-[12vw] md:text-[2.917vw] font-bold text-center leading-[13vw]">
          <span className="md:block hidden">Your team. Your projects.</span>
          <span className="md:hidden block">
            Your team.
            <br />
            Your projects.
          </span>
        </h1>
        <h1 className="md:w-[91.667vw] md:h-[3.229vw] w-[82.326vw] h-[28.837vw] text-[#407BFF] flex justify-center items-center md:text-[2.917vw] text-[13.023vw] text-center font-bold mt-[0.2vw] md:mt-[1vw] leading-[15vw]">
          <span className="md:block hidden">Always together.</span>
          <span className="md:hidden block">
            Always
            <br />
            together.
          </span>
        </h1>
        <p className="md:w-[91.667vw] md:h-[1.51vw] w-[82.326vw] h-[13.488vw] text-[#6C6C6C] text-[4.186vw] md:text-[0.938vw] text-center flex justify-center items-center mt-[1.7vw]">
          Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>
        <a
          href="#"
          className="md:w-[27.5vw] md:h-[2.917vw] w-[82.326vw] h-[13.023vw] flex justify-center items-center bg-[#407BFF] rounded-[1.86vw] md:rounded-[0.521vw] mt-[1.7vw]"
        >
          <h1 className="text-black font-bold text-[4.651vw] md:text-[1.042vw]">
            Start For Free
          </h1>
        </a>
      </div>
    </section>
  );
}
