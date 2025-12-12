"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = [
  "/images/ponchik1.jpg",
  "/images/ponchik2.jpg",
  "/images/ponchik1.jpg",
  "/images/ponchik2.jpg",
  "/images/ponchik1.jpg",
  "/images/ponchik2.jpg",
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const maxIndex = images.length - visible;

  // TOUCH swipe support
  const startX = useRef(0);
  const endX = useRef(0);

  const next = () => setIndex((i) => (i < maxIndex ? i + 1 : 0));
  const prev = () => setIndex((i) => (i > 0 ? i - 1 : maxIndex));

  // авто переход 3 секунды
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // свайп
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    endX.current = e.changedTouches[0].clientX;

    const diff = startX.current - endX.current;

    if (diff > 50) next();     // swipe left
    if (diff < -50) prev();    // swipe right
  };

  return (
    <div
      className="relative w-full mx-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ЛЕВАЯ стрелка */}
      <button
        onClick={prev}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ←
      </button>

      {/* ПРАВАЯ стрелка */}
      <button
        onClick={next}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        →
      </button>

      {/* СЛАЙДЕР */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(index * 100) / visible}%)`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="w-1/3 p-2 shrink-0 cursor-pointer"
              onClick={next} // ← КЛИК ПО КАРТИНКЕ = следующий слайд
            >
              <div className="relative aspect-3/2 rounded-xl overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
