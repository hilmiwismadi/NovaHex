"use client";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { MdOutlineAutoGraph } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";

interface CardProps {
  name: string;
  detail: string;
  icon: JSX.Element;
}

function ServiceCard({ name, detail, icon }: CardProps) {
  return (
    <div className="md:w-[19.427vw] h-[42.558vw] w-[71.628vw] md:h-[12.656vw] shadow-md md:py-[1.875vw] md:px-[2.135vw] p-[5vw] rounded-lg md:space-y-0 space-y-[3vw] md:my-0 my-[2vw] hover:shadow-xl transition-shadow duration-300 group">
      <div className="flex items-center md:gap-x-[0.8vw] gap-x-[1vw]">
        <div className="md:w-[2.5vw] md:h-[2.5vw] w-[8.372vw] h-[8.372vw] md:text-[2.1vw] text-[8.372vw] rounded-md flex items-center justify-center hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h1 className="md:text-[1.25vw] text-[4.172vw] font-bold">{name}</h1>
      </div>
      <p className="my-[1vw] md:text-[0.833vw] text-[2.781vw] text-[rgba(100,100,100,1)]">{detail}</p>
      <a href="#" className="md:text-[0.938vw] text-[2.28vw] text-blue-600 flex items-center justify-center w-fit gap-x-[1vw] hover:text-[#1AB0C8] transition-colors duration-300">
        <p className="font-bold">Learn More</p>
        <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
}

export default function Service3() {
  const data: CardProps[] = [
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineScreenshotMonitor />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineScreenshotMonitor />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineAutoGraph />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineAutoGraph />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineAutoGraph />,
    },
    {
      name: "Interaction Design",
      detail: "Lessons on design that cover the most recent developments.",
      icon: <MdOutlineAutoGraph />,
    },
  ];

  const swiperRef = useRef<SwiperRef>(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="aspect-[430/1080] md:aspect-[1920/592] w-full min-h-[46.667vw] md:px-[3vw] md:py-[3vw] px-[5vw] flex flex-col items-center bg-white text-gray-800 relative">
      {/* title */}
      <div className="flex flex-col items-center justify-center md:my-0 my-[5vw]">
        <h1 className="font-bold text-[3.567vw] md:text-[1.25vw] text-[#4273CE]">Our Services</h1>
        <p className="font-bold mt-[1vw] w-full md:w-[40vw] md:text-[1.875vw] text-[5.421vw] text-[#161C2D] text-center">
          Fostering a playful & engaging learning environment
        </p>
      </div>
      {/* title */}

      {/* content */}
      {/* desktop content */}
      <div className="w-[72.599vw] h-[12.656vw] mt-[3vw] hidden md:block">
        <Swiper
          ref={swiperRef}
          spaceBetween={10}
          slidesPerView={3}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
        >
          {data.map((d, index) => (
            <SwiperSlide key={index} className="p-[1.2vw] content-center">
              <ServiceCard name={d.name} icon={d.icon} detail={d.detail} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* desktop content */}

      {/* mobile content */}
      <div className="flex md:hidden overflow-auto scrollbar-blue w-full h-[146.977vw] p-[5vw]">
        <div className="mt-[4vw] flex flex-col md:hidden md:py-0">
          {data.map((d, index) => (
            <ServiceCard name={d.name} icon={d.icon} detail={d.detail} key={index} />
          ))}
        </div>
      </div>
      {/* mobile content */}

      {/* content */}

      {/* Navigation + Pagination Container */}
      <div className="flex items-center justify-center mt-[2vw]">
        {/* Prev Button */}
        <button
        className="mt-[0.2vw] mx-[0.9vw] hidden md:flex hover:scale-110 transition-transform duration-300"
          onClick={handlePrev}
        >
          <FaChevronLeft className="text-[1vw]" />
        </button>

        {/* Custom pagination */}
        <div className="swiper-pagination-custom text-center hidden md:flex md:items-center"></div>

        {/* Next Button */}
        <button
        className="mt-[0.2vw] mx-[0.9vw] hidden md:flex hover:scale-110 transition-transform duration-300"
          onClick={handleNext}
        >
          <FaChevronRight className="text-[1vw]" />
        </button>
      </div>
    </section>
  );
}
