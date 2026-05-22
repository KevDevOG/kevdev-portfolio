"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import Badge from "./Badge";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const FloatingContactBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("FloatingContact");

  const contacts = [
    {
      id: "whatsapp",
      label: t("whatsapp"),
      href: "https://wa.me/34613015310",
      icon: MessageCircle,
      pending: false,
      color: "text-emerald-500",
      blank: true,
    },
    {
      id: "call",
      label: t("call"),
      href: "tel:+34613015310",
      icon: Phone,
      pending: false,
      color: "text-blue-500",
      blank: false,
    },
    {
      id: "email",
      label: t("email"),
      href: "mailto:kevinochoa4b@gmail.com",
      icon: Mail,
      pending: false,
      color: "text-zinc-400",
    },
    {
      id: "github",
      label: t("github"),
      href: "https://github.com/KevDevOG",
      icon: GithubIcon,
      pending: false,
      color: "text-purple-500",
      blank: true,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Panel Expandible */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 origin-bottom-right"
          >
            <div className="bg-[var(--bg-canvas)] border border-[var(--border-color)] rounded-xl shadow-2xl p-2 flex flex-col gap-1 w-56">
              <div className="px-3 py-2 border-b border-[var(--border-color)] mb-1">
                 <span className="font-mono text-[10px] font-bold text-[var(--text-primary)]">{t("title")}</span>
              </div>
              {contacts.map((contact) => {
                const Icon = contact.icon;
                if (contact.pending) {
                  return (
                    <div key={contact.id} className="flex items-center justify-between px-3 py-2.5 rounded-lg opacity-60 cursor-not-allowed">
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${contact.color}`} />
                        <span className="text-xs font-medium text-[var(--text-muted)]">{contact.label}</span>
                      </div>
                      <Badge className="bg-[var(--bg-card)] text-[8px] py-0 px-1 border-none text-[var(--text-muted)]">{t("pending")}</Badge>
                    </div>
                  );
                }

                return (
                  <a 
                    key={contact.id}
                    href={contact.href}
                    target={contact.blank ? "_blank" : undefined}
                    rel={contact.blank ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[var(--bg-card)] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${contact.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-xs font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{contact.label}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Principal Flotante */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[var(--bg-canvas)] border border-[var(--border-color)] shadow-xl flex items-center justify-center hover:scale-105 hover:border-[var(--accent-color)] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2 focus:ring-offset-[var(--bg-dashboard)]"
        aria-label="Abrir contacto rápido"
      >
        <div className="relative flex items-center justify-center w-full h-full text-[var(--text-primary)]">
          <MessageCircle className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100 group-hover:text-[var(--accent-color)]"}`} />
          <X className={`absolute w-6 h-6 transition-all duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
        </div>
      </button>
    </div>
  );
};

export default FloatingContactBubble;
