// Mock Data for Family Reunion Repository
// Replace these with actual photos/videos from your reunion

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  category?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail?: string;
}

// Highlight photos for the home page teaser strip
export const highlightPhotos: Photo[] = [
  {
    id: "h1",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop",
    alt: "Family gathering around the table",
    width: 400,
    height: 300,
    caption: "The Grand Feast",
  },
  {
    id: "h2",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
    alt: "Group photo of the family",
    width: 400,
    height: 300,
    caption: "All Together",
  },
  {
    id: "h3",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
    alt: "Kids playing in the garden",
    width: 400,
    height: 300,
    caption: "Fun & Games",
  },
  {
    id: "h4",
    src: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=400&h=300&fit=crop",
    alt: "Grandparents with grandchildren",
    width: 400,
    height: 300,
    caption: "Generations",
  },
];

// Full gallery photos with varied aspect ratios for masonry layout
export const galleryPhotos: Photo[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
    alt: "Family dinner preparation",
    width: 600,
    height: 400,
    caption: "Preparing the feast together",
    category: "Food",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=800&fit=crop",
    alt: "Extended family group photo",
    width: 600,
    height: 800,
    caption: "The whole gang!",
    category: "Group Photos",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=450&fit=crop",
    alt: "Children playing outdoor games",
    width: 600,
    height: 450,
    caption: "Endless laughter and fun",
    category: "Activities",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=600&h=700&fit=crop",
    alt: "Three generations smiling",
    width: 600,
    height: 700,
    caption: "Three generations of love",
    category: "Portraits",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
    alt: "Setting up decorations",
    width: 600,
    height: 400,
    caption: "Making it beautiful",
    category: "Setup",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
    alt: "Delicious homemade dishes",
    width: 600,
    height: 600,
    caption: "Grandma's secret recipes",
    category: "Food",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&h=500&fit=crop",
    alt: "Family singing karaoke",
    width: 600,
    height: 500,
    caption: "Karaoke champions!",
    category: "Activities",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=750&fit=crop",
    alt: "Cousins reunion selfie",
    width: 600,
    height: 750,
    caption: "Cousins forever",
    category: "Portraits",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
    alt: "Birthday celebration",
    width: 600,
    height: 400,
    caption: "Celebrating Lola's birthday",
    category: "Celebrations",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=550&fit=crop",
    alt: "Garden setup with flowers",
    width: 600,
    height: 550,
    caption: "The beautiful venue",
    category: "Setup",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=400&fit=crop",
    alt: "Dessert table spread",
    width: 600,
    height: 400,
    caption: "Sweet endings",
    category: "Food",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?w=600&h=650&fit=crop",
    alt: "Family playing board games",
    width: 600,
    height: 650,
    caption: "Game night rivalry",
    category: "Activities",
  },
];

// Main event video (YouTube embed)
export const mainVideo: Video = {
  id: "v1",
  title: "Family Reunion 2025 Highlights",
  description: "Relive the best moments from our wonderful gathering. From the morning setup to the evening farewell, this video captures the love and joy we shared.",
  youtubeId: "dQw4w9WgXcQ", // Replace with your actual YouTube video ID
  thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=450&fit=crop",
};

// Event details
export const eventDetails = {
  familyName: "Onofre & Aurora",
  date: "December 30, 2025",
  venue: "Onofre Residences",
  location: "Philippines",
  tagline: "Where Our Family Story Continues",
};
