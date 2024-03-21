import axios from "axios";
import { AxiosError } from "axios";

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: Photo[];
}

interface Photo {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: User;
  current_user_collections: any[];
  urls: Urls;
  links: Links;
}

interface User {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string;
  profile_image: ProfileImage;
  links: Links;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface Links {
  self: string;
  html: string;
  photos?: string;
  likes?: string;
  download?: string;
}

export const unsplash = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
  },
});

export async function fetchImages(query: string): Promise<UnsplashResponse> {
  try {
    const response = await unsplash.get<UnsplashResponse>("/search/photos", {
      params: {
        query: query,
        orientation: "landscape",
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      // Axios error occurred
      console.error("Axios error:", error.message);
    } else {
      // Other types of errors
      console.error("Non-Axios error:", error);
    }
    // Return a default or empty UnsplashResponse object
    return { results: [], total: 0, total_pages: 0 }; // Modify as per UnsplashResponse structure
  }
}
