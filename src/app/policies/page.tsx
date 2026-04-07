import { Shield, ShieldAlert, ShieldCheck, Clock, ParkingCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Store Policies | Washworld Coin Laundry",
  description: "Official store policies, hygiene standards, terms of service, and liability information for Washworld Coin Laundry.",
};

export default function StorePoliciesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="w-20 h-20 bg-blue-100 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-200">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">Store Policies</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">Please review our operational rules and service limitations to ensure a safe, clean, and respectful environment for everyone visiting Washworld.</p>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 p-8 md:p-12 space-y-16 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 opacity-60"></div>

          {/* 1. Hygiene */}
          <section>
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"><ShieldCheck className="w-5 h-5 text-primary" /></div> 
              Hygiene & Machine Use
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">1. Pre-Use Inspection</h3>
                <p>Customers are responsible for inspecting the inside of washers and dryers before use. We are not liable for damage to your laundry caused by items (pens, crayons, bleach, etc.) left behind by a previous user.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">2. Biohazards & Infestations</h3>
                <p>For the health and safety of all patrons, items contaminated with feces, bodily fluids, or bed bugs (and similar infestations) are strictly prohibited.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">3. No Pets Allowed</h3>
                <p>Pets are not permitted inside the facility. Service animals specifically trained to aid individuals with disabilities are the only exception.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">4. Pet Hair Policy</h3>
                <p>Please shake off and remove excessive animal hair from items before washing. This prevents drainage clogs and protects other customers' laundry.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">5. Dryer Use</h3>
                <p>Our dryers are reserved exclusively for customers who have washed their laundry on-site at Washworld. Management and staff reserve the right to check items to verify they were washed here.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">6. Machine Loading</h3>
                <p>Do not overload machines. Overloading prevents proper cleaning and can cause mechanical failure.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">7. Chemicals & Dyeing</h3>
                <p>Use detergent and bleach responsibly. Dyeing or tinting clothes in our machines is strictly prohibited.</p>
              </div>
            </div>
          </section>

          {/* 2. Hours & Conduct */}
          <section>
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"><Clock className="w-5 h-5 text-primary" /></div> 
              Hours & Conduct
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">1. Last Wash & Closing</h3>
                <p>The Last Wash is at 9:00 PM. All machines must be empty and customers must exit the premises by 10:00 PM.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">2. Professional Conduct</h3>
                <p>We maintain a respectful environment. Disruptive, rude, or discriminatory behavior toward staff or other patrons will result in a permanent ban.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">3. Supervision</h3>
                <p>Children must be supervised at all times. Do not allow children to play on or inside the machines.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">4. Environment</h3>
                <p>Washworld is a 100% smoke-free and vape-free facility. We provide a designated smoking area approximately 25 feet away from the main entrance with seating and a smoker&apos;s receptacle. Please dispose of lint and empty bottles in the provided bins.</p>
              </div>
            </div>
          </section>

          {/* 3. Parking & Premises */}
          <section>
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"><ParkingCircle className="w-5 h-5 text-primary" /></div> 
              Parking & Premises
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">1. Customer Parking Only</h3>
                <p>We provide plenty of complementary customer-only parking right at 150 Kenwood Ave while you are actively using the laundromat.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">2. Time Limit</h3>
                <p>There is a strictly enforced 2.5-hour parking limit.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">3. Enforcement</h3>
                <p>Unauthorized vehicles, or those exceeding the time limit, will be tagged or towed at the owner's expense.</p>
              </div>
            </div>
          </section>

          {/* 4. Unattended & Lost Items */}
          <section>
            <h2 className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"><HelpCircle className="w-5 h-5 text-primary" /></div> 
              Unattended & Lost Items
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">1. The 5-Minute Rule</h3>
                <p>Please be present when your cycle ends. Laundry left for more than 5 minutes after a cycle may be moved to a basket by staff or waiting customers.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">2. Abandoned Laundry</h3>
                <p>Items left for more than 24 hours will be considered abandoned and may be donated to local charities.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">3. Pockets</h3>
                <p>We are not responsible for damage caused by items left in pockets (pens, coins, markers, etc.). Please check all pockets before loading.</p>
              </div>
            </div>
          </section>

          {/* 5. Liability & Claims */}
          <section>
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3 border-b border-red-200 pb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"><ShieldAlert className="w-5 h-5 text-red-500" /></div> 
                Liability & Claims
              </h2>
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-1">1. Limitation of Liability</h3>
                  <p>In the event of proven loss or damage to garments caused by equipment failure, our liability is limited to a maximum of <strong>$25.00 per item</strong>, and a total maximum of <strong>$45.00 per customer/order</strong>.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-1">2. Use at Your Own Risk</h3>
                  <p>We are not responsible for damage caused by incorrect heat settings, cycle choices, or pre-existing garment conditions.</p>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-1">3. Machine Malfunction</h3>
                  <p>If a machine malfunctions, notify staff immediately. Do not attempt to fix the machine yourself.</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Linkback */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 font-bold bg-primary text-white hover:bg-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 active:scale-95 transition-all duration-300 px-8 py-3.5 rounded-full shadow-md">
            &larr; Return to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
