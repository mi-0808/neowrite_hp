import Link from "next/link";
import Reveal from "@/components/Reveal";
import { newsItems } from "@/data/news";

const categoryStyle: Record<string, string> = {
  メディア掲載: "bg-[#FF7718]/10 text-[#E07020]",
  お知らせ: "bg-gray-100 text-gray-600",
  受賞: "bg-yellow-100 text-yellow-700",
};

export default function News() {
  if (newsItems.length === 0) return null;

  return (
    <section
      id="news"
      className="border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] pb-24 pt-14 md:pb-36 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">
              News
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">
              お知らせ
            </h2>
            <p className="mt-2 text-sm text-muted">お知らせ・メディア情報</p>
          </div>
        </Reveal>

        <ul className="mt-10 divide-y divide-line">
          {newsItems.slice(0, 5).map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <li className="py-5">
                <Link
                  href={item.url}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
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
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
