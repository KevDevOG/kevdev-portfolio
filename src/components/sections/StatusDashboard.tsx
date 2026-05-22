"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { motion, Variants } from "framer-motion";

export const StatusDashboard = () => {
  const t = useTranslations("Status");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-2">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        
        {/* Widget 1: Status / Formación */}
        <motion.div variants={itemVariants} className="col-span-1">
          <Card className="dashboard-card p-4 sm:p-5 xl:p-6 space-y-4 flex flex-col justify-between h-full">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-widest block">
                {t("formation_title")}
              </span>
              <h3 className="text-lg xl:text-xl font-bold text-[var(--text-primary)] mt-1 font-sans leading-tight">
                {t("formation_val")}
              </h3>
              <span className="text-[10px] md:text-xs text-[var(--text-muted)] font-mono block mt-1">
                {t("formation_desc")}
              </span>
            </div>
            
            {/* Barra de progreso de carga */}
            <div className="space-y-1">
              <div className="flex justify-between font-mono text-[9px] text-[var(--text-muted)]">
                <span>PROGRESS_LOAD:</span>
                <span className="text-[var(--accent-color)] font-bold">92%</span>
              </div>
              <div className="h-1.5 w-full bg-[var(--bg-canvas)] rounded overflow-hidden border border-[var(--border-color)]">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="h-full bg-[var(--accent-color)] rounded-sm"
                />
              </div>
            </div>

            {/* Diagnostics system panel */}
            <div className="bg-[var(--bg-canvas)] border border-[var(--border-color)] rounded-lg p-3 font-mono text-[9px] space-y-2">
              <div className="flex items-center justify-between border-b border-[var(--border-color)]/60 pb-1">
                <span className="text-[var(--text-primary)] font-bold">SYS_DIAGNOSTICS //</span>
                <span className="text-[var(--accent-color)] font-bold">STATUS_OK</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[var(--text-secondary)]">
                <div className="flex justify-between border-b border-[var(--border-color)]/30 pb-0.5">
                  <span className="text-[var(--text-muted)]">SYS:</span>
                  <span className="text-emerald-500 font-semibold">ONLINE</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border-color)]/30 pb-0.5">
                  <span className="text-[var(--text-muted)]">ENV:</span>
                  <span className="text-[var(--text-primary)] font-semibold">PROD</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border-color)]/30 pb-0.5">
                  <span className="text-[var(--text-muted)]">TERM:</span>
                  <span className="text-[var(--text-primary)] font-semibold">25/26</span>
                </div>
                <div className="flex justify-between border-b border-[var(--border-color)]/30 pb-0.5">
                  <span className="text-[var(--text-muted)]">LOC:</span>
                  <span className="text-[var(--text-primary)] font-semibold">LPA_GC</span>
                </div>
              </div>
              <div className="font-mono text-[8px] text-[var(--text-muted)] space-y-0.5 border-t border-[var(--border-color)]/40 pt-1.5">
                <div>&gt; Loading module DAW_2... SUCCESS</div>
                <div>&gt; Establishing secure connection... ESTABLISHED</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Widget 2: Primary Stack */}
        <motion.div variants={itemVariants} className="col-span-1">
          <Card className="dashboard-card p-4 sm:p-5 xl:p-6 space-y-4 flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-widest block">
                {t("stack_title")}
              </span>
              <h3 className="text-lg xl:text-xl font-bold text-[var(--text-primary)] mt-1 font-sans leading-tight">
                {t("stack_val")}
              </h3>
              <span className="text-[10px] md:text-xs text-[var(--text-muted)] font-mono block mt-1">
                {t("stack_desc")}
              </span>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border-color)]/40 pb-0.5 mb-1.5">
                  <span className="font-mono text-[8px] text-[var(--accent-color)] uppercase tracking-wider font-semibold">FRONTEND</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["HTML5", "CSS3", "JS ES6+", "TS", "React", "Next.js", "Tailwind"].map((tech) => (
                    <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded font-mono bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)]/30 transition-all duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border-color)]/40 pb-0.5 mb-1.5">
                  <span className="font-mono text-[8px] text-[var(--accent-color)] uppercase tracking-wider font-semibold">BACKEND</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["Node.js", "API REST", "Server Actions", "Spring Boot"].map((tech) => (
                    <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded font-mono bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)]/30 transition-all duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-0.5">
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border-color)]/40 pb-0.5 mb-1.5">
                    <span className="font-mono text-[8px] text-[var(--accent-color)] uppercase tracking-wider font-semibold">DATABASES</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {["MySQL", "Postgres", "Supabase", "SQL"].map((tech) => (
                      <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded font-mono bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)]/30 transition-all duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--border-color)]/40 pb-0.5 mb-1.5">
                    <span className="font-mono text-[8px] text-[var(--accent-color)] uppercase tracking-wider font-semibold">TOOLS</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {["Git", "GitHub", "Vercel", "VS Code"].map((tech) => (
                      <span key={tech} className="text-[9px] px-1.5 py-0.5 rounded font-mono bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)]/30 transition-all duration-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default StatusDashboard;
