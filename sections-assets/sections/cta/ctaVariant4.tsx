import Image from "next/image";

export default function cta4() {
  return (
    <section className="w-full md:min-h-[23.49vw] md:aspect-ratio[1920/1080] aspect-ratio[430/258] p-8 flex flex-col justify-center items-center relative bg-[#161C2D] bg-[url('/image/cta/BG.png')] bg-cover">
      <div className="md:w-[30.469vw] md:h-[12.344vw] w-[89.07vw] h-[36.084vw] flex flex-col items-center justify-center">
        <h1 className="text-white text-center font-bold text-[9.135vw] md:text-[3.125vw] md:leading-[3.5vw] leading-[10vw]">
          Ready to have a decorated lifestyle?
        </h1>
        <a
          href=""
          className="bg-[#407BFF] text-white font-bold w-[30.451vw] h-[8.984vw] md:w-[10.417vw] md:h-[3.073vw] rounded-[0.521vw] text-[2.588vw] md:text-[0.885vw] md:mt-[2vw] mt-[5vw] text-center flex items-center justify-center hover:scale-[102%] transition-all duration-700 ease-in-out"
        >
          Start Shopping
        </a>
      </div>
    </section>
  );
}
