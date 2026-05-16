// DD Talks — TickerTape Component
// Clean CSS marquee — no doubling, no overlap

import { Link } from "wouter";
import { APPLE_PODCASTS_URL, SPOTIFY_URL } from "@/lib/data";

const ITEMS = [
  { type: "dot" },
  { type: "text", text: "NEW EPISODE — Finding Grace in the Mess", href: APPLE_PODCASTS_URL, external: true, highlight: true },
  { type: "dot" },
  { type: "text", text: "75+ Episodes of Real, Faith-Filled Conversation", href: APPLE_PODCASTS_URL, external: true },
  { type: "dot" },
  { type: "text", text: "BOOK COMING SOON — Denise Danberg is Writing Her First Book", href: "/about", highlight: true },
  { type: "dot" },
  { type: "text", text: "Live Events — Stay Tuned & Get on the Mailing List", href: "/#mailing-list" },
  { type: "dot" },
  { type: "text", text: "PRAYER CENTER — DD Prays Over Every Request", href: "/contact", highlight: true },
  { type: "dot" },
  { type: "text", text: "Listen on Spotify — Subscribe & Never Miss an Episode", href: SPOTIFY_URL, external: true },
  { type: "dot" },
  { type: "text", text: "JOIN THE COMMUNITY — Blessings, Events & More", href: "/#mailing-list", highlight: true },
  { type: "dot" },
  { type: "text", text: "Faith. Family. Fire. — This Is DD Talks", href: "/about" },
  { type: "dot" },
  { type: "text", text: "SPEAKING EVENTS — Book Denise Danberg for Your Next Event", href: "/speaking", highlight: true },
  { type: "dot" },
  { type: "text", text: "By Grit & Grace — We Are Warriors Podcast", href: APPLE_PODCASTS_URL, external: true },
];

function renderItem(item: typeof ITEMS[0], key: string) {
  if (item.type === "dot") {
    return (
      <span
        key={key}
        style={{
          display: "inline-block",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          background: "rgba(249,115,22,0.60)",
          margin: "0 20px",
          verticalAlign: "middle",
          flexShrink: 0,
        }}
      />
    );
  }

  const textEl = (
    <span
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: item.highlight ? 600 : 400,
        fontSize: "0.70rem",
        letterSpacing: item.highlight ? "0.14em" : "0.05em",
        textTransform: item.highlight ? "uppercase" : "none",
        color: item.highlight ? "#F97316" : "rgba(255,255,255,0.75)",
        whiteSpace: "nowrap",
        display: "inline-block",
      }}
    >
      {item.text}
    </span>
  );

  if (!item.href) return <span key={key}>{textEl}</span>;

  if (item.external) {
    return (
      <a
        key={key}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "inline-block" }}
        className="ticker-link"
      >
        {textEl}
      </a>
    );
  }

  return (
    <Link key={key} href={item.href!} style={{ textDecoration: "none", display: "inline-block" }} className="ticker-link">
      {textEl}
    </Link>
  );
}

export default function TickerTape() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60]"
      style={{
        height: "34px",
        background: "#0a0a0a",
        borderBottom: "1px solid rgba(249,115,22,0.25)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left fade mask */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "60px",
          background: "linear-gradient(to right, #0a0a0a 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling track — uses CSS animation on a single row */}
      <div
        className="ticker-track"
        style={{
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          willChange: "transform",
          animation: "dd-ticker 80s linear infinite",
        }}
      >
        {/* Render items twice for seamless loop */}
        {ITEMS.map((item, i) => renderItem(item, `a-${i}`))}
        {ITEMS.map((item, i) => renderItem(item, `b-${i}`))}
      </div>

      {/* Right fade mask */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "60px",
          background: "linear-gradient(to left, #0a0a0a 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes dd-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-link:hover span {
          color: #F97316 !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
