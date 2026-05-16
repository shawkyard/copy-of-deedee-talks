// DD Talks — Navbar Component
// Cinematic Ember theme: deep black, amber/orange accents, Playfair + DM Sans

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { LOGO_URL } from "@/lib/data";
import TickerTape from "@/components/TickerTape";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/podcast", label: "Podcast" },
  { href: "/speaking", label: "Speaking" },
  { href: "/reflections", label: "Reflections" },
  { href: "/media-kit", label: "Media Kit" },
  { href: "/contact", label: "Contact" },
];

const AUDIENCE_LINKS = [
  { href: "/for-women-of-faith", label: "Women of Faith" },
  { href: "/for-podcast-fans", label: "Podcast Fans" },
  { href: "/for-event-planners", label: "Event Planners" },
  { href: "/for-media-press", label: "Media & Press" },
  { href: "/for-women-in-transition", label: "Women in Transition" },
  { href: "/for-friends-and-family", label: "Friends & Family" },
  { href: "/for-faith-communities", label: "Faith Communities" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [audienceOpen, setAudienceOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAudienceOpen(false);
  }, [location]);

  return (
    <>
      <TickerTape />
      <nav
        className="fixed left-0 right-0 z-50 transition-all duration-300"
        style={{
          top: "36px",
          background: scrolled
            ? "rgba(10,10,10,0.96)"
            : "rgba(10,10,10,0.70)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(249,115,22,0.18)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src={LOGO_URL}
                alt="DD Talks"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span style={{ display: "flex", alignItems: "baseline", gap: "0.08em" }}>
                  <span
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      fontSize: "1.65rem",
                      color: "#ffffff",
                      lineHeight: 1,
                      textShadow: "0 0 18px rgba(249,115,22,0.25)",
                    }}
                  >
                    DD
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.82rem",
                      color: "#E8A045",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      marginLeft: "0.15em",
                    }}
                  >
                    Talks
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.40)",
                    marginTop: "1px",
                  }}
                >
                  Denise Danberg
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="dd-nav-link"
                  style={{
                    color:
                      location === link.href
                        ? "#F97316"
                        : "rgba(255,255,255,0.70)",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Audience dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAudienceOpen(true)}
                onMouseLeave={() => setAudienceOpen(false)}
              >
                <button
                  className="dd-nav-link flex items-center gap-1"
                  style={{ color: audienceOpen ? "#F97316" : "rgba(255,255,255,0.70)" }}
                  onClick={() => setAudienceOpen(!audienceOpen)}
                >
                  For You
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`transition-transform duration-200 ${audienceOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                {/* Invisible bridge fills the gap so mouse doesn't leave the hover zone */}
                {audienceOpen && (
                  <div
                    className="absolute left-0 right-0"
                    style={{ top: "100%", height: "12px" }}
                  />
                )}
                <div
                  className="absolute right-0 w-52 py-2 rounded-xl"
                  style={{
                    top: "calc(100% + 8px)",
                    background: "rgba(15,15,15,0.98)",
                    border: "1px solid rgba(249,115,22,0.25)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.60)",
                    opacity: audienceOpen ? 1 : 0,
                    pointerEvents: audienceOpen ? "auto" : "none",
                    transform: audienceOpen ? "translateY(0)" : "translateY(-6px)",
                    transition: "opacity 180ms ease, transform 180ms ease",
                  }}
                >
                  {AUDIENCE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm transition-colors hover:text-orange-400"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "0.80rem",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "#F97316";
                        el.style.background = "rgba(249,115,22,0.07)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.color = "rgba(255,255,255,0.75)";
                        el.style.background = "transparent";
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link href="/speaking">
                <button className="dd-btn-primary" style={{ padding: "0.55rem 1.4rem", fontSize: "0.72rem" }}>
                  Book DD
                </button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="lg:hidden"
            style={{
              background: "rgba(10,10,10,0.98)",
              borderTop: "1px solid rgba(249,115,22,0.15)",
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2.5 text-sm"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color:
                      location === link.href
                        ? "#F97316"
                        : "rgba(255,255,255,0.75)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div
                style={{
                  borderTop: "1px solid rgba(249,115,22,0.12)",
                  paddingTop: "0.75rem",
                  marginTop: "0.75rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#F97316",
                    marginBottom: "0.5rem",
                  }}
                >
                  For You
                </p>
                {AUDIENCE_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-sm"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(255,255,255,0.65)",
                      fontSize: "0.78rem",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="pt-3">
                <Link href="/speaking">
                  <button className="dd-btn-primary w-full">Book DD to Speak</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
