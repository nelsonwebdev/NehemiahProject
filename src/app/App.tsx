import { useEffect, useState } from "react"
import { NavBar } from "./components/NavBar"
import { Footer } from "./components/Footer"
import { HomePage } from "./components/HomePage"
import { HistoryPage } from "./components/HistoryPage"
import { NewsPage } from "./components/NewsPage"
import { DonatePage } from "./components/DonatePage"
import { ContactPage } from "./components/ContactPage"
import { StoriesPage } from "./components/StoriesPage"
import { ComingSoonPage } from "./components/ComingSoonPage"
import { LAUNCH_DATE } from "./config"

// Set to true to show the pre-launch landing page instead of the full site
//const COMING_SOON = false
type Page = "home" | "history" | "news" | "stories" | "donate" | "contact"

export default function App() {
    /* MARKER-MAKE-KIT-INVOKED */

    // Initialise from current time so a hard refresh also works correctly
    const [comingSoon, setComingSoon] = useState(
        () => Date.now() < LAUNCH_DATE.getTime(),
    )

    // Poll every second — when the launch moment arrives, flip to the live site instantly
    useEffect(() => {
        if (!comingSoon) return
        const id = setInterval(() => {
            if (Date.now() >= LAUNCH_DATE.getTime()) {
                setComingSoon(false)
            }
        }, 1000)
        return () => clearInterval(id)
    }, [comingSoon])

    const [currentPage, setCurrentPage] = useState<Page>("home")

    function navigate(page: Page) {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (comingSoon) return <ComingSoonPage />

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <NavBar currentPage={currentPage} onNavigate={navigate} />

            <main className="flex-1">
                {currentPage === "home" && <HomePage onNavigate={navigate} />}
                {currentPage === "history" && <HistoryPage />}
                {currentPage === "news" && <NewsPage />}
                {currentPage === "stories" && <StoriesPage />}
                {currentPage === "donate" && <DonatePage />}
                {currentPage === "contact" && <ContactPage />}
            </main>

            <Footer onNavigate={navigate} />
        </div>
    )
}
