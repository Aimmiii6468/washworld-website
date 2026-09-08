/**
 * Small inline icon set.
 *
 * These are hand-drawn rather than pulled from lucide so the amenity row can
 * name things the shop actually has (a vending machine, a coin changer) instead
 * of borrowing an approximate icon.
 */

export type IconName =
  | "wifi"
  | "air"
  | "vending"
  | "parking"
  | "detergent"
  | "coin"
  | "check"
  | "arrow"
  | "play"
  | "pause"
  | "pin"
  | "phone"
  | "mail"
  | "clock"
  | "truck"
  | "washer"
  | "basket"
  | "hanger"
  | "sparkle"
  | "tag"
  | "info"
  | "machine"
  | "shield"
  | "doc"
  | "users"
  | "frame"
  | "building";

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
  pause: (
    <>
      <rect x="6.5" y="5" width="3.6" height="14" rx="1" />
      <rect x="13.9" y="5" width="3.6" height="14" rx="1" />
    </>
  ),
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
  truck: (
    <>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18.5" r="1.7" />
      <circle cx="17" cy="18.5" r="1.7" />
    </>
  ),
  washer: (
    <>
      <rect x="4" y="2.5" width="16" height="19" rx="2.5" />
      <path d="M4 7h16" />
      <circle cx="12" cy="14" r="4.2" />
      <path d="M8.4 12.6c1.2 1 2.4 1 3.6 0s2.4-1 3.6 0" />
    </>
  ),
  basket: (
    <>
      <path d="M3 8h18l-1.7 11.2a2 2 0 0 1-2 1.8H6.7a2 2 0 0 1-2-1.8z" />
      <path d="m8 8 2.5-5M16 8l-2.5-5" />
    </>
  ),
  hanger: (
    <>
      <path d="M12 8a2.4 2.4 0 1 1 2.4-2.4" />
      <path d="M12 8v2.2L3.6 16a1.4 1.4 0 0 0 .8 2.6h15.2a1.4 1.4 0 0 0 .8-2.6L12 10.2" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.2 13.7 9 19.5 10.7 13.7 12.4 12 18.2 10.3 12.4 4.5 10.7 10.3 9z" />
      <path d="M18.5 16.5 19.2 18.8 21.5 19.5 19.2 20.2 18.5 22.5 17.8 20.2 15.5 19.5 17.8 18.8z" />
    </>
  ),
  tag: (
    <>
      <path d="M11.5 3H21v9.5l-9 9L2.5 12z" />
      <circle cx="16.5" cy="7.5" r="1.4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.8" r="0.9" />
    </>
  ),
  machine: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 20 6v6.2c0 4.6-3.3 7.6-8 9-4.7-1.4-8-4.4-8-9V6z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  doc: (
    <>
      <path d="M14 2.8H7a2 2 0 0 0-2 2v14.4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.8z" />
      <path d="M14 2.8V7.8h5M8.6 12.5h6.8M8.6 16.2h4.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9.2" cy="8.2" r="3.4" />
      <path d="M2.8 20a6.4 6.4 0 0 1 12.8 0" />
      <path d="M16.4 5.2a3.4 3.4 0 0 1 0 6.6M17.6 14.4A6.4 6.4 0 0 1 21.2 20" />
    </>
  ),
  frame: (
    <>
      <rect x="3" y="3.5" width="18" height="17" rx="2" />
      <path d="m6.5 16.5 3.6-4.4 2.6 3 2.2-2.4 2.6 3.8" />
      <circle cx="9" cy="8" r="1.3" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V21" />
      <path d="M15 10h3.5a2 2 0 0 1 2 2v9M2.5 21h19" />
      <path d="M8 8h3M8 12h3M8 16h3" />
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
