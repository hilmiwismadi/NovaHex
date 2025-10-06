"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface SelectedSection {
  sectionId: number;
  sectionName: string;
  variantId: string;
  variantLabel: string;
}

interface BuilderContextType {
  selectedSections: SelectedSection[];
  toggleSection: (sectionId: number, sectionName: string) => void;
  updateVariant: (sectionId: number, variantId: string, variantLabel: string) => void;
  isSectionSelected: (sectionId: number) => boolean;
  getSelectedVariant: (sectionId: number) => string | null;
  clearSelections: () => void;
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [selectedSections, setSelectedSections] = useState<SelectedSection[]>([]);

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

  return (
    <BuilderContext.Provider
      value={{
        selectedSections,
        toggleSection,
        updateVariant,
        isSectionSelected,
        getSelectedVariant,
        clearSelections,
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
