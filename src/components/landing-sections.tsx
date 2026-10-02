import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  FileCode2,
  Image,
  Layers3,
  LockKeyhole,
  Radio,
  ShieldCheck,
  Timer,
  Video,
  type LucideIcon,
  ScanEye,
} from "lucide-react";
import {
  siBaseui,
  siBlender,
  siDart,
  siDotnet,
  siFlutter,
  siJsonwebtokens,
  siLucide,
  siNextdotjs,
  siPython,
  siReact,
  siReacthookform,
  siReactquery,
  siRedis,
  siShadcnui,
  siSwagger,
  siTailwindcss,
  siTypescript,
  siUnity,
  siZod,
  type SimpleIcon,
} from "simple-icons";
import type { Language } from "@/components/portfolio-experience";

const backendGroupIcons = [Code2, Layers3, Database, ShieldCheck, Radio, Activity];

const technologyLogos: Record<string, SimpleIcon> = {
  "C#": siDotnet,
  ".NET 10": siDotnet,
  "ASP.NET Core Web API": siDotnet,
  "Entity Framework Core 10": siDotnet,
  "ASP.NET Core Identity": siDotnet,
  "EF Core Migrations": siDotnet,
  Swagger: siSwagger,
  Redis: siRedis,
  JWT: siJsonwebtokens,
  "Next.js 16": siNextdotjs,
  "React 19": siReact,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  "shadcn/ui": siShadcnui,
  "Base UI": siBaseui,
  "TanStack Query": siReactquery,
  "React Hook Form": siReacthookform,
  Zod: siZod,
  "next-intl": siNextdotjs,
  "Lucide React": siLucide,
  Flutter: siFlutter,
  Dart: siDart,
  Unity: siUnity,
  Blender: siBlender,
  Python: siPython,
};

const technologyConceptIcons: Record<string, LucideIcon> = {
  "RESTful APIs": Code2,
  "Protected REST APIs": LockKeyhole,
  "Clean Architecture": Layers3,
  FluentValidation: ShieldCheck,
  "SQL Server": Database,
  "Hangfire Storage": Timer,
  Hangfire: Timer,
  "Background Jobs": Timer,
  "Scheduled Jobs": Timer,
  SignalR: Radio,
  "Real-Time Notifications": Radio,
  "Real-Time Support Chat": Radio,
  Serilog: FileCode2,
  Photoshop: Image,
  CapCut: Video,
  "Image editing": Image,
  "AI tools": BrainCircuit,
};

function TechnologyIcon({ technology }: { technology: string }) {
  const normalizedTechnology = technology.split(" · ")[0];
  const logo = technologyLogos[normalizedTechnology];

  if (logo) {
    return (
      <svg
        className="tech-chip-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={logo.path} />
      </svg>
    );
  }

  const Icon = technologyConceptIcons[normalizedTechnology] ?? Braces;
  return <Icon className="tech-chip-icon" aria-hidden="true" />;
}

function TechChip({ skill }: { skill: string }) {
  return (
    <span className="tech-chip">
      <TechnologyIcon technology={skill} />
      <span>{skill}</span>
    </span>
  );
}

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/your-handle/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/your-profile/" },
  { name: "YouTube", href: "https://www.youtube.com/@your-channel" },
  { name: "Threads", href: "https://www.threads.net/@your-handle" },
] as const;

