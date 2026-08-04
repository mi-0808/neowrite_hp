"use client";

import Link from "next/link";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FACTS } from "@/lib/facts";

const steps = [
  {
    number: "01",
    title: "ご相談",
    body: "フォームまたはメールでご連絡ください。「まだ相談レベル」で大丈夫です。",
    action: "やりたいことを、ざっくり書くだけ",
    badge: `${FACTS.replyDays}営業日以内に返信`,
    highlight: true,
  },
  {
    number: "02",
    title: "ヒアリング・お見積り",
    body: "目的と予算感を伺い、進め方とお見積りをご提案します。合わないと感じたら、断っていただいて構いません。",
    action: "提案を確認して判断する",
    badge: "提案の可否はご自由に",
    highlight: false,
  },
  {
    number: "03",
    title: "制作・実装",
    body: "進捗を共有しながら進めます。途中の確認ポイントで方向修正できます。",
    action: "確認ポイントでフィードバック",
    badge: "進捗は随時共有",
    highlight: false,
  },
  {
    number: "04",
    title: "納品・運用",
    body: "納品して終わりではなく、公開後の運用・改善までご相談いただけます。",
    action: "気づいたことを気軽に投げる",
    badge: "運用まで伴走",
    highlight: false,
  },
];

/** ご依頼の流れ。スクロールに連動して接続線が伸び、ステップが点灯する */
export default function Flow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 });

  // 各ステップ番号の点灯タイミング（線の到達に合わせる）
  const glow0 = useTransform(progress, [0.0, 0.12], [0.3, 1]);
  const glow1 = useTransform(progress, [0.22, 0.37], [0.3, 1]);
  const glow2 = useTransform(progress, [0.47, 0.62], [0.3, 1]);
  const glow3 = useTransform(progress, [0.72, 0.87], [0.3, 1]);
  const glows = [glow0, glow1, glow2, glow3];

  return (
    <section
      id="flow"
      className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-teal">Flow</p>
          <h2 className="mt-4 text-3xl font-medium leading-snug text-ink md:text-5xl">
            ご依頼は、4ステップで進みます。
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-muted md:text-base md:leading-9">
            窓口から実装まで、同じ一人。初めての外注でも迷わないように、進め方を先に全部お見せします。
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-14">
          {/* 接続線（PC: 水平 / モバイル: 垂直） */}
          <div className="absolute left-[27px] top-0 hidden h-[2px] w-[calc(100%-54px)] bg-line lg:left-0 lg:top-[27px] lg:block lg:w-full" aria-hidden="true" />
          <m.div
            className="absolute hidden h-[2px] origin-left bg-gradient-to-r from-neo-teal via-neo-blue to-neo-green lg:left-0 lg:top-[27px] lg:block lg:w-full"
            style={{ scaleX: reduced ? 1 : progress }}
            aria-hidden="true"
          />
          <div className="absolute bottom-4 left-[31px] top-4 w-[2px] bg-line lg:hidden" aria-hidden="true" />
          <m.div
            className="absolute bottom-4 left-[31px] top-4 w-[2px] origin-top bg-gradient-to-b from-neo-teal via-neo-blue to-neo-green lg:hidden"
            style={{ scaleY: reduced ? 1 : progress }}
            aria-hidden="true"
          />

          <Stagger interval={0.15} className="grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <StaggerItem key={step.number} className="h-full">
                <div className="relative flex h-full gap-5 pl-2 lg:flex-col lg:gap-0 lg:pl-0">
                  {/* 番号ノード */}
                  <m.div
                    className="relative z-10 flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-full border-2 border-neo-teal bg-white text-sm font-bold text-neo-teal lg:h-[56px] lg:w-[56px] lg:text-base"
                    style={{ opacity: reduced ? 1 : glows[index] }}
                  >
                    {step.number}
                  </m.div>

                  <div className="flex-1 pb-2 lg:mt-6 lg:pb-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-ink md:text-xl">{step.title}</h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                          step.highlight
                            ? "bg-neo-orange/12 text-[#B34E00]"
                            : "bg-neo-teal/8 text-neo-teal"
                        }`}
                        style={
                          step.highlight
                            ? { backgroundColor: "rgba(255,119,24,0.12)" }
                            : { backgroundColor: "rgba(14,111,120,0.08)" }
                        }
                      >
                        {step.badge}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
                    <p className="mt-3 text-xs leading-6 text-neo-teal">
                      <span className="font-semibold">あなたがすること：</span>
                      {step.action}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* インラインCTA */}
        <Reveal delay={0.15} className="mt-14 text-center">
          <p className="text-sm text-muted">まずは Step 01 から。</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center gap-3 bg-neo-orange px-9 py-4 text-sm font-bold text-white shadow-[0_16px_38px_rgba(255,119,24,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(255,119,24,0.4)]"
          >
            相談する
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
