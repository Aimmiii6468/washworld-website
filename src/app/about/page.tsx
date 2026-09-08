"use client";

import { motion } from "framer-motion";
import { History, Heart, ParkingCircle, Wifi, Palette, Wind, ArrowLeft, Gem } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const amenities = [
    {
      icon: ParkingCircle,
      title: "Complimentary Parking",
      desc: "Forget the stress of downtown street parking. We provide plenty of free, dedicated customer-only parking right at 150 Kenwood Ave so you can load and unload with ease."
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      desc: "Stay connected! Whether you need to catch up on emails, stream your favorite show, or finish some homework, our complimentary WiFi has you covered."
    },
    {
      icon: Palette,
      title: "Art & Atmosphere",
      desc: "Why stare at a blank wall? Our facility features a wide selection of paintings and drawings, including water colours, oil paints, acrylics, and lithographs for our customers to enjoy."
    },
    {
      icon: Wind,
      title: "Climate Controlled",
      desc: "Stay cool in the summer and cozy in the winter while our high-capacity machines do the heavy lifting."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUpVariant}
          className="mb-16 text-center"
        >
          <div className="w-20 h-20 bg-blue-100 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-200">
            <History className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">About Washworld Coin Laundry</h1>
          <p className="text-xl font-bold text-primary mb-6">A Toronto Landmark Since 1980s</p>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 text-left relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0"></div>
             <p className="text-lg text-slate-600 leading-relaxed relative z-10">
                For over four decades, Washworld Coin Laundry has been more than just a place to wash clothes—it’s been a cornerstone of the Wychwood-Humewood community. Since we first opened our doors 43 years ago, Toronto has changed a lot, but our mission hasn&apos;t: providing a clean, safe, and truly welcoming space where doing laundry feels less like a chore and more like a part of the neighborhood fabric.
             </p>
          </div>
        </motion.div>

        {/* Community Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
           <div className="order-2 md:order-1">
              <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
                 <Heart className="text-red-500 w-8 h-8" /> The Heart of Wychwood-Humewood
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                 We believe that a laundromat should be a reflection of the community it serves. That’s why we’ve dedicated ourselves to maintaining a space that is bright, friendly, and meticulously cared for.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                 Whether you’ve been a regular since the 80s or you’re a first-time visitor, you’ll find an atmosphere that is as warm as a fresh load of towels.
              </p>
           </div>
           <div className="order-1 md:order-2 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500 relative">
              <div className="rounded-[2rem] w-full h-64 overflow-hidden relative">
                <Image 
                  src="/images/facility/facility-2.jpg" 
                  alt="Washworld Community" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
           </div>
        </motion.section>

        {/* Amenities Grid */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="mb-24"
        >
           <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">A Better Way to Wait</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                 We know your time is valuable, which is why we’ve designed the &quot;Washworld Experience&quot; to be as seamless and enjoyable as possible.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {amenities.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 hover:-translate-y-1 transition-all duration-300 group">
                   <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="w-7 h-7" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                   <p className="text-slate-500 leading-relaxed">
                      {item.desc}
                   </p>
                </div>
              ))}
           </div>
        </motion.section>

        {/* Excellence Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="bg-primary text-white rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl mb-16"
        >
           <div className="absolute top-0 left-0 w-full h-full bg-hero-gradient opacity-10 mix-blend-overlay"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
              <Gem className="w-12 h-12 mx-auto mb-6 text-slate-900 animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Forty+ Years of Excellence</h2>
              <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed font-medium">
                 Forty-three years in business has taught us exactly what our customers need: reliability, cleanliness, and comfort. We pair our decades of experience with modern, well-maintained equipment to ensure you get the best wash every single time.
              </p>
              <p className="text-xl font-black text-slate-900 mb-4 tracking-wide uppercase italic">
                 Come see why the residents of Central Toronto have trusted us with their laundry for generations.
              </p>
              <p className="text-lg font-bold text-blue-100 italic font-heading">
                 We look forward to welcoming you!
              </p>
           </div>
        </motion.section>

        {/* Return Button */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 font-bold bg-primary text-white hover:bg-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 active:scale-95 transition-all duration-300 px-8 py-3.5 rounded-full shadow-md">
            <ArrowLeft className="w-5 h-5" /> Return to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
