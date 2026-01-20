import { Platform } from "components/components/Platforms/platforms.types";

export const generateRandomCode = (length = 6) => {
  const numberChars = "0123456789";

  let code = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numberChars.length);
    code += numberChars[randomIndex];
  }

  return code;
};

export const validateEmail = (email: string) => {
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

