"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-white/10 px-0 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Copyright {year} {siteConfig.name}. Built for developer portfolio storytelling.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              download={"download" in link && link.download ? true : undefined}
              className="text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10"
          >
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
