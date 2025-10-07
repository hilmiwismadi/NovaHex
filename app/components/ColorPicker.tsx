"use client";

import { useState } from "react";
import { useBuilder } from "../context/BuilderContext";
import { useRouter } from "next/navigation";
import { IoRocketSharp, IoColorPaletteOutline } from "react-icons/io5";

export default function ColorPicker() {
  const { colorTheme, updateColorTheme, selectedSections } = useBuilder();
  const router = useRouter();

  const [tempColors, setTempColors] = useState(colorTheme);

  const handleColorChange = (colorType: "primary" | "secondary" | "tertiary", value: string) => {
    setTempColors((prev) => ({
      ...prev,
      [colorType]: value,
    }));
  };

  const handleApplyColors = () => {
    updateColorTheme(tempColors);
  };

  const handleBuildWebsite = () => {
    updateColorTheme(tempColors);

    // Build query string with selected sections
    const variantIds = selectedSections
      .filter((s) => s.variantId)
      .map((s) => s.variantId)
      .join(",");

    if (variantIds) {
      router.push(`/build?sections=${variantIds}&primary=${encodeURIComponent(tempColors.primary)}&secondary=${encodeURIComponent(tempColors.secondary)}&tertiary=${encodeURIComponent(tempColors.tertiary)}`);
    }
  };

  const presetThemes = [
    {
      name: "ArachnoVa (Default)",
      colors: { primary: "#1AB0C8", secondary: "#4273CE", tertiary: "#F65050" },
    },
    {
      name: "Ocean Blue",
      colors: { primary: "#246BFD", secondary: "#407BFF", tertiary: "#6236FF" },
    },
    {
      name: "Forest Green",
      colors: { primary: "#2ECC71", secondary: "#27AE60", tertiary: "#F39C12" },
    },
    {
      name: "Sunset Orange",
      colors: { primary: "#E74C3C", secondary: "#C77B2C", tertiary: "#593D29" },
    },
    {
      name: "Purple Dreams",
      colors: { primary: "#9B59B6", secondary: "#8E44AD", tertiary: "#3498DB" },
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] py-8 sm:py-12 lg:py-[3vw]">
      <div className="max-w-[1200px] lg:max-w-[62.5vw] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <IoColorPaletteOutline className="text-4xl sm:text-5xl lg:text-[3vw] text-[#1AB0C8]" />
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5vw] font-bold text-[#001118]">
              Customize Your Colors
            </h1>
          </div>
          <p className="text-base sm:text-lg lg:text-[1.042vw] text-[#75868D]">
            Choose a preset theme or create your own custom color palette
          </p>
        </div>

        {/* Preset Themes */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-[1.5vw] font-bold text-[#001118] mb-4 sm:mb-6">
            Preset Themes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {presetThemes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => setTempColors(theme.colors)}
                className="bg-white rounded-lg p-4 sm:p-6 border-2 border-[#E2E8F0] hover:border-[#1AB0C8] hover:shadow-xl transition-all duration-300 text-left group"
              >
                <p className="font-semibold text-sm sm:text-base lg:text-[0.938vw] text-[#001118] mb-3">
                  {theme.name}
                </p>
                <div className="flex gap-2">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: theme.colors.primary }}
                  ></div>
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: theme.colors.secondary }}
                  ></div>
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: theme.colors.tertiary }}
                  ></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Custom Color Pickers */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-lg p-6 sm:p-8 lg:p-[2.5vw] mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-[1.5vw] font-bold text-[#001118] mb-6 sm:mb-8">
            Custom Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Primary Color */}
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-base sm:text-lg lg:text-[1.042vw] text-[#001118]">
                Primary Color
              </label>
              <p className="text-sm lg:text-[0.833vw] text-[#75868D]">
                Main brand color for buttons, links, and accents
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={tempColors.primary}
                  onChange={(e) => handleColorChange("primary", e.target.value)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer border-2 border-[#E2E8F0] hover:scale-110 transition-transform duration-300"
                />
                <input
                  type="text"
                  value={tempColors.primary}
                  onChange={(e) => handleColorChange("primary", e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-[#E2E8F0] rounded-lg text-sm sm:text-base font-mono focus:border-[#1AB0C8] focus:outline-none transition-colors duration-300"
                  placeholder="#1AB0C8"
                />
              </div>
            </div>

            {/* Secondary Color */}
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-base sm:text-lg lg:text-[1.042vw] text-[#001118]">
                Secondary Color
              </label>
              <p className="text-sm lg:text-[0.833vw] text-[#75868D]">
                Supporting color for backgrounds and sections
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={tempColors.secondary}
                  onChange={(e) => handleColorChange("secondary", e.target.value)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer border-2 border-[#E2E8F0] hover:scale-110 transition-transform duration-300"
                />
                <input
                  type="text"
                  value={tempColors.secondary}
                  onChange={(e) => handleColorChange("secondary", e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-[#E2E8F0] rounded-lg text-sm sm:text-base font-mono focus:border-[#1AB0C8] focus:outline-none transition-colors duration-300"
                  placeholder="#4273CE"
                />
              </div>
            </div>

            {/* Tertiary Color */}
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-base sm:text-lg lg:text-[1.042vw] text-[#001118]">
                Tertiary Color
              </label>
              <p className="text-sm lg:text-[0.833vw] text-[#75868D]">
                Accent color for highlights and special elements
              </p>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={tempColors.tertiary}
                  onChange={(e) => handleColorChange("tertiary", e.target.value)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg cursor-pointer border-2 border-[#E2E8F0] hover:scale-110 transition-transform duration-300"
                />
                <input
                  type="text"
                  value={tempColors.tertiary}
                  onChange={(e) => handleColorChange("tertiary", e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-[#E2E8F0] rounded-lg text-sm sm:text-base font-mono focus:border-[#1AB0C8] focus:outline-none transition-colors duration-300"
                  placeholder="#F65050"
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="mt-8 p-6 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
            <p className="font-semibold text-sm lg:text-[0.938vw] text-[#75868D] mb-4">
              Color Preview:
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                style={{ backgroundColor: tempColors.primary }}
                className="px-6 py-3 text-white font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                Primary Button
              </button>
              <button
                style={{ backgroundColor: tempColors.secondary }}
                className="px-6 py-3 text-white font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                Secondary Button
              </button>
              <button
                style={{ backgroundColor: tempColors.tertiary }}
                className="px-6 py-3 text-white font-bold rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              >
                Tertiary Button
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleApplyColors}
            className="w-full sm:w-auto bg-white text-[#1AB0C8] font-bold px-8 py-4 rounded-full border-2 border-[#1AB0C8] hover:bg-[#1AB0C8] hover:text-white transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3"
          >
            <IoColorPaletteOutline size={24} />
            <span className="text-base sm:text-lg">Apply Colors</span>
          </button>
          <button
            onClick={handleBuildWebsite}
            className="w-full sm:w-auto bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <IoRocketSharp size={24} />
            <span className="text-base sm:text-lg">Build My Website</span>
          </button>
        </div>
      </div>
    </div>
  );
}
