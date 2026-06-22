import {
    useCampaignStats,
    fmtMoney,
    fmtDonors,
    fmtPct,
    pctNum,
} from "../hooks/useCampaignStats"

export function DonatePage() {
    const { goal, raised, donors, loading, lastUpdated } = useCampaignStats()
    const pct = pctNum(raised, goal)

    return (
        <div>
            {/* Header */}
            <section className="bg-primary text-primary-foreground">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <p
                        className="text-secondary text-xs uppercase tracking-widest mb-3"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Support Nelson
                    </p>
                    <h1
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                        }}
                    >
                        Make a Gift
                    </h1>
                    <p className="text-white/60 mt-4 max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum malesuada turpis nec arcu tempor, non
                        convallis tortor viverra. Sed sollicitudin est erat,
                        pharetra iaculis orci vestibulum sit amet. Phasellus et
                        consectetur orci.
                    </p>
                </div>
            </section>
            <div className="h-1" style={{ backgroundColor: "#a1a8ae" }} />

            {/* 2-column layout */}
            <section className="max-w-7xl mx-auto px-6 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: text content */}
                    <div>
                        <h2
                            className="mb-6"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                            }}
                        >
                            Why Your Gift Matters
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                            <p>
                                The Nehemiah Project is the most ambitious
                                undertaking in the university's 100-year
                                history. Every dollar raised goes directly
                                toward our three priorities: <b>[Insert priorities
                                here]</b>.
                            </p>
                            <p>
                                A gift to Nelson is not a transaction, it is a
                                statement of values. It says that you believe in
                                the power of education to change lives, that you
                                want the next generation of students to have the
                                same opportunities that shaped your own, and
                                that Nelson's best chapters are still ahead.
                            </p>
                        </div>

                        {/* Impact breakdown */}
                        <div className="mt-10 space-y-0 border border-border">
                            <div
                                className="px-6 py-4 border-b border-border"
                                style={{ backgroundColor: "#f2f2f3" }}
                            >
                                <p
                                    className="text-xs uppercase tracking-widest text-muted-foreground"
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    Your Gift at Work
                                </p>
                            </div>
                            {[
                                {
                                    amount: "$50",
                                    impact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                                },
                                {
                                    amount: "$500",
                                    impact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                                },
                                {
                                    amount: "$2,500",
                                    impact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                                },
                                {
                                    amount: "$10,000",
                                    impact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                                },
                                {
                                    amount: "$50,000+",
                                    impact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                                },
                            ].map(({ amount, impact }) => (
                                <div
                                    key={amount}
                                    className="flex gap-4 items-start px-6 py-4 border-b border-border last:border-0 hover:bg-secondary/20 transition-colors"
                                >
                                    <span
                                        className="text-primary flex-shrink-0 w-20 text-right"
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', serif",
                                            fontSize: "18px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {amount}
                                    </span>
                                    <span className="text-sm text-muted-foreground leading-relaxed">
                                        {impact}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Ways to give */}
                        <div className="mt-10">
                            <h3
                                className="mb-4"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "17px",
                                }}
                            >
                                Other Ways to Give
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: "Pledge",
                                        desc: "Spread your gift over up to 5 years.",
                                    },
                                    {
                                        title: "Securities",
                                        desc: "Donate appreciated stocks or bonds.",
                                    },
                                    {
                                        title: "Planned Giving",
                                        desc: "Include Nelson in your estate.",
                                    },
                                    {
                                        title: "Matching Gifts",
                                        desc: "Double your impact through your employer.",
                                    },
                                ].map(({ title, desc }) => (
                                    <div
                                        key={title}
                                        className="border border-border p-4 hover:border-primary/40 transition-colors"
                                    >
                                        <p
                                            className="text-sm font-medium mb-1"
                                            style={{
                                                fontFamily:
                                                    "'Playfair Display', serif",
                                            }}
                                        >
                                            {title}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="mt-8 text-xs text-muted-foreground">
                            Questions? Contact the Office of Advancement at{" "}
                            <a
                                href="mailto:advancementoffice@nelson.edu"
                                className="text-primary hover:underline underline-offset-4"
                            >
                                advancementoffice@nelson.edu
                            </a>{" "}
                            or call{" "}
                            <a
                                href="tel:+19728254639"
                                className="text-primary hover:underline underline-offset-4"
                            >
                                (972) 825-4639
                            </a>
                            .
                        </p>
                    </div>

                    {/* Right: embed placeholder */}
                    <div className="lg:sticky lg:top-24">
                        <div className="border border-border bg-card overflow-hidden">
                            <div className="bg-primary px-6 py-5">
                                <p
                                    className="text-primary-foreground"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "18px",
                                    }}
                                >
                                    Donation Form
                                </p>
                                <p className="text-white/50 text-xs mt-1">
                                    Secure · Tax-deductible
                                </p>
                            </div>

                            {/* Embed placeholder */}
                            <div
                                className="flex flex-col items-center justify-center text-center p-12 gap-4 border-2 border-dashed border-border m-6"
                                style={{
                                    minHeight: "420px",
                                    backgroundColor: "#f2f2f3",
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                                    style={{ backgroundColor: "#c5c0e0" }}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        style={{ color: "#502d7f" }}
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <p
                                    className="text-muted-foreground"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "17px",
                                    }}
                                >
                                    Donation Embed Goes Here
                                </p>
                                <p className="text-muted-foreground text-xs max-w-xs leading-relaxed">
                                    Replace this placeholder with your
                                    third-party donation platform embed (e.g.,
                                    Stripe, PayPal Giving Fund, Blackbaud,
                                    Salesforce NPSP, or iModules).
                                </p>
                                <div
                                    className="mt-2 px-4 py-2 border text-xs uppercase tracking-wide"
                                    style={{
                                        borderColor: "#502d7f",
                                        color: "#502d7f",
                                    }}
                                >
                                    Embed Code Here
                                </div>
                            </div>

                            <div className="px-6 pb-6">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <rect
                                            x="3"
                                            y="11"
                                            width="18"
                                            height="11"
                                            rx="2"
                                            ry="2"
                                        />
                                        <path d="M7 11V7a5 5 0 0110 0v4" />
                                    </svg>
                                    <span>
                                        256-bit SSL encryption · Nelson
                                        University EIN 04-1234567
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Progress strip */}
            <section className="bg-primary text-primary-foreground mt-8">
                <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-end justify-between mb-4">
                        <p
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "18px",
                            }}
                        >
                            Campaign Progress
                        </p>
                        <div className="flex items-center gap-3">
                            {loading ? (
                                <span className="w-28 h-4 rounded bg-white/20 animate-pulse inline-block" />
                            ) : (
                                <p className="text-secondary text-sm">
                                    {fmtMoney(raised)} of {fmtMoney(goal)}{" "}
                                    raised
                                </p>
                            )}
                            {lastUpdated && (
                                <p className="text-white/30 text-xs hidden sm:block">
                                    · updated{" "}
                                    {lastUpdated.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="w-full bg-white/20 h-1.5 mb-2 overflow-hidden">
                        <div
                            className="bg-secondary h-1.5 transition-all duration-700 ease-out"
                            style={{ width: loading ? "0%" : `${pct}%` }}
                        />
                    </div>
                    <p className="text-white/40 text-xs">
                        {loading
                            ? "Loading campaign data…"
                            : `${fmtPct(raised, goal)} of goal · ${fmtDonors(donors)} donors`}
                    </p>
                </div>
            </section>
        </div>
    )
}
