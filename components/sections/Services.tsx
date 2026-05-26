// filepath: components/sections/Services.tsx
import Reveal from "@/components/Reveal";

const services = [
  {
    number: "01",
    title: "システム開発",
    description:
      "業務効率化ツール、Webアプリケーション、管理システムなど、目的に合わせたシステムを設計・開発します。",
    points: ["Excel管理が限界", "アナログな作業を減らしたい", "小さく始めて検証したい"],
  },
  {
    number: "02",
    title: "Web制作・運用",
    description:
      "企業サイト・サービスサイト・LPなどを制作し、作って終わりではなく、育てる運用までサポートします。",
    points: ["何を伝えるべきか整理したい", "信頼感のあるサイトにしたい", "採用や問い合わせにつなげたい"],
  },
  {
    number: "03",
    title: "SNS制作・運用",
    description:
      "Instagram・Xなどを中心に、事業とつながるSNS運用を支援します。",
    points: ["投稿内容の設計", "トーンと世界観づくり", "運用の仕組み化"],
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] pb-24 pt-14 md:pb-36 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">
              Service
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">
              事業内容
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-0 border-t border-neo-blue/15">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.08}>
              <article className="grid gap-8 border-b border-neo-blue/15 py-10 transition-colors duration-300 hover:bg-white/70 md:grid-cols-[120px_1fr_1fr] md:py-14">
                <p className="text-xs text-neo-blue">{service.number}</p>
                <h3 className="text-3xl font-medium leading-tight text-ink md:text-4xl">
                  {service.title}
                </h3>
                <div>
                  <p className="text-sm font-normal leading-8 text-muted">{service.description}</p>
                  <ul className="mt-6 space-y-2 text-sm font-normal leading-7 text-muted">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="text-neo-green" aria-hidden="true">
                          —
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
