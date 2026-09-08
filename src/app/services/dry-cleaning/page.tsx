import type { Metadata } from "next";
import {
  SectionHead,
  ButtonLink,
  Faq,
  CardGrid,
  PriceTable,
  PageHero,
  ClosingCta,
  CurbsideBand,
  RelatedServices,
  ArrowIcon,
} from "@/components/sections/Shared";
import {
  SITE_URL,
  BUSINESS,
  DRY_CLEAN_PRICES,
  DRY_CLEAN_FAQ,
  OG_IMAGE,
} from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dry Cleaning in Toronto: Shirts from $4",
  description:
    "Dry cleaning in Toronto: shirts $4, blouses $8, pants $9, suits $12 to $18, dresses $19 to $24, parkas to $55. Every item priced on its own.",
  alternates: { canonical: "/services/dry-cleaning" },
  openGraph: {
    title: "Dry Cleaning in Toronto | Washworld Coin Laundry",
    description:
      "Shirts, suits, dresses and winter coats cleaned and pressed. Twelve item types, each priced on its own.",
    url: `${SITE_URL}/services/dry-cleaning`,
    type: "website",
    images: [OG_IMAGE],
  },
};

const CARE = [
  { icon: "hanger" as const, title: "Shirts and blouses", desc: "Washed, pressed and returned on hangers" },
  { icon: "hanger" as const, title: "Suits and blazers", desc: "Cleaned as a set so the pieces still match" },
  { icon: "sparkle" as const, title: "Dresses", desc: "Short and long, priced by length and lining" },
  { icon: "shield" as const, title: "Winter coats", desc: "Light jackets through to full down parkas" },
];

const PROMISE = [
  { icon: "tag" as const, title: "Priced before you leave", desc: "You know the total when you hand it over" },
  { icon: "sparkle" as const, title: "Stain treatment", desc: "Point it out and tell us what caused it" },
  { icon: "check" as const, title: "Nothing added later", desc: "No handling fee, no surprise line at pickup" },
  { icon: "basket" as const, title: "One counter", desc: "Same visit as your wash and fold if you like" },
];

const CRUMBS = [
  { name: "Dry cleaning", path: "/services/dry-cleaning" },
] as const;

export default function DryCleaningPage() {
  const schema = [
    breadcrumbSchema(CRUMBS),
    faqSchema(DRY_CLEAN_FAQ),
    serviceSchema({
      name: "Dry cleaning",
      description:
        "Dry cleaning and pressing in Toronto. Shirts, blouses, suits, dresses and winter coats, each priced per item with nothing added at the counter.",
      path: "/services/dry-cleaning",
      offers: [
        { name: "Shirts, wash and press", price: "4.00" },
        { name: "Blouses", price: "8.00" },
        { name: "Pants", price: "9.00" },
        { name: "Blazers and suits", price: "12.00", note: "From, to $18 by piece" },
        { name: "Dresses", price: "19.00", note: "From, to $24 by length" },
        { name: "Winter jackets", price: "30.00", note: "From, to $55 for a full parka" },
      ],
    }),
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

      <section className="border-t border-border px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <CurbsideBand />
        </div>
      </section>

      <RelatedServices exclude="/services/dry-cleaning" />

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
