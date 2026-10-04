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
  siRos,
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
  "Swagger": siSwagger,
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
  "Linux Environment (Ubuntu/WSL)": siLinux,
  "Robotics Simulation (ROS2, Gazebo)": siRos,
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
  "AI Prompt Engineering": Braces,
  "AI-Driven Multimedia Generation (Image, Video, Audio)": Layers3,
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
      <span dir="ltr" style={{ unicodeBidi: "isolate" }}>
        {skill}
      </span>
    </span>
  );
}


const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/nima.dehghan.banadaki" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nima-dehghan-09b304426" },
  { name: "YouTube", href: "https://www.youtube.com/@nima-dehghan-banadaki" },
  { name: "Threads", href: "https://www.threads.com/nima.dehghan.banadaki" },
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
    { title: "هسته API و برنامه", skills: ["C#", ".NET 10", "ASP.NET Core Web API", "REST API Development"] },
    { title: "معماری و داده", skills: ["Clean Architecture", "Entity Framework Core", "SQL Server", "Database Design", "Redis"] },
    { title: "امنیت و اعتبارسنجی", skills: ["ASP.NET Core Identity", "JWT Authentication", "Cookie Authentication", "Authentication & Authorization", "FluentValidation"] },
    { title: "احراز هویت و امنیت", skills: ["ASP.NET Core Identity", "JWT", "Role-Based Authorization", "Bearer Authentication", "Protected REST APIs"] },
    { title: "پردازش پس‌زمینه و بلادرنگ", skills: ["SignalR", "Hangfire", "Background Jobs", "Scheduled Jobs", "Real-Time Notifications", "Real-Time Support Chat"] },
    { title: "پایش و ابزارهای API", skills: ["Serilog", "Swagger"] },
  ],
};

const backendOperations = {
  en: [{ title: "Operations & quality", skills: ["Swagger", "Serilog", "SignalR", "Hangfire", "Testing", "Docker", "Docker Compose", "Nginx", "Linux Containers"] }],
  fa: [{ title: "عملیات و کیفیت", skills: ["Swagger", "Serilog", "SignalR", "Hangfire", "Testing", "Docker", "Docker Compose", "Nginx", "Linux Containers"] }],
};

const frontendSkills = ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Base UI", "TanStack Query", "Axios", "React Hook Form", "Zod", "next-intl", "Lucide React", "Git", "GitHub"];
const mobileSkills = ["Flutter", "Dart"];


