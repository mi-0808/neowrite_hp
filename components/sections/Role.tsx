import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { NOT_DOING, ROLES } from "@/src/config/service";

/** 役割分担。スマホでは縦積み、PCでは2列の対比表 */
export default function Role() {
  return (
    <section id="role" className="scroll-mt-24 border-b border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-neo-teal">Role</p>
          <h2 className="mt-4 text-3xl font-medium leading-snug text-ink md:text-4xl">
            あなたがやること / 私がやること
          </h2>
        </Reveal>

        <Stagger interval={0.1} className="mt-12 grid gap-5 md:grid-cols-2">
          {ROLES.map((role) => (
            <StaggerItem key={role.side} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-line bg-white p-7 md:p-8">
                <h3 className="text-xl font-medium text-ink">{role.side}</h3>
                <ul className="mt-5 space-y-3">
                  {role.items.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-8 text-muted">
                      <span className="text-neo-teal" aria-hidden="true">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12} className="mt-12">
          <div className="rounded-xl border border-line bg-[#fafafa] p-7 md:p-8">
            <h3 className="text-lg font-medium text-ink">やらないこと</h3>
            <ul className="mt-5 space-y-3">
              {NOT_DOING.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-8 text-muted">
                  <span className="text-ink" aria-hidden="true">
                    ・
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
