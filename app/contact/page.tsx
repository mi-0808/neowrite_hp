import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { CONTACT_TERMS, FACTS } from "@/lib/facts";
import { FLOW_STEPS } from "@/src/config/service";

export const metadata: Metadata = {
  title: "お問い合わせ｜NEOWRITE",
  description: `NEOWRITEへのお問い合わせはこちらから。制作依頼・ご相談など、お気軽にお送りください。${FACTS.replyDays}営業日以内に返信します。`,
};

const flowSteps = FLOW_STEPS.map((step) => step.title);

export default function ContactPage() {
  return (
    <main id="main" className="bg-[radial-gradient(circle_at_14%_18%,rgba(16,184,154,0.10),transparent_20rem),radial-gradient(circle_at_92%_10%,rgba(29,167,216,0.10),transparent_20rem),#ffffff]">
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
        {/* ページヘッダー */}
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-neo-teal">Contact</p>
          <h1 className="mt-5 text-4xl font-medium leading-tight text-ink md:text-6xl">
            お問い合わせ
          </h1>
          <p className="mt-6 max-w-xl text-sm font-normal leading-8 text-muted md:text-base md:leading-9">
            「まだ相談レベル」で大丈夫です。やりたいことを、ざっくり書いてお送りください。
          </p>
        </Reveal>

        {/* 連絡の条件 */}

        <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6">
          {CONTACT_TERMS.map((term) => (
            <div key={term.label} className="flex items-baseline gap-3">
              <dt className="text-sm text-muted">{term.label}</dt>
              <dd className="text-base font-medium text-ink">{term.value}</dd>
            </div>
          ))}
        </dl>

        {/* いまStep 01 にいる */}
        <Reveal delay={0.1} className="mt-10">
          <div className="rounded-xl border border-neo-teal/15 bg-white/80 p-5 backdrop-blur-sm">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neo-teal">Flow</p>
            <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs">
              {flowSteps.map((label, i) => (
                <li key={label} className="flex items-center gap-2">
                  <span
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium ${
                      i === 0
                        ? "bg-neo-greenInk text-white shadow-[0_6px_16px_rgba(11,122,102,0.3)]"
                        : "border border-line bg-white text-muted"
                    }`}
                  >
                    <span className="font-bold">0{i + 1}</span>
                    {label}
                    {i === 0 && <span className="ml-1 font-bold">← いまここ</span>}
                  </span>
                  {i < flowSteps.length - 1 && (
                    <span className="text-line" aria-hidden="true">→</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-6">
          <p className="text-sm text-muted">
            メール派の方はこちら：
            <Link
              href={`mailto:${FACTS.email}`}
              className="ml-1 text-neo-teal underline-offset-4 hover:underline"
            >
              {FACTS.email}
            </Link>
          </p>
        </Reveal>

        {/* Google Form 埋め込み */}
        <Reveal delay={0.15} className="mt-8">
          <div className="overflow-hidden rounded-xl border border-neo-teal/15 bg-white shadow-[0_8px_40px_rgba(14,111,120,0.08)]">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfsHge1-tg_g0znaVXoZT_UxfQoEXV6cVZjSzxILxWVnOtfPw/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="block w-full"
              title="お問い合わせフォーム"
            >
              読み込んでいます…
            </iframe>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
