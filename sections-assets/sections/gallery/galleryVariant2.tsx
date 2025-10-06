"use client";
import { useRef } from "react";
import Image from "next/image";


export default function Gallery2() {
  return (
    <section className="aspect-[1920/1080] bg-[rgba(246,248,247,1)] py-[2.125vw] flex flex-col justify-center items-center">

      {/* title */}
      <div className="mx-[4.166vw] mb-[4.166vw] text-center flex flex-col">
        <p className="md:text-[1.042vw] text-[rgba(97,97,97,1)] text-[3.833vw] font-poppins">
          Share your setup with
        </p>
        <h1 className="font-bold md:text-[2.083vw] text-[7.663vw]">#GalleryHighlight</h1>
      </div>
      {/* title */}

      {/* content desktop */}
      <div className="w-[66.094vw] hidden md:flex">
        <div className="grid grid-cols-2 gap-[1vw] w-full">
          <div className="columns-2 [&>img:not(:first-child)]:mt-[1vw] gap-[0.5vw]">
            <Image src="/image/gallery/gallery2/gallery1.png" alt="gallery" width={1000} height={1000} />
            <Image src="/image/gallery/gallery2/gallery4.png" alt="gallery" width={1000} height={1000} />
            <Image src="/image/gallery/gallery2/gallery5.png" alt="gallery" width={1000} height={1000} />
          </div>
          <div className="grid grid-rows-3 gap-[0.5vw]">
            <Image src="/image/gallery/gallery2/gallery2.png" alt="gallery" width={1000} height={1000} />
            <Image src="/image/gallery/gallery2/gallery3.png" alt="gallery" width={1000} height={1000} />
            <Image src="/image/gallery/gallery2/gallery6.png" alt="gallery" width={1000} height={1000} className="col-span-2" />
            <Image src="/image/gallery/gallery2/gallery8.png" alt="gallery" width={1000} height={1000}  />
            <Image src="/image/gallery/gallery2/gallery7.png" alt="gallery" width={1000} height={1000} />
          </div>
        </div>
      </div>
      {/* content desktop */}

      {/* content mobile */}
      <div className="p-[8vw] flex md:hidden">
        <div className="grid grid-cols-2 gap-[2vw] w-full">
          <Image src="/image/gallery/gallery2/gallery1.png" alt="gallery" width={10000} height={10000} className="col-span-2" />
          <Image src="/image/gallery/gallery2/gallery2.png" alt="gallery" width={10000} height={10000} className="my-auto" />
          
          <Image src="/image/gallery/gallery2/gallery3.png" alt="gallery" width={10000} height={10000} />
          <Image src="/image/gallery/gallery2/gallery4.png" alt="gallery" width={10000} height={10000} className="" />
          
          <Image src="/image/gallery/gallery2/gallery5.png" alt="gallery" width={10000} height={10000} className="" />
          
          <Image src="/image/gallery/gallery2/gallery6.png" alt="gallery" width={10000} height={10000} className="col-span-2" />
          <Image src="/image/gallery/gallery2/gallery7.png" alt="gallery" width={10000} height={10000} className="my-auto" />
          
          <Image src="/image/gallery/gallery2/gallery8.png" alt="gallery" width={10000} height={10000} />
        </div>
      </div>
      {/* content mobile */}

    </section>
  );
}

