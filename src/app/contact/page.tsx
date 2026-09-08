import { Mail, MapPin, Phone, Clock, MoveRight } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Washworld Coin Laundry in Toronto. Self-serve, wash and fold, and dry cleaning services at 150 Kenwood Ave.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Block */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider inline-block">
            Support &amp; Location
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">
            Contact Washworld
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Have a question about our services or need help with a recent order?
            Send us a message, give us a call, or drop by the shop.
          </p>
        </div>

        {/* Layout Split: Contact Cards & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
          {/* Info Columns */}
          <div className="space-y-6">
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="block bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-800 text-xl mb-2">
                    Visit the Store
                  </h2>
                  <p className="text-slate-500 mb-4 leading-relaxed">
                    {BUSINESS.streetAddress}
                    <br />
                    {BUSINESS.addressLocality}, {BUSINESS.addressRegion},{" "}
                    {BUSINESS.postalCode}
                  </p>
                  <span className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Get Google Maps Directions
                    <MoveRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href={BUSINESS.phoneHref}
                className="flex-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="font-bold text-slate-800 text-lg mb-1">Call Us</h2>
                <p className="text-slate-500">{BUSINESS.phoneDisplay}</p>
              </a>

              <a
                href={BUSINESS.emailHref}
                className="flex-1 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="font-bold text-slate-800 text-lg mb-1">
                  Email Details
                </h2>
                <p className="text-slate-500 break-all text-sm">
                  {BUSINESS.email}
                </p>
              </a>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-slate-50 text-slate-800 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="w-full">
                  <h2 className="font-bold text-slate-800 text-xl mb-4">
                    Store Hours
                  </h2>
                  <div className="space-y-3 w-full">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-medium">
                        Monday - Sunday
                      </span>
                      <span className="text-slate-800 font-bold">
                        {BUSINESS.hoursDisplay}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 bg-red-50 border border-red-100 px-4 py-3 rounded-xl flex justify-between items-center text-red-700">
                    <span className="font-black text-sm uppercase tracking-wide">
                      Last Wash Limit
                    </span>
                    <span className="font-black">
                      {BUSINESS.lastWashDisplay}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Block */}
            <div className="h-[320px] bg-slate-200 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl relative">
              <iframe
                src={BUSINESS.mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map showing Washworld Coin Laundry at 150 Kenwood Ave, Toronto"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:sticky lg:top-28">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
