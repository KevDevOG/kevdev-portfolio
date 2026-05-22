"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";
import { Mail, FileText, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { SiInstagram, SiTiktok } from "react-icons/si";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection = () => {
  const t = useTranslations("Contact");

  const contactNodes = [
    {
      id: "email",
      title: t("email_title"),
      val: "kevinochoa4b@gmail.com",
      desc: t("email_desc"),
      href: "mailto:kevinochoa4b@gmail.com",
      icon: Mail,
      accent: "text-blue-600 dark:text-blue-400",
      borderColor: "hover:border-blue-500/50",
      disabled: false,
    },
    {
      id: "github",
      title: t("github_title"),
      val: "KevDevOG",
      desc: t("github_desc"),
      href: "https://github.com/KevDevOG",
      icon: GithubIcon,
      accent: "text-purple-600 dark:text-purple-400",
      borderColor: "hover:border-purple-500/50",
      disabled: false,
    },
    {
      id: "whatsapp",
      title: t("whatsapp_title"),
      val: t("whatsapp_val"),
      desc: t("whatsapp_desc"),
      href: "https://wa.me/34613015310",
      icon: MessageCircle,
      accent: "text-emerald-500 dark:text-emerald-400",
      borderColor: "hover:border-emerald-500/50",
      disabled: false,
    },
    {
      id: "instagram",
      title: t("instagram_title"),
      val: "@iamkevdev",
      desc: t("instagram_desc"),
      href: "https://www.instagram.com/iamkevdev",
      icon: SiInstagram,
      accent: "text-pink-600 dark:text-pink-400",
      borderColor: "hover:border-pink-500/50",
      disabled: false,
    },
    {
      id: "tiktok",
      title: t("tiktok_title"),
      val: "@iamkevdev",
      desc: t("tiktok_desc"),
      href: "https://www.tiktok.com/@iamkevdev",
      icon: SiTiktok,
      accent: "text-black dark:text-white",
      borderColor: "hover:border-zinc-500/50",
      disabled: false,
    },
    {
      id: "linkedin",
      title: t("linkedin_title"),
      val: t("linkedin_val"),
      desc: t("linkedin_desc"),
      href: "https://www.linkedin.com/in/iamkevdev/",
      icon: LinkedinIcon,
      accent: "text-blue-500 dark:text-blue-400",
      borderColor: "hover:border-blue-500/50",
      disabled: false,
    },
    {
      id: "resume",
      title: t("resume_title"),
      val: t("resume_val"),
      desc: t("resume_desc"),
      href: "#",
      icon: FileText,
      accent: "text-zinc-400 dark:text-zinc-500",
      borderColor: "",
      disabled: true,
    }
  ];

  return (
    <section id="contacto" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contactNodes.map((node) => {
          const Icon = node.icon;

          if (node.disabled) {
            return (
              <div
                key={node.id}
                className="block select-none opacity-65 cursor-not-allowed rounded-xl"
              >
                <Card className="dashboard-card flex flex-col justify-between h-36 p-5 transition-colors duration-300 bg-[var(--bg-canvas)] border-[var(--border-color)]">
                  <div className="space-y-3">
                    {/* Encabezado de la Tarjeta */}
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-[var(--text-muted)] uppercase tracking-widest">{node.title}</span>
                      <Badge className="bg-[var(--bg-card)] border-[var(--border-color)] text-[10px] py-0 px-1 text-[var(--text-muted)] font-mono tracking-widest uppercase">
                        PENDING
                      </Badge>
                    </div>

                    {/* Icono y Valor */}
                    <div className="flex items-center gap-3">
                      <Icon className={`h-5 w-5 shrink-0 ${node.accent}`} />
                      <h4 className="text-base font-bold text-[var(--text-muted)] tracking-tight">
                        {node.val}
                      </h4>
                    </div>
                  </div>

                  {/* Breve descripción */}
                  <p className="text-sm text-[var(--text-muted)] font-sans leading-relaxed mt-2 line-clamp-2">
                    {node.desc}
                  </p>
                </Card>
              </div>
            );
          }

          return (
            <a
              key={node.id}
              href={node.href}
              target={node.id !== "email" && node.id !== "call" ? "_blank" : undefined}
              rel={node.id !== "email" && node.id !== "call" ? "noopener noreferrer" : undefined}
              className="group block focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)] rounded-xl"
            >
              <Card className={`dashboard-card flex flex-col justify-between h-36 p-5 transition-all duration-200 border-[var(--border-color)] ${node.borderColor}`}>
                <div className="space-y-3">
                  {/* Encabezado de la Tarjeta */}
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[var(--text-muted)] uppercase tracking-widest">{node.title}</span>
                    <Badge className="bg-[var(--bg-canvas)] border-[var(--border-color)] text-xs py-0 px-1 text-[var(--text-muted)] font-mono tracking-widest flex items-center gap-1 group-hover:text-[var(--text-primary)] transition-colors">
                      <span>OPEN</span>
                      <ArrowUpRight className="h-2 w-2" />
                    </Badge>
                  </div>

                  {/* Icono y Valor */}
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 shrink-0 ${node.accent}`} />
                    <h4 className="text-base font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-color)] transition-colors duration-150">
                      {node.val}
                    </h4>
                  </div>
                </div>

                {/* Breve descripción */}
                <p className="text-sm text-[var(--text-secondary)] font-sans leading-relaxed mt-2 line-clamp-2">
                  {node.desc}
                </p>
              </Card>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
