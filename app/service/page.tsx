import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import {
  BUILD_ITEMS,
  ENGAGEMENTS,
  FLOW_STEPS,
  SERVICE_AUDIENCE,
  SERVICE_PITCH,
  SUB_COPY,
  TECH_STACK,
} from "@/src/config/service";

export const metadata: Metadata = {
  title: "Service | NEOWRITE",
  description: `${SERVICE_PITCH}${SUB_COPY}`,
};

export default function ServicePage() {
  return (
    <main id="main" className="min-h-screen bg-white">
      {/* ヒーロー */}
      <div className="bg-[radial-gradient(ellipse_at_20%_0%,rgba(16,184,154,0.13),transparent_50%),radial-gradient(ellipse_at_80%_0%,rgba(29,167,216,0.10),transparent_50%)] pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-neo-teal">Service</p>
            <p className="mt-6 text-base font-medium text-neo-greenInk">{SERVICE_AUDIENCE}</p>
            <h1 className="mt-3 text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-tight text-ink [word-break:auto-phrase]">
              {SERVICE_PITCH}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg md:leading-9">{SUB_COPY}</p>
          </Reveal>

          {/* ページ内ナビ */}
          <nav aria-label="このページの内容" className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            {BUILD_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-ink underline-offset-4 hover:underline"
              >
                {item.title}
                <span aria-hidden="true">↓</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* 作れるもの */}
      {BUILD_ITEMS.map((item) => (
        <section key={item.id} id={item.id} className="scroll-mt-24 border-t border-line py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 md:px-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-white">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="min-w-0">
              <h2 className="text-3xl font-semibold leading-snug text-ink md:text-4xl [word-break:auto-phrase]">
                {item.title}
              </h2>
              <p className="mt-3 text-lg text-muted">{item.body}</p>
              <ul className="mt-6 space-y-3">
                {item.details.map((d) => (
                  <li key={d} className="flex gap-3 text-base leading-8 text-ink">
                    <span className="text-neo-teal" aria-hidden="true">
                      —
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="mx-auto mt-12 grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-lg font-semibold text-ink">たとえば、こんなものが作れます</h3>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {item.ideas.map((idea) => (
                  <li key={idea} className="flex gap-3 py-4 text-base leading-7 text-ink">
                    <span className="text-neo-teal" aria-hidden="true">
                      —
                    </span>
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fafafa] px-6 py-6 md:px-8 md:py-7">
              <h3 className="text-lg font-semibold text-ink">
                これまでの例：<span className="text-neo-blueInk">{item.example.name}</span>
              </h3>
              <p className="mt-2 text-base leading-7 text-muted">{item.example.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={item.example.href}
                  className="inline-flex min-h-[44px] items-center gap-2 border border-ink bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  開発ストーリーを読む
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href={item.example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 bg-neo-greenInk px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                >
                  {item.example.name}を触ってみる
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">（新しいタブで開きます）</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      {/* 関わり方と技術 */}
      <section className="border-t border-line bg-[#fafafa] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink md:text-3xl">関わり方</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {ENGAGEMENTS.map((e) => (
                <div key={e.title} className="grid gap-1 py-5 sm:grid-cols-[140px_1fr] sm:gap-6">
                  <dt className="text-lg font-medium text-ink">{e.title}</dt>
                  <dd className="text-base leading-7 text-muted">{e.body}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-base leading-7 text-muted">どちらの場合も、コードと資料は毎回お渡しします。</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl font-medium text-ink md:text-3xl">使っている技術</h2>
            <p className="mt-6 text-lg leading-9 text-ink">{TECH_STACK.join(" / ")}</p>
            <p className="mt-5 text-base leading-7 text-muted">
              AIを使った開発（AI駆動開発）で、試作を短い期間で形にします。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 進め方 */}
      <section className="border-t border-line py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink md:text-3xl">進め方</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {FLOW_STEPS.map((step) => (
                <li key={step.number} className="flex items-baseline gap-3 border-t border-line pt-4">
                  <span className="text-sm font-bold tabular-nums text-neo-teal">{step.number}</span>
                  <span className="text-base font-medium text-ink">{step.title}</span>
                </li>
              ))}
            </ol>
            <Link
              href="/#flow"
              className="mt-6 inline-flex min-h-[44px] items-center text-base font-medium text-neo-blueInk underline underline-offset-4"
            >
              進め方を詳しく見る →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
