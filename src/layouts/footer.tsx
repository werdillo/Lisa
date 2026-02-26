import { Logo } from "@/components/pro-blocks/logo";
import { Separator } from "@/components/ui/separator";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

const footerData = {
  copyright: {
    year: new Date().getFullYear(),
    siteName: "shadcndesign.com",
    siteUrl: "#",
  },
  mainNav: [
    { href: "#", label: "Home" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Services" },
    { href: "#", label: "Contact Us" },
    { href: "#", label: "FAQ" },
  ],
  socialMedia: [
    { href: "#", label: "Facebook", icon: SiFacebook },
    { href: "#", label: "Instagram", icon: SiInstagram },
    { href: "#", label: "X", icon: SiX },
    { href: "#", label: "YouTube", icon: SiYoutube },
    { href: "#", label: "WhatsApp", icon: SiWhatsapp },
  ],
  legalLinks: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookies Settings" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-secondary/60 section-padding-y text-sm"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:gap-16">
        {/* Top Section */}
        <div className="relative flex flex-col items-center gap-10 md:items-center md:justify-between lg:flex-row lg:gap-8">
          {/* Logo */}
          <a href="/" aria-label="Go to homepage">
            <Logo className="size-7" />
          </a>

          {/* Main Navigation */}
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

          {/* Social Media Links */}
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
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
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
      </div>
    </footer>
  );
}
