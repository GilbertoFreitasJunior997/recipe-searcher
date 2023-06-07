import { Image } from "./image";
import { Ingredient } from "./ingredient";

export type Recipe = {
  label: string;
  image: string;
  images: {
    THUMBNAIL: Image;
    SMALL: Image;
    REGULAR: Image;
  };
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalCO2Emissions: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
};
