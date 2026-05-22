"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export const StackSection = () => {
  const t = useTranslations("Stack");

  const columns = [
    {
      title: "FRONTEND",
      desc: t("frontend_desc"),
      color: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-950/40",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive design", "UX/UI básico"]
    },
    {
      title: "BACKEND",
      desc: t("backend_desc"),
      color: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-950/40",
      skills: ["Java", "Spring Boot", "Thymeleaf", "APIs REST", "Server Actions", "Validación formularios"]
    },
    {
      title: "DATABASE",
      desc: t("database_desc"),
      color: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-200 dark:border-emerald-950/40",
      skills: ["MySQL", "PostgreSQL", "Supabase", "SQL", "Diseño tablas", "Relaciones", "CRUD", "RLS Supabase"]
    },
    {
      title: "TOOLS & DEPLOY",
      desc: t("tools_desc"),
      color: "text-cyan-600 dark:text-cyan-400",
      borderColor: "border-cyan-200 dark:border-cyan-950/40",
      skills: ["Git & GitHub", "Vercel", "Docker", "Nginx", "WordPress", "PrestaShop", "VS Code", "Antigravity", "NotebookLM", "Stitch"]
    }
  ];

  return (
    <section id="stack" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((col, idx) => (
          <Card 
            key={idx} 
            className={`dashboard-card p-4 space-y-4 flex flex-col justify-between ${col.borderColor}`}
          >
            <div>
              {/* Encabezado de Columna */}
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2 mb-2">
                <span className={`font-mono text-[10px] font-bold tracking-widest ${col.color}`}>
                  {col.title}
                </span>
                <span className="font-mono text-[8px] text-[var(--text-muted)]">
                  [0{idx + 1}]
                </span>
              </div>
              
              {/* Descripción */}
              <p className="text-[10px] font-sans leading-relaxed text-[var(--text-secondary)] mb-3 opacity-90">
                {col.desc}
              </p>

              {/* Lista de Skills */}
              <ul className="space-y-2 mt-3">
                {col.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-secondary)]">
                    <span className="h-1 w-1 bg-[var(--text-muted)] rounded-full" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Estado de carga decorativo de la columna */}
            <div className="pt-2 font-mono text-[8px] text-[var(--text-muted)] flex justify-between items-center border-t border-[var(--border-color)]">
              <span>STATUS:</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">COMPILED</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StackSection;
