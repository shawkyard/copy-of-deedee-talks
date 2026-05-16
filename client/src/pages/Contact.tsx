// DD Talks — Contact Page
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormType = "speaking" | "media" | "private";

export default function Contact() {
  const [activeForm, setActiveForm] = useState<FormType>("speaking");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", subject: "", message: "", eventType: "", format: "In-Person", response: "No Response Needed" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const tabs: { id: FormType; label: string; desc: string }[] = [
    { id: "speaking", label: "Speaking Inquiry", desc: "Book Denise for your event, panel, retreat, or gathering." },
    { id: "media", label: "Media & Press", desc: "Interviews, features, podcast guest requests, and media partnerships." },
    { id: "private", label: "Private Message", desc: "A personal, confidential message directly to Denise." },
  ];

  return (
    <div style={{ background: "#1A0F2E", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ paddingTop: "80px", background: "#FAF7F5", padding: "7rem 0 4rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="dd-label-dark mb-4">Contact</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#1A0F2E", lineHeight: 1.1, marginBottom: "1rem" }}>
              Start the <span style={{ color: "#A8628A", fontStyle: "italic" }}>Conversation</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "rgba(26,15,46,0.65)", maxWidth: "520px", lineHeight: 1.7 }}>
              Choose the pathway that fits your purpose. All messages are personally reviewed by Denise. No phone numbers, email addresses, or office addresses are shared through this platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section style={{ background: "#1A0F2E", padding: "3rem 0 6rem" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => { setActiveForm(t.id); setSubmitted(false); setForm({ name: "", subject: "", message: "", eventType: "", format: "In-Person", response: "No Response Needed" }); }}
                className="flex-1 p-4 text-left rounded-xl transition-all duration-200"
                style={{
                  background: activeForm === t.id ? "rgba(192,132,168,0.10)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${activeForm === t.id ? "#C084A8" : "rgba(192,132,168,0.15)"}`,
                  cursor: "pointer",
                }}
              >
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: activeForm === t.id ? "#C084A8" : "#ffffff", marginBottom: "0.25rem" }}>{t.label}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>{t.desc}</p>
              </button>
            ))}
          </div>

          <div className="dd-glass p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{activeForm === "private" ? "🔒" : "✅"}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.75rem" }}>
                  {activeForm === "private" ? "Message Received Privately" : "Inquiry Received"}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                  {activeForm === "private"
                    ? "Your message is private and will be read by Denise personally. Nothing shared here will be published or redistributed."
                    : "Thank you for reaching out. All inquiries are personally reviewed. Please allow 5–7 business days for a response."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Your Name *</label>
                  <input className="dd-input" required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>

                {activeForm === "speaking" && (
                  <>
                    <div>
                      <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Event Type *</label>
                      <select className="dd-input" required value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} style={{ background: "rgba(255,255,255,0.05)", color: form.eventType ? "#fff" : "rgba(255,255,255,0.30)" }}>
                        <option value="" disabled>Select event type</option>
                        <option>Women's Group</option>
                        <option>Faith Event</option>
                        <option>Community Event</option>
                        <option>Panel</option>
                        <option>Podcast Guest</option>
                        <option>Church Event</option>
                        <option>Women's Retreat</option>
                        <option>Interview</option>
                        <option>Other</option>
                      </select>
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
                  </>
                )}

                {activeForm === "media" && (
                  <div>
                    <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Subject *</label>
                    <input className="dd-input" required placeholder="Interview request, feature pitch, partnership..." value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                  </div>
                )}

                {activeForm === "private" && (
                  <>
                    <div>
                      <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Subject</label>
                      <input className="dd-input" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                    </div>
                    <div>
                      <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>Preferred Response</label>
                      <select className="dd-input" value={form.response} onChange={(e) => setForm({ ...form, response: e.target.value })} style={{ background: "rgba(255,255,255,0.05)", color: "#fff" }}>
                        <option>No Response Needed</option>
                        <option>Reply via This Platform Only</option>
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label className="dd-label block mb-1.5" style={{ fontSize: "0.65rem" }}>
                    {activeForm === "speaking" ? "Tell DD About Your Event *" : activeForm === "media" ? "Your Message *" : "Your Private Message"}
                  </label>
                  <textarea
                    className="dd-input"
                    required={activeForm !== "private"}
                    rows={5}
                    placeholder={
                      activeForm === "speaking" ? "Describe your event, audience, and what you are hoping DD will bring..."
                        : activeForm === "media" ? "Describe your media request or proposal..."
                        : "Your private message to Denise..."
                    }
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button type="submit" className={activeForm === "private" ? "dd-btn-ghost w-full" : "dd-btn-primary w-full"}>
                  {activeForm === "speaking" ? "Send My Inquiry" : activeForm === "media" ? "Send Media Inquiry" : "Send a Private Message"}
                </button>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.28)", textAlign: "center" }}>
                  {activeForm === "private"
                    ? "Your message is private. Nothing shared here will be published, redistributed, or shared with third parties."
                    : "All inquiries are personally reviewed. Please allow 5–7 business days for a response. No phone numbers, email addresses, or office addresses are shared through this platform."}
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
