import { skillCategories } from "@/lib/data";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Skills() {
  return (
    <section id="skills" className="section-shell px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] border-x border-white/10 lg:grid-cols-[310px_minmax(0,1fr)]">
        <aside className="section-label border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r"><p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#d9ff4a]">03 — Capabilities</p><p className="mt-5 max-w-[190px] text-sm leading-6 text-[#85857b]">The ingredients behind reliable product work.</p></aside>
        <div className="p-6 sm:p-10 lg:p-14">
          <SectionReveal><p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">A practical toolkit</p><h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,4.7vw,4.6rem)] font-semibold leading-[.94] tracking-[-.07em] text-[#f5f4ef]">At home across the <span className="font-serif font-normal italic text-[#d9ff4a]">whole stack.</span></h2></SectionReveal>
          <div className="mt-12 border-t border-white/10">
            {skillCategories.map((category, index) => <SectionReveal key={category.title} delay={index * .06} className="grid gap-5 border-b border-white/10 py-7 md:grid-cols-[190px_1fr]"><div><span className="font-mono text-[10px] text-[#d9ff4a]">0{index + 1}</span><h3 className="mt-2 text-lg font-medium text-[#f5f4ef]">{category.title}</h3></div><div className="flex flex-wrap content-start gap-2">{category.items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.025] px-3 py-2 text-sm text-[#aaa9a0] transition hover:border-[#d9ff4a]/60 hover:text-[#f5f4ef]">{item}</span>)}</div></SectionReveal>)}
          </div>
        </div>
      </div>
    </section>
  );
}
