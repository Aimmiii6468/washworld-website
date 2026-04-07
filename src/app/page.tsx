"use client";

import Image from "next/image";
import LiteYouTube from "@/components/LiteYouTube";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Star, CreditCard, Smartphone, Coins,
  Wind, Wifi, Tv, Coffee, Droplets, ArrowRight, PlayCircle, ChevronDown, Truck, ChevronLeft, ChevronRight, Shirt
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scrolling logic for the review carousel
  useEffect(() => {
    const handleAutoScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached the extreme edge, snap smoothly back to zero to loop infinitely
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Card min-w-[320px] + gap-6 (24px) = 344px scroll jump
          scrollRef.current.scrollBy({ left: 344, behavior: "smooth" });
        }
      }
    };
    const interval = setInterval(handleAutoScroll, 3500);
    return () => clearInterval(interval);
  }, []);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -344 : 344;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };



  // Animation config for scroll-triggered reveals
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center py-20">
        <div className="absolute inset-0 bg-slate-900 w-full h-full overflow-hidden pointer-events-none">
          {/* YouTube Video Background (Optimized: Mount after hydration) */}
          {isMounted && (
            <iframe
              src="https://www.youtube.com/embed/ujmm4WjSL9s?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=ujmm4WjSL9s"
              className="absolute top-1/2 left-1/2 w-[300vw] md:w-[150vw] xl:w-[120vw] h-[300vh] md:h-[150vh] xl:h-[120vh] -translate-x-1/2 -translate-y-1/2 border-none opacity-30 pointer-events-none origin-center"
              allow="autoplay; encrypted-media"
              title="Washworld Background Video"
            ></iframe>
          )}
          {/* Custom HSL gradient hero overlay mapping */}
          <div className="absolute inset-0 bg-hero-gradient opacity-85 mix-blend-multiply flex z-0"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
            <span className="bg-primary text-white border border-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow-lg">
              Toronto&apos;s Cleanest Laundromat
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-xl">
              A Premium Laundry <br className="hidden md:block" /> Experience.
            </h1>
            <p className="text-lg md:text-2xl text-slate-100 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
              Brand new machines, free high-speed Wi-Fi, and a spotless climate-controlled environment.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
              <a href="https://maps.google.com" className="w-full md:w-auto bg-primary text-white transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/50 active:scale-95 text-base font-bold px-8 py-3.5 rounded-full shadow-lg flex items-center justify-center gap-2 group border border-blue-400/20">
                Get Directions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#amenities" className="w-full md:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 active:scale-95 text-base font-bold px-8 py-3.5 rounded-full shadow-lg flex items-center justify-center gap-2">
                View Amenities
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROMOTIONS BANNER */}
      <section className="bg-primary py-8 px-6 relative z-20 shadow-lg border-t border-blue-400/30">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0 border border-white/30 shadow-inner">
              <Truck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-white font-extrabold text-2xl md:text-3xl mb-1 drop-shadow-sm">Too busy? Use our Delivery.</h3>
              <p className="text-blue-100 font-medium text-lg">We own Curbside Laundry! Get a promo code for your first online pickup order.</p>
            </div>
          </div>
          <a
            href="https://www.curbsidelaundry.ca" target="_blank" rel="noreferrer"
            className="bg-white text-primary font-bold text-lg px-8 py-3.5 rounded-full hover:text-white hover:shadow-2xl hover:shadow-primary/40 hover:bg-accent hover:border-accent hover:-translate-y-1 active:scale-95 transition-all duration-300 w-full md:w-auto shadow-md border border-white text-center"
          >
            Place Laundry Order
          </a>
        </motion.div>
      </section>

      {/* 2.5 CORE SERVICES OVERVIEW */}
      <section className="py-16 md:py-24 px-6 bg-white" id="services">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From self-serve to full-service, we have a laundry solution perfectly suited to fit your busy lifestyle.</p>
          </div>

          {/* TOP ROW: 3 Core Facilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 mb-8 max-w-7xl mx-auto">
            {[
              {
                title: "Self-serve Wash and Dry",
                desc: "Enjoy a quick, convenient laundry experience at our clean facility, complete with new machines and free Wi-Fi.",
                img: "/images/services/service-1.jpg",
                link: "/services/self-serve"
              },
              {
                title: "Drop-off Wash, Dry, and Fold",
                desc: "Effortless laundry care! Simply drop off your clothes, and we'll expertly wash, dry, and fold them for you.",
                img: "/images/services/service-2.jpg",
                link: "/services/wash-and-fold"
              },
              {
                title: "Dry Cleaning",
                desc: "Professional care for your delicate garments and suits. Fast, reliable, and perfectly pressed.",
                img: "/images/services/service-3.jpg",
                link: "/services/dry-cleaning"
              }
            ].map((srv, i) => (
              <a href={srv.link} key={i} target={srv.link.startsWith('http') ? "_blank" : "_self"} className="bg-card-gradient rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
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
                  <h3 className="text-xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-primary transition-colors">{srv.title}</h3>
                  <p className="text-slate-500 mb-6 flex-grow leading-relaxed font-medium text-[15px]">{srv.desc}</p>
                  <div className="mt-auto font-bold text-primary flex items-center justify-center gap-1 group-hover:gap-2 transition-all text-sm uppercase tracking-wider">
                    See details <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* BOTTOM ROW: Pickup & Delivery Full-Width Feature */}
          <a href="https://www.curbsidelaundry.ca" target="_blank" rel="noreferrer" className="block w-full max-w-7xl mx-auto bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row items-stretch p-4 gap-6 md:gap-10">
              {/* Image Side */}
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[350px] rounded-[1.5rem] overflow-hidden relative shadow-sm shrink-0">
                <Image 
                  src="/images/services/pickup-site.png" 
                  alt="Curbside Laundry Booking Site" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 py-6 px-4 md:py-12 md:pr-12 xl:pr-16 flex flex-col justify-center text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 w-fit mx-auto md:mx-0">
                  <Truck className="w-4 h-4" /> CURBSIDE LAUNDRY
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-primary transition-colors">Pickup & Dropoff Wash, Dry, & Fold</h3>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium text-lg">Say goodbye to laundry day! We'll pick up, clean, and deliver your laundry, fresh and folded right to your doorstep. Schedule online in seconds.</p>
                <div className="font-bold text-white bg-primary hover:bg-accent hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 active:scale-95 flex items-center justify-center md:justify-start gap-2 group-hover:gap-3 transition-all duration-300 text-[15px] uppercase tracking-wider py-4 px-8 rounded-full shadow-md w-[85%] sm:w-fit mx-auto md:mx-0">
                  Schedule Delivery <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </section>

      {/* 2.75 HOMEPAGE PRICING SUMMARY */}
      <section className="py-16 md:py-24 px-6 bg-slate-50/50 border-t border-slate-100" id="pricing">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">No hidden fees, no complicated tiers. Just premium quality laundry care at honest prices.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Self Serve Pricing */}
            <div className="bg-card-gradient rounded-[2rem] p-8 shadow-xl border border-slate-200 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Wind className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-2">Self-Serve</h3>
              <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-slate-100">Clean, high-capacity machines ready for any size load.</p>

              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700">Washers <span className="text-xs font-normal text-slate-400 block">Various sizes & capacity</span></span>
                  <span className="font-black text-primary text-xl">$2.25<span className="text-sm text-slate-500 font-medium"> - $8</span></span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700">Dryers <span className="text-xs font-normal text-slate-400 block">3 or 4 min cycles</span></span>
                  <span className="font-black text-primary text-xl">$0.25</span>
                </li>
              </ul>
              <a href="/services/self-serve" className="block w-full py-4 text-center font-bold text-primary bg-muted hover:bg-accent hover:text-white rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-300 mt-[112px]">View Facility</a>
            </div>

            {/* Wash & Fold Pricing */}
            <div className="bg-[#1B2A4E] text-white rounded-[2rem] p-8 shadow-2xl border border-[#2A4073] hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden transform lg:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="w-14 h-14 bg-white/10 text-primary rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Droplets className="w-7 h-7 text-blue-300" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2 relative z-10">Wash & Fold</h3>
              <p className="text-blue-100/70 text-sm mb-8 pb-8 border-b border-white/10 relative z-10">Expertly cleaned, perfectly folded, and ready for your drawers.</p>

              <ul className="space-y-4 mb-8 relative z-10">
                <li className="flex justify-between items-center">
                  <span className="font-bold text-blue-50">Clothes <span className="text-xs font-normal text-blue-200/50 block">Standard Wash</span></span>
                  <span className="font-black text-white text-xl">$1.65<span className="text-sm font-medium text-blue-200/50">/lb</span></span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-blue-50">Pillows</span>
                  <span className="font-bold text-white">$5 - $9</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-blue-50">Blankets <span className="text-xs font-normal text-blue-200/50 block">T, D, Q, K, C.K.</span></span>
                  <span className="font-bold text-white">$20 - $40</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-blue-50">Mattress Topper</span>
                  <span className="font-bold text-white">$30 - $50</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-blue-50">Sleeping Bags</span>
                  <span className="font-bold text-white">$25 - $30</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-blue-50">Bags <span className="text-xs font-normal text-blue-200/50 block">School & Duffle</span></span>
                  <span className="font-bold text-white">$5 - $15</span>
                </li>
              </ul>
              <a href="/services/wash-and-fold" className="block w-full py-4 text-center font-bold text-foreground bg-white hover:bg-accent hover:text-white rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40 active:scale-95 transition-all duration-300 relative z-10 shadow-lg">See All Pricing</a>
            </div>

            {/* Dry Cleaning Pricing */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-200 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Shirt className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-2">Dry Cleaning</h3>
              <p className="text-slate-500 text-sm mb-6 pb-6 border-b border-slate-100">Professional care for delicate and formal garments.</p>

              <ul className="space-y-3 mb-6">
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-[15px]">Men's Shirts <span className="text-xs font-normal text-slate-400 block">Wash & Press</span></span>
                  <span className="font-bold text-slate-800">$4</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-[15px]">Blouses</span>
                  <span className="font-bold text-slate-800">$8</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-[15px]">Pants</span>
                  <span className="font-bold text-slate-800">$9</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-[15px]">Blazers & Suits</span>
                  <span className="font-bold text-slate-800">$12 - $18</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-[15px]">Dresses <span className="text-xs font-normal text-slate-400 block">Short / Long</span></span>
                  <span className="font-bold text-slate-800">$19 - $24</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-bold text-slate-700 text-[15px]">Winter Jackets <span className="text-xs font-normal text-slate-400 block">Light / Parka</span></span>
                  <span className="font-bold text-slate-800">$30 - $55</span>
                </li>
              </ul>
              <a href="/services/dry-cleaning" className="block w-full py-4 text-center font-bold text-primary bg-muted hover:bg-accent hover:text-white rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 active:scale-95 transition-all duration-300 mt-auto">See All 12 Items</a>
            </div>

          </div>
        </motion.div>
      </section>

      {/* 3. BENTO GRID MEDIA GALLERY */}
      <section className="py-16 md:py-20 px-6 bg-secondary" id="gallery">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-foreground mb-4">Inside Washworld</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Watch our seamless facility tours and explore our state-of-the-art machines.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[240px] md:auto-rows-[300px]">

            {/* 1: Vertical Slot (Left) */}
            <div className="col-span-1 row-span-2 rounded-[2.5rem] overflow-hidden relative group shadow-xl border border-slate-200">
               <LiteYouTube videoId="zwZer3kgVhI" title="Facility Tour 1" />
            </div>

            {/* 2: Vertical Slot (Center-Left) */}
            <div className="col-span-1 row-span-2 rounded-[2.5rem] overflow-hidden relative group shadow-xl border border-slate-200">
               <LiteYouTube videoId="49O-fVRTqMQ" title="Facility Tour 2" />
            </div>

            {/* 3: Horizontal Slot (Top-Right) */}
            <div className="col-span-1 sm:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-xl border border-slate-200">
               <LiteYouTube videoId="t5evX43MyrA" title="Machine View 1" />
            </div>

            {/* 4: Horizontal Slot (Mid-Right) */}
            <div className="col-span-1 sm:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-xl border border-slate-200">
               <LiteYouTube videoId="YQuj_B09Kg0" title="Machine View 2" />
            </div>

            {/* 5: Horizontal Slot (Bottom-Left Wide) */}
            <div className="col-span-1 sm:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-xl border border-slate-200">
               <LiteYouTube videoId="WWVlMvxkn2k" title="Wide View 1" />
            </div>

            {/* 6: Horizontal Slot (Bottom-Right Wide) */}
            <div className="col-span-1 sm:col-span-2 row-span-1 rounded-[2.5rem] overflow-hidden relative group shadow-xl border border-slate-200">
               <LiteYouTube videoId="mLi74tWtvv0" title="Wide View 2" />
            </div>

          </div>
        </motion.div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-16 md:py-20 px-6 bg-white" id="how-it-works">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Four simple steps to the freshest laundry in town.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Bring Your Loads", desc: "Sort your laundry at our clean, spacious folding tables.", icon: Droplets },
              { title: "Choose Machine", desc: "From standard washers to massive comforter extractors.", icon: Wind },
              { title: "Wash & Relax", desc: "Enjoy free Wi-Fi and A/C in our comfortable lounge area.", icon: Coffee },
              { title: "Fold & Go", desc: "Leave with perfectly clean, fresh clothes in record time.", icon: CheckCircle2 }
            ].map((step, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                key={i}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary shadow-sm border border-primary/20 group-hover:-translate-y-1">
                  <step.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 5. AMENITIES & EXPERIENCE */}
      <section className="py-16 md:py-24 px-6 bg-[#0F172A]" id="amenities">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-primary font-bold tracking-widest uppercase mb-3 inline-block text-sm">Premium Comfort</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">The Washworld <br /> Experience</h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">We believe doing laundry shouldn&apos;t feel like a chore. Kick back in an environment designed entirely around your comfort.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Wifi, title: "Free High-Speed Wi-Fi" },
                { icon: Wind, title: "Climate-Controlled (A/C)" },
                { icon: Coffee, title: "Snack & Drink Vending" },
                { icon: Tv, title: "Flat Screen TVs" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-md">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-[300px] md:min-h-0">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-8 border-slate-800 shadow-xl relative scale-95 md:scale-100 h-full">
               <LiteYouTube videoId="O8KfalCTl9w" title="Washworld Experience Video" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[260px]"
            >
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="font-bold text-slate-900 text-sm leading-snug">&quot;Cleanest laundromat in the city. The A/C is amazing in summer!&quot;</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 6. PHOTO GALLERY */}
      <section className="py-16 md:py-20 px-6 bg-white border-b border-slate-100" id="photos">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-foreground mb-4">Our Facility</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore more pictures of our extremely clean, modern, and spacious shop.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[250px]">
            {[
              { url: "/images/facility/facility-4.jpg", class: "sm:col-span-2 sm:row-span-2" },
              { url: "/images/facility/facility-1.jpg", class: "col-span-1 row-span-1" },
              { url: "/images/facility/facility-2.jpg", class: "col-span-1 row-span-1" },
              { url: "/images/facility/facility-3.jpg", class: "col-span-1 row-span-1" },
              { url: "/images/facility/facility-5.jpg", class: "col-span-1 row-span-1" },
            ].map((img, i) => (
              <div key={i} className={`rounded-[2rem] overflow-hidden shadow-md border-[3px] border-white relative group bg-slate-100 ${img.class}`}>
                <Image 
                  src={img.url} 
                  alt={`Washworld Facility ${i + 1}`} 
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
      <section className="py-16 md:py-24 px-6 bg-slate-50 relative overflow-hidden" id="reviews">
        <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
          className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 items-center xl:items-start"
        >
          {/* Summary Card */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center justify-center w-full max-w-[320px] sm:min-w-[320px] shrink-0 xl:sticky xl:top-24 z-10 hover:shadow-2xl transition-shadow text-center">
            <h3 className="text-3xl font-black text-slate-800 mb-2">EXCELLENT</h3>
            <div className="flex gap-1 text-[#FBBC05] mb-2">
              {[1, 2, 3, 4].map(i => <Star key={i} className="w-8 h-8 fill-current" />)}
              {/* 4.4 Star Rendering */}
              <div className="relative w-8 h-8">
                <Star className="w-8 h-8 text-slate-200 fill-current absolute top-0 left-0" />
                <div className="absolute top-0 left-0 overflow-hidden w-[40%]">
                  <Star className="w-8 h-8 text-[#FBBC05] fill-current" />
                </div>
              </div>
            </div>
            <p className="text-slate-500 font-medium mb-6">Based on <span className="font-bold text-slate-800">124 reviews</span></p>

            <div className="flex items-center gap-1 text-4xl font-black tracking-tighter mb-8">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>

            <a href="https://maps.app.goo.gl/wVfdXe871tYHFVLF6" target="_blank" rel="noreferrer" className="w-full bg-trust hover:bg-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 active:scale-95 text-white font-bold py-4 px-6 rounded-full text-sm transition-all duration-300 shadow-md block text-center">
              Write a Review
            </a>
          </div>

          {/* Carousel Track */}
          <div className="w-full relative group max-w-full overflow-hidden">
            {/* Slide Controls */}
            <button onClick={() => scrollCarousel("left")} className="absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center z-20 text-slate-400 hover:text-primary transition-colors hidden sm:flex">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button onClick={() => scrollCarousel("right")} className="absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center z-20 text-slate-400 hover:text-primary transition-colors hidden sm:flex">
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Scrolling Container */}
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 -mx-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                {
                  name: "Sonia Silva", time: "2 months ago", initial: "S", color: "bg-green-600",
                  text: "Very clean, great variety of washing machines and always friendly service. Definitely recommending to others."
                },
                {
                  name: "Karizma DLane", time: "4 months ago", initial: "K", color: "bg-pink-600",
                  text: "My favorite clean place to do my dirties!! Helpful, polite and on top of keeping a clean facility!!! thank you to the staff!"
                },
                {
                  name: "emma bossaert", time: "4 months ago", initial: "e", color: "bg-blue-600",
                  text: "this place is great! amazing service the owner is great! will definitely be using them again. right when i walked in he helped us..."
                },
                {
                  name: "Rachelle Portillo", time: "4 months ago", initial: "R", color: "bg-indigo-600",
                  text: "This is so clean and functional. My clothes are clean and it took hardly any time at all. The attendant is so helpful..."
                },
                {
                  name: "Michael T.", time: "1 month ago", initial: "M", color: "bg-yellow-500",
                  text: "The new large extractors save me so much time. I bring my huge comforters here regularly. A+ facility."
                },
              ].map((rev, i) => (
                <div key={i} className="w-[85vw] max-w-[320px] sm:w-[320px] sm:min-w-[320px] bg-white rounded-3xl p-6 sm:p-8 shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-slate-100 snap-center shrink-0 flex flex-col hover:shadow-xl transition-shadow cursor-default group/card">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4 items-center">
                      <div className={`w-12 h-12 rounded-full ${rev.color} text-white flex items-center justify-center font-bold text-xl`}>{rev.initial}</div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{rev.name}</h4>
                        <span className="text-slate-400 text-xs font-medium">{rev.time}</span>
                      </div>
                    </div>
                    {/* Google G Logo SVG */}
                    <svg className="w-6 h-6 shrink-0 opacity-80 group-hover/card:opacity-100 transition-opacity" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div className="flex gap-1 text-[#FBBC05] mb-4">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed flex-grow font-medium"><span className="text-xl text-slate-300 mr-1 leading-none">"</span>{rev.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>



    </div>
  );
}
