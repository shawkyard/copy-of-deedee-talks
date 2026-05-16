// DD Talks — Speaking Page
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SPEAKING_BG_URL } from "@/lib/data";

const SPEAKING_TOPICS = [
  { title: "Grit, Grace, and Getting Through", desc: "The two things that carry women through every hard season — and how to hold both at the same time." },
  { title: "The Conversations We're Afraid to Start", desc: "Why the most important conversations are the ones we keep avoiding — and how to finally have them." },
  { title: "Faith for the Messy Middle", desc: "What faith actually looks like in the seasons that don't have a name yet." },
  { title: "Women Who Keep Going", desc: "A celebration of resilience, persistence, and the extraordinary strength of ordinary women." },
  { title: "Friendship That Tells the Truth", desc: "The kind of friendship that changes your life — and how to build it, keep it, and be it." },
  { title: "Making Disciples in the Modern World", desc: "A practical, accessible conversation about what it means to live out the Great Commission today." },
  { title: "The Wisdom Years", desc: "The chapter nobody talks about enough — and why it might be the most powerful season of a woman's life." },
  { title: "Leading with Heart and Humor", desc: "How authenticity, warmth, and a willingness to laugh at yourself make you a better leader." },
];

export default function Speaking() {
  const [form, setForm] = useState({ name: "", org: "", eventType: "", date: "", format: "In-Person", description: "", howHeard: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div style={{ background: "#1A0F2E", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "80px", minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${SPEAKING_BG_URL})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.60 }} />
        <div className="absolute inset-0" style={{ background: "rgba(26,15,46,0.82)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="dd-label mb-4">Speaking & Events</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#ffffff", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Invite DD Into{" "}
              <span style={{ color: "#C084A8", fontStyle: "italic" }}>the Conversation</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.65)", maxWidth: "560px", lineHeight: 1.7 }}>
              Denise Danberg is available for faith-centered events, women's groups, community gatherings, panels, podcast guest appearances, and leadership conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to expect */}
      <section style={{ background: "#FAF7F5", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="dd-label-dark mb-4">What to Expect</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1A0F2E" }}>
              A Voice That <span style={{ color: "#C084A8", fontStyle: "italic" }}>Moves a Room</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Authenticity", body: "Denise does not perform. She shows up as herself, every time, and invites your audience to do the same. The result is a room that opens up." },
              { title: "Warmth & Humor", body: "She brings the kind of energy that makes a room feel like a living room — safe, real, and alive. Your audience will leave feeling seen." },
              { title: "Faith-Filled Courage", body: "Every conversation Denise leads is grounded in faith, honesty, and the belief that real talk changes real lives." },
            ].map((c, i) => (
              <div key={i} className="dd-glass-light p-8">
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.2rem", color: "#C084A8", marginBottom: "0.75rem" }}>{c.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section style={{ background: "#221540", padding: "6rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="dd-label mb-4">Speaking Topics</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#ffffff" }}>
              Conversations That <span style={{ color: "#C084A8", fontStyle: "italic" }}>Change Things</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SPEAKING_TOPICS.map((t, i) => (
              <div key={i} className="dd-glass p-6">
                <div style={{ width: 32, height: 32, background: "rgba(192,132,168,0.12)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "0.85rem", color: "#C084A8" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "0.95rem", color: "#ffffff", marginBottom: "0.5rem", lineHeight: 1.3 }}>{t.title}</h4>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.52)", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section style={{ background: "#1A0F2E", padding: "6rem 0" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="dd-label mb-4">Book DD</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#ffffff" }}>
              Submit a <span style={{ color: "#C084A8", fontStyle: "italic" }}>Speaking Inquiry</span>
            </h2>
          </div>
          <div className="dd-glass p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.75rem" }}>Inquiry Received</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                  Thank you for reaching out. All inquiries are personally reviewed. Please allow 5–7 business days for a response. Submitting this form does not confirm availability or booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Your Name *</label>
                    <input className="dd-input" required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Organization or Event Name *</label>
                    <input className="dd-input" required placeholder="Organization / event" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Event Type *</label>
                    <select className="dd-input" required value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} style={{ background: "rgba(255,255,255,0.05)", color: form.eventType ? "#fff" : "rgba(255,255,255,0.30)" }}>
                      <option value="" disabled>Select event type</option>
                      <option>Women's Group</option>
                      <option>Faith Event</option>
                      <option>Community Event</option>
                      <option>Panel</option>
                      <option>Podcast Guest</option>
                      <option>Leadership Conversation</option>
                      <option>Women's Retreat</option>
                      <option>Church Event</option>
                      <option>Interview</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Anticipated Event Date</label>
                    <input className="dd-input" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} style={{ colorScheme: "dark" }} />
                  </div>
                </div>
                <div>
                  <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Event Format</label>
                  <div className="flex gap-4">
                    {["In-Person", "Virtual", "Hybrid"].map((f) => (
                      <label key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.70)" }}>
                        <input type="radio" name="format" value={f} checked={form.format === f} onChange={() => setForm({ ...form, format: f })} style={{ accentColor: "#C084A8" }} />
                        {f}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Tell DD About Your Event and Audience *</label>
                  <textarea className="dd-input" required rows={5} placeholder="Describe your event, audience, and what you are hoping DD will bring to the room..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} style={{ resize: "vertical" }} />
                </div>
                <div>
                  <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>How Did You Hear About DD Talks? (Optional)</label>
                  <input className="dd-input" placeholder="Podcast, social media, referral, etc." value={form.howHeard} onChange={(e) => setForm({ ...form, howHeard: e.target.value })} />
                </div>
                <button type="submit" className="dd-btn-primary w-full">Send My Inquiry</button>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.70rem", color: "rgba(255,255,255,0.30)", textAlign: "center" }}>
                  All inquiries are personally reviewed. Please allow 5–7 business days for a response. Submitting this form does not confirm availability or booking. No phone numbers, email addresses, or office addresses are shared through this platform.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
