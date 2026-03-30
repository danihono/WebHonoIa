import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { type CSSProperties, useLayoutEffect, useRef, useState } from "react";
import { withBasePath } from "../lib/assetPath";
import type {
  ExplorationItemCopy,
  LandingCopy,
} from "../lib/translations";
import { cn } from "../lib/utils";
import AuricIndicator from "./ui/AuricIndicator";

const halftoneStyle: CSSProperties = {
  backgroundImage:
    "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)",
  backgroundSize: "12px 12px",
  backgroundPosition: "center",
};

gsap.registerPlugin(ScrollTrigger);

interface ExplorationMediaProps {
  item: ExplorationItemCopy;
  placeholderLabel: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  priority?: boolean;
}

function ExplorationMedia({
  item,
  placeholderLabel,
  className,
  imageClassName,
  overlayClassName,
  priority = false,
}: ExplorationMediaProps) {
  const [hasError, setHasError] = useState(false);
  const source = withBasePath(item.image);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!hasError ? (
        <img
          src={source}
          alt={item.title}
          loading={priority ? "eager" : "lazy"}
          className={cn("h-full w-full object-cover", imageClassName)}
          onError={() => setHasError(true)}
        />
      ) : null}

      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          hasError ? "opacity-100" : "opacity-0",
          overlayClassName,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(125,211,252,0.3),transparent_28%),radial-gradient(circle_at_72%_62%,rgba(244,114,182,0.24),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.96),rgba(3,7,18,1))]" />
        <div
          className="absolute inset-0 opacity-35 mix-blend-soft-light"
          style={halftoneStyle}
        />
        <div className="absolute inset-x-6 bottom-6 rounded-[24px] border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.28em] text-white/55">
            {placeholderLabel}
          </p>
          <p className="mt-2 text-lg font-medium tracking-tight text-white">
            {item.title}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ExplorationCardProps {
  item: ExplorationItemCopy;
  openItemLabel: string;
  placeholderLabel: string;
  reducedMotion: boolean | null;
}

function ExplorationCard({
  item,
  openItemLabel,
  placeholderLabel,
  reducedMotion,
}: ExplorationCardProps) {
  const rotation = item.id % 2 === 0 ? 3.5 : -2.5;

  return (
    <motion.div
      style={{ rotate: rotation }}
      whileHover={reducedMotion ? undefined : { y: -10, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="group relative mx-auto aspect-square w-full max-w-[320px] text-left"
    >
      <div className="absolute -inset-4 rounded-[40px] border border-white/10 bg-white/[0.02] shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition duration-500 group-hover:border-white/20" />

      <div className="relative h-full overflow-hidden rounded-[30px] border border-white/10 bg-black">
        <ExplorationMedia
          item={item}
          placeholderLabel={placeholderLabel}
          className="absolute inset-0"
          imageClassName="transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.4)_100%)]" />
        {item.href ? (
          <div className="absolute bottom-5 right-5">
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="auric-button auric-icon-button"
              aria-label={`${openItemLabel} ${item.title}`}
            >
              <AuricIndicator className="auric-button-ring" />
              <span className="auric-button-content">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

interface CTASectionProps {
  copy: LandingCopy["explorations"];
}

export default function CTASection({ copy }: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const leftItems = copy.items.filter((item) => item.id % 2 === 0);
  const rightItems = copy.items.filter((item) => item.id % 2 === 1);

  useLayoutEffect(() => {
    if (
      reducedMotion ||
      !sectionRef.current ||
      !contentRef.current ||
      !leftColumnRef.current ||
      !rightColumnRef.current
    ) {
      return;
    }

    const section = sectionRef.current;
    const content = contentRef.current;
    const leftColumn = leftColumnRef.current;
    const rightColumn = rightColumnRef.current;

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: content,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      gsap.fromTo(
        leftColumn,
        { y: "24vh" },
        {
          y: "-72vh",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.fromTo(
        rightColumn,
        { y: "52vh" },
        {
          y: "-40vh",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        },
      );

      gsap.utils
        .toArray<HTMLElement>("[data-exploration-card]")
        .forEach((card) => {
          const isInitial = card.dataset.initialVisible === "true";
          const side = card.dataset.side === "right" ? 1 : -1;

          if (isInitial) {
            gsap.set(card, {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              clipPath: "inset(0% 0% 0% 0% round 32px)",
            });
            return;
          }

          gsap.set(card, {
            autoAlpha: 0,
            x: 32 * side,
            y: 56,
            scale: 0.96,
            filter: "blur(10px)",
            clipPath: "inset(18% 0% 22% 0% round 32px)",
          });

          gsap.to(card, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            clipPath: "inset(0% 0% 0% 0% round 32px)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 96%",
              end: "top 80%",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, [copy.items, reducedMotion]);

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh] overflow-x-clip px-8 md:px-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/85 to-transparent md:h-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(59,130,246,0.12),transparent_26%),radial-gradient(circle_at_20%_72%,rgba(34,197,94,0.08),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(236,72,153,0.1),transparent_26%)]" />

      <div className="relative mx-auto min-h-[300vh] max-w-[1400px]">
        <div
          ref={contentRef}
          className={cn(
            "z-10 flex h-screen items-center justify-center py-16",
            reducedMotion && "sticky top-0",
          )}
        >
          <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.38em] text-white/55">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl">
              {copy.titlePrefix}{" "}
              <span className="font-serif font-normal italic text-white/95">
                {copy.titleHighlight}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/68 md:text-lg">
              {copy.description}
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-background via-background/95 to-transparent md:h-44" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-gradient-to-t from-background via-background/95 to-transparent md:h-44" />

          <div className="grid min-h-full grid-cols-2 gap-16 px-2 md:gap-52 md:px-8 xl:gap-60">
            <div
              ref={leftColumnRef}
              className="flex min-h-full flex-col items-end gap-10 pr-4 md:gap-16 md:pr-12 xl:pr-20"
              style={reducedMotion ? undefined : { transform: "translateY(24vh)" }}
            >
              <div className="h-[82vh] shrink-0" />
              {leftItems.map((item, index) => (
                <div
                  key={item.id}
                  data-exploration-card
                  data-side="left"
                  data-initial-visible="false"
                  className="pointer-events-auto flex w-full justify-end"
                  style={{ marginTop: index === 0 ? "0vh" : "62vh" }}
                >
                  <div className="w-full max-w-[320px]">
                    <ExplorationCard
                      item={item}
                      openItemLabel={copy.openItemLabel}
                      placeholderLabel={copy.placeholderLabel}
                      reducedMotion={reducedMotion}
                    />
                  </div>
                </div>
              ))}
              <div className="h-[80vh] shrink-0" />
            </div>

            <div
              ref={rightColumnRef}
              className="flex min-h-full flex-col items-start gap-10 pl-4 md:gap-16 md:pl-12 xl:pl-20"
              style={reducedMotion ? undefined : { transform: "translateY(52vh)" }}
            >
              <div className="h-[108vh] shrink-0" />
              {rightItems.map((item, index) => (
                <div
                  key={item.id}
                  data-exploration-card
                  data-side="right"
                  data-initial-visible="false"
                  className="pointer-events-auto flex w-full justify-start"
                  style={{ marginTop: index === 0 ? "0vh" : "62vh" }}
                >
                  <div className="w-full max-w-[320px]">
                    <ExplorationCard
                      item={item}
                      openItemLabel={copy.openItemLabel}
                      placeholderLabel={copy.placeholderLabel}
                      reducedMotion={reducedMotion}
                    />
                  </div>
                </div>
              ))}
              <div className="h-[80vh] shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
