import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./card"; // Corrected import path

interface ThreeDCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: React.ReactNode[];
}

export const ThreeDCarousel = React.forwardRef<
  HTMLDivElement,
  ThreeDCarouselProps
>(({ className, items, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative w-full h-full perspective-[1000px]">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <Card
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `rotateY(${index * (360 / items.length)}deg) translateZ(200px)`,
                transformStyle: "preserve-3d",
              }}
            >
              {item}
            </Card>
          ))
        ) : (
          <Card className="flex h-40 w-64 items-center justify-center text-lg font-semibold text-gray-400">
            No items in carousel
          </Card>
        )}
      </div>
    </div>
  );
});

ThreeDCarousel.displayName = "ThreeDCarousel";
