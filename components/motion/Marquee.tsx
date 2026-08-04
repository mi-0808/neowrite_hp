"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** 1周にかける秒数 */
  speed?: number;
  reverse?: boolean;
  className?: string;
};

/**
 * 無限ループの横スクロールストリップ。
 * CSSアニメーション実装（reduced-motion時はglobals.cssのmedia queryで停止）。
 */
export default function Marquee({ children, speed = 30, reverse = false, className = "" }: MarqueeProps) {
  return (
    <div className={`group/marquee flex overflow-hidden ${className}`} aria-hidden="true">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="flex shrink-0 animate-marquee items-center group-hover/marquee:[animation-play-state:paused]"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
