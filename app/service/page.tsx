"use client";

import Link from "next/link";
import { services, type ServiceItem } from "@/lib/services";
import type { Metadata } from "next";

function ServiceShowcase({ service }: { service: ServiceItem }) {
  return (
    <a
      href={`#${service.id}`}
      className="group flex-shrink-0 w-[260px] md:w-[320px] snap-start overflow-hidden rounded-2xl border border-line bg-white p-8 transition-shadow hover:shadow-xl"
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold text-white"
        style={{ backgroundColor: service.accentColor }}
      >
        {service.number}
      </div>
      <div className="mt-6">
        <span className="text-xl font-semibold text-ink">{service.title}</span>
        <p className="mt-2 text-sm leading-6 text-muted">{service.tagline}</p>
        <p
          className="mt-5 text-xs font-medium transition-colors group-hover:underline"
          style={{ color: service.accentColor }}
        >
          詳しく見る →
        </p>
      </div>
    </a>
  );
}

function ServiceDetail({ service }: { service: ServiceItem }) {
  const accent = service.accentColor;
  return (
    <section id={service.id} className="border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="grid items-start gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.34em]" style={{ color: accent }}>
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
              {service.points.map((p) => (
                <span
                  key={p}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{ backgroundColor: `${accent}15`, color: accent }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div
            className="rounded-2xl border p-8"
            style={{ borderColor: `${accent}25`, backgroundColor: `${accent}06` }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.32em]" style={{ color: accent }}>
              できること
            </p>
            <ul className="mt-5 space-y-3">
              {service.capabilities.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-7 text-muted">
                  <span style={{ color: accent }}>—</span>
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
          </div>
        </div>

        {/* Flow */}
        <div className="mt-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em]" style={{ color: accent }}>
            進め方
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.flow.map((f) => (
              <div
                key={f.step}
                className="rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-medium" style={{ color: accent }}>{f.step}</p>
                <h3 className="mt-4 text-base font-medium text-ink">{f.label}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[radial-gradient(ellipse_at_20%_0%,rgba(16,184,154,0.13),transparent_50%),radial-gradient(ellipse_at_80%_0%,rgba(29,167,216,0.10),transparent_50%)] pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">Service</p>
          <h1
            className="mt-4 font-semibold leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            事業内容
          </h1>
          <p className="mt-5 text-base text-muted md:text-lg">
            システム開発・Web制作・SNS運用を通じて、次世代を本気でつくろうとする企業様の挑戦を支えます。
          </p>
        </div>

        {/* Horizontal scroll showcase */}
        <div className="mt-12 px-5 md:px-8">
          <div
            className="flex gap-4 overflow-x-auto pb-4"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
          >
            <div className="flex-shrink-0 w-5 md:hidden" />
            {services.map((s) => (
              <ServiceShowcase key={s.id} service={s} />
            ))}
            <div className="flex-shrink-0 w-5 md:hidden" />
          </div>
        </div>
      </div>

      {/* Detail sections */}
      {services.map((service) => (
        <ServiceDetail key={service.id} service={service} />
      ))}

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <h2 className="text-2xl font-medium text-ink md:text-3xl">お仕事のご相談はこちら</h2>
          <p className="mt-4 text-sm text-muted">まずはお気軽にご連絡ください。</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium text-white shadow-[inset_0_-2px_0_#10B89A] transition-opacity hover:opacity-80"
          >
            お問い合わせ →
          </Link>
        </div>
      </section>
    </main>
  );
}
