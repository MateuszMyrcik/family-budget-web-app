import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const WithAuthProvider = ({ children }: Props) => {
  return <>{children}</>;
};
