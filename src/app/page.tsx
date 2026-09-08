"use client";

import Image from "next/image";
import Link from "next/link";
import LiteYouTube from "@/components/LiteYouTube";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Star,
  Wind,
  Wifi,
  Tv,
  Coffee,
  Droplets,
  ArrowRight,
  Truck,
  ChevronLeft,
  ChevronRight,
  Shirt,
  Pause,
  Play,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { BUSINESS, GOOGLE_RATING } from "@/lib/site";

/**
 * Reviews are transcribed from the live Google Business Profile.
 * Source: BUSINESS.reviewsUrl, checked 2026-09-08.
 * Do not add invented reviews here.
 */
const GOOGLE_REVIEWS = [
  {
    name: "sonia silva",
    time: "8 months ago",
    initial: "S",
    color: "bg-green-600",
    rating: 5,
    text: "We've been coming here for about 18mths. Definitely the best laundromat in the area. Very clean, great variety of washing machines and always friendly service. Really feels like a community.",
  },
  {
    name: "Farhad Jalali",
    time: "8 months ago",
    initial: "F",
    color: "bg-indigo-600",
    rating: 5,
    text: "The new management has changed up the feel of the place. Their wash and fold service is a life saver and the few times I've used their dry cleaning services it has been great. Good people, good services.",
  },
  {
    name: "mina h",
    time: "8 months ago",
    initial: "M",
    color: "bg-pink-600",
    rating: 5,
    text: "Clean, well-equipped laundromat with a very friendly atmosphere. The store manager is really friendly and welcoming, also the machines are easy to use.",
  },
  {
    name: "C",
    time: "11 months ago",
    initial: "C",
    color: "bg-blue-600",
    rating: 5,
    text: "The manager is friendly and the customers are also very nice. There are all the laundry amenities you need, coin machine, lots of washers and dryers, laundry carts, wifi while you wait, and this place has a wholesome community vibe to it.",
  },
  {
    name: "Aleksandra Rutkowska",
    time: "a year ago",
    initial: "A",
    color: "bg-amber-600",
    rating: 5,
    text: "Very clean space with mid and large size washing machines and drying machines. Changing machine available. You can also buy detergent or softener. People are really helpful if any problem occurred. Highly recommend.",
  },
  {
    name: "Espe Rubio",
    time: "3 years ago",
    initial: "E",
    color: "bg-teal-600",
    rating: 5,
    text: "Nice and clean place to do your laundry. The staff is very friendly and helpful. They have 3 different sizes of machines and many dryers. My clothes are actually clean after I come here. Highly recommended.",
  },
] as const;

