import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCheck, Github, Layers3 } from "lucide-react";
import { featuredProject } from "@/lib/data";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Project() {
  return (
    <section id="project" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Featured Project"
            title={`${featuredProject.title} — ${featuredProject.subtitle}`}
            description={featuredProject.tagline}
          />
        </SectionReveal>

        <SectionReveal delay={0.08} className="mt-10 border-t border-white/10 pt-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Centerpiece Case Study
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
                  {featuredProject.githubLabel}
                </span>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{featuredProject.intro}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={featuredProject.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
                >
                  Live Demo
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  GitHub
                  <Github className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredProject.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(15,23,42,0.7),rgba(2,6,23,0.28))] p-[1px] shadow-[0_24px_80px_rgba(2,6,23,0.28)]">
                <div className="pointer-events-none absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent light-sweep" />
                <div className="pointer-events-none absolute -left-6 top-10 h-24 w-24 rounded-full bg-cyan-400/14 blur-3xl ambient-float" />
                <div className="overflow-hidden rounded-[calc(2.2rem-1px)] bg-slate-900/70">
                  <Image
                    src="/project-preview.png"
                    alt="Stylized SnapOrbitAI dashboard preview"
                    width={1400}
                    height={900}
                    className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Layers3 className="h-4 w-4 text-cyan-200" />
                Architecture flow
              </div>
              <div className="border-l border-white/10 pl-5">
                <div className="space-y-4">
                  {featuredProject.architectureFlow.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.04] text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(34,211,238,0.08)]">
                        {index + 1}
                      </span>
                      <div className="flex-1 text-sm text-slate-200">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredProject.features.map((feature, index) => (
            <SectionReveal key={feature.title} delay={0.06 * index}>
              <FeatureCard feature={feature} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.12} className="mt-12 border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-cyan-200/80">
            <CheckCheck className="h-4 w-4" />
            Engineering highlights
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-8 lg:grid-cols-2">
            {featuredProject.engineeringHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative border-t border-white/10 pt-5 transition duration-300 hover:border-cyan-300/30"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.04] text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_28px_rgba(34,211,238,0.08)] transition duration-300 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
