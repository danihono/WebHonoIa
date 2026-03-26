import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/5 px-8 py-32 text-center md:px-28 md:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(59,130,246,0.08)_0%,rgba(16,185,129,0.05)_26%,rgba(0,0,0,0)_62%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center rounded-[40px] border border-white/10 bg-black/20 p-12 shadow-[0_0_140px_rgba(37,99,235,0.14),0_0_110px_rgba(16,185,129,0.08)] backdrop-blur-xl md:p-20 liquid-glass">
        <motion.div {...fadeUp(0.2)} className="mb-12">
          <img src="/logo.png" alt="HONO AI Logo" className="w-12 h-12 object-contain mx-auto mb-8" referrerPolicy="no-referrer" />
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-6">
            Start Your <span className="font-serif italic font-normal">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Join thousands of readers and writers who are rediscovering the joy
            of meaningful digital content.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-bold text-sm tracking-widest rounded-lg px-10 py-4 uppercase transition-colors hover:bg-foreground/90"
          >
            Subscribe Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass font-bold text-sm tracking-widest rounded-lg px-10 py-4 uppercase transition-colors hover:bg-white/5"
          >
            Start Writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
