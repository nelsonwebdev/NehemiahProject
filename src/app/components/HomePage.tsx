import { useCampaignStats, fmtMoney, fmtDonors, fmtPct, pctNum } from "../hooks/useCampaignStats";

type Page = "home" | "history" | "news" | "donate" | "contact";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const priorities = [
  {
    title: "Priority 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
  },
  {
    title: "Priority 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
  },
  {
    title: "Priority 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
  },
];

function Shimmer({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block rounded bg-white/20 animate-pulse ${className ?? ""}`}
    />
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { goal, raised, donors, loading, lastUpdated } = useCampaignStats();
  const pct = pctNum(raised, goal);

  return (
    <div>
      {/* Hero */}
      <section
        className="relative bg-primary text-primary-foreground overflow-hidden"
        style={{ minHeight: "560px" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(https://www.nelson.edu/wp-content/uploads/2026/05/Aerial-5.editt_-scaled-e1778107602810.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-secondary text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The Nehemiah Project
            </p>
            <h1
              className="text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Campaign Tagline <em>Campaign Tagline Cont.</em>
            </h1>
            <p className="text-white/70 leading-relaxed mb-8 max-w-lg">
              A bold {fmtMoney(goal)} campaign to invest in people, programs, and places — securing Nelson's next century of excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("donate")}
                className="px-7 py-3 bg-white text-primary hover:opacity-90 transition-opacity"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                Make a Gift
              </button>
              <button
                onClick={() => onNavigate("history")}
                className="px-7 py-3 border border-white/40 text-white hover:border-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase" }}
              >
                Our Story
              </button>
            </div>
          </div>

          {/* Progress card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8">
            <div className="flex items-center justify-between mb-6">
              <p
                className="text-secondary text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Campaign Progress
              </p>
              {lastUpdated && (
                <p className="text-white/30 text-xs">
                  Updated {lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              )}
            </div>

            {/* Progress bar */}
            <div className="w-full bg-white/20 h-2 mb-3 overflow-hidden">
              <div
                className="bg-secondary h-2 transition-all duration-700 ease-out"
                style={{ width: loading ? "0%" : `${pct}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-white/60 mb-8">
              <span>{loading ? <Shimmer className="w-16 h-3" /> : `${fmtMoney(raised)} raised`}</span>
              <span>{loading ? <Shimmer className="w-16 h-3" /> : `${fmtMoney(goal)} goal`}</span>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: loading ? null : fmtMoney(goal), label: "Campaign Goal" },
                { val: loading ? null : fmtMoney(raised), label: "Raised to Date" },
                { val: loading ? null : fmtDonors(donors), label: "Donors" },
                { val: loading ? null : fmtPct(raised, goal), label: "Goal Achieved" },
              ].map(({ val, label }) => (
                <div key={label}>
                  {val === null ? (
                    <Shimmer className="w-20 h-8 mb-1" />
                  ) : (
                    <p
                      className="text-white"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 600 }}
                    >
                      {val}
                    </p>
                  )}
                  <p className="text-white/50 text-xs mt-1 uppercase tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rule */}
      <div className="h-1" style={{ backgroundColor: "#a1a8ae" }} />

      {/* Campaign priorities */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 border-b border-border pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p
              className="text-primary text-xs uppercase tracking-widest mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              What We're Building
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Three Campaign Priorities
            </h2>
          </div>
          <button
            onClick={() => onNavigate("history")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            Learn about our history →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorities.map((p) => (
            <div key={p.title} className="bg-card border border-border p-6 hover:border-primary/40 transition-colors group">
              <span className="text-primary text-xs mb-4 block">◆</span>
              <h3
                className="mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px" }}
              >
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="border-y border-border" style={{ backgroundColor: "#c5c0e0" }}>
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#000010" }}
            >
              Every Gift Shapes Our Future
            </h2>
            <p className="mt-2 max-w-xl" style={{ color: "#000010", opacity: 0.7 }}>
              Gifts of every size matter. Join{" "}
              {loading ? "our donors" : fmtDonors(donors) + " donors"}{" "}
              who are investing in Nelson's next chapter.
            </p>
          </div>
          <button
            onClick={() => onNavigate("donate")}
            className="px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Donate Today
          </button>
        </div>
      </section>

      {/* News teaser */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10 flex items-end justify-between border-b border-border pb-6">
          <div>
            <p className="text-primary text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              Latest
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
              Campaign News
            </h2>
          </div>
          <button
            onClick={() => onNavigate("news")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
          >
            All news →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              date: "October 14, 2026",
              tag: "Milestone",
              title: "Campaign Surpasses $40 Million — Ahead of Schedule",
              excerpt: "Unprecedented donor generosity propels the Nehemiah Project past a landmark threshold, six months ahead of projections.",
            },
            {
              date: "September 28, 2026",
              tag: "Leadership Gift",
              title: "Alumni Family Pledges $25M to Southwestern College of Bible and Church Ministries",
              excerpt: "The lead gift will name the School of Engineering and fund 40 doctoral fellowships annually for perpetuity.",
            },
            {
              date: "August 5, 2026",
              tag: "Event",
              title: "Campaign Kickoff Gala Draws 600 to Historic Commons",
              excerpt: "Trustees, faculty, and alumni gathered to celebrate the public launch of the most ambitious campaign in university history.",
            },
          ].map((item) => (
            <article key={item.title} className="border border-border bg-card p-6 group hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-2 py-1 uppercase tracking-wide" style={{ backgroundColor: "#c5c0e0", color: "#000010", fontFamily: "'Inter', sans-serif" }}>
                  {item.tag}
                </span>
                <span className="text-muted-foreground text-xs">{item.date}</span>
              </div>
              <h3 className="mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", lineHeight: "1.4" }}>
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
