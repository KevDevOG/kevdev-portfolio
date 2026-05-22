"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { Layout, Zap, Smartphone, MessageCircle, ShieldCheck } from "lucide-react";

export const ServicesSection = () => {
  const t = useTranslations("Services");
  const tBrand = useTranslations("Values");
  const shouldReduceMotion = useReducedMotion();

  const mainServices = [
    {
      title: t("item1_title"),
      price: t("item1_price"),
      desc: t("item1_desc"),
      ideal: t("item1_ideal"),
    },
    {
      title: t("item2_title"),
      price: t("item2_price"),
      desc: t("item2_desc"),
      ideal: t("item2_ideal"),
    },
    {
      title: t("item3_title"),
      price: t("item3_price"),
      desc: t("item3_desc"),
      ideal: t("item3_ideal"),
    },
    {
      title: t("item4_title"),
      price: t("item4_price"),
      desc: t("item4_desc"),
      ideal: t("item4_ideal"),
    },
    {
      title: t("item5_title"),
      price: t("item5_price"),
      desc: t("item5_desc"),
      ideal: t("item5_ideal"),
    },
  ];

  const maintenanceService = {
    title: t("item6_title"),
    price: t("item6_price"),
    desc: t("item6_desc"),
    ideal: t("item6_ideal"),
  };

  const brandValues = [
    { code: tBrand("design_code"), title: tBrand("design_title"), desc: tBrand("design_desc"), icon: Layout },
    { code: tBrand("performance_code"), title: tBrand("performance_title"), desc: tBrand("performance_desc"), icon: Zap },
    { code: tBrand("mobile_code"), title: tBrand("mobile_title"), desc: tBrand("mobile_desc"), icon: Smartphone },
    { code: tBrand("whatsapp_code"), title: tBrand("whatsapp_title"), desc: tBrand("whatsapp_desc"), icon: MessageCircle },
    { code: tBrand("secure_code"), title: tBrand("secure_title"), desc: tBrand("secure_desc"), icon: ShieldCheck },
  ];

  return (
    <section id="servicios" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      
      {/* Grid de servicios principales */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
      >
        {mainServices.map((service, idx) => {
          // Determinar clases de grid responsivas para centrar 2 en la segunda fila
          let gridClasses = "col-span-1 lg:col-span-2 sm:col-span-1";
          if (idx === 3) {
            gridClasses = "col-span-1 lg:col-span-2 lg:col-start-2 sm:col-span-1";
          } else if (idx === 4) {
            gridClasses = "col-span-1 lg:col-span-2 sm:col-span-2 lg:col-start-auto";
          }

          return (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className={gridClasses}
            >
              <Card className={`dashboard-card flex flex-col justify-between h-full transition-colors duration-300 space-y-4`}>
                <div className="space-y-3">
                {/* Header decorativo */}
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
                  <span className="font-mono text-[10px] text-[var(--accent-color)] font-bold">
                    {`SVC_0${idx + 1}`}
                  </span>
                  <span className="inline-flex items-center rounded bg-[var(--bg-accent-badge)] px-2 py-0.5 text-[10px] font-mono font-bold text-[var(--text-accent-badge)] border border-[var(--accent-border)] transition-all duration-300 group-hover:shadow-[0_0_8px_var(--accent-glow)] group-hover:border-[var(--accent-color)]">
                    {service.price}
                  </span>
                </div>

                {/* Contenido principal */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Footer de la card: Ideal para */}
              <div className="pt-3 border-t border-[var(--border-color)]/60 mt-auto">
                <span className="block font-mono text-[9px] text-[var(--text-muted)] uppercase tracking-wider mb-1">
                  // {t("ideal_label")}
                </span>
                <p className="text-[10px] text-[var(--text-secondary)] font-sans italic leading-snug">
                  {service.ideal}
                </p>
              </div>
            </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bloque de Mantenimiento Separado (Add-on recomendado) */}
      <motion.div 
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mt-8 max-w-3xl mx-auto"
      >
        <div className="relative rounded-xl border border-dashed border-[var(--border-color)] bg-[var(--bg-card)]/40 p-5 transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-[0_0_15px_var(--accent-glow)] hover:bg-[var(--bg-card)]/60 group">
          {/* Glow superior decorativo */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-color)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-2.5 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[9px] text-[var(--accent-color)] font-bold uppercase tracking-wider">
                  SVC_EXTRA
                </span>
                <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-950/40 px-2.5 py-0.5 text-[9px] font-mono font-bold text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-900/60 uppercase">
                  {t("extra_recommended_label")}
                </span>
              </div>
              
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
                  {maintenanceService.title}
                </h4>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
                  {maintenanceService.desc}
                </p>
              </div>
              
              <div className="text-[10px] text-[var(--text-secondary)] font-sans italic leading-snug pt-1">
                <span className="font-mono text-[9px] text-[var(--text-muted)] not-italic block uppercase tracking-wider mb-1">
                  // {t("ideal_label")}
                </span>
                {maintenanceService.ideal}
              </div>
            </div>
            
            {/* Caja de precio en el lateral */}
            <div className="flex flex-col items-start md:items-end justify-center bg-[var(--bg-canvas)]/50 border border-[var(--border-color)] rounded-lg p-4 min-w-[180px] shrink-0 space-y-2">
              <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block">
                PRICE_RATE:
              </span>
              <span className="text-lg font-black text-[var(--text-primary)] font-mono">
                {maintenanceService.price}
              </span>
              <span className="font-mono text-[8px] text-[var(--text-muted)]">
                // auto_billing_off
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Nota de precios discreta */}
      <div className="mt-4 flex justify-end">
        <p className="text-[10px] text-[var(--text-muted)] font-mono italic max-w-xl text-right">
          * {t("price_note")}
        </p>
      </div>

      {/* Mini sección de valores (Principios Kev Dev) */}
      <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
        <div className="mb-6 space-y-1">
          <h4 className="font-mono text-xs font-bold text-[var(--text-muted)] tracking-wider uppercase">
            // {tBrand("title")}
          </h4>
          <p className="text-xs text-[var(--text-secondary)] font-sans">
            {tBrand("subtitle")}
          </p>
        </div>
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {brandValues.map((value, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
              }}
              className="relative p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)]/50 hover:bg-[var(--bg-card)] transition-all duration-300 flex flex-col justify-between space-y-4 group hover:border-[var(--accent-border)] hover:shadow-[0_0_15px_var(--accent-glow)] overflow-hidden"
            >
              {/* Glow superior decorativo */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Cabecera técnica */}
              <div className="flex items-center justify-between border-b border-[var(--border-color)]/60 pb-2">
                <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-wider">
                  {value.code}
                </span>
                {/* Status Dot */}
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-color)] animate-pulse" />
                  <span className="font-mono text-[8px] text-[var(--text-muted)] uppercase">ACTIVE</span>
                </div>
              </div>

              {/* Icono + Contenido */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                {/* Contenedor del icono lineal azul/cian */}
                <div className="inline-flex p-2 rounded-lg bg-[var(--bg-accent-badge)] text-[var(--text-accent-badge)] border border-[var(--accent-border)]/40 w-fit group-hover:scale-105 transition-transform duration-300">
                  <value.icon className="h-4 w-4 stroke-[1.75]" />
                </div>

                <div className="space-y-1">
                  <h5 className="font-bold text-xs text-[var(--text-primary)] tracking-tight">
                    {value.title}
                  </h5>
                  <p className="text-[10px] text-[var(--text-secondary)] font-sans leading-snug">
                    {value.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
