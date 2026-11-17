import CountUp from "@/components/motion/CountUp";
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
    value: FACTS.replyDays,
    unit: "営業日以内",
    label: "返信スピード",
    note: "すべてのご相談・お問い合わせに",
    color: "#B34E00",
  },
  {
    value: FACTS.ordersCount,
    unit: "件+",
    label: "受託実績",
    note: "単発案件・スポット対応を含む累計",
    color: "#0B7A66",
  },
];

/** Hero 直下の数値ストリップ。見出しは持たず、数字だけで語らせる */
export default function StatsGrid() {
  return (
    <section id="stats" className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
    <Stagger interval={0.08} className="grid grid-cols-1 gap-px overflow-hidden bg-line sm:grid-cols-3">
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
            <p className="mt-3 text-base font-medium leading-7 text-ink">{stat.label}</p>
            <p className="mt-1.5 text-sm leading-6 text-muted">{stat.note}</p>
          </div>
        </StaggerItem>
      ))}
      </Stagger>
      </div>
    </section>
  );
}
