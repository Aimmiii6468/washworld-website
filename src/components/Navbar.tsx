"use client";

import Image from "next/image";
import { MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/site";

const SERVICE_LINKS = [
  { href: "/services/self-serve", label: "Self-serve Wash and Dry" },
  { href: "/services/wash-and-fold", label: "Drop-off Wash, Dry, & Fold" },
  { href: "/services/dry-cleaning", label: "Dry Cleaning Services" },
] as const;

const MAIN_LINKS = [
  { href: "/policies", label: "Store Policies" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close the desktop dropdown when focus or a click leaves it, and on Escape.
  useEffect(() => {
    if (!servicesOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesOpen]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Washworld Coin Laundry"
            width={82}
            height={82}
            className="h-[82px] w-[82px] object-contain"
            priority
            sizes="82px"
          />
          <span className="sr-only">Washworld Coin Laundry home</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
          >
            Home
          </Link>

          {/* Services Dropdown: opens on hover AND on keyboard activation */}
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
              className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors flex items-center gap-1 py-6"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div
              id="services-menu"
              hidden={!servicesOpen}
              className="absolute top-[80%] left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 flex flex-col p-2"
            >
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setServicesOpen(false)}
                  className="px-4 py-2 hover:bg-slate-50 text-sm font-bold text-slate-800 rounded-lg"
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
              className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-sm ml-2"
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            Get Directions
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="lg:hidden text-slate-800 p-2"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        hidden={!isOpen}
        className="lg:hidden bg-white border-b border-border absolute w-full px-6 py-4 flex-col gap-3 shadow-xl max-h-[85vh] overflow-y-auto flex"
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-lg font-semibold text-slate-800 py-2 border-b border-gray-100"
        >
          Home
        </Link>

        <div className="py-2 border-b border-gray-100">
          <span className="text-sm font-black text-slate-400 uppercase tracking-wider mb-2 block">
            Services
          </span>
          <div className="flex flex-col gap-3 pl-4">
            {SERVICE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[17px] font-bold text-slate-700"
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
            onClick={() => setIsOpen(false)}
            className="text-lg font-semibold text-slate-800 py-2 border-b border-gray-100"
          >
            {link.label}
          </Link>
        ))}

        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center mt-2 flex justify-center items-center gap-2 shadow-md hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 active:scale-95 transition-all duration-300"
        >
          <MapPin className="w-5 h-5" aria-hidden="true" />
          Get Directions
        </a>
      </div>
    </nav>
  );
}
