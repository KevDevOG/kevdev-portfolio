"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";
import { ExternalLink, GitBranch, Terminal, Shield, CheckCircle2 } from "lucide-react";

export const FeaturedProjectSection = () => {
  const t = useTranslations("Featured");
  const p = useTranslations("Projects");
  const [imageError, setImageError] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const project = {
    id: "garage-studios",
    title: "Garage Studios",
    longDescription: t("description"),
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Resend Email", "RLS Policies"],
    features: [
      t("feature_1"),
      t("feature_2"),
      t("feature_3"),
      t("feature_4"),
      t("feature_5")
    ],
    learnings: [
      t("learning_1"),
      t("learning_2"),
      t("learning_3"),
      t("learning_4")
    ]
  };

  return (
    <section id="proyectos" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <Card className="dashboard-card relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100/40 dark:from-zinc-950 dark:via-black dark:to-zinc-950/40 p-6 lg:p-8 transition-colors duration-300">
        
        {/* Adornos decorativos de luces */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/3 dark:bg-purple-500/3 rounded-full blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          
          {/* Columna Izquierda: Información de sistema, stack, acciones y features */}
          <motion.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <Badge className="bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border-emerald-300 dark:border-emerald-900/60 uppercase tracking-widest px-2 py-0.5 font-bold">
                  {p("status_stable")}
                </Badge>
                <span className="inline-flex items-center rounded bg-blue-100 dark:bg-blue-950/40 px-2 py-0.5 text-xs font-mono font-bold text-blue-800 dark:text-blue-400 border border-blue-300 dark:border-blue-900/60 uppercase">
                  {t("real_project")}
                </span>
                <span className="text-[var(--border-color)]">|</span>
                <span className="text-[var(--text-muted)]">garagestudios.es</span>
              </div>
              
              <h3 className="text-2xl font-black text-[var(--text-primary)] tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              
              <p className="text-base text-[var(--text-secondary)] leading-relaxed font-sans pt-2">
                {project.longDescription}
              </p>
            </div>

            {/* Fila de Tecnologías */}
            <div className="space-y-2.5">
              <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider block">
                STACK_ARCH:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} className="bg-[var(--bg-canvas)] border-[var(--border-color)] text-xs text-[var(--text-secondary)] py-0.5 px-2 font-semibold">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://garagestudios.es"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-base font-bold px-4 py-2.5 rounded transition-all duration-150 shadow-lg shadow-blue-900/20 cursor-pointer"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>DEMO_ONLINE</span>
              </a>
              <a
                href="https://github.com/KevDevOG/garage-studios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[var(--bg-card)] hover:bg-[var(--bg-canvas)] border border-[var(--border-color)] text-[var(--text-primary)] font-mono text-base font-bold px-4 py-2.5 rounded transition-all duration-150 cursor-pointer"
              >
                <GitBranch className="h-3.5 w-3.5" />
                <span>GITHUB_REPO</span>
              </a>
            </div>

            {/* Features log */}
            <div className="space-y-3 pt-4 border-t border-[var(--border-color)]/60">
              <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>CORE_FEATURES.log</span>
              </h4>
              <ul className="space-y-2.5 text-base text-[var(--text-secondary)] font-sans">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono text-blue-600 dark:text-blue-500 text-xs pt-0.5 select-none font-bold">{`0${idx + 1}`}</span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Columna Derecha: Mockup de Navegador con Preview e Historial de Aprendizajes */}
          <motion.div 
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>{t("preview_label")}.sh</span>
              </h4>
              
              {/* Browser Mockup */}
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.015 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full border border-[var(--border-color)] rounded-xl bg-[var(--bg-card)] overflow-hidden shadow-sm hover:shadow-[0_15px_40px_-10px_var(--accent-glow)] transition-shadow duration-300"
              >
                {/* Barra de cabecera de navegador */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border-color)] bg-[var(--bg-canvas)]/55 select-none">
                  {/* Botones de ventana */}
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500/80" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                    <span className="h-2 w-2 rounded-full bg-green-500/80" />
                  </div>
                  
                  {/* Barra de dirección */}
                  <div className="flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded px-3 py-0.5 text-xs font-mono text-[var(--text-muted)] w-2/3 truncate text-center select-all">
                    https://garagestudios.es
                  </div>
                  
                  {/* Estado */}
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">{t("in_production")}</span>
                  </div>
                </div>
                
                {/* Contenido (Imagen real o Placeholder técnico) */}
                <div className="w-full">
                  {!imageError ? (
                    <img 
                      src="/projects/garage-studios-preview.png" 
                      alt="Garage Studios Preview" 
                      className="w-full h-auto object-cover rounded-b-lg border-t border-[var(--border-color)]"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Dotted console style placeholder if image not found */
                    <div className="relative aspect-video w-full bg-[var(--bg-canvas)] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group/preview">
                      <div className="absolute inset-0 dot-grid opacity-30" />
                      <div className="space-y-3 z-10">
                        <div className="inline-flex p-3 rounded-full bg-[var(--bg-accent-badge)] text-[var(--text-accent-badge)] border border-[var(--accent-border)]/40 animate-pulse">
                          <Terminal className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-mono text-base font-bold text-[var(--text-primary)]">
                            {t("preview_pending")}
                          </p>
                          <p className="text-xs text-[var(--text-secondary)] font-sans max-w-xs leading-normal">
                            {t("preview_instructions")}
                          </p>
                        </div>
                        <span className="inline-block font-mono text-xs text-[var(--text-muted)] border border-dashed border-[var(--border-color)] px-2 py-0.5 rounded">
                          // public/projects/garage-studios-preview.png
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* System Learnings */}
            <div className="space-y-3 border-t border-[var(--border-color)] pt-6 mt-auto">
              <h4 className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5 text-purple-600 dark:text-blue-400" />
                <span>SYSTEM_LEARNINGS.db</span>
              </h4>
              <ul className="space-y-2 text-base text-[var(--text-secondary)] font-sans">
                {project.learnings.map((learning, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-500/80 shrink-0" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </Card>
    </section>
  );
};

export default FeaturedProjectSection;
