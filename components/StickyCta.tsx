"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { FACTS } from "@/lib/facts";

/**
 * モバイル専用の固定CTAバー。
 * 1画面分スクロールしたら出現し、コンタクトセクション/フッター到達で消える。
 */
export default function StickyCta() {
  const [passedHero, setPassedHero] = useState(false);
  const [nearContact, setNearContact] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setPassedHero(latest > (typeof window !== "undefined" ? window.innerHeight * 0.9 : 700));
  });

  useEffect(() => {
    setNearContact(false);
    const targets = [document.getElementById("contact"), document.querySelector("footer")].filter(
      (el): el is HTMLElement => el !== null,
    );
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setNearContact(entries.some((e) => e.isIntersecting));
      },
      { rootMargin: "0px 0px 10% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const show = passedHero && !nearContact && pathname !== "/contact";

  return (
    <AnimatePresence>
      {show && (
        <m.div
          className="fixed inset-x-0 bottom-0 z-40 md:hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 bg-neo-navy px-5 py-4 text-sm font-bold text-white shadow-[0_-8px_30px_rgba(7,59,76,0.25)]"
          >
            <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-neo-orange" aria-hidden="true" />
            <span className="whitespace-nowrap">
              お問い合わせ — {FACTS.replyHours}時間以内に返信します
            </span>
          </Link>
        </m.div>
      )}
    </AnimatePresence>
  );
}
