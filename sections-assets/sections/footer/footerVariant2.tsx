import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function footer2() {
  return (
    <section className="w-screen h-[205.349vw] md:h-[19.583vw] md:aspect-[1920/1080] aspect-[430/883] flex flex-col justify-center items-center bg-white text-gray-800 relative">
      <div
        className="w-full md:h-[16.927vw] h-[188.605vw] absolute top-0 p-[3vw] flex justify-center items-center bg-[var(--color-primary)] bg-opacity-10"
      >
        <div className="md:w-[73.958vw] md:h-[8.594vw] w-[81.395vw] h-[160.698vw] flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-[20.99vw] md:h-[7.813vw] w-full h-[31.163vw]">
            <div className="w-[11.51vw] h-[10.698vw] md:h-[2.813vw] flex flex-row items-center justify-between">
              <Image
                src="/image/footer/arachnova.png"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[14.186vw] h-[10.698vw] md:w-[3.698vw] md:h-[2.813vw]"
              />
              <h1 className="text-[5.581vw] md:text-[1.354vw] font-bold text-[#101010]">
                ArachnoVa
              </h1>
            </div>
            <p className="text-[3.721vw] md:text-[0.938vw] md:leading-[1.25vw] md:mt-0 mt-[1vw]">
              Lorem ipsum dolor sit amet consectetur. Sed egestas non egestas
              sagittis semper risus sed feugiat justo. Urna vitae fermentum
              tristique aliquam. Tellus.
            </p>
          </div>
          <div className="w-[25.814vw] h-[29.302vw] md:w-[5.781vw] md:h-[6.563vw] flex flex-col justify-between">
            <h1 className="font-bold text-[4.1vw] md:text-[0.915vw]">
              Social Media
            </h1>
            <div className="w-[25.814vw] h-[5.581vw] md:w-[5.781vw] md:h-[1.25vw] flex items-center justify-start md:mt-[0.8vw]">
              <Image
                src="/image/footer/instagram.jpg"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[5.581vw] h-[5.581vw] md:w-[1.25vw] md:h-[1.25vw]"
              />
              <p className="text-[3.721vw] md:text-[0.833vw] ml-[0.3vw]">
                Instagram
              </p>
            </div>
            <div className="w-[25.814vw] h-[5.581vw] md:w-[5.781vw] md:h-[1.25vw] flex items-center justify-start mt-[0.3vw]">
              <Image
                src="/image/footer/facebook.jpg"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[5.581vw] h-[5.581vw] md:w-[1.25vw] md:h-[1.25vw]"
              />
              <p className="text-[3.721vw] md:text-[0.833vw] ml-[0.3vw]">
                Facebook
              </p>
            </div>
            <div className="w-[25.814vw] h-[5.581vw] md:w-[5.781vw] md:h-[1.25vw] flex items-center justify-start mt-[0.3vw]">
              <Image
                src="/image/footer/tiktok.jpg"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[5.581vw] h-[5.581vw] md:w-[1.25vw] md:h-[1.25vw]"
              />
              <p className="text-[3.721vw] md:text-[0.833vw] ml-[0.3vw]">
                TikTok
              </p>
            </div>
          </div>
          <div className="w-[20vw] h-[38.372vw] md:w-[4.115vw] md:h-[8.594vw] flex flex-col justify-between">
            <h1 className="text-[4.186vw] md:text-[0.938vw] font-bold">
              Company
            </h1>
            <a href="#" className="text-[3.721vw] md:text-[0.833vw] mt-[0.5vw]">
              About
            </a>
            <a href="#" className="text-[3.721vw] md:text-[0.833vw]">
              Careers
            </a>
            <a href="#" className="text-[3.721vw] md:text-[0.833vw]">
              FAQs
            </a>
            <a href="#" className="text-[3.721vw] md:text-[0.833vw]">
              Teams
            </a>
            <a href="#" className="text-[3.721vw] md:text-[0.780vw]">
              Contact Us
            </a>
          </div>
          <div className="w-[74.651vw] h-[20vw] md:w-[16.719vw] md:h-[4.479vw] flex flex-col justify-between mr-[5vw]">
            <div className="w-[74.651vw] h-[8.837vw] md:w-[16.719vw] md:h-[1.979vw] flex flex-row items-center justify-center">
              <Image
                src="/image/footer/maps.png"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[5.581vw] h-[5.581vw] md:w-[1.25vw] md:h-[1.25vw]"
              />
              <p className="text-[4.186vw] md:text-[0.920vw] ml-[2vw] md:ml-[0.3vw]">
                Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
              </p>
            </div>
            <div className="w-[74.651vw] h-[8.837vw] md:w-[10.885vw] md:h-[1.25vw] flex flex-row items-center md:justify-between">
              <Image
                src="/image/footer/mail.png"
                width={10000}
                height={10000}
                alt="logo"
                className="w-[5.581vw] h-[5.581vw] md:w-[1.25vw] md:h-[1.25vw]"
              />
              <p className="text-[4.186vw] md:text-[0.920vw] ml-[2vw] md:ml-[0.3vw]">
                support@figma.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[16.744vw] md:h-[2.656vw] absolute bottom-0 flex md:flex-row flex-col justify-center items-center"
        style={{ background: "#D8DFE7" }}
      >
        <div className="flex">
          <p className="text-[3.256vw] md:text-[0.833vw] text-black font-bold">
            Copyright
          </p>
          <Image
            src="/image/footer/copyrightBlack.png"
            width={10000}
            height={10000}
            alt="copyright"
            className="w-[4.419vw] h-[4.419vw] md:w-[0.99vw] md:h-[0.99vw] mx-[0.2vw]"
          />
          <p className="text-[3.256vw] md:text-[0.833vw] text-black font-bold block md:hidden">
            2024 Arachnova
          </p>
        </div>
        <p className="text-[3.256vw] md:text-[0.833vw] text-black font-bold block md:hidden">
          All rights reserved. Developed by Arachnova
        </p>
        <p className="text-[3.256vw] md:text-[0.833vw] text-black font-bold hidden md:block">
          2024 Arachnova. All rights reserved. Developed by Arachnova
        </p>
      </div>
    </section>
  );
}
