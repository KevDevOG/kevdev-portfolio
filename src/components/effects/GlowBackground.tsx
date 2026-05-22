import React from 'react';

export const GlowBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Acentos de fondo para el lienzo gris / modo oscuro */}
      <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[160px] opacity-70" />
      <div className="absolute -bottom-40 right-1/3 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px] opacity-70" />
    </div>
  );
};

export default GlowBackground;
