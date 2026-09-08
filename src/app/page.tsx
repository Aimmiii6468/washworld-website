import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LiteYouTube from "@/components/LiteYouTube";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import Icon from "@/components/ui/Icon";
import {
  Eyebrow,
  SectionHead,
  ButtonLink,
  Faq,
  PriceList,
  Stars,
  CurbsideBand,
  ArrowIcon,
} from "@/components/sections/Shared";
import {
  BUSINESS,
  GOOGLE_RATING,
  SELF_SERVE_PRICES,
  WASH_FOLD_PRICES,
  DRY_CLEAN_PRICES,
  AMENITIES,
  VIDEOS,
  GALLERY,
  HOME_FAQ,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Coin Laundry in Toronto | Washworld, 150 Kenwood Ave",
  description:
    "Self-serve laundry, wash and fold, and dry cleaning at 150 Kenwood Ave near St. Clair West. Open every day 8AM to 10PM with free parking and free Wi-Fi.",
  alternates: { canonical: "/" },
};

const SERVICES = [
  {
    icon: "washer" as const,
    title: "Self-serve laundry",
    href: "/services/self-serve",
    img: "/images/services/service-1.jpg",
    alt: "Self-serve laundry at Washworld in Toronto",
    copy: "Coin, cash and Interac e-Transfer accepted at every machine, with a change machine on site. Washers in three sizes, including large loads for duvets.",
    fromLabel: "Washers from",
    from: "$2.25",
  },
  {
    icon: "basket" as const,
    title: "Wash, dry & fold",
    href: "/services/wash-and-fold",
    img: "/images/services/service-2.jpg",
    alt: "Wash, dry and fold service in Toronto",
    copy: "Drop your bag at the counter and pick it up sorted, washed, dried and folded. Priced by the pound with no minimum order.",
    fromLabel: "Per pound",
    from: "$1.65",
  },
  {
    icon: "hanger" as const,
    title: "Dry cleaning",
    href: "/services/dry-cleaning",
    img: "/images/facility/facility-5.jpg",
    alt: "Dry cleaning service in Toronto",
    copy: "Shirts, blouses, suits, dresses and winter coats, cleaned and pressed. Twelve item types, each priced individually with no hidden fees.",
    fromLabel: "Shirts from",
    from: "$4.00",
  },
] as const;

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ.map((item) => ({
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
            <Eyebrow dot>Open every day, 8AM to 10PM</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.3rem,4.6vw,3.5rem)]">
              The coin laundry Toronto actually{" "}
              <span className="text-aurora">recommends</span>.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[1.13rem] text-muted-foreground">
              Self-serve washers and dryers, wash and fold by the pound, and dry
              cleaning, all at {BUSINESS.streetAddress} near {BUSINESS.nearby}.
              Free parking, free Wi-Fi, and a floor that stays clean all day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={BUSINESS.mapsUrl} external>
                Get directions <ArrowIcon />
              </ButtonLink>
              <ButtonLink href="#prices" variant="soft">
                See laundry prices
              </ButtonLink>
            </div>

            <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
              {[
                { t: `${GOOGLE_RATING.score} ★`, d: `${GOOGLE_RATING.count} Google reviews` },
                { t: "Daily", d: "8AM to 10PM, last wash 9PM" },
                { t: "Free", d: "Customer parking on site" },
                { t: "Free", d: "High-speed Wi-Fi" },
              ].map((item) => (
                <div key={item.d}>
                  <dt className="font-heading text-[1.15rem] font-extrabold tabular-nums">
                    {item.t}
                  </dt>
                  <dd className="text-[0.83rem] text-muted-foreground">
                    {item.d}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <Image
              src="/images/facility/facility-4.jpg"
              alt="Inside Washworld Coin Laundry on Kenwood Ave in Toronto"
              width={1024}
              height={768}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="shadow-aurora aspect-[4/3] w-full rounded-[34px] object-cover"
            />
            <div className="absolute -left-2 bottom-6 flex items-center gap-3 rounded-[18px] border border-white/90 bg-white/90 px-4 py-3.5 shadow-card-lg backdrop-blur-md sm:-left-4">
              <div>
                <b className="block font-heading text-2xl leading-none">
                  {GOOGLE_RATING.score}
                </b>
                <Stars />
              </div>
              <small className="text-[0.76rem] text-muted-foreground">
                Rated by {GOOGLE_RATING.count}
                <br />
                Toronto customers
              </small>
            </div>
            <div className="absolute -right-2 top-6 rounded-[18px] border border-white/90 bg-white/90 px-4 py-3.5 shadow-card-lg backdrop-blur-md sm:-right-3">
              <b className="block font-heading text-2xl leading-none">
                $1.65<small className="text-[0.76rem] font-medium">/lb</small>
              </b>
              <small className="text-[0.76rem] text-muted-foreground">
                Wash, dry &amp; fold
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section id="services" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Laundry services in Toronto"
            title="Three ways to get your laundry done"
          >
            Whether you want to run the machines yourself, drop a bag at the
            counter, or never leave home at all, it is the same equipment and the
            same detergents.
          </SectionHead>

          <div className="grid gap-5 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="flex flex-col overflow-hidden rounded-[26px] border border-border bg-white shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-lg"
              >
                <Image
                  src={service.img}
                  alt={service.alt}
                  width={800}
                  height={550}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="aspect-[16/11] w-full object-cover"
                />
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="flex items-center gap-3 text-[1.3rem]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <Icon name={service.icon} />
                    </span>
                    {service.title}
                  </h3>
                  <p className="text-[0.96rem] text-muted-foreground">
                    {service.copy}
                  </p>
                  <div className="mt-auto flex items-baseline justify-between border-t border-border pt-4">
                    <span className="text-[0.82rem] text-muted-foreground">
                      {service.fromLabel}
                    </span>
                    <b className="font-heading text-[1.2rem] tabular-nums text-primary">
                      {service.from}
                    </b>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5">
            <CurbsideBand />
          </div>
        </div>
      </section>

      {/* ---------------- PRICES ---------------- */}
      <section
        id="prices"
        className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Transparent pricing"
            title={`Laundry prices at ${BUSINESS.streetAddress}`}
          >
            No membership, no app, no surprise charges at the counter. Machine
            prices vary slightly with load size, so the display on the machine is
            always the final word.
          </SectionHead>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="flex flex-col rounded-[26px] border border-border bg-white p-7 shadow-card">
              <h3 className="text-[1.3rem]">Self-serve</h3>
              <p className="mt-1 text-[0.92rem] text-muted-foreground">
                Pay at the machine.
              </p>
              <PriceList
                rows={SELF_SERVE_PRICES.map((row) => ({
                  label: row.label,
                  sub: row.sub,
                  price: row.price,
                }))}
              />
              <div className="mt-7" />
              <ButtonLink
                href="/services/self-serve"
                variant="soft"
                className="mt-auto w-full"
              >
                Self-serve details
              </ButtonLink>
            </div>

            <div className="flex flex-col rounded-[26px] bg-white p-7 shadow-[0_30px_60px_-34px_rgb(79_70_229/0.55)] outline outline-2 outline-primary">
              <h3 className="text-[1.3rem]">Wash, dry &amp; fold</h3>
              <p className="mt-1 text-[0.92rem] text-muted-foreground">
                Priced by weight, no minimum.
              </p>
              <PriceList rows={WASH_FOLD_PRICES} />
              <div className="mt-7" />
              <ButtonLink
                href={BUSINESS.mapsUrl}
                external
                className="mt-auto w-full"
              >
                Drop off today
              </ButtonLink>
            </div>

            <div className="flex flex-col rounded-[26px] border border-border bg-white p-7 shadow-card">
              <h3 className="text-[1.3rem]">Dry cleaning</h3>
              <p className="mt-1 text-[0.92rem] text-muted-foreground">
                Priced per item.
              </p>
              <PriceList rows={DRY_CLEAN_PRICES} />
              <div className="mt-7" />
              <ButtonLink
                href="/services/dry-cleaning"
                variant="soft"
                className="mt-auto w-full"
              >
                See all items
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- WHY US ---------------- */}
      <section id="why" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Why Washworld"
            title="A laundromat you do not mind waiting in"
          >
            Most people pick a laundromat once and stick with it. These are the
            reasons our customers in {BUSINESS.neighbourhood}, Forest Hill and
            across Central Toronto keep coming back.
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

      {/* ---------------- VIDEO TOUR ---------------- */}
      <section
        id="video"
        className="bg-ink-dark px-5 py-16 text-white md:px-8 md:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Video tour"
            title="See the shop before you come"
            tone="dark"
          >
            Short clips of the floor, the machines and the folding area. Tap any
            tile to play. Nothing loads until you press play, so the page stays
            fast.
          </SectionHead>

          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[220px] lg:grid-cols-4">
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                className={`relative overflow-hidden rounded-[26px] ${
                  video.span === "tall" ? "row-span-2" : "col-span-2"
                }`}
              >
                <LiteYouTube videoId={video.id} title={video.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section id="gallery" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead eyebrow="Photo gallery" title="Inside Washworld">
            Framed artwork on every wall, wide aisles, and a floor that gets
            cleaned all day, not just at closing.
          </SectionHead>

          <div className="grid auto-rows-[170px] grid-cols-2 gap-4 md:auto-rows-[200px] lg:grid-cols-4">
            {GALLERY.map((photo) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-[26px] ${
                  photo.span === "feature"
                    ? "col-span-2 row-span-2"
                    : photo.span === "wide"
                      ? "col-span-2"
                      : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- REVIEWS ---------------- */}
      <section
        id="reviews"
        className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow={`${GOOGLE_RATING.score} out of 5 · ${GOOGLE_RATING.count} Google reviews`}
            title="What our Toronto customers say"
          />
          <ReviewsCarousel />

          <div className="mt-8">
            <ButtonLink href={BUSINESS.reviewsUrl} external variant="soft">
              Read all reviews on Google
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="Questions we get asked"
            title="Frequently asked questions"
          />
          <Faq items={HOME_FAQ} />
        </div>
      </section>

      {/* ---------------- LOCATION ---------------- */}
      <section
        id="location"
        className="border-t border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Find us</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.7rem)]">
              {BUSINESS.streetAddress} {BUSINESS.addressLocality}
            </h2>
            <p className="mt-4 text-muted-foreground">
              Near {BUSINESS.nearby} in {BUSINESS.neighbourhood}. Serving Forest
              Hill, Rosedale and Central Toronto seven days a week.
            </p>

            <dl className="mt-7 border-t border-border">
              {[
                { k: "Monday to Sunday", v: BUSINESS.hoursDisplay },
                { k: "Last wash", v: BUSINESS.lastWashDisplay },
                { k: "Phone", v: BUSINESS.phoneDisplay },
                { k: "Email", v: BUSINESS.email },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex justify-between gap-4 border-b border-border py-3.5 text-[0.96rem]"
                >
                  <dt>{row.k}</dt>
                  <dd className="font-semibold tabular-nums">{row.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={BUSINESS.mapsUrl} external>
                Open in Google Maps
              </ButtonLink>
              <ButtonLink href={BUSINESS.phoneHref} variant="soft">
                Call the shop
              </ButtonLink>
            </div>
          </div>

          <div className="h-[420px] overflow-hidden rounded-[34px] border-4 border-white shadow-card-lg">
            <iframe
              src={BUSINESS.mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing ${BUSINESS.name} at ${BUSINESS.streetAddress}, Toronto`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
