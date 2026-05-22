import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

export const Card = ({ children, className = "", hoverEffect = true }: CardProps) => {
  const hoverStyles = hoverEffect 
    ? "hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-700/80 z-10 hover:z-20"
    : "";

  return (
    <div className={`rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-6 transition-all duration-300 ease-out ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
