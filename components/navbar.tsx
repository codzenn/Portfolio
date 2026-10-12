"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#11110f]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="#top" className="group flex items-center gap-3" aria-label="Go to portfolio home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#d9ff4a]/70 font-mono text-xs font-bold text-[#d9ff4a] transition group-hover:rotate-12">PK</span>
          <span className="hidden text-sm font-medium tracking-[-.02em] text-[#f5f4ef] sm:block">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigationLinks.map((link) => (
            <Link key={link.label} href={link.href} className="nav-link font-mono text-[11px] uppercase tracking-[0.14em] text-[#9c9b92]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#d9ff4a] px-4 py-2.5 text-xs font-semibold text-[#161713] hover:-translate-y-0.5 hover:bg-[#efffae]">
            Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-[#f5f4ef] lg:hidden" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <nav className="border-t border-white/10 bg-[#11110f] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-[1400px] flex-col">
            {navigationLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="border-b border-white/10 py-4 font-mono text-xs uppercase tracking-[0.16em] text-[#cfcec5]">
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-[#d9ff4a] px-4 py-2.5 text-xs font-semibold text-[#161713]">
              Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