const CARD_SCROLL_STEP = 344; // card min-width 320px + 24px gap
const AUTO_SCROLL_MS = 4500;

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reviews carousel autoplay. Starts running, but the visitor can stop it and
  // it pauses itself on hover/focus. WCAG 2.2.2 requires a way to pause
  // anything that moves automatically for more than five seconds.
  const [isCarouselPlaying, setIsCarouselPlaying] = useState(true);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);

  // The hero background video is not part of the initial render. It is mounted
  // once the browser is idle so it never competes with LCP, and it is skipped
  // entirely for visitors who ask for reduced motion.
  const [showHeroVideo, setShowHeroVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // requestIdleCallback is still missing in Safari, so fall back to a timer.
    const w = window as Window & {
      requestIdleCallback?: (
        callback: () => void,
        options?: { timeout: number },
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const mount = () => setShowHeroVideo(true);

    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(mount, { timeout: 3000 });
    } else {
      timeoutId = window.setTimeout(mount, 1500);
    }

    return () => {
      if (idleId !== undefined && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isCarouselPlaying || isCarouselHovered) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 20) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: CARD_SCROLL_STEP, behavior: "smooth" });
      }
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(interval);
  }, [isCarouselPlaying, isCarouselHovered]);

  const scrollCarousel = useCallback((direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -CARD_SCROLL_STEP : CARD_SCROLL_STEP,
      behavior: "smooth",
    });
  }, []);

  // Animation config for scroll-triggered reveals
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-slate-900 w-full h-full overflow-hidden pointer-events-none">
          {showHeroVideo && (
            <iframe
              src="https://www.youtube-nocookie.com/embed/ujmm4WjSL9s?autoplay=1&mute=1&loop=1&controls=0&rel=0&playsinline=1&playlist=ujmm4WjSL9s"
              className="absolute top-1/2 left-1/2 w-[180vw] md:w-[130vw] xl:w-[110vw] h-[180vh] md:h-[130vh] xl:h-[110vh] -translate-x-1/2 -translate-y-1/2 border-none opacity-30 pointer-events-none origin-center"
              allow="autoplay; encrypted-media"
              title="Washworld facility background video"
              aria-hidden="true"
              tabIndex={-1}
            />
          )}
          {/* Brand gradient wash */}
          <div className="absolute inset-0 bg-hero-gradient opacity-85 mix-blend-multiply z-0" />
          {/* Darkening scrim: guarantees AA contrast for the hero copy
              regardless of which video frame is behind it */}
          <div className="absolute inset-0 bg-slate-950/35 z-0" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
            <span className="bg-primary text-white border border-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow-lg">
              Toronto&apos;s Cleanest Laundromat
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-xl">
              A Premium Laundry <br className="hidden md:block" /> Experience.
            </h1>
            <p className="text-lg md:text-2xl text-white font-medium mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
              Brand new machines, free high-speed Wi-Fi, and a spotless
              climate-controlled environment.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto bg-primary text-white transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/50 active:scale-95 text-base font-bold px-8 py-3.5 rounded-full shadow-lg flex items-center justify-center gap-2 group border border-blue-400/20"
              >
                Get Directions
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#amenities"
                className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/40 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 active:scale-95 text-base font-bold px-8 py-3.5 rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                View Amenities
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROMOTIONS BANNER */}
      <section className="bg-primary py-8 px-6 relative z-20 shadow-lg border-t border-blue-400/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0 border border-white/30 shadow-inner">
              <Truck className="w-7 h-7 text-white" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-white font-extrabold text-2xl md:text-3xl mb-1 drop-shadow-sm">
                Too busy? Use our Delivery.
              </h2>
              <p className="text-blue-50 font-medium text-lg">
                We own Curbside Laundry! Get a promo code for your first online
                pickup order.
              </p>
            </div>
          </div>
          <a
            href={BUSINESS.curbsideUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-primary font-bold text-lg px-8 py-3.5 rounded-full hover:text-white hover:shadow-2xl hover:shadow-primary/40 hover:bg-accent hover:border-accent hover:-translate-y-1 active:scale-95 transition-all duration-300 w-full md:w-auto shadow-md border border-white text-center"
          >
            Place Laundry Order
          </a>
        </motion.div>
      </section>

      {/* 2.5 CORE SERVICES OVERVIEW */}
      <section className="py-16 md:py-24 px-6 bg-white" id="services">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From self-serve to full-service, we have a laundry solution
              perfectly suited to fit your busy lifestyle.
            </p>
          </div>

          {/* TOP ROW: 3 Core Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 mb-8 max-w-7xl mx-auto">
            {[
              {
                title: "Self-serve Wash and Dry",
                desc: "Enjoy a quick, convenient laundry experience at our clean facility, complete with new machines and free Wi-Fi.",
                img: "/images/services/service-1.jpg",
                link: "/services/self-serve",
              },
              {
                title: "Drop-off Wash, Dry, and Fold",
                desc: "Effortless laundry care! Simply drop off your clothes, and we'll expertly wash, dry, and fold them for you.",
                img: "/images/services/service-2.jpg",
                link: "/services/wash-and-fold",
              },
              {
                title: "Dry Cleaning",
                desc: "Professional care for your delicate garments and suits. Fast, reliable, and perfectly pressed.",
                img: "/images/facility/facility-5.jpg",
                link: "/services/dry-cleaning",
              },
            ].map((srv) => (
              <Link
                href={srv.link}
                key={srv.link}
                className="bg-card-gradient rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="p-4 pb-0">
                  <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative shadow-sm">
                    <Image
                      src={srv.img}
                      alt={srv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
                <div className="px-5 pb-8 flex flex-col flex-grow text-center">
                  <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-primary transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-500 mb-6 flex-grow leading-relaxed font-medium text-[15px]">
                    {srv.desc}
                  </p>
                  <span className="mt-auto font-bold text-primary flex items-center justify-center gap-1 group-hover:gap-2 transition-all text-sm uppercase tracking-wider">
                    See details
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* BOTTOM ROW: Pickup & Delivery Full-Width Feature */}
          <a
            href={BUSINESS.curbsideUrl}
            target="_blank"
            rel="noreferrer"
            className="block w-full max-w-7xl mx-auto bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-stretch p-4 gap-6 md:gap-10">
              {/* Image Side */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[350px] rounded-[1.5rem] overflow-hidden relative shadow-sm shrink-0">
                <Image
                  src="/images/services/pickup-site.png"
                  alt="Curbside Laundry online booking site"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 py-6 px-4 md:py-12 md:pr-12 xl:pr-16 flex flex-col justify-center text-center md:text-left">
                <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 w-fit mx-auto md:mx-0">
                  <Truck className="w-4 h-4" aria-hidden="true" /> Curbside
                  Laundry
                </span>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-primary transition-colors">
                  Pickup &amp; Dropoff Wash, Dry, &amp; Fold
                </h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium text-lg">
                  Say goodbye to laundry day! We&apos;ll pick up, clean, and
                  deliver your laundry, fresh and folded right to your doorstep.
                  Schedule online in seconds.
                </p>
                <span className="font-bold text-white bg-primary group-hover:bg-accent group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-primary/40 flex items-center justify-center md:justify-start gap-2 group-hover:gap-3 transition-all duration-300 text-[15px] uppercase tracking-wider py-4 px-8 rounded-full shadow-md w-[85%] sm:w-fit mx-auto md:mx-0">
                  Schedule Delivery
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </section>

      {/* 2.75 HOMEPAGE PRICING SUMMARY */}
      <section
        className="py-16 md:py-24 px-6 bg-slate-50/50 border-t border-slate-100"
        id="pricing"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              No hidden fees, no complicated tiers. Just premium quality laundry
              care at honest prices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Self Serve Pricing */}
            <div className="bg-card-gradient rounded-[2rem] p-8 shadow-xl border border-slate-200 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Wind className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-2">
                Self-Serve
              </h3>
              <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-slate-100">
                Clean, high-capacity machines ready for any size load.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700">
                    Washers
                    <span className="text-xs font-normal text-slate-400 block">
                      Various sizes &amp; capacity
                    </span>
                  </span>
                  <span className="font-black text-primary text-xl">
                    $2.25
                    <span className="text-sm text-slate-500 font-medium">
                      {" "}
                      - $8
                    </span>
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700">
                    Dryers
                    <span className="text-xs font-normal text-slate-400 block">
                      3 or 4 min cycles
                    </span>
                  </span>
                  <span className="font-black text-primary text-xl">$0.25</span>
                </li>
              </ul>

              {/* mt-auto keeps every card's button on the same baseline without
                  the old hard-coded mt-[112px] offset */}
              <Link
                href="/services/self-serve"
                className="block w-full py-4 text-center font-bold text-primary bg-muted hover:bg-accent hover:text-white rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-300 mt-auto"
              >
                View Facility
              </Link>
            </div>

            {/* Wash & Fold Pricing */}
            <div className="bg-[#1B2A4E] text-white rounded-[2rem] p-8 shadow-2xl border border-[#2A4073] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden transform lg:-translate-y-4 flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Droplets className="w-7 h-7 text-blue-300" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2 relative z-10">
                Wash &amp; Fold
              </h3>
              <p className="text-blue-100/80 text-sm mb-8 pb-8 border-b border-white/10 relative z-10">
                Expertly cleaned, perfectly folded, and ready for your drawers.
              </p>

              <ul className="space-y-4 mb-8 relative z-10">
                {[
                  { label: "Clothes", sub: "Standard Wash", price: "$1.65/lb" },
                  { label: "Pillows", sub: null, price: "$5 - $9" },
                  {
                    label: "Blankets",
                    sub: "T, D, Q, K, C.K.",
                    price: "$20 - $40",
                  },
                  { label: "Mattress Topper", sub: null, price: "$30 - $50" },
                  { label: "Sleeping Bags", sub: null, price: "$25 - $30" },
                  { label: "Bags", sub: "School & Duffle", price: "$5 - $15" },
                ].map((row) => (
                  <li
                    key={row.label}
                    className="flex justify-between items-center gap-4"
                  >
                    <span className="font-bold text-blue-50">
                      {row.label}
                      {row.sub && (
                        <span className="text-xs font-normal text-blue-200/70 block">
                          {row.sub}
                        </span>
                      )}
                    </span>
                    <span className="font-bold text-white whitespace-nowrap">
                      {row.price}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services/wash-and-fold"
                className="block w-full py-4 text-center font-bold text-foreground bg-white hover:bg-accent hover:text-white rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 active:scale-95 transition-all duration-300 relative z-10 shadow-lg mt-auto"
              >
                See All Pricing
              </Link>
            </div>

            {/* Dry Cleaning Pricing */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-200 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Shirt className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-2">
                Dry Cleaning
              </h3>
              <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">
                Professional care for delicate and formal garments.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  {
                    label: "Men's Shirts",
                    sub: "Wash & Press",
                    price: "$4",
                  },
                  { label: "Blouses", sub: null, price: "$8" },
                  { label: "Pants", sub: null, price: "$9" },
                  { label: "Blazers & Suits", sub: null, price: "$12 - $18" },
                  { label: "Dresses", sub: "Short / Long", price: "$19 - $24" },
                  {
                    label: "Winter Jackets",
                    sub: "Light / Parka",
                    price: "$30 - $55",
                  },
                ].map((row) => (
                  <li
                    key={row.label}
                    className="flex justify-between items-center gap-4"
                  >
                    <span className="font-bold text-slate-700 text-[15px]">
                      {row.label}
                      {row.sub && (
                        <span className="text-xs font-normal text-slate-400 block">
                          {row.sub}
                        </span>
                      )}
                    </span>
                    <span className="font-bold text-slate-800 whitespace-nowrap">
                      {row.price}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services/dry-cleaning"
                className="block w-full py-4 text-center font-bold text-primary bg-muted hover:bg-accent hover:text-white rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-300 mt-auto"
              >
                See All 12 Items
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. BENTO GRID MEDIA GALLERY */}
      <section className="py-16 md:py-20 px-6 bg-secondary" id="gallery">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">
              Inside Washworld
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tap any tile to watch a short tour of our facility and machines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[240px] md:auto-rows-[300px]">
            <div className="col-span-1 row-span-2 rounded-[2.5rem] overflow-hidden relative shadow-xl border border-slate-200">
              <LiteYouTube videoId="STKxtJVh450" title="Facility tour" />
            </div>
            <div className="col-span-1 row-span-2 rounded-[2.5rem] overflow-hidden relative shadow-xl border border-slate-200">
              <LiteYouTube videoId="49O-fVRTqMQ" title="Walkthrough" />
            </div>
            <div className="col-span-1 sm:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden relative shadow-xl border border-slate-200">
              <LiteYouTube videoId="t5evX43MyrA" title="Our washers" />
            </div>
            <div className="col-span-1 sm:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden relative shadow-xl border border-slate-200">
              <LiteYouTube videoId="YQuj_B09Kg0" title="Our dryers" />
            </div>
            <div className="col-span-1 sm:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden relative shadow-xl border border-slate-200">
              <LiteYouTube videoId="WWVlMvxkn2k" title="Inside the shop" />
            </div>
            <div className="col-span-1 sm:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden relative shadow-xl border border-slate-200">
              <LiteYouTube videoId="mLi74tWtvv0" title="Folding area" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-16 md:py-20 px-6 bg-white" id="how-it-works">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Four simple steps to the freshest laundry in town.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Bring Your Loads",
                desc: "Sort your laundry at our clean, spacious folding tables.",
                icon: Droplets,
              },
              {
                title: "Choose Machine",
                desc: "From standard washers to massive comforter extractors.",
                icon: Wind,
              },
              {
                title: "Wash & Relax",
                desc: "Enjoy free Wi-Fi and A/C in our comfortable lounge area.",
                icon: Coffee,
              },
              {
                title: "Fold & Go",
                desc: "Leave with perfectly clean, fresh clothes in record time.",
                icon: CheckCircle2,
              },
            ].map((step, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                key={step.title}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary shadow-sm border border-primary/20 group-hover:-translate-y-1">
                  <step.icon className="w-10 h-10" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. AMENITIES & EXPERIENCE */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]" id="amenities">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-blue-300 font-bold tracking-widest uppercase mb-3 inline-block text-sm">
              Premium Comfort
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              The Washworld <br /> Experience
            </h2>
            <p className="text-lg text-slate-200 mb-10 leading-relaxed">
              We believe doing laundry shouldn&apos;t feel like a chore. Kick
              back in an environment designed entirely around your comfort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Wifi, title: "Free High-Speed Wi-Fi" },
                { icon: Wind, title: "Climate-Controlled (A/C)" },
                { icon: Coffee, title: "Snack & Drink Vending" },
                { icon: Tv, title: "Flat Screen TVs" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-md"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon
                      className="w-6 h-6 text-blue-300"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-[300px] md:min-h-0">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-8 border-slate-800 shadow-xl relative scale-95 md:scale-100 h-full">
              <LiteYouTube
                videoId="O8KfalCTl9w"
                title="The Washworld experience"
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[260px]"
            >
              <div
                className="flex gap-1 text-yellow-500 mb-3"
                role="img"
                aria-label="Rated 5 out of 5 stars"
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="font-bold text-slate-900 text-sm leading-snug">
                &quot;Definitely the best laundromat in the area. Really feels
                like a community.&quot;
              </p>
              <p className="text-slate-500 text-xs font-semibold mt-2">
                sonia silva, Google review
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 6. PHOTO GALLERY */}
      <section
        className="py-16 md:py-20 px-6 bg-white border-b border-slate-100"
        id="photos"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-foreground mb-4">
              Our Facility
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore more pictures of our extremely clean, modern, and spacious
              shop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[250px]">
            {[
              {
                url: "/images/facility/facility-4.jpg",
                alt: "Row of numbered front-load washers with framed artwork on the wall above",
                class: "sm:col-span-2 sm:row-span-2",
              },
              {
                url: "/images/facility/facility-1.jpg",
                alt: "Stainless steel washers beside a wall of framed floral paintings",
                class: "col-span-1 row-span-1",
              },
              {
                url: "/images/facility/facility-2.jpg",
                alt: "Gallery wall of framed prints above the washer bank",
                class: "col-span-1 row-span-1",
              },
              {
                url: "/images/facility/facility-3.jpg",
                alt: "Large capacity washers lined up along the tiled main aisle",
                class: "col-span-1 row-span-1",
              },
              {
                url: "/images/facility/facility-5.jpg",
                alt: "Wall of stacked dryers at Washworld",
                class: "col-span-1 row-span-1",
              },
            ].map((img) => (
              <div
                key={img.url}
                className={`rounded-[2rem] overflow-hidden shadow-md border-[3px] border-white relative group bg-slate-100 ${img.class}`}
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 8. GOOGLE REVIEWS CAROUSEL */}
      <section
        className="py-16 md:py-24 px-6 bg-slate-50 relative overflow-hidden"
        id="reviews"
        aria-labelledby="reviews-heading"
      >
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        <h2 id="reviews-heading" className="sr-only">
          Google reviews
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 items-center xl:items-start"
        >
          {/* Summary Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center justify-center w-full max-w-[320px] sm:min-w-[320px] shrink-0 xl:sticky xl:top-28 z-10 hover:shadow-2xl transition-shadow text-center">
            <p className="text-3xl font-black text-slate-800 mb-2 font-heading">
              EXCELLENT
            </p>
            <div
              className="flex gap-1 text-[#FBBC05] mb-2"
              role="img"
              aria-label={`Rated ${GOOGLE_RATING.score} out of 5 on Google`}
            >
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-8 h-8 fill-current" aria-hidden="true" />
              ))}
              {/* Partial star rendering for the 0.4 remainder */}
              <span className="relative w-8 h-8">
                <Star
                  className="w-8 h-8 text-slate-200 fill-current absolute top-0 left-0"
                  aria-hidden="true"
                />
                <span className="absolute top-0 left-0 overflow-hidden w-[40%]">
                  <Star
                    className="w-8 h-8 text-[#FBBC05] fill-current"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </div>
            <p className="text-slate-500 font-medium mb-6">
              {GOOGLE_RATING.score} stars, based on{" "}
              <span className="font-bold text-slate-800">
                {GOOGLE_RATING.count} reviews
              </span>
            </p>

            <div
              className="flex items-center gap-1 text-4xl font-black tracking-tighter mb-8"
              aria-hidden="true"
            >
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>

            <a
              href={BUSINESS.reviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-trust hover:bg-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 active:scale-95 text-white font-bold py-4 px-6 rounded-full text-sm transition-all duration-300 shadow-md block text-center"
            >
              Read all reviews on Google
            </a>
          </div>

          {/* Carousel Track */}
          <div
            className="w-full relative group max-w-full"
            onMouseEnter={() => setIsCarouselHovered(true)}
            onMouseLeave={() => setIsCarouselHovered(false)}
            onFocus={() => setIsCarouselHovered(true)}
            onBlur={() => setIsCarouselHovered(false)}
          >
            {/* Slide Controls */}
            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              aria-label="Previous reviews"
              className="absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] border border-slate-100 items-center justify-center z-20 text-slate-500 hover:text-primary transition-colors hidden sm:flex"
            >
              <ChevronLeft className="w-8 h-8" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              aria-label="Next reviews"
              className="absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] border border-slate-100 items-center justify-center z-20 text-slate-500 hover:text-primary transition-colors hidden sm:flex"
            >
              <ChevronRight className="w-8 h-8" aria-hidden="true" />
            </button>

            {/* Scrolling Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 -mx-4 scrollbar-hide"
              tabIndex={0}
              role="group"
              aria-label="Customer reviews, scrollable"
            >
              {GOOGLE_REVIEWS.map((rev) => (
                <figure
                  key={rev.name}
                  className="w-[85vw] max-w-[320px] sm:w-[320px] sm:min-w-[320px] bg-white rounded-3xl p-6 sm:p-8 shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-slate-100 snap-center shrink-0 flex flex-col hover:shadow-xl transition-shadow m-0"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4 items-center">
                      <div
                        className={`w-12 h-12 rounded-full ${rev.color} text-white flex items-center justify-center font-bold text-xl`}
                        aria-hidden="true"
                      >
                        {rev.initial}
                      </div>
                      <div>
                        <figcaption className="font-bold text-slate-800 text-sm">
                          {rev.name}
                        </figcaption>
                        <span className="text-slate-500 text-xs font-medium">
                          {rev.time}
                        </span>
                      </div>
                    </div>
                    {/* Google G Logo */}
                    <svg
                      className="w-6 h-6 shrink-0 opacity-80"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label="Google"
                    >
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                  <div
                    className="flex gap-1 text-[#FBBC05] mb-4"
                    role="img"
                    aria-label={`${rev.rating} out of 5 stars`}
                  >
                    {Array.from({ length: rev.rating }).map((_, star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="text-slate-600 text-[15px] leading-relaxed flex-grow font-medium m-0">
                    {rev.text}
                  </blockquote>
                </figure>
              ))}
            </div>

            {/* Autoplay control: required so motion can be stopped (WCAG 2.2.2) */}
            <div className="flex justify-center sm:justify-start px-4">
              <button
                type="button"
                onClick={() => setIsCarouselPlaying((playing) => !playing)}
                aria-pressed={!isCarouselPlaying}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm transition-colors"
              >
                {isCarouselPlaying ? (
                  <>
                    <Pause className="w-4 h-4" aria-hidden="true" />
                    Pause auto-scroll
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" aria-hidden="true" />
                    Resume auto-scroll
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
