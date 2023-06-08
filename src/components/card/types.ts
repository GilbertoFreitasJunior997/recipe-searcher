import { ReactNode } from "react";

export type CardProps = {
  header: ReactNode;
  footer: ReactNode;

  onClick?(): void;
  className?: string;
};
