import { footerData } from "./data";

export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-12 text-center md:gap-6 lg:flex-row lg:text-left">
      {/* Copyright Text */}
      <p className="text-muted-foreground order-2 md:order-1">
        <span>Copyright © {footerData.copyright.year}</span>{" "}
        <a href={footerData.copyright.siteUrl} className="hover:underline">
          {footerData.copyright.siteName}
        </a>
        . All rights reserved.
      </p>

      {/* Legal Navigation */}
      <nav
        className="order-1 flex flex-col items-center gap-4 text-center md:order-2 md:flex-row md:gap-7"
        aria-label="Legal links"
      >
        {footerData.legalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
