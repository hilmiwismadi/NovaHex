"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";

const data = [
  { image_src: "/image/service/service5/service5.png", type: "Beauty", title: "Title Product", descriptiion: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." },
  { image_src: "/image/service/service5/service5.png", type: "Beauty", title: "Title Product", descriptiion: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." },
  { image_src: "/image/service/service5/service5.png", type: "Beauty", title: "Title Product", descriptiion: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." },
  { image_src: "/image/service/service5/service5.png", type: "Beauty", title: "Title Product", descriptiion: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer." },
]


interface cardProps {
  image_path: string;
  type: string;
  title: string;
  description: string;
}

function CardService({ image_path, type, title, description }: cardProps) {
  return (
    <div className="md:w-[22.104vw] w-[68.837vw] md:h-[31.688vw] h-[87.209vw] md:p-[0.5vw]  font-roboto shadow-lg rounded-xl m-[1vw]">
      <Image alt="service image" src={image_path} width={10000} height={10000} className="md:w-[20.104vw] w-[68.837vw] md:h-[11.458vw] h-[35.581vw] mb-[1vw] md:p-0 p-[1vw] md:rounded-none rounded-lg" />
      <p className="font-bold md:text-[0.833vw] text-[2.593vw] md:mb-[0.5vw] mb-[3vw] md:p-0 px-[5vw] md:mt-0 mt-[2vw]">{type}</p>
      <h1 className="font-bold md:text-[1.25vw] text-[3.888vw] md:mb-[0.5vw] mb-[3vw] md:p-0 px-[5vw]">{title}</h1>
      <p className="md:text-[0.938vw] text-[2.916vw] md:mb-[2vw] mb-[3vw] md:p-0 px-[5vw]">{description}</p>
      <div className="md:px-0 px-[5vw]">
        <button className="w-full flex items-center gap-x-[0.8vw] p-[1vw] md:text-[0.833vw] text-[2.593vw] font-bold text-white bg-blue-500 rounded-md justify-center">
          <p>Button Text</p>
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default function Service5() {
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
    <section className="w-full md:aspect-[1920/1080] aspect-[430/879] bg-[rgba(246,248,247,1)] md:py-[3.125vw] py-0 flex flex-col items-center justify-center">
      {/* title */}
      <div className="mx-[4.166vw] text-center flex flex-col gap-y-[1vw]">
        <h1 className="font-bold md:text-[2.917vw] text-[3vw] gradient-text">Our Products</h1>
        <p className="md:text-[1.0416vw] text-[3.163vw] text-[rgba(71,85,105,1)] md:w-[46.875vw] w-full">
        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      {/* title */}

      {/* content */}
      <div className="md:ml-[4.166vw] mt-[2.6875vw] flex gap-x-[2vw] justify-between">
        <button onClick={handlePrev}>
          <FaChevronLeft className="md:text-[1.2vw] text-[2.5vw]" />
        </button>
        <div className="flex gap-x-[0.9vw] p-[1vw]">
          <Swiper
            className="w-[72.4791vw]"
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              1024:{
                slidesPerView: 3
              }
            }}
          >
            {data.map((d, index) => (
              <SwiperSlide key={index}>
                <CardService type={d.type} title={d.title} description={d.descriptiion} image_path={d.image_src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button onClick={handleNext}>
          <FaChevronRight className="md:text-[1.2vw] text-[2.5vw]" />
        </button>
      </div>
      {/* content */}
    </section>
  );
}
