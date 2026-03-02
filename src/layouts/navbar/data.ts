export const MENU_ITEMS = [
  { label: "About me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contacts", href: "#contacts" },
] as const;

export type MenuItem = (typeof MENU_ITEMS)[number];