type SocialPlatform = "Instagram" | "LinkedIn" | "YouTube" | "Threads" | "X";

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "X") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.9 1.15h3.68l-8.04 9.2L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93ZM17.61 20.58h2.04L6.47 3.3H4.28Z" fill="currentColor" />
      </svg>
    );
  }

  if (platform === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.7" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (platform === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 9v10M5 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 10v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (platform === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 8.2a2.5 2.5 0 0 0-1.75-1.76C17.7 6 12 6 12 6s-5.7 0-7.25.44A2.5 2.5 0 0 0 3 8.2 26 26 0 0 0 2.6 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.75 1.76C6.3 18 12 18 12 18s5.7 0 7.25-.44A2.5 2.5 0 0 0 21 15.8a26 26 0 0 0 .4-3.8 26 26 0 0 0-.4-3.8Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5c-4.5 0-7.4 3.1-7.4 8.1 0 5.2 2.7 8.9 7.3 8.9 3.2 0 5.2-1.8 5.2-4.4 0-2.5-1.8-4.2-4.4-4.2-1.9 0-3.2 1.1-3.2 2.7 0 1.3.9 2.2 2.2 2.2 1.1 0 1.8-.7 1.8-1.8 0-2.5-2.2-4.3-5.1-4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const backendGroups = {
  en: [
    { title: "API & application core", skills: ["C#", ".NET 10", "ASP.NET Core Web API", "RESTful APIs"] },
    { title: "Architecture & validation", skills: ["Clean Architecture", "Entity Framework Core 10", "FluentValidation", "Swagger"] },
    { title: "Database & data", skills: ["SQL Server", "EF Core Migrations", "Redis", "Hangfire Storage"] },
    { title: "Authentication & security", skills: ["ASP.NET Core Identity", "JWT", "Role-Based Authorization", "Bearer Authentication", "Protected REST APIs"] },
    { title: "Real-time & background processing", skills: ["SignalR", "Hangfire", "Background Jobs", "Scheduled Jobs", "Real-Time Notifications", "Real-Time Support Chat"] },
    { title: "Observability & API tooling", skills: ["Serilog", "Swagger"] },
  ],
  fa: [
    { title: "هستهٔ API و برنامه", skills: ["C#", ".NET 10", "ASP.NET Core Web API", "RESTful APIs"] },
    { title: "معماری و اعتبارسنجی", skills: ["Clean Architecture", "Entity Framework Core 10", "FluentValidation", "Swagger"] },
    { title: "پایگاه داده و ذخیره‌سازی", skills: ["SQL Server", "EF Core Migrations", "Redis", "Hangfire Storage"] },
    { title: "احراز هویت و امنیت", skills: ["ASP.NET Core Identity", "JWT", "Role-Based Authorization", "Bearer Authentication", "Protected REST APIs"] },
    { title: "پردازش پس‌زمینه و بلادرنگ", skills: ["SignalR", "Hangfire", "Background Jobs", "Scheduled Jobs", "Real-Time Notifications", "Real-Time Support Chat"] },
    { title: "پایش و ابزارهای API", skills: ["Serilog", "Swagger"] },
  ],
};

const frontendSkills = ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Base UI", "TanStack Query", "React Hook Form", "Zod", "next-intl", "Lucide React"];
const creativeSkills = {
  en: ["Unity", "Blender", "Photoshop", "CapCut · video editing", "Image editing", "AI tools"],
  fa: ["Unity", "Blender", "Photoshop", "CapCut · تدوین ویدیو", "ویرایش تصویر", "ابزارهای هوش مصنوعی"],
};

