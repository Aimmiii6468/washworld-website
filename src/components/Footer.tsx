import Link from "next/link";
import { BUSINESS } from "@/lib/site";

const SERVICES = [
  { href: "/services/self-serve", label: "Self-serve laundry" },
  { href: "/services/wash-and-fold", label: "Wash, dry & fold" },
  { href: "/services/dry-cleaning", label: "Dry cleaning" },
];

const INFO = [
  { href: "/#prices", label: "Prices" },
  { href: "/policies", label: "Store policies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About us" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-dark text-[#c9c7e6]">
      <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-14 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="mb-3 font-heading text-base font-bold text-white">
              Washworld Coin Laundry
            </h2>
            <address className="text-[0.95rem] not-italic leading-relaxed">
              {BUSINESS.streetAddress}
              <br />
              {BUSINESS.addressLocality}, {BUSINESS.addressRegion}{" "}
              {BUSINESS.postalCode}
              <br />
              <a className="hover:text-white" href={BUSINESS.phoneHref}>
                {BUSINESS.phoneDisplay}
              </a>
              <br />
              <a className="break-all hover:text-white" href={BUSINESS.emailHref}>
                {BUSINESS.email}
              </a>
            </address>
            <p className="mt-4 text-[0.95rem]">
              Open every day {BUSINESS.hoursDisplay}
              <br />
              <span className="text-[#a09dcc]">
                Last wash {BUSINESS.lastWashDisplay}
              </span>
            </p>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-base font-bold text-white">
              Services
            </h2>
            {SERVICES.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-1 text-[0.95rem] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={BUSINESS.curbsideUrl}
              target="_blank"
              rel="noreferrer"
              className="block py-1 text-[0.95rem] hover:text-white"
            >
              Pickup &amp; delivery
            </a>
          </div>

          <div>
            <h2 className="mb-3 font-heading text-base font-bold text-white">
              Information
            </h2>
            {INFO.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-1 text-[0.95rem] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-[0.85rem] text-[#8f8db8]">
          &copy; {new Date().getFullYear()} Washworld Coin Laundry. Serving{" "}
          {BUSINESS.neighbourhood}, {BUSINESS.nearby} and Central Toronto.
        </div>
      </div>
    </footer>
  );
}
