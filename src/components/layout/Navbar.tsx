"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import Image from "next/image";

export const Navbar = () => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const base = `/${locale}`;

  const links = [
    { label: t("system"), href: `${base}#inicio` },
    { label: t("about"), href: `${base}#sobre-mi` },
    { label: t("projects"), href: `${base}#proyectos` },
    { label: t("services"), href: `${base}#servicios` },
    { label: t("process"), href: `${base}#proceso` },
    { label: t("stack"), href: `${base}#stack` },
    { label: t("faq"), href: `${base}#faq` },
    { label: t("contact"), href: `${base}#contacto` }
  ];

  return (
    <nav className="sticky top-2 md:top-4 z-50 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)] max-w-[1440px] mx-auto border border-zinc-200/80 dark:border-zinc-800/80 bg-white/85 dark:bg-black/85 backdrop-blur-md px-4 sm:px-6 py-3 transition-all duration-300 rounded-2xl shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Logo y Marca Kev Dev sin contenedor */}
            <a href={`/${locale}`} className="flex items-center gap-2 select-none shrink-0 group">
              <Image 
                src="/brand/kevdev-logo-transparent.png" 
                alt="Kev Dev Logo" 
                width={80}
                height={80}
                priority
                className="h-[28px] md:h-[36px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="font-mono font-bold text-xs md:text-sm tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors duration-200 pl-0.5">
                Kev Dev
              </span>
            </a>
            
            {/* Divisor vertical técnico */}
            <div className="hidden sm:block h-4 w-[1px] bg-[var(--border-color)]" />

            {/* breadcrumbs decorativos tipo terminal */}
            <div className="hidden lg:flex items-center gap-1 font-mono text-[10px] text-[var(--text-secondary)]">
              <span className="text-zinc-400 dark:text-zinc-600">SYSTEM</span>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span className="text-[var(--accent-color)] font-semibold">ROOT</span>
              <span className="text-zinc-300 dark:text-zinc-700">/</span>
              <span className="text-[var(--text-primary)] font-semibold">PORTFOLIO</span>
            </div>
          </div>

          {/* Enlaces de anclaje - ocultos en pantallas muy pequeñas, visibles desde md */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] md:text-xs xl:text-sm font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150 tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Selector de Tema, Idioma, Botón Menú Móvil e Indicador de Estatus */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-0">
            <ThemeToggle />
            <LanguageSwitcher />

            {/* Botón de Menú Móvil Técnico */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border-color)] px-2 py-1 rounded font-mono text-[9px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-border)] transition-colors duration-150 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span className="font-bold">{isMenuOpen ? "SYS_MENU: CLOSE" : "SYS_MENU: OPEN"}</span>
              <span>{isMenuOpen ? "▲" : "▼"}</span>
            </button>

            {/* Indicador de Status */}
            <div className="hidden xs:flex items-center gap-1.5 bg-[var(--bg-card)] border border-[var(--border-color)] px-2 py-1.5 rounded font-mono text-[9px] text-[var(--text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              <span className="font-bold">{t("status")}</span>
            </div>
          </div>
        </div>

        {/* Dropdown del Menú Móvil con estética de terminal limpia */}
        {isMenuOpen && (
          <div className="md:hidden w-full border-t border-[var(--border-color)] mt-3 pt-3 flex flex-col gap-2 font-mono text-[10px]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-2 py-1.5 rounded hover:bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150 flex items-center gap-2"
              >
                <span className="text-[var(--accent-color)] font-bold">&gt;</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
