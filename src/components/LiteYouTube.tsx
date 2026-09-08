"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * Click-to-play YouTube facade.
 *
 * Renders a lightweight thumbnail (a single optimised image) plus a play
 * button. The real <iframe> is only injected after the visitor asks for it.
 *
 * Once playing, the embed keeps the original cropped, muted, looping look:
 * the 150% scale hides YouTube's own chrome so the clip fills the tile.
 */
export default function LiteYouTube({
  videoId,
  title,
  className = "",
}: LiteYouTubeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailQuality, setThumbnailQuality] = useState<
    "maxresdefault" | "hqdefault"
  >("maxresdefault");

  if (isPlaying) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-slate-900 ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&playlist=${videoId}`}
          // The 150% zoom trick: crops out YouTube UI/logos and fills all black bars
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none origin-center"
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
      className={`group relative w-full h-full bg-slate-900 overflow-hidden block cursor-pointer ${className}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/${thumbnailQuality}.jpg`}
        alt=""
        fill
        className="object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        // YouTube already serves a compressed JPEG, so re-optimising is wasted work
        unoptimized
        onError={() => setThumbnailQuality("hqdefault")}
      />

      {/* Play affordance */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-focus-visible:scale-110">
          <Play
            className="w-7 h-7 md:w-9 md:h-9 text-primary fill-current translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </span>

      {/* Caption strip so each tile is identifiable without playing it */}
      <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-left">
        <span className="text-white text-sm font-semibold drop-shadow">
          {title}
        </span>
      </span>
    </button>
  );
}
