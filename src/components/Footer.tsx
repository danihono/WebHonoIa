import { socialLinks } from "../lib/socialLinks";
import { withBasePath } from "../lib/assetPath";
import type { LandingCopy } from "../lib/translations";
import AuricIndicator from "./ui/AuricIndicator";

interface FooterProps {
  copy: LandingCopy["footer"];
}

export default function Footer({ copy }: FooterProps) {
  return (
    <footer className="border-t border-border/10 px-8 py-12 md:px-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <img
            src={withBasePath("logo.png")}
            alt={copy.logoAlt}
            className="h-8 w-8 object-contain"
            referrerPolicy="no-referrer"
          />
          <p className="text-sm font-medium text-muted-foreground">
            {copy.rightsText}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="auric-button auric-pill-button text-xs font-semibold uppercase tracking-[0.18em]"
            >
              <AuricIndicator className="auric-button-ring" />
              <span className="auric-button-content">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
