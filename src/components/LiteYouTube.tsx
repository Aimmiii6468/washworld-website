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

  if (isPlaying) {
    return (
      <div
        className={`relative h-full w-full overflow-hidden bg-ink-dark ${className}`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&playlist=${videoId}`}
          // The 150% scale crops YouTube's own chrome so the clip fills the tile
          className="pointer-events-none absolute left-1/2 top-1/2 h-[150%] w-[150%] origin-center -translate-x-1/2 -translate-y-1/2 border-none"
          allow="autoplay; encrypted-media; picture-in-picture"
          title={title}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative block h-full w-full cursor-pointer overflow-hidden bg-ink-dark ${className}`}
    >
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

      <span className="absolute inset-0 grid place-items-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-white/92 shadow-card-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110 md:h-16 md:w-16">
          <Icon name="play" size={22} filled className="translate-x-0.5 text-primary" />
        </span>
      </span>

      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-dark/85 to-transparent px-4 py-3 text-left">
        <span className="font-heading text-sm font-bold text-white drop-shadow">
          {title}
        </span>
      </span>
    </button>
  );
}
