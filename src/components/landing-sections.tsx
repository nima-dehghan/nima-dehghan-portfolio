import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Braces,
  Cookie,
  Code2,
  Database,
  FileCode2,
  Image,
  Languages,
  Layers3,
  LockKeyhole,
  Radio,
  ShieldCheck,
  Timer,
  TestTube2,
  Video,
  type LucideIcon,
  ScanEye,
} from "lucide-react";
import {
  siAxios,
  siBaseui,
  siBlender,
  siDart,
  siDocker,
  siDotnet,
  siFlutter,
  siGit,
  siGithub,
  siJsonwebtokens,
  siLinux,
  siLinuxcontainers,
  siLucide,
  siNginx,
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

const backendGroupIcons = [Code2, Layers3, ShieldCheck, Activity];

const technologyLogos: Record<string, SimpleIcon> = {
  "C#": siDotnet,
  ".NET 10": siDotnet,
  "ASP.NET Core Web API": siDotnet,
  "Entity Framework Core": siDotnet,
  "ASP.NET Core Identity": siDotnet,
  "Swagger / OpenAPI": siSwagger,
  Redis: siRedis,
  "JWT Authentication": siJsonwebtokens,
  "React 19": siReact,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  "shadcn/ui": siShadcnui,
  "Base UI": siBaseui,
  "TanStack Query": siReactquery,
  "React Hook Form": siReacthookform,
  Zod: siZod,
  "Lucide React": siLucide,
  Axios: siAxios,
  Git: siGit,
  GitHub: siGithub,
  Flutter: siFlutter,
  Dart: siDart,
  Unity: siUnity,
  Blender: siBlender,
  Docker: siDocker,
  "Docker Compose": siDocker,
  Nginx: siNginx,
  Linux: siLinux,
  "Linux Containers": siLinuxcontainers,
};

const technologyConceptIcons: Record<string, LucideIcon> = {
  "REST API Development": Code2,
  Authorization: LockKeyhole,
  "Authentication & Authorization": LockKeyhole,
  "Cookie Authentication": Cookie,
  "Clean Architecture": Layers3,
  FluentValidation: ShieldCheck,
  "SQL Server": Database,
  "Database Design": Database,
  Testing: TestTube2,
  Hangfire: Timer,
  SignalR: Radio,
  Serilog: FileCode2,
  "Adobe Photoshop": Image,
  CapCut: Video,
  "Next.js 16": Code2,
  "next-intl": Languages,
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
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nima-dehghan-09b304426/" },
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
    { title: "API & application core", skills: ["C#", ".NET 10", "ASP.NET Core Web API", "REST API Development"] },
    { title: "Architecture & data", skills: ["Clean Architecture", "Entity Framework Core", "SQL Server", "Database Design", "Redis"] },
    { title: "Security & validation", skills: ["ASP.NET Core Identity", "JWT Authentication", "Cookie Authentication", "Authentication & Authorization", "FluentValidation"] },
    { title: "Authentication & security", skills: ["ASP.NET Core Identity", "JWT", "Role-Based Authorization", "Bearer Authentication", "Protected REST APIs"] },
    { title: "Real-time & background processing", skills: ["SignalR", "Hangfire", "Background Jobs", "Scheduled Jobs", "Real-Time Notifications", "Real-Time Support Chat"] },
    { title: "Observability & API tooling", skills: ["Serilog", "Swagger"] },
  ],
  fa: [
    { title: "هستهٔ API و برنامه", skills: ["C#", ".NET 10", "ASP.NET Core Web API", "REST API Development"] },
    { title: "معماری و داده", skills: ["Clean Architecture", "Entity Framework Core", "SQL Server", "Database Design", "Redis"] },
    { title: "امنیت و اعتبارسنجی", skills: ["ASP.NET Core Identity", "JWT Authentication", "Cookie Authentication", "Authentication & Authorization", "FluentValidation"] },
    { title: "احراز هویت و امنیت", skills: ["ASP.NET Core Identity", "JWT", "Role-Based Authorization", "Bearer Authentication", "Protected REST APIs"] },
    { title: "پردازش پس‌زمینه و بلادرنگ", skills: ["SignalR", "Hangfire", "Background Jobs", "Scheduled Jobs", "Real-Time Notifications", "Real-Time Support Chat"] },
    { title: "پایش و ابزارهای API", skills: ["Serilog", "Swagger"] },
  ],
};

