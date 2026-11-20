import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import ProfilePhoto from "@/components/ProfilePhoto";
import SocialLinks from "@/components/SocialLinks";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Profile | NEOWRITE",
  description: "NEOWRITE 代表 松井湊のプロフィール・経歴ページ",
};

const career = [
  {
    year: "2022",
    age: "14歳",
    events: ["事業活動を開始。SNS運用・ライティングの受注を始める"],
  },
  {
    year: "2023",
    age: "15歳",
    events: [
      "Web制作・ライティングの受注を開始",
      "NEOWRITEを開業",
    ],
  },
  {
    year: "2024",
    age: "16歳",
    events: [
      "企業SNSの運用代行を受託開始",
      "イベントレビューサービス「GOEN」企画・開発",
    ],
  },
  {
    year: "2025",
    age: "17歳",
    events: [
      "GOEN をリリース・運用開始",
      "中部シイアイシイ研究所 インターン（リーダー・AIシステム開発）",
    ],
  },
  {
    year: "2026",
    age: "18歳",
    events: [
      "東愛知新聞「籔内の学生紹介ファイル」に掲載（2026.06.11）",
      "青海株式会社 インターン（Webアプリ開発）",
    ],
  },
];

const skills = [
  { category: "フロントエンド", items: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS"] },
  { category: "バックエンド", items: ["Python", "Supabase", "Firebase", "PostgreSQL", "REST API"] },
  { category: "インフラ", items: ["Vercel", "GitHub"] },
];

export default function ProfilePage() {
  return (
    <main id="main" className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[linear-gradient(180deg,#f2fbff_0%,#ffffff_100%)] pb-10 pt-16 md:pb-12 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-[300px_1fr] md:gap-20">
            {/* 写真 */}
            <Reveal direction="right" className="flex justify-center md:justify-start">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl bg-neo-mist shadow-[0_8px_40px_rgba(0,0,0,0.14)]">
                <ProfilePhoto sizes="300px" />
              </div>
            </Reveal>

            {/* 基本情報 */}
            <Reveal delay={0.1}>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">
                Profile
              </p>
              <h1 className="mt-4 text-5xl font-medium text-ink md:text-7xl">
                松井 湊
              </h1>
              <p className="mt-1 text-lg font-normal text-muted">Minato Matsui</p>

              <p className="mt-5 text-sm leading-7 text-muted">
                <span className="whitespace-nowrap">NEOWRITE 代表</span>
                <span className="px-2.5 text-line" aria-hidden="true">/</span>
                <span className="whitespace-nowrap">N高等学校 3年</span>
                <span className="hidden px-2.5 text-line sm:inline" aria-hidden="true">/</span>
                <span className="block whitespace-nowrap sm:inline">{FACTS.location}</span>
              </p>

              <p className="mt-6 max-w-xl text-sm leading-8 text-muted md:text-base md:leading-9">
                {FACTS.startedAge}歳から事業を起こし、システム開発・Web制作・プロダクト開発を通じて、東三河を中心に若手起業家として活動中。「テクノロジーで社会を良くする」をビジョンに、世界で使われるプロダクトを創ることを目指しています。
                <br />
                年齢で驚かれることはありますが、仕事は成果物でしか評価されないと思っています。
              </p>

              {/* SNS */}
              <div className="mt-8">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-neo-teal">Follow</p>
                <div className="mt-3">
                  <SocialLinks size="md" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 経歴タイムライン */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">Career</p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">経歴</h2>
          </Reveal>

          <div className="mt-12 space-y-0">
            {career.map((c, i) => (
              <Reveal key={c.year} delay={i * 0.05}>
                <div className="grid gap-4 border-t border-line py-8 md:grid-cols-[140px_1fr]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-medium tabular-nums text-ink">{c.year}</span>
                    <span className="text-xs text-muted">{c.age}</span>
                  </div>
                  <ul className="space-y-2">
                    {c.events.map((ev) => (
                      <li key={ev} className="flex gap-3 text-sm leading-7 text-muted">
                        <span className="flex h-[1.75rem] w-1.5 flex-shrink-0 items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-neo-blue" aria-hidden="true" />
                        </span>
                        {ev}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* スキル */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">Skills</p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">使える技術</h2>
          </Reveal>

          <Reveal delay={0.06}>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {skills.map((s) => (
                <div key={s.category} className="grid gap-3 py-6 md:grid-cols-[200px_1fr] md:gap-8">
                  <dt className="text-base font-semibold text-ink">{s.category}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-line bg-[#fafafa] px-3 py-1.5 text-sm font-medium text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <div className="flex flex-col gap-4 rounded-xl bg-neo-navy px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between md:px-8">
              <div>
                <p className="text-lg font-semibold">書いたコードは GitHub で見られます</p>
                <p className="mt-1 text-sm leading-6 text-white/80">github.com/mi-0808</p>
              </div>
              <Link
                href="https://github.com/mi-0808"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-fit items-center gap-2 bg-white px-6 py-3 text-sm font-bold text-neo-navy transition-transform hover:-translate-y-0.5"
              >
                GitHub を見る
                <span aria-hidden="true">↗</span>
                <span className="sr-only">（新しいタブで開きます）</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* メディア掲載 */}
      <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">Press</p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">メディア掲載</h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
              <div className="flex flex-col md:flex-row">
                <div className="relative aspect-[16/10] w-full flex-shrink-0 md:aspect-auto md:min-h-[300px] md:w-[46%]">
                  <Image
                    src="https://admin.higashiaichi.jp/uploads/20260612-110551-375945679.jpg"
                    alt="東愛知新聞 掲載記事"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 46vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-neo-orange/10 px-3 py-1 text-xs font-medium text-[#B34E00]">
                      {FACTS.pressName}
                    </span>
                    <time className="text-xs text-muted">{FACTS.pressDate}</time>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-9 text-ink md:text-2xl md:leading-10">
                    【連載】籔内の学生紹介ファイル〈20〉大人の中に飛び込み道ひらく 「GOEN」など開発｜ネオライト代表 松井湊さん
                  </h3>
                  <Link
                    href="https://higashiaichi.jp/news/detail.php?id=27331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-neo-blueInk underline underline-offset-4"
                  >
                    記事を読む →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </main>
  );
}
