import Image from "next/image";
import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import {
  SectionHead,
  ButtonLink,
  PageHero,
  ClosingCta,
  CurbsideBand,
  ArrowIcon,
} from "@/components/sections/Shared";
import {
  SITE_URL,
  BUSINESS,
  AMENITIES,
  GOOGLE_RATING,
  GALLERY,
} from "@/lib/site";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Our Toronto Laundromat, Open Since the 1980s",
  description:
    "Washworld has washed Wychwood-Humewood's laundry since the 1980s. Clean machines, art on every wall, free parking, 4.4 stars from 128 Google reviews.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Washworld Coin Laundry, Toronto",
    description:
      "A neighbourhood laundromat in Wychwood-Humewood with clean machines, free parking and art on the walls.",
    url: `${SITE_URL}/about`,
    type: "website",
  },
};

const CRUMBS = [
  { name: "About", path: "/about" },
] as const;

export default function AboutPage() {
  const schema = [
    breadcrumbSchema(CRUMBS),
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
        eyebrow={`${GOOGLE_RATING.score} stars from ${GOOGLE_RATING.count} reviews`}
        title="A Toronto laundromat since"
        highlight={BUSINESS.sinceDisplay}
        image="/images/facility/facility-2.jpg"
        imageAlt="The gallery wall above the machines at Washworld Coin Laundry Toronto"
        badge={{ value: "7 days", label: "Open every week" }}
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Come visit <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/prices" variant="soft">
              See prices
            </ButtonLink>
          </>
        }
      >
        Washworld has been washing this neighbourhood&rsquo;s laundry for over
        four decades. We sit in {BUSINESS.neighbourhood}, a short walk from{" "}
        {BUSINESS.nearby}, and most of our customers live on the surrounding
        streets.
      </PageHero>

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead
              eyebrow="What we are about"
              title="Laundry day should not feel like a punishment"
            >
              Most laundromats give you a strip light, a plastic chair and a
              machine that may or may not finish the cycle. We took a different
              view.
            </SectionHead>
            <div className="grid gap-4 text-muted-foreground">
              <p>
                Washworld opened here in {BUSINESS.sinceDisplay} and has been a
                fixture of {BUSINESS.neighbourhood} ever since. Toronto has
                changed a great deal in that time. What we are trying to do has
                not: keep a clean, safe, genuinely welcoming room where doing
                the laundry feels like part of the neighbourhood rather than a
                chore you dread.
              </p>
              <p>
                The floor gets cleaned all day rather than once at closing. The
                air conditioning runs through the summer. The Wi-Fi is fast
                enough to actually work on, and the parking outside is free while
                you are here.
              </p>
              <p>
                The walls are covered in framed artwork, watercolours, oils,
                acrylics and lithographs, because forty minutes staring at a
                blank wall is nobody&rsquo;s idea of a good afternoon.
              </p>
              <p>
                We also run Curbside Laundry, our own pickup and delivery service
                across Central Toronto, for the weeks when you cannot spare the
                hour at all.
              </p>
            </div>
          </div>

          <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[190px]">
            {GALLERY.slice(0, 4).map((photo) => (
              <div
                key={photo.src}
                className="relative overflow-hidden rounded-[26px]"
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

      <section className="border-y border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow="On the floor"
            title="What you get every single visit"
            icon="sparkle"
          />
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

      <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            eyebrow={`${GOOGLE_RATING.score} out of 5 · ${GOOGLE_RATING.count} Google reviews`}
            title="The neighbourhood's verdict"
          />
          <ReviewsCarousel />
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-[1200px]">
          <CurbsideBand />
        </div>
      </section>

      <ClosingCta
        title="Come see the place for yourself"
        actions={
          <>
            <ButtonLink href={BUSINESS.mapsUrl} external>
              Get directions <ArrowIcon />
            </ButtonLink>
            <ButtonLink href="/services/self-serve" variant="soft">
              Self-serve laundry
            </ButtonLink>
          </>
        }
      >
        {BUSINESS.streetAddress} {BUSINESS.addressLocality}, serving{" "}
        {BUSINESS.neighbourhood}, Forest Hill, Rosedale and Central Toronto.
      </ClosingCta>
    </>
  );
}
