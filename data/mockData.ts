// Mock data for the Family Reunion website

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export interface EventDetails {
  familyName: string;
  date: string;
  location: string;
  tagline: string;
}

// Event Details
export const eventDetails: EventDetails = {
  familyName: "Onofre & Aurora",
  date: "December 30, 2025",
  location: "Family Home",
  tagline: "Where Our Family Story Continues",
};

// Featured photos for the homepage
export const featuredPhotos: Photo[] = [
  {
    id: "featured-1",
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop",
    alt: "Family gathering",
    width: 800,
    height: 600,
    caption: "The whole family together",
  },
  {
    id: "featured-2",
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop",
    alt: "Holiday celebration",
    width: 800,
    height: 600,
    caption: "Holiday celebrations",
  },
  {
    id: "featured-3",
    src: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=800&h=600&fit=crop",
    alt: "Family dinner",
    width: 800,
    height: 600,
    caption: "Sharing a meal together",
  },
  {
    id: "featured-4",
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
    alt: "Group photo",
    width: 800,
    height: 600,
    caption: "Memories to cherish",
  },
];

// Gallery photos (larger collection)
export const galleryPhotos: Photo[] = [
  ...featuredPhotos,
  {
    id: "gallery-5",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    alt: "Fun moments",
    width: 800,
    height: 600,
  },
  {
    id: "gallery-6",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
    alt: "Party time",
    width: 800,
    height: 600,
  },
];

// Family video
export const familyVideo: Video = {
  id: "reunion-2025",
  title: "Family Reunion 2025 Highlights",
  description: "A beautiful compilation of our most precious moments from the reunion",
  thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=675&fit=crop",
  videoUrl: "/videos/reunion-2025.mp4",
  duration: "5:30",
};
