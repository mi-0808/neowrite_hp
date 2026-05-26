// filepath: components/sections/Contact.tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
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
          <div className="grid gap-px bg-line md:grid-cols-2">
            <Link
              href="mailto:info@neowrite.jp"
              className="group bg-white p-8 transition-colors duration-300 hover:bg-[#F8FAF9] md:p-10"
            >
              <p className="text-xs text-accent">Email</p>
              <h3 className="mt-5 text-3xl font-medium text-ink">メール</h3>
              <p className="mt-5 text-sm font-normal leading-8 text-muted">
                お問い合わせ内容を確認し、2営業日以内にご返信します。
              </p>
              <span className="mt-8 inline-flex bg-ink px-5 py-3 text-sm font-medium text-white transition-opacity duration-300 group-hover:opacity-80">
                info@neowrite.jp →
              </span>
            </Link>
            <Link
              href="https://neowrite.studio.site/contact"
              className="group bg-white p-8 transition-colors duration-300 hover:bg-[#F8FAF9] md:p-10"
            >
              <p className="text-xs text-accent">Form</p>
              <h3 className="mt-5 text-3xl font-medium text-ink">フォーム</h3>
              <p className="mt-5 text-sm font-normal leading-8 text-muted">
                詳細なご相談や制作依頼は、フォームからお送りください。
              </p>
              <span className="mt-8 inline-flex bg-ink px-5 py-3 text-sm font-medium text-white transition-opacity duration-300 group-hover:opacity-80">
                お問い合わせフォーム →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
