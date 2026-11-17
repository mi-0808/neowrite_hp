import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import ProfilePhoto from "@/components/ProfilePhoto";
import { works } from "@/lib/works";
import { BUILD_ITEMS } from "@/src/config/service";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FACTS } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Profile | NEOWRITE",
  description: "NEOWRITE 代表 松井湊のプロフィール・経歴ページ",
};

/** プロフィールの外部リンク */
const profileLinks = [
  { label: "Instagram", href: "https://www.instagram.com/m_minato2008/" },
  // TODO: Facebook の URL が決まったら追加する
  { label: "GitHub", href: "https://github.com/mi-0808" },
  { label: "GOEN", href: FACTS.goenUrl },
];

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
      <section className="border-b border-line bg-[linear-gradient(180deg,#f2fbff_0%,#ffffff_100%)] pb-20 pt-16 md:pb-28 md:pt-24">
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

              <div className="mt-6 space-y-1.5 text-sm text-muted">
                <p>NEOWRITE 代表</p>
                <p>N高等学校 3年</p>
                <p>{FACTS.location}</p>
              </div>

              <p className="mt-7 max-w-xl text-sm leading-8 text-muted md:text-base md:leading-9">
                {FACTS.startedAge}歳から事業を起こし、システム開発・Web制作・プロダクト開発を通じて、東三河を中心に若手起業家として活動中。「テクノロジーで社会を良くする」をビジョンに、世界で使われるプロダクトを創ることを目指しています。
                <br />
                年齢で驚かれることはありますが、仕事は成果物でしか評価されないと思っています。
              </p>

              {/* SNS */}
              <div className="mt-8 flex flex-wrap gap-3">
                {profileLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-neo-blue hover:text-neo-blueInk"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 数字で見る実績 */}
      <section className="border-b border-line bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {[
              { value: `${FACTS.foundedYear}年〜`, label: "事業開始", note: `${FACTS.startedAge}歳で活動を始め、${FACTS.yearsInBusiness}年以上継続` },
              { value: `${FACTS.ordersCount}件+`, label: "受託実績", note: "単発案件・スポット対応を含む累計" },
              { value: `${FACTS.replyDays}営業日以内`, label: "返信スピード", note: "すべてのご相談・お問い合わせに" },
            ].map((s) => (
              <div key={s.label} className="bg-white p-6">
                <dt className="text-sm font-medium text-muted">{s.label}</dt>
                <dd className="mt-2 text-3xl font-semibold tabular-nums text-neo-teal">{s.value}</dd>
                <dd className="mt-1 text-sm leading-6 text-muted">{s.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 関わったプロダクト */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">Works</p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">関わったプロダクトと役割</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {works.map((w) => (
              <Reveal key={w.id} className="h-full">
                <article className="flex h-full flex-col rounded-xl border border-line bg-white p-6">
                  <p className="text-sm font-medium text-muted">
                    {w.kind}・{w.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">{w.name}</h3>
                  <p className="mt-1 text-base leading-7 text-muted">{w.label}</p>
                  <dl className="mt-4 grid grid-cols-[3.5rem_1fr] gap-x-3 gap-y-1 text-base leading-7">
                    <dt className="text-muted">役割</dt>
                    <dd className="text-ink">{w.role}</dd>
                    <dt className="text-muted">体制</dt>
                    <dd className="text-ink">{w.team}</dd>
                  </dl>
                  {w.storyHref && (
                    <Link
                      href={w.storyHref}
                      className="mt-auto inline-flex min-h-[44px] items-center pt-4 text-sm font-medium text-neo-blueInk underline underline-offset-4"
                    >
                      {w.name}の開発ストーリー →
                    </Link>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 依頼できること */}
      <section className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">Service</p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">依頼できること</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
              企画の整理から設計・開発・公開まで対応します。AIを使った開発で、試作を短い期間で形にします。
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {BUILD_ITEMS.map((b) => (
              <li key={b.id} className="rounded-xl border border-line bg-white p-6">
                <p className="text-lg font-semibold text-ink">{b.title}</p>
                <p className="mt-1 text-base leading-7 text-muted">{b.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/service"
              className="inline-flex min-h-[44px] items-center gap-2 bg-neo-greenInk px-7 py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              サービスを詳しく見る
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="inline-flex min-h-[44px] items-center text-base font-medium text-ink underline underline-offset-4">
              相談・お見積りをする
            </Link>
          </div>
        </div>
      </section>

      {/* 経歴タイムライン */}
      <section className="border-b border-line py-20 md:py-28">
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
      <section className="border-b border-line py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">Skills</p>
          </Reveal>

          <Stagger interval={0.08} className="mt-6 grid gap-4 sm:grid-cols-3">
            {skills.map((s) => (
              <StaggerItem key={s.category} className="h-full">
                <div className="h-full rounded-md border border-line bg-white p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-neo-blueInk">
                    {s.category}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2 text-xs text-muted">
                        <span className="text-neo-greenInk" aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* メディア掲載 */}
      <section className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">Press</p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">メディア掲載</h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="overflow-hidden rounded-lg border border-line bg-white shadow-sm">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 w-full flex-shrink-0 md:h-auto md:w-[280px]">
                  <Image
                    src="https://admin.higashiaichi.jp/uploads/20260612-110551-375945679.jpg"
                    alt="東愛知新聞 掲載記事"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-neo-orange/10 px-3 py-1 text-xs font-medium text-[#B34E00]">
                      {FACTS.pressName}
                    </span>
                    <time className="text-xs text-muted">{FACTS.pressDate}</time>
                  </div>
                  <h3 className="mt-3 text-base font-medium leading-7 text-ink">
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
