"use client";

import React, { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Import all section variants
import HeroVariant1 from "@/sections-assets/sections/hero/heroVariant1";
import HeroVariant2 from "@/sections-assets/sections/hero/heroVariant2";
import HeroVariant3 from "@/sections-assets/sections/hero/heroVariant3";
import HeroVariant4 from "@/sections-assets/sections/hero/heroVariant4";

import AboutUsVariant1 from "@/sections-assets/sections/aboutUs/aboutUsVariant1";
import AboutUsVariant2 from "@/sections-assets/sections/aboutUs/aboutUsVariant2";
import AboutUsVariant3 from "@/sections-assets/sections/aboutUs/aboutUsVariant3";

import ServiceVariant1 from "@/sections-assets/sections/services/serviceVariant1";
import ServiceVariant2 from "@/sections-assets/sections/services/serviceVariant2";
import ServiceVariant3 from "@/sections-assets/sections/services/serviceVariant3";
import ServiceVariant4 from "@/sections-assets/sections/services/serviceVariant4";
import ServiceVariant5 from "@/sections-assets/sections/services/serviceVariant5";

import KelebihanVariant1 from "@/sections-assets/sections/kelebihan/kelebihanVariant1";
import KelebihanVariant2 from "@/sections-assets/sections/kelebihan/kelebihanVariant2";
import KelebihanVariant3 from "@/sections-assets/sections/kelebihan/kelebihanVariant3";
import KelebihanVariant4 from "@/sections-assets/sections/kelebihan/kelebihanVariant4";

import GalleryVariant1 from "@/sections-assets/sections/gallery/galleryVariant1";
import GalleryVariant2 from "@/sections-assets/sections/gallery/galleryVariant2";
import GalleryVariant3 from "@/sections-assets/sections/gallery/galleryVariant3";
import GalleryVariant4 from "@/sections-assets/sections/gallery/galleryVariant4";

import PortofolioVariant1 from "@/sections-assets/sections/portofolio/portofolioVariant1";
import PortofolioVariant2 from "@/sections-assets/sections/portofolio/portofolioVariant2";

import TeamsVariant1 from "@/sections-assets/sections/teams/teamsVariant1";
import TeamsVariant2 from "@/sections-assets/sections/teams/teamsVariant2";
import TeamsVariant3 from "@/sections-assets/sections/teams/teamsVariant3";

import PricingVariant1 from "@/sections-assets/sections/pricing/pricingVariant1";
import PricingVariant2 from "@/sections-assets/sections/pricing/pricingVariant2";
import PricingVariant3 from "@/sections-assets/sections/pricing/pricingVariant3";

import FaqVariant1 from "@/sections-assets/sections/faq/faqVariant1";
import FaqVariant2 from "@/sections-assets/sections/faq/faqVariant2";
import FaqVariant3 from "@/sections-assets/sections/faq/faqVariant3";

import RiviewVariant1 from "@/sections-assets/sections/riview/riviewVariant1";
import RiviewVariant2 from "@/sections-assets/sections/riview/riviewVariant2";
import RiviewVariant3 from "@/sections-assets/sections/riview/riviewVariant3";

import ClientsVariant1 from "@/sections-assets/sections/clients/clientsVariant1";
import ClientsVariant2 from "@/sections-assets/sections/clients/clientsVariant2";
import ClientsVariant3 from "@/sections-assets/sections/clients/clientsVariant3";

import CtaVariant1 from "@/sections-assets/sections/cta/ctaVariant1";
import CtaVariant2 from "@/sections-assets/sections/cta/ctaVariant2";
import CtaVariant3 from "@/sections-assets/sections/cta/ctaVariant3";
import CtaVariant4 from "@/sections-assets/sections/cta/ctaVariant4";

import LocationVariant1 from "@/sections-assets/sections/location/locationVariant1";
import LocationVariant2 from "@/sections-assets/sections/location/locationVariant2";
import LocationVariant3 from "@/sections-assets/sections/location/locationVariant3";

import NavbarVariant1 from "@/sections-assets/sections/navbar/navbarVariant1";
import NavbarVariant2 from "@/sections-assets/sections/navbar/navbarVariant2";
import NavbarVariant3 from "@/sections-assets/sections/navbar/navbarVariant3";
import NavbarVariant4 from "@/sections-assets/sections/navbar/navbarVariant4";

import FooterVariant1 from "@/sections-assets/sections/footer/footerVariant1";
import FooterVariant2 from "@/sections-assets/sections/footer/footerVariant2";
import FooterVariant3 from "@/sections-assets/sections/footer/footerVariant3";

// Component mapping
const componentMap: Record<string, React.ComponentType> = {
  "hero-1": HeroVariant1,
  "hero-2": HeroVariant2,
  "hero-3": HeroVariant3,
  "hero-4": HeroVariant4,
  "about-1": AboutUsVariant1,
  "about-2": AboutUsVariant2,
  "about-3": AboutUsVariant3,
  "service-1": ServiceVariant1,
  "service-2": ServiceVariant2,
  "service-3": ServiceVariant3,
  "service-4": ServiceVariant4,
  "service-5": ServiceVariant5,
  "kelebihan-1": KelebihanVariant1,
  "kelebihan-2": KelebihanVariant2,
  "kelebihan-3": KelebihanVariant3,
  "kelebihan-4": KelebihanVariant4,
  "gallery-1": GalleryVariant1,
  "gallery-2": GalleryVariant2,
  "gallery-3": GalleryVariant3,
  "gallery-4": GalleryVariant4,
  "portofolio-1": PortofolioVariant1,
  "portofolio-2": PortofolioVariant2,
  "teams-1": TeamsVariant1,
  "teams-2": TeamsVariant2,
  "teams-3": TeamsVariant3,
  "pricing-1": PricingVariant1,
  "pricing-2": PricingVariant2,
  "pricing-3": PricingVariant3,
  "faq-1": FaqVariant1,
  "faq-2": FaqVariant2,
  "faq-3": FaqVariant3,
  "review-1": RiviewVariant1,
  "review-2": RiviewVariant2,
  "review-3": RiviewVariant3,
  "clients-1": ClientsVariant1,
  "clients-2": ClientsVariant2,
  "clients-3": ClientsVariant3,
  "cta-1": CtaVariant1,
  "cta-2": CtaVariant2,
  "cta-3": CtaVariant3,
  "cta-4": CtaVariant4,
  "location-1": LocationVariant1,
  "location-2": LocationVariant2,
  "location-3": LocationVariant3,
  "navbar-1": NavbarVariant1,
  "navbar-2": NavbarVariant2,
  "navbar-3": NavbarVariant3,
  "navbar-4": NavbarVariant4,
  "footer-1": FooterVariant1,
  "footer-2": FooterVariant2,
  "footer-3": FooterVariant3,
};

function BuildContent() {
  const searchParams = useSearchParams();
  const sectionsParam = searchParams.get("sections");
  const primaryColor = searchParams.get("primary") || "#1AB0C8";
  const secondaryColor = searchParams.get("secondary") || "#4273CE";
  const tertiaryColor = searchParams.get("tertiary") || "#F65050";

  // Apply custom colors to CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", primaryColor);
    document.documentElement.style.setProperty("--color-secondary", secondaryColor);
    document.documentElement.style.setProperty("--color-tertiary", tertiaryColor);
  }, [primaryColor, secondaryColor, tertiaryColor]);

  if (!sectionsParam) {
    return (
      <div className="min-h-screen w-full bg-[#F8FAFC] flex flex-col items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold text-[#001118] mb-4">No Sections Selected</h1>
          <p className="text-[#75868D] mb-8">
            Please go back and select some sections to build your website.
          </p>
          <a
            href="/"
            className="inline-block bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] text-white font-bold px-6 py-3 rounded-lg hover:-translate-y-1 transition-all duration-300 shadow-md"
          >
            Back to Builder
          </a>
        </div>
      </div>
    );
  }

  const sectionIds = sectionsParam.split(",").filter(Boolean);

  // Separate navbar from other sections
  const navbarId = sectionIds.find((id) => id.startsWith("navbar-"));
  const otherSectionIds = sectionIds.filter((id) => !id.startsWith("navbar-"));

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Render Navbar at Top (Sticky) */}
      {navbarId && componentMap[navbarId] && (
        <div className="sticky top-0 z-40 w-full">
          {React.createElement(componentMap[navbarId])}
        </div>
      )}

      {/* Back to Editor Button */}
      <div className="fixed top-4 left-4 z-50">
        <a
          href="/"
          className="bg-white/90 backdrop-blur-md text-[#1AB0C8] font-semibold px-4 py-2 rounded-lg border-2 border-[#1AB0C8] hover:bg-[#1AB0C8] hover:text-white transition-all duration-300 shadow-md flex items-center gap-2"
        >
          <span>←</span> Back to Editor
        </a>
      </div>

      {/* Render Other Selected Sections */}
      <div className="w-full">
        {otherSectionIds.map((id, index) => {
          const Component = componentMap[id];
          if (!Component) {
            return (
              <div key={index} className="w-full py-8 px-4 bg-red-50 border-l-4 border-red-500">
                <p className="text-red-700 font-semibold">
                  Warning: Section "{id}" not found
                </p>
              </div>
            );
          }
          return <Component key={index} />;
        })}
      </div>

      {/* Build Info Footer */}
      <div className="w-full bg-[#001118] text-white py-4 px-6 text-center">
        <p className="text-sm text-[#C3D4DB]">
          Built with {sectionIds.length} section{sectionIds.length !== 1 ? "s" : ""} • © 2025 ArachnoVa
        </p>
      </div>
    </div>
  );
}

export default function BuildPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#1AB0C8] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#75868D] font-medium">Building your website...</p>
        </div>
      </div>
    }>
      <BuildContent />
    </Suspense>
  );
}
