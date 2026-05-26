// filepath: components/sections/About.tsx
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
                About
              </p>
              <p className="mt-3 text-xs text-muted">01</p>
            </div>
            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight text-ink md:text-6xl">
                次世代の挑戦を、育て、更新し、書き続けていく。
              </h2>
              <div className="mt-10 grid gap-8 text-sm font-normal leading-8 text-muted md:grid-cols-2 md:text-base md:leading-9">
                <p>
                  システム、Web、SNSという手段を使いながら、事業やブランドを「育て、更新し、書き続けていく」存在でありたいと考えています。
                </p>
                <p>
                  新しい挑戦には、不安や迷いがつきものです。だからこそ私たちは、専門用語に頼らず、誠実に向き合い、次の一歩が踏み出せる形へと落とし込みます。
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-20">
          <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-[1fr_1.3fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
                Name Concept
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="border-t border-line pt-4">
                  <p className="text-3xl font-medium text-ink">NEO</p>
                  <p className="mt-2 text-sm text-muted">新しい</p>
                </div>
                <div className="border-t border-line pt-4">
                  <p className="text-3xl font-medium text-ink">WRITE</p>
                  <p className="mt-2 text-sm text-muted">書く・設計する・更新する</p>
                </div>
              </div>
            </div>
            <div className="border-t border-line pt-6 md:border-t-0 md:pt-0">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-muted">
                Founder
              </p>
              <h3 className="mt-5 text-2xl font-medium text-ink md:text-3xl">
                若い視点と実装力で、企業の挑戦に並走する。
              </h3>
              <p className="mt-5 text-sm font-normal leading-8 text-muted md:text-base md:leading-9">
                NEOWRITEは、次の時代をつくる企業と同じ目線で考え、必要な技術・言葉・運用をひとつずつ形にしていく制作パートナーです。代表者自身が現場に入り、課題整理から実装、運用改善まで一貫して伴走します。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
