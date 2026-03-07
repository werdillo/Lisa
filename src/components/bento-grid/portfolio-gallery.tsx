import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "/assets/gallery/gallery-tatoo.jpg",
    alt: "Tattoo work 1",
  },
  {
    src: "/assets/gallery/gallery-tatoo-1.jpg",
    alt: "Tattoo work 2",
  },
  {
    src: "/assets/gallery/gallery-tatoo-2.jpg",
    alt: "Tattoo work 3",
  },
  {
    src: "/assets/gallery/gallery-tatoo-3.jpg",
    alt: "Tattoo work 4",
  },
  {
    src: "/assets/gallery/gallery-tatoo-4.jpg",
    alt: "Tattoo work 5",
  },
];

export function PortfolioGallery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg">
          View Full Portfolio
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-[100vw] w-screen h-screen md:h-[98vh] overflow-y-auto rounded-none md:rounded-lg"
        onOpenAutoFocus={(e) => {
          // Fix for layout shift: ensure scrollbar-gutter or similar isn't causing jumps
          document.documentElement.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
        }}
        onCloseAutoFocus={() => {
          document.documentElement.style.paddingRight = "";
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-8">
            Full Portfolio
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg bg-muted"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
