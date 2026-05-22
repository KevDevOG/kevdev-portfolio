"use client";

import React from "react";
import { usePathname, useRouter } from "../../i18n/routing";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (nextLocale: "es" | "en") => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex items-center gap-1 font-mono text-[10px] bg-[var(--bg-card)] border border-[var(--border-color)] p-0.5 rounded">
      <button
        onClick={() => handleLanguageChange("es")}
        className={`px-2 py-1 rounded-sm cursor-pointer transition-all duration-150 font-bold ${
          locale === "es"
            ? "bg-[var(--accent-color)] text-white"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-2 py-1 rounded-sm cursor-pointer transition-all duration-150 font-bold ${
          locale === "en"
            ? "bg-[var(--accent-color)] text-white"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
