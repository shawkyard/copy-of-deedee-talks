// DD Talks — About Page
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Mic, Heart, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LOGO_URL, HERO_BG_URL, APPLE_PODCASTS_URL, MANIFESTO_LINES, MANIFESTO_BG_URL, DENISE_JASON_URL, DENISE_LAURA_URL, DENISE_MOM_URL, DENISE_PORTRAIT_URL } from "@/lib/data";

export default function About() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "80px", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${HERO_BG_URL})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.30 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.60) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="dd-label mb-4">About DD Talks</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#ffffff", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              She Is the <span style={{ color: "#F97316", fontStyle: "italic" }}>Conversation.</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", maxWidth: "560px", lineHeight: 1.7 }}>
              The story of Denise Danberg — and why she built a platform around the conversations that matter most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: "#0d0d0d", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Superstar photo stack */}
            <div className="relative" style={{ minHeight: 500 }}>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  background: "#111",
                  border: "2px solid rgba(249,115,22,0.35)",
                  boxShadow: "0 0 60px rgba(249,115,22,0.20), 0 20px 60px rgba(0,0,0,0.70)",
                }}
              >
                <img
                  src={DENISE_PORTRAIT_URL}
                  alt="Denise Danberg — DD"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: "1.5rem" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "#ffffff" }}>Denise Danberg</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#F97316", letterSpacing: "0.12em", textTransform: "uppercase" }}>DD — Host & Conversation Architect</p>
                </div>
              </div>
              {/* Floating mini: Denise & Laura */}
              <div className="absolute -top-4 -right-4 rounded-xl overflow-hidden" style={{ width: 130, height: 130, border: "2px solid rgba(249,115,22,0.50)", boxShadow: "0 8px 32px rgba(0,0,0,0.60)", zIndex: 10 }}>
                <img src={DENISE_LAURA_URL} alt="Denise with Laura" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              </div>
              {/* Floating mini: Denise & Mom */}
              <div className="absolute -bottom-4 -right-4 rounded-xl overflow-hidden" style={{ width: 120, height: 120, border: "2px solid rgba(249,115,22,0.50)", boxShadow: "0 8px 32px rgba(0,0,0,0.60)", zIndex: 10 }}>
                <img src={DENISE_MOM_URL} alt="Denise with Mom" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              </div>
            </div>
            <div>
              <p className="dd-label mb-5">Her Story</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#ffffff", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                A Woman of Faith, Grit, and <span style={{ color: "#F97316", fontStyle: "italic" }}>Unapologetic Voice</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.70)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Denise Danberg — known to her listeners and community as DD — is a woman of faith, a mother, a friend, and a voice that does not flinch from the real stuff of life. She built DD Talks not to perform, but to connect. Not to preach, but to have the kind of honest, warm, sometimes hilarious, always meaningful conversations that women actually need.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.70)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                DD Talks exists because real life is not always pretty, and women deserve a space where they do not have to pretend otherwise. This platform was built for the seasons that are hard to explain, the friendships that carry you, the faith that holds even when it shakes, and the conversations you have been wanting to have but did not know where to start.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.70)", lineHeight: 1.8, marginBottom: "2rem" }}>
                Whether she is co-hosting <em style={{ color: "#F97316" }}>By Grit and Grace</em> with her friend Heather, stepping onto a stage, or sitting across from someone who just needs to be heard, Denise brings the same thing every time: faith-filled courage, genuine warmth, and the kind of honesty that makes you feel less alone.
              </p>
              <blockquote style={{ borderLeft: "3px solid #F97316", paddingLeft: "1.25rem", marginBottom: "2rem", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.05rem", color: "rgba(255,255,255,0.80)" }}>
                "The conversation you are afraid to start is usually the one that changes everything."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* What drives her */}
      <section style={{ background: "#111111", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="dd-label mb-4">What Drives Her</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#ffffff" }}>
              The Beliefs Behind <span style={{ color: "#F97316", fontStyle: "italic" }}>Every Word</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Heart size={22} />, title: "Real Talk Changes Real Lives", body: "Denise believes that honest conversation is not just good for the soul — it is transformative. When women stop performing and start connecting, everything changes." },
              { icon: <Star size={22} />, title: "Faith Is Not a Sunday-Only Experience", body: "Faith that only shows up on Sunday is not enough for the Monday through Saturday that actually happens. Denise brings faith into the everyday, the messy, and the real." },
              { icon: <Mic size={22} />, title: "Women Deserve More Than a Highlight Reel", body: "Social media has sold women a version of life that does not exist. DD Talks is the antidote — a space where the real story is the whole story." },
            ].map((c, i) => (
              <div key={i} className="dd-glass p-8">
                <div className="dd-pillar-icon mb-5">{c.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.1rem", color: "#ffffff", marginBottom: "0.75rem" }}>{c.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.60)", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The platform */}
      <section style={{ background: "#0a0a0a", padding: "6rem 0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="dd-label mb-5">The Platform</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#ffffff", marginBottom: "1.5rem" }}>
            From a Podcast to a <span style={{ color: "#F97316", fontStyle: "italic" }}>Movement</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            DD Talks grew from a genuine desire to connect, encourage, and speak truth. What started as a podcast — <em style={{ color: "#F97316" }}>By Grit and Grace – We Are Warriors</em>, co-hosted with her friend Heather — has become the foundation of a broader personal brand platform that is just getting started.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            With 75+ episodes, a five-star rating, and a growing community of women who show up for each other, DD Talks is preparing for a bold new chapter. A revolution in real conversation. And Denise Danberg is leading it.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={APPLE_PODCASTS_URL} target="_blank" rel="noopener noreferrer">
              <button className="dd-btn-primary flex items-center gap-2"><Mic size={14} /> Listen to the Podcast</button>
            </a>
            <Link href="/speaking">
              <button className="dd-btn-ghost flex items-center gap-2">Invite Denise to Speak <ArrowRight size={14} /></button>
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto teaser */}
      <section style={{ background: "#111111", padding: "5rem 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="dd-label mb-6">What DD Believes</p>
          <div className="space-y-3">
            {MANIFESTO_LINES.slice(0, 5).map((line, i) => (
              <p key={i} style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(0.95rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.80)", lineHeight: 1.5 }}>{line}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
