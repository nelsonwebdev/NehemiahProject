import { useState } from "react"
import { Menu, X } from "lucide-react"

type Page = "home" | "history" | "news" | "donate" | "contact"

interface NavBarProps {
    currentPage: Page
    onNavigate: (page: Page) => void
}

const navLinks: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "History", page: "history" },
    { label: "News", page: "news" },
    { label: "Donate", page: "donate" },
    { label: "Contact", page: "contact" },
]

export function NavBar({ currentPage, onNavigate }: NavBarProps) {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="bg-primary text-primary-foreground sticky top-0 z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
                <button
                    onClick={() => onNavigate("home")}
                    className="hover:opacity-80 transition-opacity"
                >
                    <img
                        src="https://www.nelson.edu/wp-content/uploads/2026/06/Horizontal-One-Line_Inverse-White-1.png"
                        alt="Nelson University"
                        className="h-8 object-contain"
                    />
                </button>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map(({ label, page }) => (
                        <button
                            key={page}
                            onClick={() => onNavigate(page)}
                            className={`px-4 py-2 text-sm tracking-wide transition-colors relative ${
                                currentPage === page
                                    ? "text-white"
                                    : "text-white/70 hover:text-white"
                            }`}
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                fontSize: "12px",
                            }}
                        >
                            {label}
                            {currentPage === page && (
                                <span className="absolute bottom-0 left-4 right-4 h-px bg-white" />
                            )}
                        </button>
                    ))}
                    <button
                        onClick={() => onNavigate("donate")}
                        className="ml-4 px-5 py-2 bg-white text-primary text-sm transition-opacity hover:opacity-90"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            fontSize: "12px",
                        }}
                    >
                        Give Now
                    </button>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <nav className="md:hidden bg-primary border-t border-white/10 px-6 py-4 flex flex-col gap-1">
                    {navLinks.map(({ label, page }) => (
                        <button
                            key={page}
                            onClick={() => {
                                onNavigate(page)
                                setMobileOpen(false)
                            }}
                            className={`text-left px-2 py-3 text-sm border-b border-white/10 transition-colors ${
                                currentPage === page
                                    ? "text-white"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </nav>
            )}
        </header>
    )
}
