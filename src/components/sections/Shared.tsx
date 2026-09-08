import Link from "next/link";
import Icon from "@/components/ui/Icon";

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
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mb-11 max-w-3xl">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 text-[clamp(1.9rem,3.6vw,2.7rem)] ${tone === "dark" ? "text-white" : ""}`}
      >
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
