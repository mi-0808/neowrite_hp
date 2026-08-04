import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { services, type ServiceItem } from "@/lib/services";

export const metadata: Metadata = {
  title: "Service | NEOWRITE",
  description:
    "システム開発・Web制作・オンライン営業サポート。課題整理から実装・運用まで、代表が直接伴走します。",
};

function ServiceDetail({ service }: { service: ServiceItem }) {
  const accent = service.accentColor;
  const accentText = service.textColor;
  return (
    <section id={service.id} className="scroll-mt-24 border-b border-line py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.34em]" style={{ color: accentText }}>
              {service.number}
            </p>
            <h2
              className="mt-4 font-semibold leading-tight text-ink"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              {service.title}
            </h2>
            <p className="mt-4 text-lg font-medium text-ink md:text-xl">{service.tagline}</p>
            <p className="mt-5 text-sm leading-8 text-muted md:text-base md:leading-9">{service.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.problems.map((p) => (
                <span
                  key={p}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: `${accent}15`, color: service.textColor }}
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          {/* できること */}
          <Reveal delay={0.12} direction="left">
            <div
              className="rounded-2xl border p-8"
              style={{ borderColor: `${accent}25`, backgroundColor: `${accent}06` }}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.32em]" style={{ color: accentText }}>
                できること
              </p>
              <ul className="mt-5 space-y-3">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-7 text-muted">
                    <span style={{ color: accent }} aria-hidden="true">—</span>
                    {c}
                  </li>
                ))}
              </ul>
              {service.note && (
                <div className="mt-6 border-t pt-5" style={{ borderColor: `${accent}20` }}>
                  <p className="text-sm font-medium text-ink">{service.note.heading}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{service.note.body}</p>
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {service.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white px-2.5 py-1 text-[10px] font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* 進め方 */}
        <div className="mt-14">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em]" style={{ color: accentText }}>
              進め方
            </p>
          </Reveal>
          <Stagger interval={0.1} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.flow.map((f) => (
              <StaggerItem key={f.step} className="h-full">
                <div className="h-full rounded-xl border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-md">
                  <p className="text-xs font-medium" style={{ color: accentText }}>{f.step}</p>
                  <h3 className="mt-4 text-base font-medium text-ink">{f.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: accentText }}
          >
            {service.title}について相談する →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function ServicePage() {
  return (
    <main id="main" className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[radial-gradient(ellipse_at_20%_0%,rgba(16,184,154,0.13),transparent_50%),radial-gradient(ellipse_at_80%_0%,rgba(29,167,216,0.10),transparent_50%)] pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">Service</p>
            <h1
              className="mt-4 font-semibold leading-none tracking-tight text-ink"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              事業内容
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg md:leading-9">
              システム開発・Web制作・オンライン営業サポート。課題整理から実装・運用まで、代表が直接伴走します。価格は内容に応じて個別にご提案します。
            </p>
          </Reveal>

          {/* ページ内ナビ */}
          <Stagger interval={0.08} className="mt-10 flex flex-wrap gap-3">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
                >
                  <span className="text-xs font-semibold" style={{ color: s.textColor }}>
                    {s.number}
                  </span>
                  {s.title}
                  <span aria-hidden="true">↓</span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      {/* 詳細 */}
      {services.map((service) => (
        <ServiceDetail key={service.id} service={service} />
      ))}

      {/* ご依頼の流れ（簡略再掲） */}
      <section className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-teal">Flow</p>
            <h2 className="mt-4 text-2xl font-medium text-ink md:text-3xl">
              どのサービスも、進め方は同じ4ステップ。
            </h2>
          </Reveal>
          <Stagger interval={0.08} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["ご相談", "ヒアリング・お見積り", "制作・実装", "納品・運用"].map((label, i) => (
              <StaggerItem key={label}>
                <div className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3.5">
                  <span className="text-sm font-bold text-neo-teal">0{i + 1}</span>
                  <span className="text-sm font-medium text-ink">{label}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1} className="mt-6">
            <Link href="/#flow" className="text-sm font-medium text-neo-blueInk hover:underline">
              流れの詳細を見る →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
