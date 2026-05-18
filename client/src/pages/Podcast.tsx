// DD Talks — Podcast Archive Page
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PODCAST_BG_URL, APPLE_PODCASTS_URL, SPOTIFY_URL, EPISODES, CATEGORIES } from "@/lib/data";

export default function Podcast() {
  const [activeCategory, setActiveCategory] = useState("All Episodes");

  const filtered = activeCategory === "All Episodes"
    ? EPISODES
    : EPISODES.filter((e) => e.category === activeCategory);

  return (
    <div style={{ background: "#1A0F2E", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "clamp(72px, 8vw, 80px)", minHeight: "clamp(260px, 40vh, 55vh)", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${PODCAST_BG_URL})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.65 }} />
        <div className="absolute inset-0" style={{ background: "rgba(26,15,46,0.80)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="dd-label mb-4">The Podcast</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#ffffff", lineHeight: 1.1, marginBottom: "1rem" }}>
              By Grit &amp; Grace —{" "}
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>We Are Warriors</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.62)", maxWidth: "580px", margin: "0 auto 1.5rem", lineHeight: 1.7 }}>
              Heather and DD — Denise Danberg — invite you into the crazy, amusingly unconventional world of two women who refuse to let life flatten them. 75+ episodes. 5-star rated. All real.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
                <button className="dd-btn-primary flex items-center gap-2"><Play size={14} /> Apple Podcasts</button>
              </a>
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                <button className="dd-btn-ghost">Spotify</button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#FAF7F5", padding: "3rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "75+", label: "Episodes" },
              { value: "5.0", label: "Apple Rating" },
              { value: "2024", label: "Since June" },
              { value: "∞", label: "Real Talk" },
            ].map((s, i) => (
              <div key={i} className="dd-glass-light p-5 text-center">
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "2rem", color: "#C084A8" }}>{s.value}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(26,15,46,0.50)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ background: "#1A0F2E", padding: "3rem 0 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.4rem 1rem",
                  borderRadius: "4px",
                  border: `1px solid ${activeCategory === cat ? "#C084A8" : "rgba(192,132,168,0.20)"}`,
                  background: activeCategory === cat ? "rgba(192,132,168,0.12)" : "transparent",
                  color: activeCategory === cat ? "#C084A8" : "rgba(255,255,255,0.55)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Episode list */}
      <section style={{ background: "#1A0F2E", padding: "2rem 0 6rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {filtered.map((ep, i) => (
              <motion.div
                key={ep.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="dd-episode-card p-4 sm:p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="dd-badge">{ep.category}</span>
                  {ep.featured && (
                    <span className="dd-badge" style={{ background: "rgba(192,132,168,0.20)", color: "#C084A8" }}>Featured</span>
                  )}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#ffffff", lineHeight: 1.4, marginBottom: "0.6rem", flex: 1 }}>
                  {ep.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.80rem", color: "rgba(255,255,255,0.52)", lineHeight: 1.65, marginBottom: "1rem" }}>
                  {ep.description}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto gap-2">
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>{ep.date}</p>
                    {ep.duration && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>{ep.duration}</p>}
                  </div>
                  <div className="flex gap-2">
                    <a href={ep.appleUrl} target="_blank" rel="noopener noreferrer" className="dd-platform-btn" style={{ fontSize: "0.65rem", padding: "0.3rem 0.65rem" }}>Apple</a>
                    <a href={ep.spotifyUrl} target="_blank" rel="noopener noreferrer" className="dd-platform-btn" style={{ fontSize: "0.65rem", padding: "0.3rem 0.65rem" }}>Spotify</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Mic size={40} style={{ color: "rgba(192,132,168,0.30)", margin: "0 auto 1rem" }} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.40)" }}>No episodes in this category yet.</p>
            </div>
          )}

          <div className="text-center mt-12">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", marginBottom: "1rem" }}>
              New episodes drop regularly. Subscribe to never miss a conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
                <button className="dd-btn-primary">Subscribe on Apple Podcasts</button>
              </a>
              <a href={SPOTIFY_URL} target="_blank" rel="noopener noreferrer">
                <button className="dd-btn-ghost">Follow on Spotify</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
