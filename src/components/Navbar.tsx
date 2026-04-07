"use client";

import Image from "next/image";
import { MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/logo.png" 
            alt="Washworld Coin Laundry Logo" 
            width={240}
            height={82}
            quality={50} // Lower quality specifically for dev/perf balancing since original is 1MB
            className="h-[82px] w-auto object-contain"
            priority
            loading="eager"
            sizes="(max-width: 768px) 180px, 240px"
          />
          {/* Fallback Text in case logo disappears */}
          <div className="hidden flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">W</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-800">
              Washworld
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">Home</Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors flex items-center gap-1 py-6 focus:outline-none">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-[80%] left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2 pointer-events-none group-hover:pointer-events-auto">
              <Link href="/services/self-serve" className="px-4 py-2 hover:bg-slate-50 text-sm font-bold text-slate-800 rounded-lg">Self-serve Wash and Dry</Link>
              <Link href="/services/wash-and-fold" className="px-4 py-2 hover:bg-slate-50 text-sm font-bold text-slate-800 rounded-lg">Drop-off Wash, Dry, & Fold</Link>
              <Link href="/services/dry-cleaning" className="px-4 py-2 hover:bg-slate-50 text-sm font-bold text-slate-800 rounded-lg">Dry Cleaning Services</Link>
            </div>
          </div>

          <Link href="/policies" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">Store Policies</Link>
          <Link href="/faq" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">FAQ</Link>
          <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors">Contact</Link>
          
          <a href="https://maps.app.goo.gl/wVfdXe871tYHFVLF6" target="_blank" rel="noreferrer" className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-sm ml-2">
            <MapPin className="w-4 h-4" />
            Get Directions
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-border absolute w-full px-6 py-4 flex flex-col gap-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800 py-2 border-b border-gray-100">Home</Link>
          
          <div className="py-2 border-b border-gray-100">
             <span className="text-sm font-black text-slate-400 uppercase tracking-wider mb-2 block">Services</span>
             <div className="flex flex-col gap-3 pl-4">
                <Link href="/services/self-serve" onClick={() => setIsOpen(false)} className="text-[17px] font-bold text-slate-700">Self-serve Wash and Dry</Link>
                <Link href="/services/wash-and-fold" onClick={() => setIsOpen(false)} className="text-[17px] font-bold text-slate-700">Drop-off Wash, Dry, & Fold</Link>
                <Link href="/services/dry-cleaning" onClick={() => setIsOpen(false)} className="text-[17px] font-bold text-slate-700">Dry Cleaning Services</Link>
             </div>
          </div>
          
          <Link href="/policies" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800 py-2 border-b border-gray-100">Store Policies</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800 py-2 border-b border-gray-100">FAQ</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800 py-2 border-b border-gray-100">About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-semibold text-slate-800 py-2 border-b border-gray-100">Contact</Link>
          <a href="https://maps.app.goo.gl/wVfdXe871tYHFVLF6" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center mt-2 flex justify-center items-center gap-2 shadow-md hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 active:scale-95 transition-all duration-300">
            <MapPin className="w-5 h-5" />
            Get Directions
          </a>
        </div>
      )}
    </nav>
  );
}
