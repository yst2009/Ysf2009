import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-[#1E222D] py-10 px-6 md:px-10 bg-[#090A0F]">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
        <p className="font-semibold text-[#9CA3AF]">
          youssef.dev
        </p>
        <p className="text-center">
          {personal.headline}
        </p>
        <p>
          2026 · {personal.location}
        </p>
      </div>
    </footer>
  );
}
