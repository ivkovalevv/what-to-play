import { Platform } from "components/components/Platforms/platforms.types";

export interface Game {
  id: number;
  name: string;
  description: string;
  slug: string;
  released: string;
  background_image: string;
  rating: number;
  platforms: Platform[];
  website: string;
}

export interface Screenshot {
  id: number;
  image: string;
}