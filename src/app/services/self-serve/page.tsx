import { ArrowLeft, CheckCircle2, Wind, CreditCard, Coffee, Wifi, Tv, ShieldCheck, ChevronDown, Clock, ParkingCircle, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SelfServePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Header / Hero */}
      <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <Image 
          src="/images/services/machines-row-hero.jpg" 
          alt="Self Serve Wash and Dry Facility" 
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
              <Wind className="w-4 h-4" /> FACILITY ACCESS
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-xl">Self-serve Wash and Dry</h1>
          </div>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Details Column */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl font-black text-slate-800 mb-6">Experience the Best Equipment in Town</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">Washworld features an entire fleet of brand new, high-efficiency, giant-capacity washers and dryers. Whether you are doing your weekly laundry or washing massive king-sized comforters, our state-of-the-art facility has exactly what you need.</p>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-6 mt-12">Service Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "New, High-Extraction Washers",
                "Hot, High-CFM Gas Dryers",
                "Massive 80lb machines available",
                "Ultra-clean, A/C cooled facility",
                "Card, tap, and coin accepted",
                "Free Gigabit Wi-Fi & Lounge seating"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Pricing Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 p-8 sticky top-8">
              <h3 className="text-2xl font-black text-slate-800 mb-2">Estimated Pricing</h3>
              <p className="text-slate-500 text-sm mb-8">Prices vary slightly by machine size and cycle selection.</p>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-700">Washers</span>
                    <span className="text-xs text-slate-400 font-medium">Various sizes & capacity</span>
                  </div>
                  <span className="font-bold text-primary text-xl">$2.25 - $8.00</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-700">Dryers</span>
                    <span className="text-xs text-slate-400 font-medium">Per 3 or 4 minutes</span>
                  </div>
                  <span className="font-bold text-primary text-xl">$0.25</span>
                </div>
              </div>
              
              <div className="mt-8 bg-slate-50 p-4 rounded-xl text-sm text-slate-500 italic text-center leading-relaxed">
                Prices vary by exact machine size and cycle selection. Please check the machine display.
              </div>
            </div>
          </div>
          
        </div>

        {/* --- NEW SECTION 1: Why Choose Us --- */}
        <section className="mt-24 pt-20 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">Why Washworld Self-Serve?</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">We've thought of everything to make your laundry day as comfortable and efficient as possible.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Wind className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Giant Machines</h3>
              <p className="text-slate-500">Wash up to 8 loads at once in our massive 80lb extractors. Perfect for huge families or giant comforters.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Flexible Payments</h3>
              <p className="text-slate-500">No quarters? No problem! All of our machines accept credit cards, mobile tap-to-pay, and traditional coins.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Premium Lounge</h3>
              <p className="text-slate-500">Enjoy ice-cold A/C, free high-speed Wi-Fi, fully stocked vending machines, and comfortable seating while you wait.</p>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION 2: Lounge Amenities --- */}
        <section className="mt-24 pt-20 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-800 mb-10">While You Wait</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <Wifi className="w-8 h-8 text-primary mb-3" />
                <span className="font-bold text-slate-700">Free Wi-Fi</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <Coffee className="w-8 h-8 text-primary mb-3" />
                <span className="font-bold text-slate-700">Vending</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <Tv className="w-8 h-8 text-primary mb-3" />
                <span className="font-bold text-slate-700">Live TV</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <Wind className="w-8 h-8 text-primary mb-3" />
                <span className="font-bold text-slate-700">A/C Cooled</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW SECTION 3: Store Policies --- */}
        <section className="mt-24 pt-20 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 flex flex-col items-center">
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">Know Before You Wash</span>
              <h2 className="text-3xl font-black text-slate-800">Self-Serve Facility Rules</h2>
            </div>
            
            <div className="space-y-4">
              <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-800 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary" /> Hygiene & Machine Use
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm space-y-4 pt-2 border-t border-slate-50 bg-slate-50/50">
                  <p><strong>1. Pre-Use Inspection:</strong> Customers are responsible for inspecting the inside of washers and dryers before use. We are not liable for damage to your laundry caused by items (pens, crayons, bleach, etc.) left behind by a previous user.</p>
                  <p><strong>2. Biohazards & Infestations:</strong> For the health and safety of all patrons, items contaminated with feces, bodily fluids, or bed bugs (and similar infestations) are strictly prohibited.</p>
                  <p><strong>3. No Pets Allowed:</strong> Pets are not permitted inside the facility. Service animals specifically trained to aid individuals with disabilities are the only exception.</p>
                  <p><strong>4. Pet Hair Policy:</strong> Please shake off and remove excessive animal hair from items before washing. This prevents drainage clogs and protects other customers' laundry.</p>
                  <p><strong>5. Dryer Use:</strong> Our dryers are reserved exclusively for customers who have washed their laundry on-site at Washworld. Management and staff reserve the right to check items to verify they were washed here.</p>
                  <p><strong>6. Machine Loading:</strong> Do not overload machines. Overloading prevents proper cleaning and can cause mechanical failure.</p>
                  <p><strong>7. Chemicals & Dyeing:</strong> Use detergent and bleach responsibly. Dyeing or tinting clothes in our machines is strictly prohibited.</p>
                </div>
              </details>

              <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-800 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" /> Hours & Conduct
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm space-y-4 pt-2 border-t border-slate-50 bg-slate-50/50">
                  <p><strong>1. Last Wash & Closing:</strong> The Last Wash is at 9:00 PM. All machines must be empty and customers must exit the premises by 10:00 PM.</p>
                  <p><strong>2. Professional Conduct:</strong> We maintain a respectful environment. Disruptive, rude, or discriminatory behavior toward staff or other patrons will result in a permanent ban.</p>
                  <p><strong>3. Supervision:</strong> Children must be supervised at all times. Do not allow children to play on or inside the machines.</p>
                  <p><strong>4. Environment:</strong> Washworld is a 100% smoke-free and vape-free facility. We provide a designated smoking area approximately 25 feet away from the main entrance with seating and a smoker&apos;s receptacle. Please dispose of lint and empty bottles in the provided bins.</p>
                </div>
              </details>

              <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-800 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <ParkingCircle className="w-5 h-5 text-primary" /> Parking & Premises
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm space-y-4 pt-2 border-t border-slate-50 bg-slate-50/50">
                  <p><strong>1. Customer Parking Only:</strong> We provide plenty of complementary customer-only parking right at 150 Kenwood Ave while you are actively using the laundromat.</p>
                  <p><strong>2. Time Limit:</strong> There is a strictly enforced 2.5-hour parking limit.</p>
                  <p><strong>3. Enforcement:</strong> Unauthorized vehicles, or those exceeding the time limit, will be tagged or towed at the owner's expense.</p>
                </div>
              </details>

              <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-800 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary" /> Unattended & Lost Items
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 text-sm space-y-4 pt-2 border-t border-slate-50 bg-slate-50/50">
                  <p><strong>1. The 5-Minute Rule:</strong> Please be present when your cycle ends. Laundry left for more than 5 minutes after a cycle may be moved to a basket by staff or waiting customers.</p>
                  <p><strong>2. Abandoned Laundry:</strong> Items left for more than 24 hours will be considered abandoned and may be donated to local charities.</p>
                  <p><strong>3. Pockets:</strong> We are not responsible for damage caused by items left in pockets (pens, coins, markers, etc.). Please check all pockets before loading.</p>
                </div>
              </details>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
