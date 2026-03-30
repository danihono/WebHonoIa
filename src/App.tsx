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
const THEME_STORAGE_KEY = "hono-ai-ui-theme";

type UiTheme = "dark" | "light";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return savedLanguage && isLanguage(savedLanguage)
    ? savedLanguage
    : DEFAULT_LANGUAGE;
}

function getInitialTheme(): UiTheme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return savedTheme === "light" ? "light" : "dark";
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [uiTheme, setUiTheme] = useState<UiTheme>(getInitialTheme);
  const copy = landingCopy[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.metadata.title;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [copy.metadata.title, language]);

  useEffect(() => {
    document.documentElement.dataset.uiTheme = uiTheme;
    document.documentElement.style.colorScheme = uiTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, uiTheme);
  }, [uiTheme]);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        copy={copy.nav}
        theme={uiTheme}
        onThemeToggle={() =>
          setUiTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
          )
        }
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
