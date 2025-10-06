"use client";

import { IoSparklesSharp } from "react-icons/io5";
import { useState } from "react";

function formatNumberWithDots(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

interface CardProps {
  feature: {
    title: string;
    subtitle: string;
    price: {
      monthly: string | number;
      annualy: string | number;
    };
    features: string[];
    isPopular?: boolean;
  };
  isMonthly: boolean;
}

function Pricing2Card({ feature, isMonthly }: CardProps) {
  const price = isMonthly ? feature.price.monthly : feature.price.annualy;
  const formattedPrice =
    typeof price === "number" ? formatNumberWithDots(price) : price;

  return (
    <div className="md:w-[16vw] w-[68.14vw] md:h-full">
      <div
        className={`text-white md:text-[0.729vw] text-[3vw] md:h-[2vw] h-[5vw] ${
          feature.isPopular ? "bg-blue-600" : ""
        } flex items-center rounded-t-lg justify-center gap-x-[0.5vw]`}
      >
        {feature.isPopular && (
          <div className="flex items-center rounded-t-lg justify-center gap-x-[0.5vw]">
            <p>Most Popular</p>
            <IoSparklesSharp className="md:text-[1vw] text-[3vw]" />
          </div>
        )}
      </div>
      <div
        className={`bg-white shadow-md md:p-[2vw] p-[5vw] md:h-fit h-[117.209vw] ${
          feature.isPopular ? "rounded-b-lg" : "rounded-lg"
        }`}
      >
        <h2 className="md:text-[1.042vw] text-[4.733vw] font-semibold">{feature.title}</h2>
        <p className="md:text-[0.729vw] text-[3.312vw] text-gray-500 md:mb-[0.833vw] mb-[5vw]">
          {feature.subtitle}
        </p>
        <div className="flex md:items-end items-center md:space-x-0 space-x-[1vw] md:mb-[0.833vw] mb-[5vw]">
          {formattedPrice !== "free" && formattedPrice !== "custom" && (
            <span className="md:text-[0.729vw] text-[2.733vw]">Rp.</span>
          )}
          <span className="md:text-[1.042vw] text-[4.733vw] font-bold">{formattedPrice}</span>
          {formattedPrice !== "free" && formattedPrice !== "custom" && (
            <p className="md:text-[0.729vw] text-[2.733vw] text-gray-500">
              {isMonthly ? "/month" : "/year"}
            </p>
          )}
        </div>
        <button className="bg-blue-600 text-white font-semibold py-[0.417vw] px-[0.833vw] rounded-lg w-full mb-4 md:text-[0.833vw] text-[3.786vw]">
          Get started
        </button>
        <p className="md:text-[0.833vw] text-[3.786vw] font-bold md:mb-[1vw] mb-[3vw]">{`All free ${feature.title}, plus:`}</p>
        <ul className="text-sm text-[3.312vw] text-gray-500 md:space-y-[0.529vw] space-y-[5vw]">
          {feature.features.map((item, index) => (
            <li key={index} className="flex items-center md:text-[0.629vw] text-[3vw]">
              <span className="text-blue-600 mr-2">✔️</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Pricing2() {
  const data = [
    {
      title: "Free",
      subtitle: "Best for personal use",
      price: {
        monthly: "free",
        annualy: "free",
      },
      isPopular: false,
      features: [
        "Task Management",
        "Project Planning",
        "Team Collaboration",
        "Notifications and Reminders",
        "What you get",
      ],
    },
    {
      title: "Starter",
      subtitle: "Best for personal use",
      price: {
        monthly: "490.000",
        annualy: "4.799.999",
      },
      isPopular: false,
      features: [
        "Kanban Boards",
        "Gantt Charts",
        "Resource Allocation",
        "Calendar Integration",
        "Progress Tracking",
      ],
    },
    {
      title: "Business",
      subtitle: "Best for personal use",
      price: {
        monthly: "500.000",
        annualy: "5.999.999",
      },
      isPopular: true,
      features: [
        "Customizable Workflows",
        "Reporting and Analytics",
        "Document Management",
        "Agile Methodology Support",
        "Issue Tracking",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Best for personal use",
      price: {
        monthly: "custom",
        annualy: "custom",
      },
      isPopular: false,
      features: [
        "SSO",
        "All integrations",
        "Client Collaboration with 2FA",
        "Advanced Project Planning",
        "Mobile App Integration",
      ],
    },
  ];

  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="w-full p-8 md:aspect-[1920/1080] aspect-[430/2440]">
      {/* Title */}
      <div className="text-center md:mb-[3vw]">
        <p className="md:text-[1.667vw] text-[5.991vw] font-bold">
          Streamline your teamwork. Start free
        </p>
        <p className="md:text-[0.938vw] text-[3.37vw]">
          Choose the perfect plan for your business needs
        </p>
        {/* Toggle */}
        <div className="flex justify-end items-end">
          <div className="md:w-fit w-1/2 md:h-fit h-[6vw] flex gap-x-[1vw] justify-center items-center">
            <p className="md:text-[0.9vw] text-[2.4vw] font-medium text-gray-900 dark:text-gray-300">
              Monthly
            </p>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setIsMonthly(!isMonthly)}
              />
              <div className="relative md:w-[2.864vw] md:h-[1.563vw] w-[7.65vw] h-[4.3vw] bg-gray-200 rounded-full peer peer-focus:ring-[0.208vw] peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0.57vw] after:start-[0.40vw] md:after:top-[0.130vw] md:after:start-[0.10vw] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[3.302vw] after:w-[3.302vw] md:after:h-[1.302vw] md:after:w-[1.302vw] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <p className="md:text-[0.9vw] text-[2.4vw] font-medium text-gray-900 dark:text-gray-300">
              Yearly
            </p>
          </div>
        </div>
        {/* Toggle */}
      </div>
      {/* Plan Cards */}
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-x-[1.042vw] gap-y-[3.042vw] md:mt-0 mt-[3vw]">
        {data.map((plan, index) => (
          <Pricing2Card key={index} feature={plan} isMonthly={isMonthly} />
        ))}
      </div>
    </div>
  );
}
