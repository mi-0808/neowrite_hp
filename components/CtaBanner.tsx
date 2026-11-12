"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { FACTS } from "@/lib/facts";

type CtaBannerProps = {
  href?: string;
};

/** 全ページ共通のネイビーCTA帯 */
export default function CtaBanner({ href = "/contact" }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-neo-navy">
      {/* 背景の淡い光 */}
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-neo-green/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-neo-blue/15 blur-3xl"
        aria-hidden="true"
      />

      <m.div
        className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-20 text-center md:px-8 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <m.h2
          className="text-3xl font-medium leading-tight text-white md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          まずは、話すだけでも。
        </m.h2>
        <p className="max-w-xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
          相談・お見積りのご連絡には、{FACTS.replyDays}営業日以内に返信します。
          <br className="hidden sm:block" />
          「まだ相談レベル」で大丈夫です。
        </p>
        <m.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={href}
            className="inline-flex items-center gap-3 bg-neo-orangeInk px-10 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(255,119,24,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(255,119,24,0.45)]"
          >
            お問い合わせ
            <span aria-hidden="true">→</span>
          </Link>
        </m.div>
      </m.div>
    </section>
  );
}
