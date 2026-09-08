import Link from "next/link";
import NextImage from "next/image";
import Icon, { type IconName } from "@/components/ui/Icon";
import { BUSINESS } from "@/lib/site";

/** Rounded icon tile used above card titles and beside section headings. */
export function IconTile({
  name,
  tone = "light",
}: {
  name: IconName;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
        tone === "dark" ? "bg-white/10 text-white" : "bg-secondary text-primary"
      }`}
    >
      <Icon name={name} />
    </span>
  );
}

/** Small pill used above every section heading. */
export function Eyebrow({
  children,
  tone = "light",
  dot = false,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  dot?: boolean;
}) {
  const styles =
    tone === "dark"
      ? "bg-white/10 text-[#c4beff] border-white/15"
      : "bg-secondary text-primary border-border";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-heading text-[0.76rem] font-bold ${styles}`}
    >
      {dot && (
        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--ok)]" />
      )}
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
  tone = "light",
  icon,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
  icon?: IconName;
}) {
  return (
    <div className="mb-11 max-w-3xl">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 flex items-center gap-3 text-[clamp(1.9rem,3.6vw,2.7rem)] ${tone === "dark" ? "text-white" : ""}`}
      >
        {icon && <IconTile name={icon} tone={tone} />}
        {title}
      </h2>
      {children && (
        <p
          className={`mt-4 max-w-[60ch] text-[1.06rem] ${tone === "dark" ? "text-[#a8a5ce]" : "text-muted-foreground"}`}
        >
          {children}
        </p>
      )}
    </div>
  );
}

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-heading text-[0.94rem] font-bold transition-transform";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "soft";
  external?: boolean;
  className?: string;
}) {
  const look =
    variant === "primary"
      ? "bg-aurora text-white shadow-[0_12px_26px_-12px_rgb(79_70_229/0.75)] hover:-translate-y-0.5"
      : "border border-border bg-white text-foreground shadow-card hover:-translate-y-0.5 hover:border-primary hover:text-primary";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${BTN_BASE} ${look} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${BTN_BASE} ${look} ${className}`}>
      {children}
    </Link>
  );
}

