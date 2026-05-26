// filepath: components/Footer.tsx
import Link from "next/link";

const footerLinks = [
  { label: "Top", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Product", href: "#works" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-neo-teal/10 bg-[linear-gradient(180deg,#ffffff_0%,#f4fffc_100%)]">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-teal">
              NEOWRITE
            </p>
            <p className="mt-3 max-w-sm text-sm font-normal leading-7 text-muted">
              次世代の挑戦をテクノロジーで形にする。
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="underline-offset-4 transition-colors duration-300 hover:text-ink hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-neo-teal/15 pt-6 text-[11px] text-muted md:flex-row md:items-center md:justify-between">
          <p>©NEOWRITE 2026</p>
          <Link
            href="mailto:matsuiminato8@gmail.com"
            className="underline-offset-4 transition-colors duration-300 hover:text-ink hover:underline"
          >
            matsuiminato8@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
