// DD Talks — Reflections Page
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MANIFESTO_BG_URL } from "@/lib/data";

const REFLECTIONS = [
  { title: "The Conversation You Keep Avoiding", date: "May 2026", category: "Honest Conversations", excerpt: "There is a conversation you have been putting off. You know the one. The one that lives in the back of your mind at 2am. The one that would change something if you had it. Here is what I have learned about why we avoid the conversations that matter most — and what it costs us when we do." },
  { title: "What I Know About Grit Now That I Did Not Know Then", date: "April 2026", category: "Grit & Grace", excerpt: "Grit is not what I thought it was. I used to think grit meant pushing through without feeling anything. White-knuckling your way to the other side. I was wrong. Real grit is softer than that — and harder than that — at the same time." },
  { title: "On Choosing Joy When Life Gets Heavy", date: "November 2025", category: "Healing & Resilience", excerpt: "Joy is not the absence of pain. It is the decision to hold something good even when everything around you is hard. That decision is an act of faith. And it is one of the bravest things a woman can do." },
  { title: "The Friend Who Tells You the Truth", date: "October 2025", category: "Friendship", excerpt: "The friends who love you enough to tell you the truth are the rarest and most valuable people in your life. Not the ones who agree with everything. The ones who care too much to let you stay comfortable in something that is not good for you." },
  { title: "Faith in the In-Between", date: "September 2025", category: "Faith in Real Life", excerpt: "The in-between is the hardest place to live. Not the crisis — the waiting. Not the ending — the not-yet-beginning. This is where faith is actually built. Not in the moments of clarity, but in the ones where you cannot see the next step and you take it anyway." },
  { title: "A Word for the Woman Who Thinks She Is Too Late", date: "August 2025", category: "Encouragement", excerpt: "You are not too late. I need you to hear that. Whatever it is you think you missed — the window, the season, the opportunity — I want to offer you a different perspective. The story is not over. It is not even close to over." },
];

export default function Reflections() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "80px", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${MANIFESTO_BG_URL})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 }} />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.82)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="dd-label mb-4">Reflections</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#ffffff", lineHeight: 1.1, marginBottom: "1rem" }}>
              Thoughts Worth <span style={{ color: "#F97316", fontStyle: "italic" }}>Sitting With</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.60)", maxWidth: "520px", lineHeight: 1.7 }}>
              A personal writing space where Denise shares reflections, encouragements, and honest observations about faith, life, and the seasons women walk through.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reflections grid */}
      <section style={{ background: "#0a0a0a", padding: "4rem 0 6rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFLECTIONS.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="dd-episode-card p-7 flex flex-col"
              >
                <span className="dd-badge mb-4">{r.category}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.1rem", color: "#ffffff", lineHeight: 1.4, marginBottom: "0.75rem", flex: 1 }}>{r.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{r.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>{r.date}</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#F97316", fontWeight: 600 }}>Read More →</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.40)" }}>More reflections coming soon. Follow DD on Instagram for the latest.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
