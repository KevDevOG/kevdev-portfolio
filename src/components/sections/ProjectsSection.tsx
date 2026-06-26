"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";
import { ShoppingBag, Users, Briefcase } from "lucide-react";
import Image from "next/image";

export const ProjectsSection = () => {
  const t = useTranslations("Projects");

  const futureProjects: any[] = [
    {
      id: "kev-clientflow",
      title: t("proj3_title"),
      status: t("status_dev"),
      badgeClass: "bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-400 border-purple-300 dark:border-purple-900/60",
      description: t("proj3_desc"),
      tech: t("proj3_tags").split(", "),
      icon: Briefcase,
      progressText: "DEV_IN_PROGRESS...",
      progress: 50,
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
                <div className="flex items-center justify-between font-mono text-xs">
                  <Badge className={`uppercase tracking-widest px-2 py-0.5 border font-bold ${proj.badgeClass}`}>
                    {proj.badgeText || proj.status}
                  </Badge>
                  <span className="text-[var(--text-muted)] font-mono">PID_{proj.id.toUpperCase().slice(0, 4)}</span>
                </div>
                
                {/* Título y Descripción */}
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] tracking-tight flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[var(--accent-color)] shrink-0" />
                    <span>{proj.title}</span>
                  </h4>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Caja Visual Vacía e Intencional o Imagen de Proyecto */}
              {proj.image ? (
                <div className="relative h-32 md:h-36 w-full rounded-lg overflow-hidden border border-[var(--border-color)]/60 shrink-0">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
              ) : (
                <div className="border border-dashed border-[var(--border-color)]/60 rounded-lg bg-[var(--bg-canvas)]/30 h-32 md:h-36 w-full flex flex-col items-center justify-center p-3 text-center transition-colors duration-300 group-hover:bg-[var(--bg-canvas)]/50 select-none shrink-0">
                  <Icon className="h-5 w-5 text-[var(--text-muted)] opacity-60 mb-1.5" />
                  <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider block">
                    {t("preview_soon")}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)] uppercase opacity-60 tracking-wider">
                    {proj.progressText}
                  </span>
                </div>
              )}

              {/* Pie con Stack y Progreso */}
              <div className="space-y-2 mt-auto">
                <div className="flex flex-wrap gap-1">
                  {proj.tech.map((techName: string) => (
                    <span key={techName} className="font-mono text-xs text-[var(--text-secondary)] bg-[var(--bg-canvas)] px-1.5 py-0.5 rounded border border-[var(--border-color)] font-semibold">
                      {techName}
                    </span>
                  ))}
                </div>

                <div className="font-mono text-xs bg-[var(--bg-canvas)] border border-[var(--border-color)] rounded p-2 space-y-1 text-[var(--text-muted)]">
                  <div className="flex justify-between text-xs">
                    <span>STATUS_LOG:</span>
                    <span className="text-[var(--accent-color)] font-bold">{proj.progressText}</span>
                  </div>
                  <div className="h-1 w-full bg-[var(--bg-card)] rounded overflow-hidden border border-[var(--border-color)]">
                    <div className="h-full bg-[var(--accent-color)]" style={{ width: `${proj.progress}%` }} />
                  </div>
                </div>

                {proj.url && (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center w-full py-2 bg-[var(--bg-canvas)] hover:bg-[var(--accent-color)] hover:text-white border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors duration-300 rounded font-sans text-sm font-semibold text-[var(--text-primary)]"
                  >
                    {t("view_project")}
                  </a>
                )}
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
