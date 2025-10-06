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
      <div className="w-full h-full md:h-[56.25vw] z-[1] md:gap-y-[5vw] gap-y-[10vw] px-[5vw] md:px-0 md:py-0 py-[20vw]">
        {/* content */}
        <div className="font-poppins md:w-[33.489vw] md:h-fit w-full bg-[rgba(213,219,226,1)] pl-[3.03125vw] md:pl-[2.03125vw] md:pr-[2.2392vw] pr-[3.03125vw] md:pb-[1.927vw] pb-[3.03125vw] md:pt-[3.229vw] pt-[4.229vw] md:top-[10vw] md:left-[50vw] md:relative rounded-md">
          <h1 className="font-bold md:text-[1.481vw] text-[2.251vw]">LIMITED TIME OFFER</h1>
          <h2 className="font-bold text-[rgba(39,93,144,1)] md:text-[2.708vw] text-[7.316vw]">Refresh Your Home with Our Fall Sale</h2>
          <p className="md:text-[0.9375vw] text-[2.533vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="py-[0.5vw] px-[5vw] bg-[rgba(39,93,144,1)] text-white mt-[2vw] text-[2.251vw] md:text-[1.481vw] w-[31.191vw] h-[10.523vw] md:w-fit md:h-fit rounded-md">BUY NOW</button>
        </div>
        {/* content */}
      </div>
    </section>
  );
}
