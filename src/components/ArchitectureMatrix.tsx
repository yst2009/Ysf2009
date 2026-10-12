"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Database, Workflow, Cloud, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ArchitectureMatrix() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const { technicalSkills } = portfolioData;

  const skillGroups = [
    {
      title: "Backend Core & Systems",
      icon: <Server size={18} strokeWidth={1.5} className="text-[#9CA3AF]" />,
      skills: technicalSkills.backend,
    },
    {
      title: "Database & Storage Systems",
      icon: <Database size={18} strokeWidth={1.5} className="text-[#9CA3AF]" />,
      skills: technicalSkills.databaseAndStorage,
    },
    {
      title: "Automation & AI Orchestration",
      icon: <Workflow size={18} strokeWidth={1.5} className="text-[#9CA3AF]" />,
      skills: technicalSkills.automationAndWorkflow,
    },
    {
      title: "Infrastructure & DevOps",
      icon: <Cloud size={18} strokeWidth={1.5} className="text-[#9CA3AF]" />,
      skills: technicalSkills.infrastructureAndDevOps,
    },
    {
      title: "Hardware & Embedded Systems",
      icon: <Cpu size={18} strokeWidth={1.5} className="text-[#9CA3AF]" />,
      skills: technicalSkills.hardwareAndEmbedded,
    },
  ];

  return (
    <section
      id="architecture"
      className="px-6 md:px-10 py-24 max-w-[1280px] mx-auto"
    >
      {/* Header */}
      <div className="mb-14">
        <p className="font-mono text-xs text-[#6B7280] uppercase tracking-widest mb-3">
          Engineering Capabilities
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F4F4F5] tracking-tight">
          Technical Competencies & Matrix
        </h2>
        <p className="text-sm text-[#9CA3AF] mt-2 max-w-xl">
          Core competencies extracted directly from production backend architectures and bare-metal systems.
        </p>
        <div className="w-12 h-px bg-[#1E222D] mt-4" />
      </div>

      {/* Grid */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: "easeOut",
            }}
            className={`bg-[#111318] border border-[#1E222D] rounded-xl p-6 hover:border-[#2E3544] hover:-translate-y-0.5 transition-all duration-200 ${
              idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
            }`}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#14171F] border border-[#1E222D] flex items-center justify-center flex-shrink-0">
                {group.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#F4F4F5]">
                {group.title}
              </h3>
            </div>

            <div className="h-px bg-[#1E222D]/60 mb-4" />

            {/* Competency Items */}
            <ul className="space-y-2.5">
              {group.skills.map((skill, sIdx) => (
                <li
                  key={sIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E222D] border border-[#2E3544] mt-1.5 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
