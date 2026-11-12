import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import {
  SERVICE_AREAS,
  SERVICE_NAME,
  SERVICE_PHILOSOPHY,
  SUB_COPY,
} from "@/src/config/service";

/** 提供サービスは1本。4領域を番号付きカードで並べる */
export default function Services() {
  return (
    <section
      id="service"
      className="scroll-mt-24 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">Service</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">{SERVICE_NAME}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:leading-9">{SUB_COPY}</p>
        </Reveal>

        <Stagger interval={0.1} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_AREAS.map((area) => (
            <StaggerItem key={area.number} className="h-full">
              <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white p-7 md:p-8">
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: area.accentColor }}
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold tabular-nums" style={{ color: area.textColor }}>
                  {area.number}
                </p>
                <h3 className="mt-3 text-xl font-medium text-ink">{area.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{area.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12} className="mt-12">
          <div className="max-w-3xl border-l-4 border-neo-teal pl-6">
            <p className="text-base font-medium leading-8 text-ink">機能を足す前に、論点を絞る</p>
            <p className="mt-3 text-base leading-8 text-muted">{SERVICE_PHILOSOPHY}</p>
          </div>
        </Reveal>

        <Reveal delay={0.18} className="mt-10">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-ink underline-offset-4 hover:underline"
          >
            いまの論点から相談する
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
