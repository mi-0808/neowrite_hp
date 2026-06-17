import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pressItems } from "@/data/press";

export default function Press() {
  if (pressItems.length === 0) return null;

  return (
    <section
      id="press"
      className="border-b border-line bg-white pb-24 pt-14 md:pb-36 md:pt-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-neo-blue">
              Press
            </p>
            <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">
              メディア掲載
            </h2>
            <p className="mt-2 text-sm text-muted">取材・インタビュー記事</p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {pressItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 w-full flex-shrink-0 md:h-auto md:w-[300px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-[#FF7718]/10 px-3 py-1 text-xs font-medium text-[#E07020]">
                          {item.media}
                        </span>
                        <span className="rounded-full bg-neo-blue/10 px-3 py-1 text-xs font-medium text-neo-blue">
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
                        className="inline-flex items-center gap-2 text-sm font-medium text-neo-blue hover:underline"
                      >
                        記事を読む →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
