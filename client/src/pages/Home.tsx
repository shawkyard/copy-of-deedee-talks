// DD Talks — Home Page
// Feminine Bloom theme: deep plum/cream alternating, dusty rose/lavender/blue accents
// Sections: Hero, About, Why DD Talks, Podcast, Pillars, Episodes, Social, Speaking, Manifesto, Contact, Footer

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronDown, Mic, Heart, Users, Star, ArrowRight, Instagram, Facebook, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HERO_BG_URL,
  PODCAST_BG_URL,
  SPEAKING_BG_URL,
  MANIFESTO_BG_URL,
  LOGO_URL,
  APPLE_PODCASTS_URL,
  SPOTIFY_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  LINKTREE_URL,
  EPISODES,
  PILLARS,
  MANIFESTO_LINES,
  AUDIENCE_PAGES,
  DENISE_JASON_URL,
  DENISE_LAURA_URL,
  DENISE_MOM_URL,
  DENISE_PORTRAIT_URL,
} from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
      >
        {children}
      </motion.div>
    </div>
  );
}

const featuredEpisodes = EPISODES.filter((e) => e.featured).slice(0, 4);

export default function Home() {
  const [formData, setFormData] = useState({
    name: "", eventType: "", message: "", eventDate: "", format: "In-Person",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#1A0F2E", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "116px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_BG_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            opacity: 0.75,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(26,15,46,0.88) 0%, rgba(46,29,82,0.55) 50%, rgba(26,15,46,0.80) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="dd-label mb-5"
            >
              Welcome to DD Talks
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                lineHeight: 1.1,
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}
            >
              Real Conversations.{" "}
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>
                Faith-Filled
              </span>{" "}
              Courage.
            </motion.h1>

            {/* Grace for the Messy Middle — delicate asterisk line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1.2rem",
              }}
            >
              <span style={{ color: "rgba(192,132,168,0.55)", fontSize: "0.55rem", letterSpacing: "0.3em" }}>✦ ✦ ✦</span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 400,
                }}
              >
                Grace for the Messy Middle
              </span>
              <span style={{ color: "rgba(192,132,168,0.55)", fontSize: "0.55rem", letterSpacing: "0.3em" }}>✦ ✦ ✦</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "560px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
                  color: "#C084A8",
                  display: "inline",
                  lineHeight: 1,
                  verticalAlign: "middle",
                  marginRight: "0.15em",
                  textShadow: "0 0 30px rgba(192,132,168,0.35)",
                }}
              >
                DD Talks
              </span>{" "}
              is the personal home of{" "}
              <strong style={{ color: "#ffffff" }}>Denise Danberg</strong> —
              speaker, podcast host, and conversation architect. She has something
              to say. And the world is ready to hear it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
                <button className="dd-btn-primary flex items-center gap-2">
                  <Mic size={14} /> Listen to the Podcast
                </button>
              </a>
              <Link href="/about">
                <button className="dd-btn-ghost">Meet DD</button>
              </Link>
              <Link href="/speaking">
                <button className="dd-btn-ghost">Book DD to Speak</button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Podcast Studio Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div
              style={{
                position: "relative",
                borderRadius: "1.5rem",
                overflow: "hidden",
                boxShadow: "0 0 80px rgba(192,132,168,0.30), 0 30px 80px rgba(0,0,0,0.70), inset 0 0 0 1px rgba(192,132,168,0.25)",
                border: "1.5px solid rgba(192,132,168,0.30)",
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663573907938/oFkpQQQCGaFM3nrghAk97R/podcast-hero-studio-jtzLC927k53qSifaWD9f6D.webp"
                alt="DD Talks Podcast Studio"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: "600px",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              {/* Gradient blend at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40%",
                  background: "linear-gradient(to top, rgba(26,15,46,0.85) 0%, transparent 100%)",
                }}
              />
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  background: "rgba(26,15,46,0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(192,132,168,0.35)",
                  borderRadius: "0.75rem",
                  padding: "0.75rem 1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C084A8", boxShadow: "0 0 8px #C084A8", animation: "pulse 2s infinite" }} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.90)", letterSpacing: "0.05em" }}>75+ Episodes &amp; Counting</span>
              </div>
              {/* Top-right badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: "linear-gradient(135deg, rgba(192,132,168,0.90), rgba(167,139,202,0.90))",
                  backdropFilter: "blur(8px)",
                  borderRadius: "2rem",
                  padding: "0.45rem 1rem",
                }}
              >
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: "#ffffff", letterSpacing: "0.12em", textTransform: "uppercase" }}>Now Streaming</span>
              </div>
            </div>
          </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} style={{ color: "rgba(192,132,168,0.60)" }} />
        </motion.div>
      </section>

      {/* ── MEET DEEDEE ── */}
      <section style={{ background: "#FAF7F5", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Denise portrait */}
            <AnimSection>
              {/* Superstar photo stack */}
              <div className="relative" style={{ minHeight: 480 }}>
                {/* Main photo — AI Portrait */}
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: "4/5",
                    background: "#2E1D52",
                    border: "2px solid rgba(192,132,168,0.35)",
                    boxShadow: "0 0 60px rgba(192,132,168,0.18), 0 20px 60px rgba(0,0,0,0.7)",
                  }}
                >
                  <img
                    src={DENISE_PORTRAIT_URL}
                    alt="Denise Danberg — DD"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(26,15,46,0.85) 0%, transparent 55%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0" style={{ padding: "1.5rem" }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "#1A0F2E" }}>Denise Danberg</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.70rem", color: "#C084A8", letterSpacing: "0.12em", textTransform: "uppercase" }}>DD — Host & Conversation Architect</p>
                  </div>
                  {/* Superstar glow ring */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      border: "1px solid rgba(192,132,168,0.20)",
                      borderRadius: "inherit",
                      boxShadow: "inset 0 0 40px rgba(192,132,168,0.08)",
                    }}
                  />
                </div>
                {/* Floating mini photo — Denise & Laura (top-right) */}
                <div
                  className="absolute -top-4 -right-4 rounded-xl overflow-hidden"
                  style={{
                    width: 140,
                    height: 140,
                    border: "2px solid rgba(192,132,168,0.50)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.60)",
                    zIndex: 10,
                  }}
                >
                  <img
                    src={DENISE_LAURA_URL}
                    alt="Denise with Laura"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                </div>
                {/* Floating mini photo — Denise & Mom (bottom-right) */}
                <div
                  className="absolute -bottom-4 -right-4 rounded-xl overflow-hidden"
                  style={{
                    width: 130,
                    height: 130,
                    border: "2px solid rgba(192,132,168,0.50)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.60)",
                    zIndex: 10,
                  }}
                >
                  <img
                    src={DENISE_MOM_URL}
                    alt="Denise with Mom"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                </div>
              </div>
            </AnimSection>

            {/* Right: text */}
            <AnimSection>
              <div>
                <p className="dd-label-dark mb-4">Meet DD</p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    color: "#1A0F2E",
                    lineHeight: 1.2,
                    marginBottom: "1.5rem",
                  }}
                >
                  She Shows Up.{" "}
                  <span style={{ color: "#C084A8", fontStyle: "italic" }}>
                    She Speaks Truth.
                  </span>{" "}
                  She Brings You In.
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(26,15,46,0.72)",
                    lineHeight: 1.8,
                    marginBottom: "1.25rem",
                  }}
                >
                  Denise Danberg — known to her listeners and community as DD
                  — is a woman of faith, a mother, a friend, and a voice that does
                  not flinch from the real stuff of life. She built DD Talks
                  not to perform, but to connect. Not to preach, but to have the
                  kind of honest, warm, sometimes hilarious, always meaningful
                  conversations that women actually need.
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(26,15,46,0.72)",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  Whether she is co-hosting{" "}
                  <em style={{ color: "#C084A8" }}>By Grit and Grace</em> with
                  her friend Heather, stepping onto a stage, or sitting across
                  from someone who just needs to be heard, Denise brings the same
                  thing every time: faith-filled courage, genuine warmth, and the
                  kind of honesty that makes you feel less alone.
                </p>
                <blockquote
                  style={{
                    borderLeft: "3px solid #C084A8",
                    paddingLeft: "1.25rem",
                    marginBottom: "2rem",
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "1.05rem",
                    color: "rgba(26,15,46,0.80)",
                  }}
                >
                  "We are on a quest to uncover the extraordinary in every day."
                  <br />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontStyle: "normal",
                      fontSize: "0.78rem",
                      color: "#C084A8",
                      letterSpacing: "0.08em",
                    }}
                  >
                    — Denise Danberg, By Grit and Grace
                  </span>
                </blockquote>
                <Link href="/about">
                  <button className="dd-btn-primary flex items-center gap-2">
                    Read DD's Full Story <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── WHY DD TALKS EXISTS ── */}
      <section style={{ background: "#221540", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-14">
            <p className="dd-label mb-4">Why DD Talks Exists</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#ffffff",
              }}
            >
              This Is Not a{" "}
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>
                Highlight Reel.
              </span>
            </h2>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart size={22} />,
                title: "For the Woman in the Messy Middle",
                body: "You are not behind. You are not broken. You are exactly where the conversation begins.",
              },
              {
                icon: <Star size={22} />,
                title: "For the Warrior Who Still Believes",
                body: "Faith is not the absence of struggle. It is the grit to keep going anyway.",
              },
              {
                icon: <Users size={22} />,
                title: "For the Friend Who Needs Real Talk",
                body: "No filters. No fake perfection. Just honest, warm, life-giving conversation.",
              },
            ].map((card, i) => (
              <AnimSection key={i}>
                <div className="dd-glass p-8 h-full">
                  <div className="dd-pillar-icon mb-5">{card.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      fontSize: "1.15rem",
                      color: "#ffffff",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.62)",
                      lineHeight: 1.7,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PODCAST ── */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "6rem 0" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${PODCAST_BG_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(26,15,46,0.80)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <p className="dd-label mb-4">The Podcast</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}
            >
              By Grit &amp; Grace —{" "}
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>
                We Are Warriors
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.62)",
                maxWidth: "600px",
                margin: "0 auto 1.5rem",
                lineHeight: 1.7,
              }}
            >
              Heather and DD invite you into the crazy, amusingly unconventional
              world of two women who refuse to let life flatten them. From faith
              and family to world events, parenting, marriage, and the mysteries
              of God — 75+ episodes of gold.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={APPLE_PODCASTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dd-btn-primary flex items-center gap-2"
              >
                <Play size={14} /> Apple Podcasts
              </a>
              <a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dd-btn-ghost"
              >
                Spotify
              </a>
            </div>
          </AnimSection>

          {/* Featured episode cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredEpisodes.map((ep, i) => (
              <AnimSection key={ep.id}>
                <motion.div
                  className="dd-episode-card p-5 h-full flex flex-col"
                  custom={i}
                  variants={fadeUp}
                >
                  <span className="dd-badge mb-3">{ep.category}</span>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#ffffff",
                      lineHeight: 1.4,
                      marginBottom: "0.6rem",
                      flex: 1,
                    }}
                  >
                    {ep.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.50)",
                      lineHeight: 1.6,
                      marginBottom: "1rem",
                    }}
                  >
                    {ep.description.slice(0, 100)}…
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.68rem",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {ep.date}
                    </span>
                    <a
                      href={ep.appleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#C084A8", fontSize: "0.72rem", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Listen →
                    </a>
                  </div>
                </motion.div>
              </AnimSection>
            ))}
          </div>

          <AnimSection className="text-center mt-10">
            <Link href="/podcast">
              <button className="dd-btn-ghost flex items-center gap-2 mx-auto">
                Explore the Full Archive <ArrowRight size={14} />
              </button>
            </Link>
          </AnimSection>
        </div>
      </section>

      {/* ── CONVERSATION PILLARS ── */}
      <section style={{ background: "#FAF7F5", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <p className="dd-label-dark mb-4">Conversation Pillars</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#1A0F2E",
              }}
            >
              What{" "}
              <span style={{ color: "#A8628A", fontStyle: "italic" }}>
                DD
              </span>{" "}
              Talks About
            </h2>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PILLARS.map((pillar, i) => (
              <AnimSection key={i}>
                <div className="dd-glass-light p-5 h-full">
                  <div
                    style={{
                      fontSize: "1.5rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#1A0F2E",
                      marginBottom: "0.5rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(26,15,46,0.50)",
                      lineHeight: 1.6,
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUDIENCE PAGES GRID ── */}
      <section style={{ background: "#221540", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <p className="dd-label mb-4">DD Talks to Everyone</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#ffffff",
              }}
            >
              Find Your{" "}
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>
                Space
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.55)",
                marginTop: "0.75rem",
              }}
            >
              DD Talks speaks to many different audiences. Find yours.
            </p>
          </AnimSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {AUDIENCE_PAGES.map((aud, i) => (
              <AnimSection key={aud.id}>
                <Link href={`/${aud.slug}`}>
                  <div className="dd-audience-card p-6 h-full">
                    <p className="dd-label mb-3">{aud.label}</p>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "#ffffff",
                        lineHeight: 1.4,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {aud.headline}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.50)",
                        lineHeight: 1.6,
                        marginBottom: "1rem",
                      }}
                    >
                      {aud.subheadline}
                    </p>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.72rem",
                        color: "#C084A8",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                      }}
                    >
                      Read More →
                    </span>
                  </div>
                </Link>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL HUB ── */}
      <section style={{ background: "#1A0F2E", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-10">
            <p className="dd-label mb-4">Follow the Conversation</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "#ffffff",
              }}
            >
              Stay Connected with{" "}
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>
                DD
              </span>
            </h2>
          </AnimSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Instagram", sub: "@denisedanberg", href: INSTAGRAM_URL, icon: <Instagram size={24} /> },
              { label: "Apple Podcasts", sub: "By Grit & Grace", href: APPLE_PODCASTS_URL, icon: <Mic size={24} /> },
              { label: "Spotify", sub: "By Grit & Grace", href: SPOTIFY_URL, icon: <Play size={24} /> },
              { label: "Facebook", sub: "By Grit & Grace", href: FACEBOOK_URL, icon: <Facebook size={24} /> },
            ].map((s, i) => (
              <AnimSection key={i}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dd-glass block p-6 text-center transition-all duration-200 hover:border-pink-400"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="dd-pillar-icon mx-auto mb-3"
                    style={{ width: 48, height: 48 }}
                  >
                    {s.icon}
                  </div>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: "#ffffff",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    {s.sub}
                  </p>
                </a>
              </AnimSection>
            ))}
          </div>

          <AnimSection className="text-center mt-8">
            <a
              href={LINKTREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="dd-platform-btn inline-flex"
            >
              All Links — Linktree
            </a>
          </AnimSection>
        </div>
      </section>

      {/* ── SPEAKING ── */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "6rem 0" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${SPEAKING_BG_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.30,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(26,15,46,0.82)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimSection>
              <div>
                <p className="dd-label mb-4">Speaking & Events</p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    color: "#ffffff",
                    lineHeight: 1.2,
                    marginBottom: "1.25rem",
                  }}
                >
                  Bring DD Into{" "}
                  <span style={{ color: "#C084A8", fontStyle: "italic" }}>
                    the Conversation
                  </span>
                </h2>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.68)",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  Denise Danberg is available for faith-centered events,
                  women's groups, community gatherings, panels, podcast guest
                  appearances, and leadership conversations. If you are looking
                  for a voice that will move a room — not just fill one —
                  DD Talks is the conversation your audience needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: "Authenticity", body: "Denise does not perform. She shows up as herself, every time." },
                    { title: "Warmth & Humor", body: "She makes a room feel like a living room — safe, real, and alive." },
                    { title: "Faith-Filled Courage", body: "Every conversation is grounded in faith, honesty, and real talk." },
                  ].map((c, i) => (
                    <div key={i} className="dd-glass p-4">
                      <h4
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          color: "#C084A8",
                          marginBottom: "0.4rem",
                        }}
                      >
                        {c.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.78rem",
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.6,
                        }}
                      >
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>

            {/* Speaking inquiry form */}
            <AnimSection>
              <div className="dd-glass p-8">
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: "1.3rem",
                    color: "#ffffff",
                    marginBottom: "1.5rem",
                  }}
                >
                  Submit a Speaking Inquiry
                </h3>
                {submitted ? (
                  <div className="text-center py-8">
                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                      Inquiry Received
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)" }}>
                      Thank you. All inquiries are personally reviewed. Please allow 5–7 business days for a response.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Your Name *</label>
                      <input
                        className="dd-input"
                        required
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Event Type *</label>
                      <select
                        className="dd-input"
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        style={{ background: "rgba(255,255,255,0.05)", color: formData.eventType ? "#fff" : "rgba(255,255,255,0.30)" }}
                      >
                        <option value="" disabled>Select event type</option>
                        <option value="Women's Group">Women's Group</option>
                        <option value="Faith Event">Faith Event</option>
                        <option value="Community Event">Community Event</option>
                        <option value="Panel">Panel</option>
                        <option value="Podcast Guest">Podcast Guest</option>
                        <option value="Leadership Conversation">Leadership Conversation</option>
                        <option value="Interview">Interview</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Anticipated Event Date</label>
                      <input
                        className="dd-input"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        style={{ colorScheme: "dark" }}
                      />
                    </div>
                    <div>
                      <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Tell DD About Your Event *</label>
                      <textarea
                        className="dd-input"
                        required
                        rows={4}
                        placeholder="Describe your event and audience..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ resize: "vertical" }}
                      />
                    </div>
                    <button type="submit" className="dd-btn-primary w-full">
                      Send My Inquiry
                    </button>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.7rem",
                        color: "rgba(255,255,255,0.35)",
                        textAlign: "center",
                      }}
                    >
                      Submitting this form does not confirm availability or booking.
                    </p>
                  </form>
                )}
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "7rem 0" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${MANIFESTO_BG_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(26,15,46,0.78)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimSection>
            <p className="dd-label mb-8">The DD Manifesto</p>
            <div className="space-y-4">
              {MANIFESTO_LINES.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
                    color: i === MANIFESTO_LINES.length - 1 ? "#C084A8" : "rgba(255,255,255,0.88)",
                    lineHeight: 1.5,
                    fontWeight: i === MANIFESTO_LINES.length - 1 ? 700 : 400,
                  }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <div className="mt-10">
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  color: "#ffffff",
                  marginBottom: "1.5rem",
                }}
              >
                This is{" "}
                <span style={{ color: "#C084A8" }}>DD Talks.</span>
              </p>
              <Link href="/contact">
                <button className="dd-btn-primary">Join the Conversation</button>
              </Link>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── SUPERSTAR PHOTO SPOTLIGHT ── */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "6rem 0" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${MANIFESTO_BG_URL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(26,15,46,0.88)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-12">
            <p className="dd-label mb-4">The Woman Behind the Voice</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              Faith.{" "}
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>Family.</span>{" "}
              Fire.
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                marginTop: "0.75rem",
                maxWidth: 560,
                margin: "0.75rem auto 0",
              }}
            >
              Denise Danberg is not just a voice on a microphone. She is a wife, a
              daughter, a friend — a woman who lives everything she talks about.
            </p>
          </AnimSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Photo 1: Denise & Jason */}
            <AnimSection>
              <div
                className="relative rounded-2xl overflow-hidden group"
                style={{
                  aspectRatio: "4/5",
                  border: "2px solid rgba(192,132,168,0.30)",
                  boxShadow: "0 0 40px rgba(192,132,168,0.15), 0 20px 50px rgba(0,0,0,0.70)",
                }}
              >
                <img
                  src={DENISE_JASON_URL}
                  alt="Denise & Jason"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", transition: "transform 0.5s ease" }}
                  className="group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(26,15,46,0.90) 0%, transparent 50%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: "1.25rem" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#ffffff", marginBottom: "0.2rem" }}>Denise &amp; Jason</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "#C084A8", letterSpacing: "0.10em", textTransform: "uppercase" }}>Her Person. Her Partner.</p>
                </div>
              </div>
            </AnimSection>

            {/* Photo 2: Denise & Laura */}
            <AnimSection>
              <div
                className="relative rounded-2xl overflow-hidden group"
                style={{
                  aspectRatio: "4/5",
                  border: "2px solid rgba(192,132,168,0.30)",
                  boxShadow: "0 0 40px rgba(192,132,168,0.15), 0 20px 50px rgba(0,0,0,0.70)",
                  marginTop: "2rem",
                }}
              >
                <img
                  src={DENISE_LAURA_URL}
                  alt="Denise & Laura"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", transition: "transform 0.5s ease" }}
                  className="group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(26,15,46,0.90) 0%, transparent 50%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: "1.25rem" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#ffffff", marginBottom: "0.2rem" }}>Denise &amp; Laura</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "#C084A8", letterSpacing: "0.10em", textTransform: "uppercase" }}>Her Circle. Her Tribe.</p>
                </div>
              </div>
            </AnimSection>

            {/* Photo 3: Denise & Mom */}
            <AnimSection>
              <div
                className="relative rounded-2xl overflow-hidden group"
                style={{
                  aspectRatio: "4/5",
                  border: "2px solid rgba(192,132,168,0.30)",
                  boxShadow: "0 0 40px rgba(192,132,168,0.15), 0 20px 50px rgba(0,0,0,0.70)",
                }}
              >
                <img
                  src={DENISE_MOM_URL}
                  alt="Denise & Mom"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", transition: "transform 0.5s ease" }}
                  className="group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(26,15,46,0.90) 0%, transparent 50%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: "1.25rem" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#ffffff", marginBottom: "0.2rem" }}>Denise &amp; Mom</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "#C084A8", letterSpacing: "0.10em", textTransform: "uppercase" }}>Her Roots. Her Foundation.</p>
                </div>
              </div>
            </AnimSection>
          </div>

          {/* Quote strip */}
          <AnimSection className="text-center mt-14">
            <blockquote
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                color: "rgba(255,255,255,0.88)",
                maxWidth: 700,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              "She is not preparing to be a star. She already is one."
              <br />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontStyle: "normal",
                  fontSize: "0.75rem",
                  color: "#C084A8",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: "0.75rem",
                }}
              >
                — DD Talks
              </span>
            </blockquote>
          </AnimSection>
        </div>
      </section>

      {/* ── REVOLUTION TEASER ── */}
      <section style={{ background: "#221540", padding: "5rem 0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimSection>
            <p className="dd-label mb-5">Something Big Is Coming</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              The{" "}
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>
                Revolution
              </span>{" "}
              Starts Here.
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              DD Talks is preparing for a bold new chapter. Denise Danberg
              has a unique perspective, a powerful voice, and a message the world
              is ready to hear. Follow now and be part of what is coming.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <button className="dd-btn-primary flex items-center gap-2">
                  <Instagram size={14} /> Follow on Instagram
                </button>
              </a>
              <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
                <button className="dd-btn-ghost">Subscribe to the Podcast</button>
              </a>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── MAILING LIST SIGNUP ── */}
      <section
        id="mailing-list"
        className="relative overflow-hidden"
        style={{ padding: "7rem 0" }}
      >
        {/* Decorative background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1A0F2E 0%, #2E1D52 50%, #1A0F2E 100%)",
          }}
        />
        {/* Soft rose glow orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(192,132,168,0.08) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimSection>
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(192,132,168,0.10)",
                border: "1px solid rgba(192,132,168,0.25)",
              }}
            >
              <span style={{ color: "#C084A8", fontSize: "0.55rem" }}>✦</span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C084A8",
                  fontWeight: 700,
                }}
              >
                Join the DD Talks Community
              </span>
              <span style={{ color: "#C084A8", fontSize: "0.55rem" }}>✦</span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              Be the First to Know.
              <br />
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>Blessings in Your Inbox.</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.60)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: 560,
                margin: "0 auto 2.5rem",
              }}
            >
              Get early access to new episodes, Denise’s upcoming book, live event announcements,
              faith encouragements, and exclusive community updates. No spam. Just real, meaningful content.
            </p>
            <MailingListForm />
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
            >
              {[
                { icon: "\uD83C\uDFA7", label: "New Episodes", desc: "First to hear every new conversation" },
                { icon: "\uD83D\uDCDA", label: "Book Updates", desc: "Denise’s first book is coming soon" },
                { icon: "\uD83C\uDF1F", label: "Live Events", desc: "Be first in line for real-world gatherings" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="dd-glass p-4 text-center"
                  style={{ borderRadius: "0.75rem" }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{item.icon}</div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.88rem", color: "#ffffff", marginBottom: "0.25rem" }}>{item.label}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.50)", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── PRAYER CENTER ── */}
      <section
        className="relative overflow-hidden"
        style={{ padding: "7rem 0", background: "#1A0F2E" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(192,132,168,0.05) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-10">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
              style={{
                background: "rgba(192,132,168,0.10)",
                border: "1px solid rgba(192,132,168,0.25)",
              }}
            >
              <span style={{ color: "#C084A8", fontSize: "0.55rem" }}>✦</span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#C084A8",
                  fontWeight: 700,
                }}
              >
                Prayer Center
              </span>
              <span style={{ color: "#C084A8", fontSize: "0.55rem" }}>✦</span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "1rem",
              }}
            >
              You Are Not Praying Alone.
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.60)",
                lineHeight: 1.8,
                maxWidth: 580,
                margin: "0 auto",
              }}
            >
              Denise prays over every request submitted here. Whether you are carrying something heavy,
              celebrating a breakthrough, or simply need someone to stand with you in faith — this is that place.
            </p>
          </AnimSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: prayer promise */}
            <AnimSection>
              <div
                className="dd-glass p-8 h-full"
                style={{ borderLeft: "3px solid #C084A8" }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    color: "rgba(255,255,255,0.88)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  “Do not be anxious about anything, but in every situation, by prayer and petition,
                  with thanksgiving, present your requests to God.”
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    color: "#C084A8",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "2rem",
                  }}
                >
                  Philippians 4:6
                </p>
                <div className="space-y-4">
                  {[
                    { icon: "\uD83D\uDE4F", text: "Every request is read and prayed over personally by Denise" },
                    { icon: "\uD83D\uDD12", text: "Your request is completely private and confidential" },
                    { icon: "\u2764\uFE0F", text: "No judgment. No conditions. Just faith and love." },
                    { icon: "\u2728", text: "Warriors pray together. You are never alone." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "0.1rem" }}>{item.icon}</span>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>

            {/* Right: prayer form */}
            <AnimSection>
              <PrayerRequestForm />
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── PRIVATE CONTACT ── */}
      <section style={{ background: "#1A0F2E", padding: "5rem 0" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection className="text-center mb-8">
            <p className="dd-label mb-4">A Private Word with DD</p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#ffffff",
                marginBottom: "0.75rem",
              }}
            >
              Something Personal to Share?
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
              }}
            >
              This is a private channel for personal, confidential, or sensitive
              messages. All messages are read by Denise personally.
            </p>
          </AnimSection>
          <AnimSection>
            <div className="dd-glass p-8">
              <PrivateContactForm />
            </div>
          </AnimSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PrivateContactForm() {
  const [data, setData] = useState({ name: "", subject: "", message: "", response: "No Response Needed" });
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };
  if (sent) {
    return (
      <div className="text-center py-6">
        <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🔒</div>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", color: "#ffffff", marginBottom: "0.5rem" }}>Message Received</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.50)" }}>Your message is private and will be read by Denise personally.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Your Name</label>
        <input className="dd-input" placeholder="Your name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
      </div>
      <div>
        <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Subject</label>
        <input className="dd-input" placeholder="Subject" value={data.subject} onChange={(e) => setData({ ...data, subject: e.target.value })} />
      </div>
      <div>
        <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Your Message</label>
        <textarea className="dd-input" rows={4} placeholder="Your private message..." value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })} style={{ resize: "vertical" }} />
      </div>
      <div>
        <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Preferred Response</label>
        <select className="dd-input" value={data.response} onChange={(e) => setData({ ...data, response: e.target.value })} style={{ background: "rgba(255,255,255,0.05)", color: "#fff" }}>
          <option value="No Response Needed">No Response Needed</option>
          <option value="Reply via This Platform Only">Reply via This Platform Only</option>
        </select>
      </div>
      <button type="submit" className="dd-btn-ghost w-full">Send a Private Message</button>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.30)", textAlign: "center" }}>
        Your message is private. Nothing shared here will be published or redistributed.
      </p>
    </form>
  );
}

