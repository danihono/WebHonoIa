import {
  ArrowLeft,
  Instagram,
  Linkedin,
  Menu,
  MoonStar,
  SunMedium,
  X as CloseIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  useEffect,
  useState,
} from "react";
import { withBasePath } from "../lib/assetPath";
import { socialLinks, type SocialPlatform } from "../lib/socialLinks";
import {
  LANGUAGE_OPTIONS,
  type LandingCopy,
  type Language,
} from "../lib/translations";
import { cn } from "../lib/utils";
import AuricIndicator from "./ui/AuricIndicator";

type UiTheme = "dark" | "light";

function renderSocialIcon(platform: SocialPlatform) {
  switch (platform) {
    case "instagram":
      return <Instagram size={18} strokeWidth={1.85} />;
    case "linkedin":
      return <Linkedin size={18} strokeWidth={1.85} />;
    case "x":
      return <span className="text-sm font-semibold leading-none">X</span>;
  }
}

interface NavbarProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  copy: LandingCopy["nav"];
  theme: UiTheme;
  onThemeToggle: () => void;
}

export default function Navbar({
  language,
  onLanguageChange,
  copy,
  theme,
  onThemeToggle,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    copy.items[0]?.href ?? "#home",
  );
  const [isThemeButtonAnimating, setIsThemeButtonAnimating] = useState(false);

  useEffect(() => {
    const sectionElements = copy.items
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              right.intersectionRatio - left.intersectionRatio ||
              Math.abs(left.boundingClientRect.top) -
                Math.abs(right.boundingClientRect.top),
          );

        const mostVisibleEntry = visibleEntries[0];
        if (mostVisibleEntry?.target.id) {
          setActiveSection(`#${mostVisibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: [0.18, 0.32, 0.48, 0.64, 0.8],
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [copy.items]);

  useEffect(() => {
    if (!isThemeButtonAnimating) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsThemeButtonAnimating(false);
    }, 560);

    return () => window.clearTimeout(timeoutId);
  }, [isThemeButtonAnimating]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleNavigate = (href: string, closeMenu = false) => {
    const target = document.querySelector<HTMLElement>(href);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href);
    }

    if (closeMenu) {
      setIsOpen(false);
    }
  };

  const handleThemeToggle = () => {
    setIsThemeButtonAnimating(false);

    window.requestAnimationFrame(() => {
      setIsThemeButtonAnimating(true);
    });

    onThemeToggle();
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[60] px-4 py-4 md:px-8 md:py-5 lg:px-28">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("#home");
              }}
              className="flex shrink-0 items-center gap-4 text-white transition-opacity hover:opacity-80"
              aria-label="HONO AI"
            >
              <img
                src={withBasePath("logo.png")}
                alt="HONO AI Logo"
                className="h-14 w-14 object-contain md:h-[4.5rem] md:w-[4.5rem]"
                referrerPolicy="no-referrer"
              />
              <span className="hidden text-xs font-semibold tracking-[0.28em] sm:inline">
                HONO AI
              </span>
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((currentState) => !currentState)}
              className="auric-button auric-floating-button auric-icon-button auric-icon-button-lg shrink-0"
              aria-label={isOpen ? copy.closeMenuLabel : copy.openMenuLabel}
            >
              <AuricIndicator className="auric-button-ring" />
              <span className="auric-button-content">
                {isOpen ? (
                  <CloseIcon size={20} strokeWidth={1.9} />
                ) : (
                  <Menu size={20} strokeWidth={1.9} />
                )}
              </span>
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div
              className="auric-floating-cluster"
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
                    data-active={isActive}
                    className="auric-button auric-floating-button auric-segment-button min-w-[3.55rem] px-3"
                  >
                    <AuricIndicator className="auric-button-ring" />
                    <span className="auric-button-content">
                      {option.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="auric-floating-cluster hidden sm:flex">
              {socialLinks.map(({ label, href, platform }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="auric-button auric-floating-button auric-icon-button"
                >
                  <AuricIndicator className="auric-button-ring" />
                  <span className="auric-button-content">
                    {renderSocialIcon(platform)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] flex min-h-screen flex-col bg-white text-black"
          >
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18 }}
              onClick={() => setIsOpen(false)}
              className="nav-overlay-close absolute left-6 top-6 md:left-8 lg:left-12"
            >
              <ArrowLeft size={20} strokeWidth={1.85} />
              <span className="text-sm uppercase tracking-widest">
                {copy.backLabel}
              </span>
            </motion.button>

            <div className="flex min-h-screen flex-col items-center justify-center px-8 py-24">
              <div className="flex flex-col items-center gap-8">
                {copy.items.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 + 0.18 }}
                    type="button"
                    onClick={() => handleNavigate(item.href, true)}
                    data-active={activeSection === item.href}
                    className={cn(
                      "nav-overlay-link",
                      activeSection === item.href && "nav-overlay-link-active",
                    )}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48 }}
                className="mt-14"
              >
                <button
                  type="button"
                  onClick={handleThemeToggle}
                  className={cn(
                    "auric-button auric-pill-button auric-cta-button",
                    isThemeButtonAnimating && "theme-toggle-bounce",
                  )}
                  aria-label={copy.themeToggleLabel}
                  title={copy.themeToggleLabel}
                >
                  <AuricIndicator className="auric-button-ring" />
                  <span className="auric-button-content relative h-5 w-5">
                    <SunMedium
                      size={20}
                      strokeWidth={1.9}
                      className="auric-theme-icon"
                      data-visible={theme === "light"}
                    />
                    <MoonStar
                      size={20}
                      strokeWidth={1.9}
                      className="auric-theme-icon"
                      data-visible={theme === "dark"}
                    />
                  </span>
                  <span className="auric-button-content text-xs font-semibold uppercase tracking-[0.18em]">
                    {copy.themeToggleLabel}
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
