import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function cta3() {
  return (
    <section className="w-full md:min-h-[25.833vw] md:aspect-ratio[1920/1080] aspect-ratio[430/1055] p-8 flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div className="relative md:w-[82.813vw] md:h-[19.583vw] w-[87.442vw] h-[223.488vw] bg-[#E5C4B9] rounded-[7.674vw] md:rounded-[0.521vw] overflow-hidden flex flex-col items-center justify-center">
        <h1 className="text-center text-[10.088vw] md:text-[3.11vw] mt-[0.5vw]">
          Connect with <span className="font-bold">Us</span>
        </h1>
        <Image
          src="/image/cta/coffee1.png"
          alt="coffee"
          width={10000}
          height={10000}
          className="w-[22.292vw] h-[16.771vw] absolute bottom-0 left-0 md:block hidden"
        />
        <Image
          src="/image/cta/coffee2.png"
          alt="coffee"
          width={10000}
          height={10000}
          className="w-[22.344vw] h-[26.719vw] absolute -top-[3.594vw] right-0 md:block hidden"
        />
        <Image /** number 2 */
          src="/image/cta/coffee2.png"
          alt="coffee"
          width={10000}
          height={10000}
          className="w-[99.767vw] max-h-[119.302vw] transform rotate-[-270deg] scale-y-[-1] absolute bottom-0 md:hidden block"
        />
        <Image
          src="/image/cta/coffee1.png"
          alt="coffee"
          width={10000}
          height={10000}
          className="w-[99.535vw] h-[74.884vw] absolute -top-[3.594vw] right-0 md:hidden block rotate-[180deg] "
        />
        <div className="w-[82.813vw] h-[5.625vw] flex items-center justify-center mt-[8vw] md:mt-[1.5vw]">
          <button className="md:w-[20.781vw] md:h-[5.625vw] w-[67.395vw] h-[18.242vw] flex items-center justify-center bg-[#593D29] rounded-[8.784vw] md:rounded-[2.708vw] hover:bg-[#593D35] transition">
            <div className="text-white text-[12.837vw] md:text-[3.958vw] mr-[0.7vw]">
              <FaWhatsapp />
            </div>
            <div className="text-right">
              <h1 className="font-bold text-white text-[5.188vw] md:text-[1.6vw]">
                +628123456789
              </h1>
              <h1 className="italic text-white text-[4.73vw] md:text-[1.458vw]">
                Steven Beans
              </h1>
            </div>
          </button>
        </div>
        <p className="text-center font-bold text-[3.04vw] md:text-[0.938vw] md:mt-[1.5vw] mt-[12vw]">
          Available during regular business hours
        </p>
        <p className="text-center font-bold text-[3.04vw] md:text-[0.833vw] mt-[0.5vw]">
          Monday - Saturday | 9 AM - 4 PM
        </p>
      </div>
    </section>
  );
}
