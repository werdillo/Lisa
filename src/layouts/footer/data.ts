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
    {
      href: "https://www.instagram.com/fox.yinc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
      icon: SiInstagram,
    },
    {
      href: "https://wa.me/37122484996",
      label: "WhatsApp",
      icon: SiWhatsapp,
    },
  ],
};
