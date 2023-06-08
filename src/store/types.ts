import { Recipe } from "../api/types/recipe";

export type UseRecipesProps = {
  loading: boolean;
  recipes: Recipe[];
  selectedRecipe?: Recipe;
};

export type UseRecipeActions = {
  setRecipes(recipes: Recipe[]): void;
  setLoading(loading: boolean): void;
  setSelectedRecipe(selectedRecipe?: Recipe): void;
};

export type UseRecipeStoreType = UseRecipesProps & UseRecipeActions;
