import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Interface for reunion photos
export interface ReunionPhoto {
  id: string;
  url: string;
  width: number;
  height: number;
}

// Fetch ALL photos from the onofre-reunion-2025 folder (handles 500+ photos with pagination)
export async function getReunionPhotos(): Promise<ReunionPhoto[]> {
  try {
    const allPhotos: ReunionPhoto[] = [];
    let nextCursor: string | undefined = undefined;

    // Paginate through all results (Cloudinary max is 500 per request)
    do {
      const searchQuery = cloudinary.search
        .expression("folder:onofre-reunion-2025")
        .sort_by("created_at", "desc")
        .max_results(500);

      // Add cursor for pagination if we have one
      if (nextCursor) {
        searchQuery.next_cursor(nextCursor);
      }

      const result = await searchQuery.execute();

      const photos: ReunionPhoto[] = result.resources.map(
        (resource: {
          public_id: string;
          secure_url: string;
          width: number;
          height: number;
        }) => ({
          id: resource.public_id,
          url: resource.secure_url,
          width: resource.width,
          height: resource.height,
        })
      );

      allPhotos.push(...photos);
      nextCursor = result.next_cursor;
    } while (nextCursor);

    return allPhotos;
  } catch (error) {
    console.error("Error fetching photos from Cloudinary:", error);
    return [];
  }
}
