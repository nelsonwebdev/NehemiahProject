import {
    useCampaignStats,
    fmtMoney,
    fmtDonors,
    fmtPct,
    pctNum,
} from "../hooks/useCampaignStats"

type Page = "home" | "history" | "news" | "stories" | "contact" | "donate"

interface FooterProps {
    onNavigate: (page: Page) => void
}

function Shimmer({ className }: { className?: string }) {
    return (
        <span
            className={`inline-block rounded bg-white/20 animate-pulse ${className ?? ""}`}
        />
    )
}

export function Footer({ onNavigate }: FooterProps) {
    const { goal, raised, donors, loading, lastUpdated } = useCampaignStats()
    const pct = pctNum(raised, goal)
    return (
        <footer className="bg-primary text-primary-foreground mt-auto">
            <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-12">
                {/* Progress strip — full width, slim */}
                <div className="border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-5">
                    {/* Bar */}
                    <div className="w-full bg-white/20 h-1.5 mb-1 overflow-hidden">
                        <div
                            className="bg-secondary h-1.5 transition-all duration-700 ease-out"
                            style={{ width: loading ? "0%" : `${pct}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-xs text-white/40 mb-5">
                        <span>
                            {loading ? (
                                <Shimmer className="w-16 h-2.5" />
                            ) : (
                                `${fmtMoney(raised)} raised`
                            )}
                        </span>
                        <div className="flex items-center gap-2">
                            {lastUpdated && (
                                <span className="text-white/25">
                                    Updated{" "}
                                    {lastUpdated.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}{" "}
                                    ·
                                </span>
                            )}
                            <span>
                                {loading ? (
                                    <Shimmer className="w-16 h-2.5" />
                                ) : (
                                    `${fmtMoney(goal)} goal`
                                )}
                            </span>
                        </div>
                    </div>

                    {/* Four stat columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-5">
                        {[
                            {
                                val: loading ? null : fmtMoney(goal),
                                label: "Campaign Goal",
                            },
                            {
                                val: loading ? null : fmtMoney(raised),
                                label: "Raised to Date",
                            },
                            {
                                val: loading ? null : fmtDonors(donors),
                                label: "Donors",
                            },
                            {
                                val: loading ? null : fmtPct(raised, goal),
                                label: "Goal Achieved",
                            },
                        ].map(({ val, label }) => (
                            <div key={label}>
                                {val === null ? (
                                    <Shimmer className="w-16 h-6 mb-1" />
                                ) : (
                                    <p
                                        className="text-white"
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', serif",
                                            fontSize: "22px",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {val}
                                    </p>
                                )}
                                <p className="text-white/40 text-xs mt-0.5 uppercase tracking-wide">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main three-column footer */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <img
                        src="https://www.nelson.edu/wp-content/uploads/2026/06/Horizontal-One-Line_Inverse-White-1.png"
                        alt="Nelson University"
                        className="h-6 object-contain"
                    />
                    <p className="mt-3 text-white/60 text-sm leading-relaxed">
                        Founded 1927 · Greater with Faith
                        <br />
                        Building futures for 100 years.
                    </p>
                </div>
                <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
                        Quick Links
                    </p>
                    <ul className="space-y-2 text-sm text-white/70">
                        {[
                            { label: "Home", page: "home" },
                            { label: "History", page: "history" },
                            { label: "News", page: "news" },
                            { label: "Stories", page: "stories" },
                            { label: "Contact", page: "contact" },
                            { label: "Partner With Us", page: "donate" },
                        ].map(({ label, page }) => (
                            <li key={page}>
                                <button
                                    onClick={() => onNavigate(page as Page)}
                                    className="hover:text-white transition-colors capitalize"
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-4">
                        Contact
                    </p>
                    <address className="not-italic text-sm text-white/70 space-y-1 leading-relaxed">
                        <p>1200 Sycamore St</p>
                        <p>Waxahachie, TX 75165</p>
                        <p className="mt-3">
                            <a
                                href="tel:+19728254639"
                                className="hover:text-white transition-colors"
                            >
                                (972) 825-4639
                            </a>
                        </p>
                        <p>
                            <a
                                href="mailto:advancementoffice@nelson.edu"
                                className="hover:text-white transition-colors"
                            >
                                advancementoffice@nelson.edu
                            </a>
                        </p>
                    </address>
                </div>
            </div>
            <div className="border-t border-white/10 px-6 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                <p className="text-white/40 text-xs">
                    © {new Date().getFullYear()} Nelson University. All rights
                    reserved.
                </p>
                <p
                    className="text-secondary text-xs"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                >
                    The Nehemiah Project
                </p>
            </div>
        </footer>
    )
}
