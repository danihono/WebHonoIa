import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { withBasePath } from "../lib/assetPath";
import type { LandingCopy } from "../lib/translations";

const highlightRevealBaseDuration = 0.25;
const highlightRevealPerLetter = 0.055;
const highlightFadeDuration = 0.45;
const highlightOverlapDuration = 0.12;
const highlightInitialDelay = 0.1;
const highlightPlateauDuration = 0.06;

interface HighlightSequence {
  delay: number;
  revealDuration: number;
  duration: number;
  times: [number, number, number, number];
}

interface ParagraphWord {
  raw: string;
  clean: string;
}

interface WordProps {
  key?: number | string;
  word: string;
  i: number;
  total: number;
  scrollYProgress: any;
}

const Word = ({ word, i, total, scrollYProgress }: WordProps) => {
  const opacity = useTransform(
    scrollYProgress,
    [0.2 + (i / total) * 0.1, 0.5 + (i / total) * 0.1],
    [0.15, 1],
  );

  return (
    <motion.span
      style={{ opacity }}
      className="mr-[0.25em] inline-block text-foreground"
    >
      {word}
    </motion.span>
  );
};

interface HighlightWordProps {
  word: string;
  sequence: HighlightSequence;
  shouldAnimate: boolean;
  reducedMotion: boolean;
}

const HighlightWord = ({
  word,
  sequence,
  shouldAnimate,
  reducedMotion,
}: HighlightWordProps) => {
  if (reducedMotion) {
    return <span className="mr-[0.25em] inline-block text-foreground">{word}</span>;
  }

  return (
    <span className="relative mr-[0.25em] inline-block align-baseline">
      <span className="text-foreground/35">{word}</span>
      <motion.span
        className="pointer-events-none absolute left-0 top-0 overflow-hidden whitespace-nowrap text-foreground"
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
        animate={
          shouldAnimate
            ? {
                clipPath: [
                  "inset(0 100% 0 0)",
                  "inset(0 0% 0 0)",
                  "inset(0 0% 0 0)",
                  "inset(0 0% 0 0)",
                ],
                opacity: [0, 1, 1, 0],
              }
            : {
                clipPath: "inset(0 100% 0 0)",
                opacity: 0,
              }
        }
        transition={{
          delay: sequence.delay,
          duration: sequence.duration,
          times: sequence.times,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {word}
      </motion.span>
    </span>
  );
};

interface MissionSectionProps {
  copy: LandingCopy["mission"];
}

export default function MissionSection({ copy }: MissionSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.45,
  });
  const reducedMotion = useReducedMotion();
  const paragraph1Words = copy.paragraph1.split(" ");
  const animatedParagraph1Words: ParagraphWord[] = paragraph1Words.map((word) => ({
    raw: word,
    clean: word.replace(/[-,.]/g, ""),
  }));
  const highlightSequences = animatedParagraph1Words.reduce<HighlightSequence[]>(
    (acc, word, index) => {
      const targetWord = word.clean || word.raw;
      const revealDuration =
        highlightRevealBaseDuration + targetWord.length * highlightRevealPerLetter;
      const duration = revealDuration + highlightFadeDuration;
      const previousSequence = acc[index - 1];
      const delay = previousSequence
        ? previousSequence.delay +
          previousSequence.revealDuration -
          highlightOverlapDuration
        : highlightInitialDelay;
      const revealEnd = revealDuration / duration;
      const plateauEnd = Math.min(
        0.98,
        (revealDuration + highlightPlateauDuration) / duration,
      );

      acc.push({
        delay,
        revealDuration,
        duration,
        times: [0, revealEnd, plateauEnd, 1],
      });

      return acc;
    },
    [],
  );
  const words2 = copy.paragraph2.split(" ");

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="relative px-8 pb-32 pt-0 md:px-28 md:pb-44"
    >
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-20">
          <div className="order-2 relative min-h-[300px] lg:order-1 lg:min-h-[500px]">
            <motion.div
              className="group relative flex h-full min-h-[300px] items-center justify-center lg:min-h-[500px]"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <div
                className="pointer-events-none absolute inset-[18%] rounded-full opacity-70 blur-3xl transition-all duration-700 group-hover:inset-[14%] group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, rgba(248,113,113,0.2) 0%, rgba(249,115,22,0.16) 28%, rgba(16,185,129,0.08) 56%, rgba(0,0,0,0) 78%)",
                }}
              />

              <div className="pointer-events-none absolute bottom-[18%] left-1/2 h-10 w-44 -translate-x-1/2 rounded-full bg-emerald-300/14 blur-[24px] lg:h-12 lg:w-56" />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1.5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex w-full items-center justify-center transition-transform duration-700 group-hover:scale-[1.1]"
              >
                <img
                  src={withBasePath("lego.png")}
                  alt={copy.imageAlt}
                  className="w-[96%] max-w-[520px] object-contain opacity-95 drop-shadow-[0_28px_80px_rgba(0,0,0,0.72)] transition-opacity duration-700 group-hover:opacity-100"
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 max-w-2xl text-center lg:order-2 lg:ml-auto lg:text-right">
            <p className="mb-10 text-xl font-medium leading-tight tracking-[-0.02em] text-balance md:mb-12 md:text-3xl lg:text-4xl lg:leading-[1.1]">
              {animatedParagraph1Words.map(({ raw }, index) => (
                <HighlightWord
                  key={index}
                  word={raw}
                  sequence={highlightSequences[index]}
                  shouldAnimate={isInView}
                  reducedMotion={reducedMotion}
                />
              ))}
            </p>

            <p className="mx-auto max-w-xl text-base font-medium leading-relaxed text-foreground/90 md:text-lg lg:mr-0 lg:text-xl">
              {words2.map((word, index) => (
                <Word
                  key={index}
                  word={word}
                  i={index}
                  total={words2.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
