import { useState } from "react";
import { galleryImages } from "./data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
        className="max-w-dvw w-screen h-dvh overflow-y-auto rounded-none border-none p-4 md:p-10"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square w-full overflow-hidden bg-muted"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
