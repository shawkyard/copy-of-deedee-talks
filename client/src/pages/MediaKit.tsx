// DD Talks — Media Kit Page
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Download, Mic, Star, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LOGO_URL, APPLE_PODCASTS_URL, SPOTIFY_URL, INSTAGRAM_URL } from "@/lib/data";

const TOPICS = [
  "Faith in Real Life", "Grit & Grace", "Women's Resilience", "Honest Conversations",
  "Motherhood & Family", "Life Transitions", "Discipleship", "Women's Leadership",
  "Friendship", "Healing & Hope", "The Wisdom Years", "Community",
];

const FORMATS = [
  { title: "Keynote", desc: "45–60 minute signature talk for women's events, faith conferences, and community gatherings." },
  { title: "Panel", desc: "Moderator or panelist for conversations on faith, women's leadership, and cultural topics." },
  { title: "Podcast Guest", desc: "Available for guest appearances on podcasts across faith, women's empowerment, and life topics." },
  { title: "Fireside Chat", desc: "Intimate conversational format ideal for smaller groups, retreats, and leadership events." },
  { title: "Workshop", desc: "Interactive sessions on discipleship, honest conversation, and women's community building." },
  { title: "Interview", desc: "Print, digital, video, and audio interviews for media outlets, blogs, and publications." },
];

export default function MediaKit() {
  return (
    <div style={{ background: "#1A0F2E", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: "80px", background: "#FAF7F5", padding: "7rem 0 5rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="dd-label mb-4">Media Kit</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#ffffff", lineHeight: 1.1, marginBottom: "1.25rem", maxWidth: "700px" }}>
              A Voice the World Is <span style={{ color: "#C084A8", fontStyle: "italic" }}>Ready to Hear.</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", maxWidth: "560px", lineHeight: 1.7, marginBottom: "2rem" }}>
              Denise Danberg is a rising media personality, podcast host, speaker, and conversation leader with a growing national audience and a five-star reputation for authenticity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <button className="dd-btn-primary flex items-center gap-2"><Download size={14} /> Request Full Media Kit</button>
              </Link>
              <Link href="/speaking">
                <button className="dd-btn-ghost flex items-center gap-2">Book for an Event <ArrowRight size={14} /></button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#221540", padding: "4rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: <Mic size={20} />, value: "75+", label: "Podcast Episodes" },
              { icon: <Star size={20} />, value: "5.0", label: "Apple Podcasts Rating" },
              { icon: <Users size={20} />, value: "Growing", label: "Listener Community" },
              { icon: <Star size={20} />, value: "2024", label: "Launched June" },
            ].map((s, i) => (
              <div key={i} className="dd-glass p-6 text-center">
                <div className="dd-pillar-icon mx-auto mb-3">{s.icon}</div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.6rem", color: "#C084A8" }}>{s.value}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.50)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section style={{ background: "#FAF7F5", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <p className="dd-label-dark mb-5">Official Bio</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1A0F2E", marginBottom: "1.5rem" }}>
                Denise Danberg — <span style={{ color: "#C084A8", fontStyle: "italic" }}>DD</span>
              </h2>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.68)", lineHeight: 1.8 }}>
                <p style={{ marginBottom: "1.25rem" }}>
                  Denise Danberg — known to her listeners and community as DD — is a woman of faith, a mother, a friend, and a voice that does not flinch from the real stuff of life. She is the co-host of <em style={{ color: "#C084A8" }}>By Grit and Grace – We Are Warriors</em>, a top-rated faith and life podcast with over 75 episodes and a five-star rating on Apple Podcasts, launched in June 2024.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  Through DD Talks, her personal brand platform, Denise is building a space where honest conversation, faith-filled courage, and grace for the messy middle come together. She speaks at faith events, women's gatherings, community organizations, and leadership conversations — bringing warmth, humor, and the kind of authenticity that makes a room feel safe.
                </p>
                <p>
                  Denise is a compelling voice at the intersection of faith, women's empowerment, honest dialogue, and personal resilience. DD Talks is preparing for a bold new chapter — and the world is ready to hear what she has to say.
                </p>
              </div>
            </div>
            <div>
              <p className="dd-label-dark mb-5">Brand Assets</p>
              <div className="dd-glass-light p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <img src={LOGO_URL} alt="DD Talks Logo" className="h-14 w-14 object-contain" />
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1rem", color: "#1A0F2E" }}>DD <span style={{ color: "#C084A8" }}>Talks</span></p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "rgba(26,15,46,0.40)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Denise Danberg</p>
                  </div>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(26,15,46,0.50)", lineHeight: 1.6, marginBottom: "1rem" }}>
                  Full brand asset package — logo files, color palette, typography guide, and approved photography — available upon request via the contact form.
                </p>
                <Link href="/contact">
                  <button className="dd-btn-ghost w-full" style={{ fontSize: "0.72rem" }}>Request Brand Assets</button>
                </Link>
              </div>
              <div className="dd-glass-light p-5">
                <p className="dd-label-dark mb-3" style={{ fontSize: "0.60rem" }}>Brand Colors</p>
                <div className="flex gap-2">
                  {[
                    { color: "#1A0F2E", label: "Plum" },
                    { color: "#C084A8", label: "Rose" },
                    { color: "#A78BCA", label: "Lavender" },
                    { color: "#7EB8D4", label: "Blue" },
                  ].map((c) => (
                    <div key={c.color} className="text-center">
                      <div style={{ width: 36, height: 36, background: c.color, borderRadius: "6px", border: "1px solid rgba(255,255,255,0.12)", marginBottom: "0.25rem" }} />
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.6rem", color: "rgba(26,15,46,0.40)" }}>{c.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section style={{ background: "#221540", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="dd-label mb-4">Topics & Expertise</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#ffffff" }}>
              What Denise <span style={{ color: "#C084A8", fontStyle: "italic" }}>Speaks To</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TOPICS.map((t) => (
              <span key={t} className="dd-badge" style={{ fontSize: "0.72rem", padding: "0.35rem 0.85rem" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section style={{ background: "#1A0F2E", padding: "5rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="dd-label mb-4">Available Formats</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#ffffff" }}>
              How to Work with <span style={{ color: "#C084A8", fontStyle: "italic" }}>DD</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FORMATS.map((f, i) => (
              <div key={i} className="dd-glass p-6">
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", color: "#C084A8", marginBottom: "0.5rem" }}>{f.title}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#221540", padding: "5rem 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="dd-label mb-4">Get in Touch</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#ffffff", marginBottom: "1.25rem" }}>
            Ready to Feature <span style={{ color: "#C084A8", fontStyle: "italic" }}>DD?</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.7, marginBottom: "2rem" }}>
            For media inquiries, interview requests, feature pitches, and brand partnership proposals, please use the contact form. All media inquiries are personally reviewed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
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
