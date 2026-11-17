"use client";

import Link from "next/link";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useSpring } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { FLOW_STEPS } from "@/src/config/service";

/** 進め方。スクロールに連動して縦の接続線が伸びる */
export default function Flow() {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 });

  return (
    <section
      id="flow"
      className="scroll-mt-24 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-teal">Flow</p>
          <h2 className="mt-4 text-3xl font-medium leading-snug text-ink md:text-5xl">進め方</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted md:leading-9">
            ご相談から公開・改善まで、6つの段階で進めます。進め方は、ご依頼内容によって柔軟に変更します。
          </p>
        </Reveal>

        <div className="relative mt-14 max-w-3xl">
          <div className="absolute bottom-4 left-[27px] top-4 w-[2px] bg-line" aria-hidden="true" />
          <m.div
            className="absolute bottom-4 left-[27px] top-4 w-[2px] origin-top bg-gradient-to-b from-neo-teal via-neo-blue to-neo-green"
            style={{ scaleY: reduced ? 1 : progress }}
            aria-hidden="true"
          />

          <Reveal>
            <ol ref={ref} className="space-y-10">
              {FLOW_STEPS.map((step) => (
                <li key={step.number} className="relative flex gap-6">
                    <span
                      className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-neo-teal bg-white text-base font-bold text-neo-teal"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                    <div className="flex-1 pt-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-ink md:text-xl">
                          <span className="sr-only">ステップ{Number(step.number)}：</span>
                          {step.title}
                        </h3>
                        <span className="rounded-full bg-[rgba(14,111,120,0.08)] px-3 py-1 text-sm font-semibold text-neo-teal">
                          {step.badge}
                        </span>
                      </div>
                      <p className="mt-3 text-base leading-8 text-muted">{step.body}</p>
                    </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center gap-3 bg-neo-greenInk px-9 py-4 text-base font-bold text-white shadow-[0_16px_38px_rgba(11,122,102,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(11,122,102,0.4)]"
          >
            相談する
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
