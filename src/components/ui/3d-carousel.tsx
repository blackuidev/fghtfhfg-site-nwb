import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/components/lib/utils";
import { Card, CardContent } from "./card"; // Corrected import path

interface CarouselProps {
  items: {
    id: string;
    content: React.ReactNode;
    className?: string;
  }[];
  className?: string;
}

export const ThreeDCarousel = ({ items, className }: CarouselProps) => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setActiveItem((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveItem((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Auto-advance every 3 seconds
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div
      ref={carouselRef}
      className={cn(
        "relative flex h-96 w-full items-center justify-center overflow-hidden",
        className
      )}
    >
      {items.map((item, index) => (
        <CarouselItem
          key={item.id}
          item={item}
          index={index}
          activeItem={activeItem}
          totalItems={items.length}
        />
      ))}
      <div className="absolute bottom-4 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full bg-gray-400 transition-all",
              activeItem === index ? "bg-blue-500 w-4" : ""
            )}
            onClick={() => setActiveItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

interface CarouselItemProps {
  item: {
    id: string;
    content: React.ReactNode;
    className?: string;
  };
  index: number;
  activeItem: number;
  totalItems: number;
}

const CarouselItem = ({
  item,
  index,
  activeItem,
  totalItems,
}: CarouselItemProps) => {
  const offset = index - activeItem;
  const scaleFactor = 1 - Math.abs(offset) * 0.1; // Smaller items further away
  const opacityFactor = 1 - Math.abs(offset) * 0.3; // Fade items further away

  const translateX = useSpring(
    offset * (200 + Math.abs(offset) * 50), // Adjust spacing based on offset
    { stiffness: 300, damping: 30 }
  );
  const scale = useSpring(scaleFactor, { stiffness: 300, damping: 30 });
  const opacity = useSpring(opacityFactor, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(offset * 15, { stiffness: 300, damping: 30 }); // Slight rotation

  return (
    <motion.div
      className={cn(
        "absolute w-64 h-64 rounded-xl shadow-lg cursor-pointer",
        item.className
      )}
      style={{
        transformOrigin: "center",
        translateX,
        scale,
        opacity,
        rotateY,
        zIndex: totalItems - Math.abs(offset),
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <Card className="h-full w-full">
        <CardContent className="flex h-full items-center justify-center p-6">
          {item.content}
        </CardContent>
      </Card>
    </motion.div>
  );
};
