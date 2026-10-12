import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Database, GitBranch, Github, Layers3, MessageSquareText } from "lucide-react";
import { autoDevProject, featuredProject } from "@/lib/data";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Project() {
  return (
    <section id="project" className="section-shell px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] border-x border-white/10 lg:grid-cols-[310px_minmax(0,1fr)]">
        <aside className="section-label border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#d9ff4a]">02 — Selected work</p>
          <p className="mt-5 max-w-[190px] text-sm leading-6 text-[#85857b]">A deep look at a product built for creators.</p>
        </aside>

        <div className="p-6 sm:p-10 lg:p-14">
          <SectionReveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div><p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">Case study / 01</p><h2 className="mt-3 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[.88] tracking-[-.075em] text-[#f5f4ef]">{featuredProject.title}</h2></div>
              <span className="rounded-full border border-[#d9ff4a]/35 bg-[#d9ff4a]/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[.13em] text-[#d9ff4a]">{featuredProject.subtitle}</span>
            </div>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#aeada4]">{featuredProject.tagline}</p>
          </SectionReveal>

          <SectionReveal delay={0.08} className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#171814]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[.13em] text-[#85857b]"><span>Live product preview</span><span className="flex items-center gap-2 text-[#d9ff4a]"><span className="h-1.5 w-1.5 rounded-full bg-[#d9ff4a]" /> SaaS workspace</span></div>
            <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0e0c] p-2 sm:p-3"><Image src="/project-preview.png" alt="SnapOrbitAI dashboard preview" fill sizes="(max-width: 1024px) 100vw, 75vw" className="object-cover object-top transition duration-700 hover:scale-[1.02]" priority /></div>
          </SectionReveal>

          <div className="mt-10 grid gap-10 xl:grid-cols-[1.05fr_.95fr]">
            <SectionReveal>
              <p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">The brief</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#b6b5ac]">{featuredProject.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={featuredProject.liveDemoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#d9ff4a] px-4 py-2.5 text-sm font-semibold text-[#171813] hover:-translate-y-0.5">See the product <ArrowUpRight className="h-4 w-4" /></Link>
                <Link href={featuredProject.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-[#f5f4ef] hover:border-[#d9ff4a] hover:text-[#d9ff4a]"><Github className="h-4 w-4" /> Source</Link>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.12}>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]"><Layers3 className="h-3.5 w-3.5 text-[#d9ff4a]" /> The system</div>
              <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {featuredProject.architectureFlow.map((step, index) => <div key={step} className="bg-[#171814] px-4 py-4"><span className="font-mono text-[10px] text-[#d9ff4a]">0{index + 1}</span><p className="mt-3 text-sm text-[#deddd6]">{step}</p></div>)}
              </div>
            </SectionReveal>
          </div>

          <SectionReveal className="mt-14 border-t border-white/10 pt-6">
            <div className="flex items-center justify-between"><p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">What it does</p><ArrowDownRight className="h-4 w-4 text-[#d9ff4a]" /></div>
            <div className="mt-3 grid md:grid-cols-2">
              {featuredProject.features.map((feature, index) => <article key={feature.title} className="group border-b border-white/10 py-5 md:pr-7 md:odd:border-r md:odd:pr-7 md:even:pl-7"><span className="font-mono text-[10px] text-[#d9ff4a]">0{index + 1}</span><h3 className="mt-3 text-base font-medium text-[#f5f4ef]">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-[#85857b]">{feature.description}</p></article>)}
            </div>
          </SectionReveal>

          <SectionReveal className="mt-10 flex flex-wrap gap-2">
            {featuredProject.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[.1em] text-[#a8a79f]">{item}</span>)}
          </SectionReveal>
          <SectionReveal className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
            {featuredProject.engineeringHighlights.map((item) => <div key={item.title} className="flex gap-3 rounded-xl border border-white/10 p-4"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d9ff4a]" /><div><p className="text-sm text-[#e8e7e0]">{item.title}</p><p className="mt-1 text-xs leading-5 text-[#85857b]">{item.description}</p></div></div>)}
          </SectionReveal>

          <SectionReveal className="mt-20 border-t border-white/10 pt-7">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">Case study / 02</p>
                <h3 className="mt-3 text-[clamp(2.4rem,4vw,4.2rem)] font-semibold leading-[.9] tracking-[-.07em] text-[#f5f4ef]">{autoDevProject.title}</h3>
              </div>
              <span className="rounded-full border border-[#d9ff4a]/35 bg-[#d9ff4a]/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[.13em] text-[#d9ff4a]">{autoDevProject.subtitle}</span>
            </div>

            <SectionReveal delay={0.08} className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#171814]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[.13em] text-[#85857b]"><span>AutoDev product preview</span><span className="flex items-center gap-2 text-[#d9ff4a]"><span className="h-1.5 w-1.5 rounded-full bg-[#d9ff4a]" /> Repository assistant</span></div>
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0e0c] p-2 sm:p-3"><Image src="/autodev-preview.png" alt="AutoDev repository assistant landing page" fill sizes="(max-width: 1024px) 100vw, 75vw" className="object-cover object-top transition duration-700 hover:scale-[1.02]" /></div>
            </SectionReveal>

            <div className="mt-8 grid gap-8 xl:grid-cols-[1.05fr_.95fr]">
              <div>
                <p className="max-w-2xl text-base leading-8 text-[#aeada4]">{autoDevProject.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={autoDevProject.liveDemoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#d9ff4a] px-4 py-2.5 text-sm font-semibold text-[#171813] hover:-translate-y-0.5">Open the app <ArrowUpRight className="h-4 w-4" /></Link>
                  <Link href={autoDevProject.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-[#f5f4ef] hover:border-[#d9ff4a] hover:text-[#d9ff4a]"><Github className="h-4 w-4" /> View repository</Link>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">{autoDevProject.stack.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[.1em] text-[#a8a79f]">{item}</span>)}</div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#171814]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[.13em] text-[#85857b]"><span>Repository intelligence</span><span className="flex items-center gap-2 text-[#d9ff4a]"><span className="h-1.5 w-1.5 rounded-full bg-[#d9ff4a]" /> RAG workflow</span></div>
                <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                  {autoDevProject.workflow.map((step, index) => <div key={step} className="bg-[#171814] p-5"><span className="font-mono text-[10px] text-[#d9ff4a]">0{index + 1}</span><div className="mt-7 flex items-center justify-between"><p className="text-sm text-[#e8e7e0]">{step}</p>{index === 0 ? <GitBranch className="h-4 w-4 text-[#85857b]" /> : index === 2 ? <Database className="h-4 w-4 text-[#85857b]" /> : <MessageSquareText className="h-4 w-4 text-[#85857b]" />}</div></div>)}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 md:grid-cols-3">
              {autoDevProject.highlights.map((highlight, index) => <div key={highlight} className="border-l border-[#d9ff4a]/40 pl-4"><span className="font-mono text-[10px] text-[#d9ff4a]">0{index + 1}</span><p className="mt-3 text-sm leading-6 text-[#a5a49b]">{highlight}</p></div>)}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
