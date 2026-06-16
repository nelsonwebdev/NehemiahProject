import { useState } from "react";

const articles = [
  {
    id: 1,
    date: "October 14, 2024",
    tag: "Milestone",
    title: "Campaign Surpasses $40 Million — Ahead of Schedule",
    excerpt:
      "Unprecedented donor generosity propels the Nehemiah Project past a landmark threshold, six months ahead of projections. University leadership credits a surge in first-time donors and several transformative major gifts.",
    image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
    featured: true,
  },
  {
    id: 2,
    date: "September 28, 2024",
    tag: "Leadership Gift",
    title: "Alumni Family Pledges $25M to Endow Engineering School",
    excerpt:
      "The lead gift will name the School of Engineering and fund 40 doctoral fellowships annually in perpetuity, cementing Nelson's standing in applied sciences and engineering.",
    image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
    featured: false,
  },
  {
    id: 3,
    date: "September 5, 2024",
    tag: "Scholarships",
    title: "100 New Need-Based Scholarships Awarded for Fall 2024",
    excerpt:
      "Thanks to campaign gifts, Nelson awarded a record 100 need-based scholarships this fall — the largest cohort in the university's history.",
    image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
    featured: false,
  },
  {
    id: 4,
    date: "August 5, 2024",
    tag: "Event",
    title: "Campaign Kickoff Gala Draws 600 to Historic Commons",
    excerpt:
      "Trustees, faculty, and alumni gathered to celebrate the public launch of the most ambitious campaign in university history. President Thornton unveiled the full vision to sustained applause.",
    image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
    featured: false,
  },
  {
    id: 5,
    date: "July 18, 2024",
    tag: "Research",
    title: "New Climate Research Center to Be Named in Honor of Lead Donor",
    excerpt:
      "A $15 million gift from the Aldridge Foundation will establish the Aldridge Center for Climate Science, housing 12 faculty and 60 graduate researchers.",
    image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
    featured: false,
  },
  {
    id: 6,
    date: "June 3, 2024",
    tag: "Faculty",
    title: "Three Endowed Professorships Filled in Arts & Sciences",
    excerpt:
      "Campaign dollars enabled Nelson to recruit three internationally recognized scholars to newly endowed chairs in philosophy, molecular biology, and comparative literature.",
    image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
    featured: false,
  },
];

const tags = ["All", "Milestone", "Leadership Gift", "Scholarships", "Event", "Research", "Faculty"];

export function NewsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All" ? articles : articles.filter((a) => a.tag === activeTag);
  const featured = filtered.find((a) => a.featured) ?? filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-secondary text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Updates
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Campaign News
          </h1>
          <p className="text-white/60 mt-4 max-w-xl">
            Stories of generosity, impact, and progress from the Nehemiah Project.
          </p>
        </div>
      </section>
      <div className="h-1" style={{ backgroundColor: "#a1a8ae" }} />

      {/* Filters */}
      <div className="border-b border-border bg-card sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 text-xs uppercase tracking-wide whitespace-nowrap transition-colors ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground border border-border"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Featured article */}
        {featured && (
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border bg-card mb-10 group hover:border-primary/40 transition-colors overflow-hidden">
            <div className="bg-muted overflow-hidden" style={{ minHeight: "300px" }}>
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ minHeight: "300px" }}
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs px-2 py-1 uppercase tracking-wide" style={{ backgroundColor: "#c5c0e0", color: "#000010", fontFamily: "'Inter', sans-serif" }}>
                  {featured.tag}
                </span>
                <span className="text-muted-foreground text-xs">{featured.date}</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", lineHeight: "1.35" }} className="mb-4">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">{featured.excerpt}</p>
              <button className="mt-6 self-start text-primary text-sm hover:underline underline-offset-4 transition-colors">
                Read full story →
              </button>
            </div>
          </article>
        )}

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((item) => (
            <article
              key={item.id}
              className="border border-border bg-card group hover:border-primary/40 transition-colors overflow-hidden"
            >
              <div className="bg-muted overflow-hidden" style={{ height: "200px" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs px-2 py-0.5 uppercase tracking-wide" style={{ backgroundColor: "#c5c0e0", color: "#000010", fontFamily: "'Inter', sans-serif" }}>
                    {item.tag}
                  </span>
                  <span className="text-muted-foreground text-xs">{item.date}</span>
                </div>
                <h3 className="mb-2 group-hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", lineHeight: "1.4" }}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
                <button className="mt-4 text-primary text-xs hover:underline underline-offset-4">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No articles in this category.</p>
        )}
      </div>
    </div>
  );
}
