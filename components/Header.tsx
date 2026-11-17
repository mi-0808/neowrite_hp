"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

const navItems = [
  { label: "Service", href: "/service" },
  { label: "Works", href: "/#works" },
  { label: "Product", href: "/product" },
  { label: "Flow", href: "/#flow" },
  { label: "Profile", href: "/profile" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    // 下スクロールで隠し、上スクロールで再表示（メニュー展開中は隠さない）
    if (isOpen) {
      setHidden(false);
      return;
    }
    if (latest > 120 && latest > prev) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <m.header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-neo-teal/10 bg-white/85 backdrop-blur-md"
          : "border-transparent bg-white/60 backdrop-blur-sm"
      }`}
      animate={{ y: hidden && !reduced ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      // キーボード操作でヘッダー内にフォーカスが入ったら隠さず復帰させる
      onFocus={() => setHidden(false)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="NEOWRITE top">
          <Image
            src="/neowrite-icon-cutout.png"
            alt="NEOWRITE logo"
            width={40}
            height={40}
            priority
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="flex flex-col leading-none">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neo-teal">NEO</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-neo-navy">WRITE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors duration-200 hover:text-ink ${
                pathname === item.href ? "text-ink" : ""
              }`}
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-neo-teal transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center bg-neo-greenInk px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(11,122,102,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(11,122,102,0.4)]"
          >
            お問い合わせ
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-ink transition-transform duration-300 ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* スクロール進捗バー（ヘッダー下端） */}
      <m.div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-neo-teal via-neo-blue to-neo-green"
        style={{ scaleX: reduced ? 0 : progress }}
        aria-hidden="true"
      />

      <AnimatePresence>
        {isOpen && (
          <m.nav
            className="overflow-hidden border-t border-line bg-white md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <m.div
              className="flex flex-col gap-2 px-5 py-4 text-base text-muted"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
            >
              {navItems.map((item) => (
                <m.div
                  key={item.label}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
                >
                  <Link href={item.href} onClick={() => setIsOpen(false)} className="flex min-h-[44px] items-center py-2">
                    {item.label}
                  </Link>
                </m.div>
              ))}
              <m.div variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 inline-flex min-h-[44px] w-fit items-center bg-neo-greenInk px-6 py-3 font-bold text-white"
                >
                  お問い合わせ →
                </Link>
              </m.div>
            </m.div>
          </m.nav>
        )}
      </AnimatePresence>
    </m.header>
  );
}
