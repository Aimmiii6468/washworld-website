import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/ui/Icon";
import { Eyebrow, ButtonLink } from "@/components/sections/Shared";
import { SITE_URL, BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us at 150 Kenwood Ave, Toronto",
  description:
    "Contact Washworld Coin Laundry in Toronto. Call (416) 652-9274, email us, or drop by 150 Kenwood Ave near St. Clair West. Open every day 8AM to 10PM.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Washworld Coin Laundry, Toronto",
    description:
      "Call, email or visit us at 150 Kenwood Ave near St. Clair West. Open daily 8AM to 10PM.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-aurora-hero px-5 pb-16 pt-12 md:px-8 md:pt-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <Eyebrow dot>Open today until 10:00 PM</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.1rem,4.4vw,3.3rem)]">
              Contact <span className="text-aurora">Washworld</span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-[1.13rem] text-muted-foreground">
              Question about a service, a price or an order? Send a message, give
              us a call, or just walk in. We are at {BUSINESS.streetAddress} near{" "}
              {BUSINESS.nearby}, every day of the week.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-5">
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-5 rounded-[26px] border border-border bg-white p-7 shadow-card transition-shadow hover:shadow-card-lg"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-transform group-hover:scale-110">
                  <Icon name="pin" size={22} />
                </span>
                <span>
                  <b className="mb-2 block font-heading text-xl">
                    Visit the shop
                  </b>
                  <span className="block text-muted-foreground">
                    {BUSINESS.streetAddress}
                    <br />
                    {BUSINESS.addressLocality}, {BUSINESS.addressRegion}{" "}
                    {BUSINESS.postalCode}
                  </span>
                  <span className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary">
                    Open in Google Maps <Icon name="arrow" size={15} />
                  </span>
                </span>
              </a>

              <div className="grid gap-5 sm:grid-cols-2">
                <a
                  href={BUSINESS.phoneHref}
                  className="group rounded-[26px] border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-lg"
                >
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary transition-transform group-hover:scale-110">
                    <Icon name="phone" size={20} />
                  </span>
                  <b className="block font-heading text-lg">Call us</b>
                  <span className="text-muted-foreground">
                    {BUSINESS.phoneDisplay}
                  </span>
                </a>
                <a
                  href={BUSINESS.emailHref}
                  className="group rounded-[26px] border border-border bg-white p-6 shadow-card transition-shadow hover:shadow-card-lg"
                >
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary transition-transform group-hover:scale-110">
                    <Icon name="mail" size={20} />
                  </span>
                  <b className="block font-heading text-lg">Email us</b>
                  <span className="break-all text-sm text-muted-foreground">
                    {BUSINESS.email}
                  </span>
                </a>
              </div>

              <div className="rounded-[26px] border border-border bg-white p-7 shadow-card">
                <div className="flex items-start gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                    <Icon name="clock" size={22} />
                  </span>
                  <div className="w-full">
                    <b className="mb-4 block font-heading text-xl">
                      Opening hours
                    </b>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">
                        Monday to Sunday
                      </span>
                      <b className="tabular-nums">{BUSINESS.hoursDisplay}</b>
                    </div>
                    <div className="mt-4 flex items-center justify-between rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-red-700">
                      <span className="font-heading text-sm font-bold uppercase tracking-wide">
                        Last wash
                      </span>
                      <b className="tabular-nums">
                        {BUSINESS.lastWashDisplay}
                      </b>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[320px] overflow-hidden rounded-[26px] border-4 border-white shadow-card-lg">
                <iframe
                  src={BUSINESS.mapEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing ${BUSINESS.name} at ${BUSINESS.streetAddress}, Toronto`}
                />
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/prices" variant="soft">
              See laundry prices
            </ButtonLink>
            <ButtonLink href="/commercial" variant="soft">
              Commercial enquiries
            </ButtonLink>
            <ButtonLink href="/faq" variant="soft">
              Read the FAQ
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
