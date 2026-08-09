"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FACTS } from "@/lib/facts";

const faqs = [
  {
    q: "個人事業への発注が初めてで不安です。",
    a: `代表1人の事業だからこそ、意思決定が速く、担当者が変わりません。連絡窓口は最初の返信から納品まで同じです。開業届を提出した個人事業主として、請求書の発行にも対応します。`,
  },
  {
    q: "連絡はどのくらいの頻度で取れますか？",
    a: `ご連絡には${FACTS.replyDays}営業日以内に返信します。制作中は確認ポイントごとに進捗を共有しながら進めるので、「投げたきり音沙汰がない」状態にはしません。`,
  },
  {
    q: "対応エリアはどこまでですか？",
    a: `${FACTS.location}を拠点に、全国リモートで対応しています。打ち合わせはオンラインで行うため、所在地に関わらずご相談いただけます。`,
  },
  {
    q: "予算が決まっていなくても相談できますか？",
    a: "はい。目的とやりたいことから一緒に整理して、進め方とお見積りをご提案します。提案内容が合わなければ、断っていただいて構いません。",
  },
  {
    q: "どのサービスに当てはまるか分かりません。",
    a: "そのままご相談ください。課題の整理からお手伝いします。システム開発・Web制作・SNS運用のどれか（または組み合わせ）に落とし込んで、進め方をご提案します。",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="flex items-baseline gap-4">
          <span className="text-xs font-semibold tabular-nums text-neo-teal">Q{index + 1}</span>
          <span className="text-sm font-medium leading-7 text-ink transition-colors group-hover:text-neo-teal md:text-base">
            {q}
          </span>
        </span>
        <span
          className={`flex-shrink-0 text-lg text-neo-teal transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {/* height:auto を避け grid-rows で開閉（CLSなし・reduced-motionではCSSが即時切替） */}
      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        {/* 閉状態は高さ0でも支援技術には残るため aria-hidden で明示的に隠す */}
        <div className="overflow-hidden" aria-hidden={!open}>
          <p className="pb-6 pl-9 pr-2 text-sm leading-8 text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="border-b border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-teal">FAQ</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">よくあるご質問</h2>
        </Reveal>

        <Stagger interval={0.07} className="mt-10 border-t border-line">
          {faqs.map((faq, index) => (
            <StaggerItem key={faq.q}>
              <FaqItem q={faq.q} a={faq.a} index={index} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
