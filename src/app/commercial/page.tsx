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
 * Commercial page.
 *
 * Sourced from the owner, 2026-09-10. Commercial customers are charged a lot
 * more per pound than the walk-in rate, there is a minimum order, the soiling
 * and stains are heavier, and delivery costs more. The right call to action is
 * a custom quote, never a number.
 *
 * Condominium guest suites are the most profitable segment, so they lead. Note
 * the specific meaning: buildings where residents own their own units and the
 * corporation keeps hotel-style suites for visiting family. Not rental
 * buildings with a single landlord.
 *
 * The page deliberately does NOT narrow to condos. The brief was that anyone
 * searching should find this business whatever industry they are in, so the
 * sector list is broad and ends by inviting trades that are not on it. Naming
 * trades is safe here because the question these answer is who the service is
 * for, not who is already a client.
 *
 * Two rules for anyone editing this file. Never print a commercial per-pound
 * figure. Never present the $1.40 walk-in rate as what a business pays.
 */
export const metadata: Metadata = {
  title: "Commercial Laundry Service in Toronto",
  description:
    "Commercial laundry in Toronto for condo guest suites, rentals, salons, gyms, restaurants and clinics. Towels, linen and uniforms, collected and delivered.",
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: "Commercial Laundry Service in Toronto | Washworld",
    description:
      "Towels, bed linen and uniforms for Toronto businesses. Condo guest suites a speciality. Quoted per account, pickup and delivery available.",
    url: `${SITE_URL}/commercial`,
    type: "website",
    images: [OG_IMAGE],
  },
};

/**
 * Who the service is for. Broad on purpose. Condominium guest suites lead
 * because that is the most profitable work, not the only work.
 */
const SECTORS = [
  {
    icon: "building" as const,
    title: "Condominium guest suites",
    desc: "Sheets, duvet covers and towels turned around between bookings, like a hotel room",
  },
  {
    icon: "pin" as const,
    title: "Short-term rentals",
    desc: "Bed linen and towels back fast, so the wash is never the reason a guest waits",
  },
  {
    icon: "sparkle" as const,
    title: "Salons and spas",
    desc: "Towels, capes and robes washed hot and folded ready for the shelf",
  },
  {
    icon: "users" as const,
    title: "Gyms and studios",
    desc: "Member towels on a regular collection so the cupboard is never empty",
  },
  {
    icon: "basket" as const,
    title: "Restaurants and cafes",
    desc: "Aprons, service cloths and table linen, including the stains that come with them",
  },
  {
    icon: "shield" as const,
    title: "Clinics and offices",
    desc: "Gowns, sheets, kitchen linen and uniforms, handled discreetly",
  },
];

const WHY = [
  {
    icon: "washer" as const,
    title: "Machines built for volume",
    desc: "Our largest washers take king-size duvets, so bulk linen is routine rather than a problem",
  },
  {
    icon: "clock" as const,
    title: "Open seven days",
    desc: `${BUSINESS.hoursDisplay} every day, so a turnaround does not have to wait for Monday`,
  },
  {
    icon: "truck" as const,
    title: "Our own delivery",
    desc: "Curbside Laundry is our business, not a courier we hand your linen to",
  },
  {
    icon: "hanger" as const,
    title: "Pressing on site",
    desc: "Uniforms, shirts and jackets cleaned and pressed at the same address",
  },
];

const PRICE_REASONS = [
  {
    title: "Heavier soiling",
    desc: "Kitchen, salon and suite linen arrives dirtier than a household load, and the stains take real work",
  },
  {
    title: "Volume and turnaround",
    desc: "A regular account books machine time and staff hours, often against a deadline",
  },
  {
    title: "Collection and delivery",
    desc: "A fixed route to your door costs more to run than a one-off pickup",
  },
];

const STEPS = [
  {
    lead: "1",
    title: "Tell us your volume",
    desc: "Roughly what you go through in a week, and how often you need it",
  },
  {
    lead: "2",
    title: "We quote your account",
    desc: "A firm per-pound rate and a minimum, based on your volume and route",
  },
  {
    lead: "3",
    title: "Set the schedule",
    desc: "Collection on fixed days, or drop at the counter, whichever suits",
  },
  {
    lead: "4",
    title: "Back in service",
    desc: "Washed, dried, folded or pressed, ready to go straight back out",
  },
];

const CRUMBS = [{ name: "Commercial", path: "/commercial" }] as const;

