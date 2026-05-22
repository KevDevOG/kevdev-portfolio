import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span className={`inline-flex items-center rounded bg-[var(--bg-card)] px-2.5 py-0.5 text-xs font-mono font-medium text-[var(--text-secondary)] border border-[var(--border-color)] transition-colors duration-300 ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
