import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface LegalSection {
  label: string;
  value?: string;
  text?: string;
}

interface LegalPageLayoutProps {
  title: string;
  sections: LegalSection[];
}

export function LegalPageLayout({ title, sections }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--bg-dashboard)] transition-colors duration-300 font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[var(--accent-color)] bg-[var(--bg-accent-badge)] border border-[var(--accent-border)] px-3 py-1 rounded mb-4 tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-color)] animate-pulse" />
            <span>Kev Dev · Legal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            {title}
          </h1>
          <div className="mt-3 h-px w-16 bg-[var(--accent-color)] opacity-60 rounded" />
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="dashboard-card rounded-xl p-5 sm:p-6"
            >
              <h2 className="font-mono text-[10px] tracking-widest uppercase text-[var(--accent-color)] mb-2">
                {section.label}
              </h2>
              {section.value && (
                <p className="text-base font-semibold text-[var(--text-primary)]">
                  {section.value}
                </p>
              )}
              {section.text && (
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">
                  {section.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LegalPageLayout;
