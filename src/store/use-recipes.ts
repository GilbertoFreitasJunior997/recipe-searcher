import { create } from "zustand";
import { UseRecipeStoreType } from "./types";

export const useRecipes = create<UseRecipeStoreType>()((set) => ({
  recipes: [],
  setRecipes: (recipes) => set({ recipes }),

  loading: false,
  setLoading: (loading) => set({ loading }),

  selectedRecipe: undefined,
  setSelectedRecipe: (selectedRecipe) => set({ selectedRecipe }),
}));
