"use client";

import React from "react";

export const HeroConstellation = () => {
  return (
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] md:w-[640px] md:h-[640px] lg:w-[680px] lg:h-[680px] pointer-events-none select-none overflow-visible -z-10 transition-transform duration-500 ease-out"
      style={{
        transform: "translate3d(calc(var(--mouse-x-offset, 0) * -18px - 50%), calc(var(--mouse-y-offset, 0) * -18px - 50%), 0)"
      }}
    >
      {/* 1. Núcleo Concentrado: Órbitas circulares concéntricas y pulsantes alrededor del logo (Sin textos) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[180px] md:h-[180px] rounded-full border border-[var(--accent-color)]/20 dark:border-[var(--accent-color)]/30 animate-pulse pointer-events-none" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full border border-[var(--accent-color)]/10 dark:border-[var(--accent-color)]/20 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />

      {/* 2. Escáner Láser Sutil (Solo activo en escritorio para evitar ruidos visuales en móviles) */}
      <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-10 dark:opacity-20 pointer-events-none hidden md:block"
        style={{
          animation: "hero-scan 9s cubic-bezier(0.4, 0, 0.2, 1) infinite"
        }}
      />

      {/* 3. Constelaciones SVG (Líneas y Nodos) - Ocultos o Simplificados en Móvil para garantizar SAFE ZONE */}
      <svg className="w-full h-full opacity-40 dark:opacity-60 hidden md:block" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Líneas de conexión radiales hacia el núcleo (50%, 50%) - Conectan únicamente en los extremos lejanos */}
        <line x1="8%" y1="10%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="0.75" />
        <line x1="92%" y1="8%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="0.75" />
        <line x1="6%" y1="90%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="0.75" />
        <line x1="94%" y1="92%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="0.75" />

        {/* Líneas de conexión perimetrales decorativas */}
        <line x1="8%" y1="10%" x2="6%" y2="90%" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="3 6" />
        <line x1="92%" y1="8%" x2="94%" y2="92%" stroke="url(#lineGrad)" strokeWidth="0.5" strokeDasharray="3 6" />

        {/* Nodo A (Top Left - Muy lejano del centro) */}
        <circle cx="8%" cy="10%" r="4" fill="var(--accent-color)" className="animate-pulse" style={{ animationDuration: '2s' }} />
        <circle cx="8%" cy="10%" r="1.5" fill="var(--bg-canvas)" />
        
        {/* Nodo B (Top Right - Muy lejano del centro) */}
        <circle cx="92%" cy="8%" r="4" fill="var(--accent-color)" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
        <circle cx="92%" cy="8%" r="1.5" fill="var(--bg-canvas)" />

        {/* Nodo C (Bottom Left - Muy lejano del centro) */}
        <circle cx="6%" cy="90%" r="4" fill="var(--accent-color)" className="animate-pulse" style={{ animationDuration: '4s' }} />
        <circle cx="6%" cy="90%" r="1.5" fill="var(--bg-canvas)" />

        {/* Nodo D (Bottom Right - Muy lejano del centro) */}
        <circle cx="94%" cy="92%" r="4" fill="var(--accent-color)" className="animate-pulse" style={{ animationDuration: '2.5s' }} />
        <circle cx="94%" cy="92%" r="1.5" fill="var(--bg-canvas)" />
      </svg>

      {/* 4. Microtextos Técnicos Decorativos - Visibles ÚNICAMENTE en Escritorio y ubicados en los extremos absolutos */}
      <span className="absolute top-[7%] left-[2%] font-mono text-[9px] font-bold text-[var(--accent-color)] opacity-35 select-none hidden md:block">
        [SYS_OK]
      </span>
      <span className="absolute top-[5%] right-[2%] font-mono text-[9px] font-bold text-[var(--accent-color)] opacity-35 select-none hidden md:block">
        [DAW_2026]
      </span>
      <span className="absolute bottom-[7%] left-[1%] font-mono text-[9px] font-bold text-[var(--accent-color)] opacity-35 select-none hidden md:block">
        [NEXT_STACK]
      </span>
      <span className="absolute bottom-[5%] right-[1%] font-mono text-[9px] font-bold text-[var(--accent-color)] opacity-35 select-none hidden md:block">
        [DEPLOY_OK]
      </span>
    </div>
  );
};

export default HeroConstellation;
