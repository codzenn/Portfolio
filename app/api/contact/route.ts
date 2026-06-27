import { NextResponse } from "next/server";
import { ContactPayload, validateContactPayload } from "@/lib/contact";
import { siteConfig } from "@/lib/data";
import { isContactEmailConfigured, sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;
  const payload: ContactPayload = {
    name: body.name ?? "",
    email: body.email ?? "",
    message: body.message ?? "",
    company: body.company ?? "",
  };
  const validation = validateContactPayload(payload);

  if (validation.isBot) {
    return NextResponse.json({
      ok: true,
      message: "Thanks for reaching out. Your message has been received.",
    });
  }

  if (!validation.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please correct the form fields and try again.",
        fieldErrors: validation.fieldErrors,
      },
      { status: 400 }
    );
  }

  if (!isContactEmailConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        message: `Contact delivery is not configured yet. Please email me directly at ${siteConfig.email}.`,
      },
      { status: 503 }
    );
  }

  try {
    await sendContactEmail({
      name: payload.name.trim(),
      email: payload.email.trim(),
      message: payload.message.trim(),
    });

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully. I’ll get back to you soon.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Unable to send your message right now. Please try again later or email me directly.",
      },
      { status: 500 }
    );
  }
}
