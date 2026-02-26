import { footerData } from "./data";

export function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 text-center md:gap-6 lg:flex-row lg:text-left">
      {/* Copyright Text */}
      <p className="text-muted-foreground order-2 md:order-1">
        <span>Copyright © {footerData.copyright.year}</span>
      </p>
    </div>
  );
}
