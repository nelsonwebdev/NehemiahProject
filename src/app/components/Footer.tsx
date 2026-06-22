type Page = "home" | "history" | "news" | "stories" | "donate" | "contact"

interface FooterProps {
    onNavigate: (page: Page) => void
}

export function Footer({ onNavigate }: FooterProps) {
    return (
        <footer className="bg-primary text-primary-foreground mt-auto">
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
                        {(
                            [
                                "home",
                                "history",
                                "news",
                                "stories",
                                "donate",
                                "contact",
                            ] as Page[]
                        ).map((p) => (
                            <li key={p}>
                                <button
                                    onClick={() => onNavigate(p)}
                                    className="hover:text-white transition-colors capitalize"
                                >
                                    {p}
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
