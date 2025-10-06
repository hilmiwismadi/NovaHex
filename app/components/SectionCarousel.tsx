"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { SectionVariant } from "../data/sections";
import { useBuilder } from "../context/BuilderContext";

interface SectionCarouselProps {
  sectionId: number;
  sectionName: string;
  variants: SectionVariant[];
}

export default function SectionCarousel({ sectionId, sectionName, variants }: SectionCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { toggleSection, updateVariant, isSectionSelected, getSelectedVariant } = useBuilder();

  const isSelected = isSectionSelected(sectionId);
  const selectedVariantId = getSelectedVariant(sectionId);

  // Update variant when carousel changes and section is selected
  useEffect(() => {
    if (isSelected && variants[currentIndex]) {
      const variant = variants[currentIndex];
      updateVariant(sectionId, variant.id, variant.label);
    }
  }, [currentIndex, isSelected]);

  // Sync currentIndex with selected variant
  useEffect(() => {
    if (selectedVariantId) {
      const index = variants.findIndex((v) => v.id === selectedVariantId);
      if (index !== -1 && index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  }, [selectedVariantId]);

  const handleToggle = () => {
    if (!isSelected && variants[currentIndex]) {
      // When enabling, set the current variant
      const variant = variants[currentIndex];
      toggleSection(sectionId, sectionName);
      updateVariant(sectionId, variant.id, variant.label);
    } else {
      toggleSection(sectionId, sectionName);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? variants.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === variants.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (clickedIndex: number) => {
    setCurrentIndex(clickedIndex);
  };

  const getVisibleVariants = (isMobile: boolean = false) => {
    // On mobile, always show only the current card
    if (isMobile) {
      return [{ variant: variants[currentIndex], index: currentIndex, isCenter: true }];
    }

    if (variants.length <= 3) {
      return variants.map((v, i) => ({ variant: v, index: i, isCenter: i === currentIndex }));
    }

    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + variants.length) % variants.length;
      visible.push({ variant: variants[index], index, isCenter: index === currentIndex });
    }
    return visible;
  };

  const visibleVariants = getVisibleVariants();
  const currentVariant = variants[currentIndex];

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-[1.042vw]">
      {/* Section Title with Toggle */}
      <div className="flex items-center justify-between">
        <h2 className="text-[#1AB0C8] font-semibold text-lg sm:text-xl lg:text-[1.25vw]">
          {sectionName}
        </h2>

        {/* Toggle Switch */}
        <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
          <span className="text-xs sm:text-sm lg:text-[0.833vw] text-[#75868D] font-medium hidden sm:inline">
            Add to website
          </span>
          <span className="text-xs sm:text-sm lg:text-[0.833vw] text-[#75868D] font-medium sm:hidden">
            Add
          </span>
          <div className="relative">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#E2E8F0] rounded-full peer peer-checked:bg-[#1AB0C8] transition-colors duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
          </div>
        </label>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full flex items-center justify-center gap-2 sm:gap-4 lg:gap-[1.5vw]">
        {/* Previous Button */}
        {variants.length > 1 && (
          <button
            onClick={handlePrev}
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-[2.5vw] lg:h-[2.5vw] rounded-full bg-white border-2 border-[#E2E8F0] hover:border-[#1AB0C8] hover:bg-[#1AB0C8] hover:text-white transition-all duration-300 flex items-center justify-center shadow-md z-10"
            aria-label="Previous variant"
          >
            <IoChevronBackOutline className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* Variants Container - Desktop */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4 lg:gap-[1.5vw]">
          {visibleVariants.map(({ variant, index, isCenter }) => {
            const isSingle = variants.length === 1;

            return (
              <div
                key={variant.id}
                onClick={() => !isCenter && handleCardClick(index)}
                className={`
                  transition-all duration-500 ease-in-out
                  ${!isCenter && !isSingle ? 'cursor-pointer hover:opacity-80' : ''}
                  ${isSingle ? "w-full max-w-[700px] lg:max-w-[36.458vw]" : ""}
                  ${variants.length <= 3 && !isCenter ? "flex-1 max-w-[450px] lg:max-w-[23.438vw] opacity-60 scale-95" : ""}
                  ${variants.length <= 3 && isCenter ? "flex-1 max-w-[450px] lg:max-w-[23.438vw] scale-100" : ""}
                  ${variants.length > 3 && !isCenter ? "opacity-60 scale-90 flex-shrink-0 w-[320px] lg:w-[16.667vw]" : ""}
                  ${variants.length > 3 && isCenter ? "scale-100 flex-shrink-0 w-[450px] lg:w-[23.438vw]" : ""}
                `}
              >
                <div className={`flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${isCenter && isSelected ? 'ring-4 ring-[#1AB0C8]' : ''} ${isCenter ? 'shadow-2xl' : ''}`}>
                  {/* Image */}
                  <div className="relative w-full bg-gray-100 border border-[#E2E8F0] rounded-t-lg overflow-hidden group">
                    <Image
                      src={variant.thumbnail}
                      alt={variant.label}
                      width={1000}
                      height={1000}
                      className="w-full h-auto object-contain pointer-events-none"
                      sizes="(max-width: 768px) 350px, 350px"
                    />
                    {/* Preview Button Overlay */}
                    {isCenter && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                        <a
                          href={`/preview/${variant.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] text-white font-bold px-4 py-2 lg:px-[1.2vw] lg:py-[0.6vw] rounded-lg text-sm lg:text-[0.833vw] hover:scale-110 transition-all duration-300 shadow-lg pointer-events-auto"
                        >
                          Show Preview
                        </a>
                      </div>
                    )}
                  </div>
                  {/* Label */}
                  <div className="w-full bg-[#F4F4F4] border border-t-0 border-[#E2E8F0] rounded-b-lg py-2 lg:py-[0.625vw] flex items-center justify-center">
                    <p className="font-semibold text-[#001118] text-sm lg:text-[0.938vw]">
                      {variant.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Variants Container - Mobile */}
        <div className="flex md:hidden flex-1 items-center justify-center">
          <div className="w-full max-w-[280px] sm:max-w-[340px]">
            <div className={`flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${isSelected ? 'ring-4 ring-[#1AB0C8]' : ''} shadow-2xl`}>
              {/* Image */}
              <div className="relative w-full bg-gray-100 border border-[#E2E8F0] rounded-t-lg overflow-hidden">
                <Image
                  src={currentVariant.thumbnail}
                  alt={currentVariant.label}
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-contain pointer-events-none"
                  sizes="340px"
                />
              </div>
              {/* Label */}
              <div className="w-full bg-[#F4F4F4] border border-t-0 border-[#E2E8F0] rounded-b-lg py-2 flex items-center justify-center">
                <p className="font-semibold text-[#001118] text-sm">
                  {currentVariant.label}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        {variants.length > 1 && (
          <button
            onClick={handleNext}
            className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-[2.5vw] lg:h-[2.5vw] rounded-full bg-white border-2 border-[#E2E8F0] hover:border-[#1AB0C8] hover:bg-[#1AB0C8] hover:text-white transition-all duration-300 flex items-center justify-center shadow-md z-10"
            aria-label="Next variant"
          >
            <IoChevronForwardOutline className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}
      </div>

      {/* Selected Section Info */}
      {isSelected && currentVariant && (
        <div className="flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-[#84D4E1]/20 to-[#1AB0C8]/20 rounded-lg border border-[#1AB0C8]/30">
          <div className="w-2 h-2 bg-[#1AB0C8] rounded-full animate-pulse"></div>
          <p className="text-sm lg:text-[0.833vw] text-[#001118] font-medium">
            Selected: <span className="font-bold text-[#1AB0C8]">{sectionName} - {currentVariant.label}</span>
          </p>
        </div>
      )}
    </div>
  );
}
