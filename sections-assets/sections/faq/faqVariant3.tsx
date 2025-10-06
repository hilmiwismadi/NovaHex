"use client"
import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";


interface FaqDropdownProps {
    question: string;
    answer: string;
}

function FaqDropdownCard({ question, answer }: FaqDropdownProps) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="md:w-[66.667vw] w-full bg-[rgba(245,245,245,1)] md:p-[1vw] p-[3vw] rounded-lg md:m-[0.8vw] my-[2vw] shadow-md" onClick={() => setIsActive(!isActive)}>
            <div className={`font-bold text-[1.042vw] flex items-center justify-between ${isActive ? "mb-[1vw]" : "my-[0.5vw]"}`}>
                <p className="text-blue-500 md:text-[1.25vw] text-[4.581vw]">{question}</p>
                {isActive ? <FaMinus className="text-[0.9vw]" /> : <FaChevronDown className="text-[0.9vw] text-blue-700" />}
            </div>
            <p className={`md:h-[6.25vw] h-[53.953vw] md:text-[0.938vw] text-[4.186vw] md:mt-0 mt-[3vw] ${isActive ? "flex" : "hidden"}`}>
                {answer}
            </p>
        </div>
    );
}

export default function Faq3() {
    const data = [
        {
            question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
            ans: "Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nisl enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu tellus neque est feugiat."

        },
        {
            question: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
            ans: "Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nisl enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu tellus neque est feugiat."

        },
        {
            question: "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."
        },
    ]

    return (
        <section className="w-full md:aspect-[1920/1080] aspect-[430/1479] p-[3vw] flex flex-col items-center bg-gray-100 text-gray-800 relative ">
            <h1 className="my-[2.5vw] md:text-[2.917vw] text-[10.044vw] md:text-start text-center font-bold">Answers to your questions</h1>
            <div>
                {data.map((d, index) => (
                    <FaqDropdownCard key={index} question={d.question} answer={d.ans} />
                ))}
            </div>
        </section>
    )
}