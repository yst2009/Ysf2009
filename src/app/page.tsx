import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectGrid from "@/components/ProjectGrid";
import ArchitectureMatrix from "@/components/ArchitectureMatrix";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090A0F] text-[#F4F4F5]">
      {/* 1. Hero: Name, Headline, Summary, Coordinates */}
      <Hero />

      {/* 1px Hairline Divider */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="h-px bg-[#1E222D]" />
      </div>

      {/* 2. Experience: Botify-Agents & NileFlow AI */}
      <ExperienceTimeline />

      {/* 1px Hairline Divider */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="h-px bg-[#1E222D]" />
      </div>

      {/* 3. Featured Projects: 5 Exact Independent Architectures */}
      <ProjectGrid />

      {/* 1px Hairline Divider */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="h-px bg-[#1E222D]" />
      </div>

      {/* 4. Technical Skills Matrix: Backend, PostgreSQL/DB, Automation, DevOps, Hardware */}
      <ArchitectureMatrix />

      {/* 1px Hairline Divider */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="h-px bg-[#1E222D]" />
      </div>

      {/* 5. Education, Certifications & Languages */}
      <Certifications />

      {/* 1px Hairline Divider */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="h-px bg-[#1E222D]" />
      </div>

      {/* 6. Contact Channels */}
      <Contact />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
