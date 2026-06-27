"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import { validateContactPayload } from "@/lib/contact";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionReveal } from "@/components/ui/section-reveal";

type ToastState = {
  type: "success" | "error";
  message: string;
} | null;

const initialForm = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = window.setTimeout(() => {
      setToast(null);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [toast]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateContactPayload(form);

    if (!validation.ok) {
      setFieldErrors(validation.fieldErrors);
      setToast({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    setLoading(true);
    setFieldErrors({});
    setToast(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { ok: boolean; message: string; fieldErrors?: Record<string, string> };

      if (!response.ok || !data.ok) {
        setFieldErrors(data.fieldErrors ?? {});
        setToast({ type: "error", message: data.message || "Something went wrong while sending your message." });
        return;
      }

      setForm(initialForm);
      setToast({ type: "success", message: data.message });
    } catch {
      setToast({ type: "error", message: "Network issue detected. Please try again in a moment." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something strong, useful, and actually shippable."
            description="If you’re hiring for full-stack development, backend engineering, secure API work, or enterprise product delivery, I’d love to connect."
          />
        </SectionReveal>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal>
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/75">Current status</p>
                <p className="mt-3 text-xl font-semibold text-white">{siteConfig.availability}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Best for full-stack and backend-focused roles involving Java, Spring Boot, React.js, Node.js, SQL-heavy systems, secure integrations, and production support.
                </p>
              </div>

              <div className="border-b border-white/10 pb-5">
                <p className="text-sm text-slate-400">Email</p>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 inline-flex text-base font-medium text-white transition hover:text-cyan-200"
                >
                  {siteConfig.email}
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {social.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="relative overflow-hidden rounded-[1.9rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_28%),linear-gradient(180deg,rgba(8,15,30,0.72),rgba(2,6,23,0.34))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.24)] backdrop-blur-md">
            <div className="pointer-events-none absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent light-sweep" />
            <div className="pointer-events-none absolute -right-8 top-6 h-24 w-24 rounded-full bg-violet-500/10 blur-3xl ambient-float" />
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    className="w-full rounded-2xl bg-white/[0.045] px-4 py-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-400/20"
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                  />
                  {fieldErrors.name ? (
                    <span id="contact-name-error" className="text-xs text-rose-300">
                      {fieldErrors.name}
                    </span>
                  ) : null}
                </label>

                <label className="space-y-2 text-sm text-slate-300">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    className="w-full rounded-2xl bg-white/[0.045] px-4 py-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-400/20"
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                  />
                  {fieldErrors.email ? (
                    <span id="contact-email-error" className="text-xs text-rose-300">
                      {fieldErrors.email}
                    </span>
                  ) : null}
                </label>
              </div>

              <label className="hidden" aria-hidden="true">
                <span>Company</span>
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
                />
              </label>

              <label className="space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  className="w-full rounded-[1.5rem] bg-white/[0.045] px-4 py-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] outline-none transition focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-400/20"
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                />
                {fieldErrors.message ? (
                  <span id="contact-message-error" className="text-xs text-rose-300">
                    {fieldErrors.message}
                  </span>
                ) : null}
              </label>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </SectionReveal>
        </div>
      </div>

      {toast ? (
        <div className="pointer-events-none fixed bottom-6 right-6 z-50">
          <div
            className={`rounded-2xl border px-4 py-3 text-sm shadow-2xl backdrop-blur-xl ${
              toast.type === "success"
                ? "border-emerald-400/30 bg-emerald-400/15 text-emerald-100"
                : "border-rose-400/30 bg-rose-400/15 text-rose-100"
            }`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </div>
        </div>
      ) : null}
    </section>
  );
}
