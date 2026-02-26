import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface BentoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  className?: string;
  imageClassName?: string;
}

export function BentoCard({
  title,
  description,
  imageSrc,
  imageAlt,
  className,
  imageClassName,
}: BentoCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-base text-primary font-semibold">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex h-full flex-col">
        <img
          src={imageSrc}
          alt={imageAlt}
          width={1000}
          height={1000}
          className={imageClassName}
        />
      </CardContent>
    </Card>
  );
}
