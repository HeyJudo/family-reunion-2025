"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiCelebration() {
  useEffect(() => {
    // Small delay to let the page render first, then celebrate!
    const timer = setTimeout(() => {
      // First burst - center explosion
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#C5A059", "#FFD700", "#FDFBF7", "#3D4F5F", "#2D3748"],
        ticks: 200,
        gravity: 1.2,
        scalar: 1.2,
        drift: 0,
      });

      // Second burst - left side
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors: ["#C5A059", "#FFD700", "#FDFBF7"],
        });
      }, 150);

      // Third burst - right side
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors: ["#C5A059", "#FFD700", "#FDFBF7"],
        });
      }, 300);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything visible
  return null;
}
