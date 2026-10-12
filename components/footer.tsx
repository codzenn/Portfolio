"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return <footer className="px-5 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-[1400px] flex-col gap-6 border-x border-t border-white/10 px-6 py-7 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14"><p className="font-mono text-[10px] uppercase tracking-[.13em] text-[#75756d]">© {year} {siteConfig.name}. Built with care.</p><div className="flex flex-wrap items-center gap-x-5 gap-y-3">{footerLinks.map((link) => <Link key={link.label} href={link.href} className="font-mono text-[10px] uppercase tracking-[.12em] text-[#a7a69e] hover:text-[#d9ff4a]">{link.label}</Link>)}<button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="grid h-7 w-7 place-items-center rounded-full border border-white/15 text-[#d9ff4a] hover:bg-[#d9ff4a] hover:text-[#171813]" aria-label="Back to top"><ArrowUp className="h-3.5 w-3.5" /></button></div></div></footer>;
}
