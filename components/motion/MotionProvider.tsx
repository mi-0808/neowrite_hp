"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * framer-motion の共通設定。
 * - LazyMotion(strict): `m.` コンポーネントのみ許可しバンドルを軽量化
 * - reducedMotion="user": OSの「視差効果を減らす」設定で transform 系を自動無効化
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
