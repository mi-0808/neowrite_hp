import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ｜NEOWRITE",
  description: "NEOWRITEへのお問い合わせはこちらから。制作依頼・ご相談など、お気軽にお送りください。",
};

export default function ContactPage() {
  return (
    <main className="bg-[radial-gradient(circle_at_14%_18%,rgba(16,184,154,0.10),transparent_20rem),radial-gradient(circle_at_92%_10%,rgba(29,167,216,0.10),transparent_20rem),#ffffff]">
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">

        {/* ページヘッダー */}
        <div className="mb-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">
            Contact
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-tight text-ink md:text-6xl">
            Let&apos;s write the next page.
          </h1>
          <p className="mt-6 max-w-xl text-sm font-normal leading-8 text-muted md:text-base md:leading-9">
            お気軽にご相談ください。制作依頼・ご相談など、フォームからお送りください。お問い合わせから2営業日以内にご返信します。
          </p>
          <Link
            href="mailto:matsuiminato8@gmail.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-neo-teal underline-offset-4 hover:underline"
          >
            matsuiminato8@gmail.com
          </Link>
        </div>

        {/* Google Form 埋め込み */}
        <div className="overflow-hidden border border-neo-teal/15 bg-white shadow-[0_8px_40px_rgba(14,111,120,0.08)]">
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

      </div>
    </main>
  );
}
