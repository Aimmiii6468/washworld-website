"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  /**
   * Start the clip automatically once the tile scrolls into view.
   * Defaults to true so the gallery looks alive rather than static.
   */
  autoplay?: boolean;
  /**
   * Position in the gallery. Used to stagger start-up so several tiles do not
   * request the YouTube player in the same frame.
   */
  index?: number;
}

const STAGGER_MS = 450;

/**
 * Hard cap on simultaneously mounted YouTube players across the whole page.
 *
 * On a wide desktop the entire bento grid can be in view at once, and every
 * embed is a full player: roughly a megabyte of code plus a live video decode.
 * Tiles beyond the cap keep showing their poster frame, which is a real frame
 * from the clip, so nothing looks broken or black while it waits its turn.
 */
const MAX_CONCURRENT_PLAYERS = 4;

const activePlayers = new Set<string>();
const waitingPlayers: Array<{ key: string; start: () => void }> = [];

function requestPlayerSlot(key: string, start: () => void) {
  if (activePlayers.has(key)) return true;
  if (activePlayers.size < MAX_CONCURRENT_PLAYERS) {
    activePlayers.add(key);
    return true;
  }
  if (!waitingPlayers.some((entry) => entry.key === key)) {
    waitingPlayers.push({ key, start });
  }
  return false;
}

function releasePlayerSlot(key: string) {
  activePlayers.delete(key);

  const queued = waitingPlayers.findIndex((entry) => entry.key === key);
  if (queued !== -1) waitingPlayers.splice(queued, 1);

  while (activePlayers.size < MAX_CONCURRENT_PLAYERS && waitingPlayers.length) {
    const next = waitingPlayers.shift();
    if (!next) break;
    activePlayers.add(next.key);
    next.start();
  }
}

/**
 * YouTube tile that paints the poster frame first and mounts the real iframe
 * only while it is on screen.
 *
 * Why it is built this way: the original component mounted every embed as soon
 * as it scrolled into view and never unmounted them, so the homepage ended up
 * running eight players at once. That wrecked LCP and main-thread time on
 * mobile.
 *
 * What it does instead:
 *  - the thumbnail is always painted underneath, so a tile is never black
 *  - the iframe mounts when the tile is at least 40% visible, staggered by
 *    `index` so starts are spread out
 *  - the iframe unmounts once the tile leaves the viewport, and no more than
 *    MAX_CONCURRENT_PLAYERS run at the same time
 *  - reduced-motion and Data Saver visitors get a click-to-play thumbnail
 *
 * Once playing, the 150% scale hides YouTube's own chrome so the clip fills
 * the tile edge to edge.
 */
export default function LiteYouTube({
  videoId,
  title,
  className = "",
  autoplay = true,
  index = 0,
}: LiteYouTubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slotKey = useId();
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailQuality, setThumbnailQuality] = useState<
    "maxresdefault" | "hqdefault"
  >("maxresdefault");

  useEffect(() => {
    if (!autoplay) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (prefersReducedMotion || connection?.saveData) return;

    const node = containerRef.current;
    if (!node) return;

    let startTimer: number | undefined;
    const start = () => setIsPlaying(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.clearTimeout(startTimer);
          startTimer = window.setTimeout(() => {
            if (requestPlayerSlot(slotKey, start)) start();
          }, index * STAGGER_MS);
        } else {
          window.clearTimeout(startTimer);
          setIsPlaying(false);
          releasePlayerSlot(slotKey);
        }
      },
      { threshold: 0.4, rootMargin: "100px 0px" },
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(startTimer);
      observer.disconnect();
      releasePlayerSlot(slotKey);
    };
  }, [autoplay, index, slotKey]);

  return (
    <div
      ref={containerRef}
      className={`group relative w-full h-full bg-slate-900 overflow-hidden ${className}`}
    >
      {/* Poster frame. Always rendered, so the tile never shows as a black box
          while the player loads, waits for a slot, or after it is unmounted. */}
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/${thumbnailQuality}.jpg`}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        // YouTube already serves a compressed JPEG, so re-optimising is wasted work
        unoptimized
        onError={() => setThumbnailQuality("hqdefault")}
      />

      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&playlist=${videoId}`}
          // The 150% zoom trick: crops out YouTube UI/logos and fills all black bars
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none origin-center"
          allow="autoplay; encrypted-media; picture-in-picture"
          title={title}
          aria-hidden="true"
          tabIndex={-1}
        />
      ) : (
        // Manual play control. This is what reduced-motion and Data Saver
        // visitors see, and it keeps every tile operable from the keyboard.
        <button
          type="button"
          onClick={() => {
            if (requestPlayerSlot(slotKey, () => setIsPlaying(true))) {
              setIsPlaying(true);
            }
          }}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
        >
          <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-focus-within:scale-110">
            <Play
              className="w-7 h-7 md:w-9 md:h-9 text-primary fill-current translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </button>
      )}

      {/* Caption strip so each tile is identifiable */}
      <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 pointer-events-none">
        <span className="text-white text-sm font-semibold drop-shadow">
          {title}
        </span>
      </span>
    </div>
  );
}