function MailingListForm() {
  const [data, setData] = useState({ name: "", email: "", interests: [] as string[] });
  const [submitted, setSubmitted] = useState(false);
  const interests = ["New Episodes", "Book Updates", "Live Events", "Faith Encouragements", "Speaking Announcements"];

  const toggleInterest = (interest: string) => {
    setData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🙌</div>
        <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.5rem" }}>
          Welcome to the Community!
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
          You are now part of the DD Talks family. Blessings are on their way to your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>First Name</label>
          <input
            className="dd-input"
            placeholder="Your first name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Email Address *</label>
          <input
            className="dd-input"
            type="email"
            required
            placeholder="your@email.com"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label className="dd-label block mb-2" style={{ fontSize: "0.65rem" }}>What Would You Like to Receive?</label>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              onClick={() => toggleInterest(interest)}
              className="px-3 py-1.5 rounded-full text-xs transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.04em",
                background: data.interests.includes(interest)
                  ? "rgba(192,132,168,0.20)"
                  : "rgba(255,255,255,0.05)",
                border: data.interests.includes(interest)
                  ? "1px solid rgba(192,132,168,0.60)"
                  : "1px solid rgba(255,255,255,0.12)",
                color: data.interests.includes(interest)
                  ? "#C084A8"
                  : "rgba(255,255,255,0.60)",
              }}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
      <button type="submit" className="dd-btn-primary w-full" style={{ marginTop: "0.5rem" }}>
        ✦ &nbsp;Join the Community — It's Free
      </button>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.30)", textAlign: "center" }}>
        No spam. Unsubscribe anytime. Your privacy is sacred to us.
      </p>
    </form>
  );
}

