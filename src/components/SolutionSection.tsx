import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

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
    <section className="relative py-32 md:py-44 px-8 md:px-28">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto">
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
