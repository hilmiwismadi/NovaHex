"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperType, SwiperRef } from "swiper/react";


interface cardProps{
  title: string;
  mainImageUrl: string;
  showImageUrl: string[];
  productName: string;
  desciption: string[];
}

function CardService({title, mainImageUrl, showImageUrl, productName, desciption}: cardProps) {
  return (
    <div>
      {/* card */}
        {/* title */}
        <h2 className="text-[rgba(206,66,68,1)] font-bold md:text-[2.083vw] text-[7.905vw]">
          {title}
        </h2>
        {/* title */}

        {/* content */}
        <div className="flex flex-col md:flex-row gap-x-[1vw] md:justify-start justify-center items-center md:items-start">
          {/* images */}
          <div className="flex flex-col md:flex-row gap-x-[0.5vw]">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={mainImageUrl}
                alt="service"
                width={10000}
                height={10000}
                className="md:w-[25vw] md:h-[25vw] w-[76.977vw] h-[76.977vw] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex md:flex-col gap-y-[1vw] gap-x-[2vw] md:mt-0 mt-[2vw]">
              {showImageUrl.map((d, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={d}
                    alt="service"
                    width={10000}
                    height={10000}
                    className="md:w-[9.844vw] md:h-[5.885vw] w-[24.186vw] h-[14.419vw] hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* images */}

          {/* description */}
          <div className="flex flex-col md:w-[43.906vw] w-full md:p-0 px-[1.5vw] md:mt-0 mt-[3vw]">
            <h2 className="text-[rgba(30,30,30,1)] font-bold md:text-[2.083vw] text-[7.905vw]">
              {productName}
            </h2>
            <div className="flex flex-col gap-y-[3vw]">
              {desciption.map((d, index) => (
                <p className="md:text-[1.042vw] text-[3.721vw] text-[rgba(56,56,56,1)]" key={index}>{d}</p>
              ))}
            </div>
          </div>
          {/* description */}
        </div>
      {/* card */}
    </div>
  );
}


const data = [
  {
    title: "Our Products 1",
    mainImageUrl: "/image/service/service4/service1.png",
    showImageUrl: [
      "/image/service/service4/show1.png",
      "/image/service/service4/show2.png",
      "/image/service/service4/show3.png",
    ],
    productName: "Fresh Bread",
    desciption: [
      "Lorem ipsum dolor sit amet consectetur. Bibendum nulla nibh felis mauris aliquam. Ut elit purus purus fusce. Gravida sollicitudin nibh cursus sit viverra. Mauris nibh ac vitae viverra est",
      "Sapien aliquam pellentesque nec gravida egestas iaculis molestie sed semper. Amet eleifend nisl sociis faucibus. Semper sit eros bibendum quisque purus mauris in tortor lacus. Id risus ac sed ipsum fames. Tincidunt eget eros est ut sollicitudin. Tincidunt ut viverra quis orci aliquet quam.",
    ],
  },
  {
    title: "Our Products 2",
    mainImageUrl: "/image/service/service4/service1.png",
    showImageUrl: [
      "/image/service/service4/show1.png",
      "/image/service/service4/show2.png",
      "/image/service/service4/show3.png",
    ],
    productName: "Fresh Bread",
    desciption: [
      "Lorem ipsum dolor sit amet consectetur. Bibendum nulla nibh felis mauris aliquam. Ut elit purus purus fusce. Gravida sollicitudin nibh cursus sit viverra. Mauris nibh ac vitae viverra est",
      "Sapien aliquam pellentesque nec gravida egestas iaculis molestie sed semper. Amet eleifend nisl sociis faucibus. Semper sit eros bibendum quisque purus mauris in tortor lacus. Id risus ac sed ipsum fames. Tincidunt eget eros est ut sollicitudin. Tincidunt ut viverra quis orci aliquet quam.",
    ],
  },
  {
    title: "Our Products",
    mainImageUrl: "/image/service/service4/service1.png",
    showImageUrl: [
      "/image/service/service4/show1.png",
      "/image/service/service4/show2.png",
      "/image/service/service4/show3.png",
    ],
    productName: "Fresh Bread",
    desciption: [
      "Lorem ipsum dolor sit amet consectetur. Bibendum nulla nibh felis mauris aliquam. Ut elit purus purus fusce. Gravida sollicitudin nibh cursus sit viverra. Mauris nibh ac vitae viverra est",
      "Sapien aliquam pellentesque nec gravida egestas iaculis molestie sed semper. Amet eleifend nisl sociis faucibus. Semper sit eros bibendum quisque purus mauris in tortor lacus. Id risus ac sed ipsum fames. Tincidunt eget eros est ut sollicitudin. Tincidunt ut viverra quis orci aliquet quam.",
    ],
  }
]

export default function Service4() {
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
    <section className="w-full aspect-[1920/1080] p-[3vw] relative">
      <div className="bg-[rgba(255,237,223,1)] md:space-y-0 space-y-[5vw] md:pb-0 pb-[2vw] rounded-md">
        <div className="flex gap-x-[1vw] py-[2.125vw] md:px-[3.125vw] px-[1vw]">
          <button onClick={handlePrev} className="md:mt-0 mt-[32vw] md:mx-0 mx-[1vw] hover:scale-110 transition-transform duration-300">
            <FaChevronLeft className="md:text-[1.2vw] text-[4vw]" />
          </button>
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640:{
                pagination:{
                  el: '.swiper-pagination-custom-serviceVariant4'
                }
              },
              1024:{
                pagination:{
                  clickable: true,
                }
              },
            }}
          >
            {data.map((d, index) => (
              <SwiperSlide key={index}>
                <CardService 
                  mainImageUrl={d.mainImageUrl}
                  showImageUrl={d.showImageUrl}
                  title={d.title} 
                  productName={d.productName} 
                  desciption={d.desciption}
                />
              </SwiperSlide>
            ))}
            <div className="h-[12vw] md:hidden flex"></div>
          </Swiper>
          <button onClick={handleNext} className="md:mt-0 mt-[32vw] md:mx-0 mx-[1vw] hover:scale-110 transition-transform duration-300">
            <FaChevronRight className="md:text-[1.2vw] text-[4vw]" />
          </button>
        </div>
        {/* Custom pagination */}
        <div className="swiper-pagination-custom-serviceVariant4 text-center"></div>
      </div>
    </section>
  );
}
