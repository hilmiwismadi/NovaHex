"use client";
import { useRef } from "react";
import Image from "next/image";


export default function Gallery4() {
  return (
    <section className="md:aspect-[1920/1080] aspect-[430/1080] bg-[rgba(246,248,247,1)] py-[2.125vw] flex flex-col justify-center items-center">

      {/* title */}
      <div className="mx-[4.166vw] text-center flex flex-col">
        <h1 className="font-bold md:text-[2.083vw] text-[7.663vw]">Gallery Highlight</h1>
        <p className="md:text-[1.042vw] text-[rgba(97,97,97,1)] text-[3.833vw] font-poppins"> 
          Share your memories
        </p>
      </div>
      {/* title */}

      {/* dekstop content */}
      <div className="p-[1vw] md:flex hidden">
        <div className="grid grid-rows-2 gap-[1vw] w-[64.74vw]">
          {/* part 1 */}
          <div className="grid grid-cols-4 gap-[1vw]">
            <div className="row-span-3 col-span-2 overflow-hidden rounded-lg"><Image src="/image/gallery/gallery4/gallery1.png" alt="gallery" width={10000} height={10000} className="hover:scale-105 transition-transform duration-300 h-full w-full object-cover" /></div>
            <div className="col-span-2 overflow-hidden rounded-lg"><Image src="/image/gallery/gallery4/gallery2.png" alt="gallery" width={10000} height={10000} className="hover:scale-105 transition-transform duration-300" /></div>
            <div className="col-span-1 overflow-hidden rounded-lg"><Image src="/image/gallery/gallery4/gallery3.png" alt="gallery" width={10000} height={10000} className="hover:scale-105 transition-transform duration-300" /></div>
            <div className="col-span-1 overflow-hidden rounded-lg"><Image src="/image/gallery/gallery4/gallery4.png" alt="gallery" width={10000} height={10000} className="hover:scale-105 transition-transform duration-300" /></div>
          </div>
          {/* part 1 */}

          {/* part 2 */}
          <div className="grid grid-cols-4 gap-[1vw]">
            <div className="col-span-2 overflow-hidden rounded-lg"><Image src="/image/gallery/gallery4/gallery2.png" alt="gallery" width={10000} height={10000} className="hover:scale-105 transition-transform duration-300" /></div>
            <div className="row-span-3 col-span-2 overflow-hidden rounded-lg"><Image src="/image/gallery/gallery4/gallery1.png" alt="gallery" width={10000} height={10000} className="hover:scale-105 transition-transform duration-300 h-full w-full object-cover" /></div>
            <div className="col-span-1 overflow-hidden rounded-lg"><Image src="/image/gallery/gallery4/gallery3.png" alt="gallery" width={10000} height={10000} className="hover:scale-105 transition-transform duration-300" /></div>
            <div className="col-span-1 overflow-hidden rounded-lg"><Image src="/image/gallery/gallery4/gallery4.png" alt="gallery" width={10000} height={10000} className="hover:scale-105 transition-transform duration-300" /></div>
          </div>
          {/* part 2 */}

        </div>
      </div>
      {/* dekstop content */}

      {/* mobile content */}
      <div className="flex md:hidden px-[5vw]">
        <div className="grid grid-cols-4 gap-[1vw] w-full">
          <Image src="/image/gallery/gallery4/gallery1.png" alt="gallery" width={10000} height={10000} className="col-span-4" />
          <Image src="/image/gallery/gallery4/gallery3.png" alt="gallery" width={10000} height={10000} className="my-auto col-span-2" />
          <Image src="/image/gallery/gallery4/gallery4.png" alt="gallery" width={10000} height={10000} className="my-auto col-span-2" />
          <div className="col-span-1"></div>
          <Image src="/image/gallery/gallery4/gallery2.png" alt="gallery" width={10000} height={10000} className="col-span-3" />
          <Image src="/image/gallery/gallery4/gallery2.png" alt="gallery" width={10000} height={10000} className="col-span-3" />
          <div className="col-span-1"></div>
          <Image src="/image/gallery/gallery4/gallery3.png" alt="gallery" width={10000} height={10000} className="my-auto col-span-2" />
          <Image src="/image/gallery/gallery4/gallery4.png" alt="gallery" width={10000} height={10000} className="my-auto col-span-2" />
          <Image src="/image/gallery/gallery4/gallery1.png" alt="gallery" width={10000} height={10000} className="col-span-4" />
        </div>
      </div>
      {/* mobile content */}

    </section>
  );
}
