interface FeatureItemProps {
  title: string;
  description: string;
}

export function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
      <div className="flex flex-col gap-2">
        <h3 className="text-primary heading-xs">{title}</h3>
        <p className="text-foreground">{description}</p>
      </div>
    </div>
  );
}
