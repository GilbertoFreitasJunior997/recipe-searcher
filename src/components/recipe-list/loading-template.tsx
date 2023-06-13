import { LoadingCard } from "../loading-card";
import { ListContainer } from "./list-container";

export const LoadingTemplate = () => {
  return (
    <ListContainer>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <LoadingCard key={index} />
        ))}
    </ListContainer>
  );
};
