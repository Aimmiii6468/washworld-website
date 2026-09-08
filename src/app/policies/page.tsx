import type { Metadata } from "next";
import {
  SectionHead,
  ButtonLink,
  PageHero,
  ClosingCta,
  ArrowIcon,
} from "@/components/sections/Shared";
import { SITE_URL, BUSINESS, POLICY_SECTIONS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Store Policies",
  description:
    "Store policies for Washworld Coin Laundry: machine use, hygiene, hours and conduct, parking, unattended laundry, and our liability limits.",
  alternates: { canonical: "/policies" },
  openGraph: {
    title: "Store Policies | Washworld Coin Laundry",
    description:
      "Machine use, hygiene, hours, parking, abandoned laundry and liability limits.",
    url: `${SITE_URL}/policies`,
    type: "website",
  },
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="The house rules"
        title="Store"
        highlight="policies"
        image="/images/facility/facility-3.jpg"
        imageAlt="The main aisle at Washworld Coin Laundry Toronto"
        actions={
          <>
            <ButtonLink href="/faq">
              Read the FAQ <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/contact" variant="soft">
              Contact us
            </ButtonLink>
          </>
        }
      >
        These rules keep the shop safe, clean and fair for everyone using it.
        Short version: check the drum before you load, be there when your cycle
        ends, and tell staff straight away if something goes wrong.
      </PageHero>

      {POLICY_SECTIONS.map((section, index) => (
        <section
          key={section.title}
          className={`px-5 py-16 md:px-8 md:py-20 lg:px-12 ${
            index % 2 === 1 ? "border-y border-border bg-secondary" : ""
          }`}
        >
          <div className="mx-auto max-w-[1200px]">
            <SectionHead
              eyebrow={`Policy ${index + 1}`}
              title={section.title}
            />
            <dl className="grid max-w-3xl gap-6">
              {section.items.map(([term, detail]) => (
                <div key={term}>
                  <dt className="font-heading text-[1.05rem] font-bold">
                    {term}
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <ClosingCta
        title="Questions about any of this?"
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
        Staff are on site every day and happy to walk you through anything before
        you start a load.
      </ClosingCta>
    </>
  );
}
