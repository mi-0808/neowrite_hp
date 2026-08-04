"use client";

import { m, useReducedMotion } from "framer-motion";

type TextRevealProps = {
  /** 行ごとに分割して渡す（日本語は単語分割が効かないため行単位で扱う） */
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  interval?: number;
  className?: string;
  lineClassName?: string;
};

/** 見出しを行単位で下からせり上がらせるマスク付きテキストアニメーション */
export default function TextReveal({
  lines,
  as: Tag = "h1",
  delay = 0,
  interval = 0.12,
  className = "",
  lineClassName = "",
}: TextRevealProps) {
  const reduced = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <m.span
            className={`block ${lineClassName}`}
            initial={reduced ? { opacity: 0 } : { y: "110%" }}
            animate={reduced ? { opacity: 1 } : { y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * interval,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </Tag>
  );
}
