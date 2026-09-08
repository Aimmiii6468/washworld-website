import Image from "next/image";
import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import {
  Eyebrow,
  SectionHead,
  ButtonLink,
  Faq,
  ArrowIcon,
} from "@/components/sections/Shared";
import {
  SITE_URL,
  BUSINESS,
  SELF_SERVE_PRICES,
  SELF_SERVE_RULES,
  AMENITIES,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Self-Serve Laundry in Toronto",
  description:
    "Self-serve coin laundry at 150 Kenwood Ave, Toronto. Washers from $2.25 in three sizes, dryers $0.25, cash, coin and Interac e-Transfer. Open daily 8AM to 10PM.",
  alternates: { canonical: "/services/self-serve" },
  openGraph: {
    title: "Self-Serve Laundry in Toronto | Washworld Coin Laundry",
    description:
      "Washers in three sizes from $2.25, hot gas dryers, free Wi-Fi and free parking near St. Clair West.",
    url: `${SITE_URL}/services/self-serve`,
    type: "website",
  },
};

const STEPS = [
  { n: "1", title: "Check the drum", desc: "A quick look before you load saves a ruined wash" },
  { n: "2", title: "Load and pay", desc: "Cash, coin or Interac e-Transfer at the machine" },
  { n: "3", title: "Wait in comfort", desc: "Free Wi-Fi, air conditioning and seating" },
  { n: "4", title: "Dry and fold", desc: "Folding tables are free for anyone to use" },
] as const;

const MACHINE_CARDS = [
  {
    title: "Standard wash",
    blurb: "Everyday loads, one to two baskets.",
    price: "$2.25",
    cycle: "~28 min",
    best: "Weekly clothes",
    highlight: false,
  },
  {
    title: "Large wash",
    blurb: "Towels, sheets and family loads.",
    price: "$5.00",
    cycle: "~32 min",
    best: "Bedding and towels",
    highlight: true,
  },
  {
    title: "Extra large wash",
    blurb: "Duvets, comforters, sleeping bags.",
    price: "$8.00",
    cycle: "~38 min",
    best: "King duvets",
    highlight: false,
  },
] as const;

