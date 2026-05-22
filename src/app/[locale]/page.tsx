import React from "react";
import Navbar from "../../components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatusDashboard from "@/components/sections/StatusDashboard";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StackSection from "@/components/sections/StackSection";
import FeaturedProjectSection from "@/components/sections/FeaturedProjectSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import MethodSection from "@/components/sections/MethodSection";
import TimelineSection from "@/components/sections/TimelineSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "../../components/layout/Footer";
import FloatingContactBubble from "../../components/ui/FloatingContactBubble";
import Reveal from "@/components/effects/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-dashboard)] transition-colors duration-300 font-sans">
      <Navbar />
      
      {/* 1. HeroSection como Portada Full Screen Real (fuera de contenedores limitados) */}
      <HeroSection />

      {/* 2. Contenedor Principal Limitado (max-w-[1440px]) para el resto del Dashboard */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-16 md:space-y-24 w-full dot-grid transition-colors duration-300">
        
        {/* Panel de Status */}
        <Reveal>
          <StatusDashboard />
        </Reveal>

        {/* Sección Sobre Mí */}
        <Reveal>
          <AboutSection />
        </Reveal>

        {/* Sección Proyecto Destacado */}
        <Reveal>
          <FeaturedProjectSection />
        </Reveal>

        {/* Sección Otros Repositorios */}
        <Reveal>
          <ProjectsSection />
        </Reveal>

        {/* Sección Servicios */}
        <Reveal>
          <ServicesSection />
        </Reveal>

        {/* Sección Metodología */}
        <Reveal>
          <MethodSection />
        </Reveal>

        {/* Sección Stack Tecnológico */}
        <Reveal>
          <StackSection />
        </Reveal>

        {/* Sección Timeline */}
        <Reveal>
          <TimelineSection />
        </Reveal>

        {/* Sección FAQ */}
        <Reveal>
          <FAQSection />
        </Reveal>

        {/* Sección Contacto */}
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>

      <Footer />
      <FloatingContactBubble />
    </div>
  );
}
