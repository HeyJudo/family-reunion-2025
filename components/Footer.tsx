import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-teal-800 via-teal-900 to-teal-950 text-white/90 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Decorative Line */}
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-12 bg-amber-400/50"></div>
            <Heart size={20} className="text-amber-400" fill="#fbbf24" />
            <div className="h-px w-12 bg-amber-400/50"></div>
          </div>

          {/* Main Message */}
          <p className="font-serif text-2xl text-amber-400">
            See you in 2026!
          </p>
          
          <p className="text-teal-100/70 text-lg max-w-md">
            Until we meet again, keep the memories alive and the love strong.
          </p>

          {/* Copyright */}
          <div className="mt-4 pt-4 border-t border-teal-700/50 w-full">
            <p className="text-teal-200/50 text-base">
              © {currentYear} Onofre & Aurora Family Reunion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
