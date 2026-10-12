"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const { experiences } = portfolioData;

  return (
    <section
      id="experience"
      className="px-6 md:px-10 py-24 max-w-[1280px] mx-auto"
    >
      {/* Header */}
      <div className="mb-14">
        <p className="font-mono text-xs text-[#6B7280] uppercase tracking-widest mb-3">
          Track Record
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F4F4F5] tracking-tight">
          Experience & Venture Architecture
        </h2>
        <p className="text-sm text-[#9CA3AF] mt-2 max-w-xl">
          Production systems engineering spanning autonomous AI sales SaaS and database performance tuning.
        </p>
        <div className="w-12 h-px bg-[#1E222D] mt-4" />
      </div>

      {/* Vertical Time-Axis Container */}
      <div ref={ref} className="relative pl-6 sm:pl-8">
        {/* Continuous 1px Vertical Axis Line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[#1E222D]" />

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-6 w-3.5 h-3.5 rounded-full bg-[#090A0F] border-2 border-[#2E3544] flex items-center justify-center">
                {exp.period.includes("Present") && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </div>

              {/* Elevated Card */}
              <div className="bg-[#111318] border border-[#1E222D] rounded-xl p-6 md:p-7 hover:border-[#2E3544] hover:-translate-y-0.5 transition-all duration-200">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg md:text-xl font-semibold text-[#F4F4F5]">
                        {exp.title}
                      </h3>
                      <span className="font-mono text-[10px] text-[#9CA3AF] bg-[#14171F] border border-[#1E222D] rounded px-2 py-0.5">
                        {exp.type}
                      </span>
                    </div>
                    {exp.role && (
                      <p className="text-xs sm:text-sm font-mono text-emerald-400 mt-1">
                        {exp.role}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2.5 self-start sm:self-auto">
                    {exp.period.includes("Present") && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        Active
                      </span>
                    )}
                    <span className="font-mono text-xs text-[#6B7280] bg-[#14171F] border border-[#1E222D] rounded-md px-2.5 py-1">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Subtitle */}
                {exp.subtitle && (
                  <p className="text-xs sm:text-sm text-[#9CA3AF] font-medium leading-relaxed mb-4 pb-3 border-b border-[#1E222D]/60">
                    {exp.subtitle}
                  </p>
                )}

                {/* Verified Bullet Points / Subsystems */}
                <ul className="space-y-3">
                  {exp.points.map((pt, pIdx) => {
                    const colonMatch = pt.match(/^(Subsystem \d+ \([^)]+\):)\s*(.*)$/);
                    if (colonMatch) {
                      const [, label, description] = colonMatch;
                      return (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 mt-2 flex-shrink-0" />
                          <div>
                            <span className="text-[#F4F4F5] font-mono text-[11px] sm:text-xs font-semibold mr-1.5">
                              {label}
                            </span>
                            <span>{description}</span>
                          </div>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E3544] mt-2 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Engineering Tech Stack Badges */}
                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="mt-5 pt-3.5 border-t border-[#1E222D]/60 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#14171F] border border-[#1E222D] text-[#9CA3AF] rounded px-2.5 py-0.5 hover:border-[#2E3544] hover:text-[#F4F4F5] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Verified Repository Link */}
                {exp.link && (
                  <div className="mt-4 flex items-center">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF] hover:text-[#F4F4F5] bg-[#14171F] border border-[#1E222D] rounded-md px-3 py-1.5 hover:border-[#2E3544] transition-colors"
                    >
                      <span>Inspect Repository</span>
                      <ArrowUpRight size={12} className="text-[#6B7280]" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
