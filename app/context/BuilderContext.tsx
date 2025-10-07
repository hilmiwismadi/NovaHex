"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface SelectedSection {
  sectionId: number;
  sectionName: string;
  variantId: string;
  variantLabel: string;
}

export interface ColorTheme {
  primary: string;
  secondary: string;
  tertiary: string;
}

interface BuilderContextType {
  selectedSections: SelectedSection[];
  toggleSection: (sectionId: number, sectionName: string) => void;
  updateVariant: (sectionId: number, variantId: string, variantLabel: string) => void;
  isSectionSelected: (sectionId: number) => boolean;
  getSelectedVariant: (sectionId: number) => string | null;
  clearSelections: () => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  colorTheme: ColorTheme;
  updateColorTheme: (colors: ColorTheme) => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [selectedSections, setSelectedSections] = useState<SelectedSection[]>([]);
  const [currentStep, setCurrentStep] = useState(1); // 1: Section Selection, 2: Color Selection
  const [colorTheme, setColorTheme] = useState<ColorTheme>({
    primary: "#1AB0C8",   // Default ArachnoVa cyan
    secondary: "#4273CE", // Default blue
    tertiary: "#F65050",  // Default accent red
  });

  const toggleSection = (sectionId: number, sectionName: string) => {
    setSelectedSections((prev) => {
      const exists = prev.find((s) => s.sectionId === sectionId);
      if (exists) {
        // Remove section
        return prev.filter((s) => s.sectionId !== sectionId);
      } else {
        // Add section with no variant selected initially
        return [...prev, { sectionId, sectionName, variantId: "", variantLabel: "" }];
      }
    });
  };

  const updateVariant = (sectionId: number, variantId: string, variantLabel: string) => {
    setSelectedSections((prev) =>
      prev.map((s) =>
        s.sectionId === sectionId
          ? { ...s, variantId, variantLabel }
          : s
      )
    );
  };

  const isSectionSelected = (sectionId: number) => {
    return selectedSections.some((s) => s.sectionId === sectionId);
  };

  const getSelectedVariant = (sectionId: number) => {
    const section = selectedSections.find((s) => s.sectionId === sectionId);
    return section?.variantId || null;
  };

  const clearSelections = () => {
    setSelectedSections([]);
  };

  const updateColorTheme = (colors: ColorTheme) => {
    setColorTheme(colors);
  };

  return (
    <BuilderContext.Provider
      value={{
        selectedSections,
        toggleSection,
        updateVariant,
        isSectionSelected,
        getSelectedVariant,
        clearSelections,
        currentStep,
        setCurrentStep,
        colorTheme,
        updateColorTheme,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

export function useBuilder() {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilder must be used within BuilderProvider");
  }
  return context;
}
