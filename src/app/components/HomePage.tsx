import {
    useCampaignStats,
    fmtMoney,
    fmtDonors,
    fmtPct,
    pctNum,
} from "../hooks/useCampaignStats"

type Page = "home" | "history" | "news" | "donate" | "contact"

interface HomePageProps {
    onNavigate: (page: Page) => void
}

type DescriptionNode = {
    text: string
    isBullet?: boolean
    boldWords?: string[]
}

interface Priority {
    title: string
    description: DescriptionNode[]
}

const priorities: Priority[] = [
    {
        title: "Student Impact",
        description: [
            {
                text: "Focus: Investing directly in student success and future generations. ",
                boldWords: ["Focus:"],
            },
            {
                text: "Potential Projects:",
                boldWords: ["Potential Projects:"],
            },
            { text: "Scholarships", isBullet: true },
            { text: "Student Support Programs", isBullet: true },
            { text: "Academic Dean Endowment", isBullet: true },
            { text: "Faculty & Staff Endowment", isBullet: true },
            { text: "Generosity Endowment", isBullet: true },
            {
                text: 'Messaging: "Investing in students who will impact the world."',
                boldWords: ["Messaging:"],
            },
            {
                text: '"Nelson doesn\'t complete our mission until the student completes theirs."',
            },
        ],
    },
    {
        title: "Campus Transformation",
        description: [
            {
                text: "Focus: Creating facilities that support learning, community, and campus life. ",
                boldWords: ["Focus:"],
            },
            {
                text: "Potential Projects:",
                boldWords: ["Potential Projects:"],
            },
            { text: "Health Sciences Building", isBullet: true },
            { text: "New Housing", isBullet: true },
            { text: "Athletics Complex Completion", isBullet: true },
            { text: "Campus Beautification", isBullet: true },
            { text: "Security Enhancements", isBullet: true },
            {
                text: 'Messaging: "Building spaces where students thrive."',
                boldWords: ["Messaging:"],
            },
        ],
    },
    {
        title: "Institutional Sustainability",
        description: [
            {
                text: "Focus: Strengthening Nelson University\'s future for generations.",
                boldWords: ["Focus:"],
            },
            {
                text: "Potential Projects:",
                boldWords: ["Potential Projects:"],
            },
            { text: "Debt Elimination", isBullet: true },
            { text: "IT Infrastructure Endowment", isBullet: true },
            { text: "Operational Endowments", isBullet: true },
            { text: "Strategic Growth Initiatives", isBullet: true },
            {
                text: 'Messaging: "Securing Nelson\'s Future for the next century."',
                boldWords: ["Messaging:"],
            },
        ],
    },
]

