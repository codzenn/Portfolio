import { ArrowUpRight } from "lucide-react";
import { aboutBlurb, aboutMetrics, siteConfig, techBadges } from "@/lib/data";
import { SectionReveal } from "@/components/ui/section-reveal";

export function About() {
  return (
    <section id="about" className="section-shell px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] border-x border-white/10 lg:grid-cols-[310px_minmax(0,1fr)]">
        <aside className="section-label border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#d9ff4a]">01 — About</p>
          <p className="mt-5 max-w-[190px] text-sm leading-6 text-[#85857b]">The thinking behind the work.</p>
        </aside>

        <div className="p-6 sm:p-10 lg:p-14">
          <SectionReveal>
            <p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">A little context</p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.3rem,5vw,5rem)] font-semibold leading-[.94] tracking-[-.07em] text-[#f5f4ef]">I like making complex work <span className="font-serif font-normal italic text-[#d9ff4a]">feel simple.</span></h2>
            <div className="mt-9 grid gap-7 border-t border-white/10 pt-7 lg:grid-cols-[1.12fr_.88fr]">
              <p className="max-w-xl text-base leading-8 text-[#aeada4]">{aboutBlurb}</p>
              <a href={`mailto:${siteConfig.email}`} className="group inline-flex h-fit items-center justify-between border-y border-white/10 py-4 text-sm font-medium text-[#e9e8e1] hover:border-[#d9ff4a] hover:text-[#d9ff4a]">
                Work with me <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </SectionReveal>

          <div className="mt-16 grid border-t border-white/10 sm:grid-cols-3">
            {aboutMetrics.map((metric, index) => (
              <SectionReveal key={metric.label} delay={index * 0.08} className="border-b border-white/10 py-6 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:not(:last-child):border-r sm:last:pr-0">
                <p className="text-4xl font-semibold tracking-[-.06em] text-[#f5f4ef]">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#85857b]">{metric.label}</p>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-16">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">Tools I reach for</p>
              <span className="font-mono text-[10px] text-[#d9ff4a]">{String(techBadges.length).padStart(2, "0")}</span>
            </div>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3">
              {techBadges.map((badge, index) => {
                const Icon = badge.icon;
                return <div key={badge.label} className="group flex items-center gap-3 border-b border-white/10 py-4 sm:pr-5 xl:pr-7">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/[.05] text-[#d9ff4a] transition group-hover:bg-[#d9ff4a] group-hover:text-[#171813]"><Icon className="h-4 w-4" /></span>
                  <span className="text-sm text-[#c9c8c0]">{badge.label}</span>
                  <span className="ml-auto font-mono text-[10px] text-[#5f6059]">{String(index + 1).padStart(2, "0")}</span>
                </div>;
              })}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
