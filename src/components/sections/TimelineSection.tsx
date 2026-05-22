"use client";

import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export const TimelineSection = () => {
  const t = useTranslations("Timeline");
  const container = useRef<HTMLElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Ascending Chronological Order (From initial 2024 to present 2025/2026)
  const logMilestones = [
    {
      timestamp: "2024",
      event: "CORE_ENGINE_INIT",
      title: t("stage3_title"),
      desc: t("stage3_desc"),
      tags: [t("tag_programming"), t("tag_logic"), t("tag_algorithms")]
    },
    {
      timestamp: "2024/2025",
      event: "ENGINE_BASES_DAW_1ST",
      title: t("stage2_title"),
      desc: t("stage2_desc"),
      tags: ["HTML5", "CSS3", "JavaScript", "SQL", "MySQL", "Git"]
    },
    {
      timestamp: "2025/2026",
      event: "SYSTEM_UPGRADE_DAW_2ND",
      title: t("stage1_title"),
      desc: t("stage1_desc"),
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "MySQL",
        "Auth",
        "Server Actions",
        "Docker",
        "Vercel",
        "GitHub",
        t("tag_documentation")
      ]
    }
  ];

  useGSAP(() => {
    if (prefersReducedMotion) return;

    // 1. Active colored vertical track (grows down as user scrolls)
    gsap.fromTo(
      ".timeline-line-active",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    // 2. Node connections and cards pop-out
    const items = gsap.utils.toArray(".timeline-item");
    items.forEach((item: any) => {
      const dot = item.querySelector(".timeline-dot");
      const header = item.querySelector(".timeline-header");
      const card = item.querySelector(".timeline-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );

      tl.fromTo(
        [header, card],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      );
    });
  }, { scope: container, dependencies: [prefersReducedMotion] });

  return (
    <section ref={container} id="evolucion" className="py-6 border-t border-[var(--border-color)]">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      
      <div className="timeline-container relative space-y-8 ml-2 sm:ml-4">
        
        {/* 1. Base vertical static line */}
        <div className="absolute left-2.5 sm:left-3 md:left-4 top-2 bottom-2 w-0.5 bg-[var(--border-color)] rounded-full pointer-events-none" />

        {/* 2. Active colored vertical track */}
        <div 
          className="timeline-line-active absolute left-2.5 sm:left-3 md:left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-cyan-500 rounded-full origin-top pointer-events-none"
        />

        {logMilestones.map((milestone, idx) => (
          <div key={idx} className="timeline-item relative pl-9 sm:pl-11 md:pl-14 space-y-2">
            
            {/* 3. Node connections */}
            <div
              className="timeline-dot absolute left-2.5 sm:left-3 md:left-4 -translate-x-[6px] top-1 h-3.5 w-3.5 rounded-full bg-[var(--bg-canvas)] border-2 border-[var(--accent-color)] z-10 shadow-[0_0_8px_var(--accent-glow)] flex items-center justify-center pointer-events-none"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent-color)] animate-pulse" />
            </div>

            {/* 4. Logs Header Row */}
            <div 
              className="timeline-header flex flex-wrap items-center gap-2.5 font-mono text-[9px] min-h-[24px]"
            >
              <span className="inline-flex items-center rounded bg-blue-500/10 dark:bg-cyan-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-blue-600 dark:text-cyan-400 border border-blue-500/20 dark:border-cyan-500/30 uppercase tracking-wider">
                {milestone.timestamp}
              </span>
              <Badge className="bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-secondary)] text-[8px] py-0.5 px-1.5 font-bold tracking-widest uppercase">
                {milestone.event}
              </Badge>
              <span className="text-[var(--text-muted)] font-mono">// STATUS: STABLE</span>
            </div>

            {/* 5. Card container */}
            <div
              className="timeline-card"
            >
              <Card className="dashboard-card max-w-3xl py-3 px-4 transition-all duration-300">
                <h4 className="text-xs font-bold text-[var(--text-primary)] tracking-tight font-sans">
                  {milestone.title}
                </h4>
                <p className="text-[11px] text-[var(--text-secondary)] font-sans leading-relaxed mt-1">
                  {milestone.desc}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {milestone.tags.map((tag) => (
                    <Badge key={tag} className="bg-[var(--bg-canvas)] border-[var(--border-color)] text-[8px] text-[var(--text-muted)] py-0 px-1.5 font-semibold">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
