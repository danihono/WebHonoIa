import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { withBasePath } from "../lib/assetPath";
import type { LandingCopy } from "../lib/translations";

interface SearchSectionProps {
  copy: LandingCopy["search"];
}

export default function SearchSection({ copy }: SearchSectionProps) {
  return (
    <section
      id="how-it-works"
      className="relative z-20 px-8 pt-48 pb-32 text-center md:px-28 md:pt-64 md:pb-44"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent md:h-56" />

      <motion.div {...fadeUp(0.2)} className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-5xl font-medium leading-[1.05] tracking-[-2px] md:text-7xl lg:text-8xl">
          {copy.titlePrefix}{" "}
          <span className="font-serif font-normal italic">{copy.titleHighlight}</span>
          <br />
          {copy.titleSuffix}
        </h2>

        <p className="mx-auto mb-32 max-w-3xl text-lg leading-relaxed text-hero-subtitle opacity-70 md:text-xl">
          {copy.description}
        </p>

        <div className="mb-20 grid gap-16 md:grid-cols-3 md:gap-12">
          {copy.platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              {...fadeUp(0.4 + index * 0.1)}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group h-full"
            >
              <div className="flex h-full flex-col items-center px-6 py-8 text-center">
                <div className="relative mb-12 flex h-56 w-56 items-center justify-center overflow-visible">
                  <div
                    className="absolute inset-[18%] rounded-full opacity-75 blur-3xl transition-all duration-700 group-hover:inset-[14%] group-hover:opacity-100"
                    style={{ background: platform.glow }}
                  />

                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 6 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="relative z-10 flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-[1.14]"
                  >
                    <img
                      src={withBasePath(platform.icon)}
                      alt={platform.name}
                      className="h-full w-full object-contain opacity-95 drop-shadow-[0_28px_60px_rgba(255,255,255,0.14)] transition-opacity group-hover:opacity-100"
                    />
                  </motion.div>
                </div>

                <h3 className="mb-4 text-xl font-semibold tracking-tight">{platform.name}</h3>
                <p className="max-w-[280px] text-sm leading-relaxed text-hero-subtitle opacity-50">
                  {platform.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(0.8)} className="text-sm tracking-wide text-muted-foreground">
          {copy.footer}
        </motion.p>
      </motion.div>
    </section>
  );
}
