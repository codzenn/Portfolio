import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Skills"
            title="A stack centered on modern product delivery."
            description="From React.js and Next.js on the frontend to TypeScript, Node.js, APIs, databases, cloud tooling, and AI integrations on the backend, these are the technologies I use to ship real products."
          />
        </SectionReveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 border-t border-white/10 pt-10 lg:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <SectionReveal key={category.title} delay={categoryIndex * 0.08}>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{category.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {category.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:text-white hover:shadow-[0_12px_28px_rgba(34,211,238,0.08)]"
                      style={{ transitionDelay: `${itemIndex * 30}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
