import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { works } from "@/lib/works";

/** つくってきたもの。1件ずつ横長の行で、役割と体制を表で見せる */
export default function Works() {
  return (
    <section
      id="works"
      className="scroll-mt-24 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f4fffc_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-neo-greenInk">Works</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">つくってきたもの</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
            一人で作ったもの、チームで作ったもの、チームを率いて作ったもの。守秘義務のある案件は発注元を伏せ、扱った内容のみ掲載しています。
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {works.map((work) => (
            <Reveal key={work.id}>
              <article className="grid gap-8 py-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
                {work.image && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-white">
                    <Image
                      src={work.image.src}
                      alt={work.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-top"
                    />
                  </div>
                )}

                <div className="min-w-0">
                  <p className="text-sm font-medium text-muted">
                    <span style={{ color: work.textColor }}>{work.kind}</span>
                    <span className="mx-2 text-line" aria-hidden="true">
                      |
                    </span>
                    <time className="tabular-nums">{work.period}</time>
                  </p>
                  {/* 製品名を見出しにし、開発ストーリーやプロダクトページと名前を揃える */}
                  <h3 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-4xl">{work.name}</h3>
                  <p className="mt-2 text-lg font-medium leading-snug text-muted [word-break:auto-phrase]">
                    {work.label}
                  </p>

                  <dl className="mt-6 grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 text-base leading-7">
                    <dt className="text-muted">役割</dt>
                    <dd className="font-medium text-ink">{work.role}</dd>
                    <dt className="text-muted">体制</dt>
                    <dd className="font-medium text-ink">{work.team}</dd>
                    <dt className="text-muted">状況</dt>
                    <dd className="text-ink">{work.status}</dd>
                    <dt className="text-muted">技術</dt>
                    <dd className="text-ink">{work.tech.join(" / ")}</dd>
                  </dl>

                  <p className="mt-6 text-base leading-8 text-muted">{work.what}</p>
                  {work.designNote && (
                    <p className="mt-3 text-base leading-8 text-ink">
                      <span className="font-semibold">デザインで判断したこと：</span>
                      {work.designNote}
                    </p>
                  )}

                  {(work.url || work.storyHref) && (
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                      {work.url && (
                        <Link
                          href={work.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
                          // 白文字とのコントラストを確保するため文字用の濃い色で塗る
                          style={{ backgroundColor: work.textColor }}
                        >
                          実際に触ってみる
                          <span aria-hidden="true">↗</span>
                        </Link>
                      )}
                      {work.storyHref && (
                        <Link
                          href={work.storyHref}
                          className="inline-flex min-h-[44px] items-center text-sm font-medium text-ink underline underline-offset-4"
                        >
                          {work.name}の開発ストーリーを読む →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Link
            href="/product"
            className="inline-flex min-h-[44px] items-center gap-3 border border-ink px-7 py-3.5 text-base font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
          >
            プロダクトをもっと詳しく見る
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
