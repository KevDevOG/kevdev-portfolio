"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export const AboutSection = () => {
  const t = useTranslations("About");

  return (
    <section id="sobre-mi" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-6 items-stretch">

        {/* Columna Izquierda: Imagen Personal con Marco Técnico */}
        <div className="flex">
          <Card className="dashboard-card flex flex-col items-center justify-between p-6 text-center space-y-6 flex-1">
            <div className="relative mx-auto flex w-full max-w-[360px] flex-col items-center justify-center rounded-3xl border border-[var(--border-color)] bg-[var(--bg-card)] p-4 shadow-xl lg:max-w-[420px]">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src="/kevin.jpg"
                  alt="Kevin Ochoa González"
                  width={900}
                  height={1200}
                  className="h-auto w-full rounded-2xl object-contain"
                  priority={false}
                />
              </div>



            </div>

            <div className="space-y-1.5 w-full">
              <h4 className="text-sm font-bold text-[var(--text-primary)] tracking-wide font-mono uppercase">
                Kevin Ochoa González
              </h4>
              <p className="text-[10px] font-mono font-bold text-[var(--accent-color)] uppercase tracking-widest">
                {t("role_val")}
              </p>
            </div>
          </Card>
        </div>

        {/* Columna Derecha: Stack de las dos tarjetas */}
        <div className="flex flex-col gap-6">
          {/* Card 2: Presentación Humana Breve y Misión */}
          <Card className="dashboard-card flex flex-col justify-between p-6 flex-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-[var(--accent-color)] uppercase tracking-widest flex items-center gap-1.5">
                <span>//</span> {t("header")}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans font-medium">
                {t("paragraph1")}
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                {t("paragraph2")}
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                {t("paragraph3")}
              </p>
            </div>

            {/* Identidad / Misión del desarrollador */}
            <div className="p-3.5 rounded-xl border border-blue-500/10 bg-blue-500/5 shadow-[0_0_15px_rgba(37,99,255,0.03)] flex gap-3 items-start">
              <div className="shrink-0 pt-0.5">
                <Image 
                  src="/brand/kevdev-logo-transparent.png" 
                  alt="Kev Dev Logo" 
                  width={32} 
                  height={32} 
                  className="w-8 h-8 object-contain" 
                />
              </div>
              <div>
                <span className="font-mono text-[9px] font-bold text-[var(--accent-color)] block mb-1 uppercase tracking-wider">
                  {t("brand_title")}
                </span>
                <p className="text-[10px] text-[var(--text-primary)] font-medium leading-relaxed font-sans">
                  {t("brand_desc")}
                </p>
              </div>
            </div>
          </Card>

          {/* Card 3: Parámetros del Sistema & Consola de Logs */}
          <Card className="dashboard-card flex flex-col justify-between p-0 overflow-hidden flex-1">
            {/* Tabla de metadatos del perfil */}
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-[var(--border-color)] text-[10px] font-mono">
              <div>
                <span className="text-[var(--text-muted)] block text-[9px] uppercase font-bold tracking-wider">{t("role_label")}</span>
                <span className="text-[var(--text-primary)] font-bold">{t("role_val")}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block text-[9px] uppercase font-bold tracking-wider">{t("location_label")}</span>
                <span className="text-[var(--text-primary)] font-bold">{t("location_val")}</span>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <span className="text-[var(--text-muted)] block text-[9px] uppercase font-bold tracking-wider">{t("focus_label")}</span>
                <span className="text-[var(--text-primary)] font-bold">{t("focus_val")}</span>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <span className="text-[var(--text-muted)] block text-[9px] uppercase font-bold tracking-wider">{t("interests_label")}</span>
                <span className="text-[var(--text-primary)] font-bold">{t("interests_val")}</span>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <span className="text-[var(--text-muted)] block text-[9px] uppercase font-bold tracking-wider">{t("availability_label")}</span>
                <span className="text-[var(--text-primary)] font-bold">{t("availability_val")}</span>
              </div>
            </div>

            {/* Consola Técnica Simuladora de Logs */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] bg-[var(--bg-canvas)] px-4 py-2 font-mono text-[9px] text-[var(--text-muted)]">
                <div className="flex gap-1 font-bold">
                  <span className="h-2 w-2 rounded-full bg-red-500/80" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                </div>
                <span>{t("logs_title")}</span>
                <div className="w-6" />
              </div>

              {/* Logs */}
              <div className="p-4 flex-1 font-mono text-[10px] space-y-2 bg-[var(--bg-card)]/90 flex flex-col justify-center">
                <div className="text-[var(--text-muted)] flex items-center gap-1">
                  <span className="text-[var(--accent-color)] font-bold">[$]</span>
                  <span>systemctl status portfolio.service</span>
                </div>

                <div className="space-y-1 border-l border-[var(--border-color)] pl-2.5 ml-1 text-[var(--text-secondary)]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">[OK]</span>
                    <span>{t("log_success")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-500 font-bold">[OK]</span>
                    <span>{t("log_stable")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-blue-500 font-bold">[RUN]</span>
                    <span>{t("log_active")}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[var(--text-primary)] animate-pulse pt-1">
                  <span className="text-[var(--accent-color)] font-bold">[$]</span>
                  <span className="h-2.5 w-1 bg-[var(--accent-color)]" />
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
