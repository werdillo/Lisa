import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { heroData } from "./data";

export default function HeroSection() {
  return (
    <section
      className="section-padding-y relative flex min-h-svh items-center overflow-hidden lg:items-end"
      aria-labelledby="hero-heading"
    >
      <img
        src={heroData.image.src}
        alt={heroData.image.alt}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 " />
      <div className="container-padding-x relative z-1 mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-start lg:gap-16 lg:text-left">
          <div className="section-title-gap-xl flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {heroData.badges.map((badge, index) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className={`${index > 0 ? "hidden lg:inline-flex" : ""} bg-secondary/60 text-sm text-foreground border-light/90 rounded-md`}
                >
                  {badge}
                </Badge>
              ))}
            </div>
            <h1 id="hero-heading" className="heading-xl text-white uppercase">
              {heroData.heading}
            </h1>
          </div>
          <div className="flex max-w-md flex-1 flex-col items-center gap-6 text-center lg:mt-11 lg:items-start lg:text-left">
            <p className="text-lg/8 text-pretty text-white/80">
              {heroData.description}
            </p>
            <a href={heroData.cta.href}>
              <Button>
                {heroData.cta.label}
                <ArrowRight />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
