"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { products } from "@/lib/products";

/** 自社プロダクト。「一人で企画〜リリースまで通せる」ことの証明 */
export default function Products() {
  return (
    <section
      id="products"
      className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f4fffc_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-neo-greenInk">Products</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">
            受託だけでなく、自分でもつくっています
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted md:text-base">
            企画・設計・開発・リリース・運用まで、一人で通せることの証明です。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product, index) => {
            const released = product.status === "released";
            return (
              <m.article
                key={product.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-8 md:p-10"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-5">
                  {product.icon && (
                    <div
                      className="flex-shrink-0 overflow-hidden rounded-[22%] transition-transform duration-300 group-hover:scale-105"
                      style={{ boxShadow: `0 14px 34px ${product.shadowColor}` }}
                    >
                      <Image
                        src={product.icon}
                        alt={`${product.name} icon`}
                        width={72}
                        height={72}
                        className="h-[72px] w-[72px] object-cover"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="text-2xl font-semibold text-ink md:text-3xl">{product.name}</h3>
                      {product.kana && <span className="text-xs text-muted">{product.kana}</span>}
                    </div>
                    <span
                      className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                        released ? "bg-neo-green/12 text-neo-greenInk" : "bg-neo-blue/10 text-neo-blueInk"
                      }`}
                      style={released ? { backgroundColor: "rgba(16,184,154,0.12)" } : undefined}
                    >
                      {!released && (
                        <span className="h-1.5 w-1.5 animate-blink-dot rounded-full bg-neo-blue" aria-hidden="true" />
                      )}
                      {released ? "リリース済み" : "IN DEVELOPMENT"}
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-base font-medium text-ink">{product.tagline}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{product.description}</p>

                <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                  {product.url && (
                    <Link
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 ${
                        released ? "bg-neo-orange shadow-[0_12px_28px_rgba(255,119,24,0.28)]" : "bg-neo-blue shadow-[0_12px_28px_rgba(29,167,216,0.28)]"
                      }`}
                    >
                      実際に触ってみる
                      <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                  <Link
                    href={`/product#${product.id}`}
                    className="text-sm font-medium text-muted transition-colors hover:text-ink"
                  >
                    開発ストーリー →
                  </Link>
                </div>
              </m.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
