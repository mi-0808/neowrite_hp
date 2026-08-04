"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  /** 子要素同士の遅延間隔（秒） */
  interval?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  className?: string;
};

/** 子に <StaggerItem> を並べると順番にふわっと現れるコンテナ */
export function Stagger({
  children,
  interval = 0.09,
  delay = 0,
  once = true,
  amount = 0.15,
  className = "",
}: StaggerProps) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: interval, delayChildren: delay } },
      }}
    >
      {children}
    </m.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "scale";
  className?: string;
};

export function StaggerItem({ children, direction = "up", className = "" }: StaggerItemProps) {
  const reduced = useReducedMotion();

  const hidden = reduced
    ? { opacity: 0 }
    : direction === "scale"
      ? { opacity: 0, scale: 0.92 }
      : direction === "left"
        ? { opacity: 0, x: 32 }
        : direction === "right"
          ? { opacity: 0, x: -32 }
          : { opacity: 0, y: 26 };

  return (
    <m.div
      className={className}
      variants={{
        hidden,
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </m.div>
  );
}
