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
      <div className="w-full md:h-[56.25vw] z-[1] gap-y-[5vw]">

        {/* content */}
        <div className="flex items-center justify-center">
          <div className="flex md:flex-row flex-col md:w-[76.093vw] md:h-[40.625vw] justify-between items-center">
            <div className="p-[6vw] md:px-0 md:w-[34vw] md:left-[8vw] md:top-[5vw] md:relative">
              <h1 className="text-[rgba(241,8,8,1)] md:text-[0.9vw] text-[2.086vw] font-bold">Your Pet's Happiness Starts Here</h1>
              <h2 className="text-[rgba(22,28,45,1)] md:text-[3.1vw] text-[8.344vw] font-bold">Your One-Stop Shop for All Things Pet</h2>
              <p className="md:text-[1.1vw] text-[2.781vw] md:w-[31.25vw]">We're more than just a pet shop. We're a community of pet lovers dedicated to providing the best care for your furry companions.</p>
              <a
                href=""
                className="bg-[#4273CE] text-white font-semibold md:w-[6.667vw] w-[33.602vw] md:h-[2.24vw] h-[9.063vw] rounded-[0.521vw] md:text-[0.938vw] text-[2.96vw] my-[1vw] text-center flex items-center justify-center hover:bg-[#5AB0BB] hover:scale-[102%] transition-all duration-700 ease-in-out"
              >
                Book Now
              </a>
            </div>

            <Image
              src="/image/hero/hero4/dog.png"
              alt="Background"
              height={10000}
              width={10000}
              className="md:w-[27.931vw] md:h-[31.99vw] w-[90.751vw] object-cover top-[4vw] relative"
            />
          </div>
        </div>
        {/* content */}

      </div>
    </section>
  );
}
