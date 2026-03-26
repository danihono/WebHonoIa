import { Instagram, Linkedin, Menu, X as CloseIcon, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { socialLinks, type SocialPlatform } from "../lib/socialLinks";

const navLinks = ["Home", "How It Works", "Philosophy", "Use Cases"];

function renderSocialIcon(platform: SocialPlatform) {
  switch (platform) {
    case "instagram":
      return <Instagram size={18} />;
    case "linkedin":
      return <Linkedin size={18} />;
    case "x":
      return <span className="text-sm font-semibold leading-none">X</span>;
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-8 md:px-28 py-4 bg-black/10 backdrop-blur-md border-b border-white/5">
        {/* Left: Logo & Hamburger */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="HONO AI Logo"
              className="h-14 w-14 object-contain md:h-16 md:w-16"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight">HONO AI</span>
          </div>

          {/* Hamburger Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground/80 hover:text-foreground transition-colors z-[70]"
          >
            {isOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, platform }) => (
            <motion.a
              key={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              title={label}
              className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground transition-colors"
            >
              {renderSocialIcon(platform)}
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Full-screen Minimalist Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[55] flex flex-col items-center justify-center"
          >
            {/* Back Button inside Menu */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-8 left-8 md:left-28 flex items-center gap-2 text-black font-medium hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={20} />
              <span className="text-sm uppercase tracking-widest">Voltar</span>
            </motion.button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl md:text-5xl font-medium text-black hover:italic transition-all"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
