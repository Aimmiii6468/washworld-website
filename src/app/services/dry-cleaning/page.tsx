import type { Metadata } from "next";
import {
  SectionHead,
  ButtonLink,
  Faq,
  CardGrid,
  PriceTable,
  PageHero,
  ClosingCta,
  ArrowIcon,
} from "@/components/sections/Shared";
import {
  SITE_URL,
  BUSINESS,
  DRY_CLEAN_PRICES,
  DRY_CLEAN_FAQ,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Dry Cleaning in Toronto: Shirts from $4",
  description:
    "Dry cleaning at 150 Kenwood Ave, Toronto. Shirts $4, blouses $8, pants $9, suits $12 to $18, dresses $19 to $24, winter parkas up to $55. Every item priced individually.",
  alternates: { canonical: "/services/dry-cleaning" },
  openGraph: {
    title: "Dry Cleaning in Toronto | Washworld Coin Laundry",
    description:
      "Shirts, suits, dresses and winter coats cleaned and pressed. Twelve item types, each priced on its own.",
    url: `${SITE_URL}/services/dry-cleaning`,
    type: "website",
  },
};

const CARE = [
  { title: "Shirts and blouses", desc: "Washed, pressed and returned on hangers" },
  { title: "Suits and blazers", desc: "Cleaned as a set so the pieces still match" },
  { title: "Dresses", desc: "Short and long, priced by length and lining" },
  { title: "Winter coats", desc: "Light jackets through to full down parkas" },
] as const;

const PROMISE = [
  { title: "Priced before you leave", desc: "You know the total when you hand it over" },
  { title: "Stain treatment", desc: "Point it out and tell us what caused it" },
  { title: "Nothing added later", desc: "No handling fee, no surprise line at pickup" },
  { title: "One counter", desc: "Same visit as your wash and fold if you like" },
] as const;

export default function DryCleaningPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DRY_CLEAN_FAQ.map((item) => ({
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
        eyebrow="Garment care"
        title="Dry cleaning in"
        highlight="Toronto"
        image="/images/facility/facility-2.jpg"
        imageAlt="Dry cleaning drop-off at Washworld Coin Laundry Toronto"
        badge={{ value: "$4", label: "Shirts, wash & press" }}
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Bring it in <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/prices" variant="soft">
              See all prices
            </ButtonLink>
          </>
        }
      >
        Shirts, blouses, pants, blazers, suits, dresses and winter parkas, cleaned
        and pressed properly. Twelve item types, each priced on its own, at{" "}
        {BUSINESS.streetAddress} near {BUSINESS.nearby}.
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="What we clean" title="From work shirts to winter parkas">
            Drop items at the same counter as everything else. We will confirm the
            price and the collection day before you leave.
          </SectionHead>
          <CardGrid items={CARE} />
          <div className="mt-5">
            <CardGrid items={PROMISE} />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Prices" title="Dry cleaning prices">
            Shirts with stain removal are $7 instead of $4. Everything else is
            priced as listed, per item.
          </SectionHead>
          <PriceTable
            caption="Dry cleaning prices at Washworld Coin Laundry"
            columns={["Item", "Price", "How it is priced"]}
            rows={DRY_CLEAN_PRICES}
          />
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Questions" title="Dry cleaning, answered" />
          <Faq items={DRY_CLEAN_FAQ} />
        </div>
      </section>

      <ClosingCta
        title="Bring the suit in on your way past"
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Get directions <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/contact" variant="soft">
              Ask about an item
            </ButtonLink>
          </>
        }
      >
        {BUSINESS.streetAddress} {BUSINESS.addressLocality}, open every day 8:00
        AM to 10:00 PM with free customer parking at the door.
      </ClosingCta>
    </>
  );
}
