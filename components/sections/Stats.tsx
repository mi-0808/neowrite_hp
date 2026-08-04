import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { FACTS } from "@/lib/facts";

const stats: {
  value?: number;
  text?: string;
  unit: string;
  label: string;
  note: string;
  color: string;
}[] = [
  {
    text: String(FACTS.foundedYear),
    unit: "年〜",
    label: "事業開始",
    note: `${FACTS.location}を拠点に活動`,
    color: "#0E6F78",
  },
  {
    value: 3,
    unit: "領域",
    label: "事業領域",
    note: "システム開発・Web制作・オンライン営業サポート",
    color: "#1DA7D8",
  },
  {
    value: FACTS.replyDays,
    unit: "営業日以内",
    label: "返信スピード",
    note: "すべてのご相談・お問い合わせに",
    color: "#FF7718",
  },
  {
    text: "全国",
    unit: "",
    label: "リモート対応",
    note: "オンラインで全国のご依頼に対応",
    color: "#10B89A",
  },
];

/** 数字で見るNEOWRITE。全数値は出典注釈付き（lib/facts.ts 一元管理） */
export default function Stats() {
  return (
    <section id="stats" className="border-b border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-teal">Numbers</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">数字で見るNEOWRITE</h2>
        </Reveal>

        <Stagger interval={0.08} className="mt-12 grid grid-cols-2 gap-px overflow-hidden bg-line lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="h-full">
              <div className="flex h-full flex-col bg-white p-6 md:p-8">
                <p className="flex flex-wrap items-baseline gap-1">
                  <span
                    className="text-4xl font-semibold tabular-nums tracking-tight sm:text-5xl md:text-6xl"
                    style={{ color: stat.color }}
                  >
                    {stat.value !== undefined ? <CountUp to={stat.value} /> : stat.text}
                  </span>
                  {stat.unit && (
                    <span className="text-sm font-medium text-ink sm:text-lg md:text-xl">{stat.unit}</span>
                  )}
                </p>
                <p className="mt-3 text-sm font-medium leading-6 text-ink">{stat.label}</p>
                <p className="mt-1.5 text-xs leading-5 text-muted">{stat.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
