// DD Talks — Universal Audience Landing Page Component
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Mic, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { APPLE_PODCASTS_URL, SPOTIFY_URL, INSTAGRAM_URL, HERO_BG_URL, PODCAST_BG_URL, SPEAKING_BG_URL, MANIFESTO_BG_URL, type AudiencePage as AudiencePageData } from "@/lib/data";

const BG_MAP: Record<string, string> = {
  faith: MANIFESTO_BG_URL,
  podcast: PODCAST_BG_URL,
  speaking: SPEAKING_BG_URL,
  media: HERO_BG_URL,
  transition: MANIFESTO_BG_URL,
  friends: HERO_BG_URL,
  "faith-community": SPEAKING_BG_URL,
};

const MANIFESTO_SNIPPET = [
  "I believe in conversations that cost something.",
  "I believe in faith that holds even when it shakes.",
  "I believe in women who keep going.",
  "I believe in grace for the parts of yourself you have not forgiven yet.",
];

interface Props {
  page: AudiencePageData;
}

export default function AudiencePage({ page }: Props) {
  const bgUrl = BG_MAP[page.bgAccent] || HERO_BG_URL;

  return (
    <div style={{ background: "#1E2E20", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "clamp(72px, 8vw, 80px)", minHeight: "clamp(300px, 50vh, 65vh)", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${bgUrl})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30, 46, 32,0.95) 0%, rgba(30, 46, 32,0.65) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="dd-label mb-4">{page.label}</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)", color: "#ffffff", lineHeight: 1.1, marginBottom: "1.25rem", maxWidth: "700px" }}>
              {page.headline.includes("DD") || page.headline.includes("DD") ? (
                page.headline
              ) : (
                <>
                  {page.headline.split(".")[0].trim()}.
                  {page.headline.includes(".") && (
                    <span style={{ color: "#7BA7BC", fontStyle: "italic" }}>
                      {" "}{page.headline.split(".").slice(1).join(".").trim()}
                    </span>
                  )}
                </>
              )}
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "2rem" }}>
              {page.subheadline}
            </p>
            <a href={page.ctaLink.startsWith("http") ? page.ctaLink : undefined} target={page.ctaLink.startsWith("http") ? "_blank" : undefined} rel={page.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}>
              {page.ctaLink.startsWith("http") ? (
                <button className="dd-btn-primary flex items-center gap-2">
                  {page.cta} <ArrowRight size={14} />
                </button>
              ) : (
                <Link href={page.ctaLink}>
                  <button className="dd-btn-primary flex items-center gap-2">
                    {page.cta} <ArrowRight size={14} />
                  </button>
                </Link>
              )}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#F5F0E8", padding: "clamp(2.5rem, 5vw, 5rem) 0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "rgba(30, 46, 32,0.72)", lineHeight: 1.85, textAlign: "center" }}>
              {page.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value props */}
      <section style={{ background: "#243527", padding: "clamp(2.5rem, 5vw, 5rem) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="dd-label mb-4">Why DD Talks Is for You</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#ffffff" }}>
              What You Will Find <span style={{ color: "#7BA7BC", fontStyle: "italic" }}>Here</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.valueProps.map((vp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="dd-glass p-5 sm:p-7"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{ width: 28, height: 28, background: "rgba(123, 167, 188,0.12)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "0.78rem", color: "#7BA7BC" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.05rem", color: "#ffffff" }}>{vp.title}</h3>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.60)", lineHeight: 1.75 }}>{vp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto teaser */}
      <section style={{ background: "#1E2E20", padding: "clamp(2.5rem, 5vw, 5rem) 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="dd-label mb-6">What DD Believes</p>
          <div className="space-y-3 mb-8">
            {MANIFESTO_SNIPPET.map((line, i) => (
              <p key={i} style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(0.95rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.78)", lineHeight: 1.5 }}>{line}</p>
            ))}
          </div>
          <blockquote style={{ borderLeft: "3px solid #7BA7BC", paddingLeft: "1.25rem", textAlign: "left", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1rem", color: "rgba(255,255,255,0.82)", marginBottom: "2rem" }}>
            "The conversation you are afraid to start is usually the one that changes everything."
            <br />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontStyle: "normal", fontSize: "0.75rem", color: "#7BA7BC", letterSpacing: "0.08em" }}>— Denise Danberg</span>
          </blockquote>
        </div>
      </section>

      {/* Revolution teaser */}
      <section style={{ background: "#243527", padding: "clamp(2.5rem, 5vw, 5rem) 0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="dd-label mb-5">Something Big Is Coming</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#ffffff", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            The <span style={{ color: "#7BA7BC", fontStyle: "italic" }}>Revolution</span> Starts Here.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.60)", lineHeight: 1.8, marginBottom: "2rem", maxWidth: "560px", margin: "0 auto 2rem" }}>
            DD Talks is preparing for a bold new chapter. Denise Danberg has a unique perspective, a powerful voice, and a message the world is ready to hear. Follow now and be part of what is coming.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <button className="dd-btn-primary flex items-center gap-2"><Instagram size={14} /> Follow on Instagram</button>
            </a>
            <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
              <button className="dd-btn-ghost flex items-center gap-2"><Mic size={14} /> Subscribe to the Podcast</button>
            </a>
          </div>
        </div>
      </section>

      {/* Other audiences */}
      <section style={{ background: "#1E2E20", padding: "clamp(2rem, 4vw, 4rem) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="dd-label mb-4">Explore More</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/for-women-of-faith", label: "Women of Faith" },
              { href: "/for-podcast-fans", label: "Podcast Fans" },
              { href: "/for-event-planners", label: "Event Planners" },
              { href: "/for-media-press", label: "Media & Press" },
              { href: "/for-women-in-transition", label: "Women in Transition" },
              { href: "/for-friends-and-family", label: "Friends & Family" },
              { href: "/for-faith-communities", label: "Faith Communities" },
            ].filter((l) => l.href !== `/${page.slug}`).map((l) => (
              <Link key={l.href} href={l.href}>
                <span className="dd-platform-btn" style={{ fontSize: "0.72rem" }}>{l.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
