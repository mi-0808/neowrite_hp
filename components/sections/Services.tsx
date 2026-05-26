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
    <section id="services" className="border-b border-line bg-white py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[180px_1fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-accent">
                Service
              </p>
              <p className="mt-3 text-xs text-muted">02</p>
            </div>
            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight text-ink md:text-6xl">
                必要な機能だけを、無理なく形にする。
              </h2>
              <p className="mt-8 max-w-2xl text-sm font-normal leading-8 text-muted md:text-base md:leading-9">
                システム開発・Web/SNS制作運用・ウェブアプリ運営を主軸に、ご要望に合わせた柔軟なソリューションを提供します。
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-0 border-t border-line">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.08}>
              <article className="grid gap-8 border-b border-line py-10 transition-opacity duration-300 hover:opacity-75 md:grid-cols-[120px_1fr_1fr] md:py-14">
                <p className="text-xs text-accent">{service.number}</p>
                <h3 className="text-3xl font-medium leading-tight text-ink md:text-4xl">
                  {service.title}
                </h3>
                <div>
                  <p className="text-sm font-normal leading-8 text-muted">{service.description}</p>
                  <ul className="mt-6 space-y-2 text-sm font-normal leading-7 text-muted">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="text-accent" aria-hidden="true">
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
