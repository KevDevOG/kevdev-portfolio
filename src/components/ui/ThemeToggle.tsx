"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options: { value: typeof theme; label: string; icon: string }[] = [
    { value: "light", label: "CLARO", icon: "☀" },
    { value: "dark", label: "OSCURO", icon: "☾" },
    { value: "system", label: "SISTEMA", icon: "⎔" }
  ];

  const currentOption = mounted 
    ? (options.find((opt) => opt.value === theme) || options[2])
    : options[2];

  return (
    <div className="relative font-mono text-[10px]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-150 cursor-pointer"
        aria-label="Toggle theme"
      >
        <span className="text-[11px] text-[var(--accent-color)]">{currentOption.icon}</span>
        <span className="hidden sm:inline font-bold tracking-wider">{currentOption.label}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-24 py-1 rounded border border-[var(--border-color)] bg-[var(--bg-card)] shadow-lg z-50 animate-in fade-in slide-in-from-top-1 duration-100">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setTheme(opt.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-1.5 hover:bg-[var(--accent-glow)] flex items-center gap-2 cursor-pointer transition-colors duration-100 ${
                theme === opt.value
                  ? "text-[var(--accent-color)] font-bold bg-[var(--accent-glow)]"
                  : "text-[var(--text-secondary)]"
              }`}
            >
              <span>{opt.icon}</span>
              <span className="font-mono text-[9px] tracking-wider">{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
