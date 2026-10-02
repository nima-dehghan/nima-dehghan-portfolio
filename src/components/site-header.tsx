import { ScanFace } from "lucide-react";
import type { Language } from "@/components/portfolio-experience";

const navigation = {
  en: [
    { href: "#backend", label: ".NET Backend" },
    { href: "#frontend", label: "Web Frontend" },
    { href: "#mobile", label: "Mobile" },
    { href: "#research", label: "Research" },
    { href: "#interests", label: "Interests" },
    { href: "#contact", label: "Connect" },
  ],
  fa: [
    { href: "#backend", label: "بک‌اند دات‌نت" },
    { href: "#frontend", label: "فرانت‌اند وب" },
    { href: "#mobile", label: "موبایل" },
    { href: "#research", label: "پژوهش" },
    { href: "#interests", label: "علاقه‌مندی‌ها" },
    { href: "#contact", label: "ارتباط" },
  ],
};

export function SiteHeader({
  language,
  onToggleLanguage,
}: {
  language: Language;
  onToggleLanguage: () => void;
}) {
  const isPersian = language === "fa";

  return (
    <header className="portfolio-header">
      <div className="header-inner">
        <a href="#top" className="wordmark" aria-label={isPersian ? "نیما دهقان، خانه" : "Nima Dehghan, home"}>
          <span className="wordmark-mark"><ScanFace size={19} strokeWidth={1.7} /></span>
          <span>
            <span className="wordmark-name">Nima Dehghan</span>
            <span className="wordmark-role">{isPersian ? "بک‌اند .NET · بینایی ماشین" : ".NET Backend · Computer Vision"}</span>
          </span>
        </a>
        <nav className="primary-nav" aria-label={isPersian ? "پیمایش اصلی" : "Main navigation"}>
          {navigation[language].map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <button
          className="language-switch"
          type="button"
          onClick={onToggleLanguage}
          aria-label={isPersian ? "تغییر زبان به انگلیسی" : "Switch to Persian"}
        >
          {isPersian ? "EN" : "FA"}
        </button>
      </div>
    </header>
  );
}
