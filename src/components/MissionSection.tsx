import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const paragraph1 = "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
const paragraph2 = "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

const highlightWords = ["curiosity", "meets", "clarity"];

interface WordProps {
  key?: number | string;
  word: string;
  i: number;
  total: number;
  scrollYProgress: any;
}

const Word = ({ word, i, total, scrollYProgress }: WordProps) => {
  const opacity = useTransform(scrollYProgress, [0.2 + (i / total) * 0.1, 0.5 + (i / total) * 0.1], [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.25em] text-foreground"
    >
      {word}
    </motion.span>
  );
};

export default function MissionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words2 = paragraph2.split(" ");

  return (
    <section ref={containerRef} className="relative pt-0 pb-32 md:pb-44 px-8 md:px-28">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Scroll-driven text reveal */}
        <div className="text-center max-w-4xl">
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight mb-20">
            {paragraph1.split(" ").map((word, i) => {
              const cleanWord = word.replace(/[—,.]/g, "");
              const isHighlighted = highlightWords.includes(cleanWord.toLowerCase());
              return (
                <span
                  key={i}
                  className={`inline-block mr-[0.25em] ${
                    isHighlighted ? "text-foreground" : "text-hero-subtitle/40"
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed">
            {words2.map((word, i) => (
              <Word
                key={i}
                word={word}
                i={i}
                total={words2.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
