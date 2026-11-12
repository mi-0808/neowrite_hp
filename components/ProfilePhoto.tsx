"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PHOTO_SRC = "/myphoto.jpg";

type ProfilePhotoProps = {
  className?: string;
  sizes?: string;
};

/**
 * 代表者写真。/myphoto.jpg が無い環境でも破綻しないよう、
 * 読み込み失敗時はブランドカラーのモノグラムにフォールバックする。
 * （SSR中に発生したerrorイベントはonErrorで拾えないため、effectで実在確認する）
 */
export default function ProfilePhoto({ className = "", sizes = "280px" }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const probe = new window.Image();
    probe.onerror = () => setFailed(true);
    probe.src = PHOTO_SRC;
    if (probe.complete && probe.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,#0E6F78_0%,#073B4C_100%)] ${className}`}
        role="img"
        aria-label="松井 湊"
      >
        <div className="text-center">
          <span className="block text-5xl font-bold tracking-wider text-white/95">湊</span>
          <span className="mt-3 block text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            Minato Matsui
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={PHOTO_SRC}
      alt="松井 湊"
      fill
      sizes={sizes}
      className={`object-cover object-top ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
