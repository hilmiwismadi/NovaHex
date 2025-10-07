"use client";

import { useBuilder } from "../context/BuilderContext";
import { IoChevronForward } from "react-icons/io5";

export default function Breadcrumb() {
  const { currentStep } = useBuilder();

  const steps = [
    { id: 1, name: "Section Selection", desc: "Choose your sections" },
    { id: 2, name: "Color Selection", desc: "Customize your colors" },
  ];

  return (
    <div className="w-full bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-[1400px] lg:max-w-[70.521vw] mx-auto px-4 sm:px-6 lg:px-0 py-4 sm:py-6">
        <div className="flex items-center gap-2 sm:gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2 sm:gap-4">
              {/* Step Circle */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className={`
                    flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-[2.5vw] lg:h-[2.5vw] rounded-full font-bold text-sm sm:text-base lg:text-[0.938vw] transition-all duration-300
                    ${
                      currentStep === step.id
                        ? "bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] text-white shadow-lg scale-110"
                        : currentStep > step.id
                        ? "bg-[#1AB0C8] text-white"
                        : "bg-[#E2E8F0] text-[#75868D]"
                    }
                  `}
                >
                  {currentStep > step.id ? "✓" : step.id}
                </div>
                <div className="hidden sm:flex flex-col">
                  <p
                    className={`font-semibold text-sm lg:text-[0.938vw] transition-colors duration-300 ${
                      currentStep >= step.id ? "text-[#001118]" : "text-[#75868D]"
                    }`}
                  >
                    {step.name}
                  </p>
                  <p className="text-xs lg:text-[0.729vw] text-[#75868D]">{step.desc}</p>
                </div>
                {/* Mobile: Show only step name */}
                <div className="flex sm:hidden">
                  <p
                    className={`font-semibold text-xs transition-colors duration-300 ${
                      currentStep >= step.id ? "text-[#001118]" : "text-[#75868D]"
                    }`}
                  >
                    {step.name}
                  </p>
                </div>
              </div>

              {/* Arrow Separator */}
              {index < steps.length - 1 && (
                <IoChevronForward
                  className={`text-base sm:text-xl lg:text-[1.25vw] transition-colors duration-300 ${
                    currentStep > step.id ? "text-[#1AB0C8]" : "text-[#E2E8F0]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
