import { axiosInstance } from "./axios";
import { ApiResponse } from "./types/api-response";
import { RecipeResponse } from "./types/recipe-response";
import { APP_KEYS } from "./utils";

export const getRecipes = async (q: string) =>
  (
    await axiosInstance.get<ApiResponse<RecipeResponse>>(
      `?type=public&q=${q}${APP_KEYS}`
    )
  ).data;
