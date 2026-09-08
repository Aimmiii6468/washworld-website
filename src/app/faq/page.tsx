"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  ArrowLeft,
  Info,
  Settings,
  ShieldCheck,
  FileText,
  Users,
} from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const categories = [
    {
      id: "general",
      title: "General Information",
      icon: Info,
      items: [
        {
          q: "What are your hours of operation?",
          a: "We are open daily from 8:00 AM to 10:00 PM. To ensure everyone has time to finish their laundry, the Last Wash is at 9:00 PM. All machines must be empty and customers must exit by 10:00 PM.",
        },
        {
          q: "Where can I park?",
          a: "We offer plenty of complimentary customer-only parking right at 150 Kenwood Ave. Please note there is a strictly enforced 2.5-hour limit while you are actively using the laundromat. Unauthorized vehicles or those exceeding the limit may be tagged or towed at the owner's expense.",
        },
        {
          q: "Do you have WiFi?",
          a: "Yes! We offer complimentary high-speed WiFi so you can stay productive or entertained while you wait.",
        },
      ],
    },
    {
      id: "machines",
      title: "Using the Machines",
      icon: Settings,
      items: [
        {
          q: "What should I do before starting a load?",
          a: "For your protection, please perform a Pre-Use Inspection of the washers and dryers. We are not liable for damage caused by items left behind by previous users (like pens, crayons, or bleach). Be sure to check your own pockets, too!",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, coin and Interac e-Transfer. There is a change machine on site so you can turn bills into quarters.",
        },
        {
          q: "Can I bring my own detergent?",
          a: "Absolutely. We just ask that you use detergent and bleach responsibly. Please note that dyeing or tinting clothes in our machines is strictly prohibited.",
        },
        {
          q: "Do you sell detergents and other supplies?",
          a: "Yes, we offer a variety of detergents, softeners and stain removers both in single-use size and larger sizes.",
        },
        {
          q: "Can I use the dryers if I washed my clothes at home?",
          a: "Our dryers are reserved for customers who wash their laundry on-site. Management reserves the right to check items to verify they were washed here.",
        },
        {
          q: "What is the 5-Minute Rule?",
          a: "To keep things moving for everyone, please be present when your cycle ends. Laundry left for more than 5 minutes after a cycle may be moved to a basket by staff or waiting customers.",
        },
      ],
    },
    {
      id: "health",
      title: "Health, Safety & Hygiene",
      icon: ShieldCheck,
      items: [
        {
          q: "What items are prohibited for health reasons?",
          a: "To maintain a hygienic environment, items contaminated with feces, bodily fluids, or bed bugs (and similar infestations) are strictly prohibited.",
        },
        {
          q: "Are pets allowed?",
          a: "We love animals, but for health and safety reasons, pets are not permitted inside. Certified service animals are the only exception. If you have items with excessive pet hair, please shake them out thoroughly before washing to prevent drainage clogs.",
        },
        {
          q: "Are children allowed?",
          a: "Yes, we are a family-friendly space! However, children must be supervised at all times for their safety. Please do not allow children to play on or inside the machines.",
        },
      ],
    },
    {
      id: "policies",
      title: "Policies & Liability",
      icon: FileText,
      items: [
        {
          q: "What happens if I forget my laundry?",
          a: "Items left for more than 24 hours are considered abandoned and may be donated to local charities. Please double-check your machines before you leave!",
        },
        {
          q: "What if a machine malfunctions?",
          a: "If a machine isn't working correctly, please notify staff immediately. Do not attempt to fix the equipment yourself.",
        },
        {
          q: "What is your liability policy for damaged items?",
          a: "While we take great pride in our well-maintained machines, use of the facility is at your own risk. In the event of proven equipment failure, our liability is limited to a maximum of $25.00 per item and a total of $45.00 per customer. We are not responsible for damage caused by incorrect heat settings or pre-existing garment conditions.",
        },
        {
          q: "Is smoking or vaping allowed?",
          a: "No. Washworld is a 100% smoke-free and vape-free facility. There is a designated smoking area approximately 25 feet away from the main entrance with a couple of seats and a Smoker's Receptacle.",
        },
      ],
    },
    {
      id: "community",
      title: "Community",
      icon: Users,
      items: [
        {
          q: "What areas do you serve?",
          a: "The majority of our customers come to us from the Wychwood-Humewood community, but they come as far as Rosedale, Forest Hill, and all over Central Toronto.",
        },
        {
          q: "What kind of artwork do you have in the store?",
          a: "We have a wide selection of paintings and drawings, including water colours, oil paints, acrylics, lithographs and more. We believe laundry day should be inspiring, so we feature beautiful artwork for our customers to enjoy while they wait.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="w-20 h-20 bg-blue-100 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-200">
            <HelpCircle className="w-10 h-10" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Washworld, our facility, and our
            daily operations.
          </p>
        </div>

        {/* Categories Loop */}
        <div className="space-y-16">
          {categories.map((cat) => (
            <section key={cat.id} aria-labelledby={`${cat.id}-heading`}>
              <h2
                id={`${cat.id}-heading`}
                className="text-2xl font-black text-slate-800 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </span>
                {cat.title}
              </h2>
              <div className="space-y-4">
                {cat.items.map((faq, idx) => {
                  const faqId = `${cat.id}-${idx}`;
                  const isOpen = openFaq === faqId;

                  return (
                    <div
                      key={faqId}
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                    >
                      {/*
                        A real <button> inside the heading: reachable by Tab,
                        toggles on Enter and Space, and announces its state.
                        The old markup was a plain <div onClick>.
                      */}
                      <h3 className="m-0">
                        <button
                          type="button"
                          id={`${faqId}-trigger`}
                          aria-expanded={isOpen}
                          aria-controls={`${faqId}-panel`}
                          onClick={() => toggleFaq(faqId)}
                          className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                        >
                          <span className="font-bold text-lg text-slate-800 leading-snug">
                            {faq.q}
                          </span>
                          <span
                            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                              isOpen
                                ? "bg-primary text-white"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                              aria-hidden="true"
                            />
                          </span>
                        </button>
                      </h3>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="panel"
                            id={`${faqId}-panel`}
                            role="region"
                            aria-labelledby={`${faqId}-trigger`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 text-slate-600 font-medium text-[15px] leading-relaxed overflow-hidden"
                          >
                            <p className="pt-5 pb-6 border-t border-slate-100">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Return Block */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-bold bg-primary text-white hover:bg-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 active:scale-95 transition-all duration-300 px-8 py-3.5 rounded-full shadow-md"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