const renderTextWithBold = (text: string, boldWords?: string[]) => {
    if (!boldWords || boldWords.length === 0) return text

    // Regex to match bold words globally and case-insensitively
    const regex = new RegExp(`(${boldWords.join("|")})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, i) =>
        boldWords.some((w) => w.toLowerCase() === part.toLowerCase()) ? (
            <strong key={i} className="font-semibold text-foreground">
                {part}
            </strong>
        ) : (
            part
        ),
    )
}

function Shimmer({ className }: { className?: string }) {
    return (
        <span
            className={`inline-block rounded bg-white/20 animate-pulse ${className ?? ""}`}
        />
    )
}

export function HomePage({ onNavigate }: HomePageProps) {
    const { goal, raised, donors, loading, lastUpdated } = useCampaignStats()
    const pct = pctNum(raised, goal)

    const paraStyle = {
        color: "#000010",
        opacity: "0.7",
    }

    return (
        <div>
            {/* Hero */}
            <section
                className="relative bg-primary text-primary-foreground overflow-hidden"
                style={{ minHeight: "560px" }}
            >
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `url(https://www.nelson.edu/wp-content/uploads/2026/06/Klyde-9-1-scaled.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-12">
                    {/* Headline + buttons */}
                    <div className="max-w-3xl mb-10">
                        {/*
                        <p
                            className="text-secondary text-sm uppercase tracking-widest mb-5"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            The Nehemiah Project
                        </p>*/}
                        <h1
                            className="text-white leading-tight mb-6"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            }}
                        >
                            <img
                                src="https://www.nelson.edu/wp-content/uploads/2026/07/Placeholder-500x500-1.png"
                                alt="Nehemiah Project Logo"
                                className="w-1/4 h-full object-cover object-top"
                            />
                            Campaign Tagline
                        </h1>
                        <p className="text-white/70 leading-relaxed mb-8 max-w-xl">
                            A bold capital campaign to invest in people,
                            programs, and places — securing Nelson's next
                            century of excellence.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => onNavigate("history")}
                                className="px-7 py-3 bg-white text-primary hover:opacity-90 transition-opacity"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "13px",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Our Story
                            </button>
                            <button
                                onClick={() => onNavigate("donate")}
                                className="px-7 py-3 border border-white/40 text-white hover:border-white transition-colors"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: "13px",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Partner with Us
                            </button>
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
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                            }}
                        >
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
                    {priorities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-card border border-border p-6 hover:border-primary/40 transition-colors group"
                        >
                            <span className="text-primary text-xs mb-4 block">
                                ◆
                            </span>
                            <h3
                                className="mb-3"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "17px",
                                }}
                            >
                                {item.title}
                            </h3>
                            {/* Container for the multi-line description */}
                            <div className="text-muted-foreground text-sm leading-relaxed">
                                {item.description.map((node, i) => (
                                    <p
                                        key={i}
                                        className={`mb-1 ${node.isBullet ? "flex items-start gap-2 pl-4" : ""}`}
                                    >
                                        <br />
                                        {node.isBullet && (
                                            <span className="text-primary">
                                                •
                                            </span>
                                        )}
                                        <span>
                                            {renderTextWithBold(
                                                node.text,
                                                node.boldWords,
                                            )}
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Scripture */}
            <section style={{ backgroundColor: "#502d7f" }}>
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                    <p
                        className="text-white/40 uppercase tracking-widest mb-8"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "11px",
                            letterSpacing: "0.2em",
                        }}
                    >
                        Guiding Scripture
                    </p>
                    <blockquote
                        className="text-white"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.5rem, 3vw, 2.75rem)",
                            fontWeight: 600,
                            lineHeight: 1.3,
                        }}
                    >
                        <q>
                            O Lord, let your ear be attentive to the prayer of
                            your servant, and to the prayer of your servants who
                            delight to fear your name, and give success to your
                            servant today, and grant him mercy in the sight of
                            this man.
                        </q>
                    </blockquote>
                    <p
                        className="mt-8"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "20px",
                            color: "#c5c0e0",
                            fontStyle: "italic",
                        }}
                    >
                        Nehemiah 1:11
                    </p>
                </div>
            </section>

            {/* From the President */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: president image */}
                    <div className="relative">
                        <div
                            className="bg-muted overflow-hidden"
                            style={{ aspectRatio: "4/4", maxHeight: "600px" }}
                        >
                            <img
                                src="https://www.nelson.edu/wp-content/uploads/2024/07/Cabinet-8-scaled-e1769009816672.jpg"
                                alt="University President"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        {/* Name plate */}
                        <div className="absolute bottom-0 left-0 right-0 bg-primary px-6 py-4">
                            <p
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "17px",
                                    color: "white",
                                    fontWeight: 600,
                                }}
                            >
                                Dr. Kermit Bridges
                            </p>
                            <p
                                className="text-white/60 text-xs mt-0.5 uppercase tracking-widest"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                President, Nelson University
                            </p>
                        </div>
                    </div>

                    {/* Right: quote / message */}
                    <div>
                        <p
                            className="text-primary text-xs uppercase tracking-widest mb-4"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            From the President
                        </p>
                        <h2
                            className="mb-8"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                lineHeight: "1.3",
                            }}
                        >
                            <q>
                                The Nehemiah Project is the Most Important Work
                                of Our Generation
                            </q>
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p style={paraStyle}>
                                When I consider what Nelson University has
                                accomplished in its first century, the lives
                                transformed, the leaders equipped, the Kingdom
                                work advanced, I am filled with profound
                                gratitude. But when I look ahead, I see an even
                                greater opportunity before us.
                            </p>
                            <p style={paraStyle}>
                                The Nehemiah Project is not simply a fundraising
                                campaign. It is a declaration of faith. Faith
                                that God is not finished with Nelson University.
                                Faith that our best days lie ahead. Faith that
                                together, we can build something worthy of the
                                calling we have received.
                            </p>
                            <p style={paraStyle}>
                                I invite you to join us. Every gift, of every
                                size, is an act of investment in the next
                                generation of students who will walk through our
                                doors. Your generosity today will shape the
                                Nelson of tomorrow.
                            </p>
                        </div>
                        {/* Signature */}
                        <div className="mt-8 pt-8 border-t border-border flex items-center gap-4">
                            <div>
                                <p
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "15px",
                                        fontStyle: "italic",
                                    }}
                                >
                                    In His service,
                                </p>
                                <p
                                    className="mt-1"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "17px",
                                        fontWeight: 600,
                                    }}
                                >
                                    Dr. Bridges
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA banner */}
            <section
                className="border-y border-border"
                style={{ backgroundColor: "#c5c0e0" }}
            >
                <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                color: "#000010",
                            }}
                        >
                            Every Gift Shapes Our Future
                        </h2>
                        <p
                            className="mt-2 max-w-xl"
                            style={{ color: "#000010", opacity: 0.7 }}
                        >
                            Gifts of every size matter. Join{" "}
                            {loading
                                ? "our donors"
                                : fmtDonors(donors) + " donors"}{" "}
                            who are investing in Nelson's next chapter.
                        </p>
                    </div>
                    <button
                        onClick={() => onNavigate("donate")}
                        className="px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "13px",
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                        }}
                    >
                        Donate Today
                    </button>
                </div>
            </section>

            {/* News teaser */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="mb-10 flex items-end justify-between border-b border-border pb-6">
                    <div>
                        <p
                            className="text-primary text-xs uppercase tracking-widest mb-2"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Latest
                        </p>
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                            }}
                        >
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
                            date: "[Date]",
                            tag: "[Tag]",
                            title: "Suspendisse sapien ligula",
                            excerpt:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
                        },
                        {
                            date: "[Date]",
                            tag: "[Tag]",
                            title: "Nulla in nisl euismod",
                            excerpt:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
                        },
                        {
                            date: "[Date]",
                            tag: "[Tag]",
                            title: "Nullam eleifend nibh",
                            excerpt:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada turpis nec arcu tempor, non convallis tortor viverra. Sed sollicitudin est erat, pharetra iaculis orci vestibulum sit amet. Phasellus et consectetur orci.",
                        },
                    ].map((item) => (
                        <article
                            key={item.title}
                            className="border border-border bg-card p-6 group hover:border-primary/40 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span
                                    className="text-xs px-2 py-1 uppercase tracking-wide"
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
                                className="mb-3 group-hover:text-primary transition-colors"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "16px",
                                    lineHeight: "1.4",
                                }}
                            >
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.excerpt}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}
