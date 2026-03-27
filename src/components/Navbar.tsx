import { Instagram, Linkedin, Menu, X as CloseIcon, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { withBasePath } from "../lib/assetPath";
import { socialLinks, type SocialPlatform } from "../lib/socialLinks";
import {
  LANGUAGE_OPTIONS,
  type LandingCopy,
  type Language,
} from "../lib/translations";

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

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  copy: LandingCopy["nav"];
}

export default function Navbar({
  language,
  onLanguageChange,
  copy,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-8 md:px-28 py-4 bg-black/10 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={withBasePath("logo.png")}
              alt="HONO AI Logo"
              className="h-14 w-14 object-contain md:h-16 md:w-16"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight">HONO AI</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="z-[70] p-2 text-foreground/80 transition-colors hover:text-foreground"
            aria-label={isOpen ? copy.closeMenuLabel : copy.openMenuLabel}
          >
            {isOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div
            className="flex items-center rounded-full border border-white/10 bg-black/20 p-1 backdrop-blur-sm"
            aria-label={copy.languageLabel}
            role="group"
          >
            {LANGUAGE_OPTIONS.map((option) => {
              const isActive = option.code === language;

              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => onLanguageChange(option.code)}
                  title={option.fullLabel}
                  aria-pressed={isActive}
                  className={`rounded-full px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors md:px-3 ${
                    isActive
                      ? "bg-white text-black"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {option.shortLabel}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 sm:flex">
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
                className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
              >
                {renderSocialIcon(platform)}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-white"
          >
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="absolute top-8 left-8 flex items-center gap-2 font-medium text-black transition-opacity hover:opacity-70 md:left-28"
            >
              <ArrowLeft size={20} />
              <span className="text-sm uppercase tracking-widest">{copy.backLabel}</span>
            </motion.button>

            <div className="flex flex-col items-center gap-8">
              {copy.items.map((item, index) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-medium text-black transition-all hover:italic md:text-5xl"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
