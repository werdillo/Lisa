export const MENU_ITEMS = [
  { label: "Portfolio", href: "#" },
  { label: "About me", href: "#" },
  { label: "Contacts", href: "#" },
] as const;

export type MenuItem = (typeof MENU_ITEMS)[number];
