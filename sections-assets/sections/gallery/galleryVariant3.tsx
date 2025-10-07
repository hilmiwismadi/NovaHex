"use client";
import Image from "next/image";

export default function Gallery3() {
  return (
    <section className="bg-[rgba(246,248,247,1)] py-[2.125vw] md:px-[8.177vw] px-[5vw] w-full md:aspect-[1920/1080] aspect-[430/1080]">
      {/* destop view */}
      <div className="bg-[rgba(246,248,247,1)] relative md:flex hidden">
        {/* title */}
        <div className="w-[23.958vw] flex flex-col items-start gap-y-[1.2vw] absolute">
          <h1 className="font-bold text-[1.042vw] text-[rgba(97,97,97,1)] font-roboto">
            GALLERY
          </h1>
          <p className="text-[2.917vw] font-roboto font-bold">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-[0.938vw] font-roboto text-[rgba(15,23,42,1)]">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia.
          </p>
        </div>
        {/* title */}

        {/* content */}
        <div className="absolute top-[5.682vw] left-[45.844vw] overflow-hidden rounded-lg">
          <Image
            src="/image/gallery/gallery3/gallery2.png"
            alt="gallery"
            width={10000}
            height={10000}
            className="rounded-lg object-cover w-[7.031vw] hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-[12.457vw] left-[38.242vw] overflow-hidden rounded-lg">
          <Image
            src="/image/gallery/gallery3/gallery1.png"
            alt="gallery"
            width={10000}
            height={10000}
            className="rounded-lg object-cover w-[7.031vw] hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-[3.42vw] left-[53.447vw] overflow-hidden rounded-lg">
          <Image
            src="/image/gallery/gallery3/gallery3.png"
            alt="gallery"
            width={10000}
            height={10000}
            className="rounded-lg object-cover w-[23.906vw] hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-[27.406vw] left-[12.729vw] overflow-hidden rounded-lg">
          {" "}
          {/* plant */}
          <Image
            src="/image/gallery/gallery3/gallery4.png"
            alt="gallery"
            width={10000}
            height={10000}
            className="rounded-lg object-cover w-[7.031vw] hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-[22.969vw] left-[21.331vw] overflow-hidden rounded-lg">
          {" "}
          {/* idea */}
          <Image
            src="/image/gallery/gallery3/gallery5.png"
            alt="gallery"
            width={10000}
            height={10000}
            className="rounded-lg object-cover w-[23.928vw] hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-[16.143vw] left-[43.944vw] overflow-hidden rounded-lg">
          <Image
            src="/image/gallery/gallery3/gallery6.png"
            alt="gallery"
            width={10000}
            height={10000}
            className="rounded-lg object-cover w-[32.5vw] hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* content */}
      </div>
      {/* destop view */}

      {/* mobile view */}
      <div className="flex flex-col md:hidden">
        <div className="w-full">
          <h1 className="font-bold text-[4.651vw] text-[rgba(97,97,97,1)] font-roboto">
            GALLERY
          </h1>
          <p className="text-[13.023vw] font-roboto font-bold">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-[4.186vw] font-roboto text-[rgba(15,23,42,1)]">
            Scelerisque auctor dolor diam tortor, fames faucibus non interdum
            nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie
            adipiscing lacinia.
          </p>
        </div>
        <div>
          <div className="p-[8vw]">
            <div className="grid grid-cols-4 gap-[2vw] w-full">
            <Image
                src="/image/gallery/gallery3/gallery4.png"
                alt="gallery"
                width={10000}
                height={10000}
                className="col-span-2"
              />

              <Image
                src="/image/gallery/gallery3/gallery1.png"
                alt="gallery"
                width={10000}
                height={10000}
                className="col-span-2"
              />
              
              <Image
                src="/image/gallery/gallery3/gallery5.png"
                alt="gallery"
                width={10000}
                height={10000}
                className="col-span-4"
              />

              <Image
                src="/image/gallery/gallery3/gallery2.png"
                alt="gallery"
                width={10000}
                height={10000}
                className="col-span-1"
              />

              <Image
                src="/image/gallery/gallery3/gallery3.png"
                alt="gallery"
                width={10000}
                height={10000}
                className="col-span-3"
              />

              <Image
                src="/image/gallery/gallery3/gallery6.png"
                alt="gallery"
                width={10000}
                height={10000}
                className="col-span-4"
              />
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
    </section>
  );
}
