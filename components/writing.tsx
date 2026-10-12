import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Writing() {
  return (
    <section id="writing" className="section-shell px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] border-x border-white/10 lg:grid-cols-[310px_minmax(0,1fr)]">
        <aside className="section-label border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#d9ff4a]">05 — Writing</p>
          <p className="mt-5 max-w-[190px] text-sm leading-6 text-[#85857b]">Notes on engineering, AI, and designing resilient systems.</p>
        </aside>

        <div className="p-6 sm:p-10 lg:p-14">
          <SectionReveal>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">The Engineering Lab</p>
                <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,4.7vw,4.6rem)] font-semibold leading-[.94] tracking-[-.07em] text-[#f5f4ef]">Things I&apos;m learning, <span className="font-serif font-normal italic text-[#d9ff4a]">written down.</span></h2>
              </div>
              <Link href="https://theengineeringlab.hashnode.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-[#f5f4ef] hover:border-[#d9ff4a] hover:text-[#d9ff4a]">Visit the blog <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </SectionReveal>

          <div className="mt-12 border-t border-white/10">
            {blogPosts.map((post, index) => (
              <SectionReveal key={post.href} delay={index * 0.06}>
                <Link href={post.href} target="_blank" rel="noreferrer" className="group grid gap-5 border-b border-white/10 py-6 sm:grid-cols-[94px_minmax(0,1fr)_auto] sm:items-center">
                  <span className="font-mono text-[10px] uppercase tracking-[.14em] text-[#d9ff4a]">0{index + 1}</span>
                  <div><h3 className="max-w-2xl text-xl font-medium leading-tight tracking-[-.03em] text-[#ecebe5] transition group-hover:text-[#d9ff4a] sm:text-2xl">{post.title}</h3><p className="mt-3 font-mono text-[10px] uppercase tracking-[.13em] text-[#85857b]">{post.publishedAt} · {post.readTime}</p></div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#85857b] transition group-hover:border-[#d9ff4a] group-hover:bg-[#d9ff4a] group-hover:text-[#171813]"><ArrowUpRight className="h-4 w-4" /></span>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-8 flex items-center gap-3 text-sm text-[#85857b]"><BookOpen className="h-4 w-4 text-[#d9ff4a]" /> Published on Hashnode · The Engineering Lab</SectionReveal>
        </div>
      </div>
    </section>
  );
}
