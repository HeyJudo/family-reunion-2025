import Link from "next/link";
import { ArrowLeft, Images } from "lucide-react";
import PhotoGrid from "@/components/PhotoGrid";
import { galleryPhotos, eventDetails } from "@/data/mockData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Photo Gallery | ${eventDetails.familyName} Family Reunion 2025`,
  description: `Browse all photos from the ${eventDetails.familyName} Family Reunion 2025. Download and share your favorite memories.`,
};

export default function GalleryPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      {/* Header Section */}
      <section className="py-12 sm:py-16 border-b border-[#D4CFC4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#C5A059] hover:text-[#B8923E] font-medium text-lg mb-8 transition-colors"
          >
            <ArrowLeft size={22} />
            Back to Home
          </Link>

          {/* Page Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl text-[#2D3748] font-bold mb-2">
                Photo Gallery
              </h1>
              <p className="text-[#2D3748]/70 text-lg sm:text-xl">
                {eventDetails.familyName} Family Reunion • {eventDetails.date}
              </p>
            </div>

            {/* Photo Count Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#C5A059]/10 rounded-full">
              <Images size={20} className="text-[#C5A059]" />
              <span className="text-[#2D3748] font-medium">
                {galleryPhotos.length} Photos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions for Seniors */}
      <section className="py-6 bg-[#E8E4DC]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[#C5A059] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl">💡</span>
            </div>
            <p className="text-[#2D3748]/80 text-lg">
              <strong>Tip:</strong> Click or tap on any photo to view it larger. 
              You can then save it to your device using the &quot;Save Photo&quot; button.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGrid photos={galleryPhotos} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 bg-[#E8E4DC]/30 border-t border-[#D4CFC4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2D3748] font-semibold mb-4">
            Want to Share Your Photos?
          </h2>
          <p className="text-[#2D3748]/70 text-lg max-w-xl mx-auto mb-8">
            If you have photos from the reunion that you&apos;d like to add to this gallery, 
            please reach out to the family group chat!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#3D4F5F] hover:bg-[#2D3748] text-white font-medium text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft size={22} />
            Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
