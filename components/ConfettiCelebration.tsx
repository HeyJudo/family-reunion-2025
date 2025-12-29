"use client";

import { useEffect, useState } from "react";

interface Flower {
  id: number;
  type: "hibiscus" | "marigold" | "bougainvillea" | "petal" | "butterfly";
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

// Encanto-themed flower SVGs
const FlowerSVG = ({ type, size }: { type: Flower["type"]; size: number }) => {
  switch (type) {
    case "hibiscus":
      // Tropical hibiscus - pink/coral
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          <g transform="rotate(0, 16, 16)">
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <ellipse
                key={i}
                cx="16"
                cy="8"
                rx="6"
                ry="10"
                fill={i % 2 === 0 ? "#f472b6" : "#fb7185"}
                transform={`rotate(${angle}, 16, 16)`}
              />
            ))}
            <circle cx="16" cy="16" r="4" fill="#fbbf24" />
            <circle cx="16" cy="16" r="2" fill="#f59e0b" />
          </g>
        </svg>
      );
    case "marigold":
      // Colombian marigold - orange/gold (Día de los Muertos flower)
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <ellipse
              key={i}
              cx="16"
              cy="6"
              rx="3"
              ry="7"
              fill={i % 3 === 0 ? "#fbbf24" : i % 3 === 1 ? "#f59e0b" : "#fb923c"}
              transform={`rotate(${angle}, 16, 16)`}
            />
          ))}
          <circle cx="16" cy="16" r="5" fill="#ea580c" />
        </svg>
      );
    case "bougainvillea":
      // Bougainvillea - magenta/purple
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          {[0, 120, 240].map((angle, i) => (
            <path
              key={i}
              d="M16 4 L20 14 L16 16 L12 14 Z"
              fill={i === 0 ? "#c026d3" : i === 1 ? "#a855f7" : "#e879f9"}
              transform={`rotate(${angle}, 16, 16)`}
            />
          ))}
          <circle cx="16" cy="16" r="2" fill="#fef3c7" />
        </svg>
      );
    case "petal":
      // Single floating petal - teal/emerald (Encanto magic)
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <ellipse
            cx="12"
            cy="12"
            rx="5"
            ry="10"
            fill="url(#petalGradient)"
            transform="rotate(-20, 12, 12)"
          />
          <defs>
            <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "butterfly":
      // Encanto magical butterfly
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          <ellipse cx="10" cy="12" rx="8" ry="10" fill="#fbbf24" opacity="0.9" />
          <ellipse cx="22" cy="12" rx="8" ry="10" fill="#f59e0b" opacity="0.9" />
          <ellipse cx="10" cy="20" rx="5" ry="7" fill="#14b8a6" opacity="0.8" />
          <ellipse cx="22" cy="20" rx="5" ry="7" fill="#0d9488" opacity="0.8" />
          <rect x="15" y="8" width="2" height="16" rx="1" fill="#134e4a" />
          <circle cx="16" cy="7" r="2" fill="#134e4a" />
        </svg>
      );
  }
};

export default function ConfettiCelebration() {
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const flowerTypes: Flower["type"][] = ["hibiscus", "marigold", "bougainvillea", "petal", "butterfly"];
    
    // Generate flowers
    const generatedFlowers: Flower[] = [];
    for (let i = 0; i < 35; i++) {
      generatedFlowers.push({
        id: i,
        type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
        left: Math.random() * 100,
        delay: Math.random() * 2.5,
        duration: 4 + Math.random() * 3,
        size: 20 + Math.random() * 20,
        rotation: Math.random() * 360,
      });
    }
    setFlowers(generatedFlowers);

    // Hide flowers after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-fall"
          style={{
            left: `${flower.left}%`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
            top: '-50px',
            transform: `rotate(${flower.rotation}deg)`,
          }}
        >
          <FlowerSVG type={flower.type} size={flower.size} />
        </div>
      ))}
    </div>
  );
}
