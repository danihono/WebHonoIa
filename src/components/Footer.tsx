export default function Footer() {
  return (
    <footer className="py-12 px-8 md:px-28 border-t border-border/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="HONO AI Logo" className="w-6 h-6 object-contain" referrerPolicy="no-referrer" />
          <p className="text-muted-foreground text-sm font-medium">
            © 2026 HONO AI. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-8">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
