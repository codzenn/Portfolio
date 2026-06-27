import { BriefcaseBusiness } from "lucide-react";
import { experienceItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Experience building production systems and full-stack products."
            description="My experience combines large-scale application delivery, modern web interfaces, secure backend services, integrations, and real-world production ownership."
          />
        </SectionReveal>

        <div className="mt-12 border-t border-white/10 pt-10">
          <div className="relative space-y-10 before:absolute before:left-[18px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300 before:via-violet-400 before:to-transparent">
            {experienceItems.map((item, index) => (
              <SectionReveal key={`${item.role}-${item.company}`} delay={index * 0.08}>
                <article className="relative pl-14">
                  <span className="absolute left-0 top-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </span>
                  <div className="border-b border-white/10 pb-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                        <p className="text-sm text-cyan-200">{item.company}</p>
                      </div>
                      <span className="text-sm text-slate-400">{item.duration}</span>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
