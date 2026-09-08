import type { Metadata } from "next";
import {
  SectionHead,
  ButtonLink,
  Faq,
  PageHero,
  ClosingCta,
  CurbsideBand,
  ArrowIcon,
} from "@/components/sections/Shared";
import { SITE_URL, BUSINESS, FAQ_CATEGORIES } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Laundromat FAQ: Hours, Prices & Rules",
  description:
    "Toronto laundromat questions answered: opening hours, last wash time, prices, payment, parking, Wi-Fi, and the rules for using our machines.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Laundromat FAQ | Washworld Coin Laundry Toronto",
    description:
      "Hours, prices, parking, payment and machine rules, all in one place.",
    url: `${SITE_URL}/faq`,
    type: "website",
  },
};

const CRUMBS = [
  { name: "FAQ", path: "/faq" },
] as const;

export default function FaqPage() {
  const allItems = FAQ_CATEGORIES.flatMap((category) => category.items);
  const schema = [
    breadcrumbSchema(CRUMBS),
    faqSchema(allItems),
  ];


  return (
    <>
      {schema.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(node) }}
        />
      ))}

      <PageHero
        breadcrumbs={CRUMBS}
        eyebrow="Good to know"
        title="Toronto laundromat"
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
              icon={category.icon}
            />
            <Faq items={category.items} />
          </div>
        </section>
      ))}

      <section className="px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <CurbsideBand />
        </div>
      </section>

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
