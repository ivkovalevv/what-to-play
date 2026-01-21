import { Developer } from "components/components/Devepolers/developers.types";
import { Genre } from "components/components/Genres/genres.types";
import { Platform } from "components/components/Platforms/platforms.types";
import { Rating } from "components/components/Ratings/ratings.types";

export interface Game {
  id: number;
  name: string;
  description_raw: string;
  slug: string;
  released: string;
  background_image: string;
  rating: number;
  ratings: Rating[];
  platforms: Platform[];
  website: string;
  developers: Developer[];
  genres: Genre[];
}

export interface Screenshot {
  id: number;
  image: string;
}