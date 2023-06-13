import { FC, PropsWithChildren } from "react";

export const ListContainer: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div className="w-full grid auto-rows-[_1fr] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-col-6 gap-3 mt-4">
      {children}
    </div>
  );
};
