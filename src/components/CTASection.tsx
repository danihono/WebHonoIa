import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function CTASection() {
  return (
    <section className="relative py-32 md:py-44 px-8 md:px-28 border-t border-white/5 overflow-hidden text-center">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center liquid-glass p-12 md:p-20 rounded-[40px]">
        <motion.div {...fadeUp(0.2)} className="mb-12">
          <img src="/logo.jpeg" alt="HONO AI Logo" className="w-12 h-12 object-contain mx-auto mb-8" referrerPolicy="no-referrer" />
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
