// filepath: components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line bg-white">
      <div className="mx-auto grid min-h-[calc(100svh-65px)] max-w-7xl content-between px-5 pb-10 pt-16 md:px-8 md:pb-12 md:pt-24">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-accent">
                Corporate Studio
              </p>
              <h1 className="mt-8 max-w-5xl whitespace-pre-line text-[clamp(3rem,8.7vw,8rem)] font-medium leading-[1.08] tracking-normal text-ink">
                {`次世代の挑戦を
テクノロジーで形にする。`}
              </h1>
              <p className="mt-8 max-w-2xl text-base font-normal leading-8 text-muted md:text-lg md:leading-9">
                システム開発・Web制作・SNS運用を通じて、次世代を本気でつくろうとする企業様の挑戦を支えます。
              </p>
            </div>
            <div className="hidden justify-self-end lg:block">
              <Image
                src="/neowrite-logo.png"
                alt="NEOWRITE logo"
                width={320}
                height={320}
                priority
                className="h-auto w-[320px] object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-16">
          <div className="flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl text-sm font-normal leading-7 text-muted">
              <p>「やりたいことはあるが、どう形にすればいいかわからない」</p>
              <p>「若い力に任せたいが、信頼できるパートナーが見つからない」</p>
              <p>そんなお悩みに、私たちは全力で向き合います。</p>
            </div>
            <Link
              href="#contact"
              className="group inline-flex w-fit items-center gap-4 bg-ink px-6 py-3 text-sm font-medium text-white transition-opacity duration-300 hover:opacity-80"
            >
              お問い合わせ
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
