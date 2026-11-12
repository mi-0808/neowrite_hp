"use client";

import Image from "next/image";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { works } from "@/lib/works";

/** つくってきたもの。カードの作りは Products に寄せている */
export default function Works() {
  const reduced = useReducedMotion();
  return (
    <section
      id="works"
      className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f4fffc_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-neo-greenInk">Works</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">つくってきたもの</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
            企画・設計・開発・リリース・運用まで、一人で通せることの証明です。守秘義務のある案件は発注元を伏せ、扱った内容のみ掲載しています。
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {works.map((work, index) => (
            <m.article
              key={work.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-8 md:p-10"
              initial={reduced ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="absolute inset-x-0 top-0 h-1"
                style={{ backgroundColor: work.accentColor }}
                aria-hidden="true"
              />

              {work.image && (
                <div className="relative -mx-8 -mt-8 mb-7 aspect-[16/9] overflow-hidden border-b border-line md:-mx-10 md:-mt-10">
                  <Image
                    src={work.image.src}
                    alt={work.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: `${work.accentColor}14`, color: work.textColor }}
                >
                  {work.status}
                </span>
                <time className="text-xs font-medium tabular-nums text-muted">{work.period}</time>
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-9 text-ink md:text-3xl">{work.label}</h3>

              <p className="mt-4 text-base leading-8 text-muted">{work.what}</p>
              {work.designNote && (
                <p className="mt-3 text-base leading-8 text-ink">
                  <span className="font-semibold">デザインで判断したこと：</span>
                  {work.designNote}
                </p>
              )}

              <p className="mt-5 text-sm font-medium text-ink">役割：{work.role}</p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {work.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(work.url || work.storyHref) && (
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
                  {work.url && (
                    <Link
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        // 白文字とのコントラストを確保するため文字用の濃い色で塗る
                        backgroundColor: work.textColor,
                        boxShadow: `0 12px 28px ${work.accentColor}47`,
                      }}
                    >
                      実際に触ってみる
                      <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                  {work.storyHref && (
                    <Link
                      href={work.storyHref}
                      className="inline-flex min-h-[44px] items-center text-sm font-medium text-muted underline underline-offset-4 transition-colors hover:text-ink"
                    >
                      開発ストーリー →
                    </Link>
                  )}
                </div>
              )}
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
