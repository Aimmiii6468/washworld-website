"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICES = [
  "Self-serve Wash and Dry",
  "Drop-off Wash, Dry & Fold",
  "Dry Cleaning",
  "Pickup & Delivery",
  "Something else",
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call us instead.",
      );
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[26px] border border-border bg-white p-8 shadow-card"
      noValidate={false}
    >
      <div>
        <h2 className="mb-1 font-heading text-xl font-extrabold">
          Send us a message
        </h2>
        <p className="text-sm text-muted-foreground">
          We usually reply within one business day.
        </p>
      </div>

      {/* Honeypot: a real person never fills this in */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-heading text-sm font-bold"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className="w-full rounded-xl border border-border bg-secondary px-4 py-3 transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-white"
            placeholder="Jane Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-heading text-sm font-bold"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className="w-full rounded-xl border border-border bg-secondary px-4 py-3 transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-white"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block font-heading text-sm font-bold"
          >
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            className="w-full rounded-xl border border-border bg-secondary px-4 py-3 transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-white"
            placeholder="(416) 000-0000"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block font-heading text-sm font-bold"
          >
            What is it about?
          </label>
          <select
            id="service"
            name="service"
            defaultValue={SERVICES[0]}
            className="w-full rounded-xl border border-border bg-secondary px-4 py-3 transition-colors focus:border-primary focus:bg-white"
          >
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-heading text-sm font-bold"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={2000}
          className="w-full resize-y rounded-xl border border-border bg-secondary px-4 py-3 transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-white"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-aurora inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 font-heading font-bold text-white shadow-[0_12px_26px_-12px_rgb(79_70_229/0.75)] transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" aria-hidden="true" />
            Send message
          </>
        )}
      </button>

      {/* Status messages are announced to screen readers */}
      <div aria-live="polite" className="min-h-[1.5rem]">
        {status === "sent" && (
          <p className="flex items-start gap-2 text-green-700 bg-green-50 border border-green-100 rounded-xl px-4 py-3 font-semibold text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" />
            Thanks! Your message is on its way. We will get back to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-start gap-2 text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3 font-semibold text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
