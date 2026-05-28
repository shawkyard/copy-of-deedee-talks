// DD Talks — Media Kit Page
// Design: Feminine Bloom — alternating cream/plum sections, magazine-style layout
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Download, Mic, Star, Users, ArrowRight, Quote, Sparkles, Radio, BookOpen, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  LOGO_URL,
  APPLE_PODCASTS_URL,
  SPOTIFY_URL,
  INSTAGRAM_URL,
  DENISE_PORTRAIT_URL,
  SPEAKING_BG_URL,
} from "@/lib/data";

const TOPICS = [
  "Faith in Real Life", "Grit & Grace", "Women's Resilience", "Honest Conversations",
  "Motherhood & Family", "Life Transitions", "Discipleship", "Women's Leadership",
  "Friendship", "Healing & Hope", "The Wisdom Years", "Community",
];

const FORMATS = [
  { icon: <Mic size={18} />, title: "Keynote", desc: "45–60 minute signature talk for women's events, faith conferences, and community gatherings." },
  { icon: <Radio size={18} />, title: "Podcast Guest", desc: "Available for guest appearances on podcasts across faith, women's empowerment, and life topics." },
  { icon: <Users size={18} />, title: "Panel", desc: "Moderator or panelist for conversations on faith, women's leadership, and cultural topics." },
  { icon: <BookOpen size={18} />, title: "Fireside Chat", desc: "Intimate conversational format ideal for smaller groups, retreats, and leadership events." },
  { icon: <Sparkles size={18} />, title: "Workshop", desc: "Interactive sessions on discipleship, honest conversation, and women's community building." },
  { icon: <Camera size={18} />, title: "Interview", desc: "Print, digital, video, and audio interviews for media outlets, blogs, and publications." },
];

const STATS = [
  { value: "75+", label: "Podcast Episodes", sub: "& counting" },
  { value: "5.0★", label: "Apple Podcasts", sub: "rating" },
  { value: "2024", label: "Launched", sub: "June" },
  { value: "National", label: "Audience", sub: "growing" },
];

const QUOTES = [
  { text: "A voice that makes a room feel safe.", attr: "Event Organizer" },
  { text: "Authentic, warm, and impossible to ignore.", attr: "Podcast Listener" },
  { text: "She doesn't preach — she connects.", attr: "Conference Attendee" },
];

