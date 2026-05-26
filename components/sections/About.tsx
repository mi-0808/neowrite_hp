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

        {/* Name Concept — 下部、コンパクトに */}
        <Reveal delay={0.08} className="mt-10 border-t border-neo-teal/12 pt-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
              Name Concept
            </p>
            <div className="mt-4 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
              {/* NEO / WRITE カード */}
              <div className="flex gap-3">
                <div className="min-w-[80px] border-t-2 border-neo-green/50 bg-neo-mist/60 px-4 py-3">
                  <p className="text-xl font-medium text-ink">NEO</p>
                  <p className="mt-1 text-[11px] text-neo-teal">新しい</p>
                </div>
                <div className="min-w-[80px] border-t-2 border-neo-blue/40 bg-neo-sky/70 px-4 py-3">
                  <p className="text-xl font-medium text-ink">WRITE</p>
                  <p className="mt-1 text-[11px] text-neo-navy">書く・設計する</p>
                </div>
              </div>
              {/* 説明テキスト */}
              <div className="space-y-3 text-sm font-normal leading-7 text-muted">
                <p>システム、Web、SNSという手段を使いながら、事業やブランドを「育て、更新し、書き続けていく」存在でありたいと考えています。</p>
                <p>新しい挑戦には、不安や迷いがつきものです。だからこそ私たちは、専門用語に頼らず、誠実に向き合い、次の一歩が踏み出せる形へと落とし込みます。</p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
