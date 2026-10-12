import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="hero-noise relative overflow-hidden px-5 sm:px-8 lg:px-12">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="mx-auto max-w-[1400px] border-x border-white/10">
        <div className="flex min-h-[calc(100vh-72px)] flex-col justify-between py-10 sm:py-14 lg:py-16">
          <div className="px-5 sm:px-10 lg:px-14">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#afaea5]">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d9ff4a] opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#d9ff4a]" /></span>
              Available for thoughtful teams
            </div>

            <h1 className="mt-12 max-w-5xl text-[clamp(3.8rem,9.5vw,10rem)] font-semibold leading-[.79] tracking-[-.09em] text-[#f5f4ef]">
              Software that
              <span className="block font-serif font-normal italic tracking-[-.1em] text-[#d9ff4a]">feels clear.</span>
            </h1>

            <div className="mt-10 grid max-w-3xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-base leading-7 text-[#aaa9a0] sm:text-lg">I&apos;m {siteConfig.name}, a full-stack developer building calm, considered products from the first interface to the systems behind it.</p>
              <span className="hidden h-12 w-12 place-items-center rounded-full border border-white/15 text-[#d9ff4a] sm:grid"><ArrowDownRight className="h-5 w-5" /></span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#project" className="inline-flex items-center gap-3 rounded-full bg-[#d9ff4a] px-5 py-3 text-sm font-semibold text-[#171813] hover:-translate-y-0.5 hover:bg-[#efffae]">
                Explore selected work <ArrowDownRight className="h-4 w-4" />
              </Link>
              <Link href="#contact" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-[#e7e6e0] hover:border-[#d9ff4a] hover:text-[#d9ff4a]">
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 grid border-t border-white/10 sm:grid-cols-3">
            <div className="border-b border-white/10 px-5 py-5 sm:border-b-0 sm:px-10 lg:px-14">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#77776f]">Based in</p>
              <p className="mt-2 text-sm text-[#e7e6e0]">India / working globally</p>
            </div>
            <div className="border-b border-white/10 px-5 py-5 sm:border-b-0 sm:border-l sm:border-white/10 sm:px-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#77776f]">Focus</p>
              <p className="mt-2 text-sm text-[#e7e6e0]">Web apps, AI, APIs</p>
            </div>
            <div className="flex items-center gap-4 px-5 py-5 sm:border-l sm:border-white/10 sm:px-8">
              <Link aria-label="GitHub" href={siteConfig.githubProfile} target="_blank" rel="noreferrer" className="text-[#aaa9a0] hover:text-[#d9ff4a]"><Github className="h-5 w-5" /></Link>
              <Link aria-label="LinkedIn" href={siteConfig.linkedinProfile} target="_blank" rel="noreferrer" className="text-[#aaa9a0] hover:text-[#d9ff4a]"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
