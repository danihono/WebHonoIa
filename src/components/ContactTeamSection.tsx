import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { withBasePath } from "../lib/assetPath";
import type { LandingCopy } from "../lib/translations";
import { socialLinks } from "../lib/socialLinks";
import AuricIndicator from "./ui/AuricIndicator";

const contactHref =
  socialLinks.find((link) => link.platform === "instagram")?.href ??
  socialLinks[0]?.href ??
  "#";

interface ContactTeamSectionProps {
  copy: LandingCopy["contact"];
}

export default function ContactTeamSection({
  copy,
}: ContactTeamSectionProps) {
  return (
    <section
      id="contact"
      className="relative isolate z-30 flex h-screen w-full items-center justify-center overflow-hidden bg-black px-6"
    >
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full scale-[1.12] object-cover md:scale-[1.08]"
      >
        <source src={withBasePath("fim.mp4")} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[22vw] min-w-[96px] bg-gradient-to-r from-black via-black/82 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[22vw] min-w-[96px] bg-gradient-to-l from-black via-black/82 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 -translate-y-14 md:-translate-y-50"
      >
        <a
          href={contactHref}
          target="_blank"
          rel="noreferrer"
          className="auric-button auric-cta-button inline-flex"
        >
          <AuricIndicator className="auric-button-ring" />
          <span className="auric-button-content">
            {copy.ctaPrefix}{" "}
            <span className="font-serif font-normal italic">{copy.ctaHighlight}</span>
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
