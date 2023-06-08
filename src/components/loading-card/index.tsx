import { Card } from "../card";

export const LoadingCard = () => {
  return (
    <Card
      header={
        <div className="bg-gray-600 w-full h-full animate-pulse rounded-t-lg" />
      }
      footer={
        <div className="bg-gray-700 w-full h-full animate-pulse flex items-center justify-center rounded-b-lg">
          <div className="bg-gray-600 w-4/5 h-4 animate-pulse rounded-full" />
        </div>
      }
    />
  );
};