export function LandingSections({ language }: { language: Language }) {
  const isPersian = language === "fa";
  const copy = isPersian
    ? {
        role: "پژوهشگر بینایی ماشین · توسعه‌دهندهٔ بک‌اند دات‌نت",
        heading: "نیما دهقان",
        summary: "پژوهش در بینایی ماشین و ساخت سامانه‌های بک‌اند با .NET و ASP.NET Core. با مسئولیت‌پذیری کار می‌کنم و هر وظیفه را با دقت تا پایان پیش می‌برم.",
        researchCta: "مشاهدهٔ حوزه‌های پژوهش",
        backendCta: "مسیر توسعهٔ بک‌اند",
        readout: ["علوم کامپیوتر", "معدل ۱۸٫۳ از ۲۰", "۳ مقاله در دست داوری"],
        researchIndex: "۰۱ / پژوهش",
        researchTitle: "بینایی ماشین، در کانون کار پژوهشی من",
        researchIntro: "علاقه‌مند به طراحی و بهبود روش‌های بینایی ماشین و کاربرد آن‌ها در مسائل واقعی هستم.",
        researchItems: [
          ["01", "تشخیص شیء", "توسعه و بهبود معماری YOLO برای شناسایی دقیق اشیا."],
          ["02", "بینایی ماشین پزشکی", "بررسی کاربرد روش‌های بینایی ماشین در تحلیل تصاویر پزشکی."],
          ["03", "کاربردهای عمومی", "پژوهش در راهکارهای بینایی ماشین برای مسائل متنوع دنیای واقعی."],
        ],
        degree: "کارشناسی علوم کامپیوتر",
        gpa: "معدل ۱۸٫۳ از ۲۰",
        paper: "سه مقالهٔ پژوهشی در دست داوری هستند و هنوز منتشر نشده‌اند.",
        backendIndex: "۰۲ / تخصص حرفه‌ای",
        backendTitle: "توسعهٔ بک‌اند با .NET",
        backendIntro: "تمرکز حرفه‌ای من ساخت APIها و سرویس‌های بک‌اند با C# و ASP.NET Core است؛ با توجه به معماری روشن، امنیت و نگهداشت‌پذیری.",
        coreTitle: "پشتهٔ اصلی بک‌اند",
        coreCopy: "ابزارهای اصلی مورد استفاده در پروژه‌های بک‌اند من.",
        implementationIndex: "۰۳ / پیاده‌سازی",
        implementationTitle: "از API تا قابلیت‌های واقعی",
        implementationIntro: "تمرکز بر ساختارهای کاربردی بک‌اند؛ بدون ادعای محصول، مشتری یا شاخصی که قابل تأیید نباشد.",
        implementation: [
          ["API و معماری", "سرویس‌های REST با ساختار لایه‌ای، اعتبارسنجی ورودی و قراردادهای API مستند."],
          ["هویت و دسترسی", "احراز هویت مبتنی بر Identity و JWT، به‌همراه مجوزدهی مبتنی بر نقش."],
          ["پردازش و ارتباط", "پردازش‌های زمان‌بندی‌شده با Hangfire و به‌روزرسانی‌های بلادرنگ با SignalR."],
        ],
        skillsIndex: "۰۴ / مهارت‌های تکمیلی",
        frontendTitle: "فرانت‌اند · مهارت پشتیبان",
        frontendCopy: "برای ساخت رابط‌های کاربردی، در کنار تمرکز اصلی بر بک‌اند.",
        mobileTitle: "موبایل",
        mobileCopy: "مهارت‌های توسعهٔ موبایل در کنار مسیر اصلی تخصصی.",
        creativeTitle: "مهارت‌های خلاقانه و تکمیلی",
        creativeCopy: "آشنایی‌های تکمیلی؛ در اولویت پایین‌تر از پژوهش و توسعهٔ بک‌اند.",
        closingEyebrow: "رویکرد کاری",
        closingTitle: "مسئولیت کار را می‌پذیرم و آن را دقیق و کامل پیش می‌برم.",
        closingCopy: "تمرکز من میان پژوهش در بینایی ماشین و ساخت بک‌اند حرفه‌ای با .NET قرار دارد؛ با دقت، تعهد و توجه به کیفیت اجرا.",
        footer: "نیما دهقان · پژوهشگر بینایی ماشین و توسعه‌دهندهٔ بک‌اند .NET",
        technology: "فناوری‌ها",
        contactIndex: "۰۵ / ارتباط",
        contactTitle: "در ارتباط باشیم",
        contactIntro: "برای گفت‌وگو دربارهٔ پژوهش، بینایی ماشین، رباتیک و مهندسی نرم‌افزار.",
        contactNote: "پیوندهای شبکه‌های اجتماعی موقت هستند و بعداً به‌روزرسانی می‌شوند.",
        socialAction: "باز کردن",
      }
    : {
        role: "Computer Vision Researcher · .NET Backend Developer",
        heading: "Nima Dehghan",
        summary: "I work across Computer Vision research and backend systems built with .NET and ASP.NET Core. I take responsibility for assigned work and carry it through carefully.",
        researchCta: "Explore research",
        backendCta: "Backend focus",
        readout: ["B.Sc. Computer Science", "GPA 18.3 / 20", "3 papers under review"],
        researchIndex: "01 / RESEARCH",
        researchTitle: "Computer Vision at the center of my research",
        researchIntro: "I am interested in developing and improving Computer Vision methods and applying them to real problems.",
        researchItems: [
          ["01", "Object detection", "Developing and improving YOLO architectures for accurate object detection."],
          ["02", "Medical Computer Vision", "Exploring Computer Vision methods for medical image analysis."],
          ["03", "General-purpose vision", "Researching Computer Vision approaches across varied real-world applications."],
        ],
        degree: "B.Sc. in Computer Science",
        gpa: "GPA 18.3 / 20",
        paper: "Three research papers are currently under review and have not been published.",
        backendIndex: "02 / CAREER FOCUS",
        backendTitle: ".NET backend development",
        backendIntro: "My career focus is building APIs and backend services with C# and ASP.NET Core, with attention to clear architecture, security, and maintainability.",
        coreTitle: "Core backend stack",
        coreCopy: "The principal technologies I use across backend projects.",
        implementationIndex: "03 / IMPLEMENTATION",
        implementationTitle: "From APIs to real capabilities",
        implementationIntro: "Practical backend building blocks, without claims about unverified products, clients, or metrics.",
        implementation: [
          ["API & architecture", "REST services with layered structure, input validation, and documented API contracts."],
          ["Identity & access", "Identity and JWT-based authentication, with role-based authorization."],
          ["Processing & communication", "Scheduled processing with Hangfire and real-time updates with SignalR."],
        ],
        skillsIndex: "04 / SUPPORTING SKILLS",
        frontendTitle: "Frontend · supporting skill",
        frontendCopy: "For building useful interfaces alongside my primary backend focus.",
        mobileTitle: "Mobile",
        mobileCopy: "Additional mobile development skills alongside my core specialization.",
        creativeTitle: "Additional / creative skills",
        creativeCopy: "Additional familiarity, kept secondary to research and backend development.",
        closingEyebrow: "Working approach",
        closingTitle: "I take ownership of assigned work and carry it through with care.",
        closingCopy: "My focus connects Computer Vision research with a professional .NET backend career, guided by responsibility, care, and attention to implementation quality.",
        footer: "Nima Dehghan · Computer Vision Researcher & .NET Backend Developer",
        technology: "TECHNOLOGIES",
        contactIndex: "05 / CONNECT",
        contactTitle: "Let’s connect",
        contactIntro: "For conversations about research, computer vision, robotics, and software engineering.",
        contactNote: "Social links are temporary placeholders and will be updated.",
        socialAction: "Visit",
      };

  return (
    <main>
      <section id="top" className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">{copy.role}</span>
          <h1 className="hero-name">
            {copy.heading}
          </h1>
          <p className="hero-title">{isPersian ? "پژوهشگر بینایی ماشین" : "Computer Vision Researcher"}</p>
          <p className="hero-summary">{copy.summary}</p>
          <div className="hero-actions">
            <a className="action-primary" href="#research">{copy.researchCta}<ArrowDown size={16} /></a>
            <a className="text-link" href="#backend">{copy.backendCta}<ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-readout">
            {copy.readout.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section id="research" className="content-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{copy.researchIndex}</span>
            <h2 className="section-title">{copy.researchTitle}</h2>
          </div>
          <p className="section-intro">{copy.researchIntro}</p>
        </div>
        <div className="research-grid">
          {copy.researchItems.map(([number, title, description]) => (
            <article className="research-item" key={number}>
              <span className="item-number">/{number}</span>
              <h3 className="item-title">{title}</h3>
              <p className="item-copy">{description}</p>
            </article>
          ))}
        </div>
        <div className="academic-strip">
          <ScanEye size={19} color="var(--cyan)" aria-hidden="true" />
          <span>{copy.degree}</span>
          <strong>{copy.gpa}</strong>
        </div>
        <p className="review-note"><span aria-hidden="true">↳</span><span>{copy.paper}</span></p>
      </section>

      <section id="backend" className="content-section backend-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{copy.backendIndex}</span>
            <h2 className="section-title">{copy.backendTitle}</h2>
          </div>
          <p className="section-intro">{copy.backendIntro}</p>
        </div>
        <div className="backend-core">
          <div>
            <h3>{copy.coreTitle}</h3>
            <p>{copy.coreCopy}</p>
          </div>
          <div className="tech-list">
            {["C#", ".NET 10", "ASP.NET Core Web API", "Entity Framework Core 10", "SQL Server"].map((skill) => <TechChip key={skill} skill={skill} />)}
          </div>
        </div>
        <div className="skill-groups">
          {backendGroups[language].map((group, index) => (
            <details className="skill-group" key={group.title} open={index === 0}>
              <summary>
                {(() => {
                  const Icon = backendGroupIcons[index];
                  return Icon ? <Icon size={16} aria-hidden="true" /> : null;
                })()}
                <span>{group.title}</span>
              </summary>
              <div className="tech-list">
                {group.skills.map((skill) => <TechChip key={skill} skill={skill} />)}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section id="systems" className="content-section implementation-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{copy.implementationIndex}</span>
            <h2 className="section-title">{copy.implementationTitle}</h2>
          </div>
          <p className="section-intro">{copy.implementationIntro}</p>
        </div>
        <div className="implementation-grid">
          {copy.implementation.map(([title, description], index) => (
            <article className="implementation-item" key={title}>
              <span className="item-number">0{index + 1}</span>
              <h3 className="item-title">{title}</h3>
              <p className="item-copy">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section">
        <span className="section-index">{copy.skillsIndex}</span>
        <div className="support-sections">
          <section className="support-section">
            <span className="eyebrow">{copy.technology}</span>
            <h2>{copy.frontendTitle}</h2>
            <p>{copy.frontendCopy}</p>
            <details className="skill-group">
              <summary>{isPersian ? "نمایش فناوری‌های فرانت‌اند" : "Show frontend technologies"}</summary>
              <div className="tech-list">{frontendSkills.map((skill) => <TechChip key={skill} skill={skill} />)}</div>
            </details>
          </section>
          <section className="support-section mobile-section">
            <span className="eyebrow">{isPersian ? "توسعهٔ تکمیلی" : "ADDITIONAL DEVELOPMENT"}</span>
            <h2>{copy.mobileTitle}</h2>
            <p>{copy.mobileCopy}</p>
            <div className="tech-list"><TechChip skill="Flutter" /><TechChip skill="Dart" /></div>
          </section>
        </div>
        <section className="support-section creative-section">
          <h2>{copy.creativeTitle}</h2>
          <p>{copy.creativeCopy}</p>
          <details className="skill-group">
            <summary>{isPersian ? "نمایش مهارت‌های تکمیلی" : "Show additional skills"}</summary>
            <div className="tech-list">{creativeSkills[language].map((skill) => <TechChip key={skill} skill={skill} />)}</div>
          </details>
        </section>
      </section>

      <section className="content-section closing-section">
        <div>
          <span className="eyebrow">{copy.closingEyebrow}</span>
          <h2>{copy.closingTitle}</h2>
          <p>{copy.closingCopy}</p>
        </div>
        <a className="action-primary" href="#top">{isPersian ? "بازگشت به بالا" : "Back to top"}<ArrowUpRight size={16} /></a>
      </section>
      <section id="contact" className="content-section contact-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{copy.contactIndex}</span>
            <h2 className="section-title">{copy.contactTitle}</h2>
          </div>
          <p className="section-intro">{copy.contactIntro}</p>
        </div>
        <div className="social-grid">
          {socialLinks.map(({ name, href }) => (
            <a
              className="social-link"
              href={href}
              key={name}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} — ${copy.socialAction}`}
            >
              <SocialIcon platform={name} />
              <span>{name}</span>
              <ArrowUpRight className="social-arrow" size={16} aria-hidden="true" />
            </a>
          ))}
          <a
            className="social-link"
            href="https://x.com/your-handle"
            target="_blank"
            rel="noreferrer"
            aria-label={`X — ${copy.socialAction}`}
          >
            <SocialIcon platform="X" />
            <span>X</span>
            <ArrowUpRight className="social-arrow" size={16} aria-hidden="true" />
          </a>
        </div>
        <p className="contact-note">{copy.contactNote}</p>
      </section>
      <footer className="site-footer"><span>{copy.footer}</span><span>© {new Date().getFullYear()}</span></footer>
    </main>
  );
}
