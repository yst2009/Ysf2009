"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="flex-shrink-0"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="flex-shrink-0"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const TECH_PILLS = [
  "Laravel",
  "PostgreSQL",
  "Redis",
  "Docker",
  "REST APIs",
];

export default function Hero() {
  const { personal } = portfolioData;

  const scrollToExperience = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#experience");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 md:px-10 max-w-[1280px] mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="inline-flex items-center gap-2 text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full px-3.5 py-1.5 w-fit max-w-full mb-5 sm:mb-6"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="truncate sm:whitespace-normal">
              Building Botify-Agents · Open for Systems Engineering
            </span>
          </motion.div>

          {/* Name in Crisp Solid White */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F4F5] leading-[1.1] sm:leading-[1.08] mb-3 break-words"
          >
            {personal.name}
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="font-mono text-sm sm:text-base font-medium text-[#9CA3AF] mb-5 sm:mb-6 tracking-tight leading-relaxed"
          >
            {personal.headline}
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
            className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-2xl mb-8"
          >
            {personal.summary}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            <a
              href="#experience"
              onClick={scrollToExperience}
              className="inline-flex items-center gap-2 bg-[#F4F4F5] text-[#090A0F] text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Inspect Systems</span>
              <ArrowRight size={14} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#F4F4F5] bg-[#111318] border border-[#1E222D] rounded-lg px-4 py-2.5 hover:border-[#2E3544] hover:bg-[#14171F] transition-all duration-200"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#9CA3AF] hover:text-[#F4F4F5] bg-[#111318] border border-[#1E222D] rounded-lg px-4 py-2.5 hover:border-[#2E3544] hover:bg-[#14171F] transition-all duration-200"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Refined Backend Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div className="w-full max-w-full sm:max-w-md bg-[#111318] border border-[#1E222D] rounded-2xl p-5 sm:p-7 shadow-xl hover:border-[#2E3544] transition-colors">
            {/* Top Identity */}
            <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#14171F] border border-[#1E222D] flex items-center justify-center font-mono text-base sm:text-lg font-bold text-[#F4F4F5] flex-shrink-0">
                  YM
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#F4F4F5] tracking-wide truncate">
                    YOUSSEF MOHAMAD
                  </p>
                  <p className="font-mono text-xs text-[#6B7280] truncate mt-0.5">
                    Backend & Systems Engineer
                  </p>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1 flex-shrink-0">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                <span>Active</span>
              </div>
            </div>

            <div className="h-px bg-[#1E222D] mb-5 sm:mb-6" />

            {/* Metric Blocks */}
            <div className="space-y-3.5 mb-5 sm:mb-6">
              {/* Metric Block 1 (Multi-Tenancy & Backend Infrastructure) */}
              <div className="bg-[#14171F] border border-[#1E222D] rounded-xl p-3.5 sm:p-4">
                <p className="font-mono text-[11px] text-emerald-400 font-semibold tracking-wide mb-1.5">
                  Architecture: Multi-Tenant SaaS
                </p>
                <p className="text-[#F4F4F5] text-xs font-mono leading-relaxed">
                  Redis SaaS · 9s text / 15s voice / 12s image response latency
                </p>
              </div>

              {/* Metric Block 2 (Database & Low-Level Optimization) */}
              <div className="bg-[#14171F] border border-[#1E222D] rounded-xl p-3.5 sm:p-4">
                <p className="font-mono text-[11px] text-[#9CA3AF] font-semibold tracking-wide mb-1.5">
                  Database Internals: PostgreSQL
                </p>
                <p className="text-[#9CA3AF] text-xs font-mono leading-relaxed">
                  PL/pgSQL routines & pg_trgm phonetic search, cutting latency to 5s (NileFlow AI)
                </p>
              </div>
            </div>

            {/* Footer Tech Badges */}
            <div className="pt-4 border-t border-[#1E222D]/60 space-y-2.5">
              <p className="font-mono text-[10px] text-[#6B7280] uppercase tracking-wider">
                Core Systems Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {TECH_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="font-mono text-[11px] bg-[#14171F] border border-[#1E222D] text-[#9CA3AF] rounded px-2.5 py-1 hover:border-[#2E3544] hover:text-[#F4F4F5] transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
