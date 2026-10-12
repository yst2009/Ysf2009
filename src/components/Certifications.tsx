"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Languages, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const { education, certifications, languages } = portfolioData;

  return (
    <section
      id="certifications"
      className="px-6 md:px-10 py-24 max-w-[1280px] mx-auto"
    >
      {/* Header */}
      <div className="mb-14">
        <p className="font-mono text-xs text-[#6B7280] uppercase tracking-widest mb-3">
          Qualifications
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F4F4F5] tracking-tight">
          Education, Certifications & Languages
        </h2>
        <p className="text-sm text-[#9CA3AF] mt-2 max-w-xl">
          Formal software technology education, professional certifications, and communication proficiencies.
        </p>
        <div className="w-12 h-px bg-[#1E222D] mt-4" />
      </div>

      <div ref={ref} className="space-y-6">
        {/* Education & Languages Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="md:col-span-2 bg-[#111318] border border-[#1E222D] rounded-xl p-6 md:p-7 hover:border-[#2E3544] transition-all duration-200 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#14171F] border border-[#1E222D] flex items-center justify-center flex-shrink-0 mt-0.5">
              <GraduationCap size={18} strokeWidth={1.5} className="text-[#9CA3AF]" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-mono text-[10px] text-[#6B7280] uppercase tracking-widest">
                  Formal Software Education
                </span>
                <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded px-2.5 py-0.5 w-fit">
                  {education.expectedGraduation}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#F4F4F5] mb-1">
                {education.institution}
              </h3>

              <p className="text-xs sm:text-sm text-[#9CA3AF] font-medium">
                {education.degree}
              </p>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="bg-[#111318] border border-[#1E222D] rounded-xl p-6 hover:border-[#2E3544] transition-all duration-200 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#14171F] border border-[#1E222D] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Languages size={18} strokeWidth={1.5} className="text-[#9CA3AF]" />
            </div>

            <div className="flex-1 min-w-0">
              <span className="font-mono text-[10px] text-[#6B7280] uppercase tracking-widest block mb-2">
                Languages
              </span>

              <div className="space-y-2">
                {languages.map((lang, lIdx) => (
                  <div key={lIdx} className="text-xs">
                    <span className="font-semibold text-[#F4F4F5]">{lang.language}: </span>
                    <span className="text-[#9CA3AF] font-mono text-[11px]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + idx * 0.08,
                ease: "easeOut",
              }}
              className="bg-[#111318] border border-[#1E222D] rounded-xl p-6 hover:border-[#2E3544] hover:-translate-y-0.5 transition-all duration-200 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#14171F] border border-[#1E222D] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Award size={18} strokeWidth={1.5} className="text-[#9CA3AF]" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-mono text-[10px] text-[#6B7280] uppercase tracking-widest">
                    Verified Credential
                  </span>
                  <span className="font-mono text-xs text-[#6B7280]">
                    {cert.period}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-semibold text-[#F4F4F5] mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs text-[#9CA3AF] mb-2 font-mono">
                  {cert.issuer} · {cert.location}
                </p>

                <p className="text-xs text-[#6B7280] leading-relaxed mb-3">
                  {cert.description}
                </p>

                {cert.verifyUrl && (
                  <div className="pt-2 border-t border-[#1E222D]/60">
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF] hover:text-[#F4F4F5] transition-colors"
                    >
                      <span>Verify Certificate</span>
                      <ArrowUpRight size={11} className="text-[#6B7280]" />
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
