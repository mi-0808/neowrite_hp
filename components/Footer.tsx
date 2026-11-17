// filepath: components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FACTS } from "@/lib/facts";

const sitemap = [
  { label: "Service", href: "/#service" },
  { label: "Works", href: "/#works" },
  { label: "Flow", href: "/#flow" },
  { label: "Product", href: "/product" },
  { label: "Profile", href: "/profile" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-neo-teal/10 bg-[linear-gradient(180deg,#ffffff_0%,#f4fffc_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1.2fr] md:gap-8">
          {/* ブランド */}
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="NEOWRITE top">
              <Image
                src="/neowrite-icon-cutout.png"
                alt="NEOWRITE logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-neo-teal">NEO</span>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-neo-navy">WRITE</span>
              </span>
            </Link>
            <p className="mt-4 text-sm font-medium text-ink">次世代の挑戦を、テクノロジーで形にする。</p>
            <p className="mt-2 text-xs leading-6 text-muted">
              {FACTS.location} / 全国リモート対応
            </p>
            <p className="mt-4 text-xs leading-5 text-muted">
              このサイトも Next.js + Tailwind CSS + framer-motion で自作しています。
            </p>
          </div>

          {/* サイトマップ */}
          <nav aria-label="サイトマップ">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neo-teal">Sitemap</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-muted">
              {sitemap.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] min-w-[44px] items-center underline-offset-4 transition-colors duration-300 hover:text-ink hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* コンタクト */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-neo-teal">Contact</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              ご相談・お見積りには{FACTS.replyDays}営業日以内に返信します。
            </p>
            <Link
              href={`mailto:${FACTS.email}`}
              className="mt-3 inline-flex min-h-[44px] items-center text-sm text-ink underline-offset-4 hover:underline"
            >
              {FACTS.email}
            </Link>
            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-neo-greenInk px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                お問い合わせフォーム
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 最下段：コピーライトでも事業歴を語る */}
      <div className="bg-neo-navy">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 text-xs text-white/60 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {FACTS.foundedYear}–{new Date().getFullYear()} NEOWRITE</p>
          <p>SINCE {FACTS.foundedYear} / TOYOTA, AICHI</p>
        </div>
      </div>
    </footer>
  );
}
