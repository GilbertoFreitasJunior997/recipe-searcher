import { useCallback } from "react";
import { useRecipes } from "../../store/use-recipes";
import { RecipeCard } from "../recipe-card";
import { LoadingCard } from "../loading-card";

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

  const loadingTemplate = Array(10)
    .fill(0)
    .map((_, index) => <LoadingCard key={index} />);

  const cards = recipes.map((recipe) => (
    <RecipeCard key={recipe.url} recipe={recipe} />
  ));

  return (
    <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-col-6 gap-3 mt-4">
      {loading ? loadingTemplate : cards}
    </div>
  );
};
