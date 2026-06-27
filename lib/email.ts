import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
const contactToEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;

export function isContactEmailConfigured() {
  return Boolean(resendApiKey);
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  if (!resendApiKey) {
    throw new Error("RESEND_NOT_CONFIGURED");
  }

  const resend = new Resend(resendApiKey);

  return resend.emails.send({
    from: resendFromEmail,
    to: contactToEmail,
    replyTo: payload.email,
    subject: `New portfolio contact from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111827;">
        <h2 style="margin-bottom:16px;">New portfolio contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Message:</strong></p>
        <div style="white-space:pre-wrap;border:1px solid #e5e7eb;border-radius:12px;padding:16px;background:#f9fafb;">${escapeHtml(
          payload.message
        )}</div>
      </div>
    `,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
