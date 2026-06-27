import type { ProjectFeature } from "@/lib/data";

type FeatureCardProps = {
  feature: ProjectFeature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="group relative h-full overflow-hidden border-t border-white/10 pt-5 transition duration-300 hover:border-cyan-300/35">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-cyan-300/80 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.04] text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_24px_rgba(34,211,238,0.06)] transition group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">{feature.title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">{feature.description}</p>
    </article>
  );
}
