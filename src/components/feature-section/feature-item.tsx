interface FeatureItemProps {
  title: string;
  description: string;
}

export function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
      <div className="flex flex-col gap-2">
        <h3 className="text-foreground heading-sm">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
