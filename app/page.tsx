import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import { highlightPhotos, mainVideo, eventDetails } from "@/data/mockData";

export default function HomePage() {
  return (
    <div className="bg-[#FDFBF7]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C5A059] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C5A059] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pre-headline */}
          <p className="text-[#C5A059] text-lg sm:text-xl font-medium tracking-wide uppercase mb-4 animate-fade-in">
            Welcome to Our Family Memories
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2D3748] font-bold leading-tight mb-6 animate-fade-in">
            The {eventDetails.familyName}
            <span className="block text-[#C5A059]">Reunion 2025</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-[#2D3748]/70 max-w-2xl mx-auto mb-8 animate-fade-in">
            {eventDetails.tagline}
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#2D3748]/80 mb-12 animate-fade-in">
            <div className="flex items-center gap-2 text-lg">
              <Calendar size={24} className="text-[#C5A059]" />
              <span>{eventDetails.date}</span>
            </div>
            <div className="hidden sm:block w-2 h-2 rounded-full bg-[#C5A059]" />
            <div className="flex items-center gap-2 text-lg">
              <MapPin size={24} className="text-[#C5A059]" />
              <span>{eventDetails.venue}, {eventDetails.location}</span>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#C5A059]/30" />
            <div className="w-3 h-3 rounded-full bg-[#C5A059]" />
            <div className="h-px w-16 bg-[#C5A059]/30" />
          </div>
        </div>
      </section>

      {/* Main Event Video Section */}
      <section className="py-12 sm:py-16 bg-[#E8E4DC]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D3748] font-semibold mb-3">
              The Main Event
            </h2>
            <p className="text-[#2D3748]/70 text-lg max-w-xl mx-auto">
              Watch our reunion highlights and relive those beautiful moments
            </p>
          </div>

          {/* Video Player */}
          <VideoPlayer
            youtubeId={mainVideo.youtubeId}
            title={mainVideo.title}
            description={mainVideo.description}
            thumbnail={mainVideo.thumbnail}
          />
        </div>
      </section>

      {/* Teaser Photo Strip */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D3748] font-semibold mb-3">
              Captured Moments
            </h2>
            <p className="text-[#2D3748]/70 text-lg max-w-xl mx-auto">
              A glimpse of the love, laughter, and joy we shared together
            </p>
          </div>

          {/* Photo Grid - 4 Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlightPhotos.map((photo, index) => (
              <Link
                key={photo.id}
                href="/gallery"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-lg">
                    {photo.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#3D4F5F] to-[#2D3748]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CTA Content */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-4">
            Ready to See More?
          </h2>
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Explore the full collection of photos from our reunion. 
            Relive every smile, every hug, and every precious moment.
          </p>

          {/* CTA Button */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C5A059] hover:bg-[#B8923E] text-white font-semibold text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            View Full Gallery
            <ArrowRight size={24} />
          </Link>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <p className="font-serif text-4xl sm:text-5xl text-[#C5A059] font-bold">50+</p>
              <p className="text-white/70 text-sm sm:text-base mt-1">Photos</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl sm:text-5xl text-[#C5A059] font-bold">30+</p>
              <p className="text-white/70 text-sm sm:text-base mt-1">Family Members</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl sm:text-5xl text-[#C5A059] font-bold">∞</p>
              <p className="text-white/70 text-sm sm:text-base mt-1">Memories</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
