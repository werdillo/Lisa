import { footerData } from "./data";

export function FooterSocials() {
  return (
    <div
      className="flex justify-center gap-5"
      aria-label="Social media links"
    >
      {footerData.socialMedia.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="transition-all duration-300 hover:scale-110"
          aria-label={`Follow us on ${link.label}`}
        >
          <link.icon className="text-foreground size-5" />
        </a>
      ))}
    </div>
  );
}