export default function MediaKit() {
  return (
    <div style={{ background: "#1E2E20", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO — Full-bleed image with overlay ── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "clamp(72px, 8vw, 80px)",
          backgroundImage: `url(${SPEAKING_BG_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(30, 46, 32,0.92) 0%, rgba(30, 46, 32,0.70) 50%, rgba(143, 181, 160,0.25) 100%)" }} />
        {/* Decorative rose circle */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(123, 167, 188,0.18) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p className="dd-label mb-5">Media Kit</p>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", color: "#ffffff", lineHeight: 1.08, marginBottom: "1.25rem" }}>
                A Voice the World<br />Is{" "}
                <em style={{ color: "#D4C4A8", fontStyle: "italic" }}>Ready to Hear.</em>
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.72)", maxWidth: "520px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
                Denise Danberg is a rising media personality, podcast host, speaker, and conversation leader — with a growing national audience and a five-star reputation for authenticity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <button className="dd-btn-primary flex items-center gap-2">
                    <Download size={14} /> Request Full Media Kit
                  </button>
                </Link>
                <Link href="/speaking">
                  <button className="dd-btn-ghost flex items-center gap-2">
                    Book for an Event <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Portrait + stat pills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:flex justify-center relative"
            >
              <div className="relative">
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    width: 320,
                    height: 400,
                    border: "2px solid rgba(232,180,208,0.30)",
                    boxShadow: "0 0 60px rgba(123, 167, 188,0.25), 0 30px 80px rgba(0,0,0,0.60)",
                  }}
                >
                  <img src={DENISE_PORTRAIT_URL} alt="Denise Danberg" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30, 46, 32,0.70) 0%, transparent 55%)" }} />
                </div>
                {/* Floating stat pill */}
                <div
                  className="absolute -bottom-4 -left-8 rounded-2xl px-5 py-3"
                  style={{ background: "rgba(30, 46, 32,0.92)", border: "1px solid rgba(123, 167, 188,0.30)", backdropFilter: "blur(12px)" }}
                >
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem", color: "#7BA7BC" }}>75+</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Episodes</p>
                </div>
                <div
                  className="absolute -top-4 -right-8 rounded-2xl px-5 py-3"
                  style={{ background: "rgba(30, 46, 32,0.92)", border: "1px solid rgba(143, 181, 160,0.30)", backdropFilter: "blur(12px)" }}
                >
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem", color: "#8FB5A0" }}>5.0★</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Rated</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR — cream background ── */}
      <section style={{ background: "#F5F0E8", padding: "3.5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
                style={{ borderRight: i < 3 ? "1px solid rgba(30, 46, 32,0.10)" : "none" }}
              >
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#7BA7BC", lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#1E2E20", letterSpacing: "0.06em", marginTop: "0.35rem" }}>{s.label}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.70rem", color: "rgba(30, 46, 32,0.45)", letterSpacing: "0.08em" }}>{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIO — magazine two-column ── */}
      <section style={{ background: "#243527", padding: "clamp(3rem, 6vw, 6rem) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Bio text — 3 cols */}
            <div className="lg:col-span-3">
              <p className="dd-label mb-5">Official Bio</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#ffffff", marginBottom: "1.75rem", lineHeight: 1.2 }}>
                Denise Danberg —{" "}
                <em style={{ color: "#7BA7BC" }}>DD</em>
              </h2>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.96rem", color: "rgba(255,255,255,0.70)", lineHeight: 1.85 }}>
                <p style={{ marginBottom: "1.25rem" }}>
                  Denise Danberg — known to her listeners and community as DD — is a woman of faith, a mother, a friend, and a voice that does not flinch from the real stuff of life. She is the co-host of{" "}
                  <em style={{ color: "#7BA7BC" }}>By Grit and Grace – We Are Warriors</em>, a top-rated faith and life podcast with over 75 episodes and a five-star rating on Apple Podcasts, launched in June 2024.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  Through DD Talks, her personal brand platform, Denise is building a space where honest conversation, faith-filled courage, and grace for the messy middle come together. She speaks at faith events, women's gatherings, community organizations, and leadership conversations — bringing warmth, humor, and the kind of authenticity that makes a room feel safe.
                </p>
                <p>
                  Denise is a compelling voice at the intersection of faith, women's empowerment, honest dialogue, and personal resilience. DD Talks is preparing for a bold new chapter — and the world is ready to hear what she has to say.
                </p>
              </div>
            </div>

            {/* Brand assets — 2 cols */}
            <div className="lg:col-span-2 space-y-5">
              <p className="dd-label mb-5">Brand Assets</p>

              {/* Logo card */}
              <div className="dd-glass p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <img src={LOGO_URL} alt="DD Talks Logo" className="h-14 w-14 object-contain" />
                  <div>
                    <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "1.6rem", color: "#D4C4A8", lineHeight: 1 }}>DD</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#7BA7BC", letterSpacing: "0.18em", textTransform: "uppercase" }}>Talks</p>
                  </div>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.50)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  Full brand asset package — logo files, color palette, typography guide, and approved photography — available upon request.
                </p>
                <Link href="/contact">
                  <button className="dd-btn-ghost w-full" style={{ fontSize: "0.72rem" }}>Request Brand Assets</button>
                </Link>
              </div>

              {/* Color palette */}
              <div className="dd-glass p-5 rounded-2xl">
                <p className="dd-label mb-4" style={{ fontSize: "0.60rem" }}>Brand Colors</p>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { color: "#1E2E20", label: "Plum" },
                    { color: "#7BA7BC", label: "Rose" },
                    { color: "#8FB5A0", label: "Lavender" },
                    { color: "#C4A882", label: "Blue" },
                  ].map((c) => (
                    <div key={c.color} className="text-center">
                      <div style={{ width: "100%", aspectRatio: "1", background: c.color, borderRadius: "10px", border: "1px solid rgba(255,255,255,0.12)", marginBottom: "0.4rem" }} />
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.58rem", color: "rgba(255,255,255,0.45)" }}>{c.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="dd-glass p-5 rounded-2xl">
                <p className="dd-label mb-4" style={{ fontSize: "0.60rem" }}>Find DD Online</p>
                <div className="space-y-2">
                  {[
                    { label: "Instagram", href: INSTAGRAM_URL, handle: "@denisedanberg" },
                    { label: "Apple Podcasts", href: APPLE_PODCASTS_URL, handle: "By Grit & Grace" },
                    { label: "Spotify", href: SPOTIFY_URL, handle: "By Grit & Grace" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-lg transition-colors"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.60)" }}>{s.label}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.70rem", color: "#7BA7BC" }}>{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP — cream ── */}
      <section style={{ background: "#F5F0E8", padding: "clamp(2.5rem, 5vw, 5rem) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="dd-label-dark mb-3">What People Say</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1E2E20" }}>
              The <em style={{ color: "#7BA7BC" }}>Impression</em> She Leaves
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUOTES.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-7 rounded-2xl"
                style={{ background: "#ffffff", border: "1px solid rgba(123, 167, 188,0.20)", boxShadow: "0 4px 24px rgba(123, 167, 188,0.10)" }}
              >
                <Quote size={22} style={{ color: "#7BA7BC", marginBottom: "1rem", opacity: 0.7 }} />
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.05rem", color: "#1E2E20", lineHeight: 1.65, marginBottom: "1rem" }}>
                  "{q.text}"
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.70rem", color: "rgba(30, 46, 32,0.45)", letterSpacing: "0.10em", textTransform: "uppercase" }}>— {q.attr}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS — plum ── */}
      <section style={{ background: "#1E2E20", padding: "clamp(2.5rem, 5vw, 5rem) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="dd-label mb-4">Topics & Expertise</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#ffffff" }}>
              What Denise <em style={{ color: "#7BA7BC" }}>Speaks To</em>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TOPICS.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="dd-badge"
                style={{ fontSize: "0.75rem", padding: "0.45rem 1rem" }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATS — cream, magazine card grid ── */}
      <section style={{ background: "#F5F0E8", padding: "clamp(3rem, 6vw, 6rem) 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="dd-label-dark mb-4">Available Formats</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#1E2E20" }}>
              How to Work with <em style={{ color: "#7BA7BC" }}>DD</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FORMATS.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-7 rounded-2xl transition-all duration-300"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(123, 167, 188,0.18)",
                  boxShadow: "0 2px 16px rgba(123, 167, 188,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, rgba(123, 167, 188,0.15), rgba(143, 181, 160,0.15))", color: "#7BA7BC" }}
                >
                  {f.icon}
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", color: "#1E2E20", marginBottom: "0.6rem" }}>{f.title}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.84rem", color: "rgba(30, 46, 32,0.60)", lineHeight: 1.7 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — deep plum with rose gradient ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #2E4232 0%, #1E2E20 50%, #2E4232 100%)",
          padding: "clamp(3rem, 6vw, 6rem) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(123, 167, 188,0.12) 0%, transparent 60%)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="dd-label mb-4">Get in Touch</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#ffffff", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Ready to Feature <em style={{ color: "#D4C4A8" }}>DD?</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.60)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: "520px", margin: "0 auto 2.5rem" }}>
            For media inquiries, interview requests, feature pitches, and brand partnership proposals — all messages are personally reviewed by Denise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <button className="dd-btn-primary">Submit a Media Inquiry</button>
            </Link>
            <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
              <button className="dd-btn-ghost">Listen to the Podcast</button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
