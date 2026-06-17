"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/Reveal";

// ---- GOEN Accordion Content ----
function GoenAccordion() {
  const features = [
    { number: "01", title: "雰囲気を先に知る", body: "雰囲気タグとレビューで、場の温度感を参加前に想像できるようにする。" },
    { number: "02", title: "ひとり参加の不安を減らす", body: "初参加のハードルを下げる「安心の目安」を、体験者の声から可視化する。" },
    { number: "03", title: "レビューが次の一歩になる", body: "読んで、参加して、書く。小さな循環が、誰かの挑戦をそっと後押しする。" },
    { number: "04", title: "多様な出会いを扱う", body: "交流・ワークショップ・ビジネス・スポーツ・料理など、日常の外側にある機会をひらく。" },
  ] as const;

  return (
    <div className="mt-8 border-t border-neo-blue/10 pt-10">
      {/* Hero */}
      <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-14">
        <div className="flex justify-center md:justify-start">
          <div className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(255,107,0,0.22),0_4px_16px_rgba(0,0,0,0.10)]">
            <Image
              src="/goen_icons.png"
              alt="GOEN app icon"
              width={120}
              height={120}
              className="h-[120px] w-[120px] object-cover"
            />
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-3">
            <h3 className="text-5xl font-medium leading-none text-ink md:text-7xl">GOEN</h3>
            <span className="text-base font-normal text-muted">ごえん</span>
          </div>
          <p className="mt-4 text-2xl font-medium leading-tight text-ink md:text-3xl">
            次のイベント、一緒に探そう。
          </p>
          <p className="mt-4 max-w-xl text-sm font-normal leading-8 text-muted md:text-base md:leading-9">
            雰囲気・ひとり参加しやすさを可視化したクチコミで、安心して選べるイベントクチコミサービス。
          </p>
          <div className="mt-6">
            <Link
              href="https://goen-self.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-ink px-6 py-3 text-sm font-medium text-white shadow-[inset_0_-2px_0_#FF7718] transition-opacity duration-300 hover:opacity-80"
            >
              GOENを見る
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Why */}
      <div className="mt-10 grid gap-8 border-y border-[#FF7718]/20 bg-white/60 py-10 md:grid-cols-[1fr_1.1fr] md:py-14">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#E07020]">Why we made it</p>
          <p className="mt-4 text-xl font-medium leading-relaxed text-ink md:text-2xl">
            イベントに行きたくても、雰囲気が分からなくて踏み出せない。
          </p>
        </div>
        <div className="space-y-4 text-sm font-normal leading-8 text-muted md:text-base md:leading-9">
          <p>GOENは、その小さな不安から生まれる若者の孤独と機会損失を減らすために開発しました。</p>
          <p>レビューを単なる評価ではなく、次に参加する人への「安心の目安」として設計する。GOENは、テクノロジーで社会問題を解くNEOWRITEの思想を体現するプロダクトです。</p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-8 grid gap-px bg-[#FF7718]/12 md:grid-cols-4">
        {features.map((f) => (
          <article key={f.number} className="bg-white p-6 transition-colors duration-300 hover:bg-[#FFF4EE] md:p-8">
            <p className="text-xs font-medium text-[#E07020]">{f.number}</p>
            <h4 className="mt-4 text-lg font-medium leading-relaxed text-ink">{f.title}</h4>
            <p className="mt-3 text-sm font-normal leading-7 text-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

// ---- Web制作 Accordion Content ----
function WebAccordion() {
  const capabilities = [
    "コーポレートサイト・採用サイト",
    "LP（ランディングページ）",
    "ECサイト・予約サイト",
    "モバイル・PC完全レスポンシブ対応",
    "SEO対策・アクセス解析",
  ];

  const flow = [
    { step: "01", label: "ヒアリング", body: "目的・ターゲット・競合を整理し、サイトで伝えるべきことを言語化します。" },
    { step: "02", label: "設計・ワイヤー", body: "情報設計とページ構成を固め、スマホ・PCの動線を設計します。" },
    { step: "03", label: "デザイン・実装", body: "ブランドに合ったデザインを制作し、Next.js / Tailwind CSS で高速実装します。" },
    { step: "04", label: "公開・運用", body: "Vercel などへデプロイし、更新代行・改善提案まで伴走します。" },
  ] as const;

  return (
    <div className="mt-8 border-t border-neo-blue/10 pt-10">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">できること</p>
          <ul className="mt-5 space-y-3">
            {capabilities.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="text-neo-green" aria-hidden="true">—</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-neo-blue/10 bg-neo-sky/40 p-6 text-sm leading-8 text-muted">
          <p className="font-medium text-ink">このサイト自体もNEOWRITEが制作・運用しています。</p>
          <p className="mt-2">Next.js + Tailwind CSS をベースに、スピード・デザイン・保守性を両立した構成でお届けします。</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">制作の流れ</p>
        <div className="mt-6 grid gap-px bg-neo-blue/10 md:grid-cols-4">
          {flow.map((f) => (
            <div key={f.step} className="bg-white p-6 transition-colors duration-300 hover:bg-neo-sky/40 md:p-8">
              <p className="text-xs font-medium text-neo-blue">{f.step}</p>
              <h4 className="mt-4 text-lg font-medium text-ink">{f.label}</h4>
              <p className="mt-3 text-sm leading-7 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- SNS制作 Accordion Content ----
function SnsAccordion() {
  const capabilities = [
    "Instagram・X を中心とした運用設計",
    "投稿内容・スケジュール設計",
    "世界観・トーン・ビジュアル設計",
    "複数アカウントの並行運用",
    "フォロワー増加・エンゲージメント改善施策",
  ];

  const flow = [
    { step: "01", label: "現状分析", body: "既存アカウントの強み・弱みを分析し、競合と比較して伸びしろを特定します。" },
    { step: "02", label: "戦略設計", body: "ターゲット・ポジション・投稿テーマを決め、運用の骨格を組みます。" },
    { step: "03", label: "コンテンツ制作", body: "デザイン・文章・ハッシュタグまで一貫して制作・投稿します。" },
    { step: "04", label: "改善・継続", body: "数字を見ながら毎月改善。仕組みとして回る運用体制をつくります。" },
  ] as const;

  return (
    <div className="mt-8 border-t border-neo-blue/10 pt-10">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">できること</p>
          <ul className="mt-5 space-y-3">
            {capabilities.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="text-neo-green" aria-hidden="true">—</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-neo-blue/10 bg-neo-sky/40 p-6 text-sm leading-8 text-muted">
          <p className="font-medium text-ink">複数の地域密着メディアアカウントを運用中。</p>
          <p className="mt-2">東海・関西・関東・中国・北陸エリアにまたがるポータルアカウントの投稿設計・運用を担当しています（詳細はお問い合わせください）。</p>
        </div>
      </div>

      <div className="mt-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">運用の流れ</p>
        <div className="mt-6 grid gap-px bg-neo-blue/10 md:grid-cols-4">
          {flow.map((f) => (
            <div key={f.step} className="bg-white p-6 transition-colors duration-300 hover:bg-neo-sky/40 md:p-8">
              <p className="text-xs font-medium text-neo-blue">{f.step}</p>
              <h4 className="mt-4 text-lg font-medium text-ink">{f.label}</h4>
              <p className="mt-3 text-sm leading-7 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- Main Section ----

type AccordionKey = "01" | "02" | "03";

const services: {
  number: AccordionKey;
  title: string;
  description: string;
  points: readonly string[];
  buttonLabel: string;
}[] = [
  {
    number: "01",
    title: "システム開発",
    description: "業務効率化ツール、Webアプリケーション、管理システムなど、目的に合わせたシステムを設計・開発します。",
    points: ["Excel管理が限界", "アナログな作業を減らしたい", "小さく始めて検証したい"],
    buttonLabel: "実際に動いてるプロダクトを見てみる",
  },
  {
    number: "02",
    title: "Web制作・運用",
    description: "企業サイト・サービスサイト・LPなどを制作し、作って終わりではなく、育てる運用までサポートします。",
    points: ["何を伝えるべきか整理したい", "信頼感のあるサイトにしたい", "採用や問い合わせにつなげたい"],
    buttonLabel: "制作できること・進め方を見る",
  },
  {
    number: "03",
    title: "SNS制作・運用",
    description: "Instagram・Xなどを中心に、事業とつながるSNS運用を支援します。",
    points: ["投稿内容の設計", "トーンと世界観づくり", "運用の仕組み化"],
    buttonLabel: "運用サービスの詳細を見る",
  },
];

const accordionContent: Record<AccordionKey, React.ReactNode> = {
  "01": <GoenAccordion />,
  "02": <WebAccordion />,
  "03": <SnsAccordion />,
};

export default function Services() {
  const [openKey, setOpenKey] = useState<AccordionKey | null>(null);

  const toggle = (key: AccordionKey) =>
    setOpenKey((prev) => (prev === key ? null : key));

  return (
    <section
      id="services"
      className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] pb-24 pt-14 md:pb-36 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">
              Service
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">
              事業内容
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 border-t border-neo-blue/15">
          {services.map((service, index) => {
            const isOpen = openKey === service.number;
            return (
              <Reveal key={service.number} delay={index * 0.08}>
                <article className="border-b border-neo-blue/15 py-10 md:py-14">
                  {/* Top row */}
                  <div className="grid gap-8 md:grid-cols-[120px_1fr_1fr]">
                    <p className="text-xs text-neo-blue">{service.number}</p>
                    <h3 className="text-3xl font-medium leading-tight text-ink md:text-4xl">
                      {service.title}
                    </h3>
                    <div>
                      <p className="text-sm font-normal leading-8 text-muted">{service.description}</p>
                      <ul className="mt-6 space-y-2 text-sm font-normal leading-7 text-muted">
                        {service.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="text-neo-green" aria-hidden="true">—</span>
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Accordion trigger */}
                      <div className="mt-8">
                    <button
                      onClick={() => toggle(service.number)}
                      aria-expanded={isOpen}
                      className="group flex items-center gap-3 rounded-full border border-neo-blue/30 bg-white px-5 py-2.5 text-sm font-medium text-neo-blue shadow-sm transition-all duration-200 hover:border-neo-blue hover:bg-neo-blue hover:text-white hover:shadow-md"
                    >
                      <span
                        className={`inline-block text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        ▼
                      </span>
                      {isOpen ? "閉じる" : service.buttonLabel}
                    </button>
                      </div>
                    </div>
                  </div>

                  {/* Accordion content – full width */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {accordionContent[service.number]}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
