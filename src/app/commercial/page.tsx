import type { Metadata } from "next";
import {
  SectionHead,
  ButtonLink,
  Faq,
  CardGrid,
  PageHero,
  ClosingCta,
  CurbsideBand,
  ArrowIcon,
} from "@/components/sections/Shared";
import { SITE_URL, BUSINESS, COMMERCIAL_FAQ, OG_IMAGE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, jsonLd } from "@/lib/schema";

/**
 * Business page.
 *
 * Deliberately written as an enquiry page, not a sales page. The previous
 * washworld site had no business or commercial section at all, and
 * curbsidelaundry.ca sells a consumer pickup service only, so there is no
 * source for "we already serve salons and gyms", for a commercial rate, or for
 * a weekly collection contract. Everything below is limited to what is
 * verifiably true: the machines, the counter service, the published price, and
 * an invitation to call.
 *
 * The owner has since confirmed the shop does laundry and nothing else, that
 * there is no fixed weekly collection, and that a business pays the published
 * price with no separate commercial rate. So the page may invite a business to
 * call about volume and timing, but must never imply an account, a contract or
 * a negotiated rate. Curbside Laundry is the same owner's business, so linking
 * it for pickup and delivery is accurate.
 *
 * When he says which trades he wants, this page can be sharpened to sell to
 * them by name. Until then, do not add a claim that is not already true of the
 * walk-in shop.
 */
export const metadata: Metadata = {
  title: "Laundry for Toronto Businesses",
  description:
    "Bulk towels, linen, aprons and uniforms washed in Central Toronto. Large-capacity machines, $1.65 per pound, no minimum. Call us about regular volume.",
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: "Laundry for Toronto Businesses | Washworld",
    description:
      "Bulk towels, linen and uniforms washed in Central Toronto. Ask us about regular volume.",
    url: `${SITE_URL}/commercial`,
    type: "website",
    images: [OG_IMAGE],
  },
};

/**
 * What the shop can physically do. Note these describe equipment and service,
 * never an existing client list.
 */
const CAPABILITIES = [
  {
    icon: "washer" as const,
    title: "Large-capacity washers",
    desc: "Our biggest machines take king-size duvets, so bulk towels and sheets are no trouble",
  },
  {
    icon: "basket" as const,
    title: "Wash, dry and fold",
    desc: "$1.65 per pound with no minimum order, sorted and folded by our staff",
  },
  {
    icon: "hanger" as const,
    title: "Dry cleaning and pressing",
    desc: "Shirts, blazers and uniforms priced per item, pressed and ready to wear",
  },
  {
    icon: "clock" as const,
    title: "Open every day",
    desc: `${BUSINESS.hoursDisplay}, seven days, so drop-off fits around trading hours`,
  },
  {
    icon: "parking" as const,
    title: "Park at the door",
    desc: "Free customer parking at 150 Kenwood Ave, which matters when you arrive with bags",
  },
  {
    icon: "truck" as const,
    title: "Pickup and delivery",
    desc: "We run Curbside Laundry ourselves, so collection is worth asking about",
  },
];

const STEPS = [
  {
    lead: "1",
    title: "Call or send a message",
    desc: "Tell us what you need washed and roughly how often",
  },
  {
    lead: "2",
    title: "We tell you straight",
    desc: "Whether we can turn it around, and by when. The rate is the published one",
  },
  {
    lead: "3",
    title: "Drop it at the counter",
    desc: "Any bag or basket, no appointment, no account to open",
  },
  {
    lead: "4",
    title: "Back clean and folded",
    desc: "Ready to go straight back into service",
  },
];

const CRUMBS = [
  { name: "For business", path: "/commercial" },
] as const;

export default function CommercialPage() {
  const schema = [
    breadcrumbSchema(CRUMBS),
    faqSchema(COMMERCIAL_FAQ),
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
        eyebrow="For Toronto businesses"
        title="Bulk laundry for small businesses in"
        highlight="Toronto"
        image="/images/facility/facility-5.jpg"
        imageAlt="Wall of large commercial dryers at Washworld Coin Laundry Toronto"
        badge={{ value: "$1.65", label: "Per pound, no minimum" }}
        actions={
          <>
            <ButtonLink href={BUSINESS.phoneHref}>
              Call {BUSINESS.phoneDisplay} <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/contact" variant="soft">
              Send us a message
            </ButtonLink>
          </>
        }
      >
        Towels, sheets, aprons and uniforms washed on the same large-capacity
        machines the neighbourhood uses every day. If your shop goes through
        laundry every week, call us and we will tell you honestly what we can
        take on.
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="What we have"
            title="A working laundromat, not a sales pitch"
          >
            We are a neighbourhood laundromat on {BUSINESS.streetAddress}, not an
            industrial contractor. That is the point: no account minimum, no
            long-term contract, and you can walk in today.
          </SectionHead>
          <CardGrid items={CAPABILITIES} columns={3} />
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="How to start"
            title="Four steps, and the first one is a phone call"
          />
          <CardGrid items={STEPS} />
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <CurbsideBand title="Would rather we came to you?">
            Curbside Laundry is our own pickup and delivery service in Toronto.
            It is built for household laundry, so for a regular business
            collection call the shop first and we will tell you whether we can
            cover your address and volume.
          </CurbsideBand>
        </div>
      </section>

      <section className="border-t border-border px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1200px] pt-16 md:pt-24">
          <SectionHead
            eyebrow="Before you call"
            title="What businesses ask us"
            icon="building"
          />
          <Faq items={COMMERCIAL_FAQ} />
        </div>
      </section>

      <ClosingCta
        title="Tell us what you need washed"
        actions={
          <>
            <ButtonLink href={BUSINESS.phoneHref}>
              Call {BUSINESS.phoneDisplay} <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/contact" variant="soft">
              Send a message
            </ButtonLink>
          </>
        }
      >
        We are at {BUSINESS.streetAddress}, {BUSINESS.addressLocality}, open every
        day {BUSINESS.hoursDisplay}. Bring a bag in and see the machines for
        yourself.
      </ClosingCta>
    </>
  );
}
