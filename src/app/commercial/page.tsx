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
 * The owner has confirmed there is no commercial service here. No business
 * accounts, no fixed weekly collection, no separate rate. A restaurant or a
 * salon pays $1.65 a pound at the same counter as everyone else.
 *
 * So this page does not sell a service that does not exist. It sells the
 * absence of one, which is the real advantage over an industrial contractor:
 * nothing to set up, nothing to negotiate, no minimum, walk in today. That is
 * a genuine reason for a small business to choose a laundromat, and it is all
 * verifiably true.
 *
 * Do not add a client list, a quote process, an account, a contract or a
 * volume discount to this page. None of them exist.
 */
export const metadata: Metadata = {
  title: "Bulk & Business Laundry in Toronto",
  description:
    "Bulk towels, linen, aprons and uniforms washed in Central Toronto. $1.65 per pound, the same rate as everyone. No account, no contract, no minimum.",
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: "Bulk & Business Laundry in Toronto | Washworld",
    description:
      "Bulk towels, linen and uniforms washed in Central Toronto. Same counter, same price, no account needed.",
    url: `${SITE_URL}/commercial`,
    type: "website",
    images: [OG_IMAGE],
  },
};

/**
 * What the shop can physically do. Equipment, published price, hours and
 * parking. Never a client list, and never a service tier.
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
    desc: "$1.65 per pound, the same rate we charge everyone, sorted and folded by our staff",
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
    icon: "tag" as const,
    title: "Nothing to set up",
    desc: "No account, no contract, no minimum order and no invoice to chase",
  },
];

const STEPS = [
  {
    lead: "1",
    title: "Bring the bag in",
    desc: "Any bag or basket, no appointment and no call ahead",
  },
  {
    lead: "2",
    title: "We weigh it",
    desc: "You know the price before you leave the counter",
  },
  {
    lead: "3",
    title: "Washed, dried, folded",
    desc: "Sorted by colour and fabric, dried at the right heat",
  },
  {
    lead: "4",
    title: "Collect the same day",
    desc: "Most morning drop-offs are ready by the evening",
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
        title="Bulk and business laundry in"
        highlight="Toronto"
        image="/images/facility/facility-5.jpg"
        imageAlt="Wall of large commercial dryers at Washworld Coin Laundry Toronto"
        badge={{ value: "$1.65", label: "Per pound, one rate" }}
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Get directions <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/prices" variant="soft">
              See the price list
            </ButtonLink>
          </>
        }
      >
        Towels, sheets, aprons and uniforms washed on the same large-capacity
        machines the neighbourhood uses every day. You pay the same $1.65 a
        pound as everyone else, with no account to open and no contract to sign.
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="What we have"
            title="A working laundromat, not a contract"
          >
            We are a neighbourhood laundromat on {BUSINESS.streetAddress}, not an
            industrial supplier. That is exactly the point. There is no account
            to open, no minimum to hit and nobody to negotiate with, so you can
            walk in this afternoon and have it back tonight.
          </SectionHead>
          <CardGrid items={CAPABILITIES} columns={3} />
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="How it works"
            title="Four steps, and none of them is paperwork"
          />
          <CardGrid items={STEPS} />
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <CurbsideBand title="Would rather we came to you?">
            Curbside Laundry is our own pickup and delivery service in Toronto.
            Book a window online and your laundry is collected, washed and
            returned folded to your door. It is priced on the Curbside site.
          </CurbsideBand>
        </div>
      </section>

      <section className="border-t border-border px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1200px] pt-16 md:pt-24">
          <SectionHead
            eyebrow="Good to know"
            title="What businesses ask us"
            icon="building"
          />
          <Faq items={COMMERCIAL_FAQ} />
        </div>
      </section>

      <ClosingCta
        title="Bring the bag in today"
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Get directions <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={BUSINESS.phoneHref} variant="soft">
              Call {BUSINESS.phoneDisplay}
            </ButtonLink>
          </>
        }
      >
        We are at {BUSINESS.streetAddress}, {BUSINESS.addressLocality}, open every
        day {BUSINESS.hoursDisplay}. Nothing to arrange first, just walk in and
        see the machines for yourself.
      </ClosingCta>
    </>
  );
}
