import type { Metadata } from "next";
import {
  SectionHead,
  ButtonLink,
  Faq,
  PriceTable,
  PageHero,
  ClosingCta,
  ArrowIcon,
} from "@/components/sections/Shared";
import {
  SITE_URL,
  BUSINESS,
  SELF_SERVE_PRICES,
  WASH_FOLD_PRICES,
  DRY_CLEAN_PRICES,
  PRICES_FAQ,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Laundromat Prices in Toronto: Coin Laundry & Wash and Fold",
  description:
    "Full price list for Washworld Coin Laundry, Toronto. Self-serve washers from $2.25, dryers $0.25, wash and fold $1.65 per pound, dry cleaning from $4. No membership.",
  alternates: { canonical: "/prices" },
  openGraph: {
    title: "Laundromat Prices in Toronto | Washworld Coin Laundry",
    description:
      "Self-serve, wash and fold, and dry cleaning prices in one place. No membership and no minimum order.",
    url: `${SITE_URL}/prices`,
    type: "website",
  },
};

export default function PricesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PRICES_FAQ.map((item) => ({
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
        eyebrow="Updated for 2026"
        title="Laundromat prices in"
        highlight="Toronto"
        image="/images/facility/facility-4.jpg"
        imageAlt="Price display on the washers at Washworld Coin Laundry Toronto"
        badge={{ value: "$2.25", label: "Standard wash" }}
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Get directions <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/services/self-serve" variant="soft">
              Self-serve details
            </ButtonLink>
          </>
        }
      >
        Every price we charge, on one page. Self-serve machines, wash and fold by
        the pound, and dry cleaning per item. No membership, no app, and nothing
        added at the counter.
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Self-serve"
            title="Coin laundry prices"
          >
            Pay at the machine with cash, coin or Interac e-Transfer. Machine
            prices vary slightly with load size and cycle, so the display on the
            machine is always the final word.
          </SectionHead>
          <PriceTable
            caption="Self-serve washer and dryer prices"
            columns={["Machine", "Price", "Cycle"]}
            rows={SELF_SERVE_PRICES.map((r) => ({
              label: r.label,
              sub: r.sub,
              price: r.price,
              note: r.cycle,
            }))}
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Drop-off"
            title="Wash and fold prices"
          >
            Clothes are priced by weight with no minimum order. Bulky items are
            priced individually because they take a machine of their own.
          </SectionHead>
          <PriceTable
            caption="Wash, dry and fold prices"
            columns={["Item", "Price", "How it is priced"]}
            rows={WASH_FOLD_PRICES.map((r) => ({
              label: r.label,
              sub: r.sub,
              price: r.price,
              note: r.label === "Clothes" ? "By weight" : "By size",
            }))}
          />
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Garment care" title="Dry cleaning prices">
            Each item is priced on its own so you know the cost before you hand it
            over. Shirts with stain removal are $7 instead of $4.
          </SectionHead>
          <PriceTable
            caption="Dry cleaning prices"
            columns={["Item", "Price", "How it is priced"]}
            rows={DRY_CLEAN_PRICES}
          />
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Pricing questions" title="What it actually costs" />
          <Faq items={PRICES_FAQ} />
        </div>
      </section>

      <ClosingCta
        title="Bring the basket, we handle the rest"
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Get directions <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/contact" variant="soft">
              Ask us a question
            </ButtonLink>
          </>
        }
      >
        {BUSINESS.streetAddress} {BUSINESS.addressLocality}. Open every day from
        8:00 AM to 10:00 PM, with free customer parking at the door.
      </ClosingCta>
    </>
  );
}
