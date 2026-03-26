import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop&sat=-100",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop&sat=-100",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop&sat=-100",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-end text-center px-6 pb-16 md:pb-24">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 grayscale blur-[2px]"
      >
        <source
          src="/video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Deep Black Overlays */}
      <div className="absolute inset-0 z-[1] bg-black/60" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Heading */}
        <motion.h1
          {...fadeUp(0.4)}
          className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-[1.1] mb-4"
        >
          Get <span className="font-serif italic font-normal">Inspired</span> with Us.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-sm md:text-base text-hero-subtitle max-w-2xl mx-auto leading-relaxed"
        >
          Join our feed for meaningful updates, news around technology and a
          shared journey toward depth and direction.
        </motion.p>
      </div>
    </section>
  );
}
