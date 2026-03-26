import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

const platforms = [
  {
    name: "Codex",
    description:
      "Shows up when your content is structured, trustworthy, and clear enough to be reused inside answers.",
    icon: "/claude.png",
    glow: "radial-gradient(circle, rgba(61, 220, 151, 0.38) 0%, rgba(61, 220, 151, 0) 72%)",
  },
  {
    name: "Claude",
    description:
      "Rewards thoughtful explanations, strong context, and pages that feel genuinely useful to real people.",
    icon: "/chat.png",
    glow: "radial-gradient(circle, rgba(251, 146, 60, 0.38) 0%, rgba(251, 146, 60, 0) 72%)",
  },
  {
    name: "Google AI",
    description:
      "Highlights pages that answer the full question directly, with authority, completeness, and clarity.",
    icon: "/google.png",
    glow: "radial-gradient(circle, rgba(148, 163, 184, 0.34) 0%, rgba(148, 163, 184, 0) 72%)",
  },
];

export default function SearchSection() {
  return (
    <section className="relative z-20 px-8 pt-48 pb-32 text-center md:px-28 md:pt-64 md:pb-44">
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent md:h-56" />

      <motion.div {...fadeUp(0.2)} className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-5xl font-medium leading-[1.05] tracking-[-2px] md:text-7xl lg:text-8xl">
          Search has <span className="font-serif italic font-normal">changed.</span>
          <br />
          Have you?
        </h2>

        <p className="text-hero-subtitle mx-auto mb-32 max-w-3xl text-lg leading-relaxed opacity-70 md:text-xl">
          People no longer search with keywords - they ask questions that Codex,
          <br className="hidden md:block" /> Claude, and Google answer. Brands that grow today
          are the ones that
          <br className="hidden md:block" /> appear in those answers.
        </p>

        <div className="mb-20 grid gap-16 md:grid-cols-3 md:gap-12">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              {...fadeUp(0.4 + i * 0.1)}
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
                      rotate: [0, i % 2 === 0 ? 2 : -2, 0],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 6 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="relative z-10 flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-[1.14]"
                  >
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="h-full w-full object-contain opacity-95 transition-opacity drop-shadow-[0_28px_60px_rgba(255,255,255,0.14)] group-hover:opacity-100"
                    />
                  </motion.div>
                </div>

                <h3 className="mb-4 text-xl font-semibold tracking-tight">{platform.name}</h3>
                <p className="text-hero-subtitle max-w-[280px] text-sm leading-relaxed opacity-50">
                  {platform.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp(0.8)} className="text-muted-foreground text-sm tracking-wide">
          If you do not answer the questions, someone else will.
        </motion.p>
      </motion.div>
    </section>
  );
}
