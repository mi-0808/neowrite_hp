// filepath: components/sections/Contact.tsx
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FACTS } from "@/lib/facts";

const promises = [
  { icon: "⏱", label: `${FACTS.replyDays}営業日以内に返信` },
  { icon: "✉", label: "メールでもフォームでもOK" },
  { icon: "🌏", label: "全国リモート対応" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[radial-gradient(circle_at_14%_18%,rgba(16,184,154,0.12),transparent_18rem),radial-gradient(circle_at_92%_10%,rgba(29,167,216,0.12),transparent_18rem),#ffffff] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-teal">Contact</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-ink md:text-6xl">
            まずは、話すところから。
          </h2>
        </Reveal>

        {/* 約束3点 */}
        <Stagger interval={0.08} className="mt-8 flex flex-wrap gap-3">
          {promises.map((promise) => (
            <StaggerItem key={promise.label}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-neo-teal/20 bg-white/85 px-4 py-2 text-xs font-medium text-ink backdrop-blur-sm md:text-sm">
                <span aria-hidden="true">{promise.icon}</span>
                {promise.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-px overflow-hidden rounded-xl border border-neo-teal/15 bg-neo-teal/15 md:grid-cols-2">
            <Link
              href={`mailto:${FACTS.email}`}
              className="group bg-white/90 p-8 transition-colors duration-300 hover:bg-neo-mist md:p-10"
            >
              <p className="text-xs font-semibold text-neo-teal">Email</p>
              <h3 className="mt-4 text-2xl font-medium text-ink md:text-3xl">メールで相談</h3>
              <p className="mt-4 text-sm font-normal leading-8 text-muted">
                内容を確認し、{FACTS.replyDays}営業日以内にご返信します。
              </p>
              <span className="mt-7 inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-white shadow-[inset_0_-2px_0_#10B89A] transition-opacity duration-300 group-hover:opacity-80">
                {FACTS.email}
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group bg-white/90 p-8 transition-colors duration-300 hover:bg-neo-sky md:p-10"
            >
              <p className="text-xs font-semibold text-neo-orange">Form</p>
              <h3 className="mt-4 text-2xl font-medium text-ink md:text-3xl">フォームで相談</h3>
              <p className="mt-4 text-sm font-normal leading-8 text-muted">
                詳細なご相談や制作依頼は、フォームが確実です。
              </p>
              <span className="mt-7 inline-flex items-center gap-2 bg-neo-orange px-5 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(255,119,24,0.25)] transition-all duration-300 group-hover:-translate-y-0.5">
                お問い合わせフォーム
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
