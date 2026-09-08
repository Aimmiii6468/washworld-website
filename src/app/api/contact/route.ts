import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Contact form endpoint.
 *
 * Delivery is handled by Resend over its REST API, so there is no extra npm
 * dependency to keep up to date. Configure these environment variables in
 * Vercel (Project Settings -> Environment Variables):
 *
 *   RESEND_API_KEY   required, from https://resend.com/api-keys
 *   CONTACT_TO_EMAIL optional, defaults to the business email
 *   CONTACT_FROM     optional, defaults to onboarding@resend.dev
 *
 * Without RESEND_API_KEY the endpoint returns a clear 503 instead of
 * silently pretending the message was delivered.
 */

const MAX_PER_WINDOW = 5;
const WINDOW_MS = 10 * 60 * 1000;

// Best-effort in-memory throttle. Serverless instances are short lived, so
// this stops casual abuse only. Put a real WAF rule in front for anything more.
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill every field they can see.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const service = String(body.service ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || name.length > 100) {
    return NextResponse.json(
      { error: "Please enter your name." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      { error: "Please write a message between 10 and 2000 characters." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error: `Our contact form is not connected yet. Please email ${BUSINESS.email} or call ${BUSINESS.phoneDisplay}.`,
      },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL ?? BUSINESS.email;
  const from = process.env.CONTACT_FROM ?? "Washworld Website <onboarding@resend.dev>";

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone) || "not provided"}</p>
    <p><strong>Topic:</strong> ${escapeHtml(service) || "not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend rejected the message:", response.status, detail);
      return NextResponse.json(
        {
          error: `We could not send your message. Please call ${BUSINESS.phoneDisplay}.`,
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json(
      {
        error: `We could not send your message. Please call ${BUSINESS.phoneDisplay}.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
