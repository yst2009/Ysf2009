import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { portfolioData } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { personal } = portfolioData;

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.headline}`,
  description: personal.summary,
  keywords: [
    "Backend Engineer",
    "PostgreSQL",
    "PL/pgSQL",
    "Laravel",
    "PHP",
    "Docker",
    "AWS",
    "Botify-Agents",
    "Multi-Tenancy",
    "Event-Driven Architecture",
    "AI Automation",
    personal.location,
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} — ${personal.headline}`,
    description: personal.summary,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090A0F] text-[#F4F4F5] selection:bg-[#1E222D] selection:text-[#F4F4F5]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
