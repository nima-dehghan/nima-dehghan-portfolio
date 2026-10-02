import { Shield } from "lucide-react";

const links = [
  { href: "#servers", label: "Servers" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#support", label: "Support" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
            <Shield className="size-4 text-cyan-300" strokeWidth={1.75} />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            CyberSafe
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-[13px] text-white/70 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-black transition hover:bg-emerald-300 sm:px-5 sm:text-[13px]"
        >
          Get Protected
        </a>
      </div>
    </header>
  );
}