export function LandingSections({ language }: { language: Language }) {
  const isPersian = language === "fa";

  const DotNet = <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>.NET</span>;
  const CSharp = <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>C#</span>;
  const AspNetCore = <span dir="ltr" style={{ unicodeBidi: 'isolate' }}>ASP.NET Core</span>;


  const copy = isPersian
    ? {
        role: (<> توسعه‌دهنده بک‌اند {DotNet} </>),
        heading: "نیما دهقان",
        summary: (
          <>
            تعهد به کیفیت و مسئولیت‌پذیری، رکن اصلی کاری من در تمامی پروژه‌هاست. توسعه‌دهنده {DotNet} با تمرکز بر طراحی زیرساخت‌های مقیاس‌پذیر و پایدار؛ دارای کارشناسی کامپیوتر (معدل ۱۸.۳/۲۰) و ۳ مقاله در حوزه بینایی ماشین، به‌همراه تجربه توسعه سرویس‌های فول‌ استک.
          </>
        ),
        researchCta: "مهارت‌های فنی",
        backendCta: "پیشینه علمی",
        readout: [DotNet, CSharp, AspNetCore],
        researchIndex: "۰۴ / پیشینه علمی",
        researchTitle: "پژوهش و پیشینه دانشگاهی",
        researchIntro:
          "علاقه‌مند به طراحی و بهبود روش‌های بینایی ماشین و کاربرد آن‌ها در مسائل واقعی هستم.",
        researchItems: [
          ["01", "تشخیص شیء", "توسعه و بهبود معماری YOLO برای شناسایی دقیق اشیا."],
          ["02", "بینایی ماشین پزشکی", "بررسی کاربرد روش‌های بینایی ماشین در تحلیل تصاویر پزشکی."],
          ["03", "کاربردهای عمومی", "پژوهش در راهکارهای بینایی ماشین برای مسائل متنوع دنیای واقعی."],
        ],
        degree: "کارشناسی علوم کامپیوتر",
        gpa: "معدل ۱۸٫۳ از ۲۰",
        paper: "سه مقاله پژوهشی در دست داوری هستند و هنوز منتشر نشده‌اند.",
        backendIndex: "۰۱ / تمرکز حرفه‌ای",
        backendTitle: (<>توسعه بک‌اند با {DotNet}</>),
        backendIntro: (
          <>
            تمرکز حرفه‌ای من ساخت APIها و سرویس‌های بک‌اند با {CSharp} و {AspNetCore} است؛ با توجه به معماری روشن، امنیت و نگهداشت‌پذیری.
          </>
        ),

        supportingSkillsEyebrow: "مهارت‌های تکمیلی در صورت نیاز",

        coreTitle: "پشته اصلی بک‌اند",
        coreCopy: "ابزارهای اصلی مورد استفاده در پروژه‌های بک‌اند من.",
        implementationIndex: "پیاده‌سازی بک‌اند",
        implementationTitle: "از API تا قابلیت‌های واقعی",
        implementationIntro: "تمرکز بر طراحی زیرساخت‌های بک‌اند مقیاس‌پذیر و تمیز",
        implementation: [
          [
            "API و معماری",
            "طراحی RESTful API، معماری لایه‌ای و مستندسازی با Swagger",
          ],
          [
            "امنیت و احراز هویت",
            "مدیریت کاربران با Identity، JWT و کنترل دسترسی (RBAC)",
          ],
          [
            "پردازش و ارتباطات",
            "مدیریت وظایف با Hangfire و ارتباطات همزمان با SignalR",
          ],
        ],
        skillsIndex: "۰۲ / توسعه فرانت‌اند وب",
        frontendTitle: "توسعه فرانت‌اند و (SEO)",
        frontendCopy: "توسعه رابط کاربری واکنش‌گرا با React & Next.js",
        mobileTitle: "توسعه اپلیکیشن‌های Cross-Platform",
        mobileCopy: "Develop Android, iOS, Windows & macOS",
        creativeTitle: "تجربه کار با ابزارهای جانبی",
        creativeCopy:
          "آشنایی‌های تکمیلی؛ در اولویت پایین‌تر از پژوهش و توسعه بک‌اند.",
        footer: (<>نیما دهقان · توسعه‌دهنده بک‌اند {DotNet}</>),
        technology: "فناوری‌ها",
        contactIndex: "۰۶ / ارتباط",
        contactTitle: "راه های ارتباطی با من",
        contactNote: "",
        socialAction: "باز کردن",
      }
    : {
        role: ".NET Backend Developer",
        heading: "Nima Dehghan",
        summary:
          "Commitment to quality and responsibility is a core principle of my work across all projects. .NET Developer focused on designing scalable and reliable backend infrastructure; B.Sc. in Computer Science (GPA 18.3/20), with three Computer Vision research papers and experience developing full-stack services.",
        researchCta: "Technical Skills",
        backendCta: "Academic Background",
        readout: [DotNet, CSharp, AspNetCore],
        researchIndex: "04 / ACADEMIC BACKGROUND",
        researchTitle: "Research & Academic Background",
        researchIntro:
          "I am interested in designing and improving Computer Vision methods and applying them to real-world problems.",
        researchItems: [
          [
            "01",
            "Object Detection",
            "Developing and improving YOLO architectures for accurate object detection.",
          ],
          [
            "02",
            "Medical Computer Vision",
            "Exploring the application of Computer Vision methods to medical image analysis.",
          ],
          [
            "03",
            "General Applications",
            "Researching Computer Vision solutions for diverse real-world problems.",
          ],
        ],
        degree: "B.Sc. in Computer Science",
        gpa: "GPA 18.3 / 20",
        paper:
          "Three research papers are currently under review and have not yet been published.",
        backendIndex: "01 / PROFESSIONAL FOCUS",
        backendTitle: ".NET Backend Development",
        backendIntro:
          "My professional focus is building backend APIs and services with C# and ASP.NET Core, with an emphasis on clear architecture, security, and maintainability.",
        
        supportingSkillsEyebrow: "Supporting skills when needed",
        coreTitle: "Core Backend Stack",
        coreCopy:
          "The primary technologies I use across my backend projects.",
        implementationIndex: "BACKEND IMPLEMENTATION",
        implementationTitle: "From APIs to Real Capabilities",
        implementationIntro:
          "Focused on designing clean and scalable backend infrastructure.",
        implementation: [
          [
            "API & Architecture",
            "Designing RESTful APIs, layered architecture, and API documentation with Swagger.",
          ],
          [
            "Security & Authentication",
            "Managing users with Identity, JWT, and role-based access control (RBAC).",
          ],
          [
            "Processing & Communication",
            "Managing background tasks with Hangfire and real-time communication with SignalR.",
          ],
        ],
        skillsIndex: "02 / WEB FRONTEND DEVELOPMENT",
        frontendTitle: "Frontend Development & SEO",
        frontendCopy:
          "Building responsive user interfaces with React & Next.js.",
        mobileTitle: "Cross-Platform Application Development",
        mobileCopy: "Developing applications for Android, iOS, Windows & macOS.",
        creativeTitle: "Experience with Supporting Tools",
        creativeCopy:
          "Additional technical experience, kept secondary to research and backend development.",
        footer: "Nima Dehghan · .NET Backend Developer & Computer Vision Researcher",
        technology: "TECHNOLOGIES",
        contactIndex: "06 / CONNECT",
        contactTitle: "Ways to Connect",
        contactNote: "",
        socialAction: "Visit",
      };

  const researchPoints = isPersian
    ? [
        "کارشناسی علوم کامپیوتر (معدل ۱۸.۳/۲۰)",
        "سه مقاله پژوهشی بین‌المللی بینایی ماشین در دست داوری",
        "پیاده‌سازی و عملیاتی‌سازی مدل‌های هوش مصنوعی در پروژه‌های نرم‌افزاری",
        "دستیار آموزشی (TA) درس شبکه‌های عصبی برای مقطع کارشناسی‌ارشد",
        "ارائه سخنرانی‌های فنی و تخصصی در مجامع دانشگاهی و سازمانی",
        "انجام چندین پروژه دانشگاهی و نرم‌افزاری باکیفیت در دوره کارشناسی",
        "ارائه چندین سخنرانی فنی و دانشگاهی در دوره کارشناسی",
        "برنامه‌ریزی برای ادامه پژوهش در مقاطع تکمیلی (بینایی ماشین)",
      ]
    : [
        "B.Sc. in Computer Science (GPA 18.3/20)",
        "Three international Computer Vision research papers currently under review",
        "Implementation and deployment of Artificial Intelligence models in software projects",
        "Teaching Assistant (TA) for a Master's-level Neural Networks course",
        "Delivered technical and specialized presentations in academic and organizational settings",
        "Completed multiple high-quality academic and software projects during the B.Sc.",
        "Delivered multiple technical and academic presentations during the B.Sc.",
        "Planning to continue research at graduate level in Computer Vision",
      ];

  const interestGroups = isPersian
    ? [
        {
          title: "مهارت‌های سیستمی و رباتیک",
          skills: ["Linux Environment (Ubuntu/WSL)", "Robotics Simulation (ROS2, Gazebo)"],
        },
        {
          title: "تولید محتوا و ابزارهای خلاقانه",
          skills: [
            "AI Prompt Engineering",
            "AI-Driven Multimedia Generation (Image, Video, Audio)",
            "Unity",
            "Blender",
            "Adobe Photoshop",
            "CapCut",
          ],
        },
      ]
    : [
        {
          title: "Systems & Robotics Skills",
          skills: ["Linux Environment (Ubuntu/WSL)", "Robotics Simulation (ROS2, Gazebo)"],
        },
        {
          title: "Content Creation & Creative Tools",
          skills: [
            "AI Prompt Engineering",
            "AI-Driven Multimedia Generation (Image, Video, Audio)",
            "Unity",
            "Blender",
            "Adobe Photoshop",
            "CapCut",
          ],
        },
      ];

  return (
    <main>
      <section id="top" className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">{copy.role}</span>
          <h1 className="hero-name">{copy.heading}</h1>
          <p className="hero-title">
            {isPersian
              ? (<>توسعه‌دهنده بک‌اند {DotNet} (با توانایی توسعه فول‌استک)</>)
              : ".NET Backend Developer (with Full-Stack Development Capabilities)"}
          </p>
          <p className="hero-summary" style={{ textAlign: "justify" }}>
            {copy.summary}
          </p>

          <div className="hero-actions">
            <a className="action-primary" href="#backend">
              {copy.researchCta}
              <ArrowDown size={16} />
            </a>
            <a className="text-link" href="#research">
              {copy.backendCta}
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="hero-readout">
            {copy.readout.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
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
          {backendGroups[language]
            .slice(0, 3)
            .concat(backendOperations[language])
            .map((group, index) => {
              const Icon = backendGroupIcons[index] ?? Code2;

              return (
                <section className="backend-skill-group" key={group.title}>
                  <h3>
                    <Icon size={17} aria-hidden="true" />
                    <span>{group.title}</span>
                  </h3>

                  <div className="tech-list">
                    {group.skills.map((skill) => (
                      <TechChip key={skill} skill={skill} />
                    ))}
                  </div>
                </section>
              );
            })}
        </div>

        <div id="systems" className="implementation-subsection">
          <div className="section-heading">
            <div>
              <span className="section-index">
                {copy.implementationIndex}
              </span>
              <h3 className="section-title">
                {copy.implementationTitle}
              </h3>
            </div>

            <p className="section-intro">
              {copy.implementationIntro}
            </p>
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


      <section className="content-section supporting-skills-eyebrow">
        <span className="eyebrow">{copy.supportingSkillsEyebrow}</span>
      </section>

      <section id="frontend" className="content-section supporting-section">
        <div className="section-heading">
          <div>
            <span className="section-index">
              {isPersian
                ? "۰۲ / توسعه فرانت‌اند وب"
                : "02 / WEB FRONTEND DEVELOPMENT"}
            </span>

            <h2 className="section-title">{copy.frontendTitle}</h2>
          </div>

          <p className="section-intro">{copy.frontendCopy}</p>
        </div>

        <div className="tech-list">
          {frontendSkills.map((skill) => (
            <TechChip key={skill} skill={skill} />
          ))}
        </div>
      </section>

      <section id="mobile" className="content-section supporting-section">
        <div className="section-heading">
          <div>
            <span className="section-index">
              {isPersian
                ? "۰۳ / توسعه موبایل"
                : "03 / MOBILE DEVELOPMENT"}
            </span>

            <h2 className="section-title">{copy.mobileTitle}</h2>
          </div>

          <p className="section-intro">{copy.mobileCopy}</p>
        </div>

        <div className="tech-list">
          {mobileSkills.map((skill) => (
            <TechChip key={skill} skill={skill} />
          ))}
        </div>
      </section>

      <section id="research" className="content-section research-section">
        <div className="section-heading">
          <div>
            <span className="section-index">{copy.researchIndex}</span>

            <h2 className="section-title">
              <ScanEye size={24} aria-hidden="true" />
              {copy.researchTitle}
            </h2>
          </div>
        </div>

        <ul className="research-points">
          {researchPoints.map((point) => (
            <li key={point}>
              <span className="research-eyebrow">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="interests" className="content-section interests-section">
        <div className="section-heading">
          <div>
            <span className="section-index">
              {isPersian ? "۰۵ / تکمیلی" : "05 / SUPPLEMENTARY"}
            </span>

            <h2 className="section-title">{copy.creativeTitle}</h2>
          </div>
        </div>

        <div className="interests-grid">
          {interestGroups.map((group) => (
            <div className="interest-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="tech-list">
                {group.skills.map((skill) => (
                  <TechChip key={skill} skill={skill} />
                ))}
              </div>
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
              <ArrowUpRight
                className="social-arrow"
                size={16}
                aria-hidden="true"
              />
            </a>
          ))}

          <a
            className="social-link"
            href="https://x.com/NimaDehghanB"
            target="_blank"
            rel="noreferrer"
            aria-label={`X — ${copy.socialAction}`}
          >
            <SocialIcon platform="X" />
            <span>X</span>
            <ArrowUpRight
              className="social-arrow"
              size={16}
              aria-hidden="true"
            />
          </a>
        </div>

        {copy.contactNote ? (
          <p className="contact-note">{copy.contactNote}</p>
        ) : null}

        <a className="action-primary contact-back-to-top" href="#top">
          {isPersian ? "بازگشت به بالا" : "Back to top"}
          <ArrowUpRight size={16} />
        </a>
      </section>

      <footer className="site-footer">
        <span>{copy.footer}</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}