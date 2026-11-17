import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.name} 開発ストーリー | NEOWRITE`,
    description: `${product.name}（${product.tagline}）をどうやって作ったか。設計の判断と、実際に踏んだ手順の記録。`,
  };
}

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const accent = product.accentColor;
  const accentText = product.textColor;

  return (
    <main id="main" className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="border-b border-line pb-12 pt-20 md:pb-16 md:pt-28"
        style={{ backgroundColor: `${accent}08` }}
      >
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.34em]" style={{ color: accentText }}>
              Development Story
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-ink md:text-5xl">
              {product.ownProduct === false
                ? `${product.name}の開発に、どう関わっているか`
                : `${product.name}を、どうやって作ったか`}
            </h1>
            {product.kana && <p className="mt-3 text-sm text-muted">{product.kana}</p>}
            {product.ownProduct === false && (
              <p
                className="mt-6 inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: `${accent}14`, color: accentText }}
              >
                {product.owner ? `${product.owner}の製品です。` : ""}NEOWRITEの事業ではなく、開発メンバーとして参加しています
              </p>
            )}
            <p className="mt-6 text-sm leading-8 text-muted md:text-base md:leading-9">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {product.url && (
                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ backgroundColor: accent, boxShadow: `0 12px 28px ${accent}47` }}
                >
                  実際に触ってみる
                  <span aria-hidden="true">↗</span>
                </Link>
              )}
              {product.ownProduct !== false && (
                <Link
                  href={`/product#${product.id}`}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  サービス概要を見る →
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      {product.gallery && (
        <div className="mx-auto max-w-3xl px-5 pt-14 md:px-8 md:pt-16">
          <Reveal>
            <div className="space-y-10">
              {product.gallery.map((shot) => (
                <figure key={shot.src}>
                  <div className="overflow-hidden rounded-xl border border-line">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1440}
                      height={900}
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="max-h-[70vh] w-full object-cover object-top"
                    />
                  </div>
                  <figcaption className="mt-3 text-xs leading-6 text-muted">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      )}

      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        {/* なぜ作ったか */}
        {product.why && (
          <Reveal>
            <section>
              <p className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: accentText }}>
                Why
              </p>
              <h2 className="mt-4 text-2xl font-medium leading-relaxed text-ink md:text-3xl">
                {product.why.problem}
              </h2>
              <div className="mt-6 space-y-5 text-sm leading-8 text-muted md:text-base md:leading-9">
                {product.why.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* 技術構成 */}
        {product.how && (
          <Reveal delay={0.05}>
            <section className="mt-16 border-t border-line pt-14">
              <p className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: accentText }}>
                Stack
              </p>
              <h2 className="mt-4 text-2xl font-medium text-ink md:text-3xl">使ったもの</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {product.how.stack.map((s) => (
                  <div key={s.label} className="rounded-xl border border-line p-5">
                    <p
                      className="text-xs font-medium uppercase tracking-[0.2em]"
                      style={{ color: accentText }}
                    >
                      {s.label}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-2 text-xs leading-6 text-muted">
                          <span aria-hidden="true" style={{ color: accent }}>
                            —
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {/* 進め方 */}
        {product.how?.steps && (
          <Reveal delay={0.05}>
            <section className="mt-16 border-t border-line pt-14">
              <p className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: accentText }}>
                Process
              </p>
              <h2 className="mt-4 text-2xl font-medium text-ink md:text-3xl">どう進めたか</h2>
              <ol className="mt-8 space-y-0">
                {product.how.steps.map((step) => (
                  <li key={step.number} className="grid gap-3 border-t border-line py-7 md:grid-cols-[80px_1fr]">
                    <span className="text-sm font-semibold tabular-nums" style={{ color: accentText }}>
                      {step.number}
                    </span>
                    <div>
                      <p className="text-base font-medium text-ink">{step.title}</p>
                      <p className="mt-2 text-sm leading-8 text-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
        )}

        {product.how?.after && (
          <Reveal delay={0.05}>
            <section className="mt-16 border-t border-line pt-14">
              <p className="text-xs font-medium uppercase tracking-[0.32em]" style={{ color: accentText }}>
                After release
              </p>
              <h2 className="mt-4 text-2xl font-medium text-ink md:text-3xl">{product.how.after.heading}</h2>
              <div className="mt-6 space-y-5 text-sm leading-8 text-muted md:text-base md:leading-9">
                {product.how.after.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        <Reveal delay={0.05} className="mt-16 border-t border-line pt-10">
          <Link href="/#works" className="text-sm font-medium text-neo-blueInk hover:underline">
            ← つくってきたもの一覧へ
          </Link>
        </Reveal>
      </article>

      <CtaBanner />
    </main>
  );
}
