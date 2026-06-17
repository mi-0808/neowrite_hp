import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | NEOWRITE",
  description: "NEOWRITE 代表 松井湊のプロフィール・経歴ページ",
};

const career = [
  {
    year: "2022",
    age: "14歳",
    events: [
      "事業活動を開始。SNS運用・コンテンツ制作に取り組む",
    ],
  },
  {
    year: "2023",
    age: "15歳",
    events: [
      "Web制作・システム開発の受注を開始",
      "NEOWRITE として活動を本格化",
    ],
  },
  {
    year: "2024",
    age: "16歳",
    events: [
      "CCP marche_portal インスタグラム運用（東海・関西・関東・中国・北陸）担当",
      "イベントレビューサービス「GOEN」の開発に着手",
    ],
  },
  {
    year: "2025",
    age: "17歳",
    events: [
      "中部CIC 長期インターン（AIシステム開発）参加",
      "GOEN をリリース・運用開始",
    ],
  },
  {
    year: "2026",
    age: "18歳",
    events: [
      "東愛知新聞「籔内の学生紹介ファイル」に掲載（2026.06.11）",
      "NEOWRITE コーポレートサイトをリニューアル",
    ],
  },
];

const skills = [
  { category: "フロントエンド", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "バックエンド", items: ["Python", "Supabase", "PostgreSQL", "REST API"] },
  { category: "インフラ", items: ["Vercel", "GitHub"] },
  { category: "SNS・マーケティング", items: ["Instagram 運用設計", "コンテンツ設計", "トーン・世界観設計"] },
];

const activities = [
  { title: "NEOWRITE 代表", desc: "SNS運用・Web制作・システム開発" },
  { title: "GOEN 開発・運営", desc: "イベントレビューサービス" },
  { title: "中部CIC 長期インターン", desc: "AIシステム開発" },
  { title: "CCP marche_portal 運用", desc: "インスタグラム運用（東海/関西/関東/中国/北陸）" },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-line bg-[linear-gradient(180deg,#f2fbff_0%,#ffffff_100%)] pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-[300px_1fr] md:gap-20">
            {/* 写真 */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.14)]">
                <Image
                  src="/myphoto.jpg"
                  alt="松井 湊"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* 基本情報 */}
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">
                Profile
              </p>
              <h1 className="mt-4 text-5xl font-medium text-ink md:text-7xl">
                松井 湊
              </h1>
              <p className="mt-1 text-lg font-normal text-muted">Minato Matsui</p>

              <div className="mt-6 space-y-1.5 text-sm text-muted">
                <p>NEOWRITE 代表</p>
                <p>N高等学校 3年</p>
                <p>愛知県豊田市</p>
              </div>

              <p className="mt-7 max-w-xl text-sm leading-8 text-muted md:text-base md:leading-9">
                14歳から事業を起こし、システム開発・SNS運用・プロダクト開発を通じて、東三河を中心に若手起業家として活動中。「テクノロジーで社会を良くする」をビジョンに、世界で使われるプロダクトを創ることを目指しています。
              </p>

              {/* SNS */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="https://www.instagram.com/m_minato2008/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-neo-blue hover:text-neo-blue"
                >
                  Instagram →
                </Link>
                <Link
                  href="https://goen-self.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-neo-blue hover:text-neo-blue"
                >
                  GOEN →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 活動 */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">Activities</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">主な活動</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {activities.map((a) => (
              <div
                key={a.title}
                className="rounded-lg border border-line bg-white p-6 transition-shadow hover:shadow-sm"
              >
                <h3 className="text-base font-medium text-ink">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* スキル */}
      <section className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">Skills</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">スキル</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.category} className="rounded-lg border border-line bg-white p-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-neo-blue">
                  {s.category}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted">
                      <span className="text-neo-green" aria-hidden="true">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 経歴タイムライン */}
      <section className="border-b border-line py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">Career</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">経歴</h2>

          <div className="mt-12 space-y-0">
            {career.map((c, i) => (
              <div key={c.year} className="grid gap-4 border-t border-line py-8 md:grid-cols-[140px_1fr]">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-medium text-ink">{c.year}</span>
                  <span className="text-xs text-muted">{c.age}</span>
                </div>
                <ul className="space-y-2">
                  {c.events.map((ev) => (
                    <li key={ev} className="flex gap-3 text-sm leading-7 text-muted">
                      <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neo-blue" aria-hidden="true" />
                      {ev}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* メディア掲載 */}
      <section className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">Press</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">メディア掲載</h2>

          <div className="mt-10 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
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
                  <span className="rounded-full bg-[#FF7718]/10 px-3 py-1 text-xs font-medium text-[#E07020]">東愛知新聞</span>
                  <time className="text-xs text-muted">2026.06.11</time>
                </div>
                <h3 className="mt-3 text-base font-medium leading-7 text-ink">
                  【連載】籔内の学生紹介ファイル〈20〉大人の中に飛び込み道ひらく 「GOEN」など開発｜ネオライト代表 松井湊さん
                </h3>
                <Link
                  href="https://higashiaichi.jp/news/detail.php?id=27331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neo-blue hover:underline"
                >
                  記事を読む →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <h2 className="text-2xl font-medium text-ink md:text-3xl">お仕事のご相談はこちらから</h2>
          <p className="mt-4 text-sm text-muted">システム開発・Web制作・SNS運用など、お気軽にご連絡ください。</p>
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
