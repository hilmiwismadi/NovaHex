import Image from "next/image";

interface heroprops {
  navbar: JSX.Element
}

export default function Hero2() {
  return (
    <section className="w-full md:aspect-[1920/1080] aspect-[430/1080] flex flex-col justify-center items-center relative">
      {/* Ornament background */}
      <Image
          src="/image/hero/hero2/bg.png"
          alt="Background"
          height={10000}
          width={10000}
          className="hidden md:flex w-[100vw] h-[56.25vw] object-cover z-[0] absolute"
        />
      <Image
          src="/image/hero/hero2/md_bg.png"
          alt="Background"
          height={10000}
          width={10000}
          className="flex md:hidden w-[100vw] h-[251.163vw] object-cover z-[0] absolute"
        />
      <div className="w-full h-full md:h-[56.25vw] z-[1] gap-y-8 sm:gap-y-12 lg:gap-y-[5vw] px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-0">
        {/* content */}
        <div className="font-poppins w-full sm:w-auto lg:w-[33.489vw] lg:h-fit bg-[rgba(213,219,226,1)] px-6 sm:px-8 lg:pl-[2.03125vw] lg:pr-[2.2392vw] pb-6 sm:pb-8 lg:pb-[1.927vw] pt-8 sm:pt-10 lg:pt-[3.229vw] lg:top-[10vw] lg:left-[50vw] lg:relative rounded-md">
          <h1 className="font-bold text-sm sm:text-base lg:text-[1.481vw]">LIMITED TIME OFFER</h1>
          <h2 className="font-bold text-[var(--color-secondary)] text-2xl sm:text-3xl lg:text-[2.708vw]">Refresh Your Home with Our Fall Sale</h2>
          <p className="text-sm sm:text-base lg:text-[0.9375vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="py-3 sm:py-4 lg:py-[0.5vw] px-8 sm:px-10 lg:px-[5vw] bg-[var(--color-primary)] text-white mt-4 sm:mt-6 lg:mt-[2vw] text-sm sm:text-base lg:text-[1.481vw] w-full sm:w-auto h-12 sm:h-auto rounded-md hover:bg-[var(--color-secondary)] hover:scale-105 hover:shadow-lg transition-all duration-300">BUY NOW</button>
        </div>
        {/* content */}
      </div>
    </section>
  );
}
