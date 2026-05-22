"use client";

import React from "react";

export const InteractiveHeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* 1. Fondo Técnico: Grid Sutil con Parallax Opuesto Aumentado */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] transition-transform duration-700 ease-out" 
        style={{
          transform: "translate3d(calc(var(--mouse-x-offset, 0) * -22px), calc(var(--mouse-y-offset, 0) * -22px), 0)"
        }}
      />

      {/* 2. Capa de Brillo 1 (Intenso y Enfocado): Sigue el cursor con radio de 280px */}
      <div 
        className="absolute inset-0 transition-[background] duration-300 ease-out opacity-100" 
        style={{
          background: "radial-gradient(circle 280px at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--hero-glow-color, rgba(37, 99, 255, 0.22)) 0%, transparent 80%)"
        }}
      />

      {/* 3. Capa de Brillo 2 (Suave y Volumétrico): Sigue el cursor con radio de 600px */}
      <div 
        className="absolute inset-0 transition-[background] duration-500 ease-out opacity-80" 
        style={{
          background: "radial-gradient(circle 600px at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--hero-glow-soft-color, rgba(37, 99, 255, 0.08)) 0%, transparent 90%)"
        }}
      />

      {/* 4. Fondo Técnico: Líneas y Nodos Vectoriales en Alta Visibilidad con Parallax Directo */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.25] dark:opacity-[0.40] transition-transform duration-700 ease-out" 
        style={{
          transform: "translate3d(calc(var(--mouse-x-offset, 0) * 32px), calc(var(--mouse-y-offset, 0) * 32px), 0)"
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Líneas horizontales decorativas con color de acento y mayor contraste */}
        <line x1="5%" y1="35%" x2="95%" y2="35%" stroke="var(--accent-color)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="6 12" />
        <line x1="5%" y1="65%" x2="95%" y2="65%" stroke="var(--accent-color)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="6 12" />
        
        {/* Líneas verticales decorativas */}
        <line x1="20%" y1="5%" x2="20%" y2="95%" stroke="var(--accent-color)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="6 12" />
        <line x1="80%" y1="5%" x2="80%" y2="95%" stroke="var(--accent-color)" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="6 12" />
        
        {/* Nodos de diseño interactivos con relieve de color de fondo canvas */}
        <circle cx="20%" cy="35%" r="5" fill="var(--accent-color)" className="animate-pulse" style={{ animationDuration: '3s' }} />
        <circle cx="20%" cy="35%" r="2" fill="var(--bg-canvas)" />
        
        <circle cx="80%" cy="35%" r="5" fill="var(--accent-color)" className="animate-pulse" style={{ animationDuration: '4s' }} />
        <circle cx="80%" cy="35%" r="2" fill="var(--bg-canvas)" />
        
        <circle cx="20%" cy="65%" r="5" fill="var(--accent-color)" className="animate-pulse" style={{ animationDuration: '5s' }} />
        <circle cx="20%" cy="65%" r="2" fill="var(--bg-canvas)" />
        
        <circle cx="80%" cy="65%" r="5" fill="var(--accent-color)" className="animate-pulse" style={{ animationDuration: '3.5s' }} />
        <circle cx="80%" cy="65%" r="2" fill="var(--bg-canvas)" />
      </svg>
    </div>
  );
};

export default InteractiveHeroBackground;