export default function CommercialPage() {
  const schema = [breadcrumbSchema(CRUMBS), faqSchema(COMMERCIAL_FAQ)];

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
        title="Commercial laundry service in"
        highlight="Toronto"
        image="/images/facility/facility-5.jpg"
        imageAlt="Wall of large commercial dryers at Washworld Coin Laundry, 150 Kenwood Ave Toronto"
        badge={{ value: "Quoted", label: "Per account" }}
        actions={
          <>
            <ButtonLink href="/contact">
              Get a quote <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={BUSINESS.phoneHref} variant="soft">
              Call {BUSINESS.phoneDisplay}
            </ButtonLink>
          </>
        }
      >
        Towels, bed linen and uniforms for businesses across Central Toronto,
        collected from your door or dropped at our counter. Condominium guest
        suites are what we are best set up for, but if your trade goes through
        linen every week, we want to hear from you.
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Who it is for"
            title="If you go through linen every week, this is for you"
          >
            We are a working laundromat on {BUSINESS.streetAddress} with the
            machines and the hours to take on regular volume. No warehouse
            contract, no six-month tie-in, and you deal with the people doing
            the washing rather than an account manager.
          </SectionHead>
          <CardGrid items={SECTORS} columns={3} />
          <p className="mt-6 max-w-[60ch] text-muted-foreground">
            Not on that list? Ask anyway. If it can go in a machine, the answer
            is usually yes.
          </p>
        </div>
      </section>

      {/* Condo guest suites get their own block. It is the most profitable
          segment and the one where the requirement is genuinely different. */}
      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Our speciality"
            title="Condominium guest suites"
            icon="building"
          >
            A guest suite is a hotel room that happens to sit inside a condo
            building. Residents book it for visiting family, it turns over at
            short notice, and the linen has to be back before the next booking.
            That is a different job from a weekly towel run, and it is the one
            we are set up for.
          </SectionHead>
          <div className="grid gap-4 text-muted-foreground md:grid-cols-2 md:gap-8">
            <p>
              We handle sheets, duvet covers, pillowcases, towels and bath mats,
              washed hot, dried properly and folded or pressed so the suite
              presents the way the board expects it to. Stains that come back
              from a suite get treated rather than folded around.
            </p>
            <p>
              For buildings with frequent bookings we can work to a stock
              rotation, so a clean set is always on the shelf and the suite is
              never held up waiting on a wash. Property managers and boards can
              call us directly and we will quote the building rather than the
              load.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">
              Quote my building <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={BUSINESS.phoneHref} variant="soft">
              Call {BUSINESS.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Why us" title="What you get for the money" />
          <CardGrid items={WHY} />
        </div>
      </section>

      {/*
        Pricing block, with no number in it on purpose. Commercial is quoted
        per account and always above the walk-in rate. Saying plainly why it
        costs more builds more trust than a figure would, and it stops anyone
        arriving expecting the $1.40 they saw on the prices page.
      */}
      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Pricing"
            title="Quoted per account, not off a price list"
            icon="tag"
          >
            Commercial laundry is priced above our walk-in rate and carries a
            minimum order. We would rather say that plainly here than surprise
            you later.
          </SectionHead>
          <CardGrid items={PRICE_REASONS} columns={3} />
          <p className="mt-6 max-w-[60ch] text-muted-foreground">
            Send us your rough weekly volume and we will come back with a firm
            per-pound rate and a minimum, so you can compare it against what you
            are paying now.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="How it works" title="Four steps to an account" />
          <CardGrid items={STEPS} />
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <CurbsideBand title="We collect it ourselves">
            Curbside Laundry is our own pickup and delivery service in Toronto,
            not a courier we hand your linen to. For a commercial account,
            collection is quoted along with the laundry, so you get one number
            rather than two.
          </CurbsideBand>
        </div>
      </section>

      <section className="border-t border-border px-5 pb-16 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto max-w-[1200px] pt-16 md:pt-24">
          <SectionHead
            eyebrow="Before you call"
            title="What businesses ask us"
            icon="doc"
          />
          <Faq items={COMMERCIAL_FAQ} />
        </div>
      </section>

      <ClosingCta
        title="Tell us what you need washed"
        actions={
          <>
            <ButtonLink href="/contact">
              Get a quote <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={BUSINESS.phoneHref} variant="soft">
              Call {BUSINESS.phoneDisplay}
            </ButtonLink>
          </>
        }
      >
        We are at {BUSINESS.streetAddress}, {BUSINESS.addressLocality}, open
        every day {BUSINESS.hoursDisplay}. Send your weekly volume and we will
        quote your account.
      </ClosingCta>
    </>
  );
}
