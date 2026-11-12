import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { CONTRACT_NOTE, PRICE_CONSULT, PRICE_CONSULT_NOTE } from "@/src/config/service";

/** 料金。金額は出さず、相談につなげる */
export default function Price() {
  return (
    <section
      id="price"
      className="scroll-mt-24 border-b border-line bg-[linear-gradient(180deg,#ffffff_0%,#f4fffc_100%)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-greenInk">Price</p>
          <h2 className="mt-4 text-3xl font-medium text-ink md:text-4xl">料金</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="max-w-3xl rounded-2xl border border-line bg-white p-8 md:p-12">
            <p className="text-2xl font-medium leading-snug text-ink md:text-3xl">{PRICE_CONSULT}</p>
            <p className="mt-5 text-base leading-8 text-muted md:leading-9">{PRICE_CONSULT_NOTE}</p>
            <p className="mt-6 border-t border-line pt-6 text-base leading-8 text-ink">{CONTRACT_NOTE}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[44px] items-center gap-3 bg-neo-orangeInk px-8 py-4 text-base font-bold text-white shadow-[0_16px_38px_rgba(255,119,24,0.3)] transition-all duration-300 hover:-translate-y-0.5"
            >
              料金について相談する
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
