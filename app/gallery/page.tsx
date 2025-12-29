import Link from "next/link";
import { ArrowLeft, Images, Lightbulb } from "lucide-react";
import PhotoGrid from "@/components/PhotoGrid";
import { getReunionPhotos } from "@/lib/cloudinary";
import { eventDetails } from "@/data/mockData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Photo Gallery | ${eventDetails.familyName} Family Reunion 2025`,
  description: `Browse all photos from the ${eventDetails.familyName} Family Reunion 2025. Download and share your favorite memories.`,
};

export default async function GalleryPage() {
  const photos = await getReunionPhotos();

  return (
    <div className="bg-gradient-to-b from-white via-teal-50/20 to-white min-h-screen">
      {/* Header Section */}
      <section className="py-12 sm:py-16 border-b border-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-lg mb-8 transition-colors"
          >
            <ArrowLeft size={22} />
            Back to Home
          </Link>

          {/* Page Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl text-teal-800 font-bold mb-2">
                Photo Gallery
              </h1>
              <p className="text-teal-600/70 text-lg sm:text-xl">
                {eventDetails.familyName} Family Reunion • {eventDetails.date}
              </p>
            </div>

            {/* Photo Count Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-100 rounded-full">
              <Images size={20} className="text-teal-500" />
              <span className="text-teal-700 font-medium">
                {photos.length} Photos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions for Seniors */}
      <section className="py-6 bg-gradient-to-r from-amber-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center flex-shrink-0">
              <Lightbulb size={24} className="text-white" />
            </div>
            <p className="text-teal-700/80 text-lg">
              <strong>Tip:</strong> Click or tap on any photo to view it larger. 
              You can then save it to your device using the &quot;Save Photo&quot; button.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {photos.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-100 flex items-center justify-center">
                <Images size={40} className="text-teal-400" />
              </div>
              <h2 className="font-serif text-2xl text-teal-700 mb-2">No Photos Yet</h2>
              <p className="text-teal-600/70 text-lg max-w-md mx-auto">
                No memories uploaded to the &apos;onofre-reunion-2025&apos; folder yet.
              </p>
            </div>
          ) : (
            <PhotoGrid photos={photos} />
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-teal-50/50 to-white border-t border-teal-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-teal-800 font-semibold mb-4">
            Want to Share Your Photos?
          </h2>
          <p className="text-teal-600/70 text-lg max-w-xl mx-auto mb-8">
            If you have photos from the reunion that you&apos;d like to add to this gallery, 
            please reach out to the family group chat!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft size={22} />
            Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
