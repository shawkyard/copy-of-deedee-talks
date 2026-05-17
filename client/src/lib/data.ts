// DD Talks — Shared Data
// All content sourced from public information only. No private contact details.

export const APPLE_PODCASTS_URL = "https://podcasts.apple.com/us/podcast/by-grit-grace-we-are-warriors/id1752523910";
export const SPOTIFY_URL = "https://open.spotify.com/show/3kBebifNfyfscJDyhgpVeE";
export const INSTAGRAM_URL = "https://www.instagram.com/denisedanberg/";
export const FACEBOOK_URL = "https://www.facebook.com/p/By-Grit-Grace-61576960603203";
export const LINKTREE_URL = "https://linktr.ee/bygritandgrace";

export const LOGO_URL = "/manus-storage/dd-logo-mark_235d647d.svg";
export const HERO_BG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663573907938/oFkpQQQCGaFM3nrghAk97R/hero-bg-bloom-CpBdbLNKnGYQiJ8pg84cXU.webp";
export const PODCAST_BG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663573907938/oFkpQQQCGaFM3nrghAk97R/hero-bg-plum-QvDSKRtJY2jogYqKpbZsZv.webp";
export const SPEAKING_BG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663573907938/oFkpQQQCGaFM3nrghAk97R/hero-bg-floral-Uh9nrWmVDZV2E3cGxX6uNz.webp";
export const MANIFESTO_BG_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663573907938/oFkpQQQCGaFM3nrghAk97R/hero-bg-plum-QvDSKRtJY2jogYqKpbZsZv.webp";
export const AUDIENCE_CROWD_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663573907938/oFkpQQQCGaFM3nrghAk97R/hero-bg-light-RQeGSKZrSnZQ96X97ZL85Q.webp";

// Denise personal photos
export const DENISE_JASON_URL = "/manus-storage/IMG_0358_188ea928.JPG";
export const DENISE_LAURA_URL = "/manus-storage/IMG_0359(1)_6ae28988.JPG";
export const DENISE_MOM_URL = "/manus-storage/IMG_0397(1)_7cce7e3c.PNG";

// AI-generated professional portrait of Denise
export const DENISE_PORTRAIT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663573907938/YQjocCFgsRHmxQ7x85rn3n/denise-portrait-ai-dXyoRrQsZNzKvuzfJNGsS6.webp";

export interface Episode {
  id: string;
  title: string;
  date: string;
  duration?: string;
  description: string;
  category: string;
  appleUrl: string;
  spotifyUrl: string;
  featured?: boolean;
}