/** Accessible accordion built on native details/summary, no JavaScript needed. */
export function Faq({
  items,
}: {
  items: readonly { readonly q: string; readonly a: string }[];
}) {
  return (
    <div className="grid max-w-3xl gap-3">
      {items.map((item, index) => (
        <details
          key={item.q}
          open={index === 0}
          className="group rounded-[18px] border border-border bg-white shadow-card"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-heading text-[1.03rem] font-bold [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              className="shrink-0 text-2xl leading-none text-primary"
              aria-hidden="true"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">&minus;</span>
            </span>
          </summary>
          <p className="px-6 pb-6 text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function PriceList({
  rows,
}: {
  rows: readonly {
    readonly label: string;
    readonly sub: string | null;
    readonly price: string;
  }[];
}) {
  return (
    <ul className="mt-6 list-none p-0">
      {rows.map((row) => (
        <li
          key={row.label}
          className="flex items-baseline justify-between gap-4 border-b border-border py-2.5 text-[0.94rem] last:border-b-0"
        >
          <span>
            {row.label}
            {row.sub && (
              <span className="block text-[0.78rem] text-muted-foreground">
                {row.sub}
              </span>
            )}
          </span>
          <b className="whitespace-nowrap font-heading tabular-nums">
            {row.price}
          </b>
        </li>
      ))}
    </ul>
  );
}

export function Stars({ count = 5 }: { count?: number }) {
  return (
    <span
      className="text-[0.9rem] tracking-[0.08em] text-[color:var(--color-warning)]"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {"★".repeat(count)}
    </span>
  );
}

export function ArrowIcon() {
  return <Icon name="arrow" size={16} />;
}

/** Standard inner-page hero: gradient wash, eyebrow, H1, lede, CTAs, photo. */
export function PageHero({
  eyebrow,
  title,
  highlight,
  children,
  image,
  imageAlt,
  badge,
  actions,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  badge?: { value: string; label: string };
  actions: React.ReactNode;
}) {
  return (
    <section className="bg-aurora-hero relative overflow-hidden pt-12 md:pt-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 pb-16 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
        <div>
          <Eyebrow dot>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-[clamp(2.1rem,4.4vw,3.3rem)]">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-aurora">{highlight}</span>
              </>
            )}
          </h1>
          <p className="mt-6 max-w-[52ch] text-[1.13rem] text-muted-foreground">
            {children}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
        </div>

        <div className="relative">
          <NextImage
            src={image}
            alt={imageAlt}
            width={1024}
            height={768}
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="shadow-aurora aspect-[4/3] w-full rounded-[34px] object-cover"
          />
          {badge && (
            <div className="absolute -right-2 bottom-6 rounded-[18px] border border-white/90 bg-white/90 px-4 py-3.5 shadow-card-lg backdrop-blur-md sm:-right-3">
              <b className="block font-heading text-2xl leading-none">
                {badge.value}
              </b>
              <small className="text-[0.76rem] text-muted-foreground">
                {badge.label}
              </small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** Two-column price table with an accessible header row. */
export function PriceTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: [string, string, string];
  rows: readonly {
    readonly label: string;
    readonly sub: string | null;
    readonly price: string;
    readonly note?: string;
  }[];
}) {
  return (
    <div className="overflow-x-auto rounded-[26px] border border-border bg-white">
      <table className="w-full border-collapse text-left text-[0.95rem]">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border bg-secondary font-heading text-[0.78rem] uppercase tracking-wider text-muted-foreground">
            <th scope="col" className="px-6 py-3 font-bold">
              {columns[0]}
            </th>
            <th scope="col" className="px-6 py-3 text-right font-bold">
              {columns[1]}
            </th>
            <th scope="col" className="px-6 py-3 text-right font-bold">
              {columns[2]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-b-0">
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
                {row.note ?? "Per item"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Simple card grid used for feature and step rows. */
export function CardGrid({
  items,
  columns = 4,
}: {
  items: readonly {
    readonly title: string;
    readonly desc: string;
    readonly lead?: string;
    readonly icon?: IconName;
  }[];
  columns?: 3 | 4;
}) {
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
    >
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[18px] border border-border bg-white p-6"
        >
          {/* A step number wins over an icon: numbered cards are a sequence and
              swapping in pictures would lose the order. */}
          {item.lead ? (
            <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-secondary font-heading text-[1.05rem] font-extrabold text-primary">
              {item.lead}
            </span>
          ) : (
            item.icon && (
              <span className="mb-4 block">
                <IconTile name={item.icon} />
              </span>
            )
          )}
          <b className="block font-heading text-base">{item.title}</b>
          <span className="text-[0.86rem] text-muted-foreground">
            {item.desc}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Pickup and delivery band.
 *
 * Washworld owns Curbside Laundry, so anyone who lands here wanting laundry
 * done without leaving the house has somewhere to go. The old site said the
 * same thing on the homepage only; this component puts it on every service and
 * pricing page, since that is where a "can you just come and get it" visitor
 * actually ends up.
 */
export function CurbsideBand({
  title = "Too busy? We collect it from your door",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-aurora shadow-aurora grid items-center gap-7 rounded-[34px] p-7 text-white md:grid-cols-[1fr_auto] md:p-10">
      <div>
        <Eyebrow tone="dark">Laundry pickup &amp; delivery</Eyebrow>
        <h2 className="mt-4 flex items-center gap-3 text-[clamp(1.6rem,3vw,2.2rem)] text-white">
          <IconTile name="truck" tone="dark" />
          {title}
        </h2>
        <p className="mt-3 max-w-[54ch] text-white/85">
          {children ??
            "Washworld also runs Curbside Laundry, our own pickup and delivery service across Toronto. Book a window online and get it back clean and folded."}
        </p>
      </div>
      <a
        href={BUSINESS.curbsideUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-heading text-[0.94rem] font-bold text-primary shadow-card-lg transition-transform hover:-translate-y-0.5"
      >
        Schedule a pickup <ArrowIcon />
      </a>
    </div>
  );
}

/** Closing call to action used at the bottom of every inner page. */
export function ClosingCta({
  title,
  children,
  actions,
}: {
  title: string;
  children: React.ReactNode;
  actions: React.ReactNode;
}) {
  return (
    <section className="border-t border-border bg-secondary px-5 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center">
        <Eyebrow dot>Open today until 10:00 PM</Eyebrow>
        <h2 className="max-w-[22ch] text-[clamp(1.9rem,3.6vw,2.7rem)]">
          {title}
        </h2>
        <p className="max-w-[54ch] text-muted-foreground">{children}</p>
        <div className="flex flex-wrap justify-center gap-3">{actions}</div>
      </div>
    </section>
  );
}
