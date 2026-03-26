import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import MissionSection from "./components/MissionSection";
import SolutionSection from "./components/SolutionSection";
import CTASection from "./components/CTASection";
import ContactTeamSection from "./components/ContactTeamSection";
import Footer from "./components/Footer";
import PostHeroBackground from "./components/PostHeroBackground";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      <Hero />

      <div className="relative overflow-hidden bg-background">
        <PostHeroBackground />
        <div className="relative z-10">
          <SearchSection />
          <MissionSection />
          <SolutionSection />
          <CTASection />
          <ContactTeamSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
