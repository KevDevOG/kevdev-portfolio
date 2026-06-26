"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Globe, Loader2 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  actionText: string;
}

interface ProjectPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  openProjectText: string;
  loadingProjectText: string;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ 
  isOpen, 
  onClose, 
  project, 
  openProjectText,
  loadingProjectText
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Reset iframe loaded state when project changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setIframeLoaded(false);
    }
  }, [isOpen, project]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 lg:p-8">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            onClick={onClose}
          />

          {/* Modal / Browser Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full sm:h-[85vh] sm:w-[90vw] max-w-7xl flex flex-col bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-3 border-b border-[var(--border-color)] bg-[var(--bg-canvas)]/80 backdrop-blur-md select-none shrink-0">
              
              {/* Traffic Lights (Mac style) */}
              <div className="hidden sm:flex items-center gap-1.5 w-24">
                <span className="h-3 w-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500" onClick={onClose} />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>

              {/* URL / Title Bar */}
              <div className="flex-1 flex justify-center max-w-md mx-auto">
                <div className="flex items-center justify-center gap-2 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-md px-3 py-1.5 w-full text-xs font-mono text-[var(--text-muted)] truncate shadow-inner">
                  <Globe className="h-3.5 w-3.5 opacity-60" />
                  <span className="truncate">{project.url}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2 sm:w-auto">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold px-3 py-1.5 rounded transition-colors shadow-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>{openProjectText}</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-canvas)] transition-colors focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Mobile Action Bar (shows only on mobile) */}
            <div className="sm:hidden flex items-center justify-center px-4 py-2 border-b border-[var(--border-color)] bg-[var(--bg-canvas)]/40 shrink-0">
               <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold px-4 py-2 rounded transition-colors shadow-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{openProjectText}</span>
                </a>
            </div>

            {/* Iframe Content Area */}
            <div className="relative flex-1 w-full h-full bg-[var(--bg-canvas)] overflow-hidden">
              
              {/* Static Preview Image (Background/Loading Placeholder) */}
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover object-top transition-all duration-700 ${
                    iframeLoaded ? "opacity-0 blur-sm scale-95" : "opacity-100 blur-none scale-100"
                  }`}
                />
              </motion.div>

              {/* Loading UI Overlay (Visible while iframe loads) */}
              <AnimatePresence>
                {!iframeLoaded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm"
                  >
                    <div className="flex flex-col items-center gap-3 bg-[var(--bg-card)]/90 px-6 py-4 rounded-xl border border-[var(--border-color)] shadow-2xl">
                      <Loader2 className="h-6 w-6 text-blue-500 animate-spin" />
                      <span className="font-mono text-xs font-bold text-[var(--text-primary)] tracking-wide">
                        {loadingProjectText}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Interactive Iframe */}
              <iframe
                src={project.url}
                title={project.title}
                onLoad={() => setIframeLoaded(true)}
                className={`w-full h-full border-none bg-white dark:bg-black relative z-30 transition-opacity duration-700 ease-in-out ${
                  iframeLoaded ? "opacity-100" : "opacity-0"
                }`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPreviewModal;
