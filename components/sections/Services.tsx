"use client";

import Link from "next/link";
import { m } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blueInk">Service</p>
              <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">
                できること
              </h2>
            </div>
            <Link
              href="/service"
              className="hidden text-sm font-medium text-neo-blueInk hover:underline md:block"
            >
              サービス詳細 →
            </Link>
          </div>
        </Reveal>

        <Stagger interval={0.12} className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <m.article
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white p-7 md:p-8"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* ホバーで伸びる上端カラーバー */}
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  style={{ backgroundColor: service.accentColor }}
                  aria-hidden="true"
                />

                <p className="text-xs font-semibold" style={{ color: service.textColor }}>
                  {service.number}
                </p>
                <h3 className="mt-3 text-2xl font-medium text-ink">{service.title}</h3>
                <p className="mt-2 text-sm font-medium" style={{ color: service.textColor }}>
                  {service.catchCopy}
                </p>

                <ul className="mt-5 space-y-2">
                  {service.problems.map((problem) => (
                    <li key={problem} className="text-sm leading-7 text-muted">
                      {problem}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-white px-2.5 py-1 text-[10px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={`/service#${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: service.textColor }}
                  >
                    詳しく見る
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </div>
              </m.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15} className="mt-9 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink underline-offset-4 hover:underline"
          >
            どれに当たるか分からない方も、まずはご相談ください
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
