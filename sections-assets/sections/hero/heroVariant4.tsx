import Image from "next/image";

interface heroprops {
  navbar: JSX.Element
}

export default function Hero4() {
  return (
    <section className="w-full md:aspect-[1920/1080] aspect-[430/1080] flex flex-col md:justify-center items-center md:pt-0 pt-[12vw] bg-white relative">
      {/* Ornament background */}
      <Image
        src="/image/hero/hero4/circular.png"
        alt="Background"
        height={10000}
        width={10000}
        className="md:flex hidden w-[21.56vw] h-[21.56vw] top-[14vw] left-[12vw] object-cover z-[0] absolute"
      />
      <div className="w-full md:h-[56.25vw] z-[1] gap-y-8 sm:gap-y-10 lg:gap-y-[5vw]">

        {/* content */}
        <div className="flex items-center justify-center">
          <div className="flex md:flex-row flex-col w-full lg:w-[76.093vw] lg:h-[40.625vw] justify-between items-center">
            <div className="p-6 sm:p-8 lg:p-[6vw] lg:px-0 lg:w-[34vw] lg:left-[8vw] lg:top-[5vw] lg:relative">
              <h1 className="text-[rgba(241,8,8,1)] text-sm sm:text-base lg:text-[0.9vw] font-bold">Your Pet's Happiness Starts Here</h1>
              <h2 className="text-[rgba(22,28,45,1)] text-3xl sm:text-4xl lg:text-[3.1vw] font-bold">Your One-Stop Shop for All Things Pet</h2>
              <p className="text-sm sm:text-base lg:text-[1.1vw] lg:w-[31.25vw]">We're more than just a pet shop. We're a community of pet lovers dedicated to providing the best care for your furry companions.</p>
              <a
                href=""
                className="bg-[#4273CE] text-white font-semibold w-36 sm:w-40 lg:w-[6.667vw] h-12 sm:h-14 lg:h-[2.24vw] rounded-lg lg:rounded-[0.521vw] text-sm sm:text-base lg:text-[0.938vw] my-3 sm:my-4 lg:my-[1vw] text-center flex items-center justify-center hover:bg-[#5AB0BB] hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Book Now
              </a>
            </div>

            <div className="overflow-hidden rounded-lg">
              <Image
                src="/image/hero/hero4/dog.png"
                alt="Background"
                height={10000}
                width={10000}
                className="w-full sm:w-[90%] lg:w-[27.931vw] lg:h-[31.99vw] object-cover top-0 sm:top-4 lg:top-[4vw] relative hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
        {/* content */}

      </div>
    </section>
  );
}
