"use client";

import SectionCarousel from "./components/SectionCarousel";
import CreateWebButton from "./components/CreateWebButton";
import Breadcrumb from "./components/Breadcrumb";
import ColorPicker from "./components/ColorPicker";
import { sections } from "./data/sections";
import { BuilderProvider, useBuilder } from "./context/BuilderContext";

function HomeContent() {
  const { currentStep } = useBuilder();

  return (
    <main className="min-h-screen w-full bg-[#F8FAFC] flex flex-col">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Step 1: Section Selection */}
      {currentStep === 1 && (
        <div className="w-full flex flex-col items-center pb-24 sm:pb-32">
      {/* Section Selector */}
      <section className="w-full max-w-[1400px] lg:max-w-[70.521vw] px-4 sm:px-6 lg:px-0 py-8 sm:py-12 lg:py-[5.208vw]">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[2.5vw]">
          {/* Info Banner */}
          <div className="w-full bg-gradient-to-r from-[#76BDE4] to-[#79CACA] p-[2px] lg:p-[0.156vw] rounded-lg sm:rounded-xl lg:rounded-[0.833vw] shadow-lg">
            <div className="w-full h-full bg-gradient-to-tr from-[#c4e1f5] to-[#eaf8f9] rounded-[7px] sm:rounded-[11px] lg:rounded-[0.729vw] px-4 py-3 sm:px-6 sm:py-4 lg:px-[2.083vw] lg:py-[1.5vw]">
              <p className="text-[#4E5F66] font-semibold text-xs sm:text-sm lg:text-[0.938vw] leading-relaxed">
                Pilihan template section hanya tersedia untuk paket{" "}
                <span className="text-[#001118] font-bold">Landing Page</span>.
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Jelajahi beragam desain menarik kami dan pilih yang paling sesuai dengan citra brand Anda.
              </p>
            </div>
          </div>

          {/* Section Carousels */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[3vw]">
            {sections.map((section) => (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className="w-full bg-white rounded-lg sm:rounded-xl lg:rounded-[0.833vw] border border-[#E2E8F0] shadow-md p-4 sm:p-6 lg:p-[2.083vw]"
              >
                <SectionCarousel
                  sectionId={section.id}
                  sectionName={section.name}
                  variants={section.variants}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* Footer */}
          <footer className="w-full bg-[#001118] text-white py-6 sm:py-8 lg:py-[2vw] px-4 sm:px-6 lg:px-[15vw] text-center">
            <p className="text-xs sm:text-sm lg:text-[0.833vw] text-[#C3D4DB]">
              © 2025 ArachnoVa. All rights reserved.
            </p>
          </footer>

          {/* Floating Create Web Button */}
          <CreateWebButton />
        </div>
      )}

      {/* Step 2: Color Selection */}
      {currentStep === 2 && <ColorPicker />}
    </main>
  );
}

export default function Home() {
  return (
    <BuilderProvider>
      <HomeContent />
    </BuilderProvider>
  );
}
