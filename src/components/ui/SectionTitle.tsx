import React from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <div className={`mb-4 space-y-1 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-[var(--accent-color)] font-bold">#</span>
        <h2 className="text-base font-bold tracking-tight text-[var(--text-primary)] uppercase">{title}</h2>
      </div>
      {subtitle && <p className="text-xs text-[var(--text-muted)] font-mono">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
