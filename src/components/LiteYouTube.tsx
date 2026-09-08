"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Click-to-play YouTube facade.
 *
 * The poster frame is a single optimised image; the real iframe is only
 * injected after the visitor asks for it. Each YouTube embed pulls roughly a
 * megabyte of player code, and this page shows six of them, so mounting them
 * up front wrecks LCP and main-thread time on mobile.
 *
 * While playing, the whole tile stays clickable so the clip can be stopped
 * again. The embed itself runs with controls hidden and pointer events off
 * (that is what lets the 150% crop fill the tile), so without this overlay
 * there would be no way to stop a video once it started.
 */
export default function LiteYouTube({
  videoId,
  title,
  className = "",
}: LiteYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [quality, setQuality] = useState<"maxresdefault" | "hqdefault">(
    "maxresdefault",
  );

  return (
    <div
      className={`group relative h-full w-full overflow-hidden bg-ink-dark ${className}`}
    >
      {/* Poster frame stays mounted underneath, so the tile is never a black box */}
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/${quality}.jpg`}
        alt=""
        fill
        className="object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        // YouTube already serves a compressed JPEG, re-optimising is wasted work
        unoptimized
        onError={() => setQuality("hqdefault")}
      />

      {isPlaying && (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&playlist=${videoId}`}
          // The 150% scale crops YouTube's own chrome so the clip fills the tile
          className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[150%] origin-center -translate-x-1/2 -translate-y-1/2 border-none"
          allow="autoplay; encrypted-media; picture-in-picture"
          title={title}
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      <button
        type="button"
        onClick={() => setIsPlaying((playing) => !playing)}
        aria-pressed={isPlaying}
        aria-label={
          isPlaying ? `Stop video: ${title}` : `Play video: ${title}`
        }
        className="absolute inset-0 grid h-full w-full cursor-pointer place-items-center"
      >
        <span
          className={`grid h-14 w-14 place-items-center rounded-full bg-white/92 shadow-card-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-focus-within:scale-110 md:h-16 md:w-16 ${
            // While playing, the stop button only appears on hover or keyboard
            // focus so it does not sit on top of the clip the whole time
            isPlaying
              ? "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
              : "opacity-100"
          }`}
        >
          {isPlaying ? (
            <Icon name="pause" size={22} filled className="text-primary" />
          ) : (
            <Icon
              name="play"
              size={22}
              filled
              className="translate-x-0.5 text-primary"
            />
          )}
        </span>
      </button>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-dark/85 to-transparent px-4 py-3 text-left">
        <span className="font-heading text-sm font-bold text-white drop-shadow">
          {title}
        </span>
      </span>
    </div>
  );
}
