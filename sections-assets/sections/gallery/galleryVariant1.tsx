"use client";
import { useRef } from "react";
import Image from "next/image";


export default function Gallery1() {
  return (
    <section className="md:aspect-[1920/1080] aspect-[430/1080] bg-[rgba(246,248,247,1)] flex flex-col justify-center items-center">

      {/* title */}
      <div className="m-[4.166vw] text-center flex flex-col">
        <p className="md:text-[1.042vw] text-[rgba(97,97,97,1)] text-[3.833vw]">
          Share your setup with
        </p>
        <h1 className="font-bold md:text-[2.083vw] text-[7.663vw]">#GalleryHighlight</h1>
      </div>
      {/* title */}

      {/* content in desktop */}
      <div className="p-[1vw] hidden md:flex">
        <div className="grid grid-cols-10 gap-[1vw] w-full">
          {/* part 1 */}
          <div className="columns-2 [&>img:not(:first-child)]:mt-[1vw] gap-[1vw] col-span-4">
            <Image src="/image/gallery/gallery1/gallery1.png" alt="gallery" width={10000} height={10000} />
            <Image src="/image/gallery/gallery1/gallery2.png" alt="gallery" width={10000} height={10000} />
            <Image src="/image/gallery/gallery1/gallery6.png" alt="gallery" width={10000} height={10000} />
            <Image src="/image/gallery/gallery1/gallery7.png" alt="gallery" width={10000} height={10000} />
          </div>
          {/* part 1 */}

          {/* part 2 */}
          <div className="flex justify-center items-center col-span-2">
            <Image src="/image/gallery/gallery1/gallery3.png" alt="gallery" width={10000} height={10000} className="w-[17.538vw]" />
          </div>
          {/* part 2 */}

          {/* part 3 */}
          <div className="columns-2 [&>img:not(:first-child)]:mt-[1vw] gap-[1vw] col-span-4">
            <Image src="/image/gallery/gallery1/gallery4.png" alt="gallery" width={10000} height={10000} />
            <Image src="/image/gallery/gallery1/gallery5.png" alt="gallery" width={10000} height={10000} />
            <Image src="/image/gallery/gallery1/gallery8.png" alt="gallery" width={10000} height={10000} />
            <Image src="/image/gallery/gallery1/gallery9.png" alt="gallery" width={10000} height={10000} />
          </div>
          {/* part 3 */}
        </div>
      </div>
      {/* content in desktop */}

      {/* content in mobile */}
      <div className="p-[8vw] flex md:hidden">
        <div className="grid grid-cols-2 gap-[2vw] w-full">
          <Image src="/image/gallery/gallery1/gallery1.png" alt="gallery" width={10000} height={10000}  />
          <Image src="/image/gallery/gallery1/gallery2.png" alt="gallery" width={10000} height={10000} className="my-auto" />
          
          <Image src="/image/gallery/gallery1/gallery3.png" alt="gallery" width={10000} height={10000} />
          <Image src="/image/gallery/gallery1/gallery4.png" alt="gallery" width={10000} height={10000} className="my-auto" />
          
          <Image src="/image/gallery/gallery1/gallery5.png" alt="gallery" width={10000} height={10000} className="col-span-2" />
          
          <Image src="/image/gallery/gallery1/gallery6.png" alt="gallery" width={10000} height={10000} />
          <Image src="/image/gallery/gallery1/gallery7.png" alt="gallery" width={10000} height={10000} className="my-auto" />
          
          <Image src="/image/gallery/gallery1/gallery8.png" alt="gallery" width={10000} height={10000} />
          <Image src="/image/gallery/gallery1/gallery9.png" alt="gallery" width={10000} height={10000} className="my-auto" />
        </div>
      </div>
      {/* content in mobile */}
    </section>
  );
}
