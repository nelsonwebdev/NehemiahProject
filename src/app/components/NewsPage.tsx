import { useState } from "react"

const articles = [
    {
        id: 1,
        date: "[Date]",
        tag: "[Tag]",
        title: "Lorem ipsum dolor sit amet",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
        image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
        featured: true,
    },
    {
        id: 2,
        date: "[Date]",
        tag: "[Tag]",
        title: "Maecenas quis dui placerat",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
        image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
        featured: false,
    },
    {
        id: 3,
        date: "[Date]",
        tag: "[Tag]",
        title: "Pellentesque ut urna quis ipsum maximus sollicitudin",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
        image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
        featured: false,
    },
    {
        id: 4,
        date: "[Date]",
        tag: "[Tag]",
        title: "Duis aliquet metus elit",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
        image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
        featured: false,
    },
    {
        id: 5,
        date: "[Date]",
        tag: "[Tag]",
        title: "Quisque vitae libero id lacus ",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
        image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
        featured: false,
    },
    {
        id: 6,
        date: "[Date]",
        tag: "[Tag]",
        title: "Fusce non ante sit amet ",
        excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
        image: "https://www.nelson.edu/wp-content/uploads/2026/06/placeholder.jpg",
        featured: false,
    },
]

const tags = [
    "All",
    "Milestone",
    "Leadership Gift",
    "Scholarships",
    "Event",
    "Research",
    "Faculty",
]

export function NewsPage() {
    const [activeTag, setActiveTag] = useState("All")

    const filtered =
        activeTag === "All"
            ? articles
            : articles.filter((a) => a.tag === activeTag)
    const featured = filtered.find((a) => a.featured) ?? filtered[0]
    const rest = filtered.filter((a) => a.id !== featured?.id)

    return (
        <div>
            {/* Header */}
            <section className="bg-primary text-primary-foreground">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p
                        className="text-secondary text-xs uppercase tracking-widest mb-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Updates
                    </p>
                    <h1
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                        }}
                    >
                        Campaign News
                    </h1>
                    <p className="text-white/60 mt-4 max-w-xl">
                        Stories of generosity, impact, and progress from the
                        Nehemiah Project.
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
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                letterSpacing: "0.05em",
                            }}
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
                        <div
                            className="bg-muted overflow-hidden"
                            style={{ minHeight: "300px" }}
                        >
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                style={{ minHeight: "300px" }}
                            />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <span
                                    className="text-xs px-2 py-1 uppercase tracking-wide"
                                    style={{
                                        backgroundColor: "#c5c0e0",
                                        color: "#000010",
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    {featured.tag}
                                </span>
                                <span className="text-muted-foreground text-xs">
                                    {featured.date}
                                </span>
                            </div>
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                                    lineHeight: "1.35",
                                }}
                                className="mb-4"
                            >
                                {featured.title}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {featured.excerpt}
                            </p>
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
                            <div
                                className="bg-muted overflow-hidden"
                                style={{ height: "200px" }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <span
                                        className="text-xs px-2 py-0.5 uppercase tracking-wide"
                                        style={{
                                            backgroundColor: "#c5c0e0",
                                            color: "#000010",
                                            fontFamily: "'Inter', sans-serif",
                                        }}
                                    >
                                        {item.tag}
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                        {item.date}
                                    </span>
                                </div>
                                <h3
                                    className="mb-2 group-hover:text-primary transition-colors"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "16px",
                                        lineHeight: "1.4",
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                    {item.excerpt}
                                </p>
                                <button className="mt-4 text-primary text-xs hover:underline underline-offset-4">
                                    Read more →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="text-center text-muted-foreground py-20">
                        No articles in this category.
                    </p>
                )}
            </div>
        </div>
    )
}
