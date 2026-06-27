"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { heroCtas, siteConfig, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

const buttonStyles = {
  primary:
    "bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 text-slate-950 shadow-[0_14px_40px_rgba(34,211,238,0.25)] hover:shadow-[0_18px_48px_rgba(139,92,246,0.28)]",
  secondary:
    "border border-white/15 bg-white/8 text-white hover:border-cyan-300/40 hover:bg-white/12",
  ghost:
    "border border-transparent bg-transparent text-slate-200 hover:bg-white/8 hover:text-white",
} as const;

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const orbTransform = useMotionTemplate`translate(${springX}px, ${springY}px)`;

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pt-16">
      <div
        className="mx-auto max-w-6xl border-b border-white/10 px-2 py-12 sm:px-4 lg:py-20"
        onMouseMove={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect();
          const x = (event.clientX - bounds.left - bounds.width / 2) / 18;
          const y = (event.clientY - bounds.top - bounds.height / 2) / 18;
          mouseX.set(x);
          mouseY.set(y);
        }}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            style={{ transform: orbTransform }}
            className="absolute -left-10 top-8 h-56 w-56 rounded-full bg-cyan-400/14 blur-3xl"
          />
          <motion.div
            style={{ transform: orbTransform }}
            className="absolute right-0 top-16 h-72 w-72 rounded-full bg-violet-500/16 blur-3xl"
          />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.05),transparent_25%),radial-gradient(circle_at_top_right,rgba(139,92,246,0.1),transparent_28%)]" />
        </div>

        <div className="relative grid items-start gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 shadow-[0_0_30px_rgba(74,222,128,0.12)]"
            >
              <span className="relative inline-flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
              </span>
              {siteConfig.availability}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-8 text-sm uppercase tracking-[0.32em] text-cyan-200/80"
            >
              Hello, I&apos;m {siteConfig.name}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[4.2rem] lg:leading-[0.98]"
            >
              {siteConfig.role}
              <span className="mt-4 block text-lg font-medium tracking-[-0.02em] text-slate-200 sm:text-xl lg:text-[2rem] lg:leading-[1.2]">
                Building scalable web applications with modern frontend engineering, robust backend systems, and reliable product delivery.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-300/95"
            >
              {siteConfig.headline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {heroCtas.map((cta) => (
                <Link
                  key={cta.label}
                  href={cta.href}
                  download={"download" in cta && cta.download ? true : undefined}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                    buttonStyles[cta.variant]
                  )}
                >
                  {cta.label}
                  {"download" in cta && cta.download ? (
                    <Download className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex items-center gap-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={social.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10 hover:text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:pt-10"
          >
            <div className="relative overflow-hidden pl-7">
              <div className="pointer-events-none absolute left-0 top-2 h-full w-px bg-gradient-to-b from-cyan-300/90 via-white/12 to-transparent" />
              <div className="pointer-events-none absolute -left-10 top-10 h-24 w-24 rounded-full bg-cyan-400/14 blur-3xl ambient-float" />
              <div className="pointer-events-none absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-cyan-300/90 to-transparent" />
              <p className="text-xs uppercase tracking-[0.34em] text-cyan-200/80">Core focus</p>
              <ul className="mt-6 space-y-5 text-sm text-slate-300">
                {[
                  "Modern product interfaces with React.js, Next.js, TypeScript, and responsive UI systems",
                  "Scalable backend services, APIs, auth flows, and database-driven application architecture",
                  "Strong delivery mindset across cloud deployment, production support, and AI-assisted product workflows",
                ].map((item) => (
                  <li key={item} className="relative border-b border-white/8 pb-5 pl-4 last:border-none last:pb-0">
                    <span className="absolute -ml-4 mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300/80 shadow-[0_0_20px_rgba(34,211,238,0.4)]" />
                    <span className="block leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
