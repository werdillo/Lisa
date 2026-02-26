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
    { label: "Portfolio", href: "#" },
    { label: "About me", href: "#" },
    { label: "Contacts", href: "#" },
  ],
  socialMedia: [
    { href: "#", label: "Instagram", icon: SiInstagram },
    { href: "#", label: "WhatsApp", icon: SiWhatsapp },
  ],
};
