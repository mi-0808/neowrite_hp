import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";

// id="works" は Header の "Product → #works" ナビのために維持
export default function Works() {
  return (
    <section id="works" className="border-b border-line bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-blue">Product</p>
              <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">プロダクト</h2>
            </div>
            <Link
              href="/product"
              className="hidden text-sm font-medium text-neo-blue hover:underline md:block"
            >
              すべて見る →
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  {product.icon ? (
                    <div
                      className="overflow-hidden rounded-2xl flex-shrink-0"
                      style={{ boxShadow: `0 8px 20px ${product.shadowColor}` }}
                    >
                      <Image
                        src={product.icon}
                        alt={`${product.name} icon`}
                        width={56}
                        height={56}
                        className="h-14 w-14 object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white"
                      style={{ backgroundColor: product.accentColor }}
                    >
                      {product.name[0]}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-medium text-ink">{product.name}</span>
                      {product.kana && (
                        <span className="text-xs text-muted">{product.kana}</span>
                      )}
                    </div>
                    <span
                      className="mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        backgroundColor: `${product.accentColor}18`,
                        color: product.accentColor,
                      }}
                    >
                      {product.status === "released" ? "リリース済み" : product.status === "development" ? "開発中" : "近日公開"}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-muted">{product.description}</p>

                <div className="mt-5 flex items-center justify-between">
                  {product.url && (
                    <Link
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium hover:underline"
                      style={{ color: product.accentColor }}
                    >
                      アプリを開く →
                    </Link>
                  )}
                  <Link
                    href={`/product#${product.id}`}
                    className="ml-auto text-xs font-medium text-muted hover:text-ink"
                  >
                    詳細 →
                  </Link>
                </div>
              </div>
            ))}

            {/* Coming soon placeholder */}
            <div className="flex items-center justify-center rounded-xl border border-dashed border-line bg-white/60 p-6 text-center">
              <div>
                <p className="text-sm font-medium text-muted">Next product</p>
                <p className="mt-1 text-xs text-muted/60">開発中...</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-8 md:hidden">
          <Link
            href="/product"
            className="block text-center text-sm font-medium text-neo-blue hover:underline"
          >
            すべてのプロダクトを見る →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
