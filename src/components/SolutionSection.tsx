import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { withBasePath } from "../lib/assetPath";

const features = [
  {
    title: "Curated Feed",
    description: "A personalized stream of high-quality content tailored to your interests.",
  },
  {
    title: "Writer Tools",
    description: "Powerful publishing tools designed for clarity and reach.",
  },
  {
    title: "Community",
    description: "Meaningful conversations that go beyond the inbox.",
  },
  {
    title: "Distribution",
    description: "Smart algorithms that help your best work find its audience.",
  },
];

export default function SolutionSection() {
  return (
    <section className="relative isolate overflow-hidden px-8 py-32 md:px-28 md:py-44">
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
          <span className="text-xs tracking-[3px] uppercase text-muted-foreground font-semibold mb-6 block">
            SOLUTION
          </span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
            The platform for <span className="font-serif italic font-normal">meaningful</span> content
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature, i) => (
            <motion.div key={feature.title} {...fadeUp(0.6 + i * 0.1)}>
              <h3 className="font-semibold text-base mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
