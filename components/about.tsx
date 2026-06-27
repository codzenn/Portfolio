import { aboutBlurb, aboutMetrics, techBadges } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionReveal } from "@/components/ui/section-reveal";

export function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="About"
            title="Full-stack product engineering with a modern stack."
            description={aboutBlurb}
          />
        </SectionReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <SectionReveal delay={0.08}>
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/80">Preferred stack</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {techBadges.map((badge, index) => {
                const Icon = badge.icon;

                return (
                  <div
                    key={badge.label}
                    className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.05] hover:shadow-[0_12px_30px_rgba(34,211,238,0.08)]"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition group-hover:border-cyan-300/30 group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.16}>
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/80">Execution mindset</p>
            <div className="mt-6 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3 lg:grid-cols-1">
              {aboutMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-b border-white/10 pb-5 last:border-none last:pb-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 sm:last:border-r-0 lg:border-b lg:border-r-0 lg:pb-5 lg:pr-0 lg:last:border-b-0"
                >
                  <div className="text-3xl font-semibold tracking-tight text-white">{metric.value}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
