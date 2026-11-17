import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import Reveal from "@/components/motion/Reveal";
import {
  BUILD_ITEMS,
  CONSULT_CASES,
  ENGAGEMENTS,
  FLOW_STEPS,
  SCOPE_STEPS,
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
            {[
              { href: "#consult", label: "こんな相談ができます" },
              { href: "#scope", label: "対応範囲" },
              { href: "#examples", label: "作れるものの例" },
              { href: "#engage", label: "関わり方と技術" },
              { href: "#flow", label: "進め方" },
            ].map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-ink underline-offset-4 hover:underline"
              >
                {nav.label}
                <span aria-hidden="true">↓</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* こんな相談ができます */}
      <section id="consult" className="scroll-mt-24 border-t border-line py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink md:text-3xl">こんな相談ができます</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CONSULT_CASES.map((c) => (
                <li key={c.title} className="flex gap-4 rounded-xl border border-line bg-white p-5 sm:flex-col sm:gap-0 sm:p-6">
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#E2F4F1] text-neo-teal sm:h-16 sm:w-16">
                    <Icon name={c.icon} className="h-8 w-8" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-ink sm:mt-5">{c.title}</h3>
                    <p className="mt-1 text-base leading-7 text-muted sm:mt-2">「{c.text}」</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 対応範囲：どこからどこまで */}
      <section id="scope" className="scroll-mt-24 border-t border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink md:text-3xl">対応範囲</h2>
          </Reveal>
          <Reveal delay={0.06}>
            {/* 流れ図：PCは横に、スマホは縦に、矢印でつなぐ */}
            <ol className="mt-10 flex flex-col lg:flex-row lg:gap-9">
              {SCOPE_STEPS.map((step, i) => (
                <li key={step.number} className="relative flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col rounded-xl border border-line bg-white p-5 text-center lg:p-4">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neo-teal text-white">
                      <Icon name={step.icon} className="h-7 w-7" />
                    </span>
                    <p className="mt-4 text-sm font-bold tabular-nums text-neo-teal">STEP {step.number}</p>
                    <h3 className="mt-1 text-xl font-semibold text-ink">{step.title}</h3>
                    <p className="mt-2 flex-1 text-base leading-7 text-muted">{step.body}</p>
                    <p className="mt-4 rounded-lg bg-neo-mist px-3 py-3 text-sm leading-6 text-ink">
                      <span className="block whitespace-nowrap text-muted">お渡しするもの</span>
                      <span className="font-semibold [word-break:auto-phrase]">{step.deliverable}</span>
                    </p>
                  </div>
                  {i < SCOPE_STEPS.length - 1 && (
                    <div className="flex items-center justify-center py-2 text-neo-teal lg:absolute lg:-right-9 lg:top-0 lg:h-full lg:w-9 lg:py-0">
                      <Icon name="arrow" className="h-7 w-7 rotate-90 lg:rotate-0" />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center gap-3 bg-neo-greenInk px-8 py-4 text-base font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              この内容で相談する
              <span aria-hidden="true">→</span>
            </Link>
            <p className="text-base text-muted">「まだ相談レベル」で大丈夫です。</p>
          </Reveal>
        </div>
      </section>

      {/* 作れるものの例 */}
      <div id="examples" className="scroll-mt-24 border-t border-line pt-16 md:pt-20">
        <Reveal className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-teal">Examples</p>
          <h2 className="mt-3 text-2xl font-medium text-ink md:text-3xl">作れるものの例</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
            アプリやシステムの種類ごとに、作れるものと、これまでに作ったものを紹介します。
          </p>
        </Reveal>
      </div>
      {BUILD_ITEMS.map((item, index) => (
        <section key={item.id} id={item.id} className={`scroll-mt-24 py-16 md:py-24 ${index > 0 ? "border-t border-line" : ""}`}>
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
          {/* 左にこれまで作ったもの、右に同じ技術で作れるもの。過去から未来へ左から右に読む */}
          <Reveal className="mx-auto mt-12 grid max-w-7xl items-stretch gap-6 px-5 md:px-8 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col bg-[#fafafa] px-6 py-6 md:px-8 md:py-7">
              <p className="text-sm font-medium text-muted">これまでに作ったもの</p>
              <h3 className="mt-2 text-2xl font-semibold text-ink">{item.example.name}</h3>
              <p className="mt-2 flex-1 text-base leading-7 text-muted">{item.example.text}</p>
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

            <div className="flex flex-col px-1 py-2 lg:px-0">
              <p className="text-sm font-medium text-muted">同じ技術で、こんなものも作れます</p>
              <ul className="mt-4 grid flex-1 gap-3">
                {item.ideas.map((idea) => (
                  <li
                    key={idea}
                    className="flex items-center rounded-lg border border-line bg-white px-5 py-4 text-base font-medium leading-7 text-ink"
                  >
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>
      ))}

      {/* 関わり方と技術 */}
      <section id="engage" className="scroll-mt-24 border-t border-line bg-[#fafafa] py-16 md:py-20">
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
      <section id="flow" className="scroll-mt-24 border-t border-line py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink md:text-3xl">進め方</h2>
            <p className="mt-3 text-base leading-8 text-muted">ご依頼内容によって柔軟に変更します。</p>
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
