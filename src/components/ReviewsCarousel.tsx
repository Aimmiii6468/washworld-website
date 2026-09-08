"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Stars } from "@/components/sections/Shared";
import { GOOGLE_REVIEWS } from "@/lib/site";

/** Card width plus the gap between cards, used for one step of the track. */
const STEP = 364;
const AUTO_MS = 4500;

/**
 * Horizontally scrolling review track.
 *
 * It auto-scrolls, but a visitor can stop it: the track pauses on hover and on
 * keyboard focus, there is an explicit pause control, and it never starts at
 * all under prefers-reduced-motion. WCAG 2.2.2 requires a way to stop anything
 * that moves on its own for more than five seconds.
 */
export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHeld, setIsHeld] = useState(false);

  const step = useCallback((direction: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: direction === "left" ? -STEP : STEP,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (!isPlaying || isHeld) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 20) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: STEP, behavior: "smooth" });
      }
    }, AUTO_MS);

    return () => window.clearInterval(timer);
  }, [isPlaying, isHeld]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHeld(true)}
      onMouseLeave={() => setIsHeld(false)}
      onFocus={() => setIsHeld(true)}
      onBlur={() => setIsHeld(false)}
    >
      <button
        type="button"
        onClick={() => step("left")}
        aria-label="Previous reviews"
        className="absolute -left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-white text-muted-foreground shadow-card-lg transition-colors hover:text-primary sm:grid lg:-left-5"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => step("right")}
        aria-label="Next reviews"
        className="absolute -right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-white text-muted-foreground shadow-card-lg transition-colors hover:text-primary sm:grid lg:-right-5"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <div
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label="Customer reviews, scrollable"
        className="scrollbar-hide -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-2"
      >
        {GOOGLE_REVIEWS.map((review) => (
          <figure
            key={review.name}
            className="m-0 flex w-[85vw] max-w-[340px] shrink-0 snap-center flex-col gap-4 rounded-[26px] border border-border bg-white p-7 shadow-card sm:w-[340px]"
          >
            <div className="flex items-start justify-between gap-3">
              <Stars count={review.rating} />
              {/* Google mark, so the source of the quote is obvious */}
              <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" role="img" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <blockquote className="m-0 text-[1.02rem]">{review.text}</blockquote>
            <figcaption className="mt-auto border-t border-border pt-4 text-[0.86rem] text-muted-foreground">
              <b className="block font-heading text-foreground">{review.name}</b>
              {review.time} on Google
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setIsPlaying((playing) => !playing)}
          aria-pressed={!isPlaying}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-muted-foreground shadow-card transition-colors hover:text-primary"
        >
          {isPlaying ? (
            <>
              <Pause className="h-4 w-4" aria-hidden="true" />
              Pause scrolling
            </>
          ) : (
            <>
              <Play className="h-4 w-4" aria-hidden="true" />
              Resume scrolling
            </>
          )}
        </button>
        <span className="text-sm text-muted-foreground">
          Swipe or use the arrows to see all {GOOGLE_REVIEWS.length}
        </span>
      </div>
    </div>
  );
}
