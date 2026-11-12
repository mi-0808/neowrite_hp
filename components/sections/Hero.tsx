"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import TextReveal from "@/components/motion/TextReveal";
import { FACTS } from "@/lib/facts";
import { SUB_COPY, TAGLINE_LINES } from "@/src/config/service";


export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -140]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4fffc_100%)]"
    >
      {/* 背景ブロブ（CSSアニメーションのみ） */}
      <div
        className="pointer-events-none absolute -right-24 top-16 h-96 w-96 animate-float rounded-full bg-[radial-gradient(circle,rgba(29,167,216,0.14),transparent_65%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-24 h-[28rem] w-[28rem] animate-pulse-soft rounded-full bg-[radial-gradient(circle,rgba(16,184,154,0.13),transparent_65%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[28%] top-[55%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(244,245,54,0.16),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-neo-green via-neo-blue to-neo-orange" aria-hidden="true" />

      <div className="mx-auto flex min-h-[calc(100svh-65px)] max-w-7xl flex-col px-5 pb-14 pt-14 md:px-8 md:pt-20">
        <m.div
          className="grid flex-1 items-center gap-10 lg:grid-cols-[1fr_340px]"
          style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        >
          <div className="text-center lg:text-left">
            <TextReveal
              lines={TAGLINE_LINES}
              as="h1"
              delay={0.15}
              interval={0.11}
              className="text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[1.14] tracking-normal text-ink"
            />

            <m.p
              className="mx-auto mt-6 max-w-2xl text-base font-normal leading-8 text-muted lg:mx-0 lg:mt-8 lg:text-lg lg:leading-9"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {SUB_COPY}
            </m.p>

            {/* CTA */}
            <m.div
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/contact"
                className="group inline-flex min-h-[44px] w-full items-center justify-center gap-3 bg-neo-orangeInk px-8 py-4 text-base font-bold text-white shadow-[0_16px_38px_rgba(255,119,24,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(255,119,24,0.4)] sm:w-auto"
              >
                まずは相談する
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link
                href="#works"
                className="group inline-flex min-h-[44px] w-full items-center justify-center gap-3 border border-neo-teal/25 bg-white/75 px-8 py-4 text-base font-medium text-ink backdrop-blur-sm transition-colors duration-300 hover:border-neo-teal hover:bg-white sm:w-auto"
              >
                実績を見る
                <span className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true">↓</span>
              </Link>
            </m.div>
            <m.p
              className="mt-4 text-sm text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {FACTS.replyDays}営業日以内に返信します
            </m.p>
          </div>

          {/* ロゴ（PC） */}
          <m.div
            className="hidden justify-self-end lg:block"
            style={reduced ? undefined : { y: logoY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="animate-float drop-shadow-[0_28px_55px_rgba(14,111,120,0.18)]">
              <Image
                src="/neowrite-icon-cutout.png"
                alt=""
                width={340}
                height={291}
                priority
                className="h-auto w-[340px] object-contain"
              />
            </div>
          </m.div>
        </m.div>

        {/* SCROLLインジケータ */}
        <m.div
          className="mt-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          aria-hidden="true"
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">Scroll</span>
          <span className="relative block h-10 w-px overflow-hidden bg-line">
            <span className="absolute left-0 top-0 block h-4 w-px animate-scrollhint bg-neo-teal" />
          </span>
        </m.div>
      </div>
    </section>
  );
}
