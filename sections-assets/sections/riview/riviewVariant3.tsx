"use client";
import Image from "next/image";

interface iCard {
    image_src: string;
    image_alt: string;
    quote: string;
    name: string;
    occupation: string;
}

const data: iCard[] = [
    { image_src: "/image/riview/riview3/riviewer1.png", image_alt: "riviewer", quote: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”", name: "Isabella Chavez", occupation: "Graphic Designer" },
    { image_src: "/image/riview/riview3/riviewer2.png", image_alt: "riviewer", quote: "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”", name: "Curtis Rhodes", occupation: "Digital Marketer" },
    { image_src: "/image/riview/riview3/riviewer3.png", image_alt: "riviewer", quote: "“Must have book for all, who want to be Product Designer or Interaction Designer.”", name: "Lucas Mann", occupation: "Co Founder" },
    { image_src: "/image/riview/riview3/riviewer1.png", image_alt: "riviewer", quote: "“You made it so simple. My new site is so much faster and easier to work with than my old site.”", name: "Isabella Chavez", occupation: "Graphic Designer" },
];

interface CardProps {
    image_src: string;
    image_alt: string;
    name: string;
    quote: string;
    occupation: string;
}

function Card({ image_src, image_alt, name, quote, occupation }: CardProps) {
    return (
        <div className="md:w-[18.2291vw] md:h-[18.9583vw] md:p-[1.5625vw] p-[5.5vw] w-[76.279vw] h-[78.372vw] bg-white rounded-md flex flex-col justify-evenly border-2 border-[var(--color-primary)] border-opacity-20">
            <Image src={image_src} alt={image_alt} width={100} height={100} className="md:w-[2.8125vw] md:h-[2.8125vw] w-[11.628vw] h-[11.628vw]" />
            <h1 className="md:text-[1.09375vw] text-[4.533vw]">{quote}</h1>
            <div className="md:text-[0.8854vw] text-[3.67vw]">
                <p className="font-bold">{name}</p>
                <p className="text-[rgba(22,28,45,1)]">{occupation}</p>
            </div>
        </div>
    );
}

export default function Riview3() {
    return (
        <section className="md:aspect-[1920/1080] aspect-[430/1080] bg-[rgba(246,248,247,1)] py-[3.125vw] flex flex-col justify-center items-center">
            {/* title */}
            <div className="md:mx-[4.166vw] mx-[2vw] text-center flex flex-col gap-y-[0.6vw] md:w-[40.05vw]">
                <h1 className="md:text-[1.875vw] text-[7.056vw] font-bold">What people say about us</h1>
                <p className="md:text-[0.9895vw] text-[16.01px] text-[rgba(22,28,45,1)]">
                    Lorem ipsum dolor sit amet consectetur. Donec erat condimentum porta
                    cras maecenas facilisis.
                </p>
            </div>
            {/* title */}

            {/* content */}
            <div className="ml-[4.166vw] mt-[4.6875vw] flex gap-x-[2vw] justify-start md:overflow-x-auto md:w-[60.9375vw] md:scrollbar-hide">
                <div className="flex flex-col gap-y-[2vw] md:flex-row md:gap-x-[0.9vw]">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            image_src={item.image_src}
                            image_alt={item.image_alt}
                            name={item.name}
                            quote={item.quote}
                            occupation={item.occupation}
                        />
                    ))}
                </div>
            </div>
            {/* content */}
        </section>
    );
}