function PrayerRequestForm() {
  const [data, setData] = useState({ name: "", category: "Personal", request: "", anonymous: false });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.request) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="dd-glass p-8 text-center">
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🙏</div>
        <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", color: "#ffffff", marginBottom: "0.5rem" }}>
          Prayer Received
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
          Denise will personally lift your request in prayer. You are covered. You are not alone.
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#C084A8", marginTop: "1rem", letterSpacing: "0.08em" }}>
          — By Grit &amp; Grace, We Are Warriors
        </p>
      </div>
    );
  }

  return (
    <div className="dd-glass p-8">
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#ffffff",
          marginBottom: "1.5rem",
        }}
      >
        Submit a Prayer Request
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Your Name (optional)</label>
            <input
              className="dd-input"
              placeholder="First name or leave blank"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Prayer Category</label>
            <select
              className="dd-input"
              value={data.category}
              onChange={(e) => setData({ ...data, category: e.target.value })}
              style={{ background: "rgba(255,255,255,0.05)", color: "#fff" }}
            >
              <option value="Personal">Personal</option>
              <option value="Family">Family</option>
              <option value="Health">Health &amp; Healing</option>
              <option value="Relationships">Relationships</option>
              <option value="Finances">Finances</option>
              <option value="Grief">Grief &amp; Loss</option>
              <option value="Faith">Faith &amp; Spiritual Growth</option>
              <option value="Gratitude">Gratitude &amp; Praise</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Your Prayer Request *</label>
          <textarea
            className="dd-input"
            rows={5}
            required
            placeholder="Share what is on your heart. There is no request too big or too small..."
            value={data.request}
            onChange={(e) => setData({ ...data, request: e.target.value })}
            style={{ resize: "vertical" }}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="anonymous"
            checked={data.anonymous}
            onChange={(e) => setData({ ...data, anonymous: e.target.checked })}
            style={{ accentColor: "#C084A8", width: "14px", height: "14px" }}
          />
          <label
            htmlFor="anonymous"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", cursor: "pointer" }}
          >
            Submit anonymously
          </label>
        </div>
        <button type="submit" className="dd-btn-primary w-full">
          🙏 &nbsp;Send My Prayer Request
        </button>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.30)", textAlign: "center" }}>
          All prayer requests are completely private and confidential.
        </p>
      </form>
    </div>
  );
}
