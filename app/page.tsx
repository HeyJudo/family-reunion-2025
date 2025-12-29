import Link from "next/link";
import Image from "next/image";
import { Play, Images, Calendar, MapPin, Heart } from "lucide-react";
import { eventDetails, featuredPhotos, familyVideo } from "@/data/mockData";
import ConfettiCelebration from "@/components/ConfettiCelebration";

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
            {/* Golden sparkle dots around text - Encanto style */}
            {/* Top sparkles */}
            <span className="absolute -top-3 left-[15%] w-1.5 h-1.5 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '0s' }} />
            <span className="absolute -top-5 left-[35%] w-2 h-2 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '0.4s' }} />
            <span className="absolute -top-2 left-[55%] w-1 h-1 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '0.8s' }} />
            <span className="absolute -top-4 left-[75%] w-1.5 h-1.5 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '1.2s' }} />
            <span className="absolute -top-6 right-[10%] w-1 h-1 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '1.6s' }} />
            
            {/* Left side sparkles */}
            <span className="absolute top-[20%] -left-4 w-1.5 h-1.5 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '0.2s' }} />
            <span className="absolute top-[45%] -left-6 w-2 h-2 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '0.6s' }} />
            <span className="absolute top-[70%] -left-3 w-1 h-1 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '1.0s' }} />
            
            {/* Right side sparkles */}
            <span className="absolute top-[15%] -right-5 w-1 h-1 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '0.3s' }} />
            <span className="absolute top-[40%] -right-4 w-1.5 h-1.5 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '0.7s' }} />
            <span className="absolute top-[65%] -right-6 w-2 h-2 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '1.1s' }} />
            
            {/* Bottom sparkles */}
            <span className="absolute -bottom-3 left-[20%] w-1 h-1 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '0.5s' }} />
            <span className="absolute -bottom-5 left-[40%] w-1.5 h-1.5 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '0.9s' }} />
            <span className="absolute -bottom-2 left-[60%] w-2 h-2 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '1.3s' }} />
            <span className="absolute -bottom-4 left-[80%] w-1 h-1 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '1.7s' }} />
            
            {/* Corner accent sparkles */}
            <span className="absolute -top-2 -left-2 w-1 h-1 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '1.4s' }} />
            <span className="absolute -top-3 -right-3 w-1.5 h-1.5 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '1.8s' }} />
            <span className="absolute -bottom-2 -left-3 w-1.5 h-1.5 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '2.0s' }} />
            <span className="absolute -bottom-3 -right-2 w-1 h-1 rounded-full animate-sparkle-subtle" style={{ background: 'linear-gradient(135deg, #fbbf24, #f59e0b)', animationDelay: '2.2s' }} />

            <h1 
              className="font-[family-name:var(--font-encanto)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent pb-2"
              style={{
                backgroundImage: 'linear-gradient(135deg, #14b8a6 0%, #fbbf24 25%, #06b6d4 50%, #f59e0b 75%, #10b981 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 15s ease-in-out infinite',
              }}
            >
              {eventDetails.familyName}
            </h1>
            
            {/* Family Reunion 2025 */}
            <p 
              className="font-[family-name:var(--font-encanto)] text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 bg-clip-text text-transparent"
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

          {/* Event Details - Encanto styled */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-teal-700/80 animate-fade-up-delay-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-teal-100">
              <Calendar size={20} className="text-teal-500" />
              <span className="font-medium">{eventDetails.date}</span>
            </div>
            <div className="hidden sm:block w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-teal-100">
              <MapPin size={20} className="text-teal-500" />
              <span className="font-medium">{eventDetails.location}</span>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-10 animate-fade-up-delay-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal-300" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-amber-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-teal-300" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Photos Stat */}
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-teal-50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center">
                <Images size={28} className="text-white" />
              </div>
              <p className="text-4xl font-bold text-teal-700">50+</p>
              <p className="text-teal-600/70 font-medium">Photos Captured</p>
            </div>

            {/* Family Stat */}
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-teal-50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                <Heart size={28} className="text-white" />
              </div>
              <p className="text-4xl font-bold text-teal-700">30+</p>
              <p className="text-teal-600/70 font-medium">Family Members</p>
            </div>

            {/* Video Stat */}
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-teal-50">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                <Play size={28} className="text-white" />
              </div>
              <p className="text-4xl font-bold text-teal-700">1</p>
              <p className="text-teal-600/70 font-medium">Special Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Photos Preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-teal-800 font-semibold mb-3">
              Featured Moments
            </h2>
            <p className="text-teal-600/70 text-lg max-w-2xl mx-auto">
              A glimpse of the wonderful memories we created together
            </p>
          </div>

          {/* Photo Grid Preview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
            {featuredPhotos.slice(0, 4).map((photo, index) => (
              <div
                key={photo.id}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up-delay-${index + 1}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-medium text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Images size={24} />
              View All Photos
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
            <Play size={40} className="text-white ml-1" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mb-4">
            Watch Our Reunion Video
          </h2>
          <p className="text-teal-100 text-lg mb-8 max-w-xl mx-auto">
            {familyVideo.description}
          </p>
          <Link
            href={`/video/${familyVideo.id}`}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-teal-900 font-semibold text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Play size={28} />
            Play Video
          </Link>
        </div>
      </section>
    </div>
  );
}
