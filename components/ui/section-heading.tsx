import { cn } from "@/lib/utils";

type SectionHeadingProps = { eyebrow: string; title: string; description: string; align?: "left" | "center" };

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
    <p className="kicker flex items-center gap-3"><span className="text-[#e8d48b]">0{eyebrow.length}</span> / {eyebrow}</p>
    <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-.055em] text-[#f1eee7] sm:text-5xl">{title}</h2>
    <p className="mt-6 max-w-2xl text-base leading-8 text-[#aaa79d]">{description}</p>
  </div>;
}
