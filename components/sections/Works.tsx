import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { works } from "@/lib/works";

/** 実績。実名を第一要素に置き、信用の根拠にする */
export default function Works() {
  return (
    <section id="works" className="border-b border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-neo-blueInk">Works</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">
            これまでのお仕事
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted md:text-base">
            役割と担当範囲まで具体的に掲載しています。守秘義務のある案件は社名を伏せています。
          </p>
        </Reveal>

        <Stagger interval={0.1} className="mt-12 grid gap-5 sm:grid-cols-2">
          {works.map((work) => (
            <StaggerItem key={work.id} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white p-7 transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(7,59,76,0.08)] md:p-8">
                <span
                  className="absolute inset-y-0 left-0 w-1"
                  style={{ backgroundColor: work.accentColor }}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-semibold"
                    style={{ backgroundColor: `${work.accentColor}14`, color: work.textColor }}
                  >
                    {work.category}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink md:text-2xl">{work.client}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{work.what}</p>
                <p className="mt-3 text-xs font-medium text-ink">役割：{work.role}</p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {work.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-1 text-[10px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
