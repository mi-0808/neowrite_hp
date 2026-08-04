"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
};

/** ビューポートに入ったら 0 から to までカウントアップする数字 */
export default function CountUp({ to, duration = 1.6, delay = 0, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduced) {
      node.textContent = String(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, delay, reduced]);

  return (
    <span ref={ref} className={className} aria-label={String(to)}>
      0
    </span>
  );
}
