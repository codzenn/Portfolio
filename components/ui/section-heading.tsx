import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("mb-5 flex items-center gap-4", align === "center" && "justify-center")}>
        <span className="h-px w-12 bg-gradient-to-r from-cyan-300/90 to-transparent" />
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/80">{eyebrow}</p>
      </div>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300/95">{description}</p>
    </div>
  );
}
