import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { products, type Product } from "@/lib/products";

/** 自社プロダクトのみ掲載。参加しているだけのプロジェクトは /story で扱う */
const ownProducts: Product[] = products.filter((p) => p.ownProduct !== false);

export const metadata: Metadata = {
  title: "Product | NEOWRITE",
  description:
    "NEOWRITEが企画・開発・運営する自社プロダクト。GOEN（イベントクチコミサービス）とMyHood（コミュニティSNS）。",
};

function ProductShowcase({ product }: { product: Product }) {
  return (
    <a
      href={`#${product.id}`}
      className="group flex-shrink-0 w-[280px] md:w-[340px] snap-start overflow-hidden rounded-2xl border border-line bg-white p-8 transition-shadow hover:shadow-xl"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="flex justify-center">
        {product.icon ? (
          <div
            className="overflow-hidden rounded-[24px]"
            style={{ boxShadow: `0 16px 40px ${product.shadowColor}` }}
          >
            <Image
              src={product.icon}
              alt={`${product.name} icon`}
              width={96}
              height={96}
              className="h-24 w-24 object-cover"
            />
          </div>
        ) : (
          <div
            className="flex h-24 w-24 items-center justify-center rounded-[24px] text-3xl font-bold text-white"
            style={{ backgroundColor: product.accentColor }}
          >
            {product.name[0]}
          </div>
        )}
      </div>
      <div className="mt-6 text-center">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-2xl font-semibold text-ink">{product.name}</span>
          {product.kana && <span className="text-xs text-muted">{product.kana}</span>}
        </div>
        <p className="mt-2 text-sm leading-6 text-muted">{product.tagline}</p>
        <span
          className="mt-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: `${product.accentColor}18`, color: product.textColor }}
        >
          {product.status === "released" ? "リリース済み" : product.status === "development" ? "開発中" : "近日公開"}
        </span>
        <p
          className="mt-5 text-xs font-medium transition-colors group-hover:underline"
          style={{ color: product.textColor }}
        >
          詳しく見る →
        </p>
      </div>
    </a>
  );
}

function ComingSoonCard() {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[340px] snap-start flex items-center justify-center rounded-2xl border border-dashed border-line bg-white/60 p-8">
      <div className="text-center">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[24px] bg-line/60">
          <span className="text-3xl text-muted/40">+</span>
        </div>
        <p className="mt-6 text-sm font-medium text-muted">Next product</p>
        <p className="mt-1 text-xs text-muted/50">開発中...</p>
      </div>
    </div>
  );
}

function ProductDetail({ product }: { product: Product }) {
  const accent = product.accentColor;
  const accentText = product.textColor;
  return (
    <section id={product.id} className="scroll-mt-24 border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          {product.icon ? (
            <div className="flex justify-center md:justify-start">
              <div
                className="overflow-hidden rounded-[32px]"
                style={{ boxShadow: `0 24px 60px ${product.shadowColor}, 0 4px 16px rgba(0,0,0,0.08)` }}
              >
                <Image
                  src={product.icon}
                  alt={`${product.name} icon`}
                  width={140}
                  height={140}
                  className="h-[140px] w-[140px] object-cover"
                />
              </div>
            </div>
          ) : (
            <div
              className="flex h-[140px] w-[140px] items-center justify-center rounded-[32px] text-4xl font-bold text-white"
              style={{ backgroundColor: accent }}
            >
              {product.name[0]}
            </div>
          )}
          <div>
            <div className="flex items-baseline gap-3">
              <h2 className="text-5xl font-semibold leading-none text-ink md:text-7xl">{product.name}</h2>
              {product.kana && <span className="text-base font-normal text-muted">{product.kana}</span>}
            </div>
            <p className="mt-5 text-2xl font-medium leading-snug text-ink md:text-3xl">{product.tagline}</p>
            <p className="mt-5 max-w-xl text-sm leading-8 text-muted md:text-base md:leading-9">{product.description}</p>
            {product.url && (
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
                  style={{ boxShadow: `inset 0 -2px 0 ${accent}` }}
                >
                  {product.name}を開く →
                </Link>
              </div>
            )}
          </div>
        </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Link href={`/story/${product.id}`} className="text-sm font-medium hover:underline" style={{ color: accentText }}>
            開発ストーリーを読む →
          </Link>
        </Reveal>

        {product.features && (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((f, i) => (
              <Reveal key={f.number} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-md">
                  <p className="text-xs font-medium" style={{ color: accentText }}>{f.number}</p>
                  <h3 className="mt-4 text-base font-medium leading-relaxed text-ink">{f.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <main id="main" className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[radial-gradient(ellipse_at_20%_0%,rgba(16,184,154,0.13),transparent_50%),radial-gradient(ellipse_at_80%_0%,rgba(29,167,216,0.10),transparent_50%)] pb-12 pt-20 md:pb-16 md:pt-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-blueInk">Product</p>
          <h1
            className="mt-4 font-semibold leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            プロダクト
          </h1>
          <p className="mt-5 text-base text-muted md:text-lg">
            社会の課題をテクノロジーで解くために、開発・運営しているサービスです。
          </p>
        </div>

        {/* Horizontal scroll showcase */}
        <div className="mt-12 px-5 md:px-8">
          <div
            className="flex gap-4 overflow-x-auto pb-4"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
          >
            <div className="flex-shrink-0 w-5 md:hidden" />
            {ownProducts.map((p) => (
              <ProductShowcase key={p.id} product={p} />
            ))}
            <ComingSoonCard />
            <div className="flex-shrink-0 w-5 md:hidden" />
          </div>
        </div>
      </div>

      {/* Detail sections */}
      {ownProducts.map((product) => (
        <ProductDetail key={product.id} product={product} />
      ))}

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <p className="text-sm leading-7 text-muted">
            この2つは、企画から設計・開発・リリース・運用まで一人で通した実例です。
            <br className="hidden sm:block" />
            同じように、あなたのプロダクト開発の受託も可能です。
          </p>
        </div>
      </section>
      <CtaBanner />
    </main>
  );
}
