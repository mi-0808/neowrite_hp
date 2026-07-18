// filepath: components/sections/About.tsx
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-teal">
            Concept
          </p>

          <h3
            className="mt-8 font-medium leading-[1.1] tracking-tight text-ink"
            style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
          >
            若い視点と実装力で、<br />
            企業の挑戦に並走する。
          </h3>

          <div className="mt-10 h-px w-full bg-line" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border-t-2 border-neo-teal pt-5">
              <span className="text-2xl font-semibold tracking-wider text-ink">NEO</span>
              <p className="mt-2 text-sm font-medium text-neo-teal">新しい・近代的な</p>
            </div>
            <div className="border-t-2 border-neo-navy pt-5">
              <span className="text-2xl font-semibold tracking-wider text-ink">WRITE</span>
              <p className="mt-2 text-sm font-medium text-neo-navy">書く・設計する・更新する</p>
            </div>
          </div>

          <p className="mt-10 max-w-2xl text-base font-normal leading-8 text-muted md:text-lg md:leading-9">
            NEOWRITEは、次の時代をつくる企業と同じ目線で考え、必要な技術・言葉・運用をひとつずつ形にしていく制作パートナーです。代表者自身が現場に入り、課題整理から実装、運用改善まで一貫して伴走します。
          </p>

          <Link
            href="/about"
            className="mt-6 inline-block text-xs text-[#bbb] hover:text-muted transition-colors"
          >
            詳細を見る →
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
