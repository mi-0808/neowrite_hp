// filepath: components/sections/Contact.tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[radial-gradient(circle_at_14%_18%,rgba(16,184,154,0.12),transparent_18rem),radial-gradient(circle_at_92%_10%,rgba(29,167,216,0.12),transparent_18rem),#ffffff] py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-teal">
                Contact
              </p>
              <p className="mt-3 text-xs text-muted">04</p>
            </div>
            <div>
              <h2 className="max-w-5xl text-5xl font-medium leading-tight text-ink md:text-8xl">
                Let&apos;s write the next page.
              </h2>
              <p className="mt-8 max-w-2xl text-sm font-normal leading-8 text-muted md:text-base md:leading-9">
                お気軽にご相談ください。メールかフォームで、ご遠慮なくお問い合わせください。お問い合わせから2営業日以内にご返信します。
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-16">
          <div className="grid gap-px bg-neo-teal/15 md:grid-cols-2">
            <Link
              href="mailto:matsuiminato8@gmail.com"
              className="group bg-white/85 p-8 transition-colors duration-300 hover:bg-neo-mist md:p-10"
            >
              <p className="text-xs text-neo-teal">Email</p>
              <h3 className="mt-5 text-3xl font-medium text-ink">メール</h3>
              <p className="mt-5 text-sm font-normal leading-8 text-muted">
                お問い合わせ内容を確認し、2営業日以内にご返信します。
              </p>
              <span className="mt-8 inline-flex bg-ink px-5 py-3 text-sm font-medium text-white shadow-[inset_0_-2px_0_#10B89A] transition-opacity duration-300 group-hover:opacity-80">
                matsuiminato8@gmail.com →
              </span>
            </Link>
            <Link
              href="/contact"
              className="group bg-white/85 p-8 transition-colors duration-300 hover:bg-neo-sky md:p-10"
            >
              <p className="text-xs text-neo-blue">Form</p>
              <h3 className="mt-5 text-3xl font-medium text-ink">フォーム</h3>
              <p className="mt-5 text-sm font-normal leading-8 text-muted">
                詳細なご相談や制作依頼は、フォームからお送りください。
              </p>
              <span className="mt-8 inline-flex bg-ink px-5 py-3 text-sm font-medium text-white shadow-[inset_0_-2px_0_#1DA7D8] transition-opacity duration-300 group-hover:opacity-80">
                お問い合わせフォーム →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
