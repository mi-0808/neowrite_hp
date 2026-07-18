"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Product", href: "/product" },
  { label: "Profile", href: "/profile" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neo-teal/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="NEOWRITE top">
          <Image
            src="/neowrite-icon-cutout.png"
            alt="NEOWRITE logo"
            width={40}
            height={40}
            priority
            className="h-9 w-9 object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-neo-teal">NEO</span>
            <span className="text-[13px] font-bold uppercase tracking-[0.22em] text-neo-navy">WRITE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-medium text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.label === "Contact"
                  ? "bg-ink px-5 py-2 text-white shadow-[inset_0_-2px_0_#10B89A] transition-opacity duration-300 hover:opacity-80"
                  : "py-1"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="h-px w-5 bg-ink" />
          <span className="h-px w-5 bg-ink" />
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-line bg-white px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-sm text-muted">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={
                  item.label === "Contact"
                    ? "w-fit bg-ink px-5 py-2 text-white shadow-[inset_0_-2px_0_#10B89A] transition-opacity duration-300 hover:opacity-80"
                    : ""
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
