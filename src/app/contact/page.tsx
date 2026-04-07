import { Mail, MapPin, Phone, Clock, MoveRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Washworld Coin Laundry",
  description: "Get in touch with Washworld Coin Laundry in Toronto. We provide professional self-serve, wash and fold, and dry cleaning services. Visit us at 150 Kenwood Ave.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider inline-block">Support & Location</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">Contact Washworld</h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Have a question about our services or need help with a recent order? We are absolutely committed to providing the best laundry experience in Toronto. Let us know how we can help.
          </p>
        </div>

        {/* Layout Split: Contact Cards & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
          
          {/* Info Columns */}
          <div className="space-y-6">
            
            <a href="https://maps.app.goo.gl/wVfdXe871tYHFVLF6" target="_blank" rel="noreferrer" className="block bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-xl mb-2">Visit the Store</h3>
                  <p className="text-slate-500 mb-4 leading-relaxed">150 Kenwood Ave.<br/>Toronto, ON, M6C 2S3</p>
                  <span className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Get Google Maps Directions <MoveRight className="w-4 h-4" /></span>
                </div>
              </div>
            </a>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:+14166529274" className="flex-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Call Us</h3>
                <p className="text-slate-500">(416) 652-9274</p>
              </a>

              <a href="mailto:order@curbsidelaundry.ca" className="flex-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">Email Details</h3>
                <p className="text-slate-500 break-all text-sm">order@curbsidelaundry.ca</p>
              </a>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-slate-50 text-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-slate-800 text-xl mb-4">Store Hours</h3>
                  <div className="space-y-3 w-full">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                       <span className="text-slate-500 font-medium">Monday - Sunday</span>
                       <span className="text-slate-800 font-bold">8:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-red-50 border border-red-100 px-4 py-3 rounded-xl flex justify-between items-center text-red-600">
                    <span className="font-black text-sm uppercase tracking-wide">Last Wash Limit</span>
                    <span className="font-black">9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Map Block */}
          <div className="h-full min-h-[500px] lg:min-h-0 bg-slate-200 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl relative">
            <iframe 
              src="https://maps.google.com/maps?q=Washworld+Coin+Laundry,+150+Kenwood+Ave,+Toronto&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Washworld Contact Map Location"
            ></iframe>
          </div>

        </div>

      </div>
    </main>
  );
}
