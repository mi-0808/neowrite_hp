"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/services";

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] pb-24 pt-14 md:pb-36 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">Service</p>
              <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">事業内容</h2>
            </div>
            <Link
              href="/service"
              className="hidden text-sm font-medium text-neo-blue hover:underline md:block"
            >
              すべて見る →
            </Link>
          </div>
        </Reveal>

        <div className="mt-8 border-t border-neo-blue/15">
          {services.map((service, index) => {
            const isOpen = openId === service.id;
            return (
              <Reveal key={service.id} delay={index * 0.08}>
                <article className="border-b border-neo-blue/15 py-10 md:py-14">
                  <div className="grid gap-8 md:grid-cols-[120px_1fr_1fr]">
                    <p className="text-xs" style={{ color: service.accentColor }}>{service.number}</p>
                    <h3 className="text-3xl font-medium leading-tight text-ink md:text-4xl">{service.title}</h3>
                    <div>
                      <p className="text-sm font-normal leading-8 text-muted">{service.description}</p>
                      <ul className="mt-6 space-y-2 text-sm font-normal leading-7 text-muted">
                        {service.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span style={{ color: service.accentColor }}>—</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : service.id)}
                          aria-expanded={isOpen}
                          className="flex items-center gap-3 rounded-full border border-neo-blue/30 bg-white px-5 py-2.5 text-sm font-medium text-neo-blue shadow-sm transition-all duration-200 hover:border-neo-blue hover:bg-neo-blue hover:text-white"
                        >
                          <span className={`inline-block text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>▼</span>
                          {isOpen ? "閉じる" : "詳細を見る"}
                        </button>
                        <Link
                          href={`/service#${service.id}`}
                          className="flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-muted transition-all hover:border-ink hover:text-ink"
                        >
                          サービスページへ →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Accordion */}
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="mt-8 border-t border-neo-blue/10 pt-8">
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {service.flow.map((f) => (
                          <div key={f.step} className="rounded-xl border border-line bg-white p-5">
                            <p className="text-xs font-medium" style={{ color: service.accentColor }}>{f.step}</p>
                            <h4 className="mt-3 text-sm font-medium text-ink">{f.label}</h4>
                            <p className="mt-2 text-xs leading-6 text-muted">{f.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12} className="mt-8 md:hidden">
          <Link href="/service" className="block text-center text-sm font-medium text-neo-blue hover:underline">
            すべてのサービスを見る →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