export const EPISODES: Episode[] = [
  {
    id: "e001",
    title: "Corporate Success to Kingdom Impact: Meet Sam Crowley",
    date: "April 25, 2026",
    duration: "39 min",
    description: "What happens when success no longer satisfies? Sam Crowley shares his journey from corporate executive to ministry leadership — a conversation about calling, courage, and choosing purpose over comfort.",
    category: "Leadership & Purpose",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
    featured: true,
  },
  {
    id: "e002",
    title: "Day 3 Disciples Made Here: Pray / Watch Community",
    date: "April 20, 2026",
    duration: "18 min",
    description: "Day three of the Discipleship Series. DD and Heather explore what it looks like to build a community of prayer and watchfulness in your own neighborhood.",
    category: "Faith in Real Life",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
  },
  {
    id: "e003",
    title: "Day 2 Disciples Made Here: Pray / Watch List",
    date: "April 17, 2026",
    duration: "16 min",
    description: "Continuing the Discipleship Series — building your personal prayer and watch list as a practical tool for intentional discipleship.",
    category: "Faith in Real Life",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
  },
  {
    id: "e004",
    title: "Day 1: The Call to Pray and The Courage to Listen",
    date: "April 14, 2026",
    duration: "15 min",
    description: "DD shares a raw and honest moment navigating a hard conversation with her adult child, and what it looks like to receive confrontation with humility instead of defensiveness.",
    category: "Faith in Real Life",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
    featured: true,
  },
  {
    id: "e005",
    title: "Jesus' Call to Multiply: An Introduction to Making Disciples",
    date: "April 4, 2026",
    duration: "22 min",
    description: "An introduction to the Discipleship Series — what does it actually mean to make disciples in the modern world? DD and Heather unpack the call and the challenge.",
    category: "Faith in Real Life",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
  },
  {
    id: "e006",
    title: "Disciples Who Make Disciples",
    date: "March 15, 2026",
    duration: "25 min",
    description: "The ripple effect of discipleship — how one person's faithfulness can multiply across generations. A conversation about legacy, obedience, and the long game of faith.",
    category: "Faith in Real Life",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
  },
  {
    id: "e007",
    title: "From Epstein Chaos to the Glory of God",
    date: "March 3, 2026",
    duration: "30 min",
    description: "DD and Heather take on one of the most talked-about news stories and bring it back to what matters — how God's glory shows up even in the darkest headlines.",
    category: "Honest Conversations",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
  },
  {
    id: "e008",
    title: "Guns, Rights, and Real Girl Talk",
    date: "February 4, 2026",
    duration: "35 min",
    description: "Two women. One real conversation about guns, rights, personal safety, and what it means to hold convictions with grace. No filter, no agenda — just honest dialogue.",
    category: "Honest Conversations",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
  },
  {
    id: "e009",
    title: "One Word God Gave Me: Discernment, Direction, and 2026",
    date: "January 2026",
    duration: "28 min",
    description: "As a new year begins, DD and Heather share the one word God placed on their hearts for 2026 — and what it means to walk into a season with discernment and direction.",
    category: "Faith in Real Life",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
    featured: true,
  },
  {
    id: "e010",
    title: "Grit Under Pressure: Finding Grace When We're Riled Up",
    date: "December 17, 2025",
    duration: "27 min",
    description: "Life turns up the heat — conflict, exhaustion, and frustration test every ounce of patience. Heather and DD talk through how to find grace when you are riled up.",
    category: "Grit & Grace",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
    featured: true,
  },
  {
    id: "e011",
    title: "Choosing Joy in Chaos",
    date: "November 28, 2025",
    duration: "30 min",
    description: "Heather and DD unpack the grit it takes to choose joy when life gets heavy. They talk about what it means to be still in the middle of the storm — and how joy is a decision, not a feeling.",
    category: "Healing, Hope & Resilience",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
    featured: true,
  },
  {
    id: "e012",
    title: "Friday Night Wrap-Up: God Shows Up Every Time",
    date: "November 14, 2025",
    duration: "20 min",
    description: "A casual Friday wrap-up where Heather and DD reflect on the week and share the moments where God showed up in the ordinary, the unexpected, and the beautiful.",
    category: "Encouragement",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
  },
  {
    id: "e013",
    title: "50th Episode Celebration",
    date: "June 6, 2025",
    duration: "45 min",
    description: "Fifty episodes of real talk, real faith, and real friendship. Heather and DD celebrate the milestone with reflections on the journey, listener love, and what is coming next.",
    category: "Encouragement",
    appleUrl: APPLE_PODCASTS_URL,
    spotifyUrl: SPOTIFY_URL,
  },
];

export const CATEGORIES = [
  "All Episodes",
  "Faith in Real Life",
  "Grit & Grace",
  "Honest Conversations",
  "Healing, Hope & Resilience",
  "Leadership & Purpose",
  "Encouragement",
  "Motherhood & Family",
  "Women's Wisdom",
];

export const PILLARS = [
  {
    icon: "✝️",
    title: "Faith in Real Life",
    description: "Not Sunday-morning faith. Everyday, gritty, honest, sometimes messy faith that holds you when nothing else does.",
  },
  {
    icon: "💪",
    title: "Grit & Grace",
    description: "The two things that get you through. Grit to keep moving. Grace to forgive yourself and others along the way.",
  },
  {
    icon: "🤝",
    title: "Friendship",
    description: "The kind that shows up at 2am. The kind that tells you the truth. The kind that changes your life.",
  },
  {
    icon: "❤️",
    title: "Motherhood & Family",
    description: "The love, the chaos, the growth, the hard conversations, and the extraordinary gift of watching your people become who they are meant to be.",
  },
  {
    icon: "🌿",
    title: "Life Transitions",
    description: "Seasons change. Jobs end. Relationships shift. Kids grow up. And somehow, you are still becoming.",
  },
  {
    icon: "👑",
    title: "Women's Wisdom Years",
    description: "The chapter nobody talks about enough — the one where you finally stop apologizing for who you are.",
  },
  {
    icon: "🎯",
    title: "Leadership & Purpose",
    description: "Leading with heart, humor, and faith. Finding your calling and walking toward it even when it is terrifying.",
  },
  {
    icon: "🌅",
    title: "Healing & Resilience",
    description: "You have been through things. And you are still here. That is not nothing. That is everything.",
  },
  {
    icon: "💬",
    title: "Honest Conversations",
    description: "The ones that are uncomfortable. The ones that are necessary. The ones that actually change things.",
  },
  {
    icon: "🌟",
    title: "Encouragement",
    description: "Sometimes you just need someone to remind you that you are not alone, you are not too late, and you are more than enough.",
  },
];

