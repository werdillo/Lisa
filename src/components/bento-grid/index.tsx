import { sectionData, features } from "./data";
import { BentoCard } from "./bento-card";

const MAX_GRID_HEIGHT = "672px";

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
        <div
          className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
          style={{ height: `var(--grid-height, auto)` } as React.CSSProperties}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @media (min-width: 1024px) {
              :root { --grid-height: ${MAX_GRID_HEIGHT}; }
            }
          `,
            }}
          />
          {features.map((feature) => (
            <BentoCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              className={`${feature.className} h-[365px] lg:h-full flex flex-col overflow-hidden`}
              imageClassName="h-full w-full object-cover min-h-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
