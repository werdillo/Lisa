import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { FooterNav } from "./footer-nav";
import { FooterSocials } from "./footer-socials";
import { FooterBottom } from "./footer-bottom";

export function Footer() {
  return (
    <footer
      className="bg-secondary/60 section-padding-y text-sm"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:gap-16">
        <div className="relative flex flex-col items-center gap-10 md:items-center md:justify-between lg:flex-row lg:gap-8">
          <a href="/" aria-label="Go to homepage">
            <Logo className="size-7" />
          </a>
          <FooterNav />
          <FooterSocials />
        </div>
        <Separator role="presentation" />
        <FooterBottom />
      </div>
    </footer>
  );
}
