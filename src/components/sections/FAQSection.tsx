"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

export const FAQSection = () => {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
    { q: t("q6"), a: t("a6") },
    { q: t("q7"), a: t("a7") },
    { q: t("q8"), a: t("a8") },
    { q: t("q9"), a: t("a9") },
    { q: t("q10"), a: t("a10") },
    { q: t("q11"), a: t("a11") },
    { q: t("q12"), a: t("a12") },
  ];

  return (
    <section id="faq" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const qNum = idx + 1;
          const qCode = `Q_${qNum < 10 ? "0" : ""}${qNum}`;
          
          return (
            <Card 
              key={idx} 
              className="dashboard-card p-0 overflow-hidden flex flex-col transition-colors duration-300"
            >
              <button 
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left px-4 py-4 flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[var(--accent-color)] font-bold">
                    {qCode}
                  </span>
                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    {faq.q}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  {isOpen ? "[-]" : "[+]"}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-1 border-t border-[var(--border-color)]/30">
                      <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
