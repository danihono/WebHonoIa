import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { withBasePath } from "../lib/assetPath";
import type { LandingCopy } from "../lib/translations";

interface SolutionSectionProps {
  copy: LandingCopy["solution"];
}

export default function SolutionSection({ copy }: SolutionSectionProps) {
  return (
    <section
      id="solution"
      className="relative isolate overflow-hidden px-8 py-32 md:px-28 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55"
          style={{ backgroundImage: `url('${withBasePath("fundo.png")}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.86)_12%,rgba(0,0,0,0.42)_30%,rgba(0,0,0,0.18)_50%,rgba(0,0,0,0.42)_70%,rgba(0,0,0,0.86)_88%,rgba(0,0,0,1)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.08)_0%,rgba(16,185,129,0.05)_22%,rgba(0,0,0,0)_58%)]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/92 to-transparent md:h-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/92 to-transparent md:h-40" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div {...fadeUp(0.2)} className="mb-20">
          <span className="mb-6 block text-xs font-semibold uppercase tracking-[3px] text-muted-foreground">
            {copy.eyebrow}
          </span>
          <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
            {copy.titlePrefix}{" "}
            <span className="font-serif font-normal italic">{copy.titleHighlight}</span>{" "}
            {copy.titleSuffix}
          </h2>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {copy.features.map((feature, index) => (
            <motion.div key={feature.title} {...fadeUp(0.6 + index * 0.1)}>
              <h3 className="mb-3 text-base font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
