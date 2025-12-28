import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import ConfettiCelebration from "@/components/ConfettiCelebration";
import { highlightPhotos, mainVideo, eventDetails } from "@/data/mockData";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-white via-teal-50/30 to-white min-h-screen">
      {/* Falling Flowers on page load */}
      <ConfettiCelebration />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden min-h-[80vh] sm:min-h-0">
        {/* Decorative Background - Encanto themed - Fixed for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-20 sm:top-20 sm:left-10 w-[200px] h-[200px] sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-teal-400/15 sm:bg-teal-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-20 sm:bottom-20 sm:right-10 w-[200px] h-[200px] sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-emerald-400/10 sm:bg-emerald-400/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-amber-300/5 sm:bg-amber-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pre-headline */}
          <p className="text-teal-600 text-sm sm:text-base font-medium tracking-[0.2em] uppercase mb-4 animate-fade-up-delay-1">
            Welcome to Our Family Memories
          </p>

          {/* Main Headline - Encanto Style */}
          <div className="relative inline-block animate-fade-up-delay-2">
            {/* Subtle golden sparkle dots like Encanto logo */}
            {/* Left side */}
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '5%', left: '-6px', width: '7px', height: '7px', animationDelay: '0s', background: 'radial-gradient(circle, #fbbf24 0%, #b45309 100%)', boxShadow: '0 0 3px 1px rgba(251, 191, 36, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '18%', left: '1%', width: '4px', height: '4px', animationDelay: '1.2s', background: 'radial-gradient(circle, #92400e 0%, #451a03 100%)', boxShadow: '0 0 2px 1px rgba(146, 64, 14, 0.4)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '32%', left: '-4px', width: '5px', height: '5px', animationDelay: '0.6s', background: 'radial-gradient(circle, #fcd34d 0%, #d97706 100%)', boxShadow: '0 0 3px 1px rgba(252, 211, 77, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '48%', left: '2%', width: '3px', height: '3px', animationDelay: '1.8s', background: 'radial-gradient(circle, #d97706 0%, #78350f 100%)', boxShadow: '0 0 2px 1px rgba(217, 119, 6, 0.4)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '62%', left: '-3px', width: '6px', height: '6px', animationDelay: '0.4s', background: 'radial-gradient(circle, #fbbf24 0%, #92400e 100%)', boxShadow: '0 0 3px 1px rgba(251, 191, 36, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '78%', left: '1%', width: '4px', height: '4px', animationDelay: '2.0s', background: 'radial-gradient(circle, #78350f 0%, #451a03 100%)', boxShadow: '0 0 2px 1px rgba(120, 53, 15, 0.4)' }} />
            
            {/* Right side */}
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '8%', right: '-5px', width: '6px', height: '6px', animationDelay: '0.3s', background: 'radial-gradient(circle, #fbbf24 0%, #92400e 100%)', boxShadow: '0 0 3px 1px rgba(251, 191, 36, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '22%', right: '1%', width: '4px', height: '4px', animationDelay: '1.5s', background: 'radial-gradient(circle, #78350f 0%, #451a03 100%)', boxShadow: '0 0 2px 1px rgba(120, 53, 15, 0.4)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '38%', right: '-4px', width: '5px', height: '5px', animationDelay: '0.9s', background: 'radial-gradient(circle, #fcd34d 0%, #b45309 100%)', boxShadow: '0 0 3px 1px rgba(252, 211, 77, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '52%', right: '2%', width: '3px', height: '3px', animationDelay: '2.1s', background: 'radial-gradient(circle, #d97706 0%, #78350f 100%)', boxShadow: '0 0 2px 1px rgba(217, 119, 6, 0.4)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '68%', right: '-3px', width: '6px', height: '6px', animationDelay: '0.7s', background: 'radial-gradient(circle, #fbbf24 0%, #b45309 100%)', boxShadow: '0 0 3px 1px rgba(251, 191, 36, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '82%', right: '1%', width: '4px', height: '4px', animationDelay: '1.3s', background: 'radial-gradient(circle, #92400e 0%, #451a03 100%)', boxShadow: '0 0 2px 1px rgba(146, 64, 14, 0.4)' }} />
            
            {/* Top scattered */}
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '-4px', left: '15%', width: '5px', height: '5px', animationDelay: '0.5s', background: 'radial-gradient(circle, #fbbf24 0%, #d97706 100%)', boxShadow: '0 0 3px 1px rgba(251, 191, 36, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '-2px', left: '35%', width: '3px', height: '3px', animationDelay: '1.7s', background: 'radial-gradient(circle, #92400e 0%, #451a03 100%)', boxShadow: '0 0 2px 1px rgba(146, 64, 14, 0.4)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '-3px', right: '38%', width: '4px', height: '4px', animationDelay: '1.1s', background: 'radial-gradient(circle, #d97706 0%, #78350f 100%)', boxShadow: '0 0 2px 1px rgba(217, 119, 6, 0.4)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ top: '-2px', right: '18%', width: '3px', height: '3px', animationDelay: '2.3s', background: 'radial-gradient(circle, #fcd34d 0%, #b45309 100%)', boxShadow: '0 0 2px 1px rgba(252, 211, 77, 0.4)' }} />
            
            {/* Bottom scattered */}
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ bottom: '12%', left: '12%', width: '4px', height: '4px', animationDelay: '1.0s', background: 'radial-gradient(circle, #fbbf24 0%, #b45309 100%)', boxShadow: '0 0 2px 1px rgba(251, 191, 36, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ bottom: '5%', left: '28%', width: '3px', height: '3px', animationDelay: '2.5s', background: 'radial-gradient(circle, #78350f 0%, #451a03 100%)', boxShadow: '0 0 2px 1px rgba(120, 53, 15, 0.4)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ bottom: '8%', left: '48%', width: '5px', height: '5px', animationDelay: '0.2s', background: 'radial-gradient(circle, #fcd34d 0%, #d97706 100%)', boxShadow: '0 0 3px 1px rgba(252, 211, 77, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ bottom: '3%', right: '35%', width: '3px', height: '3px', animationDelay: '1.4s', background: 'radial-gradient(circle, #d97706 0%, #92400e 100%)', boxShadow: '0 0 2px 1px rgba(217, 119, 6, 0.4)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ bottom: '10%', right: '20%', width: '4px', height: '4px', animationDelay: '0.8s', background: 'radial-gradient(circle, #fbbf24 0%, #92400e 100%)', boxShadow: '0 0 2px 1px rgba(251, 191, 36, 0.5)' }} />
            <span className="absolute rounded-full pointer-events-none animate-sparkle-subtle" style={{ bottom: '6%', right: '8%', width: '3px', height: '3px', animationDelay: '1.9s', background: 'radial-gradient(circle, #92400e 0%, #451a03 100%)', boxShadow: '0 0 2px 1px rgba(146, 64, 14, 0.4)' }} />
            
            <h1 className="font-encanto text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-4">
              {/* Encanto teal-turquoise-green-gold gradient */}
              <span 
                className="bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-500"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #0d9488 0%, #f59e0b 12%, #14b8a6 24%, #fbbf24 36%, #06b6d4 48%, #d97706 60%, #10b981 72%, #f59e0b 84%, #2dd4bf 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 15s ease-in-out infinite',
                }}
              >
                Onofre & Aurora
              </span>
            </h1>
            
            {/* Family Reunion 2025 */}
            <p 
              className="font-encanto text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: 'linear-gradient(135deg, #14b8a6 0%, #fbbf24 15%, #06b6d4 30%, #f59e0b 45%, #10b981 60%, #d97706 75%, #2dd4bf 90%, #fbbf24 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 15s ease-in-out infinite reverse',
              }}
            >
              Family Reunion 2025
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-[#2D3748]/60 max-w-2xl mx-auto mb-8 mt-8 animate-fade-up-delay-3 font-light">
            {eventDetails.tagline}
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-teal-700/80 mb-12 animate-fade-up-delay-4">
            <div className="flex items-center gap-2 text-lg">
              <Calendar size={24} className="text-amber-500" />
              <span>{eventDetails.date}</span>
            </div>
            <div className="hidden sm:block w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400" />
            <div className="flex items-center gap-2 text-lg">
              <MapPin size={24} className="text-amber-500" />
              <span>{eventDetails.venue}</span>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-up-delay-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal-300" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-amber-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-teal-300" />
          </div>
        </div>
      </section>

      {/* Main Event Video Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl text-teal-800 font-semibold mb-3">
              The Main Event
            </h2>
            <p className="text-teal-600/70 text-lg max-w-xl mx-auto">
              Watch our reunion highlights and relive those beautiful moments
            </p>
          </div>

          {/* Video Player */}
          <div className="animate-fade-up-delay-1">
            <VideoPlayer
              youtubeId={mainVideo.youtubeId}
              title={mainVideo.title}
              description={mainVideo.description}
              thumbnail={mainVideo.thumbnail}
            />
          </div>
        </div>
      </section>

      {/* Teaser Photo Strip */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-serif text-3xl sm:text-4xl text-teal-800 font-semibold mb-3">
              Captured Moments
            </h2>
            <p className="text-teal-600/70 text-lg max-w-xl mx-auto">
              A glimpse of the love, laughter, and joy we shared together
            </p>
          </div>

          {/* Photo Grid - 4 Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlightPhotos.map((photo, index) => (
              <Link
                key={photo.id}
                href="/gallery"
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up-delay-${index + 1}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CTA Content */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mb-4 animate-fade-up">
            Ready to See More?
          </h2>
          <p className="text-teal-100/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 animate-fade-up-delay-1">
            Explore the full collection of photos from our reunion. 
            Relive every smile, every hug, and every precious moment.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up-delay-2">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-teal-900 font-semibold text-xl rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              View Full Gallery
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
