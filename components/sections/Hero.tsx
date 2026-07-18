// filepath: components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-neo-teal/10 bg-[radial-gradient(circle_at_82%_24%,rgba(244,245,54,0.22),transparent_14rem),radial-gradient(circle_at_76%_40%,rgba(29,167,216,0.16),transparent_22rem),linear-gradient(180deg,#ffffff_0%,#f4fffc_100%)]"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-neo-green via-neo-blue to-neo-yellow" />
      <div className="mx-auto flex min-h-[calc(100svh-65px)] max-w-7xl flex-col px-5 pb-10 pt-16 md:px-8 md:pb-12 md:pt-24">

        {/* モバイル: ロゴを中央表示 */}
        <Reveal className="flex justify-center lg:hidden">
          <div className="drop-shadow-[0_20px_40px_rgba(14,111,120,0.18)]">
            <Image
              src="/neowrite-icon-cutout.png"
              alt="NEOWRITE logo"
              width={160}
              height={137}
              priority
              className="h-auto w-[160px] object-contain"
            />
          </div>
        </Reveal>

        {/* メインコンテンツ */}
        <Reveal delay={0.08} className="mt-10 flex-1 lg:mt-0">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="text-center lg:text-left">
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">
                Corporate Studio
              </p>
              <h1 className="mt-6 text-[clamp(2.6rem,8.7vw,8rem)] font-medium leading-[1.08] tracking-normal text-ink lg:mt-8 lg:max-w-5xl">
                <span className="block">次世代の挑戦を</span>
                <span className="block">テクノロジーで</span>
                <span className="block">形にする。</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-8 text-muted lg:mx-0 lg:mt-8 lg:text-lg lg:leading-9">
                システム開発・Web制作・SNS運用を通じて、次世代を本気でつくろうとする企業様の挑戦を支えます。
              </p>

              {/* モバイル: CTAボタンをここに表示 */}
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:hidden">
                <Link
                  href="#works"
                  className="group inline-flex w-full items-center justify-center gap-3 border border-[#FED7AA] bg-[linear-gradient(135deg,rgba(255,119,24,0.92),rgba(16,184,154,0.92))] px-7 py-3 text-sm font-medium text-white shadow-[0_16px_38px_rgba(16,184,154,0.18)] transition-opacity duration-300 hover:opacity-85 sm:w-auto"
                >
                  GOENとは？
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
                <Link
                  href="#services"
                  className="group inline-flex w-full items-center justify-center gap-3 border border-neo-teal/20 bg-white/75 px-7 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-colors duration-300 hover:border-neo-blue/40 hover:bg-white sm:w-auto"
                >
                  事業内容を見る
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* PC: ロゴを右側に表示 */}
            <div className="hidden justify-self-end lg:block">
              <div className="drop-shadow-[0_28px_55px_rgba(14,111,120,0.18)]">
                <Image
                  src="/neowrite-icon-cutout.png"
                  alt="NEOWRITE logo"
                  width={320}
                  height={274}
                  priority
                  className="h-auto w-[320px] object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* PC: ボトムエリア（ペインポイント + CTA） */}
        <Reveal delay={0.12} className="mt-auto pt-16 lg:block">
          <div className="border-t border-neo-teal/15 pt-8">
            <div className="mx-auto max-w-2xl text-center text-sm font-normal leading-7 text-muted">
              <p>「やりたいことはあるが、どう形にすればいいかわからない」</p>
              <p>「若い力に任せたいが、信頼できるパートナーが見つからない」</p>
              <p>そんなお悩みに、私たちは全力で向き合います。</p>
            </div>
            {/* PC のみ CTA ボタン表示 */}
            <div className="mt-7 hidden flex-col items-center justify-center gap-3 sm:flex-row lg:flex">
              <Link
                href="#works"
                className="group inline-flex w-full items-center justify-center gap-3 border border-[#FED7AA] bg-[linear-gradient(135deg,rgba(255,119,24,0.92),rgba(16,184,154,0.92))] px-7 py-3 text-sm font-medium text-white shadow-[0_16px_38px_rgba(16,184,154,0.18)] transition-opacity duration-300 hover:opacity-85 sm:w-auto"
              >
                GOENとは？
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link
                href="#services"
                className="group inline-flex w-full items-center justify-center gap-3 border border-neo-teal/20 bg-white/75 px-7 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-colors duration-300 hover:border-neo-blue/40 hover:bg-white sm:w-auto"
              >
                事業内容を見る
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
