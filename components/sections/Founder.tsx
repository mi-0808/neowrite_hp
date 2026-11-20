"use client";

import Link from "next/link";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useSpring } from "framer-motion";
import ProfilePhoto from "@/components/ProfilePhoto";
import SocialLinks from "@/components/SocialLinks";
import Reveal from "@/components/motion/Reveal";
import { FACTS } from "@/lib/facts";

const timeline = [
  { year: "2022", label: "事業活動を開始", detail: "SNS運用・ライティングの受注からスタート" },
  { year: "2023", label: "NEOWRITEを開業", detail: "Web制作・ライティングの受注を開始" },
  { year: "2024", label: "企業SNSの運用代行を受託開始", detail: "GOENの企画・開発も開始" },
  { year: "2025", label: "自社プロダクト「GOEN」をリリース", detail: "中部シイアイシイ研究所にてAIシステム開発に参画（リーダー）" },
  { year: "2026", label: "青海株式会社にてWebアプリ開発を担当", detail: `${FACTS.pressName}にインタビュー掲載。MyHood開発中` },
];

const skills = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "Supabase",
  "Firebase",
  "PostgreSQL",
  "Vercel",
];

export default function Founder() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 });

  return (
    <section id="profile" className="border-b border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-teal">Profile</p>
          <h2 className="mt-4 text-3xl font-medium leading-snug text-ink md:text-5xl">
            プロフィール
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[300px_1fr] md:gap-16">
          {/* 写真（sticky） */}
          <div className="flex justify-center md:block">
            <div className="md:sticky md:top-24">
              <Reveal direction="right" blur duration={0.9} amount={0.25}>
                <div className="relative h-[300px] w-[280px] overflow-hidden rounded-2xl border-l-4 border-neo-teal shadow-[0_16px_48px_rgba(14,111,120,0.16)] md:w-[300px]">
                  <ProfilePhoto sizes="300px" />
                </div>
              </Reveal>
              <div className="mt-5">
                <p className="text-xl font-semibold text-ink">
                  松井 湊
                  <span className="ml-2 text-sm font-normal text-muted">Minato Matsui</span>
                </p>
                <p className="mt-1 text-xs leading-6 text-muted">
                  NEOWRITE 代表
                  <br />
                  N高等学校3年 / {FACTS.location}
                </p>
                <div className="mt-4">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>

          {/* テキスト + 年表 */}
          <div>
            <Reveal>
              <p className="max-w-2xl text-base leading-8 text-muted md:leading-9">
                {FACTS.foundedYear}
                年に事業活動を開始。Web制作・ライティングの継続受注、企業のInstagram運用、AIシステム開発への参画など、企画から実装・運用まで一貫して手がけてきました。自社プロダクト「GOEN」を運営し、現在は「MyHood」を開発中です。すべての案件を、代表が直接担当します。
              </p>
            </Reveal>

            {/* 沿革（スクロール連動年表） */}
            <Reveal delay={0.05} className="mt-12">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neo-teal">History</p>
            </Reveal>
            <div ref={timelineRef} className="relative mt-6 pl-8">
              {/* ベース線 */}
              <span className="absolute bottom-2 left-[5px] top-2 w-[2px] bg-line" aria-hidden="true" />
              {/* 進捗線 */}
              <m.span
                className="absolute bottom-2 left-[5px] top-2 w-[2px] origin-top bg-gradient-to-b from-neo-teal via-neo-blue to-neo-green"
                style={{ scaleY: reduced ? 1 : lineScale }}
                aria-hidden="true"
              />

              <ol className="space-y-9">
                {timeline.map((item, index) => (
                  <m.li
                    key={item.year}
                    className="relative"
                    initial={reduced ? false : { opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span
                      className="absolute -left-8 top-1.5 block h-3 w-3 rounded-full border-2 border-white bg-neo-teal shadow-[0_0_0_2px_rgba(14,111,120,0.25)]"
                      aria-hidden="true"
                    />
                    <p className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-lg font-semibold tabular-nums text-neo-teal">{item.year}</span>
                      <span className="text-base font-medium text-ink">{item.label}</span>
                    </p>
                    <p className="mt-1.5 text-base leading-7 text-muted">{item.detail}</p>
                  </m.li>
                ))}
              </ol>
            </div>

            {/* スキル */}
            <Reveal delay={0.1} className="mt-12">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-neo-teal">Skills</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neo-teal/20 bg-neo-mist px-3.5 py-1.5 text-xs font-medium text-neo-teal"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.15} className="mt-12 border-t border-line pt-8">
              <p className="text-sm font-medium leading-7 text-ink">
                代表の私が、最初の返信から納品まで直接担当します。
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center gap-2 bg-neo-greenInk px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(11,122,102,0.28)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  相談してみる
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/profile"
                  className="inline-flex min-h-[44px] items-center text-sm font-medium text-neo-blueInk underline underline-offset-4"
                >
                  もっと詳しく →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
