import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { BUILD_ITEMS, SERVICE_AUDIENCE, SERVICE_HEADING, SERVICE_PITCH } from "@/src/config/service";

/** できること。一言と、実際の画面つきの3枚で一目で伝える */
export default function Services() {
  return (
    <section
      id="service"
      className="scroll-mt-24 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f2fbff_100%)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-blueInk">Service</p>
          <h2 className="mt-4 text-base font-medium text-muted">{SERVICE_HEADING}</h2>
          <p className="mt-3 text-base font-medium text-neo-greenInk">{SERVICE_AUDIENCE}</p>
          <p className="mt-2 text-[clamp(1.75rem,3.4vw,2.6rem)] font-medium leading-snug text-ink [word-break:auto-phrase]">
            {SERVICE_PITCH}
          </p>
        </Reveal>

        <Stagger interval={0.08} className="mt-10 grid gap-6 md:grid-cols-3">
          {BUILD_ITEMS.map((item) => (
            <StaggerItem key={item.title}>
              <figure className="m-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-white">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-4">
                  <span className="block text-lg font-medium text-ink">{item.title}</span>
                  <span className="mt-1 block text-base text-muted">{item.body}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-8">
          <Link
            href="#works"
            className="inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-ink underline underline-offset-4"
          >
            作ったものを詳しく見る
            <span aria-hidden="true">↓</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
