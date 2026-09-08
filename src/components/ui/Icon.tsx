/**
 * Small inline icon set.
 *
 * These are hand-drawn rather than pulled from lucide so the amenity row can
 * name things the shop actually has (a vending machine, a coin changer) instead
 * of borrowing an approximate icon.
 */

type IconName =
  | "wifi"
  | "air"
  | "vending"
  | "parking"
  | "detergent"
  | "coin"
  | "check"
  | "arrow"
  | "play"
  | "pin"
  | "phone"
  | "mail"
  | "clock";

const PATHS: Record<IconName, React.ReactNode> = {
  wifi: (
    <>
      <path d="M5 12.5a10 10 0 0 1 14 0" />
      <path d="M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19.5" r="1" />
    </>
  ),
  air: (
    <>
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" />
    </>
  ),
  vending: (
    <>
      <path d="M8 3h8l1 4H7z" />
      <path d="M6 7h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
      <path d="M10 12h4" />
    </>
  ),
  parking: (
    <>
      <path d="M5 17h14M6 17V9l2-4h8l2 4v8" />
      <circle cx="8" cy="17" r="1.6" />
      <circle cx="16" cy="17" r="1.6" />
    </>
  ),
  detergent: (
    <>
      <path d="M7 4h10l1 6H6z" />
      <path d="M6 10h12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
    </>
  ),
  coin: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  play: <path d="M8 5v14l11-7z" />,
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l1.5 5-2 1.5a13 13 0 0 0 5.5 5.5l1.5-2 5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
};

export default function Icon({
  name,
  size = 20,
  className = "",
  filled = false,
}: {
  name: IconName;
  size?: number;
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
