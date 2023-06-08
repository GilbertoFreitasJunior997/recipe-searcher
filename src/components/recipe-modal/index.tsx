import { useCallback, useRef } from "react";
import { useRecipes } from "../../store/use-recipes";
import { useModal } from "./use-modal";

export const RecipeModal = () => {
  const recipe = useRecipes(useCallback((s) => s.selectedRecipe, []));
  const isOpen = !!recipe;
  const modalRef = useRef<HTMLDivElement>(null);

  const { handleModalClose } = useModal({
    isOpen,
  });

  if (!isOpen) return null;

  const { label, image, ingredients } = recipe;

  const onCloseClick = () => {
    handleModalClose();
  };

  return (
    <div className="bg-gray-950/25 fixed w-screen h-screen top-0 left-0 flex items-center justify-center">
      <div
        ref={modalRef}
        className="w-[40rem] h-[45rem] max-h-[90vh] max-w-[95vw] animate-scale-up flex flex-col shadow rounded-xl bg-gradient-to-t from-gray-900 to-blue-950"
      >
        <div className="px-8 py-4 flex justify-between items-center shadow">
          <div>
            <h3 className="text-xl"> Recipe - {label} </h3>
          </div>
          <div>
            <button
              onClick={onCloseClick}
              className="rounded-full hover:bg-gray-900 active:bg-gray-950 transition-colors w-6 h-6 flex items-center justify-center"
            >
              <i className="fa fa-close" />
            </button>
          </div>
        </div>
        <div className="flex-grow px-3 overflow-auto flex flex-col w-full">
          <div className="flex flex-row pt-5 gap-4">
            <div className="w-2/5 my-auto">
              <img
                src={image}
                alt="Recipe image"
                className="rounded-full w-full aspect-square"
              />
            </div>
            <div className="w-3/5">
              <h5 className="text-xl">Ingredients</h5>
              <ul>
                {ingredients.map((ingredient) => (
                  <li key={ingredient.foodId}>- {ingredient.text}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-5">
            <h5 className="text-xl">Details</h5>
            {!!recipe.dietLabels.length && (
              <div>Diet - {recipe.dietLabels.join(", ")}</div>
            )}
            {!!recipe.url && (
              <div>
                See Original at{" "}
                <a
                  href={recipe.url}
                  target="_blank"
                  className="text-blue-600 border-dotted border-b border-b-blue-600 font-bold"
                >
                  {recipe.source}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
