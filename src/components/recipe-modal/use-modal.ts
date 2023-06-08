import { useCallback, useEffect } from "react";
import { UseModalParams } from "./types";
import { useRecipes } from "../../store/use-recipes";

export const useModal = (params: UseModalParams) => {
  const { isOpen } = params;

  const setSelectedRecipe = useRecipes(
    useCallback((s) => s.setSelectedRecipe, [])
  );

  const handleModalClose = useCallback(() => {
    setSelectedRecipe(undefined);
  }, []);

  const onEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleModalClose();
      }
    },
    [handleModalClose]
  );

  // prevents body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // event for "ESCAPE" key
  useEffect(() => {
    if (isOpen) document.body.addEventListener("keydown", onEsc);

    return () => {
      document.body.removeEventListener("keydown", onEsc);
    };
  }, [isOpen, onEsc]);

  return { handleModalClose };
};
