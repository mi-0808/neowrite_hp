import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
  title: "About | NEOWRITE",
  description:
    "NEOWRITE（ネオライト）の事業概要。屋号・代表者・所在地・事業内容などの基本情報をまとめています。",
};

const info = [
  { label: "屋号", value: "NEOWRITE（ネオライト）" },
  { label: "代表者名", value: "松井 湊（まつい みなと）" },
  { label: "所在地", value: `${FACTS.location}（全国リモート対応）` },
  { label: "開業日", value: "2023年6月1日（開業届提出先：豊田税務署）" },
  { label: "事業開始", value: `${FACTS.foundedYear}年（代表${FACTS.startedAge}歳で活動開始）` },
  { label: "業種", value: "情報通信業" },
  { label: "業務内容", value: "Webアプリ・スマホアプリ・AIを組み込んだ業務システムの企画・開発" },
  { label: "連絡先", value: FACTS.email },
  { label: "返信ポリシー", value: `お問い合わせから${FACTS.replyHours}時間以内に返信します（年中無休）` },
];

export default function AboutPage() {
  return (
    <main id="main" className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,184,154,0.13),transparent)] py-24 text-center md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.38em] text-neo-teal">
              About NEOWRITE
            </p>
            <h1
              className="mt-8 font-medium leading-[1.08] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.8rem,6.5vw,6rem)" }}
            >
              テクノロジーで、
              <br />
              未来を書く。
            </h1>
            <p className="mx-auto mt-8 max-w-lg text-base leading-8 text-muted md:text-lg md:leading-9">
              NEOWRITEは、次の時代をつくる企業と
              <br className="hidden sm:block" />
              同じ目線で並走する、制作パートナーです。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 名前の意味 */}
      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-neo-teal">Concept</p>
            <h2
              className="mt-6 font-medium leading-[1.1] tracking-tight text-ink"
              style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
            >
              NEOWRITEという名前の意味
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="border-t-2 border-neo-teal pt-8">
                <span className="font-bold tracking-wider text-ink" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                  NEO
                </span>
                <p className="mt-3 text-sm font-semibold text-neo-teal">新しい・近代的な</p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  テクノロジーを使って、今の時代に必要な価値を生み出す。新しい視点で、既存の課題を問い直す。
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="border-t-2 border-neo-navy pt-8">
                <span className="font-bold tracking-wider text-ink" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
                  WRITE
                </span>
                <p className="mt-3 text-sm font-semibold text-neo-navy">書く・設計する・更新する</p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  コードを書く。言葉を書く。仕組みを設計する。そして、未来を書き換えていく。
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="mt-12 max-w-2xl text-base leading-8 text-muted md:text-lg md:leading-9">
              代表者自身が現場に入り、課題整理から実装、運用改善まで一貫して伴走します。単なる外注先ではなく、同じ目線で考えるパートナーとして。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 事業者情報（稟議・確認用） */}
      <section className="border-t border-line bg-[#fafafa] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.34em] text-neo-teal">Business Info</p>
            <h2 className="mt-6 font-medium tracking-tight text-ink" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
              事業者情報
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="mt-12 divide-y divide-line border-y border-line">
              {info.map(({ label, value }) => (
                <div key={label} className="grid gap-2 py-5 md:grid-cols-[220px_1fr] md:gap-8">
                  <dt className="text-sm font-medium text-muted">{label}</dt>
                  <dd className="text-sm text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <p className="text-sm leading-7 text-muted">
              事業内容の詳細は
              <Link href="/service" className="mx-1 text-neo-blueInk underline underline-offset-4">
                Serviceページ
              </Link>
              を、代表者の経歴は
              <Link href="/profile" className="mx-1 text-neo-blueInk underline-offset-4 hover:underline">
                Profileページ
              </Link>
              をご覧ください。
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
