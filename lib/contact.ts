export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  company?: string;
};

export type ContactField = "name" | "email" | "message";

export type ContactValidationResult = {
  ok: boolean;
  isBot: boolean;
  fieldErrors: Partial<Record<ContactField, string>>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

export function validateContactPayload(payload: ContactPayload): ContactValidationResult {
  const fieldErrors: Partial<Record<ContactField, string>> = {};
  const normalizedName = payload.name.trim();
  const normalizedEmail = payload.email.trim();
  const normalizedMessage = payload.message.trim();
  const isBot = Boolean(payload.company?.trim());

  if (!normalizedName) {
    fieldErrors.name = "Please enter your name.";
  }

  if (!normalizedEmail) {
    fieldErrors.email = "Please enter your email.";
  } else if (!emailPattern.test(normalizedEmail)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!normalizedMessage) {
    fieldErrors.message = "Please share a short message.";
  } else if (normalizedMessage.length < 20) {
    fieldErrors.message = "Please add a bit more detail so I can respond well.";
  }

  return {
    ok: Object.keys(fieldErrors).length === 0,
    isBot,
    fieldErrors,
  };
}
