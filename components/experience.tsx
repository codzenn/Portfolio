import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { experienceItems } from "@/lib/data";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Experience() {
  return (
    <section id="experience" className="section-shell px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] border-x border-white/10 lg:grid-cols-[310px_minmax(0,1fr)]">
        <aside className="section-label border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r"><p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#d9ff4a]">04 — Experience</p><p className="mt-5 max-w-[190px] text-sm leading-6 text-[#85857b]">Shipping and supporting software in the real world.</p></aside>
        <div className="p-6 sm:p-10 lg:p-14">
          <SectionReveal><p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">Where I&apos;ve been building</p><h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,4.7vw,4.6rem)] font-semibold leading-[.94] tracking-[-.07em] text-[#f5f4ef]">Experience that lives beyond the <span className="font-serif font-normal italic text-[#d9ff4a]">happy path.</span></h2></SectionReveal>
          <div className="mt-12 border-t border-white/10">
            {experienceItems.map((item, index) => <SectionReveal key={`${item.company}-${item.duration}`} delay={index * .08} className="border-b border-white/10 py-8 last:border-b-0">
              <article className="grid gap-6 lg:grid-cols-[170px_minmax(0,1fr)]">
                <div><span className="grid h-10 w-10 place-items-center rounded-full border border-[#d9ff4a]/35 text-[#d9ff4a]"><BriefcaseBusiness className="h-4 w-4" /></span><p className="mt-4 font-mono text-[10px] uppercase tracking-[.12em] text-[#85857b]">{item.duration}</p></div>
                <div><div className="flex flex-wrap items-start justify-between gap-4"><div><h3 className="text-2xl font-medium tracking-[-.04em] text-[#f5f4ef]">{item.role}</h3><p className="mt-1 text-sm text-[#d9ff4a]">{item.company}</p></div><ArrowUpRight className="h-5 w-5 text-[#85857b]" /></div><ul className="mt-7 grid gap-3 md:grid-cols-2">{item.achievements.map((achievement) => <li key={achievement} className="flex gap-3 text-sm leading-6 text-[#a5a49b]"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9ff4a]" />{achievement}</li>)}</ul></div>
              </article>
            </SectionReveal>)}
          </div>
        </div>
      </div>
    </section>
  );
}
