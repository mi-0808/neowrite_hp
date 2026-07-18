import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "About | NEOWRITE",
  description: "NEOWRITEのコンセプト・事業・プロダクト・チームについて",
};

const info = [
  { label: "屋号", value: "NEOWRITE（ネオライト）" },
  { label: "開業日", value: "2023年6月1日" },
  { label: "開業届提出先", value: "豊田税務署" },
  { label: "代表者名", value: "松井 湊（まつい みなと）" },
  { label: "住所", value: "愛知県豊田市" },
  { label: "代表者メールアドレス", value: "matsuiminato8@gmail.com" },
  { label: "業種", value: "情報通信業" },
  { label: "業務内容", value: "Webサイト制作・システム開発・SNS運用・ライティング" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,184,154,0.13),transparent)] text-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neo-teal/30 to-transparent" />

        <div className="mx-auto max-w-4xl px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-neo-teal">
            About NEOWRITE
          </p>

          <h1
            className="mt-10 font-medium leading-[1.04] tracking-[-0.02em] text-ink"
            style={{ fontSize: "clamp(3.2rem,7.5vw,7.5rem)" }}
          >
            テクノロジーで、<br />
            未来を書く。
          </h1>

          <p className="mx-auto mt-10 max-w-lg text-base leading-8 text-muted md:text-lg md:leading-9">
            NEOWRITEは、次の時代をつくる企業と<br className="hidden sm:block" />
            同じ目線で並走する、制作パートナーです。
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-ink px-9 py-4 text-sm font-medium text-white shadow-[inset_0_-2px_0_#10B89A] transition-opacity hover:opacity-80"
            >
              相談する →
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-3 border border-line px-9 py-4 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              事業内容を見る
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Concept ── */}
      <section className="border-t border-line bg-white py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">Concept</p>
          <h2
            className="mt-6 font-medium leading-[1.1] tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            NEOWRITEという名前の意味
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="border-t-2 border-neo-teal pt-8">
              <span
                className="font-bold tracking-wider text-ink"
                style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
              >
                NEO
              </span>
              <p className="mt-3 text-sm font-semibold text-neo-teal">新しい・近代的な</p>
              <p className="mt-4 text-sm leading-7 text-muted">
                テクノロジーを使って、今の時代に必要な価値を生み出す。新しい視点で、既存の課題を問い直す。
              </p>
            </div>
            <div className="border-t-2 border-neo-navy pt-8">
              <span
                className="font-bold tracking-wider text-ink"
                style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
              >
                WRITE
              </span>
              <p className="mt-3 text-sm font-semibold text-neo-navy">書く・設計する・更新する</p>
              <p className="mt-4 text-sm leading-7 text-muted">
                コードを書く。言葉を書く。仕組みを設計する。そして、未来を書き換えていく。
              </p>
            </div>
          </div>
          <p className="mt-12 max-w-2xl text-base leading-8 text-muted md:text-lg md:leading-9">
            代表者自身が現場に入り、課題整理から実装、運用改善まで一貫して伴走します。単なる外注先ではなく、同じ目線で考えるパートナーとして。
          </p>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="border-t border-line bg-[#fafafa] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">Services</p>
          <h2
            className="mt-6 font-medium leading-[1.1] tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            3つの事業領域
          </h2>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {services.map((s) => (
              <div key={s.id} className="bg-white p-8 md:p-10">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: s.accentColor }}
                >
                  {s.number}
                </div>
                <h3 className="mt-5 text-xl font-medium text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{s.tagline}</p>
                <ul className="mt-6 space-y-2">
                  {s.capabilities.slice(0, 3).map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted">
                      <span
                        className="mt-[6px] h-1 w-1 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: s.accentColor }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link href="/service" className="text-sm font-medium text-neo-teal hover:underline">
              サービス詳細を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="border-t border-line bg-white py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">Products</p>
          <h2
            className="mt-6 font-medium leading-[1.1] tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            開発・運営するプロダクト
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {products.map((p) => (
              <div
                key={p.id}
                className="relative overflow-hidden border border-line p-8 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:p-10"
                style={{ boxShadow: `0 2px 16px ${p.shadowColor}` }}
              >
                <div className="flex items-center gap-4">
                  {p.icon && (
                    <Image
                      src={p.icon}
                      alt={p.name}
                      width={48}
                      height={48}
                      className="rounded-xl object-cover"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-medium text-ink">{p.name}</h3>
                    {p.kana && <p className="text-xs text-muted">{p.kana}</p>}
                  </div>
                  <span
                    className="ml-auto text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1"
                    style={{
                      color: p.accentColor,
                      backgroundColor: `${p.accentColor}18`,
                    }}
                  >
                    {p.status === "released" ? "公開中" : "開発中"}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-muted">{p.tagline}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{p.description}</p>
                {p.url && (
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: p.accentColor }}
                  >
                    サービスを見る →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link href="/product" className="text-sm font-medium text-neo-teal hover:underline">
              プロダクト詳細を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Profile ── */}
      <section className="border-t border-line bg-[#fafafa] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">Creator</p>
          <div className="mt-8 grid gap-12 md:grid-cols-[1fr_300px] md:items-center">
            <div>
              <h2
                className="font-medium leading-[1.1] tracking-tight text-ink"
                style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
              >
                松井 湊
                <span className="ml-3 text-lg font-normal text-muted">Minato Matsui</span>
              </h2>
              <p className="mt-3 text-sm text-muted">NEOWRITE 代表 / N高等学校 3年 / 愛知県豊田市</p>
              <p className="mt-8 max-w-xl text-base leading-8 text-muted">
                14歳から事業を起こし、システム開発・SNS運用・プロダクト開発を通じて、東三河を中心に若手起業家として活動中。「テクノロジーで社会を良くする」をビジョンに、世界で使われるプロダクトを創ることを目指しています。
              </p>
              <Link
                href="/profile"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-neo-blue hover:underline"
              >
                詳しいプロフィールを見る →
              </Link>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <Image
                  src="/myphoto.jpg"
                  alt="松井 湊"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Business Info ── */}
      <section className="border-t border-line bg-white py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">Business Info</p>
          <h2
            className="mt-6 font-medium tracking-tight text-ink"
            style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}
          >
            事業者情報
          </h2>
          <dl className="mt-12 divide-y divide-line">
            {info.map(({ label, value }) => (
              <div key={label} className="grid gap-2 py-5 md:grid-cols-[220px_1fr] md:gap-8">
                <dt className="text-sm font-medium text-muted">{label}</dt>
                <dd className="text-sm text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-line bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,184,154,0.08),transparent_60%)] py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">Contact</p>
          <h2
            className="mt-6 font-medium tracking-tight text-ink"
            style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}
          >
            まずは話してみましょう。
          </h2>
          <p className="mt-5 text-sm text-muted md:text-base">
            お仕事の相談・見積もりなど、お気軽にどうぞ。
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-ink px-10 py-5 text-sm font-medium text-white shadow-[inset_0_-2px_0_#10B89A] transition-opacity hover:opacity-80"
          >
            お問い合わせ →
          </Link>
        </div>
      </section>

    </main>
  );
}