export const MANIFESTO_LINES = [
  "I believe in conversations that cost something.",
  "I believe in faith that holds even when it shakes.",
  "I believe in friendships that tell you the truth.",
  "I believe in motherhood that is messy and magnificent.",
  "I believe in women who keep going.",
  "I believe in grace for the parts of yourself you have not forgiven yet.",
  "I believe in the grit it takes to show up when you would rather disappear.",
  "I believe in the extraordinary hiding inside ordinary days.",
  "I believe that the conversation you are afraid to start is usually the one that changes everything.",
];

export interface AudiencePage {
  id: string;
  slug: string;
  label: string;
  headline: string;
  subheadline: string;
  intro: string;
  valueProps: { title: string; description: string }[];
  cta: string;
  ctaLink: string;
  bgAccent: string;
}

export const AUDIENCE_PAGES: AudiencePage[] = [
  {
    id: "a1",
    slug: "for-women-of-faith",
    label: "For Women of Faith",
    headline: "Your Faith Is Not Too Small. And Neither Are You.",
    subheadline: "A space built for women who believe — and who are still figuring out what that means.",
    intro: "Denise Danberg has spent years in the messy, beautiful, sometimes confusing space of living faith out loud. If you have ever felt like your faith was too complicated to talk about, too shaky to share, or too real for polished Sunday answers — DD Talks was built for you.",
    valueProps: [
      { title: "Real Faith, Real Life", description: "Every episode of By Grit and Grace and every conversation in this space is grounded in honest, everyday faith — not performance, not perfection." },
      { title: "A Voice That Gets It", description: "Denise speaks from experience, not from a pedestal. She has walked through the hard seasons and she brings that honesty to every word." },
      { title: "Community Over Comparison", description: "DD Talks is a place where women lift each other up, not compete. Come as you are and find your people." },
      { title: "Encouragement That Actually Helps", description: "Not empty platitudes. Real, grounded encouragement that meets you where you are and reminds you who you are." },
    ],
    cta: "Listen to the Podcast",
    ctaLink: APPLE_PODCASTS_URL,
    bgAccent: "faith",
  },
  {
    id: "a2",
    slug: "for-podcast-fans",
    label: "For Podcast Fans",
    headline: "75+ Episodes. Zero Filters. All Real.",
    subheadline: "By Grit and Grace – We Are Warriors is the podcast that started it all.",
    intro: "If you found DD through the podcast, welcome home. By Grit and Grace has been bringing you Heather and DD — Denise Danberg — since June 2024, with over 75 episodes of honest, warm, sometimes hilarious, always meaningful conversation. And this is just the beginning.",
    valueProps: [
      { title: "New Episodes Regularly", description: "Fresh conversations drop regularly. Subscribe on Apple Podcasts or Spotify and never miss a moment." },
      { title: "Real Talk on Real Topics", description: "From faith and family to world events, parenting, marriage, and the mysteries of God — no topic is off limits." },
      { title: "5-Star Rated", description: "Listeners consistently rate By Grit and Grace five stars for its authenticity, warmth, and the way it makes them feel less alone." },
      { title: "DD Is Just Getting Started", description: "The podcast is the foundation. A whole new chapter of DD Talks is coming — and you are here at the beginning of something big." },
    ],
    cta: "Browse All Episodes",
    ctaLink: "/podcast",
    bgAccent: "podcast",
  },
  {
    id: "a3",
    slug: "for-event-planners",
    label: "For Event Planners",
    headline: "Your Audience Deserves a Voice That Moves Them.",
    subheadline: "Denise Danberg is available for speaking engagements, panels, women's events, and faith-centered gatherings.",
    intro: "If you are building an event that needs a speaker who will not just fill a slot but actually move a room — Denise Danberg is the conversation your audience has been waiting for. She brings warmth, humor, honesty, and the kind of presence that makes people feel seen.",
    valueProps: [
      { title: "Authentic Stage Presence", description: "Denise does not perform. She shows up as herself, every time, and invites your audience to do the same. The result is a room that opens up." },
      { title: "Versatile Format", description: "Available for keynotes, panels, fireside chats, workshops, women's retreats, faith events, and community gatherings — in person or virtual." },
      { title: "Faith-Centered Perspective", description: "Denise brings a grounded, faith-informed perspective to every conversation — ideal for faith-based organizations, women's ministries, and purpose-driven events." },
      { title: "Memorable and Shareable", description: "Audiences leave DD's sessions with something they will actually remember — and share. Her conversations create moments that last." },
    ],
    cta: "Submit a Speaking Inquiry",
    ctaLink: "/speaking",
    bgAccent: "speaking",
  },
  {
    id: "a4",
    slug: "for-media-press",
    label: "For Media & Press",
    headline: "A Voice the World Is Ready to Hear.",
    subheadline: "Denise Danberg is a rising media personality, podcast host, and conversation leader with a growing national audience.",
    intro: "DD Talks is the personal brand platform of Denise Danberg — co-host of By Grit and Grace – We Are Warriors, a top-rated faith and life podcast with over 75 episodes and a five-star rating on Apple Podcasts. Denise is a compelling voice at the intersection of faith, women's empowerment, honest conversation, and personal resilience.",
    valueProps: [
      { title: "Credible and Compelling", description: "With a 5-star podcast, a growing social media presence, and a deeply loyal audience, Denise is a media-ready voice with real credibility." },
      { title: "Broad Topic Range", description: "Denise speaks with authority and warmth on faith, women's leadership, family dynamics, personal resilience, honest dialogue, and cultural conversation." },
      { title: "Authentic Story", description: "Denise's story is not manufactured. It is lived. That authenticity translates powerfully in interviews, features, and media appearances." },
      { title: "A Brand on the Rise", description: "DD Talks is preparing for a major new chapter. Now is the time to introduce Denise Danberg to your audience." },
    ],
    cta: "Access the Media Kit",
    ctaLink: "/media-kit",
    bgAccent: "media",
  },
  {
    id: "a5",
    slug: "for-women-in-transition",
    label: "For Women in Transition",
    headline: "You Are Not Lost. You Are Between Chapters.",
    subheadline: "If your life is changing and you are not sure who you are becoming — this space is for you.",
    intro: "Whether you are navigating an empty nest, a career pivot, a relationship shift, a health challenge, or simply a season that does not have a name yet — Denise Danberg understands the disorientation of being in between. And she has something to say about it.",
    valueProps: [
      { title: "You Are Not Behind", description: "Denise speaks directly to the woman who feels like she missed the memo on her own life. You are not behind. You are right on time." },
      { title: "Practical Encouragement", description: "Not just inspiration — real, grounded encouragement that helps you take the next step even when you cannot see the whole staircase." },
      { title: "A Community of Warriors", description: "The By Grit and Grace community is full of women who are in the middle of their own transitions — and showing up for each other anyway." },
      { title: "Faith for the In-Between", description: "Denise brings a faith perspective that does not minimize the hard parts — it sits with you in them and points you toward what is on the other side." },
    ],
    cta: "Listen and Be Encouraged",
    ctaLink: APPLE_PODCASTS_URL,
    bgAccent: "transition",
  },
  {
    id: "a6",
    slug: "for-friends-and-family",
    label: "For Friends & Family",
    headline: "You Know Her. Now Meet DD Talks.",
    subheadline: "This is Denise — and she is building something extraordinary.",
    intro: "If you are here because someone you love sent you this link, welcome. This is the platform Denise Danberg has been building — a place where her voice, her faith, her humor, and her heart for real conversation come together. She has always had something to say. Now the world gets to hear it.",
    valueProps: [
      { title: "The Same Denise, Amplified", description: "The warmth, the honesty, the humor, the faith — it is all here. DD Talks is simply the platform that lets the world experience what you already know." },
      { title: "A Podcast Worth Sharing", description: "By Grit and Grace is the kind of show you send to your friends, your sister, your mom. Share it. It will mean something to them." },
      { title: "She Is Just Getting Started", description: "DD Talks is preparing for a major new chapter. Follow along, share the platform, and be part of what is coming." },
      { title: "Your Support Matters", description: "Following on social media, leaving a podcast review, and sharing this platform with people you love — it all adds up. And it means the world." },
    ],
    cta: "Follow DD Talks",
    ctaLink: INSTAGRAM_URL,
    bgAccent: "friends",
  },
  {
    id: "a7",
    slug: "for-faith-communities",
    label: "For Faith Communities",
    headline: "A Voice for the Church and Beyond It.",
    subheadline: "Denise Danberg brings faith-filled, honest, community-building conversation to churches, ministries, and faith organizations.",
    intro: "DD Talks is rooted in faith — not as a performance, but as a foundation. Denise Danberg's work through By Grit and Grace and her broader platform speaks directly to the questions, struggles, and joys that faith communities navigate every day. She is a voice that bridges the gap between Sunday morning and Monday reality.",
    valueProps: [
      { title: "Faith That Translates", description: "Denise speaks a language that resonates in the pew and in the parking lot — faith that is real, relatable, and rooted in Scripture without being preachy." },
      { title: "Women's Ministry Ready", description: "DD Talks is an ideal resource for women's ministries, small groups, Bible studies, and faith-based retreats looking for content that sparks real conversation." },
      { title: "Discipleship in Action", description: "The Discipleship Series on By Grit and Grace is a practical, accessible resource for faith communities building a culture of disciple-making." },
      { title: "A Speaker Who Serves", description: "Denise is available to speak at church events, women's conferences, ministry gatherings, and faith-based community events. She shows up to serve, not to perform." },
    ],
    cta: "Invite Denise to Your Community",
    ctaLink: "/speaking",
    bgAccent: "faith-community",
  },
];
