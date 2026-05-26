// filepath: components/sections/Works.tsx
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const features = [
  {
    number: "01",
    title: "雰囲気を先に知る",
    body: "雰囲気タグとレビューで、場の温度感を参加前に想像できるようにする。",
  },
  {
    number: "02",
    title: "ひとり参加の不安を減らす",
    body: "初参加のハードルを下げる「安心の目安」を、体験者の声から可視化する。",
  },
  {
    number: "03",
    title: "レビューが次の一歩になる",
    body: "読んで、参加して、書く。小さな循環が、誰かの挑戦をそっと後押しする。",
  },
  {
    number: "04",
    title: "多様な出会いを扱う",
    body: "交流・ワークショップ・ビジネス・スポーツ・料理など、日常の外側にある機会をひらく。",
  },
] as const;

export default function Works() {
  return (
    <section
      id="works"
      className="border-b border-line bg-[radial-gradient(circle_at_80%_8%,rgba(255,119,24,0.10),transparent_22rem),radial-gradient(circle_at_10%_80%,rgba(255,119,24,0.06),transparent_18rem),linear-gradient(180deg,#ffffff_0%,#fff8f2_100%)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* セクションラベル */}
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#E07020]">
            Product
          </p>
        </Reveal>

        {/* アプリヒーロー */}
        <Reveal delay={0.06} className="mt-10">
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-16">

            {/* アプリアイコン */}
            <div className="flex justify-center md:justify-start">
              <div className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(255,107,0,0.22),0_4px_16px_rgba(0,0,0,0.10)]">
                <Image
                  src="/goen_icons.png"
                  alt="GOEN app icon"
                  width={120}
                  height={120}
                  className="h-[120px] w-[120px] object-cover"
                />
              </div>
            </div>

            {/* テキスト */}
            <div>
              <div className="flex items-baseline gap-3">
                <h2 className="text-6xl font-medium leading-none text-ink md:text-8xl">
                  GOEN
                </h2>
                <span className="text-lg font-normal text-muted">ごえん</span>
              </div>
              <h3 className="mt-5 text-3xl font-medium leading-tight text-ink md:text-5xl">
                次のイベント、一緒に探そう。
              </h3>
              <p className="mt-5 max-w-2xl text-sm font-normal leading-8 text-muted md:text-base md:leading-9">
                雰囲気・ひとり参加しやすさを可視化したクチコミで、安心して選べるイベントクチコミサービス。
              </p>
              <div className="mt-7">
                <Link
                  href="https://goen-self.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4 bg-ink px-6 py-3 text-sm font-medium text-white shadow-[inset_0_-2px_0_#FF7718] transition-opacity duration-300 hover:opacity-80"
                >
                  GOENを見る
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Why we made it */}
        <Reveal delay={0.10} className="mt-14">
          <div className="grid gap-10 border-y border-[#FF7718]/25 bg-white/60 py-12 md:grid-cols-[1fr_1.1fr] md:py-16">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#E07020]">
                Why we made it
              </p>
              <p className="mt-5 text-2xl font-medium leading-relaxed text-ink md:text-3xl">
                イベントに行きたくても、雰囲気が分からなくて踏み出せない。
              </p>
            </div>
            <div className="space-y-5 text-sm font-normal leading-8 text-muted md:text-base md:leading-9">
              <p>
                GOENは、その小さな不安から生まれる若者の孤独と機会損失を減らすために開発しました。イベントは、情報だけでなく、そこにいる人や空気まで含めて選ばれるべきだと考えています。
              </p>
              <p>
                レビューを単なる評価ではなく、次に参加する人への「安心の目安」として設計する。GOENは、テクノロジーで社会問題を解くNEOWRITEの思想を体現するプロダクトです。
              </p>
            </div>
          </div>
        </Reveal>

        {/* フィーチャーカード */}
        <div className="mt-10 grid gap-px bg-[#FF7718]/15 md:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.number} delay={index * 0.08} className="bg-white">
              <article className="h-full bg-white p-6 transition-colors duration-300 hover:bg-[#FFF4EE] md:p-8">
                <p className="text-xs font-medium text-[#E07020]">{feature.number}</p>
                <h4 className="mt-5 text-xl font-medium leading-relaxed text-ink">
                  {feature.title}
                </h4>
                <p className="mt-4 text-sm font-normal leading-8 text-muted">{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
