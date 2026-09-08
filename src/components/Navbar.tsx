"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const SERVICE_LINKS = [
  { href: "/services/self-serve", label: "Self-serve laundry" },
  { href: "/services/wash-and-fold", label: "Wash, dry & fold" },
  { href: "/services/dry-cleaning", label: "Dry cleaning" },
] as const;

const MAIN_LINKS = [
  { href: "/#prices", label: "Prices" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-xl"
      aria-label="Main"
    >
      <nav className="mx-auto flex h-[78px] max-w-[1200px] items-center justify-between gap-6 px-5 md:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.webp"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
            sizes="40px"
          />
          <span className="leading-tight">
            <span className="block font-heading text-[1.02rem] font-extrabold">
              Washworld
            </span>
            <span className="block text-xs text-muted-foreground">
              Coin Laundry &middot; Toronto
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((open) => !open)}
              className="flex items-center gap-1 py-6 text-[0.92rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div
              id="services-menu"
              hidden={!servicesOpen}
              className="absolute left-0 top-[78%] flex w-64 flex-col rounded-2xl border border-border bg-white p-2 shadow-card-lg"
            >
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setServicesOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {MAIN_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.92rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-aurora inline-flex items-center gap-2 rounded-full px-6 py-3 font-heading text-[0.94rem] font-bold text-white shadow-[0_12px_26px_-12px_rgb(79_70_229/0.75)] transition-transform hover:-translate-y-0.5"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Get directions
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="p-2 text-foreground lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="absolute w-full flex-col gap-1 border-b border-border bg-white px-5 pb-5 shadow-card-lg lg:hidden"
        style={{ display: mobileOpen ? "flex" : undefined }}
      >
        <span className="pt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Services
        </span>
        {SERVICE_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="border-b border-border py-3 text-[17px] font-semibold"
          >
            {link.label}
          </Link>
        ))}
        {MAIN_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="border-b border-border py-3 text-[17px] font-semibold"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-aurora mt-4 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-heading font-bold text-white"
        >
          <MapPin className="h-5 w-5" aria-hidden="true" />
          Get directions
        </a>
      </div>
    </header>
  );
}
