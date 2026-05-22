"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  yOffset = 24,
  className = "",
  width = "100%"
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const finalY = shouldReduceMotion ? 0 : yOffset;

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        initial={{ opacity: 0, y: finalY }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: finalY }}
        transition={{ 
          duration, 
          delay, 
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
