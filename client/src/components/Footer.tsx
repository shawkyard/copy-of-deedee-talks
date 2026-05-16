// DD Talks — Footer Component
// Cinematic Ember theme

import { Link } from "wouter";
import { Instagram, Facebook } from "lucide-react";
import {
  LOGO_URL,
  APPLE_PODCASTS_URL,
  SPOTIFY_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  LINKTREE_URL,
} from "@/lib/data";

const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About DD" },
  { href: "/podcast", label: "Podcast" },
  { href: "/speaking", label: "Speaking" },
  { href: "/reflections", label: "Reflections" },
  { href: "/media-kit", label: "Media Kit" },
  { href: "/contact", label: "Contact" },
];

const AUDIENCE_NAV = [
  { href: "/for-women-of-faith", label: "Women of Faith" },
  { href: "/for-podcast-fans", label: "Podcast Fans" },
  { href: "/for-event-planners", label: "Event Planners" },
  { href: "/for-media-press", label: "Media & Press" },
  { href: "/for-women-in-transition", label: "Women in Transition" },
  { href: "/for-friends-and-family", label: "Friends & Family" },
  { href: "/for-faith-communities", label: "Faith Communities" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(249,115,22,0.15)",
      }}
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={LOGO_URL} alt="DD Talks" className="h-12 w-12 object-contain" />
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.08em" }}>
                  <span
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      fontSize: "1.75rem",
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
                      fontSize: "0.85rem",
                      color: "#E8A045",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      marginLeft: "0.15em",
                    }}
                  >
                    Talks
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.40)",
                  }}
                >
                  Denise Danberg
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.50)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              Real Conversations. Faith-Filled Courage. Grace for the Messy Middle.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dd-platform-btn"
                style={{ padding: "0.4rem 0.7rem" }}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dd-platform-btn"
                style={{ padding: "0.4rem 0.7rem" }}
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={APPLE_PODCASTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dd-platform-btn"
                style={{ padding: "0.4rem 0.7rem", fontSize: "0.65rem" }}
                aria-label="Apple Podcasts"
              >
                🎙️
              </a>
              <a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dd-platform-btn"
                style={{ padding: "0.4rem 0.7rem", fontSize: "0.65rem" }}
                aria-label="Spotify"
              >
                🎵
              </a>
            </div>
          </div>

          {/* Site nav */}
          <div>
            <p
              className="dd-label mb-4"
              style={{ marginBottom: "1rem" }}
            >
              Navigate
            </p>
            <ul className="space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#F97316")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.55)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Audience pages */}
          <div>
            <p className="dd-label mb-4">For You</p>
            <ul className="space-y-2">
              {AUDIENCE_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#F97316")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.55)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Podcast + CTA */}
          <div>
            <p className="dd-label mb-4">The Podcast</p>
            <div
              className="dd-glass p-4 mb-5"
              style={{ borderRadius: "10px" }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "0.9rem",
                  color: "#ffffff",
                  marginBottom: "0.4rem",
                  lineHeight: 1.4,
                }}
              >
                By Grit & Grace
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.50)",
                  marginBottom: "0.75rem",
                }}
              >
                We Are Warriors — 75+ episodes
              </p>
              <div className="flex gap-2">
                <a
                  href={APPLE_PODCASTS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dd-platform-btn"
                  style={{ fontSize: "0.68rem", padding: "0.35rem 0.7rem" }}
                >
                  Apple
                </a>
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dd-platform-btn"
                  style={{ fontSize: "0.68rem", padding: "0.35rem 0.7rem" }}
                >
                  Spotify
                </a>
              </div>
            </div>
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="dd-platform-btn block text-center"
              style={{ fontSize: "0.72rem" }}
            >
              All Links — Linktree
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.25rem 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            © 2024–2026 DD Talks. All rights reserved. A Denise Danberg Brand.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use"].map((label) => (
              <span
                key={label}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.35)",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#F97316")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(255,255,255,0.35)")
                }
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
