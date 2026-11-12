import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ROLES } from "@/src/config/service";

/** 役割分担。「あなた」と「私」を色と見出しで分け、スマホでは縦積み */
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
          {ROLES.map((role, index) => {
            const isMe = index === 1;
            return (
              <StaggerItem key={role.side} className="h-full">
                <div
                  className={`flex h-full flex-col rounded-xl border p-7 md:p-8 ${
                    isMe ? "border-neo-teal bg-neo-mist" : "border-line bg-white"
                  }`}
                >
                  <h3 className="flex flex-wrap items-baseline gap-x-3">
                    <span className="text-3xl font-semibold text-ink md:text-4xl">{role.side}</span>
                    <span className="text-base font-medium text-muted">{role.who}</span>
                  </h3>
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {role.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-8 text-ink">
                        <span className="text-neo-teal" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
