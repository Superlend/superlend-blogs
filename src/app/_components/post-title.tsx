import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-adaptive">
      {children}
    </h1>
  );
}
