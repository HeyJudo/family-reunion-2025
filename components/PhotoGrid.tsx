"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X, Download, ChevronLeft, ChevronRight } from "lucide-react";
import type { Photo } from "@/data/mockData";

interface PhotoGridProps {
  photos: Photo[];
  columns?: number;
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "unset";
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1);
    }
  }, [selectedIndex, photos.length]);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1);
    }
  }, [selectedIndex, photos.length]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    },
    [closeLightbox, goToPrevious, goToNext]
  );

  // Download handler
  const handleDownload = async (photo: Photo) => {
    try {
      const response = await fetch(photo.src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `family-reunion-${photo.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab
      window.open(photo.src, "_blank");
    }
  };

  return (
    <>
      {/* Masonry Grid */}
      <div className="masonry-grid">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="masonry-item"
          >
            <button
              onClick={() => openLightbox(index)}
              className="relative w-full group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#C5A059]/50"
              aria-label={`View photo: ${photo.alt}`}
            >
              <div
                className="relative w-full"
                style={{ aspectRatio: `${photo.width}/${photo.height}` }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Caption Overlay */}
                {photo.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-medium text-lg">
                      {photo.caption}
                    </p>
                    {photo.category && (
                      <span className="inline-block mt-1 px-2 py-1 bg-[#C5A059] text-white text-sm rounded-full">
                        {photo.category}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Navigation - Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Navigation - Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={selectedPhoto.width}
              height={selectedPhoto.height}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              priority
            />
          </div>

          {/* Bottom Info Bar */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Caption */}
              <div className="text-center sm:text-left">
                {selectedPhoto.caption && (
                  <h3 className="text-white text-xl font-serif font-semibold">
                    {selectedPhoto.caption}
                  </h3>
                )}
                <p className="text-white/70 text-base mt-1">
                  Photo {selectedIndex !== null ? selectedIndex + 1 : 0} of {photos.length}
                </p>
              </div>

              {/* Download Button */}
              <button
                onClick={() => handleDownload(selectedPhoto)}
                className="flex items-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#B8923E] text-white font-medium rounded-full transition-colors shadow-lg"
                aria-label="Save photo"
              >
                <Download size={22} />
                <span>Save Photo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
