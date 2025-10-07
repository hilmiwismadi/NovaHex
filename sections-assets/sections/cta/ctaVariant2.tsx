import Image from "next/image";

export default function cta2() {
  return (
    <section className="w-full md:h-[8.802vw] md:aspect-ratio[1920/1080] aspect-ratio[430/226] p-8 flex flex-col justify-center items-center bg-[var(--color-secondary)] text-gray-800 relative">
      <div className="md:w-[33.417vw] md:h-[2.604vw] w-[72.791vw] h-[31.628vw] flex md:flex-row flex-col items-center justify-center">
        <h1 className="text-white text-[6vw] md:text-[1.667vw] text-center font-bold md:mr-[2.5vw]">
          Ready to get started?
        </h1>
        <a
          href=""
          className="bg-white text-black font-bold w-[53.488vw] h-[11.628vw] md:w-[11.979vw] md:h-[2.604vw] rounded-[0.521vw] text-[3.953vw] md:text-[0.938vw] my-[1vw] text-center flex items-center justify-center hover:bg-slate-100 hover:scale-[102%] transition-all duration-700 ease-in-out"
        >
          Get A Free Quote
        </a>
      </div>
    </section>
  );
}
