import { Tagline } from "@/components/tagline";
import { sectionData, features } from "./data";
import { BentoCard } from "./bento-card";

export function BentoGrid() {
  return (
    <section>
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <h2 className="heading-lg">{sectionData.heading}</h2>
          {/* Description */}
          <p className="text-muted-foreground">{sectionData.description}</p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <BentoCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              className={feature.className}
              imageClassName={feature.imageClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
