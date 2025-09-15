"use client";

import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";

type CarouselProps = {
  images: { src: string; alt?: string }[];
  aspectRatio?: string; // e.g., "4/3", "3/4", "1/1"
};

export default function Carousel({ images, aspectRatio = "4/5" }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = images.length;
  const currentImage = useMemo(() => images[index], [images, index]);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = null;
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 40; // px
    if (distance > threshold) {
      goNext();
    } else if (distance < -threshold) {
      goPrev();
    }
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full select-none">
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-black/5"
        style={{ aspectRatio }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt ?? `Makeup photo ${index + 1}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Left arrow */}
        <button
          type="button"
          aria-label="Previous image"
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 text-black shadow-md grid place-items-center active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M15.53 4.47a.75.75 0 0 1 0 1.06L9.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 1.06 0Z" clipRule="evenodd"/></svg>
        </button>

        {/* Right arrow */}
        <button
          type="button"
          aria-label="Next image"
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/80 text-black shadow-md grid place-items-center active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M8.47 19.53a.75.75 0 0 1 0-1.06L14.94 12 8.47 5.53a.75.75 0 1 1 1.06-1.06l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"/></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={
                "h-1.5 rounded-full transition-all " +
                (i === index ? "w-4 bg-white" : "w-2 bg-white/60")
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}


