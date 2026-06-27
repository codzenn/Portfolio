"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <div className="relative flex items-center justify-between gap-4 px-1 py-3">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl ambient-float" />
          <div className="pointer-events-none absolute right-10 top-0 h-14 w-28 rounded-full bg-violet-500/8 blur-3xl ambient-float" />

          <Link
            href="/"
            className="relative inline-flex items-center rounded-full px-2 py-2 text-sm font-semibold text-white transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Go to portfolio home"
          >
            <span className="text-slate-200">{siteConfig.name}</span>
          </Link>

          <nav
            className="relative hidden items-center gap-1 overflow-hidden rounded-full bg-white/[0.035] px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_40px_rgba(2,6,23,0.16)] backdrop-blur-xl md:flex"
            aria-label="Primary navigation"
          >
            <span className="light-sweep pointer-events-none absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent" />
            {navigationLinks.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {link.label}
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300 to-violet-400 transition duration-300 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white/[0.045] text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_30px_rgba(2,6,23,0.2)] transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="pointer-events-none absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-slate-950/70 px-4 py-24 backdrop-blur-xl md:hidden"
          >
            <div className="relative mx-auto flex max-w-sm flex-col gap-3 overflow-hidden rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(8,15,30,0.92),rgba(2,6,23,0.86))] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.45)]">
              <div className="pointer-events-none absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent light-sweep" />
              <div className="pointer-events-none absolute -right-10 top-8 h-24 w-24 rounded-full bg-violet-500/12 blur-3xl" />
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-4 text-base font-medium text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:bg-white/[0.08] hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
