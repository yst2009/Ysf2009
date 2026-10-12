export interface Metric {
  label: string;
  value: string;
}

export interface ExperienceItem {
  type: "Startup" | "Freelance";
  title: string;
  role?: string;
  period: string;
  subtitle?: string;
  points: string[];
  link?: string;
  techStack?: string[];
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  githubUrl?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  location: string;
  description: string;
  verifyUrl?: string;
}

export const portfolioData = {
  // بيانات التواصل والهوية
  personal: {
    name: "YOUSSEF MOHAMAD",
    headline: "Backend Engineer | AI Automation | Founder, Botify-Agents",
    email: "youssef.mohamad.dev@gmail.com",
    phone: "01028086887",
    location: "Egypt",
    github: "https://github.com/yst2009",
    linkedin: "https://linkedin.com/in/youssef-mohamad-1464293ab",
    summary:
      "Backend Engineer specialized in building scalable, multi-tenant architectures and event-driven automation pipelines. Strong command of advanced PostgreSQL (PL/pgSQL, performance tuning) and production deployments using Docker, AWS, and Cloudflare for secure, high-concurrency systems. Currently building Botify-Agents, a multi-tenant AI sales platform for real estate.",
  },

  // التعليم
  education: {
    institution: "El Sewedy International School for Applied Technology & Software",
    degree: "High School Diploma (Grade 12)",
    expectedGraduation: "Expected Graduation: 2027",
  },

  // الخبرات (Founder & Freelance)
  experiences: [
    {
      type: "Startup",
      title: "Botify-Agents",
      role: "Founder / Startup Project",
      period: "03/2026 – Present",
      subtitle: "Multi-tenant AI sales automation platform for real estate brokerages (Dextra-tech)",
      link: "https://github.com/yst2009/botify-ai-landing-page",
      points: [
        "AI agents handle WhatsApp text/voice leads, match live inventory, and send photos to help close deals.",
        "Architected a multi-tenant SaaS using Redis & Supabase (PostgreSQL), achieving 9s text / 15s voice / 12s image response latency with strict tenant isolation.",
        "Built a full executive dashboard (Analytics, Chat Panel, Inventory, CRM, Billing) for multi-tenant SaaS management.",
      ],
      techStack: ["React", "n8n", "Supabase", "PostgreSQL", "Redis", "Cloudflare", "WhatsApp Cloud API", "Docker"],
    },
    {
      type: "Freelance",
      title: "NileFlow AI",
      role: "Freelance Backend & Automation Engineer",
      period: "09/2026 – 09/2026",
      subtitle: "Voice-driven B2B pharmaceutical ordering and inventory platform built across 3 integrated subsystems",
      link: "https://github.com/yst2009/Nile-Flow-ai/",
      points: [
        "Subsystem 1 (Voice Ingestion & In-DB Search): Built a phonetic search engine via PostgreSQL pg_trgm to resolve medical voice typos, backed by PL/pgSQL & json_agg routines cutting latency to 5s text / 10s voice.",
        "Subsystem 2 (Automated Supabase Ingestion): Engineered an event-driven dispatch pipeline that captures finalized orders and synchronizes records directly into Supabase in real-time.",
        "Subsystem 3 (Microsoft 365 Cloud File Sync): Built an automated cloud pipeline watching Microsoft 365 / Excel files to continuously ingest new pharma inventory and catalog updates into the database.",
      ],
      techStack: ["PostgreSQL", "Supabase", "PL/pgSQL", "pg_trgm", "Microsoft 365", "Webhooks", "ETL"],
    },
  ] as ExperienceItem[],

  // المشاريع المستقلة مع روابط الـ GitHub
  projects: [
    {
      title: "Content Agent Platform",
      period: "01/2026 – 02/2026",
      description:
        "Built a reusable multi-tenant n8n platform turning Telegram into a company-specific AI agent, with per-company data isolation and hallucination-safe prompt logic.",
      githubUrl: "https://github.com/yst2009/Content-Agent-Platform",
    },
    {
      title: "Projex Go",
      period: "12/2025 – 01/2026",
      description:
        "Built a role-based platform connecting investors, mentors, and startup teams, with full project lifecycle management and per-role analytics dashboards.",
      githubUrl: "https://github.com/yst2009/Projex-Go",
    },
    {
      title: "School Management System",
      period: "10/2025 – 11/2025",
      description:
        "Built a multi-branch school ERP with GPA calculation, attendance tracking, automated PDF report cards, and Zoom integration.",
      githubUrl: "https://github.com/yst2009/School_Management",
    },
    {
      title: "Invoice Management System",
      period: "06/2025 – 08/2025",
      description:
        "Built a multi-tenant invoicing SaaS with 37 granular RBAC permissions, automated PDF generation, and Arabic RTL support.",
      githubUrl: "https://github.com/yst2009/Invoices",
    },
    {
      title: "WhatsApp Translation Automation Service",
      period: "04/2025 – 05/2025",
      description:
        "Built a 70+ node n8n workflow automating PDF requests, payment verification, and scheduled document delivery via WhatsApp.",
      githubUrl: "https://github.com/yst2009/-n8n-whatsapp-automation",
    },
  ] as ProjectItem[],

  // المهارات التقنية المصنفة
  technicalSkills: {
    backend: [
      "PHP",
      "Laravel",
      "RESTful APIs Design",
      "Webhooks & Event-Driven Architecture",
      "Multi-Tenancy Architecture",
      "Authentication & Access Control (JWT, API Keys, Granular RBAC)",
      "API Performance & Rate Limiting",
    ],
    databaseAndStorage: [
      "PostgreSQL & Supabase: Advanced PL/pgSQL, triggers, pg_trgm fuzzy search, JSON aggregation for high-concurrency systems",
      "MySQL: Relational schema design, ACID transactions, and granular RBAC for enterprise ERPs",
      "Redis: In-memory caching, message queues, and distributed state management",
    ],
    automationAndWorkflow: [
      "n8n Orchestration",
      "Meta WhatsApp Cloud API",
      "Gemini API & Tool Calling",
      "Data Pipelines & Webhooks",
    ],
    infrastructureAndDevOps: [
      "AWS (EC2, Cloud Hosting)",
      "Docker",
      "PaaS Deployment (Railway, Render)",
      "Cloudflare (DNS, SSL, Edge Security)",
      "Linux/Ubuntu Server Management",
    ],
    hardwareAndEmbedded: [
      "Bare-Metal & Drivers: Developed low-level C drivers for ATmega MCUs, working directly with registers and protocols (UART, SPI, I2C)",
      "Hardware Interfacing: Built functional prototypes interfacing RFID and sensors with host systems via serial logging",
    ],
  },

  // اللغات
  languages: [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Professional Working Proficiency" },
  ],

  // الشهادات مع روابط الإثبات
  certifications: [
    {
      title: "Back-end Laravel Training Program",
      issuer: "Huma Volve",
      period: "06/2026",
      location: "Cairo, Egypt",
      description:
        "Completed an intensive enterprise-grade Laravel training by Huma Volve, focusing on scalable API design and performance-driven backend engineering.",
      verifyUrl: "https://github.com/yst2009/Certifications/blob/main/Back%20End%20Training.jpg",
    },
    {
      title: "Back-end Web Development Certification",
      issuer: "Eraasoft Company",
      period: "09/2025 – 01/2026",
      location: "Cairo, Egypt",
      description:
        "Professional Backend Development certification, covering core architectural patterns, database management, and scalable server-side logic.",
      verifyUrl: "https://github.com/yst2009/Certifications/blob/main/Certificate%20of%20Erasoft%20Company.pdf",
    },
  ] as CertificationItem[],
};
