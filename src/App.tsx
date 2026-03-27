import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import MissionSection from "./components/MissionSection";
import SolutionSection from "./components/SolutionSection";
import CTASection from "./components/CTASection";
import ContactTeamSection from "./components/ContactTeamSection";
import Footer from "./components/Footer";
import PostHeroBackground from "./components/PostHeroBackground";
import {
  DEFAULT_LANGUAGE,
  isLanguage,
  landingCopy,
  type Language,
} from "./lib/translations";

const STORAGE_KEY = "hono-ai-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return savedLanguage && isLanguage(savedLanguage)
    ? savedLanguage
    : DEFAULT_LANGUAGE;
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = landingCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.metadata.title;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [copy.metadata.title, language]);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        copy={copy.nav}
      />
      <Hero copy={copy.hero} />

      <div className="relative overflow-hidden bg-background">
        <PostHeroBackground />
        <div className="relative z-10">
          <SearchSection copy={copy.search} />
          <MissionSection copy={copy.mission} />
          <SolutionSection copy={copy.solution} />
          <CTASection copy={copy.explorations} />
          <ContactTeamSection copy={copy.contact} />
          <Footer copy={copy.footer} />
        </div>
      </div>
    </main>
  );
}
