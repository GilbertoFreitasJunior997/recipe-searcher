import { useCallback } from "react";
import { useRecipes } from "../../store/use-recipes";
import { RecipeCard } from "../recipe-card";
import { ListContainer } from "./list-container";
import { LoadingTemplate } from "./loading-template";

export const RecipeList = () => {
  const { recipes, loading } = useRecipes(
    useCallback((s) => ({ recipes: s.recipes, loading: s.loading }), [])
  );

  const noRecipesFound = !loading && !recipes.length;

  if (noRecipesFound) {
    return (
      <div className="w-full py-10 text-center pr-0 md:pr-8">
        <h1 className="text-3xl"> No recipes found! </h1>
      </div>
    );
  }

  const cards = recipes.map((recipe) => (
    <RecipeCard key={recipe.url} recipe={recipe} />
  ));

  return loading ? <LoadingTemplate /> : <ListContainer>{cards}</ListContainer>;
};
