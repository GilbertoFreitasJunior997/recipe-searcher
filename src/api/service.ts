import { axiosInstance } from "./axios";
import { ApiResponse } from "./types/api-response";
import { Recipe } from "./types/recipe";
import { APP_KEYS } from "./utils";

export const getRecipes = async (q: string) =>
  (
    await axiosInstance.get<ApiResponse<Recipe>>(
      `?type=public&q=${q}${APP_KEYS}`
    )
  ).data;
