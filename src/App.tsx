import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import MissionSection from "./components/MissionSection";
import SolutionSection from "./components/SolutionSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  const spaceBackground = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2560&q=80";

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />
      
      {/* Section 1: Hero */}
      <Hero />

      {/* Rest of the site with Space Background (Section 2 onwards) */}
      <div 
        className="relative bg-fixed bg-cover bg-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 15%, rgba(0,0,0,0.2) 85%, rgba(0,0,0,1) 100%), url(${spaceBackground})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for depth with a subtle navy tint */}
        <div className="absolute inset-0 bg-[#000510]/30 pointer-events-none" />
        
        <div className="relative z-10">
          <SearchSection />
          <MissionSection />
          <SolutionSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