export default function SelfServePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SELF_SERVE_RULES.map((item) => ({
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

      {/* ---------------- HERO ---------------- */}
      <section className="bg-aurora-hero relative overflow-hidden pt-12 md:pt-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
          <div>
            <Eyebrow dot>No app, no account, no membership</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.2rem,4.6vw,3.4rem)]">
              Self-serve laundry in <span className="text-aurora">Toronto</span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-[1.13rem] text-muted-foreground">
              Washers in three sizes, hot gas dryers, and a clean floor with
              somewhere to sit. Pay at the machine with cash, coin or Interac
              e-Transfer at {BUSINESS.streetAddress} near {BUSINESS.nearby}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#prices">
                See prices <ArrowIcon />
              </ButtonLink>
              <ButtonLink href={BUSINESS.mapsUrl} external variant="soft">
                Get directions
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/facility/facility-3.jpg"
              alt="Self-serve washers along the main aisle at Washworld Coin Laundry Toronto"
              width={1024}
              height={768}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="shadow-aurora aspect-[4/3] w-full rounded-[34px] object-cover"
            />
            <div className="absolute -right-2 bottom-6 rounded-[18px] border border-white/90 bg-white/90 px-4 py-3.5 shadow-card-lg backdrop-blur-md sm:-right-3">
              <b className="block font-heading text-2xl leading-none">$2.25</b>
              <small className="text-[0.76rem] text-muted-foreground">
                Standard wash
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MACHINE PRICES ---------------- */}
      <section id="prices" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Self-serve prices"
            title="Pick the machine that fits the load"
          >
            Small weekly loads go in the standard washers. Bedding, curtains and
            comforters go in the largest machines, which spin hard enough to cut
            your dryer time.
          </SectionHead>

          <div className="grid gap-5 lg:grid-cols-3">
            {MACHINE_CARDS.map((card) => (
              <div
                key={card.title}
                className={
                  card.highlight
                    ? "flex flex-col rounded-[26px] bg-white p-7 shadow-[0_30px_60px_-34px_rgb(79_70_229/0.55)] outline outline-2 outline-primary"
                    : "flex flex-col rounded-[26px] border border-border bg-white p-7 shadow-card"
                }
              >
                <h3 className="text-[1.3rem]">{card.title}</h3>
                <p className="mt-1 text-[0.92rem] text-muted-foreground">
                  {card.blurb}
                </p>
                <dl className="mt-6 list-none p-0">
                  {[
                    { k: "Price per wash", v: card.price },
                    { k: "Typical cycle", v: card.cycle },
                    { k: "Best for", v: card.best },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex items-baseline justify-between gap-4 border-b border-border py-2.5 text-[0.94rem] last:border-b-0"
                    >
                      <dt>{row.k}</dt>
                      <dd className="whitespace-nowrap font-heading font-bold tabular-nums">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Dryers", d: "$0.25 per 3 or 4 minute block" },
              { t: "Payment", d: "Cash, coin, Interac e-Transfer" },
              { t: "Change machine", d: "Bills to quarters, on site" },
              { t: "Supplies", d: "Detergent and softener at the counter" },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-[18px] border border-border bg-white p-6"
              >
                <b className="block font-heading text-base">{item.t}</b>
                <span className="text-[0.86rem] text-muted-foreground">
                  {item.d}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-x-auto rounded-[26px] border border-border bg-white">
            <table className="w-full border-collapse text-left text-[0.95rem]">
              <caption className="sr-only">
                Self-serve washer and dryer prices at Washworld Coin Laundry
              </caption>
              <thead>
                <tr className="border-b border-border bg-secondary font-heading text-[0.78rem] uppercase tracking-wider text-muted-foreground">
                  <th scope="col" className="px-6 py-3 font-bold">
                    Machine
                  </th>
                  <th scope="col" className="px-6 py-3 text-right font-bold">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-right font-bold">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {SELF_SERVE_PRICES.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-border last:border-b-0"
                  >
                    <th scope="row" className="px-6 py-3 font-normal">
                      {row.label}
                      {row.sub && (
                        <span className="block text-[0.8rem] text-muted-foreground">
                          {row.sub}
                        </span>
                      )}
                    </th>
                    <td className="px-6 py-3 text-right font-heading font-bold tabular-nums">
                      {row.price}
                    </td>
                    <td className="px-6 py-3 text-right text-muted-foreground">
                      {row.cycle}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="How it works" title="Four steps, about an hour" />
          <ol className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li
                key={step.n}
                className="rounded-[18px] border border-border bg-white p-6"
              >
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-secondary font-heading text-[1.05rem] font-extrabold text-primary">
                  {step.n}
                </span>
                <b className="block font-heading text-base">{step.title}</b>
                <span className="text-[0.86rem] text-muted-foreground">
                  {step.desc}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- AMENITIES ---------------- */}
      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="While you wait"
            title="Everything on the floor while your load runs"
          >
            You are not stuck staring at a wall for forty minutes. The lounge
            area has seating, folding tables and fast Wi-Fi.
          </SectionHead>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((item) => (
              <div
                key={item.title}
                className="rounded-[18px] border border-border bg-white p-6"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                  <Icon name={item.icon} />
                </div>
                <b className="block font-heading text-base">{item.title}</b>
                <span className="text-[0.86rem] text-muted-foreground">
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- RULES ---------------- */}
      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Before you start"
            title="Self-serve rules, in plain language"
          >
            Short version: check the drum before you load, be there when your
            cycle ends, and do not dye anything in our machines.
          </SectionHead>
          <Faq items={SELF_SERVE_RULES} />
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center">
          <Eyebrow dot>Open today until 10:00 PM</Eyebrow>
          <h2 className="max-w-[20ch] text-[clamp(1.9rem,3.6vw,2.7rem)]">
            Bring the basket, we handle the rest
          </h2>
          <p className="max-w-[52ch] text-muted-foreground">
            {BUSINESS.streetAddress} {BUSINESS.addressLocality}. Free customer
            parking at the door.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Get directions <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/" variant="soft">
              Back to home
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
