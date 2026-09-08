import type { Metadata } from "next";
import {
  SectionHead,
  ButtonLink,
  Faq,
  CardGrid,
  PageHero,
  ClosingCta,
  ArrowIcon,
} from "@/components/sections/Shared";
import { SITE_URL, BUSINESS, COMMERCIAL_FAQ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Laundry Service in Toronto",
  description:
    "Commercial laundry service for Toronto salons, gyms, short-term rentals, restaurants and clinics. Towels, linen and uniforms washed weekly, with pickup and delivery available.",
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: "Commercial Laundry Service in Toronto | Washworld",
    description:
      "Weekly towel, linen and uniform laundry for small businesses in Central Toronto.",
    url: `${SITE_URL}/commercial`,
    type: "website",
  },
};

const SECTORS = [
  {
    title: "Hair & beauty salons",
    desc: "Towels and capes back the next day, washed hot and folded ready for the shelf",
  },
  {
    title: "Gyms & studios",
    desc: "Member towels on a fixed weekly collection so the cupboard is never empty",
  },
  {
    title: "Short-term rentals",
    desc: "Sheets, duvet covers and towels turned around between guests",
  },
  {
    title: "Restaurants & cafes",
    desc: "Aprons, service cloths and table linen on a regular schedule",
  },
  {
    title: "Clinics & studios",
    desc: "Gowns, sheets and towels handled with a hot wash every time",
  },
  {
    title: "Offices & small teams",
    desc: "Kitchen linen and uniforms without anyone taking it home",
  },
] as const;

const STEPS = [
  { lead: "1", title: "Tell us your volume", desc: "Roughly how much and how often, and we quote per account" },
  { lead: "2", title: "Set a schedule", desc: "A fixed collection day so you never have to think about it" },
  { lead: "3", title: "We collect", desc: "Pickup through Curbside Laundry, or drop at the counter" },
  { lead: "4", title: "Back clean", desc: "Washed, dried and folded, ready to go straight back into service" },
] as const;

export default function CommercialPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: COMMERCIAL_FAQ.map((item) => ({
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
        eyebrow="For Toronto businesses"
        title="Commercial laundry service in"
        highlight="Toronto"
        image="/images/facility/facility-5.jpg"
        imageAlt="Commercial dryers at Washworld Coin Laundry Toronto"
        badge={{ value: "Weekly", label: "Fixed collection" }}
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
        Towels, linen and uniforms washed on a schedule you set. We work with
        small businesses around {BUSINESS.neighbourhood} and Central Toronto, with
        pickup and delivery through our own Curbside Laundry service.
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Who we work with"
            title="If you go through towels every week, we can help"
          >
            You do not need a warehouse contract to get laundry off your plate.
            We take on small accounts that the big industrial services will not
            look at.
          </SectionHead>
          <CardGrid items={SECTORS} columns={3} />
        </div>
      </section>

      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="How it works" title="Four steps to set it up" />
          <CardGrid items={STEPS} />
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Commercial questions"
            title="What businesses ask us"
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
            <ButtonLink href={BUSINESS.emailHref} variant="soft">
              Email us
            </ButtonLink>
          </>
        }
      >
        Send us your rough weekly volume and we will come back with a per-account
        price, which usually works out below the standard $1.65 per pound.
      </ClosingCta>
    </>
  );
}
