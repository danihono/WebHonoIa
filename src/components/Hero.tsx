import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { withBasePath } from "../lib/assetPath";
import type { LandingCopy } from "../lib/translations";

interface HeroProps {
  copy: LandingCopy["hero"];
}

export default function Hero({ copy }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden px-6 pb-16 text-center md:pb-24"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover object-[55%_center] opacity-80 md:object-center"
      >
        <source src={withBasePath("video.mp4")} type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-b from-transparent via-background/70 to-background" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-end [text-shadow:0_12px_40px_rgba(0,0,0,0.45)]">
        <motion.h1
          {...fadeUp(0.4)}
          className="mb-4 text-3xl font-medium leading-[1.1] tracking-[-1px] md:text-4xl lg:text-5xl"
        >
          {copy.titlePrefix}{" "}
          <span className="font-serif font-normal italic">{copy.titleHighlight}</span>{" "}
          {copy.titleSuffix}
        </motion.h1>

        {copy.description ? (
          <motion.p
            {...fadeUp(0.6)}
            className="mx-auto max-w-2xl text-sm leading-relaxed text-hero-subtitle md:text-base"
          >
            {copy.description}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
