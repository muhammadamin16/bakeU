"use client";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const maxIndex = Math.max(0, images.length - visible);

  const next = useCallback(() => {
    setIndex((i) => (i < maxIndex ? i + 1 : 0));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i > 0 ? i - 1 : maxIndex));
  }, [maxIndex]);

  // ----- autoplay (не тухнет, не замыкается) -----
  const isPausedRef = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!isPausedRef.current) next();
    }, 3000);
    return () => window.clearInterval(id);
  }, [next]);

  // ----- pointer swipe -----
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pointerIdRef = useRef<number | null>(null);

  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);

  const SWIPE_PX = 50;

  const startYRef = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    pointerIdRef.current = e.pointerId; // ✅ ВАЖНО
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    lastXRef.current = e.clientX; // ✅ ВАЖНО
    draggingRef.current = true;
    movedRef.current = false;

    isPausedRef.current = true;

    trackRef.current?.setPointerCapture?.(e.pointerId); // ✅ чтобы up не терялся
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    if (pointerIdRef.current !== e.pointerId) return;

    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;

    // если вертикаль доминирует — это скролл, отваливаемся
    if (Math.abs(dy) > Math.abs(dx)) {
      draggingRef.current = false;
      trackRef.current?.releasePointerCapture?.(e.pointerId);
      pointerIdRef.current = null;
      // автоплей возвращаем чуть позже, чтобы не дергалось
      window.setTimeout(() => (isPausedRef.current = false), 600);
      return;
    }

    lastXRef.current = e.clientX; // ✅ ВАЖНО
    if (Math.abs(dx) > 6) movedRef.current = true;
  };

  const finishSwipe = (e: React.PointerEvent) => {
    if (pointerIdRef.current !== e.pointerId) return;

    trackRef.current?.releasePointerCapture?.(e.pointerId);
    pointerIdRef.current = null;

    const dx = lastXRef.current - startXRef.current;

    draggingRef.current = false;

    if (dx <= -SWIPE_PX) next();
    else if (dx >= SWIPE_PX) prev();

    window.setTimeout(() => {
      isPausedRef.current = false;
    }, 600);
  };

  return (
    <div className="relative w-full mx-auto select-none">
      <button
        onClick={prev}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2 rounded-full"
      >
        →
      </button>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 touch-pan-y"
          style={{ transform: `translateX(-${(index * 100) / visible}%)` }}
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            if (!draggingRef.current) isPausedRef.current = false;
          }}
          onWheel={() => {
            isPausedRef.current = true;
            window.setTimeout(() => {
              isPausedRef.current = false;
            }, 4000);
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishSwipe}
          onPointerCancel={finishSwipe}
          // чтобы на iOS не пыталось выделять/перетаскивать картинки
          onDragStart={(e) => e.preventDefault()}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="w-1/3 p-2 shrink-0 cursor-pointer"
              onClick={() => {
                // если был свайп, не считаем это кликом
                if (movedRef.current) return;
                next();
              }}
            >
              <div className="relative aspect-3/2 rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover pointer-events-none"
                  // pointer-events-none чтобы pointer события шли контейнеру
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
