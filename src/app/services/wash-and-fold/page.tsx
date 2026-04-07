import { ArrowLeft, CheckCircle2, Droplets, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WashFoldPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Header / Hero */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <Image 
          src="/images/services/blue-machines-hero.jpg" 
          alt="Wash, Dry & Fold Service Facility" 
          fill 
          className="object-cover opacity-40 mix-blend-overlay" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 h-full flex flex-col justify-between pt-8 pb-16">
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white hover:bg-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 active:scale-95 transition-all duration-300 w-fit px-6 py-2.5 rounded-full font-bold shadow-md">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          
          <div className="mt-auto">
            <span className="bg-primary/20 text-blue-300 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-flex items-center gap-2 shadow-lg backdrop-blur-sm">
              <Droplets className="w-4 h-4" /> HANDS-FREE SERVICE
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">Drop-off Wash, Dry, & Fold</h1>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Details Column */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-black text-slate-800 mb-6">Let Us Handle Laundry Day</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">We believe your free time should be spent doing what you love, not folding socks. Simply drop off your laundry basket at our counter, and our expert staff will sort, wash, thoroughly dry, and perfectly fold every single item for you.</p>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-12">Service Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Professional sorting & stain treatment",
                "Premium, hypoallergenic detergents used",
                "Precise folding and packaging",
                "Next-day turnaround available",
                "Socks paired perfectly",
                "Comforters and heavy items accepted"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Visual Alignment Filler (Balancing the Pricing Card Height) */}
            <div className="hidden lg:block w-full h-[280px] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 relative">
              <Image 
                src="/images/facility/facility-1.jpg" 
                alt="Premium Wash & Fold Machines" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
                sizes="(max-width: 1024px) 0vw, 33vw"
              />
            </div>
            
          </div>
          
          {/* Pricing Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 p-8 sticky top-8">
              <h3 className="text-2xl font-black text-slate-800 mb-2">Service Pricing</h3>
              <p className="text-slate-500 text-sm mb-8">Priced by weight for ultimate fairness.</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <span className="font-bold text-slate-700">Clothes (Standard Wash)</span>
                  <span className="font-bold text-primary text-xl">$1.65<span className="text-sm text-slate-400 font-medium">/lb</span></span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="font-bold text-slate-700">Pillows</span>
                  <span className="font-bold text-primary text-lg">$5.00 - $9.00</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-700">Blankets</span>
                    <span className="text-sm text-slate-400 font-medium mt-1">T, D, Q, K, C.K.</span>
                  </div>
                  <span className="font-bold text-primary text-lg">$20.00 - $40.00</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-700">Mattress Topper</span>
                    <span className="text-sm text-slate-400 font-medium mt-1">T, D, Q, K, C.K.</span>
                  </div>
                  <span className="font-bold text-primary text-lg">$30.00 - $50.00</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="font-bold text-slate-700">Sleeping Bags</span>
                  <span className="font-bold text-primary text-lg">$25.00 - $30.00</span>
                </div>
                <div className="flex items-center justify-between pt-2 pb-2">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-700">Bags</span>
                    <span className="text-sm text-slate-400 font-medium mt-1">School & Duffle</span>
                  </div>
                  <span className="font-bold text-primary text-lg">$5.00 - $15.00</span>
                </div>
              </div>
              
              <div className="mt-8 bg-blue-50/50 p-4 rounded-xl text-sm text-slate-700 font-bold text-center border border-blue-100 leading-relaxed shadow-sm">
                Drop off directly at the counter, no appointment needed!
              </div>
            </div>
          </div>
          
        </div>

        {/* --- NEW SECTION 1: How It Works --- */}
        <section className="mt-24 pt-20 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">How Drop-Off Works</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Three incredibly simple steps to checking laundry off your to-do list forever.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[45px] left-[20%] right-[20%] h-0.5 bg-slate-200 z-0"></div>
            
            <div className="relative z-10 bg-slate-50 text-center px-4">
              <div className="w-16 h-16 bg-white border-4 border-slate-50 text-primary font-black text-xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-blue-500/10">1</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Drop It Off</h3>
              <p className="text-slate-500">Bring us your dirty laundry in any bag or basket. Hand it directly to our attendant at the front counter—no appointment needed.</p>
            </div>
            <div className="relative z-10 bg-slate-50 text-center px-4">
              <div className="w-16 h-16 bg-white border-4 border-slate-50 text-primary font-black text-xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-blue-500/10">2</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">We Wash & Fold</h3>
              <p className="text-slate-500">Our experts sort your clothes by color, wash them using premium detergents, dry them thoroughly, and fold them with absolute precision.</p>
            </div>
            <div className="relative z-10 bg-slate-50 text-center px-4">
              <div className="w-16 h-16 bg-white border-4 border-slate-50 text-primary font-black text-xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-blue-500/10">3</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Pick It Up Fresh</h3>
              <p className="text-slate-500">We'll text you the moment your clothes are ready. Pick them up perfectly stacked, wrapped, and ready to go right into your drawers.</p>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION 2: Premium Detergents --- */}
        <section className="mt-24 pt-20 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-6">Premium Soaps & Softeners</h2>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">We never cut corners on quality. Your clothes are washed using the industry's highest-rated commercial detergents, ensuring maximum stain removal while protecting the life of your fabrics. Hypoallergenic options are always in stock!</p>
            <div className="flex flex-wrap justify-center gap-4">
               <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 shadow-sm">Tide Professional</span>
               <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 shadow-sm">OxiClean</span>
               <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 shadow-sm">Downy Fabric Softener</span>
               <span className="px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 shadow-sm">Bounce Dryer Sheets</span>
               <span className="px-6 py-3 bg-white border border-primary/30 text-primary rounded-full font-bold shadow-sm">Free & Clear Options</span>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION: Policies --- */}
        <section className="mt-24 pt-20 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-50 rounded-[2rem] p-8 border border-red-100 shadow-sm">
              <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3 border-b border-red-200/60 pb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><ShieldAlert className="w-5 h-5 text-red-500" /></div> 
                Liability & Claims Policies
              </h2>
              <div className="space-y-5 text-slate-700 text-sm leading-relaxed">
                <p><strong>1. Limitation of Liability:</strong> In the event of proven loss or damage to garments caused by equipment failure, our liability is limited to a maximum of <strong>$25.00 per item</strong>, and a total maximum of <strong>$45.00 per customer/order</strong>.</p>
                <p><strong>2. Use at Your Own Risk:</strong> We are not responsible for damage caused by incorrect heat settings, cycle choices, or pre-existing garment conditions.</p>
                <p><strong>3. Machine Malfunction:</strong> If a machine malfunctions, notify staff immediately. Do not attempt to fix the machine yourself.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
