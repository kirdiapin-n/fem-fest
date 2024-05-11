import { IMAGES } from "../constants/images";

export const getRandomImage = (): string => {
  const randomIndex = Math.floor(Math.random() * IMAGES.length);

  return IMAGES[randomIndex].src;
};
