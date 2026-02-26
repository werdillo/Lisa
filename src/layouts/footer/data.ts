import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

export const footerData = {
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
