"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight, Loader2, Send } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import { validateContactPayload } from "@/lib/contact";

type ToastState = { type: "success" | "error"; message: string } | null;
const initialForm = { name: "", email: "", message: "", company: "" };

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateContactPayload(form);
    if (!validation.ok) { setFieldErrors(validation.fieldErrors); setToast({ type: "error", message: "Please complete the highlighted fields." }); return; }
    setLoading(true); setFieldErrors({}); setToast(null);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = (await response.json()) as { ok: boolean; message: string; fieldErrors?: Record<string, string> };
      if (!response.ok || !data.ok) { setFieldErrors(data.fieldErrors ?? {}); setToast({ type: "error", message: data.message || "Something went wrong. Please try again." }); return; }
      setForm(initialForm); setToast({ type: "success", message: data.message });
    } catch { setToast({ type: "error", message: "Network issue detected. Please try again." }); } finally { setLoading(false); }
  }

  return (
    <section id="contact" className="section-shell px-5 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] border-x border-white/10 lg:grid-cols-[310px_minmax(0,1fr)]">
        <aside className="section-label border-b border-white/10 p-6 sm:p-10 lg:border-b-0 lg:border-r"><p className="font-mono text-[11px] uppercase tracking-[.16em] text-[#d9ff4a]">06 — Contact</p><p className="mt-5 max-w-[190px] text-sm leading-6 text-[#85857b]">Have a role, a product, or a knotty problem? Let&apos;s talk.</p></aside>
        <div className="p-6 sm:p-10 lg:p-14">
          <div className="grid gap-12 xl:grid-cols-[.9fr_1.1fr]">
            <div><p className="font-mono text-[10px] uppercase tracking-[.17em] text-[#85857b]">Make something useful</p><h2 className="mt-5 text-[clamp(2.5rem,4.7vw,4.6rem)] font-semibold leading-[.94] tracking-[-.07em] text-[#f5f4ef]">Let&apos;s make the next thing <span className="font-serif font-normal italic text-[#d9ff4a]">count.</span></h2><p className="mt-7 max-w-md text-base leading-7 text-[#a5a49b]">{siteConfig.availability}. For a quick hello, use the form or write directly.</p><Link href={`mailto:${siteConfig.email}`} className="group mt-8 inline-flex items-center gap-3 border-b border-[#d9ff4a] pb-1 text-sm font-medium text-[#f5f4ef] hover:text-[#d9ff4a]">{siteConfig.email}<ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link><div className="mt-9 flex flex-wrap gap-3">{socialLinks.map((social) => { const Icon = social.icon; return <Link key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-[#b8b7ae] hover:border-[#d9ff4a] hover:text-[#d9ff4a]"><Icon className="h-3.5 w-3.5" /> {social.label}</Link>; })}</div></div>
            <form className="rounded-2xl border border-white/10 bg-[#171814] p-5 sm:p-7" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-label">Name<input name="name" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} className="form-input" aria-invalid={Boolean(fieldErrors.name)} />{fieldErrors.name ? <span className="form-error">{fieldErrors.name}</span> : null}</label>
                <label className="form-label">Email<input type="email" name="email" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} className="form-input" aria-invalid={Boolean(fieldErrors.email)} />{fieldErrors.email ? <span className="form-error">{fieldErrors.email}</span> : null}</label>
              </div>
              <label className="hidden" aria-hidden="true"><span>Company</span><input name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))} /></label>
              <label className="form-label mt-5">How can I help?<textarea name="message" rows={6} value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} className="form-input resize-y" aria-invalid={Boolean(fieldErrors.message)} />{fieldErrors.message ? <span className="form-error">{fieldErrors.message}</span> : null}</label>
              <button type="submit" disabled={loading} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d9ff4a] px-5 py-3 text-sm font-semibold text-[#171813] hover:-translate-y-0.5 hover:bg-[#efffae] disabled:cursor-not-allowed disabled:opacity-70">{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}{loading ? "Sending..." : "Send message"}</button>
            </form>
          </div>
        </div>
      </div>
      {toast ? <div className={`fixed bottom-6 right-6 z-50 rounded-full border px-4 py-3 text-sm shadow-2xl ${toast.type === "success" ? "border-[#d9ff4a]/40 bg-[#20231b] text-[#eaffaa]" : "border-rose-400/40 bg-rose-950/80 text-rose-100"}`} role="status" aria-live="polite">{toast.message}</div> : null}
    </section>
  );
}
