import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProfileAccordion from "@/components/sections/ProfileAccordion";

const sns = [
  { label: "Instagram", url: "https://www.instagram.com/m_minato2008/" },
  { label: "GOEN", url: "https://goen-self.vercel.app/" },
];

export default function Profile() {
  return (
    <section
      id="profile"
      className="border-b border-line bg-white pb-24 pt-14 md:pb-36 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">
              Profile
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">
              代表者紹介
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-16">
            {/* 写真エリア */}
            <div className="flex justify-center md:justify-start">
              <div className="relative h-[280px] w-[280px] overflow-hidden rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <Image
                  src="/myphoto.jpg"
                  alt="松井 湊"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* テキストエリア */}
            <div>
              <h3 className="text-3xl font-medium text-ink md:text-4xl">
                松井 湊
                <span className="ml-3 text-lg font-normal text-muted">Minato Matsui</span>
              </h3>
              <p className="mt-2 text-sm text-muted">NEOWRITE 代表 / N高等学校 3年 / 愛知県豊田市</p>

              <p className="mt-6 text-sm leading-8 text-muted md:text-base md:leading-9">
                14歳から事業を起こし、システム開発・SNS運用・プロダクト開発を通じて、東三河を中心に若手起業家として活動中。「テクノロジーで社会を良くする」をビジョンに、世界で使われるプロダクトを創ることを目指しています。
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                {sns.map((s) => (
                  <Link
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-neo-blue hover:text-neo-blue"
                  >
                    {s.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <ProfileAccordion />

          <div className="mt-8 border-t border-line pt-6">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 text-sm font-medium text-neo-blue hover:underline"
            >
              詳しいプロフィールを見る →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
