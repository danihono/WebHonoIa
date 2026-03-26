import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { Card, CardContent } from "./ui/card";

const platforms = [
  {
    name: "ChatGPT",
    description: "Uses structured, high-quality content to deliver accurate answers users trust and rely on.",
    icon: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&h=400&auto=format&fit=crop&sat=-100", // Orange/Abstract 3D
  },
  {
    name: "Perplexity",
    description: "Surfaces credible, well-structured sources and prioritizes clear, authoritative explanations.",
    icon: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=400&auto=format&fit=crop&sat=-100", // Astronaut/Helmet-like 3D
  },
  {
    name: "Google AI",
    description: "Highlights content that fully answers the query, prioritizing completeness and direct usefulness.",
    icon: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=400&h=400&auto=format&fit=crop&sat=-100", // Crystal/Star 3D
  },
];

export default function SearchSection() {
  return (
    <section className="relative z-20 pt-48 md:pt-64 pb-32 md:pb-44 px-8 md:px-28 text-center">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <motion.div {...fadeUp(0.2)} className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.05] mb-12">
          Search has <span className="font-serif italic font-normal">changed.</span><br />Have you?
        </h2>
        <p className="text-hero-subtitle text-lg md:text-xl max-w-3xl mx-auto mb-32 leading-relaxed opacity-70">
          People no longer search with keywords — they ask questions that ChatGPT,<br className="hidden md:block" /> Perplexity, and Google answer. Brands that grow today are the ones that<br className="hidden md:block" /> appear in those answers.
        </p>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-12 mb-20">
          {platforms.map((platform, i) => (
            <motion.div key={platform.name} {...fadeUp(0.4 + i * 0.1)}>
              <Card className="bg-transparent border-none shadow-none group">
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="w-56 h-56 mb-12 overflow-visible flex items-center justify-center transition-all group-hover:scale-110 duration-700">
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="font-semibold text-xl mb-4 tracking-tight">{platform.name}</h3>
                  <p className="text-hero-subtitle text-sm leading-relaxed opacity-50 px-6 max-w-[280px]">
                    {platform.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp(0.8)}
          className="text-muted-foreground text-sm tracking-wide"
        >
          If you don't answer the questions, someone else will.
        </motion.p>
      </motion.div>
    </section>
  );
}
