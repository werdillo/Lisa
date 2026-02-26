import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tagline } from "@/components/tagline";
import { sectionData, features } from "./data";
import { FeatureItem } from "./feature-item";

export function FeatureSection() {
  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x mx-auto flex max-w-7xl flex-col items-center gap-12 md:gap-16 lg:flex-row">
        <div className="flex flex-1 flex-col gap-8 md:gap-12">
          <div className="section-title-gap-lg flex flex-col">
            <Tagline>{sectionData.tagline}</Tagline>
            <h2 className="heading-lg text-foreground">
              {sectionData.heading}
            </h2>
            <p className="text-muted-foreground text-lg/8 text-pretty">
              {sectionData.description}
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {features.map((feature) => (
              <FeatureItem
                key={feature.id}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex-1">
          <AspectRatio ratio={sectionData.image.aspectRatio}>
            <img
              src={sectionData.image.src}
              alt={sectionData.image.alt}
              className="rounded-xl object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
