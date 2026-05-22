"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";
import { Terminal, ShoppingBag, CreditCard } from "lucide-react";

export const ProjectsSection = () => {
  const t = useTranslations("Projects");

  const futureProjects = [
    {
      id: "gestor-tareas",
      title: t("task_title"),
      status: t("status_dev"),
      badgeClass: "bg-blue-100 dark:bg-blue-950/40 text-blue-800 dark:text-blue-400 border-blue-300 dark:border-blue-900/60",
      description: t("task_desc"),
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      icon: Terminal,
      progressText: "DEV_IN_PROGRESS...",
      progress: 75,
    },
    {
      id: "api-escolar",
      title: t("school_title"),
      status: t("status_planning"),
      badgeClass: "bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-400 border-zinc-300 dark:border-zinc-850",
      description: t("school_desc"),
      tech: ["Node.js", "Express", "PostgreSQL"],
      icon: ShoppingBag,
      progressText: "ARCHITECTURE_DESIGN...",
      progress: 30,
    },
    {
      id: "saas-facturacion",
      title: t("future_title"),
      status: t("status_future"),
      badgeClass: "bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-400 border-purple-300 dark:border-purple-900/60",
      description: t("future_desc"),
      tech: ["Next.js", "Supabase", "Tailwind"],
      icon: CreditCard,
      progressText: "PLANNING...",
      progress: 10,
    }
  ];

  const shouldReduceMotion = useReducedMotion();
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="otros-proyectos" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {futureProjects.map((proj) => {
          const Icon = proj.icon;
          return (
            <motion.div 
              key={proj.id} 
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Card className="dashboard-card relative overflow-hidden bg-[var(--bg-card)] flex flex-col justify-between h-full p-5 transition-all duration-300 group hover:border-[var(--accent-color)] hover:shadow-[0_8px_30px_-10px_var(--accent-glow)] gap-4">
                <div className="space-y-3 relative z-10">
                {/* Cabecera del Proyecto */}
                <div className="flex items-center justify-between font-mono text-[9px]">
                  <Badge className={`uppercase tracking-widest px-2 py-0.5 border font-bold ${proj.badgeClass}`}>
                    {proj.status}
                  </Badge>
                  <span className="text-[var(--text-muted)] font-mono">PID_{proj.id.toUpperCase().slice(0, 4)}</span>
                </div>
                
                {/* Título y Descripción */}
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[var(--accent-color)] shrink-0" />
                    <span>{proj.title}</span>
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Caja Visual Vacía e Intencional */}
              <div className="border border-dashed border-[var(--border-color)]/60 rounded-lg bg-[var(--bg-canvas)]/30 h-32 md:h-36 w-full flex flex-col items-center justify-center p-3 text-center transition-colors duration-300 group-hover:bg-[var(--bg-canvas)]/50 select-none shrink-0">
                <Icon className="h-5 w-5 text-[var(--text-muted)] opacity-60 mb-1.5" />
                <span className="font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-wider block">
                  {t("preview_soon")}
                </span>
                <span className="font-mono text-[7px] text-[var(--text-muted)] uppercase opacity-60 tracking-wider">
                  {proj.progressText}
                </span>
              </div>

              {/* Pie con Stack y Progreso */}
              <div className="space-y-2 mt-auto">
                <div className="flex flex-wrap gap-1">
                  {proj.tech.map((techName) => (
                    <span key={techName} className="font-mono text-[8px] text-[var(--text-secondary)] bg-[var(--bg-canvas)] px-1.5 py-0.5 rounded border border-[var(--border-color)] font-semibold">
                      {techName}
                    </span>
                  ))}
                </div>

                <div className="font-mono text-[9px] bg-[var(--bg-canvas)] border border-[var(--border-color)] rounded p-2 space-y-1 text-[var(--text-muted)]">
                  <div className="flex justify-between text-[8px]">
                    <span>STATUS_LOG:</span>
                    <span className="text-[var(--accent-color)] font-bold">{proj.progressText}</span>
                  </div>
                  <div className="h-1 w-full bg-[var(--bg-card)] rounded overflow-hidden border border-[var(--border-color)]">
                    <div className="h-full bg-[var(--accent-color)]" style={{ width: `${proj.progress}%` }} />
                  </div>
                </div>
              </div>
            </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
