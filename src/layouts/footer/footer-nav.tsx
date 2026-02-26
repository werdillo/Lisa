import { footerData } from "./data";

export function FooterNav() {
  return (
    <nav
      className="flex flex-col items-center gap-4 md:gap-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex-row"
      aria-label="Footer navigation"
    >
      {footerData.mainNav.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
