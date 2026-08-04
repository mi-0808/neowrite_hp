import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { newsItems } from "@/data/news";
import { pressItems } from "@/data/press";

const categoryStyle: Record<string, string> = {
  メディア掲載: "bg-neo-orange/10 text-[#B34E00]",
  お知らせ: "bg-gray-100 text-gray-600",
  受賞: "bg-yellow-100 text-yellow-700",
};

/** メディア掲載とお知らせの統合セクション。第三者の証明として意図的に静かに見せる */
export default function PressNews() {
  if (pressItems.length === 0 && newsItems.length === 0) return null;

  return (
    <section id="press" className="border-b border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blueInk">Press / News</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">メディア掲載・お知らせ</h2>
        </Reveal>

        {/* Press: 大カード */}
        {pressItems.map((item) => (
          <Reveal key={item.id} delay={0.08} className="mt-10">
            <article className="overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-52 w-full flex-shrink-0 md:h-auto md:w-[320px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-neo-orange/10 px-3 py-1 text-xs font-semibold text-[#B34E00]">
                        {item.media}
                      </span>
                      <span className="rounded-full bg-neo-blue/10 px-3 py-1 text-xs font-medium text-neo-blueInk">
                        {item.category}
                      </span>
                      <time className="text-xs text-muted">{item.date}</time>
                    </div>
                    <h3 className="mt-4 text-base font-medium leading-7 text-ink md:text-lg md:leading-8">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                  </div>
                  <div className="mt-5">
                    <Link
                      href={item.url}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-medium text-neo-blueInk hover:underline"
                    >
                      記事を読む →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        {/* News: リスト */}
        {newsItems.length > 0 && (
          <Stagger interval={0.05} className="mt-8 divide-y divide-line border-t border-line">
            {newsItems.slice(0, 5).map((item) => (
              <StaggerItem key={item.id}>
                <Link
                  href={item.url}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-4"
                >
                  <span
                    className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-medium ${categoryStyle[item.category] ?? "bg-gray-100 text-gray-600"}`}
                  >
                    {item.category}
                  </span>
                  <time className="text-xs text-muted sm:w-24 sm:flex-shrink-0">{item.date}</time>
                  <span className="text-sm text-ink group-hover:underline">
                    {item.title}
                    {item.isExternal && (
                      <span className="ml-1 text-muted" aria-hidden="true">→</span>
                    )}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
