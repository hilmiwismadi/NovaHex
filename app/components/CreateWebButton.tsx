"use client";

import { useRouter } from "next/navigation";
import { useBuilder } from "../context/BuilderContext";
import { IoRocketSharp } from "react-icons/io5";

export default function CreateWebButton() {
  const router = useRouter();
  const { selectedSections } = useBuilder();

  const handleCreateWeb = () => {
    // Check if footer is selected
    const hasFooter = selectedSections.some(
      (s) => s.variantId && s.variantId.startsWith("footer-")
    );

    if (!hasFooter) {
      // Scroll to footer section
      const footerSection = document.getElementById("section-15");
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      // Show alert
      alert("⚠️ Please select a Footer section before creating your website!");
      return;
    }

    // Build query string with selected sections
    const variantIds = selectedSections
      .filter((s) => s.variantId)
      .map((s) => s.variantId)
      .join(",");

    if (variantIds) {
      router.push(`/build?sections=${variantIds}`);
    }
  };

  // Only show button if there are selected sections
  if (selectedSections.length === 0) {
    return null;
  }

  const validSelections = selectedSections.filter((s) => s.variantId).length;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-2 sm:gap-3">
      {/* Selection Count Badge */}
      {validSelections > 0 && (
        <div className="bg-white rounded-full px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg border-2 border-[#1AB0C8] animate-bounce">
          <p className="text-xs sm:text-sm font-bold text-[#1AB0C8]">
            {validSelections} section{validSelections !== 1 ? "s" : ""} selected
          </p>
        </div>
      )}

      {/* Create Web Button */}
      <button
        onClick={handleCreateWeb}
        disabled={validSelections === 0}
        className="group relative bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] text-white font-bold px-4 py-3 sm:px-8 sm:py-4 rounded-full shadow-2xl hover:shadow-[#1AB0C8]/50 hover:scale-110 transition-all duration-300 flex items-center gap-2 sm:gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <IoRocketSharp size={20} className="sm:w-6 sm:h-6 group-hover:animate-pulse" />
        <span className="text-sm sm:text-lg">Create Your Web</span>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
      </button>
    </div>
  );
}
