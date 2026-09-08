import type { Metadata } from "next";
import {
  SectionHead,
  ButtonLink,
  Faq,
  PageHero,
  ClosingCta,
  ArrowIcon,
} from "@/components/sections/Shared";
import { SITE_URL, BUSINESS, FAQ_CATEGORIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Laundry FAQ: Hours, Prices, Parking & Rules",
  description:
    "Answers about Washworld Coin Laundry in Toronto: opening hours, last wash time, prices, payment methods, parking, WiFi, and the rules for using our machines.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Laundromat FAQ | Washworld Coin Laundry Toronto",
    description:
      "Hours, prices, parking, payment and machine rules, all in one place.",
    url: `${SITE_URL}/faq`,
    type: "website",
  },
};

export default function FaqPage() {
  const allItems = FAQ_CATEGORIES.flatMap((category) => category.items);
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="Good to know"
        title="Frequently asked"
        highlight="questions"
        image="/images/facility/facility-1.jpg"
        imageAlt="Inside Washworld Coin Laundry at 150 Kenwood Ave Toronto"
        badge={{ value: "8-10", label: "Open every day" }}
        actions={
          <>
            <ButtonLink href="/prices">
              See prices <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/contact" variant="soft">
              Ask us something else
            </ButtonLink>
          </>
        }
      >
        Hours, prices, parking, payment and the house rules. If your question is
        not here, call {BUSINESS.phoneDisplay} or send us a message and we will
        answer it.
      </PageHero>

      {FAQ_CATEGORIES.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          className={`px-5 py-16 md:px-8 md:py-20 lg:px-12 ${
            index % 2 === 1 ? "border-y border-border bg-secondary" : ""
          }`}
        >
          <div className="mx-auto max-w-[1200px]">
            <SectionHead
              eyebrow={`Section ${index + 1}`}
              title={category.title}
            />
            <Faq items={category.items} />
          </div>
        </section>
      ))}

      <ClosingCta
        title="Still not sure? Just ask"
        actions={
          <>
            <ButtonLink href="/contact">
              Send a message <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={BUSINESS.phoneHref} variant="soft">
              Call {BUSINESS.phoneDisplay}
            </ButtonLink>
          </>
        }
      >
        We are at {BUSINESS.streetAddress} {BUSINESS.addressLocality}, open every
        day from 8:00 AM to 10:00 PM.
      </ClosingCta>
    </>
  );
}
