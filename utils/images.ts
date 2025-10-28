import { IMAGES_2024_FEM_FEST, IMAGES_2025_FEM_SABAT } from "constants/images";
import { StaticImageData } from "next/image";

const getRandomImage = (images: StaticImageData[]): string => {
  const randomIndex = Math.floor(Math.random() * images.length);

  return images[randomIndex].src;
};

export const getRandomImageFor2024FemFest = () => {
  return getRandomImage(IMAGES_2024_FEM_FEST);
};

export const getRandomImageFor2025FemSabat = () => {
  return getRandomImage(IMAGES_2025_FEM_SABAT);
};
