"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#architecture" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-[#090A0F]/85 border-b border-[#1E222D]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto h-16 px-6 md:px-10 flex items-center justify-between">
          {/* Brandmark */}
          <a
            href="#hero"
            onClick={(e) => handleAnchorClick(e, "#hero")}
            className="font-mono text-sm md:text-base font-semibold text-[#F4F4F5] tracking-tight hover:opacity-85 transition-opacity"
          >
            youssef.dev
          </a>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="relative text-sm text-[#9CA3AF] hover:text-[#F4F4F5] transition-colors py-1 group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F4F4F5] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#F4F4F5] bg-[#14171F] border border-[#1E222D] rounded-lg px-3.5 py-2 hover:border-[#2E3544] hover:bg-[#1a1e28] transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#9CA3AF] hover:text-[#F4F4F5] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 backdrop-blur-xl bg-[#090A0F]/95 border-b border-[#1E222D] px-6 py-6 flex flex-col gap-4 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#F4F4F5] py-2 transition-colors border-b border-[#1E222D]/40"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center justify-center gap-2 text-xs font-mono font-medium text-[#F4F4F5] bg-[#14171F] border border-[#1E222D] rounded-lg py-3 mt-2"
            >
              Get in Touch
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
