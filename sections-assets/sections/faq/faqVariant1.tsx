"use client"
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FaqDropdownProps {
    question: string;
    answer: string;
}

function FaqDropdownCard({ question, answer }: FaqDropdownProps) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="md:w-[41.25vw] w-[91.358vw] bg-[var(--color-primary)] bg-opacity-10 md:p-[1vw] p-[3vw] rounded-lg m-[0.8vw] cursor-pointer hover:bg-opacity-20 transition-all duration-300" onClick={() => setIsActive(!isActive)}>
            <div className={`font-bold md:text-[0.813vw] text-[2.609vw] flex items-center justify-between ${isActive ? "mb-[1vw]" : "my-[0.5vw]"}`}>
                <p className="md:text-[1.25vw] text-[2.609vw]">{question}</p>
                {isActive ? <FaMinus className="md:text-[0.8vw] text-[2vw]" /> : <FaPlus className="md:text-[0.8vw] text-[2vw]" />}
            </div>
            <p className={`md:h-[6.25vw] h-[24.186vw] md:text-[0.828vw] text-[2.658vw] text-[#747474] ${isActive ? "flex" : "hidden"}`}>
                {answer}
            </p>
        </div>
    );
}

export default function Faq1() {
    const data= [
        {
            question: "What is Mobbin?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "How often do you update the library?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "Can I get a free trial?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "Do you have a monthly plan?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "What forms of payment do you accept?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "Can I cancel my subscription?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "How do I switch from a Pro plan to a Team plan?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "What is the difference between Enterprise plan and Team plan?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
        {
            question: "What is your refund policy?",
            ans: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster."

        },
    ]
    return (
        <section className="w-full md:aspect-[1920/1080] aspect-[430/859] p-[3vw]">
            {/* title */}
            <h1 className="font-bold md:text-[1.964vw] text-[6.033vw] text-center my-[1.2vw]">Frequently Asked Questions</h1>
            {/* title */}

            {/* content */}
            <div className="flex flex-col items-center">
                {data.map((d, index) => (
                    <FaqDropdownCard key={index} question={d.question} answer={d.ans} />
                ))}
            </div>
            {/* content */}
        </section>
    );
}
