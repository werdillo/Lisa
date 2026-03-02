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
    { label: "Home", href: "#" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About me", href: "#about" },
    { label: "Contacts", href: "#contacts" },
  ],
  socialMedia: [
    { href: "#", label: "Instagram", icon: SiInstagram },
    { href: "#", label: "WhatsApp", icon: SiWhatsapp },
  ],
};
