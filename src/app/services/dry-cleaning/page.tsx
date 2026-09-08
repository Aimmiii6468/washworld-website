import { ArrowLeft, CheckCircle2, Shirt, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DryCleaningPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Header / Hero */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <Image 
          src="/images/facility/facility-5.jpg" 
          alt="Wall of dryers inside the Washworld shop" 
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
              <Shirt className="w-4 h-4" /> PREMIUM APPAREL CARE
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">Dry Cleaning Services</h1>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Details Column */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-black text-slate-800 mb-6">Expert Garment Care</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">We treat your most prized garments with the utmost respect. From delicate silks to tailored suits, our professional dry cleaning process safely removes stains, revives fabrics, and returns your items perfectly pressed and ready to wear.</p>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-12">Service Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "Advanced stain identification & removal",
                "Eco-friendly solvent options",
                "Gentle on delicate embellishments",
                "Crisp, professional pressing",
                "Quick turnaround times",
                "Moth-proofing available"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Visual Alignment Filler (Balancing the Massive 12-item Pricing Card Height) */}
            <div className="hidden lg:block w-full h-[380px] rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 relative">
              <Image 
                src="/images/facility/facility-4.jpg" 
                alt="Numbered washers along the Washworld main aisle" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
                sizes="(max-width: 1024px) 0vw, 33vw"
              />
            </div>
            
          </div>
          
          {/* Pricing Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 p-8 sticky top-8">
              <h3 className="text-2xl font-black text-slate-800 mb-2">Item Pricing</h3>
              <p className="text-slate-500 text-sm mb-8">Priced individually for precise, expert care.</p>
              
              <div className="space-y-0.5">
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Men&apos;s Shirts - Wash &amp; Press</span>
                  <span className="font-bold text-primary text-lg">$4.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Men&apos;s Shirts - Stain removal</span>
                  <span className="font-bold text-primary text-lg">$7.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Blouses &amp; Women&apos;s Shirts</span>
                  <span className="font-bold text-primary text-lg">$8.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Pants</span>
                  <span className="font-bold text-primary text-lg">$9.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Blazers</span>
                  <span className="font-bold text-primary text-lg">$12.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Suits</span>
                  <span className="font-bold text-primary text-lg">$18.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Dresses - Short</span>
                  <span className="font-bold text-primary text-lg">$19.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Dresses - Long</span>
                  <span className="font-bold text-primary text-lg">$24.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Light Coat</span>
                  <span className="font-bold text-primary text-lg">$30.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Over Coat</span>
                  <span className="font-bold text-primary text-lg">$40.00</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Winter Jacket - Short</span>
                  <span className="font-bold text-primary text-lg">$45.00</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="font-bold text-slate-700 text-[15px]">Winter Jacket - Parka</span>
                  <span className="font-bold text-primary text-lg">$55.00</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* --- NEW SECTION 1: The Process --- */}
        <section className="mt-24 pt-20 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">The Washworld Dry Cleaning Difference</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Every garment entrusted to us goes through a rigorous, multi-point inspection and care process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">1. Inspection</h3>
              <p className="text-slate-500 text-sm">We carefully examine every item for stains, missing buttons, or loose threads before processing begins.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">2. Pre-Treatment</h3>
              <p className="text-slate-500 text-sm">Targeted, fabric-safe stain removal solutions are applied to difficult spots by our spot-treatment specialists.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">3. Gentle Clean</h3>
              <p className="text-slate-500 text-sm">Garments undergo a specialized, eco-friendly dry-cleaning bath that flushes dirt without risking shrinkage.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">4. Hand Press</h3>
              <p className="text-slate-500 text-sm">Items are expertly steamed and hand-pressed to restore their perfect original shape, crisp edges, and drape.</p>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION 2: Items We Clean --- */}
        <section className="mt-24 pt-20 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-10">Care For Every Fabric</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-800 block text-lg mb-1">Business Wear</span>
                <span className="text-slate-500 text-sm">Suits, Ties, Slacks, Blouses</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-800 block text-lg mb-1">Outerwear</span>
                <span className="text-slate-500 text-sm">Winter Coats, Leather, Wool</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-800 block text-lg mb-1">Formal Attire</span>
                <span className="text-slate-500 text-sm">Wedding Dresses, Gowns, Tuxedos</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-800 block text-lg mb-1">Delicates</span>
                <span className="text-slate-500 text-sm">Silk, Cashmere, Rayon, Sweaters</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-800 block text-lg mb-1">Household</span>
                <span className="text-slate-500 text-sm">Drapes, Curtains, Tablecloths</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <span className="font-bold text-slate-800 block text-lg mb-1">Bedding</span>
                <span className="text-slate-500 text-sm">Duvets, Blankets, Sleeping Bags</span>
              </div>
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

      </div>
    </div>
  );
}
