export const MENU_ITEMS = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "About me", href: "#about" },
  { label: "Contacts", href: "#contacts" },
] as const;

export type MenuItem = (typeof MENU_ITEMS)[number];
