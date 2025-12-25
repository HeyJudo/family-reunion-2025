"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
  description?: string;
  thumbnail?: string;
}

export default function VideoPlayer({
  youtubeId,
  title,
  description,
  thumbnail,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Default YouTube thumbnail if none provided
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#2D3748]">
        {!isPlaying ? (
          // Thumbnail with Play Button
          <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
            {/* Thumbnail Image */}
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              priority
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            
            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Play video: ${title}`}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C5A059] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Play size={40} className="text-white ml-1" fill="white" />
              </div>
            </button>

            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold">
                {title}
              </h3>
              {description && (
                <p className="text-white/80 text-sm sm:text-base mt-1 line-clamp-2">
                  {description}
                </p>
              )}
            </div>
          </div>
        ) : (
          // YouTube Embed
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>

      {/* Video Info (shown below when playing) */}
      {isPlaying && description && (
        <div className="mt-4 p-4 bg-[#E8E4DC] rounded-xl">
          <h3 className="font-serif text-xl text-[#2D3748] font-semibold mb-2">
            {title}
          </h3>
          <p className="text-[#2D3748]/80">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
