import Marquee from "@/components/motion/Marquee";
import { FACTS } from "@/lib/facts";

const items = [
  "システム開発",
  "Web制作・運用",
  "オンライン営業サポート",
  `${FACTS.foundedYear}年 事業開始`,
  "GOEN — リリース済み",
  "MyHood — 開発中",
  "全国リモート対応",
  `ご相談は${FACTS.replyDays}営業日以内に返信`,
];

/** セクション間の装飾ティッカー。「事業が動いている」空気を作る */
export default function TickerMarquee() {
  return (
    <div className="border-y border-line bg-white py-4">
      <Marquee speed={36}>
        {items.map((item) => (
          <span key={item} className="flex items-center">
            <span className="whitespace-nowrap px-7 text-sm font-medium tracking-wide text-ink">
              {item}
            </span>
            <span className="h-4 w-px bg-ink/25" aria-hidden="true" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
