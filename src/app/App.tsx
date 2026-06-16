import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { HistoryPage } from "./components/HistoryPage";
import { NewsPage } from "./components/NewsPage";
import { DonatePage } from "./components/DonatePage";
import { ContactPage } from "./components/ContactPage";

type Page = "home" | "history" | "news" | "donate" | "contact";

export default function App() {
  /* MARKER-MAKE-KIT-INVOKED */
  const [currentPage, setCurrentPage] = useState<Page>("home");

  function navigate(page: Page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <NavBar currentPage={currentPage} onNavigate={navigate} />

      <main className="flex-1">
        {currentPage === "home" && <HomePage onNavigate={navigate} />}
        {currentPage === "history" && <HistoryPage />}
        {currentPage === "news" && <NewsPage />}
        {currentPage === "donate" && <DonatePage />}
        {currentPage === "contact" && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
