import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { BUSINESS } from "@/lib/site";

const SERVICES = [
  { href: "/services/self-serve", label: "Self-serve laundry" },
  { href: "/services/wash-and-fold", label: "Wash, dry & fold" },
  { href: "/services/dry-cleaning", label: "Dry cleaning" },
  { href: "/commercial", label: "Bulk & business laundry" },
];

const INFO = [
  { href: "/prices", label: "Prices" },
  { href: "/about", label: "About us" },
  { href: "/faq", label: "FAQ" },
  { href: "/policies", label: "Store policies" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-dark text-[#c9c7e6]">
      <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-14 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="mb-1 wordmark text-[1.35rem] text-white">
              Washworld
            </h2>
            <p className="wordmark-sub mb-4 text-[#8f8db8]">Coin Laundry</p>
            {/* One row per detail, each led by its own icon. The street, city,
                province and postcode sit on a single line so the address reads
                the way it would on an envelope rather than as a stacked list. */}
            <address className="grid gap-3 text-[0.95rem] not-italic">
              <span className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-[#8f8db8]">
                  <Icon name="pin" size={18} />
                </span>
                <span>
                  {BUSINESS.streetAddress}, {BUSINESS.addressLocality},{" "}
                  {BUSINESS.addressRegion} {BUSINESS.postalCode}
                </span>
              </span>
              <a
                className="flex items-center gap-3 hover:text-white"
                href={BUSINESS.phoneHref}
              >
                <span className="shrink-0 text-[#8f8db8]">
                  <Icon name="phone" size={18} />
                </span>
                {BUSINESS.phoneDisplay}
              </a>
              <a
                className="flex items-start gap-3 hover:text-white"
                href={BUSINESS.emailHref}
              >
                <span className="mt-0.5 shrink-0 text-[#8f8db8]">
                  <Icon name="mail" size={18} />
                </span>
                <span className="break-all">{BUSINESS.email}</span>
              </a>
              <span className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-[#8f8db8]">
                  <Icon name="clock" size={18} />
                </span>
                <span>
                  Open every day {BUSINESS.hoursDisplay}
                  <br />
                  <span className="text-[#a09dcc]">
                    Last wash {BUSINESS.lastWashDisplay}
                  </span>
                </span>
              </span>
            </address>
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
              className="flex items-center gap-2 py-1 text-[0.95rem] hover:text-white"
            >
              <Icon name="truck" size={16} />
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
