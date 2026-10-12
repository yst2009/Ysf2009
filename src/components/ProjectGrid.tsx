"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const GithubIcon = ({ size = 13 }: { size?: number }) => (
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

export default function ProjectGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="px-6 md:px-10 py-24 max-w-[1280px] mx-auto"
    >
      {/* Header */}
      <div className="mb-14">
        <p className="font-mono text-xs text-[#6B7280] uppercase tracking-widest mb-3">
          Independent Architectures
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F4F4F5] tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="text-sm text-[#9CA3AF] mt-2 max-w-xl">
          Production systems, automation workflows, and multi-tenant backends engineered with clean contracts.
        </p>
        <div className="w-12 h-px bg-[#1E222D] mt-4" />
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: "easeOut",
            }}
            className="group bg-[#111318] border border-[#1E222D] rounded-xl p-6 flex flex-col justify-between hover:border-[#2E3544] hover:-translate-y-1 transition-all duration-200"
          >
            <div>
              {/* Timeline Period */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[10px] text-[#6B7280] bg-[#14171F] border border-[#1E222D] rounded px-2.5 py-0.5">
                  {proj.period}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[#F4F4F5] group-hover:text-white transition-colors mb-2.5">
                {proj.title}
              </h3>

              {/* Exact Description from Resume */}
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-4">
                {proj.description}
              </p>
            </div>

            {/* GitHub Repository Link */}
            {proj.githubUrl && (
              <div className="pt-4 border-t border-[#1E222D]/60 flex items-center">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#9CA3AF] hover:text-[#F4F4F5] bg-[#14171F] border border-[#1E222D] rounded-md px-3 py-1.5 hover:border-[#2E3544] transition-all duration-150"
                >
                  <GithubIcon size={12} />
                  <span>Inspect Source</span>
                  <ArrowUpRight size={11} className="text-[#6B7280]" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
