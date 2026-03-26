import { socialLinks } from "../lib/socialLinks";
import { withBasePath } from "../lib/assetPath";

export default function Footer() {
  return (
    <footer className="py-12 px-8 md:px-28 border-t border-border/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src={withBasePath("logo.png")}
            alt="HONO AI Logo"
            className="h-8 w-8 object-contain"
            referrerPolicy="no-referrer"
          />
          <p className="text-muted-foreground text-sm font-medium">
            © 2026 HONO AI. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-8">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
