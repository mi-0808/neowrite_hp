// filepath: components/sections/About.tsx
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-white pb-0 pt-14 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Concept — 上部に配置 */}
        <Reveal>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-teal">
              Concept
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-[auto_1fr] md:items-start md:gap-10">
              <h3 className="text-xl font-medium leading-snug text-ink md:text-2xl md:whitespace-nowrap">
                若い視点と実装力で、<br className="md:hidden" />企業の挑戦に並走する。
              </h3>
              <p className="text-sm font-normal leading-7 text-muted">
                NEOWRITEは、次の時代をつくる企業と同じ目線で考え、必要な技術・言葉・運用をひとつずつ形にしていく制作パートナーです。代表者自身が現場に入り、課題整理から実装、運用改善まで一貫して伴走します。
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
