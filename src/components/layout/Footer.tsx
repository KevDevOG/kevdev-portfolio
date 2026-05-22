"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-dashboard)] px-6 py-5 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col sm:flex-row gap-4 items-center justify-between font-mono text-[10px] md:text-xs text-[var(--text-muted)]">
        {/* Copyright */}
        <div>
          <span>{t("rights")}</span>
        </div>

        {/* Right side: social links + legal links + version */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2">
          {/* Social */}
          <a
            href="https://github.com/KevDevOG"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/iamkevdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            LinkedIn
          </a>

          {/* Separator */}
          <span className="text-[var(--border-color)]">|</span>

          {/* Social links */}
          <a
            href="https://www.instagram.com/iamkevdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@iamkevdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            TikTok
          </a>
          <span className="text-[var(--border-color)]">|</span>

          {/* Legal links */}
          <Link
            href="/aviso-legal"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {t("legal_notice")}
          </Link>
          <Link
            href="/privacidad"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {t("privacy")}
          </Link>
          <Link
            href="/cookies"
            className="hover:text-[var(--text-primary)] transition-colors"
          >
            {t("cookies")}
          </Link>

          {/* Separator */}
          <span className="text-[var(--border-color)]">|</span>

          <span className="text-[var(--text-muted)] font-bold">v1.0.0-stable</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
