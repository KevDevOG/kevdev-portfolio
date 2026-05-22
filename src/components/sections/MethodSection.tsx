"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export const MethodSection = () => {
  const t = useTranslations("Method");

  const steps = [
    {
      num: "01",
      title: t("step1_title"),
      desc: t("step1_desc")
    },
    {
      num: "02",
      title: t("step2_title"),
      desc: t("step2_desc")
    },
    {
      num: "03",
      title: t("step3_title"),
      desc: t("step3_desc")
    },
    {
      num: "04",
      title: t("step4_title"),
      desc: t("step4_desc")
    },
    {
      num: "05",
      title: t("step5_title"),
      desc: t("step5_desc")
    },
    {
      num: "06",
      title: t("step6_title"),
      desc: t("step6_desc")
    }
  ];

  return (
    <section id="proceso" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step, idx) => (
          <Card key={idx} className="dashboard-card space-y-4 flex flex-col justify-between transition-colors duration-300">
            <div className="space-y-3">
              {/* Indicador de número */}
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-2">
                <span className="font-mono text-xs font-black text-[var(--accent-color)]">
                  {`STAGE_${step.num}`}
                </span>
                <span className="font-mono text-[9px] text-[var(--text-muted)]">// OK</span>
              </div>

              {/* Título y descripción */}
              <h4 className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
                {step.title}
              </h4>
              <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Marcador decorativo inferior */}
            <div className="pt-2 flex justify-between font-mono text-[8px] text-[var(--text-muted)] border-t border-[var(--border-color)]">
              <span>SUB_PROCESS: OK</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">VERIFIED</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MethodSection;
