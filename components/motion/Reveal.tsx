"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  /** スライドイン方向 */
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  blur?: boolean;
  once?: boolean;
  amount?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 28,
  blur = false,
  once = true,
  amount = 0.2,
  className = "",
}: RevealProps) {
  const reduced = useReducedMotion();

  const offset =
    direction === "up"
      ? { y: distance }
      : direction === "down"
        ? { y: -distance }
        : direction === "left"
          ? { x: distance }
          : direction === "right"
            ? { x: -distance }
            : {};

  return (
    <m.div
      className={className}
      initial={
        reduced
          ? { opacity: 0 }
          : { opacity: 0, ...offset, ...(blur ? { filter: "blur(8px)" } : {}) }
      }
      whileInView={
        reduced
          ? { opacity: 1 }
          : { opacity: 1, x: 0, y: 0, ...(blur ? { filter: "blur(0px)" } : {}) }
      }
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
