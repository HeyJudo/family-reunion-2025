import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3D4F5F] text-white/90 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Decorative Line */}
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-12 bg-[#C5A059]/50"></div>
            <Heart size={20} className="text-[#C5A059]" fill="#C5A059" />
            <div className="h-px w-12 bg-[#C5A059]/50"></div>
          </div>

          {/* Main Message */}
          <p className="font-serif text-2xl text-[#C5A059]">
            See you in 2026!
          </p>
          
          <p className="text-white/70 text-lg max-w-md">
            Until we meet again, keep the memories alive and the love strong.
          </p>

          {/* Copyright */}
          <div className="mt-4 pt-4 border-t border-white/10 w-full">
            <p className="text-white/50 text-base">
              © {currentYear} Sangalang Family Reunion. Made with{" "}
              <Heart size={14} className="inline text-[#C5A059]" fill="#C5A059" />{" "}
              by the family, for the family.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