const backendOperations = {
  en: [{ title: "Operations & quality", skills: ["Swagger / OpenAPI", "Serilog", "SignalR", "Hangfire", "Testing", "Docker", "Docker Compose", "Nginx", "Linux Containers"] }],
  fa: [{ title: "عملیات و کیفیت", skills: ["Swagger / OpenAPI", "Serilog", "SignalR", "Hangfire", "Testing", "Docker", "Docker Compose", "Nginx", "Linux Containers"] }],
};

const frontendSkills = ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Base UI", "TanStack Query", "Axios", "React Hook Form", "Zod", "next-intl", "Lucide React", "Git", "GitHub"];
const mobileSkills = ["Flutter", "Dart"];

export function LandingSections({ language }: { language: Language }) {
  const isPersian = language === "fa";
  const copy = isPersian
    ? {
        role: "توسعه‌دهندهٔ بک‌اند .NET · پژوهشگر بینایی ماشین",
        heading: "نیما دهقان",
        summary: "تمرکز حرفه‌ای من توسعهٔ بک‌اند با C# و ASP.NET Core است؛ پژوهش بینایی ماشین مسیری مکمل و پاره‌وقت برای من است.",
        researchCta: "مشاهدهٔ توسعهٔ بک‌اند",
        backendCta: "پیشینهٔ پژوهشی",
        readout: ["توسعهٔ بک‌اند .NET", "C# · ASP.NET Core", "پژوهش مکمل بینایی ماشین"],
        researchIndex: "۰۴ / پیشینه علمی",
        researchTitle: "پژوهش و پیشینهٔ دانشگاهی",
        researchIntro: "علاقه‌مند به طراحی و بهبود روش‌های بینایی ماشین و کاربرد آن‌ها در مسائل واقعی هستم.",
        researchItems: [
          ["01", "تشخیص شیء", "توسعه و بهبود معماری YOLO برای شناسایی دقیق اشیا."],
          ["02", "بینایی ماشین پزشکی", "بررسی کاربرد روش‌های بینایی ماشین در تحلیل تصاویر پزشکی."],
          ["03", "کاربردهای عمومی", "پژوهش در راهکارهای بینایی ماشین برای مسائل متنوع دنیای واقعی."],
        ],
        degree: "کارشناسی علوم کامپیوتر",
        gpa: "معدل ۱۸٫۳ از ۲۰",
        paper: "سه مقالهٔ پژوهشی در دست داوری هستند و هنوز منتشر نشده‌اند.",
        backendIndex: "۰۱ / تمرکز حرفه‌ای",
        backendTitle: "توسعهٔ بک‌اند با .NET",
        backendIntro: "تمرکز حرفه‌ای من ساخت APIها و سرویس‌های بک‌اند با C# و ASP.NET Core است؛ با توجه به معماری روشن، امنیت و نگهداشت‌پذیری.",
        coreTitle: "پشتهٔ اصلی بک‌اند",
        coreCopy: "ابزارهای اصلی مورد استفاده در پروژه‌های بک‌اند من.",
        implementationIndex: "پیاده‌سازی بک‌اند",
        implementationTitle: "از API تا قابلیت‌های واقعی",
        implementationIntro: "تمرکز بر ساختارهای کاربردی بک‌اند؛ بدون ادعای محصول، مشتری یا شاخصی که قابل تأیید نباشد.",
        implementation: [
          ["API و معماری", "سرویس‌های REST با ساختار لایه‌ای، اعتبارسنجی ورودی و قراردادهای API مستند."],
          ["هویت و دسترسی", "احراز هویت مبتنی بر Identity و JWT، به‌همراه مجوزدهی مبتنی بر نقش."],
          ["پردازش و ارتباط", "پردازش‌های زمان‌بندی‌شده با Hangfire و به‌روزرسانی‌های بلادرنگ با SignalR."],
        ],
        skillsIndex: "۰۲ / توسعهٔ فرانت‌اند وب",
        frontendTitle: "توسعهٔ فرانت‌اند وب",
        frontendCopy: "ساخت رابط‌های حرفه‌ای برای برنامه‌های مبتنی بر بک‌اند.",
        mobileTitle: "توسعهٔ اپلیکیشن موبایل",
        mobileCopy: "مهارت‌های توسعهٔ موبایل در کنار مسیر اصلی تخصصی.",
        creativeTitle: "علاقه‌مندی‌ها و مهارت‌های تکمیلی",
        creativeCopy: "آشنایی‌های تکمیلی؛ در اولویت پایین‌تر از پژوهش و توسعهٔ بک‌اند.",
        footer: "نیما دهقان · توسعه‌دهندهٔ بک‌اند .NET · پژوهشگر بینایی ماشین",
        technology: "فناوری‌ها",
        contactIndex: "۰۵ / ارتباط",
        contactTitle: "راه های ارتباطی با من",
        contactNote: "",
        socialAction: "باز کردن",
      }
    : {
        role: ".NET Backend Developer · Computer Vision Researcher",
        heading: "Nima Dehghan",
        summary: "My primary career focus is .NET backend development with C# and ASP.NET Core. Computer Vision remains a complementary, part-time research path.",
        researchCta: "Explore backend skills",
        backendCta: "Research background",
        readout: [".NET Backend Development", "C# · ASP.NET Core", "Complementary Computer Vision research"],
        researchIndex: "04 / ACADEMIC BACKGROUND",
        researchTitle: "Research & academic background",
        researchIntro: "I am interested in developing and improving Computer Vision methods and applying them to real problems.",
        researchItems: [
          ["01", "Object detection", "Developing and improving YOLO architectures for accurate object detection."],
          ["02", "Medical Computer Vision", "Exploring Computer Vision methods for medical image analysis."],
          ["03", "General-purpose vision", "Researching Computer Vision approaches across varied real-world applications."],
        ],
        degree: "B.Sc. in Computer Science",
        gpa: "GPA 18.3 / 20",
        paper: "Three research papers are currently under review and have not been published.",
        backendIndex: "01 / PRIMARY CAREER FOCUS",
        backendTitle: ".NET backend development",
        backendIntro: "My career focus is building APIs and backend services with C# and ASP.NET Core, with attention to clear architecture, security, and maintainability.",
        coreTitle: "Core backend stack",
        coreCopy: "The principal technologies I use across backend projects.",
        implementationIndex: "BACKEND IMPLEMENTATION",
        implementationTitle: "From APIs to real capabilities",
        implementationIntro: "Practical backend building blocks, without claims about unverified products, clients, or metrics.",
        implementation: [
          ["API & architecture", "REST services with layered structure, input validation, and documented API contracts."],
          ["Identity & access", "Identity and JWT-based authentication, with role-based authorization."],
          ["Processing & communication", "Scheduled processing with Hangfire and real-time updates with SignalR."],
        ],
        skillsIndex: "02 / WEB FRONTEND DEVELOPMENT",
        frontendTitle: "Web Frontend Development",
        frontendCopy: "Building professional frontends for backend-driven applications.",
        mobileTitle: "Mobile App Development",
        mobileCopy: "Additional mobile development skills alongside my core specialization.",
        creativeTitle: "Interests & Additional Skills",
        creativeCopy: "Additional familiarity, kept secondary to research and backend development.",
        footer: "Nima Dehghan · .NET Backend Developer · Computer Vision Researcher",
        technology: "TECHNOLOGIES",
        contactIndex: "05 / CONNECT",
        contactTitle: "Let’s connect",
        contactNote: "",
        socialAction: "Visit",
      };

  const researchPoints = isPersian
    ? [
        "پژوهشگر بینایی ماشین",
        "سه مقاله در حوزهٔ بینایی ماشین؛ در حال حاضر در دست داوری",
        "برنامه‌ریزی برای ادامهٔ پژوهش بینایی ماشین به‌صورت پاره‌وقت",
        "علاقه‌مند به ادامهٔ پژوهش از طریق تحصیلات تکمیلی",
        "دستیار آموزشی و حل تمرین درس شبکه‌های عصبی برای دانشجویان کارشناسی ارشد در دورهٔ کارشناسی",
        "انجام چندین پروژهٔ دانشگاهی و نرم‌افزاری باکیفیت در دورهٔ کارشناسی",
        "ارائهٔ چندین سخنرانی فنی و دانشگاهی در دورهٔ کارشناسی",
        "علاقه‌مند به یادگیری زبان‌های جدید",
        "کارشناسی علوم کامپیوتر",
      ]
    : [
        "Computer Vision researcher",
        "Three Computer Vision papers, currently under review",
        "Planning to continue Computer Vision research part-time",
        "Interested in continuing research through higher academic studies",
        "Teaching Assistant / Exercise Solver for a Master's Neural Networks course during BSc",
        "Completed multiple high-quality academic and software projects during BSc",
        "Delivered multiple technical and academic presentations during BSc",
        "Interested in learning new languages",
        "BSc in Computer Science",
      ];

  const interestGroups = isPersian
    ? [
        { title: "توسعهٔ بازی", skills: ["Unity", "Blender"] },
        { title: "تدوین ویدیو", skills: ["CapCut"] },
        { title: "ویرایش تصویر", skills: ["Adobe Photoshop"] },
      ]
    : [
        { title: "Game Development", skills: ["Unity", "Blender"] },
        { title: "Video Editing", skills: ["CapCut"] },
        { title: "Image Editing", skills: ["Adobe Photoshop"] },
      ];

  return (
    <main>
      <section id="top" className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">{copy.role}</span>
          <h1 className="hero-name">{copy.heading}</h1>
          <p className="hero-title">{isPersian ? "توسعه‌دهندهٔ بک‌اند .NET" : ".NET Backend Developer"}</p>
          <p className="hero-summary">{copy.summary}</p>
          <div className="hero-actions">
            <a className="action-primary" href="#backend">{copy.researchCta}<ArrowDown size={16} /></a>
            <a className="text-link" href="#research">{copy.backendCta}<ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-readout">
            {copy.readout.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section id="backend" className="content-section backend-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{copy.backendIndex}</span>
            <h2 className="section-title">{copy.backendTitle}</h2>
          </div>
          <p className="section-intro">{copy.backendIntro}</p>
        </div>
        <div className="skill-groups">
          {backendGroups[language].slice(0, 3).concat(backendOperations[language]).map((group, index) => {
            const Icon = backendGroupIcons[index] ?? Code2;
            return (
              <section className="backend-skill-group" key={group.title}>
                <h3><Icon size={17} aria-hidden="true" /><span>{group.title}</span></h3>
                <div className="tech-list">
                  {group.skills.map((skill) => <TechChip key={skill} skill={skill} />)}
                </div>
              </section>
            );
          })}
        </div>
        <div id="systems" className="implementation-subsection">
          <div className="section-heading">
            <div>
              <span className="section-index">{copy.implementationIndex}</span>
              <h3 className="section-title">{copy.implementationTitle}</h3>
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
        </div>
      </section>

      <section id="frontend" className="content-section supporting-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{isPersian ? "۰۲ / توسعهٔ فرانت‌اند وب" : "02 / WEB FRONTEND DEVELOPMENT"}</span>
            <h2 className="section-title">{copy.frontendTitle}</h2>
          </div>
          <p className="section-intro">{copy.frontendCopy}</p>
        </div>
        <div className="tech-list">{frontendSkills.map((skill) => <TechChip key={skill} skill={skill} />)}</div>
      </section>

      <section id="mobile" className="content-section supporting-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{isPersian ? "۰۳ / توسعهٔ موبایل" : "03 / MOBILE DEVELOPMENT"}</span>
            <h2 className="section-title">{copy.mobileTitle}</h2>
          </div>
          <p className="section-intro">{copy.mobileCopy}</p>
        </div>
        <div className="tech-list">{mobileSkills.map((skill) => <TechChip key={skill} skill={skill} />)}</div>
      </section>

      <section id="research" className="content-section research-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{copy.researchIndex}</span>
            <h2 className="section-title"><ScanEye size={24} aria-hidden="true" />{copy.researchTitle}</h2>
          </div>
        </div>
        <ul className="research-points">
          {researchPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <section id="interests" className="content-section interests-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{isPersian ? "۰۵ / تکمیلی" : "05 / SUPPLEMENTARY"}</span>
            <h2 className="section-title">{copy.creativeTitle}</h2>
          </div>
        </div>
        <div className="interests-grid">
          {interestGroups.map((group) => (
            <div className="interest-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tech-list">{group.skills.map((skill) => <TechChip key={skill} skill={skill} />)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{copy.contactIndex}</span>
            <h2 className="section-title">{copy.contactTitle}</h2>
          </div>
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
        {copy.contactNote ? <p className="contact-note">{copy.contactNote}</p> : null}
        <a className="action-primary contact-back-to-top" href="#top">
          {isPersian ? "بازگشت به بالا" : "Back to top"}
          <ArrowUpRight size={16} />
        </a>
      </section>
      <footer className="site-footer"><span>{copy.footer}</span><span>© {new Date().getFullYear()}</span></footer>
    </main>
  );
}
