"use client";

import { useEffect, useState } from "react";
import { LandingSections } from "@/components/landing-sections";
import { ScrollSequence } from "@/components/scroll-sequence";
import { SiteHeader } from "@/components/site-header";

export type Language = "en" | "fa";

export function PortfolioExperience() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "fa" : "en"));
  };

  return (
    <div className="portfolio-shell" lang={language} dir={language === "fa" ? "rtl" : "ltr"}>
      <SiteHeader language={language} onToggleLanguage={toggleLanguage} />
      <ScrollSequence>
        <LandingSections language={language} />
      </ScrollSequence>
    </div>
  );
}