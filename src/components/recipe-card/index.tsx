import { FC, useCallback } from "react";
import { RecipeCardProps } from "./types";
import { Card } from "../card";
import { useRecipes } from "../../store/use-recipes";

export const RecipeCard: FC<RecipeCardProps> = (props) => {
  const { recipe } = props;
  const { label, image } = recipe;

  const setSelectedRecipe = useRecipes(
    useCallback((s) => s.setSelectedRecipe, [])
  );

  const onRecipeClick = () => {
    setSelectedRecipe(recipe);
  };

  return (
    <Card
      onClick={onRecipeClick}
      className="hover:scale-105 transition-all cursor-pointer"
      header={
        <img
          src={image}
          alt="food image"
          className="rounded-t-lg w-full h-full bg-slate-700 object-cover bg-center"
        />
      }
      footer={
        <div className="w-full h-full bg-blue-950 flex items-center justify-center rounded-b-lg p-1">
          {label}
        </div>
      }
    />
  );
};
