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
  WASH_FOLD_PRICES,
  WASH_FOLD_FAQ,
  OG_IMAGE,
} from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Wash, Dry & Fold Service in Toronto",
  description:
    "Drop-off wash and fold laundry in Toronto. $1.65 per pound, no minimum order, bedding priced per item, and most orders are back the same day.",
  alternates: { canonical: "/services/wash-and-fold" },
  openGraph: {
    title: "Wash, Dry & Fold Service in Toronto | Washworld",
    description:
      "Drop the bag at the counter and collect it sorted, washed, dried and folded. $1.65 per pound, no minimum.",
    url: `${SITE_URL}/services/wash-and-fold`,
    type: "website",
    images: [OG_IMAGE],
  },
};

const STEPS = [
  { lead: "1", title: "Drop it off", desc: "Any bag or basket, no appointment needed" },
  { lead: "2", title: "We sort it", desc: "Separated by colour and fabric before washing" },
  { lead: "3", title: "Wash and dry", desc: "Commercial detergents, correct heat per load" },
  { lead: "4", title: "Fold and collect", desc: "Stacked and ready to go into the drawer" },
] as const;

const INCLUDED = [
  { icon: "tag" as const, title: "No minimum order", desc: "One bag or ten, the rate is the same" },
  { icon: "basket" as const, title: "Sorted for you", desc: "By colour and fabric, before anything goes in" },
  { icon: "detergent" as const, title: "Free and clear option", desc: "Ask at the counter for sensitive skin" },
  { icon: "washer" as const, title: "Bedding welcome", desc: "Duvets, blankets and toppers priced per item" },
];

const CRUMBS = [
  { name: "Wash, dry & fold", path: "/services/wash-and-fold" },
] as const;

export default function WashAndFoldPage() {
  const schema = [
    breadcrumbSchema(CRUMBS),
    faqSchema(WASH_FOLD_FAQ),
    serviceSchema({
      name: "Wash, dry and fold laundry service",
      description:
        "Drop-off laundry service in Toronto. Sorted, washed, dried and folded at $1.65 per pound with no minimum order, most orders back the same day.",
      path: "/services/wash-and-fold",
      offers: [
        { name: "Clothes, per pound", price: "1.65", note: "No minimum order" },
        { name: "Pillows", price: "5.00", note: "From, priced per item" },
        { name: "Blankets and duvets", price: "20.00", note: "From, twin to California king" },
        { name: "Mattress topper", price: "30.00", note: "From, priced per item" },
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
        eyebrow="Drop off, walk away"
        title="Wash, dry and fold service in"
        highlight="Toronto"
        image="/images/services/service-2.jpg"
        imageAlt="Wash, dry and fold laundry service at Washworld Coin Laundry Toronto"
        badge={{ value: "$1.65", label: "Per pound" }}
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Drop off today <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/prices" variant="soft">
              See all prices
            </ButtonLink>
          </>
        }
      >
        Leave your bag at the counter and collect it sorted, washed, dried and
        folded. $1.65 per pound with no minimum order, at {BUSINESS.streetAddress}{" "}
        near {BUSINESS.nearby}.
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="How it works" title="Four steps, one visit">
            The only thing you have to do is carry the bag in and carry it back
            out again. We will text or call when it is ready.
          </SectionHead>
          <CardGrid items={STEPS} />
          <div className="mt-5">
            <CardGrid items={INCLUDED} />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Prices" title="Wash and fold prices">
            Clothes go by weight. Bulky items are priced individually because each
            one takes a machine of its own.
          </SectionHead>
          <PriceTable
            caption="Wash, dry and fold prices at Washworld Coin Laundry"
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
          <SectionHead
            eyebrow="Questions"
            title="Wash and fold, answered"
          />
          <Faq items={WASH_FOLD_FAQ} />
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <CurbsideBand title="Never even leave the house">
            Wash and fold is the same service either way. Curbside Laundry, which we
            own, collects your bag from your door in Toronto, washes it here and
            brings it back folded.
          </CurbsideBand>
        </div>
      </section>

      <RelatedServices exclude="/services/wash-and-fold" />

      <ClosingCta
        title="Drop the bag, get your evening back"
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Get directions <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={BUSINESS.curbsideUrl} external variant="soft">
              Book a pickup instead
            </ButtonLink>
          </>
        }
      >
        No appointment needed. {BUSINESS.streetAddress}{" "}
        {BUSINESS.addressLocality}, open every day 8:00 AM to 10:00 PM.
      </ClosingCta>
    </>
  );
}
