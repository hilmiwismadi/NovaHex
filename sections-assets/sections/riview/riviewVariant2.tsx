"use client";
import { useRef } from "react";
import Image from "next/image";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";

const data = [
  { image_src: "/image/riview/riviewer2/riviewer.png", image_alt: "riviewer", },
  { image_src: "/image/riview/riviewer2/riviewer.png", image_alt: "riviewer", },
  { image_src: "/image/riview/riviewer2/riviewer.png", image_alt: "riviewer", },
  { image_src: "/image/riview/riviewer2/riviewer.png", image_alt: "riviewer", },
]

export default function Riview2() {
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
    <section className="md:aspect-[1920/1080] aspect-[430/1080] bg-[rgba(246,248,247,1)] py-[3.125vw] flex flex-col justify-center items-center">
      {/* title */}
      <div className="mx-[4.166vw] text-center flex flex-col gap-y-[1vw]">
        <h1 className="md:text-[1.666vw] text-[7.442vw] font-bold">Testimoni Pelanggan</h1>
        <p className="md:text-[1.0416vw] text-[3.953vw]">
          Berikut adalah beberapa testimoni asli dari sebagian pelanggan kami.
          Geser ke kiri atau ke kanan untuk melihat keseluruhan testimoni
        </p>
      </div>
      {/* title */}

      {/* content */}
      <div className="ml-[4.166vw] mt-[4.6875vw] flex gap-x-[2vw] justify-between">
        <button onClick={handlePrev}>
          <IoChevronBackCircle className="md:text-[2vw] text-[5vw]" />
        </button>
        <div className="w-[69.4791vw] flex gap-x-[0.9vw]">
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3
              }
            }}
          >
            {data.map((d, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center md:justify-start">
                  <Image
                    src={d.image_src}
                    alt={d.image_alt}
                    width={10000}
                    height={10000}
                    className="md:w-[23.157vw] w-[55.116vw] md:h-[39.47916vw] h-[98.14vw] object-fill"
                  />
                </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button onClick={handleNext}>
          <IoChevronForwardCircle className="md:text-[2vw] text-[5vw]" />
        </button>
      </div>
      {/* content */}
    </section>
  );
}
