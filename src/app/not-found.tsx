import type { Metadata } from "next";
import { ButtonLink } from "@/components/sections/Shared";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-aurora-hero px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center">
        <span className="font-heading text-[clamp(3.5rem,10vw,6rem)] font-extrabold leading-none text-aurora">
          404
        </span>
        <h1 className="max-w-[18ch] text-[clamp(1.7rem,3.4vw,2.4rem)]">
          That page went missing in the wash
        </h1>
        <p className="max-w-[52ch] text-muted-foreground">
          The page you were looking for is not here. The shop is still open every
          day from 8:00 AM to 10:00 PM at 150 Kenwood Ave, Toronto.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/services/self-serve" variant="soft">
            Self-serve laundry
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
