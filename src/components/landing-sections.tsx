import {
  ArrowRight,
  Ban,
  Globe,
  Lock,
  ShieldCheck,
  Signal,
  Zap,
} from "lucide-react";

const brands = ["Medium", "SpaceX", "Tesla", "discord", "Uber"];

const stats = [
  { value: "120", label: "countries", hint: "Coverage worldwide" },
  { value: "AES-256", label: "encryption", hint: "Military standard" },
  { value: "Zero", label: "activity logs", hint: "Nothing stored" },
  { value: "99.98%", label: "uptime", hint: "Always on" },
];

const servers = [
  { flag: "🇨🇭", country: "Switzerland", city: "Zurich", ping: "12ms" },
  { flag: "🇩🇪", country: "Germany", city: "Frankfurt", ping: "23ms" },
  { flag: "🇸🇪", country: "Sweden", city: "Stockholm", ping: "18ms" },
  { flag: "🇸🇬", country: "Singapore", city: "Singapore", ping: "89ms" },
];

const features = [
  {
    icon: Lock,
    title: "AES-256-GCM Encryption",
    body: "The same encryption standard used by governments, banks, and military intelligence agencies worldwide. Brute-force resistant for billions of years.",
    meta: "AES-256-GCM",
  },
  {
    icon: Ban,
    title: "Strict No-Logs Policy",
    body: "We never collect, store, or share any data about your browsing activity, connection timestamps, IP addresses, or DNS queries. Independently audited.",
    meta: "Zero logs",
  },
  {
    icon: Zap,
    title: "WireGuard® Protocol",
    body: "The latest and fastest VPN protocol — 3–4x faster than OpenVPN with a fraction of the code, meaning fewer attack surfaces.",
    meta: "WireGuard",
  },
  {
    icon: ShieldCheck,
    title: "Automatic Kill Switch",
    body: "If your VPN connection drops for any reason, the kill switch instantly breaks all internet traffic so your real IP is never accidentally exposed.",
    meta: "Always on",
  },
];

const plans = [
  { name: "Monthly", price: "$12.99", period: "/mo", save: null },
  { name: "1 Year", price: "$4.99", period: "/mo", save: "Save 62%" },
  { name: "2 Years", price: "$2.99", period: "/mo", save: "Save 77%" },
];

export function LandingSections() {
  return (
    <>
      <section
        id="top"
        className="flex min-h-[160vh] flex-col justify-between px-5 pb-16 pt-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-1 items-center">
          <div className="max-w-xl">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-cyan-200/80 uppercase">
              <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1">
                Privacy first
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/55">
                AES-256 · Zero logs
              </span>
            </div>
            <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
              Your Data,
              <br />
              Your Control
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
              Military-grade AES-256 encryption. Zero-logs policy. 8,900+
              servers across 120 countries.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300"
              >
                Now 3 Months
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/85 transition hover:border-white/40 hover:text-white"
              >
                Startless Trial · 7 Days
                <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="mt-10">
              <p className="text-[11px] tracking-[0.18em] text-white/35 uppercase">
                Trusted by
              </p>
              <ul className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/55">
                {brands.map((brand) => (
                  <li key={brand} className="tracking-tight">
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          id="reviews"
          className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-black/25 px-5 py-5 backdrop-blur-md"
            >
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              <p className="mt-2 text-[11px] text-white/35">{stat.hint}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="servers"
        className="flex min-h-[140vh] items-center px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_22rem] lg:items-center">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-cyan-200/80 uppercase">
              Global infrastructure
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              8,900+ servers across
              <br />
              120 countries
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
              Choose from ultra-fast servers in every major region — optimized
              for streaming, torrenting, gaming, or maximum privacy.
            </p>
          </div>
          <ul className="space-y-2">
            {servers.map((server) => (
              <li
                key={server.country}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg" aria-hidden>
                    {server.flag}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {server.country}
                    </p>
                    <p className="text-xs text-white/45">{server.city}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-emerald-300">
                  <Signal className="size-3.5" />
                  {server.ping}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="features"
        className="flex min-h-[150vh] flex-col justify-center px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-center text-[11px] font-semibold tracking-[0.22em] text-cyan-200/80 uppercase">
            Research pick
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Enterprise-grade protection
            <br />
            for everyone
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/60 sm:text-base">
            Every CyberSafe feature is designed to give you absolute control
            over your digital privacy — no compromises, no exceptions.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
                  <feature.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.body}
                </p>
                <p className="mt-5 text-[11px] tracking-[0.16em] text-white/35 uppercase">
                  {feature.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="flex min-h-[120vh] items-center px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-center text-[11px] font-semibold tracking-[0.22em] text-cyan-200/80 uppercase">
            Pricing
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Get protected today
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-white/70">
                    {plan.name}
                  </h3>
                  {plan.save ? (
                    <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                      {plan.save}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 text-3xl font-semibold text-white">
                  {plan.price}
                  <span className="text-base font-normal text-white/45">
                    {plan.period}
                  </span>
                </p>
                <a
                  href="#support"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-300"
                >
                  Get Protected
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="support"
        className="flex min-h-[80vh] items-end px-5 pt-16 pb-12 sm:px-8 lg:px-12"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-white">
            <Globe className="size-5 text-cyan-300" />
            <p className="text-sm text-white/70">
              24/7 support · 30-day money-back guarantee
            </p>
          </div>
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} CyberSafe. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
