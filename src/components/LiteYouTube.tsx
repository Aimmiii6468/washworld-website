"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
}

export default function LiteYouTube({ videoId, title, className = "", autoplay = true }: LiteYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Auto-load the iframe when it's in view for immediate autoplay
          if (autoplay) {
            setIsLoaded(true);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoplay]);

  // Use maximum resolution thumbnail from YouTube
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (isLoaded) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&playlist=${videoId}`}
          // The 150% zoom trick: crops out YouTube UI/logos and fills all black bars
          className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 border-none pointer-events-none origin-center"
          allow="autoplay; encrypted-media"
          title={title}
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full bg-slate-900 overflow-hidden ${className}`}
    >
      {isInView && (
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover opacity-80"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized // Prevents double-processing if YouTube is already serving a heavy JPEG
        />
      )}
    </div>
  );
}
