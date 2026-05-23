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

  // Form states
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const contactNodes = [
    {
      id: "whatsapp",
      title: t("whatsapp_title"),
      val: t("whatsapp_val"),
      desc: t("whatsapp_desc"),
      href: "#",
      icon: MessageCircle,
      accent: "text-emerald-500 dark:text-emerald-400",
      borderColor: "hover:border-emerald-500/50",
      disabled: false,
    },
    {
      id: "call",
      title: t("call_title"),
      val: t("call_val"),
      desc: t("call_desc"),
      href: "#",
      icon: Phone,
      accent: "text-blue-500 dark:text-blue-400",
      borderColor: "hover:border-blue-500/50",
      disabled: false,
    },
    {
      id: "email",
      title: t("email_title"),
      val: t("email_val"),
      desc: t("email_desc"),
      href: "#",
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

  const handleNodeClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (id === "email") {
      const u = "kevinochoa4b";
      const d = "gmail.com";
      window.location.href = `mailto:${u}@${d}`;
    } else if (id === "whatsapp") {
      const cc = "34";
      const num = "613015310";
      window.open(`https://wa.me/${cc}${num}`, "_blank");
    } else if (id === "call") {
      const cc = "34";
      const num = "613015310";
      window.location.href = `tel:+${cc}${num}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: name.trim() ? "" : t("error_required"),
      email: !email.trim()
        ? t("error_required")
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? t("error_email")
        : "",
      message: message.trim() ? "" : t("error_required"),
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    const nameLabel = t("form_name");
    const emailLabel = t("form_email");
    const messageLabel = t("form_message");
    const sourceLabel = t("form_source");

    const text = `*${nameLabel}:* ${name.trim()}
*${emailLabel}:* ${email.trim()}
*${messageLabel}:* ${message.trim()}

*${sourceLabel}:* portfolio`;

    const cc = "34";
    const num = "613015310";
    const whatsappUrl = `https://wa.me/${cc}${num}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contacto" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6">
        {/* Columna Izquierda: Formulario de Contacto */}
        <div className="lg:col-span-6 xl:col-span-7">
          <Card className="dashboard-card p-6 flex flex-col gap-5 bg-[var(--bg-card)] border-[var(--border-color)]" hoverEffect={false}>
            <div className="space-y-1.5 border-b border-[var(--border-color)] pb-3">
              <h3 className="text-sm font-mono font-bold text-[var(--accent-color)] uppercase tracking-widest flex items-center gap-1.5">
                <span>//</span> {t("form_title")}
              </h3>
              <p className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider">
                {t("form_subtitle")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campo Nombre */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  {t("form_name")}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                  }}
                  placeholder={t("form_name_placeholder")}
                  className={`w-full bg-[var(--bg-canvas)] border ${
                    errors.name ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500" : "border-[var(--border-color)] focus:ring-[var(--accent-color)]/50 focus:border-[var(--accent-color)]"
                  } rounded-lg px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 transition-all duration-200 font-sans`}
                />
                {errors.name && (
                  <span className="text-xs font-mono text-red-500/90 dark:text-red-400/90">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Campo Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  {t("form_email")}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                  placeholder={t("form_email_placeholder")}
                  className={`w-full bg-[var(--bg-canvas)] border ${
                    errors.email ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500" : "border-[var(--border-color)] focus:ring-[var(--accent-color)]/50 focus:border-[var(--accent-color)]"
                  } rounded-lg px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 transition-all duration-200 font-sans`}
                />
                {errors.email && (
                  <span className="text-xs font-mono text-red-500/90 dark:text-red-400/90">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Campo Mensaje */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  {t("form_message")}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                  }}
                  placeholder={t("form_message_placeholder")}
                  rows={4}
                  className={`w-full bg-[var(--bg-canvas)] border ${
                    errors.message ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500" : "border-[var(--border-color)] focus:ring-[var(--accent-color)]/50 focus:border-[var(--accent-color)]"
                  } rounded-lg px-3.5 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 transition-all duration-200 resize-none font-sans`}
                />
                {errors.message && (
                  <span className="text-xs font-mono text-red-500/90 dark:text-red-400/90">
                    {errors.message}
                  </span>
                )}
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-mono text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/10 active:scale-95 cursor-pointer flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]/50"
                >
                  {t("form_submit")}
                </button>
                
                <p className="text-xs text-[var(--text-muted)] font-mono leading-relaxed text-center px-4">
                  {t("form_notice")}
                </p>
              </div>
            </form>
          </Card>
        </div>

        {/* Columna Derecha: Tarjetas de Canales de Contacto Directo */}
        <div className="lg:col-span-6 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactNodes.map((node) => {
            const Icon = node.icon;
            const isObfuscated = ["email", "whatsapp", "call"].includes(node.id);

            if (node.disabled) {
              return (
                <div
                  key={node.id}
                  className="block select-none opacity-65 cursor-not-allowed rounded-xl"
                >
                  <Card className="dashboard-card flex flex-col justify-between h-36 p-5 transition-colors duration-300 bg-[var(--bg-canvas)] border-[var(--border-color)]" hoverEffect={false}>
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

            if (isObfuscated) {
              return (
                <div
                  key={node.id}
                  role="button"
                  tabIndex={0}
                  onClick={(e) => handleNodeClick(node.id, e)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleNodeClick(node.id, e as any);
                    }
                  }}
                  className="group block cursor-pointer focus:outline-none focus:ring-1 focus:ring-[var(--accent-color)] rounded-xl"
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
                </div>
              );
            }

            return (
              <a
                key={node.id}
                href={node.href}
                target="_blank"
                rel="noopener noreferrer"
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
      </div>
    </section>
  );
};

export default ContactSection;
