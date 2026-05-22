"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import InteractiveHeroBackground from "../effects/InteractiveHeroBackground";
import HeroConstellation from "../effects/HeroConstellation";

export const HeroSection = () => {
  const t = useTranslations("Hero");
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    // 1. Detect prefers-reduced-motion to respect accessibility settings
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Initial center settings for inline CSS variables
    if (sectionRef.current) {
      sectionRef.current.style.setProperty("--mouse-x", "50%");
      sectionRef.current.style.setProperty("--mouse-y", "50%");
      sectionRef.current.style.setProperty("--mouse-x-offset", "0");
      sectionRef.current.style.setProperty("--mouse-y-offset", "0");
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Performance-optimized Pointer Move tracking using CSS Variables
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // Ignore native touch screens to prevent weird jumpiness, enable for all mouse devices (regardless of screen size)
    if (e.pointerType === "touch" || prefersReducedMotion || !sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const xPixels = e.clientX - rect.left;
    const yPixels = e.clientY - rect.top;

    const xPercent = (xPixels / rect.width) * 100;
    const yPercent = (yPixels / rect.height) * 100;

    const xOffset = (xPixels / rect.width) - 0.5;
    const yOffset = (yPixels / rect.height) - 0.5;

    // Direct DOM styling bypasses React state lifecycle entirely for a flawless 120Hz/144Hz sway
    sectionRef.current.style.setProperty("--mouse-x", `${xPercent}%`);
    sectionRef.current.style.setProperty("--mouse-y", `${yPercent}%`);
    sectionRef.current.style.setProperty("--mouse-x-offset", `${xOffset}`);
    sectionRef.current.style.setProperty("--mouse-y-offset", `${yOffset}`);
  };

  const handlePointerLeave = () => {
    if (prefersReducedMotion || !sectionRef.current) return;
    
    // Smoothly return back to center values
    sectionRef.current.style.setProperty("--mouse-x", "50%");
    sectionRef.current.style.setProperty("--mouse-y", "50%");
    sectionRef.current.style.setProperty("--mouse-x-offset", "0");
    sectionRef.current.style.setProperty("--mouse-y-offset", "0");
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section 
      ref={sectionRef}
      id="inicio" 
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full min-h-[calc(100svh-80px)] md:min-h-[calc(100vh-100px)] flex flex-col items-center justify-center text-center py-16 md:py-24 overflow-hidden transition-all duration-300 select-none bg-[var(--bg-canvas)]"
    >
      
      {/* Fondo Técnico Interactivo y Dinámico (hereda las CSS Variables directamente a nivel z-0) */}
      <InteractiveHeroBackground />

      {/* Contenido principal animado (por encima del z-0 a nivel z-10) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col items-center z-10 relative"
      >
        {/* 1. Badge superior */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.1)] animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            {t("badge_available")}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-canvas)] text-[var(--text-secondary)] border border-[var(--border-color)]">
            {t("badge_student")}
          </span>
        </motion.div>

        {/* 2. Logo Real Kev Dev como Protagonista con Efecto Magnético y Constelación */}
        <motion.div 
          variants={itemVariants} 
          className="relative group mb-6 shrink-0 z-20 pointer-events-none"
        >
          {/* Constelación tecnológica centered behind the logo */}
          <HeroConstellation />

          {/* Logo con traslación magnética suave */}
          <div
            className="relative pointer-events-auto transition-transform duration-300 ease-out"
            style={{
              transform: "translate3d(calc(var(--mouse-x-offset, 0) * 10px), calc(var(--mouse-y-offset, 0) * 10px), 0)"
            }}
          >
            {/* Brillo dinámico detrás del logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-tr from-blue-600/10 to-cyan-500/10 dark:from-blue-600/20 dark:to-cyan-400/10 opacity-60 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none -z-10" />
            
            <Image
              src="/brand/kevdev-logo-transparent.png"
              alt="Kev Dev Logo"
              width={180}
              height={180}
              priority
              className="w-32 h-32 md:w-40 md:h-40 object-contain select-none transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* 3. Textos Maquetados en Código */}
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl md:text-6xl xl:text-7xl font-black tracking-[0.22em] text-[var(--text-primary)] font-mono uppercase pl-[0.22em]"
        >
          Kev Dev
        </motion.h2>

        <motion.div 
          variants={itemVariants} 
          className="font-mono text-xs md:text-sm tracking-[0.35em] text-[var(--accent-color)] font-bold uppercase mt-2.5 mb-5 pl-[0.35em]"
        >
          &lt; {t("dev_web")} &gt;
        </motion.div>

        {/* 4. Nombre Profesional */}
        <motion.h1 
          variants={itemVariants} 
          className="text-base md:text-lg xl:text-xl font-bold text-[var(--text-secondary)] tracking-wider uppercase mb-4"
        >
          Kevin Ochoa González
        </motion.h1>

        {/* 5. Subtítulo Corto (Sin saturación de texto) */}
        <motion.p 
          variants={itemVariants} 
          className="text-sm md:text-base xl:text-lg font-sans text-[var(--text-secondary)] leading-relaxed max-w-2xl xl:max-w-3xl mb-8"
        >
          {t("description")}
        </motion.p>

        {/* 6. Botones de Acción */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          <a
            href="#proyectos"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-mono text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 cursor-pointer"
          >
            {t("view_projects")}
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] font-mono text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 active:scale-95 cursor-pointer"
          >
            {t("contact_me")}
          </a>
        </motion.div>
      </motion.div>

      {/* Suavizado de transición inferior hacia el fondo del dashboard */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[var(--bg-dashboard)] pointer-events-none z-10" />
    </section>
  );
};

export default HeroSection;
