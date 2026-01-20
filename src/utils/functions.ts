import { Platform } from "components/components/Platforms/platforms.types";
import { Rating } from "components/components/Ratings/ratings.types";


export const formatedDate = (date: string): string => {
  return date.split("-").reverse().join(".");
}

export const generateRandomCode = (length: number = 6): string => {
  const numberChars = "0123456789";

  let code: string = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numberChars.length);
    code += numberChars[randomIndex];
  }

  return code;
};


export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};


export const convertingPlatformsList = ({ platforms = [] }: {platforms: Platform[]}): string[] =>  {
  const categories = ["PlayStation", "Xbox", "macOS", "Nintendo", "PC", "Linux"];
  const uniqueCategories = new Set<string>();

  platforms.map((platform: Platform) => {
    const platformName = platform.platform.name;
    
    for(const category of categories){
      if(platformName.includes(category)){
        uniqueCategories.add(category);
      };
    };
  });

  return Array.from(uniqueCategories);
}

export const convertingRatingsList = (ratings: Rating[] = []): Rating[] => {
  const RATING_LABELS = {
    exceptional: 'Top',
    recommended: 'Good',
    meh: 'Ok',
    skip: 'Bad',
  };

  let convertingRatings = ratings.map((rating) => ({
    ...rating,
    title: RATING_LABELS[rating.title as keyof typeof RATING_LABELS],
  }))

  return convertingRatings;
}

export const getRatingColor = (rating: number): string => {
  const RATING_THRESHOLDS = {
    BAD: 2.5,
    OK: 3.5,
    GOOD: 4.5,
  } as const;

  if(rating < RATING_THRESHOLDS.BAD) return "Bad";
  if(rating < RATING_THRESHOLDS.OK) return "Ok";
  if(rating < RATING_THRESHOLDS.GOOD) return "Good";
  return "Top";
};

